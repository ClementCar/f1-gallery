import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabStandingPage } from './tab-standing.page';

describe('TabStandingPage', () => {
  let component: TabStandingPage;
  let fixture: ComponentFixture<TabStandingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
