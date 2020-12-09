import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
   newTitle:string;
   newLink:string;
  constructor() { }

  ngOnInit(): void {
  }
   submit(title:HTMLInputElement,link:HTMLInputElement):boolean
   {
    //  console.log(title.value);
    //  console.log(link.value);
     this.newTitle=title.value;
     this.newLink=link.value;
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     return false
     
   }
}
