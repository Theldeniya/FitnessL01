import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

    public form={
      InstituteName:null,
    }

    institutes;
    InstituteName:string;


  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
