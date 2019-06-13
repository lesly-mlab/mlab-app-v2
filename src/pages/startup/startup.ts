import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the StartupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startup',
  templateUrl: 'startup.html',
})
export class StartupPage {
  startup
  membersPage = 'MembersPage'

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private innAppBrowser: InAppBrowser) {
    this.startup = navParams.get('startup')
  }

  ionViewDidLoad() {
    
  }

  members() {
    this.navCtrl.push('MembersPage', {startup: this.startup})
  }

  showLink(link) {
    this.innAppBrowser.create(link)
  }

}
