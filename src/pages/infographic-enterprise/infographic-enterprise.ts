import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as CanvasJS from '../../app/canvasjs.min';

/**
 * Generated class for the InfographicEnterprisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infographic-enterprise',
  templateUrl: 'infographic-enterprise.html',
})
export class InfographicEnterprisePage {
  startups
  interval
  data1 = {}
  data2 = {}
  options = {
    legend: {
      display: false
  }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startups = navParams.get('startups')
  }

  ionViewDidLoad() {
    let total = this.startups.male + this.startups.female + this.startups.other
    // let chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   // title: {
    //   //   text: "Basic Column Chart in Angular"
    //   // },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { y: this.startups.male, label: "Male" },
    //       { y: this.startups.female, label: "Female" },
    //       { y: this.startups.other, label: "Other" },
    //     ]
    //   }]
    // });

      
    // chart.render();

    // let chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   // title: {
    //   //   text: "Desktop Search Engine Market Share - 2016"
    //   // },
    //   data: [{
    //     type: "doughnut",
    //     startAngle: 240,
    //     // yValueFormatString: "##0\"%\"",
    //     // indexLabel: "{label} {y}",
    //     dataPoints: [
    //       { y: (this.startups.male / total) * 100 },
    //       { y: (this.startups.female / total) * 100 },
    //       { y: (this.startups.other / total) * 100 }
    //     ]
    //   }]
    // });
    // chart.render();

    // chart = new CanvasJS.Chart("chartContainer2", {
    //   type: "line",
    //   data: {
    //     datasets: [
    //       {
    //         data: [Math.round((this.startups.male / total) * 100),
    //           Math.round((this.startups.female / total) * 100),
    //           Math.round((this.startups.other / total) * 100)]
    //       }
    //     ],
    //     labels: ['One', 'Two', 'Three']
    //   }
    // })

    this.data1 = {
      datasets: [
        {
          data: [Math.round((this.startups.male / total) * 100) ,
          Math.round((this.startups.female / total) * 100) ,
          Math.round((this.startups.other / total) * 100)],
          backgroundColor: [
            '#14676b',
            '#072f30',
            '#95d83d'
            ]
        }
      ],
      labels: ['Male', 'Female', 'Other']
    }

    this.data2 = {
        datasets: [
          {
            data: [Math.round((this.startups.male / total) * 100),
              Math.round((this.startups.female / total) * 100),
              Math.round((this.startups.other / total) * 100)],
            backgroundColor: [
              '#14676b',
              '#072f30',
              '#95d83d'
              ]
          }
        ],
        labels: ['Male', 'Female', 'Other']
      }
  

    // chart = new CanvasJS.Chart("chartContainer2", {
    //   animationEnabled: true,
    //   // title: {
    //   //   text: "Desktop Search Engine Market Share - 2016"
    //   // },
    //   data: [{
    //     type: "doughnut",
    //     startAngle: 240,
    //     // yValueFormatString: "##0\"%\"",
    //     // indexLabel: "{label} {y}",
    //     datasets: [{
    //       data: [(this.startups.male / total) * 100,
    //         (this.startups.female / total) * 100,
    //         (this.startups.other / total) * 100],
    //         backgroundColor: [
    //           'rgba(0, 0, 0, 1)',
    //                 'rgba(1, 0, 0, 1)',
    //                 'rgba(0, 1, 0, 1)',
    //         ]
    //     }
          
    //     ],
    //     // dataPoints: [
    //     //   { y: (this.startups.male / total) * 100 },
    //     //   { y: (this.startups.female / total) * 100 },
    //     //   { y: (this.startups.other / total) * 100 }
    //     // ],
        
    //   }]
    // });
    // chart.render();

    // chart = new CanvasJS.Chart("chartContainer3", {
    //   animationEnabled: true,
    //   // title: {
    //   //   text: "Desktop Search Engine Market Share - 2016"
    //   // },
    //   data: [{
    //     type: "pie",
    //     startAngle: 240,
    //     yValueFormatString: "##0\"%\"",
    //     indexLabel: "{label} {y}",
    //     dataPoints: [
    //       {y: 70, label: "Male"},
    //       {y: 20, label: "Female"},
    //       {y: 10, label: "Other"}
    //     ]
    //   }]
    // });
    // chart.render();

    // chart = new CanvasJS.Chart("chartContainer4", {
    //   animationEnabled: true,
    //   // title: {
    //   //   text: "Desktop Search Engine Market Share - 2016"
    //   // },
    //   data: [{
    //     type: "pie",
    //     startAngle: 240,
    //     yValueFormatString: "##0\"%\"",
    //     indexLabel: "{label} {y}",
    //     dataPoints: [
    //       { y: this.startups.jobs.fulltime.male, label: "Male" },
    //       { y: this.startups.jobs.fulltime.female, label: "Female" },
    //       { y: this.startups.jobs.fulltime.other, label: "Other" }
    //     ]
    //   }]
    // });
    // chart.render();

    
  }

  ionViewDidEnter() {
    this.interval = setInterval(() => {
      this.findCanvases()
    }, 200)
  }

  ionViewDidLeave() {
    clearInterval(this.interval)
  }

  viewStartups() {
    this.navCtrl.push('StartupsPage')
  }

  findCanvases() {
    let canvases = document.getElementsByTagName("canvas")
    for (let i = 0; i < canvases.length; i++) { 
      let canvas = canvases[i]
      this.removeWatermarks(canvas)
    }
  }

  removeWatermarks(canvas) {
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "White";
    ctx.fillRect(0,190,canvas.width,10);
  }

}
