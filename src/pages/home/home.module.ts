import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { HomePage } from './home';
import { clamp } from 'ionic-angular/util/util';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule{
    
}