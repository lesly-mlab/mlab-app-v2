import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReportsService } from '../../services/reports-service';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
  recipients = []
  recipient = ""
  form 
  promise
  report
  constructor(public navCtrl: NavController,public alertController:AlertController,public formBuilder:FormBuilder ,public navParams: NavParams,
    private reportService: ReportsService) {
    this.form = this.formBuilder.group({
      email: ['',[Validators.email]]
    });
    this.report = navParams.get('report')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  addPerson(recipient){
    if(this.form.valid){
      this.recipients.push(recipient.value)
      console.log(recipient)
      this.recipient = ""
      recipient.value = ""
    }else{
      this.alertController.create({
        title: 'Not Valid',
        message: "Please provide a valid email",
        buttons: ['Ok']
      }).present()
    }

  }

  removePerson(index){
    this.recipients.splice(index,1)
  }

  share(){
    if(this.recipients.length > 0){
      this.promise = this.reportService.share(this.report.id, this.recipients).then(() => {
        this.navCtrl.pop()
      })
    }
  }

}
