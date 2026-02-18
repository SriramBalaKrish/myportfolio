import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  private readonly router = inject(Router);
  private readonly sectionOrder = ['/', '/experience', '/skills', '/contact'];
  private isScrollLocked = false;
  protected title = 'myportfolio';

  canScrollPrev(): boolean {
    return this.getCurrentIndex() > 0;
  }

  canScrollNext(): boolean {
    return this.getCurrentIndex() < this.sectionOrder.length - 1;
  }

  scrollPrev(): void {
    this.stepRoute(-1);
  }

  scrollNext(): void {
    this.stepRoute(1);
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (Math.abs(event.deltaY) < 28) {
      return;
    }

    event.preventDefault();
    this.stepRoute(event.deltaY > 0 ? 1 : -1);
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
      event.preventDefault();
      this.stepRoute(1);
      return;
    }

    if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault();
      this.stepRoute(-1);
    }
  }

  private stepRoute(direction: -1 | 1): void {
    if (this.isScrollLocked) {
      return;
    }

    const currentPath = this.normalizePath(this.router.url);
    const index = this.sectionOrder.indexOf(currentPath);
    const nextIndex = index + direction;

    if (nextIndex < 0 || nextIndex >= this.sectionOrder.length) {
      return;
    }

    this.isScrollLocked = true;
    void this.router.navigateByUrl(this.sectionOrder[nextIndex]);

    setTimeout(() => {
      this.isScrollLocked = false;
    }, 650);
  }

  private getCurrentIndex(): number {
    const currentPath = this.normalizePath(this.router.url);
    const index = this.sectionOrder.indexOf(currentPath);
    return index === -1 ? 0 : index;
  }

  private normalizePath(url: string): string {
    const path = url.split('?')[0].split('#')[0] || '/';
    return path === '/about' ? '/' : path;
  }
}
