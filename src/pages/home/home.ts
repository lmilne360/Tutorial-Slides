import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	skipMsg: string = "Skip";
	@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  skip(){
  	this.navCtrl.push(MainPage)
  }

  slideChanged() {
  	if (this.slides.isEnd){
  		this.skipMsg= "Alright, I got it";
  	}
  }

}
