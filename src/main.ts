// Angular core method for bootstrapping standalone application
import { bootstrapApplication } from '@angular/platform-browser';

// Import app configuration (includes router, HttpClient, zone)
import { appConfig } from './app/app.config';

// Root component of the application
import { AppComponent } from './app/app.component';

// Bootstraps the AppComponent using the defined configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Log any errors that occur during boot
