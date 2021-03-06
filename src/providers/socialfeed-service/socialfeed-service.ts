import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
/*
  Generated class for the SocialfeedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
// @Injectable({
//   providedIn: 'root'
// });

export class SocialfeedServiceProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello SocialfeedServiceProvider Provider');
  // }

// tslint:disable-next-line:no-inferrable-types
channelId: string = 'UCn7NMZOakw4N6pQ-tQ9nkMQ';
// tslint:disable-next-line:no-inferrable-types
maxRes: string = '5';
// tslint:disable-next-line:no-inferrable-types
googleToken: string  = 'AIzaSyAlgBKSHbU5ANHTjG_QMxcO0U5X3gS1ucs';
search = 'mLabSAStudio';
posts: any = [];

  constructor(public http: Http) {
   }
   getVideos() {
       // tslint:disable-next-line:max-line-length
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlgBKSHbU5ANHTjG_QMxcO0U5X3gS1ucs&channelId=UCn7NMZOakw4N6pQ-tQ9nkMQ&part=snippet,id&order=date&maxResults=50'; // + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxRes;
  //   this.http.get(url).subscribe(data => {this.posts = this.posts.push({list: data});
  //   // tslint:disable-next-line:align
  //   console.log(this.posts);
  // });

    return this.http.get(url).pipe(map(response => {
      return response.json();
    }));
   }

}

// youtubefeeds(){
//   this.navCtrl.push('YoutubefeedsPage')
  
// }

// currentUser(){
//   return this.dpdService.currentUser()
// }
