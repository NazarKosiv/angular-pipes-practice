import { Component, OnInit } from '@angular/core';
import {Server} from './models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sortedBy = 'name';
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  servers: Server[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 2, 2017)
    },
    {
      instanceType: 'extra large',
      name: 'User Database',
      status: 'unstable',
      started: new Date(15, 1, 2018)
    },
    {
      instanceType: 'large',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 3, 2019)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'pristine',
      started: new Date(15, 4, 2027)
    }
  ];
  filteredStatus = '';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
