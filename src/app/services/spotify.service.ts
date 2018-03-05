import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log("prueba servicio spotify")
   }

   artistas: any[] = [];

   getArtistas(){
     let url: string = "https://api.spotify.com/v1/search?query=queen&type=artist&market=US&offset=5&limit=20";

     let headers = new HttpHeaders({
       'authorization':'Bearer BQAl6nHOKDVfELrCFt15EUtlFka-k6thM2XoCretXz1Wa_q4UASfLkOu10HIe9XIad8P49jEIPr-pN83feE'
     });

     return this.http.get(url, { headers });
   }

}
