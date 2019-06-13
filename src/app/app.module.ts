import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { UserService } from '../services/user-service';
import { DPDService } from '../services/dpd-service';
import { ReportsService } from '../services/reports-service';
import { MemberService } from '../services/member-service';
import { Firebase } from '@ionic-native/firebase';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ChartModule } from 'angular2-chartjs';
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { InnovationService } from '../services/innovation-service';
import { FileTransfer } from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file'
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileOpener } from '../../node_modules/@ionic-native/file-opener';
import { YoutubefeedsPage } from '../pages/youtubefeeds/youtubefeeds';
import { SocialfeedServiceProvider } from '../providers/socialfeed-service/socialfeed-service';
// import { SociaialfeedsProvider } from '../providers/sociaialfeeds/sociaialfeeds';
// import { SociaifeedServiceProvider } from '../providers/sociaifeed-service/sociaifeed-service';
// import { SocialfeedServiceProvider } from '../providers/socialfeed-service/socialfeed-service';
// import { RouterModule, Routes } from '@angular/core/core';

// const appRoutes: Routes = [
//   { path: 'youtubefeedspage', component: YoutubefeedsPage}]
  

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule,
    HttpModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    DPDService,
    ReportsService,
    MemberService,
    InnovationService,
    Firebase,
    InAppBrowser,
    FileTransfer,
    File,
    DocumentViewer,
    FileOpener,
    SocialfeedServiceProvider
  ]
})
export class AppModule {}
