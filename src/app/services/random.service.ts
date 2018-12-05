import {Injectable} from '@angular/core';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  imageChange: Game;

  images = [
    {
      url: '../../../assets/images/ciseau.jpg',
      title: 'Ciseaux',
      id: 0,
    },
    {
      url: '../../../assets/images/feuille.jpg',
      title: 'Feuille',
      id: 1,
    },
    {
      url: '../../../assets/images/pierre.jpg',
      title: 'Pierre',
      id: 2,
    },
  ];

  getRandom(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomImage(): Game {
    const imgIndex = this.getRandom(0, 3);
    const image = this.images[imgIndex];
    this.imageChange = {
      url: image.url,
      title: image.title,
      id: image.id,
    };

    return this.imageChange;
  }
}
