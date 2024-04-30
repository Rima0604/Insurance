import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ContactComponent } from './component/contact/contact.component';
import { BikeComponent } from './modules/bike/bike.component';
import { FooterComponent } from './component/footer/footer.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { CarComponent } from './modules/car/car.component';
import { HealthComponent } from './modules/health/health.component';
import { TravelComponent } from './modules/travel/travel.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { ServicesComponent } from './component/services/services.component';
import { DemoComponent } from './demo/demo.component';
import { HomesComponent } from './modules/homes/homes.component';

export const routes: Routes = [ 
{"path": '', 'title': 'Home', component:HomeComponent},
{"path": 'Home', 'title': 'Home', component:HomeComponent},
{"path":'registration', 'title': 'registration', component:RegistrationComponent},
{"path":'login', 'title': 'login',component:LoginComponent},
{"path":'services', 'title':"Services",component:ServicesComponent},
{"path":'about', 'title': 'About',component:AboutComponent},
{"path":'contact','title':'contact',component:ContactComponent},
{"path":'bike', 'title': 'bike', component:BikeComponent},
{"path":'footer', 'title': 'footer', component:FooterComponent},
{"path":'customer', 'title':'customer', component:CustomerComponent},
{"path":'car','title':'car',component:CarComponent},
{"path":'health','title':'health', component:HealthComponent},
{"path":'travel', 'title':'travel', component:TravelComponent},
{"path":'forgetpass', 'title': 'forgetpass', component:ForgetpassComponent},
{"path":'demo','title':'demo',component:DemoComponent},
{"path":'homes', 'title': 'homes', component:HomesComponent}
];
