import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditsService } from './services/reddits.service';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html',
  providers: [RedditsService]
  
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyBytaQqct0eudEzuIJh_wRwJJOQn0mP0y4",
      authDomain: "httpstart-db.firebaseapp.com",
      // SETTING UP FOR FIREBASE CONNECTION
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
