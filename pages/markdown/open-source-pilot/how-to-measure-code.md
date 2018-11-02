# Measuring Source Code

As part of the Open Source Pilot Program the Federal Source Code Policy requires that:

> Each agency shall release as OSS at least 20 percent of its new custom-developed code each year.

Broadly, to satisfy this requirement agencies will need to do two things:

*   Choose a method of measuring the size of code
*   Apply the measurement method to the total enterprise code inventory to establish a baseline

## Choosing a measure

Having established an inventory of new custom-developed code, agencies will still need to determine their method of measuring the amount of code it represents. The Open Source community and Federal developers have suggested a number of options that agencies may choose from. These include:

*   Source lines of code
*   Number of self-contained modules
*   Cost
*   Number of software projects
*   System certification and accreditation boundaries

This list is not exhaustive and agencies should choose the most appropriate measure for their organization. When choosing a measure, agencies should consider the following factors:

*   Automation. Is it possible to collect the data for the measure automatically or automate aspects of the collection process? For example, can a script be developed to tabulate the number of lines of source code in your repositories?
*   Existing processes. Does your agency already collect data or collect systems information that can be repurposed to meet this requirement?
*   Approximation. Given the difficulty in definitively calculating most reasonable measures related to this requirement, the Federal Source Code Policy leaves room for agencies to use approximate or "estimated" measures. For example, the number of source lines of code in a particular codebase may fluctuate day to day. Or if cost is your measure, the development of a particular codebase may have been purchased in combination with other services. Agencies may use approximation in measuring their code but should do so according to a documented, justifiable process that is applied consistently and considers the overall goals of the policy.
*   To the extent practicable, agencies should use a consistent measure across their organization.

## Measuring your code for the first time

Having chosen a measure, your agency will need to measure the size of its codebases that are under active development to establish a baseline.

Things to consider include:

*   This requirement complements the requirement to account for 100% of new custom-developed code in your agency’s enterprise code inventory (or in the form of exemptions from inclusion in the inventory). Importantly, for the purposes of calculating your total amount of custom code, agencies _should include_ code that is unlikely or certain not to be released for reasons of national security or the other exemptions related to the enterprise code inventory.
*   Remember that the Federal Source Code Policy requires each agency to release "20% of its new custom-developed code each year for the term of the pilot program" and does not apply retroactively. However, making such code available for Government-wide reuse or as OSS, to the extent practicable, is strongly encouraged.
*   In defining "custom code", the Federal Source Code Policy allows agencies to exclude "code that is truly exploratory or disposable in nature, such as that written by a developer experimenting with a new language or library." As with measuring the size of code, agencies should adopt a consistent, justifiable approach to determining whether code qualifies and can be excluded from the enterprise code inventory and open source pilot. In that context, agencies should err on the side of including code.