import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3-form',
  templateUrl: './q3-form.component.html',
  styleUrls: ['./q3-form.component.scss']
})
export class Q3FormComponent implements OnInit {

  constructor() { }

  phones:{[num: string]: string} = {0:''};
  getKeys() {
    // console.log(this.phones);
    return Object.keys(this.phones);
  }
  ngOnInit(): void {
  }

  addPhone() {
    let ind = 0;
    for(let i in this.phones) {
      ind++;
    }
    this.phones[ind] = '';
  }

  delPhone(index) {
    delete this.phones[index];
    // rearrange numbers orders
    let ind= 0, newVal = {};
    for(let i in this.phones) {
      newVal[ind++] = this.phones[i];
    }
    this.phones = newVal;
  }

  submit() {
    let ind, res = [];
    for(let i in this.phones) {
      let x = {};
      x[`phoneNumber${i}`] =this.phones[i];
      res.push(x);
    }
    console.log(res);
  }


}
