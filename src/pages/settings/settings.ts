import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage} from '../about/about';
import { UserServices } from '../../app/services/user.service';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  items: any;
  categories: string[];
  limits: number[];

  constructor(
    public navCtrl: NavController,
    private userService: UserServices ) {
      
    this.category = this.userService.defaultCategory;
    this.limit = this.userService.defaultLimit;
    this.categories = this.userService.categroies;
    this.limits = this.userService.limits;
    }

  setDefaults() {
    console.log(this.category);
    console.log(this.limit);
    this.userService.defaultCategory = this.category;
    this.userService.defaultLimit = this.limit;
    console.log(this.userService.defaultCategory);
    console.log(this.userService.defaultLimit);

  }

  viewAbout() {
    this.navCtrl.push(AboutPage);
  }
}
