# Show images in Google Calendar

This tampermonkey script reverts URLs inside <tt>&lt;IMG&gt;</tt> tags back to their original values by removing extra parameters added during the import process.

&nbsp;

## Dependencies

This script requires [Tampermonkey](https://www.tampermonkey.net/) to function. Having a basic understanding on how a Tampermonkey script is necessary to set this up properly.

To use, install the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) first, then install the code as a new userscript on the dashboard. If you need a quick guide on installing scripts, the following resources may be of help:
* https://www.tampermonkey.net/faq.php#Q102
* https://www.youtube.com/watch?v=8tyjJD65zws

&nbsp;

## Background

I wanted to show images on my Google Calendar. 

Unfortunately, Google Calendar does not provide a way to embed images, nor does it allow the use of HTML when adding a description to calendar events. Which is such a shame since the <tt>&lt;IMG&gt;</tt> tag would be very helpful here.

However, Google Calendar *does* allow HTML tags in the description, albeit you just can't manually add it as raw code in the description textarea. You can however ** *import* ** events with descriptions that already contain HTML code. This is possibly for compatibility with other calendar apps that offer full HTML support. Thankfully, the <tt>&lt;IMG&gt;</tt> tag is one of the supported tags. So problem solved, right? 

Not quite. While Google Calendar already supports a very limited number of HTML tags, the text goes through yet another 'code-cleaning' process, which does the following: 
  
  * Inserts all content inside <tt>&lt;html-blob&gt;</tt> tags
  * Removes unsupported tags, such as styles, classes and IDs  
  * Adds Google related parameters to all URLs found inside SRC and HREF attributes
  * ALT attributes inside <tt>&lt;IMG&gt;</tt> tags are left alone
  
Since Google 'sanitizes' all URLs found inside SRC and HREF attributes, images embedded using the <tt>&lt;IMG&gt;</tt> tag do not appear in calendar entries after import. The IMG tag is still there, but since the SRC values now contain extra stuff, all images appear as a 'broken image' icon.

This script fixes that.

&nbsp;

## How are events inserted

Google provides the following documentation on inserting events into your Google Calendar. 
* https://support.google.com/calendar/answer/37118?hl=en

Additionally, using third-party automation services such as Zapier, IFTTT and Integromat also allow insertion of HTML content into calendar events.

&nbsp;

## Limitations

Images will not show up when editing an event. In fact, editing an event may actually strip all the HTML from the description text. Note that this does not happen all the time, but it does happen every now and then.  
