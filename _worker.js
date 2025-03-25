export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // If the request is for a static asset, serve it directly
    if (url.pathname.includes('.')) {
      return env.ASSETS.fetch(request);
    }
    
    // Add trailing slash to paths that don't have it
    if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
      const newUrl = new URL(request.url);
      newUrl.pathname += '/';
      return Response.redirect(newUrl.toString(), 301);
    }
    
    // Add index.html to paths that end with slash
    if (url.pathname.endsWith('/')) {
      const newUrl = new URL(request.url);
      newUrl.pathname += 'index.html';
      request = new Request(newUrl.toString(), request);
    }
    
    return env.ASSETS.fetch(request);
  }
}
