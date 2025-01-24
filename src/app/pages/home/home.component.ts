import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, finalize, Observable, of, startWith, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { ApiResponse, Character } from '../../models/api.models';
import { CharacterQueryParams, CharacterService } from '../../services/character.service';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';
import { InputComponent } from '../../components/input/input.component';
import { MessageBoxComponent } from '../../components/message-box/message-box.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CharacterCardComponent, LoaderSpinnerComponent, InputComponent, MessageBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  loading = false;

  currentPage = 1;
  charService = inject(CharacterService);
  formControl = new FormControl('');

  currentSearch = '';

  private itemsSubject$ = new BehaviorSubject<Character[]>([]);

  totalItems = 0;

  get currentItems$() {
    return this.itemsSubject$.asObservable();
  }

  get currentItemsValue() {
    return this.itemsSubject$.getValue();
  }

  get hasMore() {
    return this.currentItemsValue.length < this.totalItems;
  }

  ngOnInit() {
    this.getData();
    this.listenFieldChanges();
  }

  getData(params?: Partial<CharacterQueryParams>) {
    this.loading = true;
    return this.charService.fetchCharacter({
      ...params,
      page: this.currentPage
    }).pipe(
      catchError(err => {
        this.loading = false;
        console.error('Error fetching data:', err);
        return of(err);
      }),
      finalize(() => {
        this.loading = false;
      })
    )
  }

  listenFieldChanges() {
    this.formControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.currentPage = 1;
          this.itemsSubject$.next([]);
        }),

        switchMap(val => {
          this.currentSearch = val!;
          return this.getData({
            name: val ?? ''
          })
        })
      )
      .subscribe({
        next: response => {
          if (response.info && response.results) {
            this.totalItems = response.info.count;
            this.itemsSubject$.next(response.results);
          } else {
            this.totalItems = 0;
          }
        }
      })
  }

  loadMore() {
    this.currentPage++;
    this.getData({
      name: this.currentSearch
    })
      .pipe(
        take(1)
      ).subscribe(res => {
        if (res) {
          this.itemsSubject$.next([
            ...this.itemsSubject$.getValue(),
            ...res.results
          ])
        }
      })
  }

}
