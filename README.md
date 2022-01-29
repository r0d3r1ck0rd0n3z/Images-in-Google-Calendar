# Show images in Google Calendar

This tampermonkey script reverts URLs inside <tt>&lt;IMG&gt;</tt> tags back to their original values by removing extra parameters added during the import process.

&nbsp;

## Dependencies

This script requires [Tampermonkey](https://www.tampermonkey.net/) to function. The user is assumed to have a basic understanding on how a Tampermonkey script works.

To use, install the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) first, then copy the code into the dashboard. If you need a quick guide on installing scripts, the following resources may be of help:
* https://www.tampermonkey.net/faq.php#Q102
* https://www.youtube.com/watch?v=8tyjJD65zws

&nbsp;

## Background

Google Calendar supports a limited number of HTML tags, mainly to support importing events from other calendar apps that have full HTML support. However, most tags can only be inserted when importing events, including the <tt>&lt;IMG&gt;</tt> tag.   
  
When a user imports a calendar entry, Google does the following:
  
  * Inserts all content inside <tt>&lt;html-blob&gt;</tt> tags
  * Removes unsupported tags, such as styles, classes and IDs  
  * Adds Google related parameters to all URLs found inside SRC and HREF attributes
  * ALT attributes inside <tt>&lt;IMG&gt;</tt> tags are left alone
  
Since Google 'sanitizes' all URLs found inside SRC and HREF attributes, images embedded using the <tt>&lt;IMG&gt;</tt> tag do not appear in calendar entries after import.

&nbsp;

## How are events inserted

Google provides the following documentation on inserting events into your Google Calendar. 
* https://support.google.com/calendar/answer/37118?hl=en

Additionally, using third-party automation services such as Zapier, IFTTT and Integromat also allow insertion of HTML content into calendar events.
