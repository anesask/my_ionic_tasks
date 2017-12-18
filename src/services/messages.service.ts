import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MessageService{
    constructor(
        private toastCtrl: ToastController){}

show(message: string, duration: number = 3000){
    return this.toastCtrl
    .create({
        message,
        duration
    })
    .present();
}
}