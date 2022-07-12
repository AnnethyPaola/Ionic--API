import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  DigimonsName: string;
  items;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.DigimonsName = this.activatedRoute.snapshot.paramMap.get('name')
    this.http.get('https://digimon-api.herokuapp.com/api/digimon/name/' + this.DigimonsName)
    .subscribe(res => this.items = res);
  }

}
