import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DispositivoService } from '../../../../services/dispositivo/dispositivo.service';

@Component({
    selector: 'modal-delete-dispositivo',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalDeleteDispositivoComponent {

    closeResult: string;

    @Input() id: number;
    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _dispósitivoService: DispositivoService
    ) { }

    open(content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    delete() {
        this._dispósitivoService.delete(this.id)
          .subscribe(
            response => {
              this.modalRef.close();
              this.deleted.emit();
            }, error => {
            }, () => {

            })
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
