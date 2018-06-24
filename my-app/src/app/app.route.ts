import { Routes } from "@angular/router";
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

const appRoutes: Routes = [
    // {path:"directory/:person",component:DirectoryComponent},
    {path:"directory",component:DirectoryComponent},
    {path:"",component:HomeComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

