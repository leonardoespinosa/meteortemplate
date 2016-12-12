import { Route } from '@angular/router';
 
import { AppComponent } from './web/app.component';
import { Layout } from './web/layout/layout.component';
import { Dashboard } from './web/dashboard/dashboard.component';
 
export const routes: Route[] = [
  { path: '', redirectTo: 'app', pathMatch: 'full'}, 
  { path: 'app', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard }
  ]}
];