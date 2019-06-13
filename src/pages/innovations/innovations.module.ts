import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnovationsPage } from './innovations';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InnovationsPage,
  ],
  imports: [
    IonicPageModule.forChild(InnovationsPage),
    ComponentsModule
  ],
})
export class InnovationsPageModule {}
