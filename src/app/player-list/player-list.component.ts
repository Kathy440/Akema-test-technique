import {Component, OnInit, OnDestroy} from '@angular/core';
import {Player} from '../models/player.model';
import {Subscription} from 'rxjs';
import {PlayersService} from '../services/players.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: Player[];
  playersSubscription: Subscription;

  constructor(private playersService: PlayersService, private router: Router) {}

  ngOnInit() {
    this.playersSubscription = this.playersService.playersSubject.subscribe((players: Player[]) => {
      this.players = players;
    });

    this.playersService.getPlayers();
    this.playersService.emitPlayers();
  }

  onNewPlayer() {
    this.router.navigate(['/new', 'player']);
  }

  ngOnDestroy() {
    this.playersSubscription.unsubscribe();
  }
}
