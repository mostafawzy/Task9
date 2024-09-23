import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeSrvieceService {

  private baseUrl = 'http://localhost:3001';
  constructor(private http:HttpClient) { }



  getItemList():Observable<any>{
    return this.http.get(`${this.baseUrl}/movies`);
  };

  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMovieById/${id}`);
  }
  
}
