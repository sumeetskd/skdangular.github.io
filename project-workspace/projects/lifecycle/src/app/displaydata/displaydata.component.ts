import { Component, Input, OnChanges , OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit, OnChanges {
  @Input() public username: any = "Sumeet";
  public previousvalue:any;
  public currentvalue:any;
  public msg:any;
  constructor() { }

  ngOnInit(): void {
    console.log('Inside child ngoninit()')
  }
  ngOnChanges(changes: SimpleChanges): void {
    for(var property in changes){
      let change = changes[property];
      this.currentvalue = change.currentValue;
      this.previousvalue = change.previousValue;
    }
    if(this.currentvalue == this.previousvalue){
      this.msg = 'No change detected';
    }else{
      this.msg = 'change detected'
    }

    console.log('Previous Value: ', this.previousvalue);
    console.log('Current Value: ', this.currentvalue);

    console.log('Status: ',this.msg);
  }
}
