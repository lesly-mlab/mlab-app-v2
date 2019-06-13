import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfographicCodetribePage } from './infographic-codetribe';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    InfographicCodetribePage,
  ],
  imports: [
    IonicPageModule.forChild(InfographicCodetribePage),
    ChartModule
  ],
})
export class InfographicCodetribePageModule {}
