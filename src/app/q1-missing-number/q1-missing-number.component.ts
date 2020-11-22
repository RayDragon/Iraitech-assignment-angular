import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1-missing-number',
  templateUrl: './q1-missing-number.component.html',
  styleUrls: ['./q1-missing-number.component.scss']
})
export class Q1MissingNumberComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  result;
  seriesValue(n) {
    this.result =  n % 2 == 0 ? n**2 - 1 : n**2 + 1;
  }

}
