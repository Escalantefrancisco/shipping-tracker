import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-order.html',
  styleUrls: ['./create-order.css']
})
export class CreateOrderComponent {
  form: FormGroup;
  createdOrder: any = null;

  constructor(private fb: FormBuilder, private svc: OrderService) {
    this.form = this.fb.group({
      senderName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)]],
      deliveryAddress: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/)]],
      description: ['', [Validators.required, Validators.minLength(40), Validators.maxLength(120)]]
    });
  }

  submit() {
      if (this.form.invalid) return;
      const val = this.form.value;
      // Crear la orden y mantener el resultado en createdOrder
      this.createdOrder = this.svc.create({
        senderName: val.senderName.trim(),
        deliveryAddress: val.deliveryAddress.trim(),
        email: val.email.trim(),
        description: val.description.trim()
      } as any);
      // Limpiar solo el formulario, no la variable createdOrder
      this.form.reset();
  }
}
