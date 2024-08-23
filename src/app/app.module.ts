import { ApplicationRef, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NotificationsPage } from '../app/notifications/notifications.page';
import { NotificationService } from './notification.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotificationsPage,
    AppComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    BrowserModule,
    // [RouterModule.forRoot(routes)]
  ],
  providers: [NotificationService],
  // ... other module configurations
})
export class AppModule { 
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}