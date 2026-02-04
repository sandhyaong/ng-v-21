import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Server, // Changed from Prerender to Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
