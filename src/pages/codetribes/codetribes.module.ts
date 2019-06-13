import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodetribesPage } from './codetribes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CodetribesPage,
  ],
  imports: [
    IonicPageModule.forChild(CodetribesPage),
    ComponentsModule
  ],
})
export class CodetribesPageModule {}
