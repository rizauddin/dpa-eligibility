import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-undertaking-costs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add necessary modules
  templateUrl: './undertaking-costs.component.html',
  styleUrls: ['./undertaking-costs.component.css']
})
export class UndertakingCostsComponent {
  undertakingCostsForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private formDataService: FormDataService
  ) {
    this.undertakingCostsForm = this.fb.group({
      costsDescription: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formDataService.setFormData('undertakingCosts', this.undertakingCostsForm.value);
    this.router.navigate(['/declaration']);
  }
}
