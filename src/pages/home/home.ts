import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditsService } from '../../app/services/reddits.service';
import { DetailsPage } from '../details/details';
import { UserServices } from '../../app/services/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  category: any;
  limit: any;
  categories: string[];
  constructor(
    public navCtrl: NavController,
    private redditService: RedditsService,
    private userService: UserServices) {
    this.categories = this.userService.categroies;
  }

  
  ionViewWillEnter() {
    console.log("in WillEnter");
    this.category = this.userService.defaultCategory;
    this.limit = this.userService.defaultLimit;
    this.getData(this.category, this.limit);
  }

  getData(category, limit) {
    this.redditService.getData(category, limit).subscribe(response => {
      this.items = response.data.children;
    });
  }

  onView(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  changeCategory() {
    this.getData(this.category, this.limit);
  }
}
