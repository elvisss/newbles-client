import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Atrapaniebla, estadoAtrapaniebla } from '../../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../../services/atrapaniebla/atrapaniebla.service';

import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
    selector: 'app-coords-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalCoordsComponent implements OnInit {

    closeResult: string;

    @Input() atrapaniebla: Atrapaniebla;
    @Output() added: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('coords') coords: SwalComponent;

    public atrapanieblaEdit:Atrapaniebla = <Atrapaniebla>{};
    private modalRef: NgbModalRef;
    public file: any;

    public message: string = "La actualización de georeferenciación está pendiente de revisión";

    constructor(
        private modalService: NgbModal,
        private _atrapanieblaService: AtrapanieblaService
    ) { }

    ngOnInit() {
        this.atrapanieblaEdit = Object.assign({}, this.atrapaniebla);
        this.atrapanieblaEdit.ID_ESTADO_ATRAPANIEBLAS = estadoAtrapaniebla.pending_geo;
    }

    open(content) {

        if (navigator.geolocation) {
            this.coords.show()
        }

        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    loadCoords() {
        navigator.geolocation.getCurrentPosition(position => {
            this.atrapanieblaEdit.LONGITUD = position.coords.longitude;
            this.atrapanieblaEdit.LATITUD = position.coords.latitude;
        });
    }

    onChange(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event:any) => {
              this.file = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    updateCoords() {

        this._atrapanieblaService.update(this.atrapanieblaEdit)
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
    }

    setImage() {
        this._atrapanieblaService.setPhoto(this.file)
          .subscribe(
            response => {
              this.modalRef.close();
              this.added.emit(this.message);
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
