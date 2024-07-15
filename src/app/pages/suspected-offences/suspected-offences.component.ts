import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-suspected-offences',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add necessary modules
  templateUrl: './suspected-offences.component.html',
  styleUrls: ['./suspected-offences.component.css']
})
export class SuspectedOffencesComponent {
  suspectedOffencesForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private formDataService: FormDataService
  ) {
    this.suspectedOffencesForm = this.fb.group({
      offenceAttentionDate: ['', Validators.required],
      internalInvestigation: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formDataService.setFormData('suspectedOffences', this.suspectedOffencesForm.value);
    //this.router.navigate(['/evidence-support']);
    this.router.navigate(['/undertaking-costs']);
  }
}
