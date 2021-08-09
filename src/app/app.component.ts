import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  name = 'Sattawat';

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
}
