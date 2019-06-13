import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersPage } from './members';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MembersPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersPage),
    ComponentsModule
  ],
})
export class MembersPageModule {}
