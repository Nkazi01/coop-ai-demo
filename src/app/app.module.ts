import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { WelcomeComponent } from './welcome/welcome.component';
//import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent
    //WelcomeComponent,
    //ChatComponent 
  ],
  imports: [
    BrowserModule,
   
    IonicModule.forRoot(),
    RouterModule, // Import routes here
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
