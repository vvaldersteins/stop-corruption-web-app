import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  languages: string[];
  languageNames = {
    en: 'English',
    lv: 'Latviešu',
  };

  private availableLanguages = ['lv', 'en'];
  private sub: Subscription;

  constructor(
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.addLangs(this.availableLanguages);
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('lv');

    this.sub = this.translate.onLangChange.subscribe(({ lang }: LangChangeEvent) => {
      // console.log(languages)
      // this.languages = languages
    });
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('lv');
    this.languages = this.translate.getLangs();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
