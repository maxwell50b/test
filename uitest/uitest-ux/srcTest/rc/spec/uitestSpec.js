define([ 'nmodule/uitest/rc/uitest' ], function (uitest) {
  'use strict';

  describe("nmodule/uitest/rc/uitest", () => {
    it("can extol its own virtues", () => {
      expect(uitest.extolVirtues()).toBe('uitest is great!');
    });
  });
});
