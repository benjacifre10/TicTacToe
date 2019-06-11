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

  constructor(
    private partidaServ: PartidasService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
