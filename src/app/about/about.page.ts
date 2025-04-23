import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  standalone: true, // Marked as standalone component
  imports: [IonicModule, CommonModule], // Required modules for Ionic components
})
export class AboutPage {}
