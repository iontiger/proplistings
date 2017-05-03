import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddlistingComponent } from './components/addlisting/addlisting.component';
import { EditlistingComponent } from './components/editlisting/editlisting.component';
import { ListingComponent } from './components/listing/listing.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'listings', component:ListingComponent},
  {path: 'addlistings', component:AddlistingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    AddlistingComponent,
    EditlistingComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
