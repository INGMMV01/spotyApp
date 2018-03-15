import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log("prueba servicio spotify")
   }

   artistas: any[] = [];

   getArtistas(termino: string){
     let url: string = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=5&limit=20`;

     let headers = new HttpHeaders({
       'authorization':'Bearer BQBYQYom9AmT-rd5YoX40j2DzscbxAdmeMrG1Zm2_qMm_msXAoF4lREIZfaQLSNxZK4B2kHgymLj_pB85dU'
     });

     return this.http.get(url, { headers })
                  .map( (resp: any) => {
                    this.artistas = resp.artists.items;
                    return this.artistas;
                  })
   }

}
