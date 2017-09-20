import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Atrapaniebla } from '../../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../../services/atrapaniebla/atrapaniebla.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    closeResult: string;

    public atrapaniebla: Atrapaniebla = <Atrapaniebla>{};
    public add_submitted = false;

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _atrapanieblaService: AtrapanieblaService
    ) { }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              console.log(position.coords)
            });
        }
    }

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
