import { Component,HostListener } from '@angular/core';
import { TextService } from '../Services/text.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private textService : TextService){}

  //#region variable Declaration
    toggleNumbers : boolean = false;
    tooglePunctuation : boolean = false;
  //#endregion

  //#region Toggle elements

  togglePunct(){
    
    
      this.tooglePunctuation = !this.tooglePunctuation
      console.log("clicked ",this.tooglePunctuation);
      this.textService.setToggleStatus(this.tooglePunctuation);
  }
  toggleNum(){
      this.toggleNumbers = !this.toggleNumbers;
    }


  //#endregion

  
}
