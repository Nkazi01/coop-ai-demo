import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Import components for routing
import { HomePage } from './home/home.page';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home', // Redirect to 'home' page when no specific path is provided
    pathMatch: 'full'
  },
  // Add other routes here if needed
  {
    path: 'welcome',
    component: WelcomeComponent // Example route for 'welcome' component
  },
  {
    path: 'chat',
    component: ChatComponent // Example route for 'chat' component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
