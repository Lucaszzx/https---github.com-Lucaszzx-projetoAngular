import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/class/contact';
import { ContactService } from 'src/app/services/contact.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
 
})
export class HomeComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = [
    'id',
    'name',
    'apelido',
    'address',
    'email',
    'phone',
    'action',
  ];
  contacts: any[] = [];
  dataSource = new MatTableDataSource();
  contact: Contact = new Contact();

  

  constructor(
    private contactService: ContactService,
    private http: HttpClient,
  
  ) {}

  ngOnInit(): void {
    this.loadContacts();
    this.dataSource.paginator = this.paginator;
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(
      (contacts: any) => {
        this.dataSource = new MatTableDataSource(contacts['contacts']);
        this.dataSource.paginator = this.paginator;
        console.log(contacts);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  removeContact(id: number) {
    this.contactService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this.loadContacts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}
