import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Akema';
  constructor() {
    const config = {
      apiKey: 'AIzaSyAqXRU2qPmcydmTlXWmvcNeiF0_kpEXM2w',
      authDomain: 'ekema-8f147.firebaseapp.com',
      databaseURL: 'https://ekema-8f147.firebaseio.com',
      projectId: 'ekema-8f147',
      storageBucket: 'ekema-8f147.appspot.com',
      messagingSenderId: '449049163254',
    };
    firebase.initializeApp(config);
  }
}
