import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import materialModules from '../../modules/angular-material-modules';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    materialModules,
    SidenavComponent,
    FooterComponent,
    TopbarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  private readonly router = inject(Router);

  onRedirect(route: string):void {
    this.router.navigate([route]);
  }
}
