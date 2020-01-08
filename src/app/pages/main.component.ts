import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {
  languages: string[];
  languageNames = {
    en: 'English',
    lv: 'Latviešu',
  };
  private languageKeys = {
    en: 'en',
    lv: 'lv',
  };

  private sub: Subscription;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  /**
   * Sets up languages and subscribes to language URL changes.
   */
  ngOnInit(): void {
    this.setupLanugages();

    this.route.params.subscribe(({ lang }: Params) => {
      if (lang !== this.translate.currentLang) {
        this.translate.use(lang);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * Sets up all available and default lanuages.
   */
  private setupLanugages(): void {
    this.translate.addLangs(Object.keys(this.languageKeys));
    // this language will be used as a fallback when a translation isn't found in the current language

    this.sub = this.translate.onLangChange.subscribe(({ lang }: LangChangeEvent) => {
      this.router.navigate([lang]);
    });
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.route.snapshot.params.lang);
    this.translate.setDefaultLang('lv');
    this.languages = this.translate.getLangs();
  }
}
