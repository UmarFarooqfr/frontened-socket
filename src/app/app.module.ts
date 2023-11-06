import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './demo-material-module';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:3000', options: {
    transports: ['websocket', 'polling', 'flashsocket']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(socketIoConfig),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
