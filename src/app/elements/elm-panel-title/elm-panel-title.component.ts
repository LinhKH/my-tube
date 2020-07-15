import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-elm-panel-title',
    templateUrl: './elm-panel-title.component.html',
    styleUrls: ['./elm-panel-title.component.css']
})
export class ElmPanelTitleComponent implements OnInit {
    @Input() layout:string;
    @Input() title:string;
    @Output() myLayout = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
    }

    setActive(layout: string){
		return {
			active: (layout == this.layout)
		}
    }
    
    setLayout(layout: string) {
        this.layout = layout;
        this.myLayout.emit(layout);
        return false;
    }

}
