import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, 
      withHashLocation(), // <--- THIS FIXES THE REFRESH 404
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', // This enables the jump to #about
        scrollPositionRestoration: 'enabled' // Returns to top when switching pages
      })), provideClientHydration(withEventReplay())
    
  ]
};
