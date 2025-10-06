import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './track-order.html',
  styleUrls: ['./track-order.css']
})
export class TrackOrderComponent {
  trackForm: FormGroup;
  foundOrder: Order | null = null;

  constructor(private fb: FormBuilder, private svc: OrderService) {
    this.trackForm = this.fb.group({
      packageNumber: ['', [Validators.required]]
    });
  }

  trackOrder() {
    const pk = this.trackForm.value.packageNumber?.trim();
    this.foundOrder = this.svc.getByPackageNumber(pk) || null;
  }
}
