import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TextService {

  constructor(private http : HttpClient) { }


  //#region variable Declarations
    tooglePunctuation : boolean = false;
    toogleNumeric : boolean = false;
  //#endregion

  apiUrl : string = 'https://baconipsum.com/api/?type=meat-and-filler';
  public getParagraph(){
      return this.http.get(this.apiUrl);
  }

  //#region  toggle punctuation

  public setToggleStatus(value : boolean) : void{
    console.log("Setting Status");    
    this.tooglePunctuation = value;  
  }

  public getToogleStatus():boolean{
    return this.tooglePunctuation;
  }
  
  public toggle_Punctuation(Para : string) : string{

    if(Para != null && this.tooglePunctuation == true){
      for(let i= 0 ; i<Para.length ; i++){
        if(!(Para.charAt(i) > 'a' && Para.charAt(i) <= 'z') && !(Para.charAt(i) > 'A' && Para.charAt(i) <= 'Z')){
          Para.replace(Para.charAt(i),"");
        }
      }
      return Para
    }
    return "";
  }

  //#endregion 

}
