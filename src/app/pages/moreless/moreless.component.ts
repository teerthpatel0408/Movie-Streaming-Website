import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-moreless',
  templateUrl: './moreless.component.html',
  styleUrls: ['./moreless.component.css']
})
export class MorelessComponent implements OnInit{

  @Input() text: Array<any>;
  @Input() wordlimit: number;
  
  showMore: boolean;
  
  constructor() { this.showMore=false;
  this.wordlimit=9;
  this.text=[];
  
}
  ngOnInit(): void {
      this.showMore=false;
  }

}
