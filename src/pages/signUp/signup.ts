import { Component } from '@angular/core';
import { NavController, LoadingController,  AlertController } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app/services/auth.service';
import { LoginPage } from '../login/login';



@Component({
  selector: 'signUp',
  templateUrl: 'signUp.html'
})
export class SignUpPage {

  constructor(
    public navCtrl: NavController, 
    private authService: AuthenticationService,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController) {

  }
  onSignUp(form: NgForm) {
    var loading = this.loadCtrl.create({
      content:'Signing you in...'
    })
    loading.present();
    this.authService.signUp(form.value.email, form.value.password)
      .then(() => { loading.dismiss();
        this.navCtrl.push(LoginPage);
      })
      .catch(error => { 
        loading.dismiss();
        const alert = this.alertCtrl.create({
        title: 'Signup failed',
        message: error.message,
        buttons: ['OK']   
      });
      alert.present();
    });
  }
}