import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import {ServicesComponent} from './services/services.component';
import { HelpComponent } from './help/help.component';

export const router: Routes = [
    {path: '', redirectTo: 'services', pathMatch: 'full'},

 {path: 'services', component: ServicesComponent},
  {path: 'help', component: HelpComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);