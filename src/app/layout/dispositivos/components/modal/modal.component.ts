import { Component, ViewChild, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Dispositivo } from '../../../../model/dispositivo';
import { DispositivoService } from '../../../../services/dispositivo/dispositivo.service';

import { Servomotor } from '../../../../model/servomotor';
import { ServomotorService } from '../../../../services/servomotor/servomotor.service';

import { Bateria } from '../../../../model/bateria';
import { BateriaService } from '../../../../services/bateria/bateria.service';

@Component({
    selector: 'modal-add-dispositivo',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalAddDispositivoComponent implements OnInit {

    @Input() servomotors: Servomotor[];
    @Input() baterias: Servomotor[];
    @Output() added: EventEmitter<void> = new EventEmitter<void>();

    closeResult: string;

    public dispositivo: Dispositivo = <Dispositivo>{};
    public add_submitted = false;

    private modalRef:  NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private _dispositivoService: DispositivoService,
        private _servomotorService: ServomotorService,
        private _bateriaService: BateriaService
    ) { }

    ngOnInit() {
        
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
              this.added.emit();
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
