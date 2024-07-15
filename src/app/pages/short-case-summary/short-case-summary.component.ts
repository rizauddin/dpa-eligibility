import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-short-case-summary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add necessary modules
  templateUrl: './short-case-summary.component.html',
  styleUrls: ['./short-case-summary.component.css']
})
export class ShortCaseSummaryComponent {
  caseSummaryForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private formDataService: FormDataService
  ) {
    this.caseSummaryForm = this.fb.group({
      offenceDescription: ['', Validators.required],
      howCameToLight: ['', Validators.required],
      otherPersonsInvolved: ['', Validators.required],
      evidenceSources: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formDataService.setFormData('shortCaseSummary', this.caseSummaryForm.value);
    this.router.navigate(['/suspected-offences']);
  }
}

