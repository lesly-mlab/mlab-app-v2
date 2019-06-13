import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfographicEnterprisePage } from './infographic-enterprise';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    InfographicEnterprisePage,
  ],
  imports: [
    IonicPageModule.forChild(InfographicEnterprisePage),
    ChartModule
  ],
})
export class InfographicEnterprisePageModule {}
