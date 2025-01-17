import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { RegForm } from './regform.model';

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
    }

    addForm(form: RegForm): Observable<RegForm> {
        return this.httpClient.post<RegForm>(this.apiUrl, form);
    }
}