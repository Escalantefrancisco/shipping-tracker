import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order';
import { Order, OrderStatus } from '../../models/order.model';

@Component({
  selector: 'app-update-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-order.html',
  styleUrls: ['./update-order.css']
})
export class UpdateOrderComponent {
  searchForm: FormGroup;
  updateForm: FormGroup;
  found: Order | null = null;
  allowedNextStatuses: OrderStatus[] = [];
  STATUS_SEQUENCE: OrderStatus[] = ['Creado', 'en preparación', 'en transito', 'entregado', 'no entregado'];

  constructor(private fb: FormBuilder, private svc: OrderService) {
    this.searchForm = this.fb.group({
      packageNumber: ['', [Validators.required]]
    });
    this.updateForm = this.fb.group({
      status: ['', [Validators.required]],
      comment: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(40)]],
      responsible: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/)]]
    });
  }

  search() {
    const pk = this.searchForm.value.packageNumber?.trim();
    this.found = this.svc.getByPackageNumber(pk) || null;
    if (this.found) {
      const currIdx = this.STATUS_SEQUENCE.indexOf(this.found.status);
      this.allowedNextStatuses = this.STATUS_SEQUENCE.slice(currIdx + 1);
    } else {
      this.allowedNextStatuses = [];
    }
  }

  applyUpdate() {
    if (!this.found) return;
    if (this.updateForm.invalid) return;
    const { status, comment, responsible } = this.updateForm.value;
    if (!this.allowedNextStatuses.includes(status)) {
      alert('Estado no permitido según la secuencia.');
      return;
    }
    const updated = this.svc.updateStatus(this.found.packageNumber, status, comment.trim(), responsible.trim());
    if (updated) {
      this.found = updated;
      this.updateForm.reset();
      // Actualizar allowedNextStatuses según el nuevo estado
      const currIdx = this.STATUS_SEQUENCE.indexOf(this.found.status);
      this.allowedNextStatuses = this.STATUS_SEQUENCE.slice(currIdx + 1);
    }
  }
}
