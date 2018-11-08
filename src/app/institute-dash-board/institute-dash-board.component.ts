import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-institute-dash-board',
  templateUrl: './institute-dash-board.component.html',
  styleUrls: ['./institute-dash-board.component.scss']
})
export class InstituteDashBoardComponent implements OnInit {
  
  public from={
    catogary: null,
    package1:null,
    package2:null,
    package3:null,
    price1:null,
    price2:null,
    price3:null,

  }

  instruments;
   id:number;
   catogary:string;
   package1:string;
   package2:string;
   package3:string;
   price1:string;
   price2:string;
   price3:string;
 

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

onSubmit(){
  let input=new FormData();
  input.append('Catogary',this.catogary);
  input.append('Package',this.package1);
  input.append('Package',this.package2);
  input.append('Package',this.package3);
  input.append('Price',this.price1);
  input.append('Price',this.price2);
  input.append('Price',this.price3);
 

  return this.http.post('http://127.0.0.1:8000/api/insert1',input).subscribe(
    response=>{
      this.instruments=response;
      console.log(response);
      this.catogary=null;
      this.package1=null;
      this.package2=null;
      this.package3=null;
      this.price1=null;
      this.price2=null;
      this.price3=null;
    
},
error=>{
  console.log(error);
}
  );

}
}
