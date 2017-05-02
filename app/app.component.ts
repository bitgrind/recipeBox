import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <h1>Recipe</h1>
    </section>
    <section class="container">
      <h1>App-root</h1>
      <ul>
         <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
      </ul>
    </section>
  `
})

export class AppComponent {

  recipes: Recipe[] = [
    new Recipe('Cereal', 'Put Cereal in Bowl, Add Milk', 'Breakfast of champions'),
    new Recipe('Bacon', 'cook on medium', 'Breakfast of beasts'),
    new Recipe('Ham', 'cook on High', 'For Thanksgiving')
  ];
}

export class Recipe {
  constructor(public title: string, public steps: string, public description: string) { }
}