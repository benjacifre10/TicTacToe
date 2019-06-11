import { Component, OnInit } from '@angular/core';
import { PartidasService } from './../../../services/partidas.service';
import { Partida } from '../../../models/Partida.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partida-list',
  templateUrl: './partida-list.component.html',
  styleUrls: ['./partida-list.component.css']
})
export class PartidaListComponent implements OnInit {

  partidas: Partida[];

  partida: Partida = {
    id: '0',
    resultado: 'Sin terminar',
    creada: new Date(),
    terminada: new Date(),
    casilla1: '',
    casilla2: '',
    casilla3: '',
    casilla4: '',
    casilla5: '',
    casilla6: '',
    casilla7: '',
    casilla8: '',
    casilla9: ''
  };

  constructor(
    private partidasServ: PartidasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPartidas();
  }

  getPartidas() {
    this.partidasServ.getPartidas()
      .subscribe(
        (res: Partida[]) => {
          console.log(res);
          this.partidas = res;
        },
        err => console.error(err)
      );
  }

  savePartida() {
    delete this.partida.id;
    delete this.partida.creada;
    delete this.partida.terminada;

    this.partidasServ.savePartida(this.partida)
      .subscribe(
        (res: any) => {
          console.log(res.message);
          this.router.navigate(['/tictactoe/add', res.value.insertId]);
        },
        err => console.error(err)
      );
  }

}
