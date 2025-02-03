import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [TitleComponent, MenuComponent],
  imports: [],
  exports: [TitleComponent, MenuComponent]
})
export class AppModule { }
