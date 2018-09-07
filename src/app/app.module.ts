import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditsService } from './services/reddits.service';
import { HttpModule } from '@angular/http';
import { LogoutPage } from '../pages/logout/logout';
import { DetailsPage } from '../pages/details/details';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signUp/signup';
import { AuthenticationService } from './services/auth.service';
import { UserServices } from './services/user.service';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    HomePage,
    LogoutPage,
    TabsPage,
    DetailsPage,
    AboutPage,
    LoginPage,
    SignUpPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    LogoutPage,
    TabsPage,
    DetailsPage,
    AboutPage,
    LoginPage,
    SignUpPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RedditsService,
    AuthenticationService,
    UserServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
