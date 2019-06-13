import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import { ComponentsModule } from '../../components/components.module';

import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IonicPageModule.forChild(NotificationsPage),
  ],
})
export class NotificationsPageModule {}
