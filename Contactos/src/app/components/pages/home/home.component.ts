import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import {MatTableModule} from '@angular/material/table';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormGroup,FormControl,  Validators,FormGroupDirective,} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})


export class HomeComponent {

  displayedColumns: string[] = ['id', 'name','apelido','phone','action'];
  contacts: Contact[] = [];
  dataSource = new MatTableDataSource();





  constructor(private contactService: ContactService, private http: HttpClient) {
 

  }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.dataSource = new MatTableDataSource(contacts["contacts"]);
      console.log(contacts);
    }, error => {
      console.log(error);
    });
   }


   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   
  }
  removeContact(id: number) {

    this.contactService.removeContact(id).subscribe((response) => { 
      console.log(response["message"]); 
      this.loadContacts();
    }, error => { 
      console.log(error); 
    });

  }

    // .subscribe(
    //   () => {
    //     // Remova o contato da lista após a remoção bem-sucedida
    //     // this.contacts = this.contacts.filter(contact => contact.id !== id);
    //     console.log(`Contato com ID ${id} removido com sucesso!`);
    //   },
    //   error => {
    //     console.error(`Erro ao remover o contato com ID ${id}:`, error);
    //   }
    // );
  }


   
  
