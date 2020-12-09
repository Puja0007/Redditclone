import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
// @Input() title=[];
// @Input() link=[];
 
 @Input() arr=[];
 
  constructor() {
    
   }

  ngOnInit(): void {
    
  }
up(id)
{
  this.arr.map((e) =>{
    if(e._id === id){
      e.votes++;
    }
  })

  
}
down(id)
{
  this.arr.map((e) =>{
    if(e._id === id){
      e.votes--;
    }
  })
  
}
}
