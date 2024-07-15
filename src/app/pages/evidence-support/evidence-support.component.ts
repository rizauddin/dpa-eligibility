import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-evidence-support',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add necessary modules
  templateUrl: './evidence-support.component.html',
  styleUrls: ['./evidence-support.component.css']
})
export class EvidenceSupportComponent {
  evidenceSupportForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private formDataService: FormDataService
  ) {
    this.evidenceSupportForm = this.fb.group({
      evidence: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formDataService.setFormData('evidenceSupport', this.evidenceSupportForm.value);
    this.router.navigate(['/undertaking-costs']);
  }
}
