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

  timer:number = 0
  toogleTimer1 : boolean = false;
  toogleTimer2 : boolean = false;
  toogleTimer3 : boolean = false;
  toogleTimer4 : boolean = false;
  timerRunningStatus : boolean = false;
  typingStatus_started :boolean|null = false;
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

  //#region HostListener and Logic with DOM

  @HostListener('document:keydown', ['$event'])
  onKey(event:any){
    console.log(event);

    console.log( `  Input Key ${event.key} and para text value is ${this.Paragraph[this.paraindex]}` ); 
    this.typingStatus_started = true;
    if(this.typingStatus_started == true)
    {
      this.startTimer(this.timer);
      this.typingStatus_started = null;
    }
    this.checkKey(event.key);
  }


  checkKey(value : string)  {   
      //let divSection = document.getElementById('divpara');
      let SpanElements = document.querySelectorAll('span');  
      console.log(value);

      if(value == "Backspace" ){
        SpanElements[this.paraindex].style.color = "black";       
      } 
      else if(((value >="a" && value <= "z" ) || (value >= "A" && value <= "Z") || value == " ") && value.length == 1){
        console.log("Value is "+value + " and para value is "+this.Paragraph[this.paraindex]);

        if(value == this.Paragraph[this.paraindex]){
          SpanElements[this.paraindex].style.color = "white"
          this.paraindex++;          
        }
        else{
          SpanElements[this.paraindex].style.color = "red" 
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

  toogleTime(num : number){
    if(num == 1){
      this.toogleTimer1 = !this.toogleTimer1;
    }
    if(num == 2){
      this.toogleTimer2 = !this.toogleTimer2;
    }
    if(num == 3){
      this.toogleTimer3 = !this.toogleTimer3;
    }
    if(num == 4){
      this.toogleTimer4 = !this.toogleTimer4;
    }
    
  }
//#endregion

//#region  timer section

  setTimer(timerValue : number){
      this.timer = timerValue;
  }

  startTimer(time : number){
    this.timerRunningStatus = !this.timerRunningStatus;
    let timerSection = document.getElementById('timer') ;
    timerSection!.style.color = "yellow";
        var Interval = setInterval(()=>{
        timerSection!.textContent = time.toString();        
        if(time <= 0){
          timerSection!.textContent = "0";
            clearInterval(Interval);
        }        
        time--;
    },1000)
  
  
    
  } 
//#endregion
}
