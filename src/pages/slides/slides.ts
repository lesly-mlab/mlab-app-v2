import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  slides = [
    {
      title: "What is mLab?",
      description: "mLab SA is a registered non-profit organisation that is powered by the World Bank, Department of Science and Technology, The Innovation Hub and the Ministry of Foreign Affairs of Finland amongst other key stakeholders. We also are a level 1 B-BBEE company with Public Benefit ​O​rganization (PBO) status​.",
      image: "assets/imgs/mlab-logo.png",
    },
    {
      title: "Enterprise Development",
      description: "Is a Lab Support programme dedicated to the support and development of new enterprises based on a digital asset or service.",
      image: "assets/imgs/startup.png",
    },
    {
      title: "Skills Development",
      description: "<b>Codetribe</b> is a full-time work based skills development programme for aspiring mobile application developers. It is a practical, blended learning programme, focusing on Mobile Solutions Development, SCRUM Agile and Cloud technologies",
      image: "assets/imgs/student.png",
    },
    {
      title: "Innovation Management",
      description: "<b>Innovation Work</b> activities include projects with socioeconomic benefit that mLab SA is enlisted to assist in developing.",
      image: "assets/imgs/innovate.png",
      showContinue: true
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  goToHome() {
    this.navCtrl.setRoot('HomePage')
  }

}
