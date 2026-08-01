import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  menuOpen = false;

  scrolled = false;

  private started = false;

  @ViewChildren('counter')
  counters!: QueryList<ElementRef<HTMLElement>>;

  @ViewChildren('statCard')
  cards!: QueryList<ElementRef<HTMLElement>>;

  @ViewChildren('testimonialCard')
  testimonialCards!: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('cta')
  cta!: ElementRef<HTMLElement>;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngAfterViewInit(): void {

    const section = this.counters.first?.nativeElement.closest('section');

    if (!section) return;

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting && !this.started) {

            this.started = true;

            this.animateCounters();

            this.animateTestimonials();

            observer.disconnect();

          }

        });

      },
      {
        threshold: 0.35
      }
    );

    observer.observe(section);

  }

  private animateCounters(): void {

    this.cards.forEach((card, index) => {

      setTimeout(() => {

        card.nativeElement.classList.remove(
          'opacity-0',
          'translate-y-10'
        );

        card.nativeElement.classList.add(
          'opacity-100',
          'translate-y-0'
        );

      }, index * 150);

    });

    this.counters.forEach(counter => {

      const element = counter.nativeElement;

      const target = Number(element.dataset['target']);

      const suffix = element.dataset['suffix'] ?? '';

      const duration = 2000;

      const start = performance.now();

      const update = (time: number) => {

        const progress = Math.min((time - start) / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(target * ease);

        element.innerText = `${value}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        }

      };

      requestAnimationFrame(update);

    });

  }

  private animateTestimonials(): void {

    this.testimonialCards.forEach((card, index) => {

      setTimeout(() => {

        card.nativeElement.classList.remove(
          'opacity-0',
          'translate-y-10'
        );

        card.nativeElement.classList.add(
          'opacity-100',
          'translate-y-0'
        );

      }, 400 + index * 180);

    });

    if (this.cta) {

      setTimeout(() => {

        this.cta.nativeElement.classList.remove(
          'opacity-0',
          'translate-y-10'
        );

        this.cta.nativeElement.classList.add(
          'opacity-100',
          'translate-y-0'
        );

      }, 1100);

    }

  }

}