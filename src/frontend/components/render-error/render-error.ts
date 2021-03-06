import {
  EventEmitter,
  Component,
  Input,
  Output,
} from '@angular/core';

import {
  ApplicationErrorType,
  ApplicationError,
} from '../../../communication';

@Component({
  selector: 'render-error',
  template: require('./render-error.html'),
})
export class RenderError {
  @Input() private error: ApplicationError;
  @Output() private reportError: EventEmitter<boolean> = new EventEmitter<boolean>();

  private ApplicationErrorType = ApplicationErrorType;
}
