import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Platform, NavParams } from 'ionic-angular';
import { ReportsService } from '../../services/reports-service';
import { Firebase } from '@ionic-native/firebase';
import { UserService } from '../../services/user-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {FileTransfer} from '@ionic-native/file-transfer'
import {File} from '@ionic-native/file'
declare var window 
declare var Chart

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('downloadLink') downloadLink
  reportDate
  stats: any = {}
  promise
  startupsPage = 'StartupsPage'
  loggedIn
 
  // color = Chart.helpers.color;
	// config = {
	// 		type: 'radar',
	// 		data: {
	// 			labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
	// 			datasets: [{ 
	// 				label: 'My First dataset',
	// 				// backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
	// 				borderColor: window.chartColors.red,
	// 				pointBackgroundColor: window.chartColors.red,
	// 				data: [
	// 					0,0,0,0,0,0
	// 				]
	// 			}, {
	// 				label: 'My Second dataset',
	// 				// backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
	// 				borderColor: window.chartColors.blue,
	// 				pointBackgroundColor: window.chartColors.blue,
	// 				data: [
	// 					0,0,0,0,0,0
	// 				]
	// 			}]
	// 		},
	// 		options: {
	// 			legend: {
	// 				position: 'top',
	// 			},
	// 			title: {
	// 				display: true,
	// 				text: 'Chart.js Radar Chart'
	// 			},
	// 			scale: {
	// 				ticks: {
	// 					beginAtZero: true
	// 				}
	// 			}
	// 		}
	// 	};

  constructor(public navCtrl: NavController, private navParam: NavParams, private reportsService: ReportsService,
    private firebase: Firebase, private userService: UserService, private platform: Platform,
    private iab: InAppBrowser) {
      this.loggedIn = this.navParam.get('loggedIn')
    this.promise = reportsService.stats().then(stats => {
      console.log(stats)
      this.stats = stats
    })
  }

  show(page, key, value) {
    let data = {}
    data[key] = value
    this.navCtrl.push(page, data)
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) {
      this.registerPush().then(() => {
        console.log('Registered for notifications')
      })
    }
    
  }

  share(report){
      this.navCtrl.push('SharePage', {report: report})
  }

  bookmark() {

  }

  sendEmail() {
    // sendgrid.setApiKey()
  }

  registerPush() {
    return this.firebase.getToken().then(token => {
      console.log(token)
      return this.userService.setPush(token)
    })
  }

  login() {
    this.navCtrl.push('LoginPage')
  }
}
