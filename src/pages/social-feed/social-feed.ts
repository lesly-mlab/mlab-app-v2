import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { SocialfeedServiceProvider } from '../../providers/socialfeed-service/socialfeed-service';


@IonicPage()
@Component({
  selector: 'page-social-feed',
  templateUrl: 'social-feed.html',
})

export class SocialFeedPage {

  constructor(public navCtrl: NavController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SocialFeedPage');
  // }

  navigate(){
    //console.log("kkkkkkk");
    this.navCtrl.push('YoutubefeedsPage');
    //this.navCtrl.push(YoutubefeedsPage);
  }

  youtubefeeds(){
    this.navCtrl.push('YoutubefeedsPage')
    
  }

  twitterfeeds(){
    this.navCtrl.push('TwitterfeedsPage')  
  }

  // ngAfterViewInit () {
  //           !function(d,s,id){
  //               var js: any,
  //                   fjs=d.getElementsByTagName(s)[0],
  //                   p='https';
  //               if(!d.getElementById(id)){
  //                   js=d.createElement(s);
  //                   js.id=id;
  //                   js.src=p+"://platform.twitter.com/widgets.js";
  //                   fjs.parentNode.insertBefore(js,fjs);
  //               }
  //           }
  //           (document,"script","twitter-wjs");
  //   }

}
