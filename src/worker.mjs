export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.endsWith('.html')) {
      url.pathname = url.pathname.replace(/(?:index)?\.html$/, '').replace(/\/$/, '') + '/';
      return Response.redirect(url.toString(), 301);
    }
    const response = await env.ASSETS.fetch(request);
    const type = response.headers.get('content-type') || '';
    if (response.status !== 304 && response.status !== 204 && (type.includes('text/html') || url.pathname === '/sitemap.xml' || url.pathname === '/robots.txt')) {
      const text = (await response.text()).replaceAll('https://site.example', (env.SITE_URL || url.origin).replace(/\/$/, ''));
      const headers = new Headers(response.headers);
      headers.delete('content-length');
      headers.delete('content-encoding');
      headers.delete('etag');
      headers.set('X-Content-Type-Options', 'nosniff');
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data:; style-src 'self'; font-src 'self'; script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' https://wa.me");
      return new Response(text, { status: response.status, headers });
    }
    return response;
  }
};
