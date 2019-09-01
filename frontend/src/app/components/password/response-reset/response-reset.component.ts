import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JarwisService} from '../../../services/jarwis.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public form = {
    password: null,
    password_confirmation: null,
    resetToken: null
  };

  public error = [];

  constructor(
    private route: ActivatedRoute,
    private Jarwis: JarwisService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params.token;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {

  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
