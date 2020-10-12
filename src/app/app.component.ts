import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submenu:string;
public menu = [
  {
    name : "link 1",
    submenus : [ {name :"submenu 1"}],
    },
    {
    name : "link 2",
    submenus : [ {
    name :"submenu 2",
    submenus : [ {
    name :"submenu 3"
    }],
    }],
    },
    ]

  constructor() { }  
 
  
}
