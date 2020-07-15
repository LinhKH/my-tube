import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZvideoRoutingModule } from './zvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ElementsModule } from '../elements/elements.module';


@NgModule({
  declarations: [HomeComponent, VideosComponent, PlaylistsComponent],
  imports: [
    CommonModule,
    ElementsModule,
    ZvideoRoutingModule
  ]
})
export class ZvideoModule { }
