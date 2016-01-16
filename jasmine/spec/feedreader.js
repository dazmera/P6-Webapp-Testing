
$(function() {
    /* Test suite I: "RSS Feeds" */
    describe('RSS Feeds', function() {
        /* Test IA: test that allFeeds variable is defined and not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
       /* Test I.B: loop through each feed and ensure URL is defined and URL is not empty */
		// forEach loop to go through each feed
		it('URLs are defined and not empty',function(){
			allFeeds.forEach(function(feed){
				// test that url is defined
				expect(feed.url).toBeDefined();
				// test that url is not empty
				expect(feed.url.length).not.toBe(0);
			});
		});

		/* Test I.C: loop through each feed and ensure name is defined and name is not empty */
		// forEach loop to go through each feed
		it('names are defined and not empty',function(){
			allFeeds.forEach(function(feed){
				// test that name is defined
				expect(feed.name).toBeDefined();
				// test that name is not empty
				expect(feed.name.length).not.toBe(0);
			});
		});
	});
    /* Test suite II: "The menu" */
    describe('The menu',function(){
    	/* Test II.A: ensure menu element is hidden by default */
    	// test that the menu-hidden class is true
    	it('is hidden by default',function(){
    		expect($('body').hasClass('menu-hidden')).toBe(true);
    	});

        /* Test II.B: ensure menu changes visibility when clicked and not*/
		// test that menu is visible on first click(menu-hidden class is false)
		it('changes visibility when the menu icon is clicked',function(){
			//first click
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBeFalsy();
			//second click
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBeTruthy();
		});
	});
         
    	/* Test suite III: "Initial Entries" */
    describe('Initial Entries',function(){
    	// async loadFeed
    	beforeEach(function(done){
    		loadFeed(0,done);
    	});
    	/* Test III.A: ensure that there is at least one .entry element within the .feed container once the loadFeed function is called and done*/
		// test that entry length is not zero
		it('contains at least one entry',function(){
			expect($('.entry').length).toBeGreaterThan(0);
		});
	});

   /* Test suite IV: "New Feed Selection" */
    describe('New feed Selection',function(){
    	//   variable for previous content
    	var previousContent;
    	 
		beforeEach(function(done) {
			// load feed previousContent for comparison to next feed
			loadFeed(0, function() {
				previousContent = $('.feed').html();
   				loadFeed(1, done) 
				});
			});
		
		/* Test IV.A: ensure when a new feed is loaded by the loadFeed function that the content actually changes */
		it('feed content successfully changes', function() {
			// compare previous content to next, they should not be the same
			expect($('.feed').html()).not.toEqual(previousContent);
			
		});
	});

}());


        
