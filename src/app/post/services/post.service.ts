import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';


const BASE_API_URL:string = 'https://jsonplaceholder.typicode.com';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    
    constructor(private http:HttpClient) { }
    
    getPosts(): Observable<Post[]> {
        return this.http.get(`${BASE_API_URL}/posts`)
                        .map(resp => res.json())
                        .catch(err => Observable.throw(err.message));
    }
}
