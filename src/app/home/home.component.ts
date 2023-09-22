import { Component,HostListener, SimpleChanges } from '@angular/core';
import { TextService } from '../Services/text.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private textService : TextService){}
}
