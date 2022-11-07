import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  item:Recipe | undefined;
//   info(el:Recipe): void{
// this.item.name= el.name
//   }

}
