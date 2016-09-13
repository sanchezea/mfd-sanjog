import { Component } from '@angular/core';
import { Recipe } from './recipe';
@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <ul>
        <li *ngFor="let recipe of recipes">
    <h2>{{recipe.name | uppercase}}</h2>
    <p>{{recipe.description}}</p>
    <p *ngIf="recipe.time<40">Quick recipe!</p>
    <p>Total time needed:{{totalTime(recipe)}}</p>
    </li>
    </ul>
    `
})
export class AppComponent { 
title = 'Our yummy recipe site';
recipes: Recipe[] = [{
"id":1,
"name" : "Strawberry tart",
"description" : "make the best strawberry tart there is...",
"prep_time":20,
"cooking_time":40
},

{
"id":2,
"name" : "Apple Pie",
"description" : "make the best strawberry tart there is...",
"prep_time":35,
"cooking_time":45
}
]

totalTime(recipe:Recipe)
{return recipe.cooking_time + recipe.prep_time}
}
