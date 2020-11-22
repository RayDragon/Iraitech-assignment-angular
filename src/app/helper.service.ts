import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment as env} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  $X = new BehaviorSubject<any>({});
  constructor(public http: HttpClient) {
    this.getVals();
  }
  async getVals() {
    let res = await this.http.get(env.base).toPromise();
    this.$X.next(res);
  }
}
