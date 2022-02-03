import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-plate',
  templateUrl: './save-plate.component.html',
  styleUrls: ['./save-plate.component.css']
})
export class SavePlateComponent implements OnInit {

  SaveAPlateForm: FormGroup | any;
  submitted = false;

  constructor(public auth: AuthService, private dataService: DataService, private formBuilder: FormBuilder) { 


  }

  ngOnInit(): void {

     this.SaveAPlateForm = this.formBuilder.group({
            itemName: ['', Validators.required],
            // firstName: ['', Validators.required],
            // lastName: ['', Validators.required],
            // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            // email: ['', [Validators.required, Validators.email]],
            // password: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', Validators.required],
            // acceptTerms: [false, Validators.requiredTrue]
        });
  }

  get f() { return this.SaveAPlateForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.SaveAPlateForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.SaveAPlateForm.value, null, 4));
    }

    SaveAPlate(){
      console.log("Hello");
    }
    onReset() {
        this.submitted = false;
        this.SaveAPlateForm.reset();
    }


}
