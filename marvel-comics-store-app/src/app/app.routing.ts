import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
  /*  { path: '', component: } */
];

/* export const routing: ModuleWithProviders = RouterModule.forRoot(App_ROUTES); */
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);