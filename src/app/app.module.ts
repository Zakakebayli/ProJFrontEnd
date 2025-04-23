import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about.page';
import { IonicModule } from '@ionic/angular';
import { AboutPageRoutingModule } from './about-routing.module';  // Import the routing module

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AboutPageRoutingModule  // Include the routing module here
  ],
  declarations: [AboutPage],  // Declare the AboutPage component here
})
export class AboutPageModule {}
