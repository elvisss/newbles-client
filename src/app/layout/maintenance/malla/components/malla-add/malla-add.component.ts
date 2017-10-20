import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Malla } from '../../../../../model/malla';
import { MallaService } from '../../../../../services/malla/malla.service';

@Component({
    selector: 'malla-add',
    templateUrl: './malla-add.component.html',
    styleUrls: ['./malla-add.component.scss']
})
export class MallaAddComponent implements OnInit {

    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    closeResult: string;

    public malla: Malla = <Malla>{};
    public add_submitted = false;

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _mallaService: MallaService
    ) { }

    ngOnInit() {
    }

    open(content) {
        this.malla = <Malla>{};
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    add(form) {
      if (form.valid) {
        this._mallaService.create(this.malla)
          .subscribe(
            response => {
              this.modalRef.close();
              this.deleted.emit();
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
