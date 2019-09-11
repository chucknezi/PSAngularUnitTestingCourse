import { Component } from "@angular/compiler/src/core";
import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";



describe('HeroesComponent (deep tests)', () => {
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
            [HeroesComponent, HeroComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();
    })

    it('should render each hero as a hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();
    })

    it('should be true', () => {
        expect(true).toBe(true)
    })
});
