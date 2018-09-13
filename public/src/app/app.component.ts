import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";


export declare interface Hotel {
  id: String;
  name: String;
  stars: Number;
  price: Number;
  image: String;
  amenities?: String[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //Filters
  @Input() name: string;

  hotels: Hotel[]=[];

  constructor(private http: HttpClient) {
    this.allHotels();
  }
  allHotels(){
    this.http.get('/hotels/all',{}).subscribe(
      data => {
        this.hotels= <Hotel[]>data;
      },
      error => {
        console.log(error);
      }
    );
  }
  starsForHotel(stars: Number){
    return Array().fill(stars).map((e,i)=>i+1);
  }
  hotelsByName(){
    let parametros = new HttpParams().append('name', this.name);
    this.http.get('/hotels/byName/', {
      params: parametros
    }).subscribe(
      data => {
        this.hotels= <Hotel[]>data;
      },
      error => {
        console.log(error);
      }
    );
  }
  hotelsByStars(stars){
    let parametros = new HttpParams().append('stars', stars);
    this.http.get('/hotels/byStars/', {
      params: parametros
    }).subscribe(
      data => {
        this.hotels= <Hotel[]>data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
