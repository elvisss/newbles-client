import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AtrapanieblaService } from '../../../../services/atrapaniebla/atrapaniebla.service';

import { Atrapaniebla, estadoAtrapaniebla } from '../../../../model/atrapaniebla';

@Component({
    selector: 'app-delete-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalDeleteComponent {

    closeResult: string;

    @Input() atrapaniebla: Atrapaniebla;
    @Output() deleted: EventEmitter<string> = new EventEmitter<string>();

    private modalRef:  NgbModalRef;

    public message: string = "La eliminación está pendiente de revisión";

    constructor(
        private modalService: NgbModal,
        private _atrapanieblaService: AtrapanieblaService
    ) { }

    open(content) {
        this.atrapaniebla.ID_ESTADO_ATRAPANIEBLAS = estadoAtrapaniebla.pending_delete;

        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    deleteAtrapaniebla() {
        this._atrapanieblaService.update(this.atrapaniebla)
          .subscribe(
            response => {
              this.modalRef.close();
              this.deleted.emit(this.message);
            }, error => {
                this.modalRef.close();
            }, () => {
                this.modalRef.close();
            })
        // this._atrapanieblaService.delete(this.id)
        //   .subscribe(
        //     response => {
        //       this.modalRef.close();
        //       this.deleted.emit(this.message);
        //     }, error => {
        //     }, () => {

        //     })
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
