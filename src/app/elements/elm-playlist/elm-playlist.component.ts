import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/app/shared/services/video.service';
import { PlaylistService } from 'src/app/shared/services/playlist.service';
import { Playlist } from 'src/app/shared/defines/playlist.class';
import { Video } from 'src/app/shared/defines/video.class';

@Component({
    selector: 'app-elm-playlist',
    templateUrl: './elm-playlist.component.html',
    styleUrls: ['./elm-playlist.component.css']
})
export class ElmPlaylistComponent implements OnInit {
    @Input() playlistId:string;
    @Input() layout:string;
    @Input() totalItems:number = 2;

    playlistInfo: Playlist = null;
    items: Video[] = [];
    constructor(
        private _videoService: VideoService,
		private _playlistService: PlaylistService
    ) { }

    ngOnInit() {
        this.initData();
    }

    initData(){
		this.playlistInfo = new Playlist(
            "PLrock2PlAUSAZYOViCd6XGTMU0_mLZXHG",
            "UC09sEo-HemZlMkGNH9_jatw",
            "Lập trình viên - Coder - Developer",
            "lap-trinh-vien-coder-developer",
            null,
            "https://i.ytimg.com/vi/676oRtYuC2E/maxresdefault.jpg",
        ) ;
	}

    changeLayout(data: any) {
        this.layout = data;
    }

}
