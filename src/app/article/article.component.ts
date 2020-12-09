import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() title:string;
@Input() link:string;
article=[];
  constructor() {
    this.article.push(this.link);
   }

  ngOnInit(): void {
  }

}