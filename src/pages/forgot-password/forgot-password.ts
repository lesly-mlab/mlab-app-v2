import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserService } from '../../services/user-service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  email
  promise
  form 

  constructor(public navCtrl: NavController,public alertController:AlertController,public navParams: NavParams, private userService:UserService, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email : ['',[Validators.email]]
    })
  }

  ionViewDidLoad() {
    
  }

  reset(){
    if(this.form.valid){
      this.promise = this.userService.passwordReset(this.email).then(password => 
      {
        this.alertController.create({
          title: "Success",
          message: "Please check your email for your new password",
          buttons: ['Ok']
        }).present()
        this.navCtrl.setRoot('LoginPage')
      })
    }else{
      this.alertController.create({
        title: 'Error',
        message: "Please type in a correct email",
        buttons: ['Ok']
      }).present()
    }
  }

}
