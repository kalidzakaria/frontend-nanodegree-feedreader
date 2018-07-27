/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		/*
		 *Test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
		 */
		 it('urls are defined', function() {
			 for (let i = 0; i < allFeeds.length; i++) {
				 expect(allFeeds[i].url).toBeDefined();
				 expect(allFeeds[i].url.length).not.toBe(0);
			 };
		 });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 it('names are defined', function() {
			 for (let i = 0; i < allFeeds.length; i++) {
				 expect(allFeeds[i].name).toBeDefined();
				 expect(allFeeds[i].name.length).not.toBe(0);
			 };
		 });
    });


    /* A new test suite named "The menu" */

        /* A test that ensures the menu element is
         * hidden by default.
		 * A test that ensures the menu changes
		 * visibility when the menu icon is clicked.
         */

	describe('The menu', function() {
		
		it('Menue is hidden', function() {
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		});
		
		it('Menue toggle when clicked', function() {
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toEqual(false);
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		});
		
	});


        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
	describe('Initial Entries', function() {
		
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});
		
		it('there is at least a single .entry element within the .feed container', function() {
			expect($('.feed .entry').length).toBeGreaterThan(0);
			expect($('.feed .entry').length).not.toBe(0);
		});
		
	});

    /* A new test suite named "New Feed Selection" */

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

	describe('New Feed Selection', function() {
		let entriesStart,
			entriesEnd;
		beforeEach(function(done) {
			loadFeed(0, function() {
				entriesStart = $('.feed').find(allFeeds.url);
				loadFeed(1, function() {
					entriesEnd = $('.feed').find(allFeeds.url);
					done();
				});
			});
		});
		
		it('New feed is different than Old feed', function() {
			expect(entriesStart).not.toBe(entriesEnd);
		});
		
	});

}());
