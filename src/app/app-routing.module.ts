/**
 * Import Angular libraries.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Import custom pages.
 */
import { MainComponent } from './pages/main.component';
import { IUBDataTableComponent } from './pages/IUBDataTable/IUBDataTable.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'lv',
    pathMatch: 'full'
  },
  {
    path: ':lang',
    component: MainComponent,
    children: [
      { path: '',
        redirectTo: 'data',
        pathMatch: 'full'
      },
      { path: 'data',
        component: IUBDataTableComponent,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
