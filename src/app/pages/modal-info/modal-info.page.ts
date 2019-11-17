import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
@Input() nombre:string;
@Input() pais:string;
  constructor(private modalcontroller:ModalController) { }

  ngOnInit() {
  }
  

  salirSinArgumentos(){
      this.modalcontroller.dismiss();
  }

  salirconArgumentos(){
  	this.modalcontroller.dismiss({
  		nombre:'felipe',
  		pais:'España'
  	});

  }



}
