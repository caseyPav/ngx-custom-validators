import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { dateISO } from './validator';
const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
export class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
}
DateISOValidator.decorators = [
    { type: Directive, args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9kYXRlLWlzby9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXRDLE1BQU0sa0JBQWtCLEdBQVE7SUFDOUIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7WUFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNFQUFzRTtnQkFDaEYsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBkYXRlSVNPIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBEQVRFX0lTT19WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZUlTT1ZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGF0ZUlTT11bZm9ybUNvbnRyb2xOYW1lXSxbZGF0ZUlTT11bZm9ybUNvbnRyb2xdLFtkYXRlSVNPXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0RBVEVfSVNPX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUlTT1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gZGF0ZUlTTyhjKTtcbiAgfVxufVxuIl19