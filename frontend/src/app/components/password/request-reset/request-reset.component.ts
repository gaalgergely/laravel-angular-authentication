import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../../services/jarwis.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.errors.email)
    );
  }

  handleResponse(response) {
    this.form.email = null;
    this.notify.info(response.data);
  }
}
