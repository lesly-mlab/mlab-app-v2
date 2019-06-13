import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user-service';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  form
  email
  password
  confirmPassword
  promise
  subimmited = true

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    private userService: UserService) {

    this.form = new FormGroup({
      oldPassword:  new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('',[Validators.required, this.passwordMatch('password')])
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  changePassword(){
    if (this.form.valid) {
      this.subimmited = true
      this.promise = this.userService.changePassword(this.form.value.oldPassword, this.form.value.password).then(() => {
        this.navCtrl.pop()
      })
    }
  }

  passwordMatch(field_name):ValidatorFn {

    return (control:AbstractControl):{ [key:string]: any} =>{
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if(!isValid){
        return {'equalTo':{isValid}}
      }
      else{
        return null;
      }
    }
  }

}
