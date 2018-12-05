import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';
import {Subject, Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: Player[] = [];
  playersSubject = new Subject<Player[]>();

  constructor() {
    this.getPlayers();
  }

  // méthode pour pouvoir acceder la liste des players
  emitPlayers() {
    this.playersSubject.next(this.players);
  }

  // Save the list on Database
  savePlayers() {
    firebase
      .database()
      .ref('/list-players')
      .set(this.players);
  }

  // Recover list of all players
  getPlayers() {
    firebase
      .database()
      .ref('/list-players')
      .on('value', data => {
        this.players = data.val() ? data.val() : [];
        this.emitPlayers();
      });
  }

  // Create new player
  createNewPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
    this.savePlayers();
    this.emitPlayers();
  }
}
