import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit{
  btnText: string = 'Adicionar';

  constructor(
    
    private contactService: ContactService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
      
  }

  async createHandler(contact: Contact){

    const formData= new FormData()

    formData.append('first_name', contact.first_name);
    formData.append('last_name', contact.last_name);
    formData.append('email', contact.email);
    formData.append('address', contact.address);
    formData.append('phone_number', contact.phone_number);

    try {
      const newContact = await this.contactService.createContact(formData).toPromise();
      console.log('Novo contato adicionado:', newContact);

      this.router.navigate(['/']);
    } catch (error) {
      console.error('Erro ao adicionar o contato:', error);
    }
  }
}



