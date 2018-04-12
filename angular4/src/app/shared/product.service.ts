import {Injectable} from '@angular/core';
import {Product} from './product';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {

  constructor(private http: Http,private httpClient: HttpClient) {
  }

  products: Product[];
  private observe: null;

  getProducts(): Observable<Product[]> {
    return this.http.get("http://localhost:8080/getProducts").
    map(value => {
      return value.json()
    }).catch(err => Observable.throw(err)
    );

    /*subscribe(
       value => {
         this.products =  value.json();
         console.log(this.products)
       },
       error2 => console.log("there is some error" + error2),
       () => console.log("getProducts completed.")
     )*/

  }

  getProductById(productId: number): Observable<Product> {
    // return products.find(p => p.id === productId);
    let params = new URLSearchParams();
    params.set('id', productId.toString());
    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');

    this.httpClient.get('http://localhost:8080/getProductById', {
      params: {
        id: '0'
      },
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        console.log(response.body.toString());
        return response.body.toString();
      })
      .catch(console.log);
return null;

    /*this.http.get('http://localhost:8080/getProductById', {
      params: {
        id: '0'
      }
    })
      .toPromise()
      .then(response => {
        console.log('hi coool ' + response.json());
        return response.json()
      })
      .catch(console.log);*/
    /*return this.http.get("http://localhost:8080/getProductById/",
      {params: params}).
    map(value => {
      return value.json()
    }).catch(err => Observable.throw(err)
    );*/
  }
}

// const products = [
//   {
//     "id": 0,
//     "title": "First Product",
//     "price": 24.99,
//     "rating": 4.3,
//     "shortDescription": "This is a short description of the First Product",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "categories": ["electronics", "hardware"]
//   },
//   {
//     "id": 1,
//     "title": "Second Product",
//     "price": 64.99,
//     "rating": 3.5,
//     "shortDescription": "This is a short description of the Second Product",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "categories": ["books"]
//   },
//   {
//     "id": 2,
//     "title": "Third Product",
//     "price": 74.99,
//     "rating": 4.2,
//     "shortDescription": "This is a short description of the Third Product",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "categories": ["electronics"]
//   },
//   {
//     "id": 3,
//     "title": "Fourth Product",
//     "price": 84.99,
//     "rating": 3.9,
//     "shortDescription": "This is a short description of the Fourth Product",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "categories": ["hardware"]
//   },
//   {
//     "id": 4,
//     "title": "Fifth Product",
//     "price": 94.99,
//     "rating": 5,
//     "shortDescription": "This is a short description of the Fifth Product",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "categories": ["electronics", "hardware"]
//   },
//   {
//     "id": 5,
//     "title": "Sixth Product",
//     "price": 54.99,
//     "rating": 4.6,
//     "shortDescription": "This is a short description of the Sixth Product",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "categories": ["books"]
//   }
// ];
