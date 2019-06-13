import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartupsPage } from './startups';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    StartupsPage,
  ],
  imports: [
    IonicPageModule.forChild(StartupsPage),
    ComponentsModule
  ],
})
export class StartupsPageModule {}
