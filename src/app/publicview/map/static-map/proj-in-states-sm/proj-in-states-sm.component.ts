import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-in-states-sm',
  templateUrl: './proj-in-states-sm.component.html',
  styleUrls: ['./proj-in-states-sm.component.css']
})
export class ProjInStatesSmComponent implements OnInit {




private urlCenter: string = "UT";
private markerColor: string = "0x061042";
private zoom: number = 4;
private marker1State: number = 2;
private marker2State: number = 2;
private marker3State: number = 2;
private marker4State: number = 2;
private marker5State: number = 2;
private staticMapUrl: string =  "http://maps.googleapis.com/maps/api/staticmap?center=" + this.urlCenter + "&zoom=" + this.zoom + "&scale=2&size=500x450&maptype=roadmap&format=gif&visual_refresh=true&markers=size:mid%7Ccolor:" + this.markerColor + "%7Clabel:" + this.marker1State +"%7CNV&markers=size:mid%7Ccolor:" + this.markerColor + "%7Clabel:" + this.marker2State + "%7CCA&markers=size:mid%7Ccolor:" + this.markerColor + "%7Clabel:" + this.marker3State + "%7CID&markers=size:mid%7Ccolor:" + this.markerColor + "%7Clabel:" + this.marker4State + "%7CUT&markers=size:mid%7Ccolor:" + this.markerColor + "%7Clabel:" + this.marker5State + "%7CAZ&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true";

  constructor() { }

  ngOnInit() {
  }

}


// <!-- <img width="600" src="http://maps.googleapis.com/maps/api/staticmap?center=UT&zoom=4&scale=2&size=600x300&maptype=roadmap&format=gif&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:6%7CNV&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CCA&markers=size:mid%7Ccolor:0xff0000%7Clabel:3%7CID&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CUT&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CAZ" alt="Google Map of UT"> -->
//
//
//
// <!-- <img width="600" src="http://maps.googleapis.com/maps/api/staticmap?center=UT&zoom=4&scale=2&size=600x300&maptype=roadmap&
// key= key goes here. remove line breaks before and after this line.
// &format=gif&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:6%7CNV&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CCA&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CID&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CUT&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CAZ" alt="Google Map of UT"> -->
