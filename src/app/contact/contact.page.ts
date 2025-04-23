import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  standalone: true, // Makes this a standalone component
  imports: [IonicModule, CommonModule], // Import Ionic and Common modules
})
export class ContactPage {}
