import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-package-details',
  templateUrl: './edit-package-details.component.html',
  styleUrls: ['./edit-package-details.component.scss']
})
export class EditPackageDetailsComponent implements OnInit {
  model:any={};
  
  public form = {
      catogary: null,
      price:null,
      timeDuration:null,
  };

  constructor() { }

  ngOnInit() {
  }

}
