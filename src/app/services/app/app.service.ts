import { Injectable } from '@angular/core';
import { HttpsService } from '../https/https.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class AppService extends HttpsService {
  public PRICELIST = 'pricelist';

  constructor(public http: HttpClient) {
    super();
  }
  
  public getPriceList(): Observable<any> {
    return this.get(this.http, this.PRICELIST);
  }
  public getPriceListById(id:number): Observable<any> {
    return this.get(this.http, `${this.PRICELIST}/${id}`);
  }
  public updatePriceList(id:number, params:any): Observable<any> {
    return this.put(this.http, `${this.PRICELIST}/${id}`, params);
  }
}
