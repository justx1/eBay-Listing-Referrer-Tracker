<script language="Javascript">
// Add this script (including the <script> tags into your eBay item description)
<!--
	i=new Image();
	if (document.referrer&&document.referrer!="")
	{
		// Create an empty ebaytrack.gif image and put it on your webserver
		// Edit the image source with your own target URI
		// The document.referrer for your eBay listing will show up in your webserver's logfile for further analysis
		i.src = "http://www.wiesinger.net/ebaytrack.gif?referrer="+escape(document.referrer)+"&eBayItem="+escape(document.title)
	}
	else
	{
		i.src = "http://www.wiesinger.net/ebaytrack.gif?referrer=Null&eBayItem="+escape(document.title)
	}
//-->
</script>