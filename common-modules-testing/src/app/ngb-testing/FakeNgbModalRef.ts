export class FakeNgbModalRef {
  /**
   * The instance of a component used for the modal content.
   *
   * When a `TemplateRef` is used as the content, will return `undefined`.
   */
  readonly componentInstance: any;
  /**
   * The promise that is resolved when the modal is closed and rejected when the modal is dismissed.
   */
  result: Promise<any>;

  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result?: any): void {}
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason?: any): void {}
}
