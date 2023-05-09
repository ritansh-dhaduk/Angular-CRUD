import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ]

  empForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empServices: EmployeeService,
    private dialogRef: DialogRef<EmpAddEditComponent>
  ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }


  onFormSubmit() {
    if (this.empForm.valid) {
      this.empServices.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added Successfully');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }
}
