import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModalDetalhesComponent } from './components/modal-detalhes/modal-detalhes.component';

const APP_ROUTES: Routes = [
    { path: 'modal-detalhes', component: ModalDetalhesComponent }
];

/* export const routing: ModuleWithProviders = RouterModule.forRoot(App_ROUTES); */
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);