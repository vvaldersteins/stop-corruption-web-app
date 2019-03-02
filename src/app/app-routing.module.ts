/**
 * Import Angular libraries.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Import custom pages.
 */
import { IUBDataTableComponent } from './pages/IUBDataTable/IUBDataTable.component';

const routes: Routes = [
  { path: '', component: IUBDataTableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
