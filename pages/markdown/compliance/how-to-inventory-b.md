## Example code.json file

We've created some [good metadata examples](https://github.com/GSA/code-gov/blob/master/METADATA_EXAMPLES.md)

## Tools

*   <a class="default-link" href="https://code.gov/about/compliance/inventory-code/validate-schema">Schema Validator</a>

    A tool for validating your code.json against v2.0.0 schemas. After entering in your code.json, it will list and highlight issues and provide a JSON editor for making changes to the file.

## [Changelog](https://github.com/GSA/code-gov-data/blob/master/CHANGELOG.md)

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

Previous schema revisions found in [Changelog](https://github.com/GSA/code-gov-data/blob/master/schemas/CHANGELOG.md)