import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import materialModules from '../../modules/angular-material-modules';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    materialModules,
    TopBarComponent,
    SidenavComponent,
    FooterComponent
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
