## name-transform

A tiny library for transforming names.

<a href="http://img.badgesize.io/https://unpkg.com/name-transform?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/name-transform?compression=gzip&label=gzip%20size:%20JS">
</a>

## Features

* Tiny size
* `Typescript` support
* `umd` and `esm`

## Usage

```shell
npm install name-transform
```

```js
/*
  camel       -->  'helloWorld'
  pascal      -->  'HelloWorld'
  hyphen      -->  'hello-world'
  underscore  -->  'hello_world'
 */
import {
  camelToHyphen,
  camelToPascal,
  camelToUnderscore,
  pascalToCamel,
  pascalToHyphen,
  pascalToUnderscore,
  underscoreToCamel,
  underscoreToHyphen,
  underscoreToPascal,
} from 'name-transform'

camelToUnderscore('helloWorld')     // =>'hello_world'
camelToPascal('helloWorld')         // =>'HelloWorld'
camelToHyphen('helloWorld')         // =>'hello-world'
pascalToCamel('HelloWorld')         // =>'helloWorld'
pascalToHyphen('HelloWorld')        // =>'hello-world'
pascalToUnderscore('HelloWorld')    // =>'hello_world'
underscoreToCamel('hello_world')    // =>'helloWorld'
underscoreToPascal('hello_world')   // =>'HelloWorld'
underscoreToHyphen('hello_world')   // =>'hello-world'
```