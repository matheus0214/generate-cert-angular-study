import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './_components/navbar/navbar'
import {PrimaryButton} from './_components/primary-button/primary-button'
import {SecondaryButton} from './_components/secondary-button/secondary-button'
import { CommonModule } from '@angular/common';
import { CertificateItem } from './_components/certificate-item/certificate-item';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    CommonModule,
    PrimaryButton,
    SecondaryButton,
    CertificateItem
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('generate-cert');
  protected readonly showNavbar = false;
}
