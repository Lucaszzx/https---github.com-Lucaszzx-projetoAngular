import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Contact } from '../Contact';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8765/contacts.json';
  private headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');

  }

  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createContact(formData: FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeContact(contactId: number): Observable<any> {
    console.log(contactId);
     return this.http.delete("http://localhost:8765/contacts/"+contactId +".json",this.headers);
  }
}