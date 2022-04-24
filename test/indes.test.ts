import { describe, expect, it } from 'vitest'
import {
  camelToHyphen,
  camelToPascal,
  camelToUnderscore,
  underscoreToCamel,
  underscoreToPascal,
  underscoreToHyphen,
  pascalToCamel,
  pascalToHyphen,
  pascalToUnderscore,
} from '../src/index'

describe('test', () => {
  it('should workd', () => {
    expect(camelToUnderscore('helloWorld')).toEqual('hello_world');
    expect(camelToPascal('helloWorld')).toEqual('HelloWorld');
    expect(camelToHyphen('helloWorld')).toEqual('hello-world');
    expect(pascalToCamel('HelloWorld')).toEqual('helloWorld');
    expect(pascalToHyphen('HelloWorld')).toEqual('hello-world');
    expect(pascalToUnderscore('HelloWorld')).toEqual('hello_world');
    expect(underscoreToCamel('hello_world')).toEqual('helloWorld');
    expect(underscoreToPascal('hello_world')).toEqual('HelloWorld');
    expect(underscoreToHyphen('hello_world')).toEqual('hello-world');
  })
})
