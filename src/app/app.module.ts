import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { HeaderComponent }  from './Components/header.component';
import { BodyComponent }    from './Components/body.component';
import { FooterComponent }    from './Components/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, BodyComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
