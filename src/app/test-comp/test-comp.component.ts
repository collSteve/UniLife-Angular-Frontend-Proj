import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})

export class TestCompComponent implements OnInit {

  constructor() { }

  count: number = 0;

  ngOnInit(): void {
  }

  inc() {
    this.count++;
  }

}
