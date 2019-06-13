import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, NavController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UserService } from '../services/user-service';
import { Firebase } from '@ionic-native/firebase';
import {data} from './app.values'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoadingPage';
  loggedIn = false
  @ViewChild('content') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private alertController: AlertController, private userService: UserService,
    private events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide(); 

      this.userService.currentUser().then(profile => {
        console.log(profile)
        if (profile) {
          if (profile.active) {
            this.loggedIn = true
            data.profile = profile
            this.nav.setRoot('ReportsPage')
          } else {
            this.nav.setRoot('SlidesPage')
            this.userService.logout()
          }
            
        } else {
          this.rootPage = 'SlidesPage'
        }
      }).catch(err => {
        console.log(err)
        this.rootPage = 'SlidesPage'
      })
    });

    this.events.subscribe('loggedIn', () => {
      this.loggedIn = true
    })
  }

  logout() {
    this.alertController.create({
      title: 'Logout',
      message: 'Are you sure you  want to logout?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          data.profile = {}
          this.loggedIn = false
          this.userService.logout()
          this.nav.setRoot('HomePage')
        }
      }, 'No']
    }).present()
  }

  social() {
  this.nav.push('SocialFeedPage')
  }

  about() {
    this.nav.push('AboutPage')
  }

  members() {
    this.nav.push('StartupsPage')
  }

  profile(){
    this.nav.push('ProfilePage')
    
  }

  notifications(){
    this.nav.push('NotificationsPage')  
  }
  programmes () {
    this.nav.push('HomePage', {loggedIn: true})
  }

  bookmarks() {

  }
  
}

