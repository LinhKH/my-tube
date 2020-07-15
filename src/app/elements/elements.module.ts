import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElmHeaderComponent } from './elm-header/elm-header.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';
import { ElmFooterComponent } from './elm-footer/elm-footer.component';
import { ElmFooterTopComponent } from './elm-footer-top/elm-footer-top.component';
import { ElmFooterBottomComponent } from './elm-footer-bottom/elm-footer-bottom.component';
import { ElmPlaylistComponent } from './elm-playlist/elm-playlist.component';
import { ElmPanelTitleComponent } from './elm-panel-title/elm-panel-title.component';



@NgModule({
    declarations: [ElmHeaderComponent, WidgetMenuTopComponent, WidgetSocialComponent, WidgetBannerComponent, WidgetAdsComponent, WidgetMenuMainComponent, ElmFooterComponent, ElmFooterTopComponent, ElmFooterBottomComponent, ElmPlaylistComponent, ElmPanelTitleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        ElmHeaderComponent,ElmFooterComponent,ElmPlaylistComponent
    ]
})
export class ElementsModule { }
