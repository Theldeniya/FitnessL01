import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  public form = {
    categoryName: null,
    placeName: null,
    placeDescription: null,
    placeAddressLine1: null,
    placeAddressLine2: null,
    placeCity: null,
    placeProvince: null,
    placeCountry: null,
    placePostalCode: null,
    placeLatitude: null,
    placeLongitude: null,
  }

  categoryId: number;
  categoryName: string;
  placeName: string;
  // placePhoto: File;
  // placeCoverPhoto: File;
  placeDescription: string;
  placeAddressLine1: string;
  placeAddressLine2: string;
  placeCity: string;
  placeProvince: string;
  placeCountry: string;
  placePostalCode: string;
  placeLatitude: string;
  placeLongitude: string;
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  setCategory(val: any) {
    this.categoryName = val;
  }
  setCountry(val: any) {
    this.placeCountry = val;
  }
  setProvins(val: any) {
    this.placeProvince = val;
  }
  setCity(val: any) {
    this.placeCity = val;
  }


  onSubmit() {
    let input = new FormData();
    input.append('category_name', this.categoryName);
    input.append('Package', this.placeName);

    input.append('place_description', this.placeDescription);
    input.append('place_address_line1', this.placeAddressLine1);
    input.append('place_address_line2', this.placeAddressLine2);
    input.append('place_city', this.placeCity);
    input.append('place_province', this.placeProvince);
    input.append('place_country', this.placeCountry);
    input.append('place_postal_code', this.placePostalCode);
    input.append('place_latitude', this.placeLatitude);
    input.append('place_longitude', this.placeLongitude);

    return this.http.post('http://127.0.0.1:8000/api/place/create', input).subscribe(
      response => {
        this.response = response;
        console.log(this.response);
      },
      error => {
        console.log(error);
      }
    );




  }


}
