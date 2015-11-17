/* global describe, it, browser, beforeEach,  expect, require */


describe('actionbar', function () {
    'use strict';

    var screenshot_prefix = {};

    beforeEach(function (done) {
        require('../common').createScreenshotPrefix(browser, screenshot_prefix, done);
    });

    it('should take an actionbar screenshot', function (done) {
        var screenshotName = screenshot_prefix.value + 'actionbar',
            pageName = screenshotName + '_full';
        browser
            .url('/actionbar/fixtures/test.full.html')
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-actionbar'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);

                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            })
            .call(done);
    });
});
