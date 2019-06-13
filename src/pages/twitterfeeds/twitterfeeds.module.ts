import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterfeedsPage } from './twitterfeeds';

@NgModule({
  declarations: [
    TwitterfeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(TwitterfeedsPage),
  ],
})
export class TwitterfeedsPageModule {}
