import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { IonicModule } from 'ionic-angular';

//import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { MomentModule } from 'angular2-moment';
import { CommonModule } from '@angular/common';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { FormsModule } from '@angular/forms';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { TestingComponent } from './testing/testing';
 

@NgModule({
	declarations: [
		ChatBubbleComponent,
		ChatFormComponent,
		LoaderComponent,
    ChatFormComponent,
    ChatBubbleComponent,
    ChatBubbleComponent,
    TestingComponent	
	],
	imports: [
		CommonModule,
		IonicModule,
		MomentModule,
		FormsModule
	],
	exports: [
		ChatBubbleComponent,
		ChatFormComponent,
		LoaderComponent,
    ChatFormComponent,
    ChatBubbleComponent,
    ChatBubbleComponent,
    TestingComponent
	]
})
export class ComponentsModule {}
