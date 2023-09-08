import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Contact>;
  @Input() btnText!: string;

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      
      email: new FormControl('', [Validators.required, Validators.email]),
    });
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

  
  submit() {
    if(this.contactForm.invalid){
      return;
    }
  console.log(this.contactForm.value);
  this.onSubmit.emit(this.contactForm.value)

}
}