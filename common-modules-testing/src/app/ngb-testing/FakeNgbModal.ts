import { FakeNgbModalRef } from './FakeNgbModalRef';
import { NgbModalOptions } from './ngb.testing.models';

export class FakeNgbModal {
  open(content: any, options?: NgbModalOptions) {
    return new FakeNgbModalRef();
  }
  /**
   * Dismisses all currently displayed modal windows with the supplied reason.
   *
   * @since 3.1.0
   */
  dismissAll(reason?: any): void {}
  /**
   * Indicates if there are currently any open modal windows in the application.
   *
   * @since 3.3.0
   */
  hasOpenModals(): boolean {
    return true;
  }
}
