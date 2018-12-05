import {Component, OnInit} from '@angular/core';
import {RandomService} from 'src/app/services/random.service';
import {Game} from 'src/app/models/game.model';

import {PlayersService} from 'src/app/services/players.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  listImages: Game[];
  computerSelection: Game;

  result: string;
  scoreJoueur: number = 0;
  scoreComputer: number = 0;
  equal: number = 0;

  constructor(private randomService: RandomService, private playerService: PlayersService) {}

  ngOnInit() {
    this.listImages = this.randomService.images;
  }

  public playerSelection(playerSelectionId: number) {
    this.computerSelection = this.randomService.getRandomImage();
    if (this.computerSelection.id === playerSelectionId) {
      //console.log('EQUAL');
      this.result = 'Egaliter';
      this.equal += 1;
    } else if (
      (this.computerSelection.id === 0 && playerSelectionId === 1) ||
      (this.computerSelection.id === 1 && playerSelectionId === 2) ||
      (this.computerSelection.id === 2 && playerSelectionId === 0)
    ) {
      //console.log('COMPUTER WIN');
      this.result = "Victoire de l'ordinateur";
      this.scoreComputer += 1;
    } else {
      //console.log('PLAYER WIN');
      this.result = 'Victoire du joueur';
      this.scoreJoueur += 1;
      //console.log(this.scoreJoueur);
    }
  }
}
