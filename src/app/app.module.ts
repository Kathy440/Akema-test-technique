import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerFormComponent} from './player-list/player-form/player-form.component';
import {HeaderComponent} from './header/header.component';
import {PlayersService} from './services/players.service';
import {GameComponent} from './player-list/game/game.component';
import {Routes, RouterModule} from '@angular/router';
import {RandomService} from './services/random.service';

const appRoutes: Routes = [
  {path: '', component: PlayerFormComponent},
  {path: 'new-player', component: PlayerFormComponent},
  {path: 'game', component: GameComponent},
  {path: 'player-list', component: PlayerListComponent},
];

@NgModule({
  declarations: [AppComponent, PlayerListComponent, PlayerFormComponent, HeaderComponent, GameComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PlayersService, RandomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
