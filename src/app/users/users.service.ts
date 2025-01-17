import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = "https://fakestoreapi.com/users ";
    }

    getUsers(): Observable<any>{
        return this.httpClient.get(this.apiUrl);
    }
}