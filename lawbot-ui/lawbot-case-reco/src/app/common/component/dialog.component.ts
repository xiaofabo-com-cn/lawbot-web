import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-dialog',
  template: `<div class="modal-header">
  <h4 class="modal-title pull-left">{{title}}</h4>
  <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  {{message}}
</div>`,
  styles: []
})
export class DialogComponent implements OnInit {
  title: string = '';
  message: string = '';
  bsModalRef: BsModalRef;
  constructor() { }

  ngOnInit() {
  }

}
