import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the InnovationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-innovation',
  templateUrl: 'innovation.html',
})
export class InnovationPage {
  innovation

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private innAppBrowser: InAppBrowser) {
    this.innovation = navParams.get('innovation')
  }

  ionViewDidLoad() {
    
  }

  showLink(link) {
    this.innAppBrowser.create(link)
  }

}
