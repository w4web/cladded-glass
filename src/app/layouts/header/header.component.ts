import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PrimeNgModule } from '../../shared/modules/primeNg.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  isScrolled: boolean = false;
  menuItems: any[] = [];
  activeItem: string = 'Home'; // Tracks the active menu item

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.initializeMenu();
    this.onScroll();
  }

  initializeMenu(): void {
    // this.menuItems = [
    //   { label: 'Home', target: 'app-banner', command: () => this.scrollToSection('.app-banner') },
    //   { label: 'About', target: 'app-about-us', command: () => this.scrollToSection('.app-about-us') },
    //   { label: 'Services', target: 'app-services', command: () => this.scrollToSection('.app-services') },
    //   { label: 'Installation Questions', target: 'app-installation-questions', command: () => this.scrollToSection('.app-installation-questions') },
    //   { label: 'Plans & Pricing', target: 'app-packages', command: () => this.scrollToSection('.app-packages') },
    //   { label: 'FAQ', target: 'app-faq', command: () => this.scrollToSection('.app-faq') },
    // ];
    this.menuItems = [
      { label: 'Home', target: 'app-banner', command: () => this.scrollToSection('.app-banner') },
      { label: 'Plans & Pricing', target: 'app-packages', command: () => this.scrollToSection('.app-packages') },
      { label: 'Services', target: 'app-services', command: () => this.scrollToSection('.app-services') },
      { label: 'Installation Questions', target: 'app-installation-questions', command: () => this.scrollToSection('.app-installation-questions') },
      { label: 'About', target: 'app-about-us', command: () => this.scrollToSection('.app-about-us') },
      { label: 'FAQ', target: 'app-faq', command: () => this.scrollToSection('.app-faq') },
    ];
  }

  scrollToSection(target: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector(target);
      const offsetTop = isPlatformBrowser(this.platformId) && window.innerWidth < 767 ? 68 : 100;
      if (element) {
        // Calculate the desired scroll position with some spacing
        const offset = offsetTop;  // The space you want from the top (you can adjust this value)
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const position = elementPosition - offset;  // Adjust position by offset
        
        // Scroll to the calculated position
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
  
        this.updateActiveMenuItem(target);
      }
    }
  }  

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = 
        document.documentElement.scrollTop || document.body.scrollTop;

      this.isScrolled = scrollPosition > 100;
      this.updateActiveMenuItemByScroll(scrollPosition);
    }
  }

  private updateActiveMenuItem(target: string): void {
    const item = this.menuItems.find((menu) => '.' + menu.target === target);
    if (item) {
      this.activeItem = item.label;
    }
  }

  private updateActiveMenuItemByScroll(scrollPosition: number): void {
    const offsets = this.menuItems
      .map((item) => {
        const element = document.querySelector('.' + item.target) as HTMLElement;
        if (element) {
          return { label: item.label, offsetTop: element.offsetTop };
        }
        return null;
      })
      .filter(Boolean);
  
    const offsetTop = isPlatformBrowser(this.platformId) && window.innerWidth < 767 ? 80 : 110;
    const adjustedScrollPosition = scrollPosition + offsetTop; // Adjust based on header height
  
    for (let i = offsets.length - 1; i >= 0; i--) {
      if (adjustedScrollPosition >= offsets[i]!.offsetTop) {
        this.activeItem = offsets[i]!.label;
        break;
      }
    }
  }  

}
