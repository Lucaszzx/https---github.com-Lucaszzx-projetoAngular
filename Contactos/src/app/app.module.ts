
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SobreComponent } from './components/pages/sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NewContactComponent } from './components/pages/new-contact/new-contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContactComponent } from './components/pages/edit-contact/edit-contact.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactFormComponent,
    NewContactComponent,
    HomeComponent,
    SobreComponent,
    EditContactComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
