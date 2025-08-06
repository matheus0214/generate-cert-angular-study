import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './_components/navbar/navbar'
import {PrimaryButton} from './_components/primary-button/primary-button'
import {SecondaryButton} from './_components/secondary-button/secondary-button'
import { CommonModule } from '@angular/common';
import { CertificateItem } from './_components/certificate-item/certificate-item';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';
import { Certificate } from './pages/certificate/certificate';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    CommonModule,
    PrimaryButton,
    SecondaryButton,
    CertificateItem,
    BaseUi,
    Certificates,
    CertificateForm,
    Certificate
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('generate-cert');
  protected readonly showNavbar = false;
}
