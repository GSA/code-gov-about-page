# code-gov-about-page
Component for the [About](https://code.gov/about/overview/introduction) page on code.gov.

## Install

The repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install `code-gov-about-page` with this command: 
```sh
$ npm i @code.gov/code-gov-about-page
```

## Usage

This package is meant to be used with the [code-gov-front-end](https://github.com/GSA/code-gov-front-end) project. Please follow the [configuration settings](https://github.com/GSA/code-gov-front-end/blob/master/CONFIGURATION.md#style) for the project.

## Link this package to edit Code.gov About content locally

You may want to view your content changes in the code-gov-about-page repo on your local machine for testing. Follow these steps to do so:
1. Clone the latest version of the `code-gov-about-page` repository.
2. Run `npm install` to install the dependencies required for the package in the `code-gov-about-page` directory.
3. Run `npm link` in the root level of the `code-gov-about-page` directory on your local machine.
4. On the `code-gov-front-end` [project](https://github.com/GSA/code-gov-front-end#getting-started), clone the repository and run `npm install` if you haven’t done this already.
5. Run `npm link @code.gov/code-gov-about-page` in the root level of the code-gov-front-end directory on your local machine.

You are now using the latest version of the code.gov About page section via your cloned version when running the `code-gov-front-end` site on your local machine. To stop using this version, run `npm unlink @code.gov/code-gov-about-page` from the root level of the `code-gov-front-end` directory.

## Public domain

This project is in the worldwide [public domain](LICENSE.md).

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.