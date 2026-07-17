import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task {
    private apiurl = "https://dummyjson.com/todos";
    constructor(private http: HttpClient) {}
        getTasks(): Observable<any> {
            return this.http.get(this.apiurl);
        }
        getTaskById(id:number): Observable<any> {
            return this.http.get(`https://dummyjson.com/todos/${id}`);
        }
}

