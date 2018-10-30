import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent implements OnInit {

  public from={
    F_name: null,
    L_name:null,
    E_mail: null,
    Password:null,
    P_number:null
  }

  cdetails;
   id:number;
   F_name:string;
   L_name:string;
   E_mail:string;
   Password:string;
   P_number:string;

 

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    let input=new FormData();
    input.append('first_name',this.F_name);
    input.append('last_name',this.L_name);
    input.append('email',this.E_mail);
    input.append('password',this.Password);
    input.append('phone_number',this.P_number);


    return this.http.post('http://127.0.0.1:8000/api/insert2',input).subscribe(
      response=>{
        this.cdetails=response;
        console.log(response);
        this.F_name=null;
        this.L_name=null;
        this.E_mail=null;
        this.Password=null;
        this.P_number=null;
      
  },
  error=>{
    console.log(error);
  }
    );
  
  }

}
