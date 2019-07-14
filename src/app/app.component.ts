import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isThemeDark: Observable<boolean>;
  index = 0;
  speed = 2000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  push() {
    this.avatars.push(
      {
        url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
        title: `${this.avatars.length + 1}`
      }
    );
  }

  remove() {
    this.avatars.splice(this.avatars.length - 1, 1);
  }

  indexChanged(index) {
    console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }

}
