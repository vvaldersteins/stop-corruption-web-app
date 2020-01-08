/**
 * Import Angular libraries.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Import custom pages.
 */
import { MainComponent } from './pages/main.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/lv',
    pathMatch: 'full'
  },
  {
    path: ':lang',
    component: MainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
