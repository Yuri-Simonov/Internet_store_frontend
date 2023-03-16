import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrowDownSVGComponent } from 'src/app/shared/modules/svg_icons/components/arrow_down/arrow_down.component';

@NgModule({
    declarations: [ArrowDownSVGComponent],
    imports: [CommonModule],
    exports: [ArrowDownSVGComponent],
})
export class SvgIconsModule {}
