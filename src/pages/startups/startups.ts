import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberService } from '../../services/member-service';

/**
 * Generated class for the StartupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startups',
  templateUrl: 'startups.html',
})
export class StartupsPage {
  allstartups = []
  startups = []
  promise
  filter = 'current'
  alumniCount = 0
  loading = true

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private membersService: MemberService) {
    this.promise = this.membersService.startups().then(startups => {
      this.allstartups = startups
      this.filtered('current')
      console.log(startups)
      this.loading = false
    })
  }

  ionViewDidLoad() {
    
  } 

  viewStartup(startup) {
    this.navCtrl.push('StartupPage', {startup: startup})
  }
 
  shorten(description: string) { 
    if (description) {
      let toReturn = description.split(' ')
 
      if (toReturn.length > 25) {
        return toReturn.slice(0, 25).join(' ') + ' ...'
      }
    }
 
    return description
  }

  filtered(filter) {
    this.alumniCount = 0
    this.startups = this.allstartups.filter(startup => {
      if (startup.alumni) {
        this.alumniCount += 1
      }

      if (filter == 'current') {
        return !startup.alumni
      } else if (filter == 'alumni') {
        return startup.alumni
      }
    })
  }
}
