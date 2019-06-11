import { Component, OnInit } from '@angular/core';
import { Partida } from '../../../models/Partida.models';
import { PartidasService } from './../../../services/partidas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partida-form',
  templateUrl: './partida-form.component.html',
  styleUrls: ['./partida-form.component.css']
})
export class PartidaFormComponent implements OnInit {

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

  idValor: number;
  partida2: Partida;

  constructor(
    private partidaServ: PartidasService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.getPartida(params.id);
    }
  }

  getPartida(id: string) {
    this.partidaServ.getPartida(id)
      .subscribe(
        (res: Partida) => {
          console.log(res);
          this.partida = res[0];
        },
        err => console.error(err)
      );
  }

  updatePartida(casillaId: number) {
    delete this.partida.creada;
    delete this.partida.terminada;
    switch (casillaId) {
      case 1:
        this.partida.casilla1 = '1';
        break;
      case 2:
        this.partida.casilla2 = '1';
        break;
      case 3:
        this.partida.casilla3 = '1';
        break;
      case 4:
        this.partida.casilla4 = '1';
        break;
      case 5:
        this.partida.casilla5 = '1';
        break;
      case 6:
        this.partida.casilla6 = '1';
        break;
      case 7:
        this.partida.casilla7 = '1';
        break;
      case 8:
        this.partida.casilla8 = '1';
        break;
      case 9:
        this.partida.casilla9 = '1';
        break;
    }
    this.partidaServ.updatePartida(this.partida.id, this.partida)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.result > 0) {
            console.log('termino supuestamente');
            this.router.navigate(['/tictactoe']);
          } else {
            this.getPartida(res.value);
          }
        },
        err => console.error(err)
      );
  }

}
