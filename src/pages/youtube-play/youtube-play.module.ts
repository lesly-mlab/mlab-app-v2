import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubePlayPage } from './youtube-play';

@NgModule({
  declarations: [
    YoutubePlayPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubePlayPage),
  ],
})
export class YoutubePlayPageModule {}
