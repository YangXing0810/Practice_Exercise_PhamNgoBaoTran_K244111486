import { Component, signal } from '@angular/core';
import { CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group.html',
  styleUrl: './customer-group.css',
})
export class CustomerGroup {
  customerGroups = signal<any[]>([]);
  errMessage = signal('');
  constructor(private _service: CustomerService) {
    this._service.getCustomerGroups().subscribe({
      next: (data) => { this.customerGroups.set(data) },
      error: (err) => { this.errMessage.set(err.message) }
    })
  }

  onImageError(event: Event, name: string): void {
    const image = event.target as HTMLImageElement;
    if (image.dataset['fallback'] === 'true') return;

    image.dataset['fallback'] = 'true';
    const initials = name.trim().split(/\s+/).slice(-2).map(part => part[0]).join('').toUpperCase();
    const color = `hsl(${(name.charCodeAt(0) * 47) % 360} 45% 42%)`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="${color}"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="white">${initials}</text></svg>`;
    image.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
}