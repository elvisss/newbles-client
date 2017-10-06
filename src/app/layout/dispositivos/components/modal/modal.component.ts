import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Dispositivo } from '../../../../model/dispositivo';
import { DispositivoService } from '../../../../services/dispositivo/dispositivo.service';

@Component({
    selector: 'modal-add-dispositivo',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalAddDispositivoComponent implements OnInit {

    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    closeResult: string;

    public dispositivo: Dispositivo = <Dispositivo>{};
    public add_submitted = false;

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _dispositivoService: DispositivoService
    ) { }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              console.log(position.coords)
            });
        }
    }

    open(content) {
        this.dispositivo = <Dispositivo>{};
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    add(form) {
      if (form.valid) {
        this._dispositivoService.create(this.dispositivo)
          .subscribe(
            response => {
              this.modalRef.close();
              this.deleted.emit();
            }, error => {
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
