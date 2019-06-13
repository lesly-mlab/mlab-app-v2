import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberService } from '../../services/member-service';

/**
 * Generated class for the CodetribesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codetribes',
  templateUrl: 'codetribes.html',
})
export class CodetribesPage {

  allstudents = []
  students = []
  promise
  filter = 'current'
  alumniCount = 0

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private membersService: MemberService) {
    this.promise = this.membersService.students().then(students => {
      this.allstudents = students
      this.filtered('current')
      console.log(students)
    })
  }

  ionViewDidLoad() {
    
  } 

  viewMember(student) {
    this.navCtrl.push('ProfilePage', {profile: student})
  }

  viewStartup(startup) {
    this.navCtrl.push('StartupPage', {startup: startup})
  }
 
  shorten(description: string) { 
    let toReturn = description.split(' ')
 
    if (toReturn.length > 25) {
      return toReturn.slice(0, 25).join(' ') + ' ...'
    }
 
    return description
  }

  filtered(filter) {
    this.alumniCount = 0
    this.students = this.allstudents.filter(startup => {
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
