import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperService } from 'src/app/helper.service';
import {environment as env} from "../../../environments/environment";

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.scss']
})
export class XComponent implements OnInit {

  @Input() name='';
  previousValue = '';
  
  constructor(private HS: HelperService, private SB: MatSnackBar) {
  }
  @Input() y = [];
  ngOnInit(): void {
    
  }

  processing = false;

  async save() {
    this.processing = true;
    let res: any = await this.HS.http.post(env.base + '/sol2-x', {previousValue: this.previousValue, name: this.name}).toPromise();
    if('error' in res) this.SB.open("Error occurred:" + res.message, "Ok");
    else this.HS.$X.next(res);
    this.processing = false;
  }

}
