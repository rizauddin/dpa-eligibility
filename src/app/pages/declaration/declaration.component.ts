import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-declaration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add necessary modules
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent {
  declarationForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private formDataService: FormDataService
  ) {
    this.declarationForm = this.fb.group({
      declaration: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.formDataService.setFormData('declaration', this.declarationForm.value);
    this.router.navigate(['/final-page']);
  }
}
