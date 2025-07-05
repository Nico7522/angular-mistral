import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component Structure', () => {
    it('should render the main container', () => {
      const container = fixture.debugElement.query(By.css('.home-container'));
      expect(container).toBeTruthy();
    });

    it('should render the content section', () => {
      const content = fixture.debugElement.query(By.css('.content'));
      expect(content).toBeTruthy();
    });

    it('should render the title', () => {
      const title = fixture.debugElement.query(By.css('.title'));
      expect(title).toBeTruthy();
      expect(title.nativeElement.textContent).toContain('Welcome to Mistral AI');
    });

    it('should render the subtitle', () => {
      const subtitle = fixture.debugElement.query(By.css('.subtitle'));
      expect(subtitle).toBeTruthy();
      expect(subtitle.nativeElement.textContent).toContain('Experience the power of advanced AI');
    });

    it('should render the Call Mistral button', () => {
      const button = fixture.debugElement.query(By.css('.mistral-button'));
      expect(button).toBeTruthy();
      expect(button.nativeElement.textContent.trim()).toBe('Call Mistral');
    });

    it('should render all three feature sections', () => {
      const features = fixture.debugElement.queryAll(By.css('.feature'));
      expect(features.length).toBe(3);
    });

    it('should render feature icons', () => {
      const featureIcons = fixture.debugElement.queryAll(By.css('.feature-icon'));
      expect(featureIcons.length).toBe(3);

      // Check that the icons contain emoji
      featureIcons.forEach(icon => {
        expect(icon.nativeElement.textContent).toMatch(/[🚀🔒💡]/u);
      });
    });

    it('should render feature titles', () => {
      const featureTitles = fixture.debugElement.queryAll(By.css('.feature-title'));
      expect(featureTitles.length).toBe(3);

      const expectedTitles = ['Fast & Efficient', 'Secure & Private', 'Intelligent'];
      featureTitles.forEach((title, index) => {
        expect(title.nativeElement.textContent.trim()).toBe(expectedTitles[index]);
      });
    });
  });

  describe('callMistral method', () => {
    it('should be defined', () => {
      expect(component.callMistral).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof component.callMistral).toBe('function');
    });

    it('should log to console when called', () => {
      const consoleSpy = spyOn(console, 'log');
      component.callMistral();
      expect(consoleSpy).toHaveBeenCalledWith('callMistral');
    });
  });

  describe('User Interactions', () => {
    it('should call callMistral when button is clicked', () => {
      const consoleSpy = spyOn(console, 'log');
      const button = fixture.debugElement.query(By.css('.mistral-button'));

      button.nativeElement.click();

      expect(consoleSpy).toHaveBeenCalledWith('callMistral');
    });

    it('should have clickable button', () => {
      const button = fixture.debugElement.query(By.css('.mistral-button'));
      expect(button.nativeElement.disabled).toBeFalsy();
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct CSS classes to elements', () => {
      const container = fixture.debugElement.query(By.css('.home-container'));
      const content = fixture.debugElement.query(By.css('.content'));
      const title = fixture.debugElement.query(By.css('.title'));
      const subtitle = fixture.debugElement.query(By.css('.subtitle'));
      const button = fixture.debugElement.query(By.css('.mistral-button'));
      const features = fixture.debugElement.query(By.css('.features'));

      expect(container).toBeTruthy();
      expect(content).toBeTruthy();
      expect(title).toBeTruthy();
      expect(subtitle).toBeTruthy();
      expect(button).toBeTruthy();
      expect(features).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      const h1 = fixture.debugElement.query(By.css('h1'));
      const h3s = fixture.debugElement.queryAll(By.css('h3'));

      expect(h1).toBeTruthy();
      expect(h3s.length).toBe(3);
    });

    it('should have button with proper text content', () => {
      const button = fixture.debugElement.query(By.css('.mistral-button'));
      expect(button.nativeElement.textContent.trim()).toBe('Call Mistral');
    });
  });
});
