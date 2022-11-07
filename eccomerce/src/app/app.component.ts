import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eccomerce';
loadPage="recipes"
  onSelectedHandler(el:string){
this.loadPage= el
  }
}
