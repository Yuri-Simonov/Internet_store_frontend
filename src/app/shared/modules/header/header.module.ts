import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SvgIconsModule } from 'src/app/shared/modules/svg_icons/svg_icons.module';

import { HeaderComponent } from 'src/app/shared/modules/header/components/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, SvgIconsModule, RouterModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
