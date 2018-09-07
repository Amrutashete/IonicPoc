import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { SignUpPage } from '../signUp/signup';
import {  NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app/services/auth.service';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private authService: AuthenticationService,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController ) {

  }

  onLogin(form: NgForm) {
    var loading = this.loadCtrl.create({
      content:'Loading Your Profile...'
    })
    loading.present();

    this.authService.login(form.value.email, form.value.password)
    .then( data => { 
      loading.dismiss();
      this.navCtrl.push(TabsPage);
      form.reset();
    })
    .catch(error => { 
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Login failed',
        message: error.message,
        buttons: ['OK']
        
      });
      alert.present();
    })
  
  }
  onSignup() {
    this.navCtrl.push(SignUpPage);
  }
 }