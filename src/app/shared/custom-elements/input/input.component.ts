import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() text = '';
  @Input() placeholder = 'Search...';
  @Output() onKeyPressed: EventEmitter<string> = new EventEmitter();

  private readonly unlocked: Subject<string> = new Subject();

  public formInput = this.fb.group({
    keyToSearch: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subscribeUnlocked();
    this.subscribeKey();
  }

  private subscribeKey() {
    const key = this.formInput.get('keyToSearch');

    key?.valueChanges.subscribe(() => {
      this.validateKey(key!);
    });
  }

  private validateKey(key: AbstractControl) {
    let value: string = key?.value?.toUpperCase();

    value = value.slice(0, 3);

    key?.patchValue(value, { emitEvent: false });
    this.unlocked.next(value);
  }

  private subscribeUnlocked() {
    this.unlocked.pipe(debounceTime(200)).subscribe((valor) => {
      this.onKeyPressed.emit(valor);
    });
  }
}
