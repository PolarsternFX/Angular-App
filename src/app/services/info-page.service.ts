import { Injectable } from '@angular/core';

import { InfoPage } from '../interfaces/info-page.interface';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class InfoPageService {

  public info: InfoPage = {};
  loaded: boolean = false;

  public team: any [] = [];

  constructor( public http: HttpClient ) { 

    console.log ('InfoPage Service is currently active');

    this.loadInfo ();
    this.loadTeam ();

    /* Lee el archivo JSON, para ello se importa en el App Module el "HttpClientModule"
    No se ejecuta hasta no visualizar un "Subscribe" */

    /* this.http.get ('assets/data/data-page.json')
    .subscribe ( (res: InfoPage ) => {
      console.log (res);

      /* Como ya es Objeto de JavaScript, se puede acceder a sus Propiedades */
      /* console.log (res.email);
      console.log (res.name);

      /* Luego de las pruebas, se utiliza la Variable "Res" para guardar la Información */

      /* this.loaded = true;
      this.info = res;

      console.log (res);

    }); */

  }

  private loadInfo () {

    /* Lee el archivo JSON, para ello se importa en el App Module el "HttpClientModule"
    No se ejecuta hasta no visualizar un "Subscribe" */

    this.http.get ('assets/data/data-page.json')
    .subscribe ( (res: InfoPage ) => {

      /* Luego de las pruebas, se utiliza la Variable "Res" para guardar la Información */

      this.loaded = true;
      this.info = res;

    });

  }

  private loadTeam () {

    /* Lee el archivo JSON, para ello se importa en el App Module el "HttpClientModule"
    No se ejecuta hasta no visualizar un "Subscribe" */

    this.http.get ('https://appecommerce-82bbe-default-rtdb.firebaseio.com/Team.json')
    .subscribe ( (res: any) => {
      this.team = res;

    });

  }

}
