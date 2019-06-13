import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as json from '../../assets/json/experience.json';
//import { ChatFormComponent } from '../../components/chat-form/chat-form';
import { ChatFormComponent } from '../../components/chat-form/chat-form.component.js';
import { ChatFormInterface } from '../../chat-engine/chat-form-interface.js';
import { Observable } from 'rxjs';
import { ChatForm } from '../../chat-engine/chat-form.js';
//import { ChatFormInterface } from '../chat-engine/chat-form-interface.js';


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage implements ChatFormInterface {
  dropdownList(id: any, formValues: any): Promise<{ name: string; value: string; }[]> | Observable<{ name: string; value: string; }[]> | { name: string; value: string; }[] {
    throw new Error("Method not implemented.");
  }
  dropdownEmpty() {
    throw new Error("Method not implemented.");
  }
    
  
    form;
    @ViewChild('chatForm') chatForm: ChatFormComponent;
  
    constructor() {
      this.form = json['default'];
    }
  
    chatReady() {
      //this.chatForm.setChatListener(this);
      this.chatForm.setChatListener(this.chatForm.form);
      this.chatForm.start();
    }
  
    callAction(action: any, formValues: any) {
      // Actions called here
      // throw new Error("Method not implemented.");
    }
    // tslint:disable-next-line:max-line-length

    
  //   dropdownList(id: any, _formValues: any): Promise<{ name: string; value: string; }[]> | import('rxjs').Observable<{ name: string; value: string; }[]> | { name: string; value: string; }[] {
  //     // Dropdown Lists done here
  //     throw new Error('Method not implemented.');
  //   }
  //   dropdownEmpty() {
  //     // Drop down empty event handled here
  //     throw new Error('Method not implemented.');
  // }

}
