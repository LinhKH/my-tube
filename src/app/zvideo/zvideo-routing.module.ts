import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { PlaylistsComponent } from './playlists/playlists.component';


const routes: Routes = [
    // Home Page /
    { path: '', component: HomeComponent },

    // List Videos /videos?page=1
    { path: 'videos', component: VideosComponent },

    // List Playlists /playlists?page=1
    { path: 'playlists', component: PlaylistsComponent },

    // List videos in Playlist
    // {
    //     path: 'playlist',
    //     children: [
    //         {
    //             path: '',
    //             component: PlaylistsComponent
    //         },
    //         {
    //             path: ':id',
    //             component: PlaylistComponent
    //         }
    //     ]
    // },

    // // Info video /video/:id
    // {
    //     path: 'video',
    //     children: [
    //         {
    //             path: '',
    //             component: VideosComponent
    //         },
    //         {
    //             path: ':id',
    //             component: VideoComponent
    //         }
    //     ]
    // },

    // { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZvideoRoutingModule { }
