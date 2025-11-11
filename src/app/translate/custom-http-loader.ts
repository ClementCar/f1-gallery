import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class CustomHttpLoader implements TranslateLoader {

  getTranslation(lang: string): Observable<any> {
    return new Observable(observer => {
      window.fetch(`/assets/i18n/${lang}.json`)
        .then(response => response.json())
        .then(data => {
          // console.log(`✅ Fichier de traduction chargé : /assets/i18n/${lang}.json`, data);
          observer.next(data);
          observer.complete();
        })
        .catch(err => {
          // console.error(`❌ Erreur de chargement du fichier de traduction pour '${lang}':`, err);
          observer.error(err);
        });
    });
  }
}
