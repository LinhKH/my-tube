import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    playlistsInfo: any[];

    constructor() { }

    ngOnInit() {
        this.playlistsInfo = [
            // ZendVN Vlog
            {
                'playlistID': 'PLrock2PlAUSAZYOViCd6XGTMU0_mLZXHG',
                'layoutType': 'grid',
                'totalItems': 3
            },
            // Angular
            {
                'playlistID': 'PLv6GftO355AsMUZXqKY_IFsNahY1txNXS',
                'layoutType': 'hdgrid',
                'totalItems': 2
            },
            // MongoDB
            {
                'playlistID': 'PLv6GftO355Aug0rwKfb6v96mlYrwOw7XV',
                'layoutType': 'list',
                'totalItems': 2
            },
            // Android
            {
                'playlistID': 'PLv6GftO355AsmgFEoUx_XHfN14FAI3SrN',
                'layoutType': 'hdlist',
                'totalItems': 1
            }
        ];
    }

}
