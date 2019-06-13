import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberService } from '../../services/member-service';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {
  promise
  startup
  members = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private membersService: MemberService, zone: NgZone) {
      this.startup = navParams.get('startup')
      this.promise = this.membersService.members(this.startup.id).then(members => {

        this.members = members
        console.log(this.members)

        if (this.members.length == 0) {
          return {empty: true}
        }
      })
  }

  ionViewDidLoad() {
    
  }

  viewMember(member) {
    this.navCtrl.push('ProfilePage', {profile: member})
  }

}
