import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Alert, AlertController } from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user-service';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
form: FormGroup
profile
promise
user
submitted 
  constructor(public navCtrl: NavController,public alertController:AlertController,public userService:UserService, public navParams: NavParams, public formmBuilder:FormBuilder, public loadingCntrl:LoadingController) {
    this.form = formmBuilder.group({
      name: ['',[Validators.required]],
      username: ['',[Validators.email]],
      phone: ['',[Validators.required]],
      about: ['',[Validators.required]],
      dob:['',[]],
      ethnicityId:['',[Validators.required]],
      genderId:['',[Validators.required]]
    })

    this.profile = navParams.get('profile')

    if (this.profile.gender) {
      this.profile.gender = this.profile.gender.id
    }

    if (this.profile.ethnicity) {
      this.profile.ethnicity = this.profile.ethnicity.id
    }
    this.form.patchValue(this.profile)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  save(){
    console.log(this.form.value)
    
    if(this.form.valid){
      this.loadingCntrl.create({
        content : "saving profile",
        dismissOnPageChange: true
      }).present()
      
      this.promise = this.userService.setProfile(this.form.value).then( profileUpdate => {
        this.profile = profileUpdate
      console.log(profileUpdate);
      this.navCtrl.pop()
     })
      
    }else{
      this.alertController.create({
        title: 'Error',
        message: "Please fill all fields correctly",
        buttons: ['Ok']
      }).present()

    }
  }

  changePassword(){
    this.navCtrl.push('ChangePasswordPage')
  }

}
