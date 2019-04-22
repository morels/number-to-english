/**
 * Makes tests provided by client usable by Jest
 */
export class TestAdapter {
  static assertEquals(cb, result, label) {
    test(label||result, () => {
      expect(cb).toBe(result);
    });
  }

  static expectError(label, cb) {
    test(label, () => {
      expect(cb).toThrow("NaN Exception");
    });
  }
}
