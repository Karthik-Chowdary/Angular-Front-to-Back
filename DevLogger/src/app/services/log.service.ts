import { Injectable } from '@angular/core';
import { Log } from '../models/Log'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id:null, text: null, date:null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs= [
    //   {id: '1', text: 'Generated Components', date: new Date('12/12/2017 12:00:00')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('12/13/2017 12:00:00')},
    //   {id: '3', text: 'Log component added', date: new Date('12/14/2017 12:00:00')}
    // ]
    this.logs = [];
   }

   getLogs(): Observable<Log[]>{
     return of(this.logs);
   }

   setFormLog(log: Log){
     this.logSource.next(log);
   }

   addLog(log: Log){
     this.logs.unshift(log);
   }

   updateLog(log: Log){
     this.logs.forEach((cur, index)=> {
       if(log.id === cur.id){
         this.logs.splice(index, 1);
       }
     });
     this.logs.unshift(log);
   }

   deleteLog(log: Log){
    this.logs.forEach((cur, index)=> {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
   }

   clearState(){
    this.stateSource.next(true);
   }

}
