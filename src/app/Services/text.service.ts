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
  
  public toggle_Punctuationfun(Para : string) : string{

    if(Para != null && this.tooglePunctuation == true){      
      Para = Para.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');;
      console.log(Para);      
      return Para.toLowerCase();
    }
    return "";
    
  }

  //#endregion 

}
