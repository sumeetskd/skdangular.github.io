import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-senddata',
  templateUrl: './senddata.component.html',
  styleUrls: ['./senddata.component.css']
})
export class SenddataComponent implements OnInit, OnDestroy {


  public username: any ;
  public previousvalue:any;
  public currentvalue:any;
  public msg:any;
  constructor() { }

  ngOnInit(): void {
    console.log('inside parent ngoninit()');
    
  }
  
  ngOnDestroy(): void {
      console.log('Componenet Destroyed, Memory Released!');
  }
}
