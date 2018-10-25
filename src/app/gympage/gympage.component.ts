import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gympage',
  templateUrl: './gympage.component.html',
  styleUrls: ['./gympage.component.scss']
})
export class GympageComponent implements OnInit {

  public file_src:string='../assets/images/1.jpg';

  constructor() { }

  ngOnInit() {
    
  }

}
