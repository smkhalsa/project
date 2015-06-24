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
                        console.log('Inside');
                        var titleElement = posts[0].click();
                        // expect(titleElement.getText()).toEqual('YourEnteredTitle');
                });
                var elem = element(by.tagName('h1'));
                expect(elem.getText()).toContain('myBus Details');
        });
});