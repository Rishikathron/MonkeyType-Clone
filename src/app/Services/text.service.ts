import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(private http : HttpClient) { }

  apiUrl : string = 'https://baconipsum.com/api/?type=meat-and-filler';
  public getParagraph(){
      return this.http.get(this.apiUrl);
  }

}
