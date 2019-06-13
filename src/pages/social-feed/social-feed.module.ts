import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialFeedPage } from './social-feed';
//import { YoutubefeedsPage} from '../youtubefeeds/youtubefeeds';


@NgModule({
  declarations: [
    SocialFeedPage, 
  ],
  imports: [
    IonicPageModule.forChild(SocialFeedPage),
  ],
})
export class SocialFeedPageModule {}
