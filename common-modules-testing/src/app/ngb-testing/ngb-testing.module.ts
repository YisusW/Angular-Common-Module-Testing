import { FakeNgbModal } from './FakeNgbModal';
import { NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  providers: [
    {
      provide: NgbModal,
      useClass: FakeNgbModal
    }
  ]
})
export class NgbTestingModule {}
