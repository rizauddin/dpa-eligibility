import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-timing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add both modules
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent {
  timingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService
  ) {
    this.timingForm = this.fb.group({
      timing: ['', Validators.required]
    });
  }

  onSubmit() {
    const timing = this.timingForm.get('timing')?.value;
    this.formDataService.setFormData('timing', { timing });

    if (timing === '4') {
      this.router.navigate(['/declaration']);
    } else {
      this.router.navigate(['/short-case-summary']);
    }
  }
}

