import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../form-data.service';
import { CommonModule } from '@angular/common';
import { KeyValuePipe, TitleCasePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-final-page',
  standalone: true,
  imports: [CommonModule, KeyValuePipe, TitleCasePipe, JsonPipe], // Add necessary pipes
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {
  formData: any = {}; // Initialize formData to an empty object

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData() || {}; // Retrieve stored data
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  isObject(value: any): value is Record<string, any> {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  asObject(value: any): Record<string, any> {
    return value as Record<string, any>;
  }

  printPage() {
    window.print();
  }
}
