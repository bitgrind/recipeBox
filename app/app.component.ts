import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <h1>{{recipeTitle}}</h1>
    </section>
    <section class="container">
      <h1>App-root</h1>
      <ul>
         <li (click)="showRecipe(currentRecipe)" class="btn col-md-2" *ngFor="let currentRecipe of recipes" >{{currentRecipe.title}}</li>
      </ul>
    </section>
    <section *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
    </section>
  `
})

export class AppComponent {
  recipeTitle: string = "Keith's Cookbook";

  recipes: Recipe[] = [
    new Recipe('Cereal', 'Put Cereal in Bowl, Add Milk', 'Breakfast of champions'),
    new Recipe('Bacon', 'cook on medium', 'Breakfast of beasts'),
    new Recipe('Ham', 'cook on High', 'For Thanksgiving')
  ];
  selectedRecipe = null;

  showRecipe(clickedRecipe) {
    console.log("clicked"+clickedRecipe);
    this.selectedRecipe = clickedRecipe;
  }
}

export class Recipe {
  constructor(public title: string, public steps: string, public description: string) { }
}