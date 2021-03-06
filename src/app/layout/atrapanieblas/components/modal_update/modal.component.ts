import { Component, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Atrapaniebla, estadoAtrapaniebla } from '../../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../../services/atrapaniebla/atrapaniebla.service';

import { Dispositivo } from '../../../../model/dispositivo';
import { DispositivoService } from '../../../../services/dispositivo/dispositivo.service';

import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
    selector: 'update-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalUpdateComponent {

    @Input() atrapaniebla: Atrapaniebla;
    @Input() dispositivos: Dispositivo[];
    @Output() updated: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('coords') coords: SwalComponent;

    public message = "La actualización está pendiente de revisión";
    public file: any;

    closeResult: string;

    public add_submitted = false;
    // public dispositivos:Dispositivo[] = [];

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _atrapanieblaService: AtrapanieblaService,
        private _dispositivoService: DispositivoService
    ) { }
    
    open(content) {

        this.atrapaniebla.ID_ESTADO_ATRAPANIEBLAS = estadoAtrapaniebla.pending_updating;

        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    updateAtrapaniebla(form) {
      if (form.valid) {
        this._atrapanieblaService.update(this.atrapaniebla)
          .subscribe(
            response => {
              this.modalRef.close();
              this.updated.emit(this.message);
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

    onChange(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event:any) => {
              this.file = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    setImage() {
        this._atrapanieblaService.setPhoto(this.file)
          .subscribe(
            response => {
              this.modalRef.close();
              this.updated.emit(this.message);
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
