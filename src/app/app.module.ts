/**
 * Import Angular libraries.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Import third-party libraries.
 */
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
