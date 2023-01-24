import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'confirm-modal',
    styleUrls: ["./confirm-modal.component.scss"],
    template: `
        <div class="container-modal">
            <div class="content-modal">
                <h5>{{message}}</h5>
                <div class="buttons"> 
                    <button class="btn btn-secondary btn-sm cancel" (click)="cancel.emit()">Cancel</button>
                    <button class="btn btn-primary btn-sm" (click)="submit.emit()">Confirm</button>
                </div>
            </div>    
        </div>
    `
})
export class ConfirmModalComponent {
    @Input()
    message: string;

    @Output()
    submit: EventEmitter<any> = new EventEmitter();

    @Output()
    cancel: EventEmitter<any> = new EventEmitter();

    constructor() {}
}