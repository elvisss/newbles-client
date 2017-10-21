import { Component, ViewChild, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Atrapaniebla } from '../../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../../services/atrapaniebla/atrapaniebla.service';

import { Dispositivo } from '../../../../model/dispositivo';
import { DispositivoService } from '../../../../services/dispositivo/dispositivo.service';

@Component({
    selector: 'update-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalUpdateComponent implements OnInit {

    @Input() atrapaniebla: Atrapaniebla;
    @Output() updated: EventEmitter<void> = new EventEmitter<void>();

    closeResult: string;

    public add_submitted = false;
    public dispositivos:Dispositivo[] = [];

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _atrapanieblaService: AtrapanieblaService,
        private _dispositivoService: DispositivoService
    ) { }

    ngOnInit() {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(position => {
        //         console.log(position.coords)
        //         this.atrapaniebla.LONGITUD = position.coords.longitude;
        //         this.atrapaniebla.LATITUD = position.coords.latitude;
        //     });
        // }

        console.log(this.atrapaniebla)

        this.dispositivos = [];
        this._dispositivoService.list()
            .subscribe( res => {
                this.dispositivos = res.data;
            });
        
    }

    open(content) {
        // this.atrapaniebla = <Atrapaniebla>{};

        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(position => {
        //         this.atrapaniebla.LONGITUD = position.coords.longitude;
        //         this.atrapaniebla.LATITUD = position.coords.latitude;
        //     });
        // }

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
              this.updated.emit();
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
