import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

export class ManageComponent implements OnInit {
  form: FormGroup;

  constructor (private fb: FormBuilder) {
  }

  ngOnInit () {
   this.form = this.fb.group({
     name: ['', Validators.required],
     flyingBlueNumber: ['', Validators.required]
   });
  }

  onSubmit () {
    console.log(this.form.value);
  }

}
