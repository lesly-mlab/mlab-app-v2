import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Platform } from 'ionic-angular';
import { ReportsService } from '../../services/reports-service';
import { Firebase } from '@ionic-native/firebase';
import { UserService } from '../../services/user-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MemberService } from '../../services/member-service';
import {FileTransfer} from '@ionic-native/file-transfer'
import {File} from '@ionic-native/file'
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';
declare var window 
declare var Chart

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
  @ViewChild('downloadLink') downloadLink
  reportDate
  reports = [
    // {
    //   name: 'Report 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed massa ut ligula fringilla bibendum ac a odio.'
    // },
    // {
    //   name: 'Report 2',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed massa ut ligula fringilla bibendum ac a odio.'
    // }
  ]
  promise
  startups
  downloadPromise

  constructor(public navCtrl: NavController, private reportsService: ReportsService,
    private firebase: Firebase, private userService: UserService, private platform: Platform,
    private iab: InAppBrowser, memberService: MemberService, private fileTransfer: FileTransfer, private file: File,
    private documentViewer: DocumentViewer, private fileOpener: FileOpener) {
    this.promise = reportsService.reports().then(reports => {
      return memberService.featured().then(startups => {
        this.reports = reports
        this.startups = startups

        if (this.reports.length == 0) {
          return {empty: true}
        }
      })   
      
      
    })
  }

  ionViewDidLoad() { 
    if (this.platform.is('cordova')) {
      this.registerPush().then(() => {
        console.log('Registered for notifications') 
      }) 
    } 
    
  }

  download(report) {
    // var dlnk = document.getElementById('dwnldLnk');
    // this.iab.create(report.url);
    // this.downloadLink.nativeElement.href = report.src;
    // this.downloadLink.nativeElement.download = report.name

    // this.downloadLink.nativeElement.click();

    // var url = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
    // window.open(report.src);

    this.platform.ready().then(() => {
      // if (this.platform.is('cordova')) {

      if (this.platform.is('cordova')) {
      console.log('To SAVE: ' + this.file.dataDirectory + report.name )
      this.downloadPromise = this.fileTransfer.create().download(report.url, this.file.dataDirectory + report.name.split(' ').join('') + '-' + new Date().getDate() + '.pdf').then(entry => {
        let url = entry.toURL()
        console.log(url)
        console.log('To open in inappbrowser')

        return this.fileOpener.open(url, 'application/pdf')
      }).catch(err => {
        console.log(err)
      })
      } else {
        this.iab.create(report.url)
      }
    })
  }

  showStartup(startup) {
    this.navCtrl.push('StartupPage', {startup: startup})
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
}
