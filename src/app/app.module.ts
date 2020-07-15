import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { SharedModule } from './shared/shared.module';
import { ZvideoModule } from './zvideo/zvideo.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ElementsModule,
        SharedModule,
        ZvideoModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        ElementsModule
    ]
})
export class AppModule { }
