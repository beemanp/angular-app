import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  name = 'Sattawat';
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  sqareHeight = 100;
  sqareWidth = 250;

  AppCounter = 20;
  activate:boolean = false;

  CustomerList : string[] = ["Customer1","Customer2"];

pushCustomer(){
  this.CustomerList.push("Customer"+(Number(this.CustomerList.length)+1));
}

unshiftCustomer(){
  this.CustomerList.unshift("Customer"+(Number(this.CustomerList.length)+1));
}

RemoveCustomer(index:number){
  this.CustomerList.splice(index,1);
}
  
  ShowConsole(){
    console.log("MMM :",this.name);
  }
  ChangeName(name:string){
this.name = name;
  }

  value = 0;
  Cal(value:string){
    this.value = (Number(value)*3)/4
  }

  TestClick(){
    console.log("testclick");
  }

  TestNumChange(value:number){
    console.log("TestNumChange ",value);
  }

  doAppMinChange(value: number) {
    console.log("test MinChange Event:", value);
  }
  doAppMaxChange(value: number) {
    console.log('test MaxChange Event:', value);
  }
}
