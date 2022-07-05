import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
  new Recipe ('دستور پخت ماکارونی','یک توضیح تست برای پخت ماکارونی ','https://digifood.ir/wp-content/uploads/2020/05/spaghetti2-digifood.jpg'),
  new Recipe ('دستور پخت ماکارونی','یک توضیح تست برای پخت ماکارونی قرار می دهیم','https://www.digikala.com/mag/wp-content/uploads/2020/07/macaroni-recipe-1.jpg'),
  new Recipe ('دستور پخت ماکارونی','یک توضیح تست برای پخت ماکارونی قرار می دهیم','https://www.digikala.com/mag/wp-content/uploads/2020/07/macaroni-recipe-1.jpg')
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
