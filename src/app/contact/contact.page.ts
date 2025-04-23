import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ContactPage {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Contact form submitted:', this.contact);
    alert('Thanks for your message, ' + this.contact.name + '!');
    this.contact = { name: '', email: '', message: '' }; // Reset form
  }
}
