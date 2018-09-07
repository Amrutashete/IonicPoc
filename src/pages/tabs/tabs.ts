import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingsPage;

  constructor(private navCtrl: NavController) {}
  
  onLogout() {
    this.navCtrl.popToRoot();
  }
}
