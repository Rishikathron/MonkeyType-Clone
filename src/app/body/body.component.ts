import { Component,HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { TextService } from '../Services/text.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private textService : TextService){}

  ngOnInit():void{
    console.log("started");    
    this.generateParagraph();
  }

  ngOnChanges(changes: SimpleChanges){
      console.log("on changes called" + changes);      
  }

  //#region Global Variable Declaration
  Paragraph : any;
  paraindex : number = 0;

  toggleNumbers : boolean = false;
  tooglePunctuation : boolean = false;

  //#endregion

  //#region get paragraph from service  
  randomNum : number = 0;
  counter : number = 0;

  public generateParagraph():any{
    console.log("generating");
    
    this.textService.getParagraph().subscribe(data =>{
      var Parray : any = data;
      this.randomNum = Math.round(Math.random() * (Parray.length-1)); 
      this.Paragraph = Parray[this.randomNum];     
      console.log( this.Paragraph); 
      this.showelement();
    }); 
  }

  showelement(value ? : string){ 
    var div = document.getElementById('divpara');
    if(value != null){
      this.Paragraph = value;
      for(let i = 0;i<this.Paragraph.length;i++){
        console.log("inside loop");      
        let spantag = document.getElementsByTagName('span');
        spantag[i].textContent = this.Paragraph[i]
        console.log(this.Paragraph);        
               
      }
    }  
    else{
      for(let i = 0;i<this.Paragraph.length;i++){
        console.log("inside loop");      
        let spantag = document.createElement('span');
        spantag.textContent = this.Paragraph[i]
        console.log(this.Paragraph);        
        div?.appendChild(spantag);       
      }
    } 
       
      
  }
  //#endregion

  //#region Toggle elements
  togglePunct(){   
    this.tooglePunctuation = !this.tooglePunctuation
    console.log("clicked ",this.tooglePunctuation);
    this.textService.setToggleStatus(this.tooglePunctuation);
    this.Paragraph = this.textService.toggle_Punctuationfun(this.Paragraph)
    console.log("without punct ------------>"+this.Paragraph);    
    this.showelement(this.Paragraph);
  }

toggleNum(){
    this.toggleNumbers = !this.toggleNumbers;
  }
//#endregion
}
