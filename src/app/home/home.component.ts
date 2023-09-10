import { Component,HostListener } from '@angular/core';
import { TextService } from '../Services/text.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 // constructor(private textService : TextService){}

  // ngOnInit():void{
  //   this.generateParagraph();
  // }

  // //#region Global Variable Declaration
  // Paragraph : any;
  // paraindex : number = 0;
  // //#endregion

  // //#region get paragraph from service  
  // randomNum : number = 0;
  // counter : number = 0;
  // public generateParagraph():any{
  //   console.log(this.textService.getParagraph().subscribe(data =>{
  //     var Parray : any = data;
  //     this.randomNum = Math.round(Math.random() * (Parray.length-1)); 
  //     this.Paragraph = Parray[this.randomNum];     
  //     console.log( this.randomNum); 
  //     //this.showelement();
  //   })); 
  // }

  // showelement(){ 
  //   var div = document.getElementById('divpara');
  //   for(let i = 0;i<this.Paragraph.length;i++){
  //     let spantag = document.createElement('span');
  //     spantag.textContent = this.Paragraph[i]
  //     console.log(this.Paragraph);        
  //     div?.appendChild(spantag);       
  //   }  
  // }
  // //#endregion

  // //#region HostListener and Logic with DOM

  // @HostListener('document:keydown', ['$event'])
  // onKey(event:any){
  //   console.log(event);

  //   console.log( `  Input Key ${event.key} and para text value is ${this.Paragraph[this.paraindex]}` ); 
  //   this.checkKey(event.key);
  // }
 

  // checkKey(value : string)  {   
  //     //let divSection = document.getElementById('divpara');
  //     let SpanElements = document.querySelectorAll('span');  
  //     console.log(value);
      
  //     if(value == "Backspace" ){
  //       SpanElements[this.paraindex].style.color = "black";       
  //     } 
  //     else if(((value >="a" && value <= "z" ) || (value >= "A" && value <= "Z") || value == " ") && value.length == 1){
  //       console.log("Value is "+value + " and para value is "+this.Paragraph[this.paraindex]);
        
  //       if(value == this.Paragraph[this.paraindex]){
  //         SpanElements[this.paraindex].style.color = "green"
  //         this.paraindex++;          
  //       }
  //       else{
  //         SpanElements[this.paraindex].style.color = "red"          
         
  //       }              
  //     }            
      
  // }

  // //#endregion

  
}
