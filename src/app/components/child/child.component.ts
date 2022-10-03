import { outputAst } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() parnetMessage: string = '';
  @Output() childMessage = new EventEmitter<string>();
  @Output() isClick = new EventEmitter<boolean>();

  constructor() {}
  onChange(value: string) {
    this.childMessage.emit(value);
  }
  onClick() {
    this.isClick.emit(true);
  }
  ngOnInit(): void {}
}
