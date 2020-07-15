import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsService } from './services/ads.service';
import { PagerService } from './services/pager.service';
import { PlaylistService } from './services/playlist.service';
import { VideoService } from './services/video.service';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
    declarations: [SafePipe],
    imports: [
        CommonModule
    ],
    providers: [
        AdsService,
        PagerService,
        PlaylistService,
        VideoService
    ]
})
export class SharedModule { }
