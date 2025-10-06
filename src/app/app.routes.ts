import { Routes } from '@angular/router';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { UpdateOrderComponent } from './pages/update-order/update-order.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';

export const routes: Routes = [
	{ path: '', component: CreateOrderComponent },
	{ path: 'update', component: UpdateOrderComponent },
	{ path: 'track', component: TrackOrderComponent },
	{ path: '**', redirectTo: '' }
];
