import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Events } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms'
import { UserService } from '../../services/user-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form

  constructor(public navCtrl: NavController, public navParams: NavParams,
    formBuilder: FormBuilder, private loadingController: LoadingController,
    private userService: UserService, private alertController: AlertController,
    private events: Events) {
    this.form = formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  
  ionViewDidLoad() {
    
  }

  login() {
    if (this.form.valid) {
      let loading = this.loadingController.create({
        content: 'Logging in...',
        dismissOnPageChange: true
      })

      loading.present()

      this.userService.login(this.form.value.email, this.form.value.password).then(user => {
        loading.dismiss()
        this.events.publish('loggedIn', true)
        this.navCtrl.setRoot('ReportsPage')
        
      }).catch(err => {
        loading.dismiss()
        console.log(err.message)

        this.alertController.create({
          title: 'Error',
          message: err.message,
          buttons: ['Ok']
        }).present()
      }) 
    }
  }

  forgotPassword(){
    this.navCtrl.push('ForgotPasswordPage')
    
  }

}
