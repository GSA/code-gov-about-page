# Creating your enterprise code inventory

## Overview

Section [7.2](#code-inventories-and-discovery) and [7.3](#codegov) of the Source Code Policy require agencies to provide an inventory of their 'custom-developed code' to support government-wide reuse and make Federal open source code easier to find.

Using these inventories, [Code.gov](https://Code.gov) will provide a platform to search federally funded open source software and software available for government-wide reuse.

## Publishing Your Agency's Inventory

Agencies are required to publish their inventories using a standard metadata schema - a JSON file that they'll make available on their agency websites. Versions 1.0.0, 1.0.1, and 2.0.0\. of the schema are now available. Agencies are strongly encouraged to use version 2.0.0 of the schema, which is described below. This version includes revisions that make your inventory much more useful and intuitive. Versions 1.0.0 and 1.0.1 will be phased out at the end of 2017.

Agencies should make the [“code.json”](https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/src/assets/sample_code_200.json) available in the root folder of their website (e.g., https://www.agency.gov/code.json). Code.gov will then retrieve these JSON files daily and compile them.

## Metadata Schema version 2.0.0

Version 2.0.0 of the [metadata schema file in JSON format can be found here.](https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/src/assets/schemas/2.0.0.json)

### File location and contents:

*   `code.json` must live in the root directory of your agency’s website.
*   `code.json` must include a single object represented as JSON, with key-value pairs according to the list below.