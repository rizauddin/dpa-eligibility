import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../form-data.service';
import { CommonModule, KeyValuePipe, TitleCasePipe, JsonPipe } from '@angular/common'; // Import necessary pipes

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
    this.formData = this.formDataService.getFormData() || {}; // Provide a fallback
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  printPage() {
    window.print();
  }
}
