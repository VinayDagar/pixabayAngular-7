import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private API_KEY = environment.PIXABAY_API_KEY;
  private API_URL = environment.PIXABAY_API_URL;
  private data = [];
  private per_page = '&per_page=15';
  private URL = this.API_URL + `?key=${this.API_KEY}&q=`;

  constructor(private http: HttpClient) { }

  getImage(query){
    return this.http.get( this.URL + query +this.per_page )
  }
}
