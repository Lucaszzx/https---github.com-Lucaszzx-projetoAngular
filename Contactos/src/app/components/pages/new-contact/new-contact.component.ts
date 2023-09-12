import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/class/contact';
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
  action: string = 'add';

  constructor(
    
    private contactService: ContactService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
      
  }

  async createHandler(contact: Contact){
    try {
      const newContact = await this.contactService.createContact(contact).toPromise();
      console.log('Novo contato adicionado:', newContact);

      this.router.navigate(['/']);
    } catch (error) {
      console.error('Erro ao adicionar o contato:', error);
    } 
  }
}



