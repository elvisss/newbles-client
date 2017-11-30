import { Component, ViewChild, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Atrapaniebla } from '../../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../../services/atrapaniebla/atrapaniebla.service';

import { Dispositivo } from '../../../../model/dispositivo';
import { DispositivoService } from '../../../../services/dispositivo/dispositivo.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() dispositivos:Dispositivo[];
    @Output() added: EventEmitter<string> = new EventEmitter<string>();

    closeResult: string;

    public atrapaniebla: Atrapaniebla = <Atrapaniebla>{};
    public add_submitted = false;

    public message: string = "La creación está pendiente de revisión";

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _atrapanieblaService: AtrapanieblaService,
        private _dispositivoService: DispositivoService
    ) { }

    ngOnInit() {}

    open(content) {
        this.atrapaniebla = <Atrapaniebla>{};

        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    addAtrapaniebla(form) {
      if (form.valid) {
        this._atrapanieblaService.create(this.atrapaniebla)
          .subscribe(
            response => {
              this.modalRef.close();
              this.added.emit(this.message);
            }, error => {
                this.modalRef.close();
                console.log(error)
            }, () => {
                this.modalRef.close();
            })
      } else {
        this.add_submitted = true;
      }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
