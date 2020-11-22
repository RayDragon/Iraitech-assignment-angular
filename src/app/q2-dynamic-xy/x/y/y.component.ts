import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperService } from 'src/app/helper.service';
import {environment as env} from "../../../../environments/environment";

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss']
})
export class YComponent implements OnInit {

  @Input() parentName: '';
  @Input() value = '';

  constructor(private HS: HelperService, private SB: MatSnackBar) { }

  ngOnInit(): void {
  }

  processing = false;
  async save(){
    this.processing = true;
    let res: any = await this.HS.http.post(env.base + '/sol2-y', {x: this.parentName, y: this.value}).toPromise();
    console.log(res);
    if('error' in res) this.SB.open("Error occurred:" + res.message, "Ok");
    else this.HS.$X.next(res);
    this.processing = false;
  }

}
