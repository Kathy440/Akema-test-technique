import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private playersService: PlayersService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSavePlayer() {
    const name = this.playerForm.get('name').value;

    const newPlayer = new Player(name);
    this.playersService.createNewPlayer(newPlayer);
    this.router.navigate(['/game']);
  }
}
