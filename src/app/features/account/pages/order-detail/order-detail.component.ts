import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import materialModules from '../../../../shared/modules/angular-material-modules';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailComponent {

  products = signal([
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

  displayedColumns: string[] = ['orderId', 'createdAt','paymentsStatus','orderStatus', 'total'];


}
