import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import materialModules from '../../../../shared/modules/angular-material-modules';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    materialModules,
    CurrencyPipe
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {

  private readonly router = inject(Router);

  displayedColumns: string[] = ['orderId', 'createdAt','paymentsStatus','orderStatus', 'total','detail'];

  pageSizeOptions: number[] = [5, 10, 15, 20, 50];
  length = signal<number>(0);
  size = signal<number>(10);
  pageIndex = signal<number>(0);

  orders = signal([
    {
      orderId: '1212323',
      createdAt: '12/11/2024',
      paymentsStatus: 'Pagada',
      orderStatus: 'Recibida',
      total: '1239.50'
    },
    {
      orderId: '1212324',
      createdAt: '12/11/2024',
      paymentsStatus: 'Pagada',
      orderStatus: 'Recibida',
      total: '1239.50'
    },
    {
      orderId: '1212324',
      createdAt: '12/11/2024',
      paymentsStatus: 'Pagada',
      orderStatus: 'Recibida',
      total: '1239.50'
    }
  ]);

  onRedirect(url: string) {
    this.router.navigate([url]);
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.size.set(event.pageSize);
    // this.searchProveedor();
  }

  viewDetail(element: any): void {
    console.log(element);

    this.router.navigate(['account/order/234we342/detail'])
  }
}
