import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {Observable} from 'rxjs';
import {Componente} from 'src/app/components/interfaces/interfaces';
// import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  componentes:Observable<Componente[]>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.componentes=this.dataService.getMenu();
  }

}
