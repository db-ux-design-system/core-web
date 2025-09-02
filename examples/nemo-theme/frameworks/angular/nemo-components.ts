import { Component, Input } from '@angular/core';

@Component({
  selector: 'nemo-seat',
  template: `
    <div 
      [attr.data-nemo-seat-status]="status" 
      [class]="'nemo-seat ' + additionalClasses"
      (click)="onSeatClick()"
      [attr.aria-label]="ariaLabel"
      [attr.tabindex]="isInteractive ? '0' : null"
      (keydown.enter)="onSeatClick()"
      (keydown.space)="onSeatClick()"
    >
      {{ seatNumber }}
    </div>
  `,
  styles: [`
    .nemo-seat {
      cursor: pointer;
      user-select: none;
    }
    
    .nemo-seat:focus {
      outline: 2px solid var(--db-adaptive-on-bg-basic-emphasis-100-default);
      outline-offset: 2px;
    }
    
    .nemo-seat[data-nemo-seat-status="occupied"],
    .nemo-seat[data-nemo-seat-status="disabled"] {
      cursor: not-allowed;
    }
  `]
})
export class NemoSeatComponent {
  @Input() status: 'available' | 'occupied' | 'reserved' | 'disabled' = 'available';
  @Input() seatNumber: string = '';
  @Input() additionalClasses: string = '';
  @Input() interactive: boolean = true;
  
  get isInteractive(): boolean {
    return this.interactive && (this.status === 'available' || this.status === 'reserved');
  }
  
  get ariaLabel(): string {
    const statusText = {
      available: 'verfügbar',
      occupied: 'besetzt',
      reserved: 'reserviert',
      disabled: 'nicht verfügbar'
    };
    
    return `Platz ${this.seatNumber}, ${statusText[this.status]}`;
  }
  
  onSeatClick(): void {
    if (!this.isInteractive) {
      return;
    }
    
    if (this.status === 'available') {
      // Emit event für Reservierung
      console.log(`Reserviere Platz ${this.seatNumber}`);
    } else if (this.status === 'reserved') {
      // Emit event für Aufhebung der Reservierung
      console.log(`Hebe Reservierung für Platz ${this.seatNumber} auf`);
    }
  }
}

@Component({
  selector: 'nemo-class-tag',
  template: `
    <div 
      [attr.data-nemo-class]="classType"
      [class]="'nemo-class-tag ' + additionalClasses"
    >
      {{ displayText }}
    </div>
  `,
  styles: [`
    .nemo-class-tag {
      display: inline-flex;
      align-items: center;
    }
  `]
})
export class NemoClassTagComponent {
  @Input() classType: 'first' | 'second' | 'business' = 'second';
  @Input() additionalClasses: string = '';
  
  get displayText(): string {
    const classTexts = {
      first: '1. Klasse',
      second: '2. Klasse',
      business: 'Business'
    };
    
    return classTexts[this.classType];
  }
}

@Component({
  selector: 'nemo-wagon-layout',
  template: `
    <div class="wagon-layout" [attr.data-wagon-class]="wagonClass">
      <div class="wagon-header">
        <nemo-class-tag [classType]="wagonClass"></nemo-class-tag>
        <span class="wagon-number">Wagon {{ wagonNumber }}</span>
      </div>
      
      <div class="seats-grid">
        <nemo-seat
          *ngFor="let seat of seats"
          [seatNumber]="seat.number"
          [status]="seat.status"
          [interactive]="interactive"
        ></nemo-seat>
      </div>
      
      <div class="wagon-stats" *ngIf="showStats">
        <div class="stat">
          <span class="stat-label">Verfügbar:</span>
          <span class="stat-value">{{ availableCount }}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Besetzt:</span>
          <span class="stat-value">{{ occupiedCount }}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Reserviert:</span>
          <span class="stat-value">{{ reservedCount }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .wagon-layout {
      border: 2px solid var(--db-adaptive-bg-basic-level-3-default);
      border-radius: 8px;
      padding: 16px;
      background-color: var(--db-adaptive-bg-basic-level-1-default);
      margin: 16px 0;
    }
    
    .wagon-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--db-adaptive-bg-basic-level-3-default);
    }
    
    .wagon-number {
      font-weight: 600;
      color: var(--db-adaptive-on-bg-basic-emphasis-90-default);
    }
    
    .seats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin: 16px 0;
    }
    
    .wagon-stats {
      display: flex;
      justify-content: space-around;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--db-adaptive-bg-basic-level-3-default);
    }
    
    .stat {
      text-align: center;
      font-size: 12px;
    }
    
    .stat-label {
      display: block;
      color: var(--db-adaptive-on-bg-basic-emphasis-70-default);
    }
    
    .stat-value {
      display: block;
      font-weight: 600;
      color: var(--db-adaptive-on-bg-basic-emphasis-100-default);
    }
    
    @media (max-width: 768px) {
      .seats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .wagon-header {
        flex-direction: column;
        gap: 8px;
        text-align: center;
      }
    }
  `]
})
export class NemoWagonLayoutComponent {
  @Input() wagonNumber: string = '';
  @Input() wagonClass: 'first' | 'second' | 'business' = 'second';
  @Input() seats: Array<{number: string, status: 'available' | 'occupied' | 'reserved' | 'disabled'}> = [];
  @Input() interactive: boolean = true;
  @Input() showStats: boolean = true;
  
  get availableCount(): number {
    return this.seats.filter(seat => seat.status === 'available').length;
  }
  
  get occupiedCount(): number {
    return this.seats.filter(seat => seat.status === 'occupied').length;
  }
  
  get reservedCount(): number {
    return this.seats.filter(seat => seat.status === 'reserved').length;
  }
}

// Module Definition
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NemoSeatComponent,
    NemoClassTagComponent,
    NemoWagonLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NemoSeatComponent,
    NemoClassTagComponent,
    NemoWagonLayoutComponent
  ]
})
export class NemoThemeModule { }

// Usage Example in App Component
@Component({
  selector: 'app-example',
  template: `
    <div class="container">
      <h1>NEMO Angular Beispiel</h1>
      
      <nemo-wagon-layout
        wagonNumber="A"
        wagonClass="first"
        [seats]="wagonASeats"
        [interactive]="true"
        [showStats]="true"
      ></nemo-wagon-layout>
      
      <nemo-wagon-layout
        wagonNumber="B"
        wagonClass="second"
        [seats]="wagonBSeats"
        [interactive]="true"
        [showStats]="true"
      ></nemo-wagon-layout>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppExampleComponent {
  wagonASeats = [
    { number: '1A', status: 'available' as const },
    { number: '1B', status: 'occupied' as const },
    { number: '1C', status: 'available' as const },
    { number: '1D', status: 'reserved' as const },
    { number: '2A', status: 'occupied' as const },
    { number: '2B', status: 'available' as const },
    { number: '2C', status: 'disabled' as const },
    { number: '2D', status: 'available' as const }
  ];
  
  wagonBSeats = [
    { number: '4A', status: 'available' as const },
    { number: '4B', status: 'available' as const },
    { number: '4C', status: 'occupied' as const },
    { number: '4D', status: 'available' as const },
    { number: '5A', status: 'reserved' as const },
    { number: '5B', status: 'occupied' as const },
    { number: '5C', status: 'available' as const },
    { number: '5D', status: 'available' as const },
    { number: '6A', status: 'available' as const },
    { number: '6B', status: 'disabled' as const },
    { number: '6C', status: 'reserved' as const },
    { number: '6D', status: 'available' as const }
  ];
}