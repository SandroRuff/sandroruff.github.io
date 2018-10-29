import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageSliderService {
  currentStyles: object[] = [
    { 'isActive': true, 'isBefore': false, 'isCurrent': true, "isAfter": false },
    { 'isActive': false, 'isBefore': false, 'isCurrent': false, "isAfter": true },
    { 'isActive': false, 'isBefore': false, 'isCurrent': false, "isAfter": true },
    { 'isActive': false, 'isBefore': false, 'isCurrent': false, "isAfter": true }
  ]
  currentSlide: number = 0;
  activeQueue: number[] = [1, 0];

  // Slider
  moveSlide(selectedSlide) {
    if (selectedSlide !== this.currentSlide) {
      this.activeQueue.push(selectedSlide);
      this.removeClass(this.activeQueue[0], 'isActive');
      this.addClass(this.activeQueue[1], 'isActive');
      this.cropQueue(this.activeQueue);
      if (selectedSlide - this.currentSlide > 0) {
        this.replaceClass(this.currentSlide, 'isCurrent', 'isBefore');
        for (let i = this.currentSlide + 1; i < selectedSlide; i++) {
          this.replaceClass(i, 'isAfter', 'isBefore');
        }
        this.replaceClass(selectedSlide, 'isAfter', 'isCurrent');
      } else {
        this.replaceClass(this.currentSlide, 'isCurrent', 'isAfter');
        for (let i = this.currentSlide - 1; i > selectedSlide; i--) {
          this.replaceClass(i, 'isBefore', 'isAfter');
        }
        this.replaceClass(selectedSlide, 'isBefore', 'isCurrent');
      }
      this.currentSlide = selectedSlide;
    }
  }

  addClass(slideNumber: number, className: string) {
    this.currentStyles[slideNumber][className] = true;
  }

  removeClass(slideNumber: number, className: string) {
    this.currentStyles[slideNumber][className] = false;
  }

  replaceClass(slideNumber: number, oldClass: string, newClass: string) {
    this.currentStyles[slideNumber][oldClass] = false;
    this.currentStyles[slideNumber][newClass] = true;
  }

  cropQueue(queue: number[]) {
    if (queue.length > 2) {
      queue.splice(0, 1);
    }
  }

  // Move To First Slide
  moveToFirstSlide() {
    this.moveSlide(0);
  }

  // KeyEvent Listeners
  handleKeyboardEvent(key) {
    if ((key === 'ArrowUp') && (this.currentSlide - 1 > -1)) {
      this.moveSlide(this.currentSlide - 1);
    }
    if ((key === 'ArrowDown') && (this.currentSlide + 1 < 4)) {
      this.moveSlide(this.currentSlide + 1);
    }
  }
}
