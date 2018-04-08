import { Injectable } from '@angular/core';
import { Log } from '../models/Log'

@Injectable()
export class LogService {
  logs: Log[];

  constructor() {
    this.logs= [
      {id: '1', text: 'Generated Components', date: new Date('12/12/2017 12:00:00')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/13/2017 12:00:00')},
      {id: '3', text: 'Log component added', date: new Date('12/14/2017 12:00:00')}
    ]
   }

   getLogs(){
     return this.logs;
   }

}
