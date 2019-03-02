/**
 * Import Angular libraries.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Import third-party libraries.
 */
import { ToastrModule } from 'ngx-toastr';

/**
 * Import routing.
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * Import custom components.
 */
import { AppComponent } from './app.component';

/**
 * Import custom pages.
 */
import { IUBDataTableComponent } from './pages/IUBDataTable/IUBDataTable.component';

/**
 * Import custom services.
 */
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    IUBDataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
