import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsComponent } from './components.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component'

describe('ComponentsComponent', () => {
    let component: ComponentsComponent;
    let fixture: ComponentFixture<ComponentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComponentsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
