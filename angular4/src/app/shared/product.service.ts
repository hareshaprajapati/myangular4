import {Injectable} from '@angular/core';
import {Product} from './product';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {RequestOptionsArgs} from "@angular/http/src/interfaces";

@Injectable()
export class ProductService {

  constructor(private http: Http, private httpClient: HttpClient) {
  }

  private observe: null;

  getProducts()
  // : Observable<Product[]>
  {
    return this.http.get("http://localhost:8080/getProducts").map(value =>
    /*{
      return value.json()
    }*/
    value.json()
    ).catch(err => Observable.throw(err)
    );
  }

  getProductById(productId: number): Observable<Product> {
    /*let params = new URLSearchParams();
    params.set('id', productId.toString());*/

    /*let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');*/

    return this.http.get('http://localhost:8080/getProductById', {
      params: {
        id: productId
      }
    })
      .map(value => {
          console.log(("get product by id " + value.json()));
          return value.json();
        }
      ).catch(err => Observable.throw(err)
      );
  }
}
