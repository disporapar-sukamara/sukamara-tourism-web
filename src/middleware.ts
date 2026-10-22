import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  const isProtected =
    (pathname === '/admin' ||
      pathname.startsWith('/admin/') ||
      pathname.startsWith('/keystatic') ||
      pathname.startsWith('/api/keystatic')) &&
    !pathname.startsWith('/api/keystatic/github');

  if (!isProtected) {
    return next();
  }

  const expectedUser = (import.meta.env.ADMIN_USER as string | undefined) || 'admin';
  const expectedPass = (import.meta.env.ADMIN_PASSWORD as string | undefined) || 'adminsukamara';

  const authHeader = context.request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Basic ')) {
    try {
      const base64Credentials = authHeader.slice(6).trim();
      const decoded = atob(base64Credentials);
      const colonIndex = decoded.indexOf(':');
      if (colonIndex !== -1) {
        const user = decoded.slice(0, colonIndex);
        const pass = decoded.slice(colonIndex + 1);
        if (user === expectedUser && pass === expectedPass) {
          if (pathname === '/admin' || pathname === '/admin/') {
            return context.redirect('/keystatic');
          }
          return next();
        }
      }
    } catch {
      // Invalid base64 or decoding error
    }
  }

  return new Response('Akses Ditolak: Masukkan username dan password admin.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Keystatic CMS Sukamara"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
});
