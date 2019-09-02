import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private Jarwis: JarwisService,
    private router: Router
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
    return this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
