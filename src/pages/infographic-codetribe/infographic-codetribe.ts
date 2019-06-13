import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as CanvasJS from '../../app/canvasjs.min';
import { data } from '../../app/app.values';

/**
 * Generated class for the InfographicCodetribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infographic-codetribe',
  templateUrl: 'infographic-codetribe.html',
})
export class InfographicCodetribePage {
  students
  interval
  data1 = {}
  data2 = {}
  options = {
    legend: {
      display: false
  }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.students = navParams.get('students')
  }

  ionViewDidLoad() {
    // let chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   data: [{
    //     type: "pie",
    //     startAngle: 0,
    //     yValueFormatString: "##0\"%\"",
    //     indexLabel: "{label} {y}",
    //     dataPoints: [
    //       { y: (this.students.female / this.students.total) * 100, label: "Startup" },
    //       { y: (this.students.male / this.students.total) * 100, label: "Full Time" }
    //     ]
    //   }]
    // });

    // chart.render();

    // chart = new CanvasJS.Chart("chartContainer2", {
    //   animationEnabled: true,
    //   data: [{
    //     type: "pie",
    //     startAngle: 0,
    //     yValueFormatString: "##0\"%\"",
    //     // indexLabel: "{label} {y}",
    //     dataPoints: [
    //       { y: (this.students.male / this.students.total) * 100, label: "Male" },
    //       { y: (this.students.female / this.students.total) * 100, label: "Female" },
    //       { y: (this.students.other / this.students.total) * 100, label: "Other" }
    //     ]
    //   }]
    // });
    // chart.render();

    let total = this.students.employment.startups + this.students.employment.jobs

    // if (total > 0) {
    // chart = new CanvasJS.Chart("chartContainer3", {
    //   animationEnabled: true,
    //   data: [{
    //     type: "pie",
    //     startAngle: 0,
    //     yValueFormatString: "##0\"%\"",
    //     indexLabel: "{label} {y}",
    //     dataPoints: [
    //       { y: (this.students.employment.startups / total) * 100, label: "Startups" },
    //       { y: (this.students.employment.jobs / total) * 100, label: "Jobs" }
    //     ]
    //   }]
    // });
    // } else {
    //     chart = new CanvasJS.Chart("chartContainer3", {
    //       animationEnabled: true,
    //       data: [{
    //         type: "pie",
    //         startAngle: 0,
    //         yValueFormatString: "##0\"%\"",
    //         indexLabel: "{label} {y}",
    //         dataPoints: [
    //           { y: 0, label: "Startups" },
    //           { y: 0, label: "Jobs" }
    //         ]
    //       }]
    //     });
    // }
    // chart.render();

    this.data1 = {
      datasets: [
        {
          data: [Math.round((this.students.male / this.students.total) * 100) ,
          Math.round((this.students.female / this.students.total) * 100) ,
          Math.round((this.students.other / this.students.total) * 100)],
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
            data: [Math.round((this.students.female / this.students.total) * 100),
              Math.round((this.students.male / this.students.total) * 100),
              Math.round((this.students.other / this.students.total) * 100)],
            backgroundColor: [
              '#14676b',
              '#072f30',
              '#95d83d'
              ]
          }
        ],
        labels: ['Male', 'Female', 'Other']
      }
  }

  ionViewDidEnter() {
    this.interval = setInterval(() => {
      this.findCanvases()
    }, 200)
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

  ionViewDidLeave() {
    clearInterval(this.interval)
  }

  showViewStudents() {
    if (data.profile)
      return data.profile['roleId'] == '1774522c1c6e0b65'

    return false
  }

  viewStudents() {
    this.navCtrl.push('CodetribesPage')
  }
}
