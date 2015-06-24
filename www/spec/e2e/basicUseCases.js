describe('Testing myBus', function() {
        beforeEach(function() {
                browser.get('http://localhost:8100/');
        });
        it('should have a title', function() {

                browser.sleep(6000);
                //do what you need here
                var elem = element(by.tagName('h1'));
                expect(elem.getText()).toContain('myBus');
        });
        it('should navigate to details when list item is clicked', function() {
                browser.sleep(6000);
                element.all(by.repeater("routes in stops")).then(function(posts) {
                        //click on first list item
                        var titleElement = posts[0].click();
                });
                var elem = element(by.tagName('h1'));
                expect(elem.getText()).toContain('myBus Details');
        });
        it('should navigate back from details to home', function() {
                browser.sleep(6000);
                element.all(by.repeater("routes in stops")).then(function(posts) {
                        //click on first list item
                        var titleElement = posts[0].click();
                });
                var elem = element(by.tagName('h1'));
                expect(elem.getText()).toContain('myBus Details');

                var backButton = element(by.name('back'));
                backButton.click();

                var elem = element(by.tagName('h1'));
                expect(elem.getText()).toContain('myBus');

        });
});