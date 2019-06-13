import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the YoutubePlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube-play',
  templateUrl: 'youtube-play.html',
})
export class YoutubePlayPage {
  video
  videoUrl

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.video = navParams.get('video')
    this.videoUrl = 'https://www.youtube.com/embed/' + this.video.id.videoId
  }

  ionViewDidLoad() {
    
  }
  
}
