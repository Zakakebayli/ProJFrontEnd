import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // Import Ionic components
})
export class SettingsPage {
  deviceInfo: any = {}; // Object to store device details

  constructor() {
    this.fetchDeviceInfo();
  }

  async fetchDeviceInfo() {
    try {
      this.deviceInfo = await Device.getInfo(); // Retrieve device information
    } catch (error) {
      console.error('Failed to load device info:', error);
    }
  }
}
