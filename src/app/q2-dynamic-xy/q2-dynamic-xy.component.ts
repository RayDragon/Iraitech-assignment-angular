import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-q2-dynamic-xy',
  templateUrl: './q2-dynamic-xy.component.html',
  styleUrls: ['./q2-dynamic-xy.component.scss']
})
export class Q2DynamicXyComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private HS: HelperService, private SB: MatSnackBar) {
    this.HS.$X.subscribe(x=>this.Xs = x);
  }

  Xs: any = {};

  ngOnInit(): void {
  }

  getNames() {
    return Object.keys(this.Xs);
  }
  addX(str) {
    if(str in this.Xs) this.SB.open("Another X with same name already exists!!", "Ok");
    else this.Xs[str] = [];
    this.cdr.detectChanges();
  }

}
