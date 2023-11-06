import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  checkConnection() {
    this.socket.on('socket-connection', (notification:any) => {
      console.log("Socket Connection Established",notification);
    })
  }
  checkNotification(callback: (notification: any) => void) {
    this.socket.on('notification', (notification: any) => {
      callback(notification); 
    });
  }
 
}
