import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
@Injectable({
    providedIn: 'root',
})
export class PostService {
    apiUrl: string;

    constructor(private httpClient: HttpClient) {
        // this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
        this.apiUrl = 'http://localhost:8080/posts';
    }

    getPosts(): Observable<any>{
        return this.httpClient.get(this.apiUrl);
    }

    getPostById(id: number): Observable<any>{
        return this.httpClient.get(this.apiUrl + "/" + id);
    }

    addPost(post: Post): Observable<Post> {
        return this.httpClient.post<Post>(this.apiUrl, post);
    }

    delPost(id: number): Observable<Post> {
        return this.httpClient.delete<Post>(this.apiUrl + "/" + id);
    }

    updatePost(id: any, postObject: Post) {
        return this.httpClient.put(this.apiUrl + "/" + id, postObject);
      }
}