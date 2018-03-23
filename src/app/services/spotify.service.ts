import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = `https://api.spotify.com/v1/`;
  token: string = 'BQDWcpK1OzyI88ZY__mw_yhQNg8fiKEZq4Uof1U0_YGnlslBFHaaUifLDaEMxvStXy-VpC8tBa3l_8O9GxM';

  constructor(public http: HttpClient) {
    console.log("prueba servicio spotify")
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtista(id: string) {
    let url: string = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
    /*
      .map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      })*/
  }

  getArtistas(termino: string) {
    let url: string = `${this.urlSpotify}search?query=${termino}&type=artist&market=US&offset=5&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      })
  }

  getTop(id: string) {
    let url: string = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders();

    let result : any = this.http.get(url, { headers });
    return result; // this.http.get(url, { headers });
  }

}
