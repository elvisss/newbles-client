import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Bateria } from '../../../../../model/bateria';
import { BateriaService } from '../../../../../services/bateria/bateria.service';

@Component({
    selector: 'bateria-delete',
    templateUrl: './bateria-delete.component.html',
    styleUrls: ['./bateria-delete.component.scss']
})
export class BateriaDeleteComponent {

    closeResult: string;

    @Input() id: number;
    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _bateriaService: BateriaService
    ) { }

    open(content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    deleteAtrapaniebla() {
        this._bateriaService.delete(this.id)
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
