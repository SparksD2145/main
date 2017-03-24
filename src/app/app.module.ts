import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import 'meteor-client';

import { IonicApp, IonicModule, Platform } from 'ionic-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  providers: [],
  bootstrap: [ IonicApp ]
})
export class AppModule {}
