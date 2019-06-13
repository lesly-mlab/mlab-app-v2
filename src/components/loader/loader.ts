import { Component, Input, SimpleChanges } from '@angular/core';
import {LoadingController, AlertController, ToastController} from 'ionic-angular'

/**
 * Generated class for the LoaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loader',
  templateUrl: 'loader.html'
})
export class LoaderComponent {
  @Input() promise: Promise<any> 
  @Input() success: string
  @Input() progress: string = 'Loading'
  @Input() dialog: Boolean = true
  @Input() handleErrors: Boolean = true
  @Input() empty: Boolean = false
  @Input() emptyMessage: string = 'No results found'

  public loading = false

  constructor(private loadingController: LoadingController, private toastController: ToastController,
    private alertController: AlertController) {
  }

  ngOnChanges(changes: SimpleChanges) { 
    this.empty = false
    
    if (this.promise == null) {
      return 
    }
    if (changes['promise']) {
      
      let loading = this.loadingController.create({
        content: this.progress
      })
      console.log(this.dialog)
      if (this.dialog == true) { 
      loading.present()
    } else {
      this.loading = true
    }

      this.promise.then(data => {
        loading.dismiss()
        this.loading = false

        if (this.success) {
          this.toastController.create({
            message: this.success,
            duration: 3000
          }).present()
        }
        if (data && data['empty'] == true) {
          this.empty = true
        }

        return data
      }).catch(err => {
        console.log(err)
        loading.dismiss()
        if (!this.handleErrors)
          return new Promise((resolve, reject) => {
            reject(err)
          })

        let message = 'An unexpected error occurred'

        if (err.message) {
          message = err.message
        }

        this.alertController.create({
          title: 'Error',
          message: message,
          buttons: ['Ok']
        }).present()
      })
      
    }
  }

}
