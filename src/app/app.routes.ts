import { Routes ,RouterModule} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';


const appRoutes:Routes = [ 

    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'product/:id',component:ViewProductComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
    
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});