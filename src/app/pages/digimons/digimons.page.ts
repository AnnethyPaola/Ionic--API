import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {ApiDigimonsService} from 'src/app/services/api-digimons.service';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.page.html',
  styleUrls: ['./digimons.page.scss'],
})
export class DigimonsPage implements OnInit {
  presentingElement = null;

  public name:String = '';
  public img:String = '';
  public level:String = ''; 

  digimons: any;
 
  constructor(public Digimons:ApiDigimonsService) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
   
    this.Digimons.getDigimon().subscribe
    (
     (r) => {this.digimons = r; console.log(r)},
     (e) => {console.error(e)}
    )
  
  }

  
}
