import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user-service'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user
  promise
  otherUser = false

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice:UserService) {
    this.user = navParams.get('profile')

    if (this.user) {
      this.otherUser = true
    } 
  }   

  ionViewDidLoad() {   
        
  } 

  ionViewDidEnter() {
    if (this.otherUser == false) {
    this.user = null
    this.promise = this.userservice.currentUser().then(profile => {
      console.log(profile)
      this.user = profile
      })
    }
  }

  editProfile(){
    this.navCtrl.push('EditProfilePage', {profile: this.user})
  }
}
