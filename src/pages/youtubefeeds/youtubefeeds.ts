import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { SocialfeedServiceProvider } from '../../providers/socialfeed-service/socialfeed-service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-youtubefeeds',
  templateUrl: 'youtubefeeds.html',
})
export class YoutubefeedsPage {

  videos = [];

  constructor(public navCtrl: NavController, public SocialfeedService: SocialfeedServiceProvider, public navParams: NavParams) {
    console.log('Getting videos');
    this.SocialfeedService.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data.items;
    });
  }

  viewVideo(video) { 
    this.navCtrl.push('YoutubePlayPage', {video: video})
  }

};