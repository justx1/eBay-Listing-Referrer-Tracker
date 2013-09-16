eBay-Listing-Referrer-Tracker
=============================

Google Analytics Javascript code is not allowed on eBay listings as per eBay's Javascript policy: http://pages.ebay.com/help/policies/listing-javascript.html.
This script captures the document.referrer for details about viewers of your eBay listing.

Instructions:
=============
1. Add this script into your eBay HTML item description.
2. Create an empty ebaytrack.gif image and put it on your webserver.
3. Edit the image source of the script and replace it with your own target URI for the ebaytrack.gif image.
4. The document.referrer for your eBay listing will be captured in your webserver's logfile for further analysis.

Useful information in the logfile:
==================================
- IP address
- Referrer: Page the user was looking at before coming to your site (only if clicked a link)
- In case of Google: You can see the search keywords that the visitor used on Google before clicking on your eBay listing
- In case of eBay: You can see the search keywords that the visitor used on eBay before clicking on your eBay listing (look for "_nkw")
