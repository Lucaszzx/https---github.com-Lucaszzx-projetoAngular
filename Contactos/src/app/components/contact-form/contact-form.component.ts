import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/class/contact';

import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Contact>;
  @Input() action!: string;
  @Input() contact!: any;

  contactForm!: FormGroup;
  formType!:string;
  btnText!: string;

  constructor(
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {

    if (this.action=="add"){
      this.btnText="adicionar";

      this.contactForm = new FormGroup({
        id:new FormControl(''),
        first_name: new FormControl( '',[Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        phone_number: new FormControl('',[Validators.required]),
        address: new FormControl('', [Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
     });

    }else if(this.action=="edit"){
      this.btnText="editar";
      this.getContacts();
    }

  }

  getContacts(){
    this.contactService.getContact(this.contact).subscribe((data) => {
     this.contact = data["contact"];
     
      this.contactForm = new FormGroup({
        id:new FormControl(this.contact ? this.contact.id:''),
        first_name: new FormControl(this.contact ? this.contact.first_name : '', [Validators.required]),
        last_name: new FormControl(this.contact ? this.contact.last_name : '', [Validators.required]),
        phone_number: new FormControl(this.contact? this.contact.phone_number : '', [Validators.required]),
        address: new FormControl(this.contact ? this.contact.address : '', [Validators.required]),
        email: new FormControl(this.contact ? this.contact.email : '', [Validators.required, Validators.email]),
     });
    }, error => console.log(error));
  }
  
  submit() {
    if(this.contactForm.invalid){
      return;
    }
    this.onSubmit.emit(this.contactForm.value)

  }

  get first_name() {
    return this.contactForm.get('first_name')!;
  }

  get last_name() {
    return this.contactForm.get('last_name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get address() {
    return this.contactForm.get('address')!;
  }

  get phone_number() {
    return this.contactForm.get('phone_number')!;
  }

  

}