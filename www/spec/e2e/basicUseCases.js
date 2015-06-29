describe('Testing myBus', function() {
        beforeEach(function() {
                browser.get('http://localhost:8100/');
        });
        it('should have an input field on the home screen', function() {

                browser.sleep(6000);
                //do what you need here
                var searchField = element(by.css('input'));
                
                expect(searchField.isPresent()).toBeTruthy();
        });
        // it('should navigate to details when list item is clicked', function() {
        //         browser.sleep(6000);
        //         element.all(by.repeater("route in routes")).then(function(routes) {
        //                 //click on first list item
        //                 console.log(routes);
        //                 var titleElement = routes[0].click();
        //         });
        //         var elem = element(by.css('body > ion-nav-view > ion-side-menus > ion-side-menu-content > ion-nav-bar > div:nth-child(3) > ion-header-bar > div.title.title-center.header-item'));
        //         expect(elem.getText()).toContain('details');
        // });
        // it('should navigate back from details to home', function() {
        //         browser.sleep(6000);
        //         element.all(by.repeater("route in routes")).then(function(posts) {
        //                 //click on first list item
        //                 var titleElement = posts[0].click();
        //         });
        //         var elem = element(by.tagName('h1'));
        //         expect(elem.getText()).toContain('myBus Details');

        //         var backButton = element(by.name('back'));
        //         backButton.click();

        //         elem = element(by.tagName('h1'));
        //         expect(elem.getText()).toContain('myBus');

        // });
});