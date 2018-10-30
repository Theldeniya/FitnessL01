import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-institute-dash-board',
  templateUrl: './institute-dash-board.component.html',
  styleUrls: ['./institute-dash-board.component.scss']
})
export class InstituteDashBoardComponent implements OnInit {
  
  public from={
    Iname: null,
    Itype:null,
  }

  instruments;
   id:number;
   Iname:string;
   Itype:string;

 

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

onSubmit(){
  let input=new FormData();
  input.append('Iname',this.Iname);
  input.append('Itype',this.Itype);
  return this.http.post('http://127.0.0.1:8000/api/insert1',input).subscribe(
    response=>{
      this.instruments=response;
      console.log(response);
      this.Iname=null;
      this.Itype=null;
    
},
error=>{
  console.log(error);
}
  );

}
}
