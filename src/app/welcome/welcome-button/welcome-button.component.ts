import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-button',
  templateUrl: './welcome-button.component.html',
  styleUrls: ['./welcome-button.component.scss'],
})
export class WelcomeButtonComponent implements OnInit {
  @Input('text') text: string = 'Button';
  @Input('show') show: boolean = false;

  @HostBinding('class.canInteract') canInteract: boolean = false;
  constructor() { }

  ngOnInit(): void { }

  transitionEnded(e: Event) {
    this.canInteract = true;
  }
}
