import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../class/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8765';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8765/contacts.json`);
  }

  getContact(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/contacts/${id}.json`);
  }

  createContact(contact: any): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}/contacts.json`, contact);
  }

  // removeContact(contactId: number): Observable<any> {
  //   console.log(contactId);
  //    return this.http.delete("http://localhost:8765/contacts/"+10+".json");
  // }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/contacts/${id}.json`);
  }

  updateContact(id: any, contact: any): Observable<FormData> {
    const url = `${this.apiUrl}/contacts/${id}.json`;
    return this.http.put<FormData>(url, contact);
  }
}
