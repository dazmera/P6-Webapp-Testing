# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developers of this application have already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! My task is to write test suites that test functionality of certain elements of the application. 

I used the Udacity forums and Udacity Jasmine video tutorial series called JavaScript testing to complete this project.
All work for this project was done in feedreader.js

# How to run the app

1. Clone the repository or download/extract the zip file to your local machine
2. To run this project, open the index.html file in a browser; this should run the specs, and all 7 specs should pass. The tests are as follows:

RSS Feeds
	are defined
	URL is defined
	check allFeeds object names
Menu
	the menu element is hidden by default
	menu changes visibility when clicked
Initial Entries
	feed container has at least a single entry
New Feed Selection
	loads and updates page with new entries

NB. To view the test-driven source code open jasmine/spec/feedreader.js.