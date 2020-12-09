import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
   data=[];
   
  constructor() { }

  ngOnInit(): void {
  }
   submit(title:HTMLInputElement,link:HTMLInputElement):boolean
   {
    
     this.data.push({
       _id: Math.random(),
      newTitle:title.value,
      newLink:link.value,
      votes:0
     });
     return false;

    //  console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    //  return false
     
   }
}
