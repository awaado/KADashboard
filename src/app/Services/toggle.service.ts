import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  state:any;
  frameWidth:string;
  constructor() { }
   getState(){
    this.state = this.state === 'out' ? 'in' : 'out';
    
  }
  setWidth(){
    this.frameWidth = this.frameWidth === "95%" ? "100%" : "95%";
  }
}
