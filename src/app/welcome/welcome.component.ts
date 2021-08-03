import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { WelcomeButtonComponent } from './welcome-button/welcome-button.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChildren(WelcomeButtonComponent) buttons!: QueryList<WelcomeButtonComponent>;

  public showButtons: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  animationEnded(e: Event) {
    let delay = 0;
    this.buttons.forEach(b => {
      this.showButton(b, delay);
      delay += 250;
    });
  }

  showButton(button: WelcomeButtonComponent, delay: number) {
    setTimeout(() => button.show = true, delay);
  }

  scrollTo(element: string) {
    const el = document.getElementById(element);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
