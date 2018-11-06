## Example code.json file

We’ve created a [sample code.json](https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/src/assets/sample_code_200.json).

## Tools

*   <a class="default-link" routerlink="/policy-guide/docs/compliance/inventory-code/tools/validate-schema">Schema Validator</a>

    A tool for validating your code.json against either the v1.0.1 or v2.0.0 schemas. After entering in your code.json, it will list and highlight issues and provide a full featured code editor for making changes to the file.

*   <a class="default-link" routerlink="/policy-guide/docs/compliance/inventory-code/tools/upgrade-schema">v1.0.1 to v2.0.0 Schema Upgrader</a>

    The upgrader takes a valid v1.0.1 code.json and performs as many automatic upgrades as it can. It also adds additional fields to the JSON to serve as templates for adding more information about your repositories.

## [Changelog](https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/CHANGELOG.md)

### August 2017 - Version 2.0.0

This revision includes revisions to incorporate the open source measurement requirement, improvements and clarifications on previous versions of schema content.

#### Added

*   'openSourceMeasureType' - The source code policy requires that 20% of an agency's code inventory must be made available as open-source. In order to do so, agencies must (1) identify a method for measuring the 20% metric and (2) apply the measurement method to the total enterprise code inventory to establish a baseline.
*   Start using "changelog.md" to track changes to the official schema file.
*   'permissions' - includes details about usage/licensing, replaces the openSourceProject/governmentWideReuseProject.
*   'measurementType' - agencies can choose from a list of enumerated descriptions of how they measure the 20% requirement.
*   'disclaimerText' - includes short, paragraph-long disclaimer language.
*   'disclaimerURL' - link to disclaimer language.
*   'laborHours' - number of hours involved in building the release.
*   'relatedCode' - array of related source code repositories.
*   'reusedCode' - array of government software used in the release.
*   'version' - added versioning to releases

#### Changed

*   'releases' - changed from 'projects' to reflect types of repositories that should be listed.
*   'licenses' - changed license from a URL string to an object which includes a URL and a name.
    *   'repositoryURL' - changed from 'repository' for consistency.
    *   'homepageURL' - changed from 'homepage' for consistency.
    *   'exemptionText' - now included within the 'permissions' object.
    *   'date' - changed from 'updated' object; removed metadataLastUpdated, lastCommit, and sourceCodeLastModified and replaced with created, lastModified, and metadataLastUpdated

#### Removed

*   'openSourceProject'
*   'governmentWideReuseProject'
*   'exemption' - now included within the enumerated usageType options in the 'permissions' object.

### December 2016 - Version 1.0.1

This revision includes minor tweaks that are aimed at clarifying certain fields and increasing the overall utility of the schema content.

#### Changes in v1.0.1

*   'version': The first official iteration of the code.gov metadata schema will be version 1.0.1\. Adding a version number to the schema makes it easier to track and manage changes between versions of the metadata schema.
*   ‘organization’: The ‘organization’ field, which holds the name of the sub-agency responsible for a particular repository or release, is now optional. It has also been moved into the ‘releases’ object. This enables agencies to identify the appropriate organization that owns the repository within the agency.
*   ‘releases’: This guide previously referred to a ‘release’ field in the metadata schema, while the sample code.json referred to the plural form ‘releases’. This guide has been updated to refer to the plural form ‘releases’.
*   ‘repository’: The link to the open source repository will be considered a required field for all open source repositories. For repositories that are only available as government-wide reuse or are closed, pursuant to one of the exemptions, this field is not required.
*   ‘exemptionText’: This field allows agencies to provide a brief narrative explanation for the exception requested in the 'exemption' field.