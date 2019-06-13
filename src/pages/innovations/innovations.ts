import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InnovationService } from '../../services/innovation-service';

/**
 * Generated class for the InnovationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-innovations',
  templateUrl: 'innovations.html',
})
export class InnovationsPage {
  innovations = []
  promise

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private innovationService: InnovationService) {
    this.promise = this.innovationService.innovations().then(innovations => {
      this.innovations = innovations
    })
  }

  ionViewDidLoad() {
    
  } 

  viewInnovation(innovation) {
    this.navCtrl.push('InnovationPage', {innovation: innovation})
  }
 
  shorten(description: string) { 
    let toReturn = description.split(' ')
 
    if (toReturn.length > 25) {
      return toReturn.slice(0, 25).join(' ') + ' ...'
    }
 
    return description
  }

}
