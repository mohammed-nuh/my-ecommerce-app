import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'post-info/:id', component: PostInfoComponent},
    {path: 'add-post', component: AddPostComponent},
    {path: 'update-post/:id', component: UpdatePostComponent},
    {path: 'register', component: RegistrationComponent},
];
