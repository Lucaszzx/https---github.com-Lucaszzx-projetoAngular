import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/class/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  private apiUrl = 'http://localhost:8765/contacts.json';
  contact!: Contact;
  action: string = 'edit';
  id!: number;

  constructor(
    private http: HttpClient,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contact = new Contact();
    this.id = this.route.snapshot.params['id'];
  }

  async editarContact(contact:Contact) {
    
    try {
      const editContact = await this.contactService.updateContact(this.id,contact).toPromise();
      console.log('contato atualizado:', editContact);


    } catch (error) {
      console.error('Erro ao adicionar o contato:', error);
    }
    this.router.navigate(['/']);
  }
}