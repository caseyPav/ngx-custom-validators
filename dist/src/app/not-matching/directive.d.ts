import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class NotMatchingValidator implements Validator, OnInit, OnChanges {
    notMatching: string | RegExp;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
}
