import { Component } from "@angular/compiler/src/core";
import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

@Component({
    selector: 'app-hero',
    templateUrl: '<div></div>',
  })

  class FakeHeroComponent {
    @Input() hero: Hero;

  }


describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            {id:1, name: 'SpiderDude', strength: 8 },
            {id:2, name: 'Wonderful Woman', strength: 24 },
            {id:3, name: 'Wonderful Woman', strength: 55 }
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        //mocking the service from the constructor
        TestBed.configureTestingModule({
            declarations: 
            [HeroesComponent,
             FakeHeroComponent   
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
            // schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    })

    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3)
    })

    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3)
    })

})