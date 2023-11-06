import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'socket-io';
  notification1:any=[]
  notification2:any=[]

  constructor(private readonly socketService: SocketService, private readonly router: Router,) {
    socketService.checkConnection();
  this.socketService.checkNotification((data: any) => {
    if(data.user === "User1"){
      this.notification1.push(data);
    }else if(data.user === "User2"){
      this.notification2.push(data);
    }
  });
  
  }
  get isUser1Page() {
    return this.router.url.includes('/user1');
  }
  get isUser2Page() {
    return this.router.url.includes('/user2');
  }
  
}
