import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {InterfaceHotel} from "../interfaces/interface";

@Component({
  selector: 'page-personalhotels',
  templateUrl: 'personalhotels.html'
})
export class PersonalHotelsPage {

  hotels: InterfaceHotel[];

  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.hotels = this.params.get('hotelinput');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
