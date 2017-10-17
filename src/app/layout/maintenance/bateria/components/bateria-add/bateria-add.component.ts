import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Bateria } from '../../../../../model/bateria';
import { BateriaService } from '../../../../../services/bateria/bateria.service';

@Component({
    selector: 'bateria-add',
    templateUrl: './bateria-add.component.html',
    styleUrls: ['./bateria-add.component.scss']
})
export class BateriaAddComponent implements OnInit {

    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    closeResult: string;

    public bateria: Bateria = <Bateria>{};
    public add_submitted = false;

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _bateriaService: BateriaService
    ) { }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              console.log(position.coords)
            });
        }
    }

    open(content) {
        this.bateria = <Bateria>{};
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    add(form) {
      if (form.valid) {
        this._bateriaService.create(this.bateria)
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
