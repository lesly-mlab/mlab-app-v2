import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportsPage } from './reports';
import { ComponentsModule } from '../../components/components.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    ReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportsPage),
    ComponentsModule,
    MomentModule
  ],
})
export class ReportsPageModule {}
