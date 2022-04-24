import { describe, expect, it } from 'vitest'
import { camelToUnderscore, underscoreToCamel } from '../src/index';

describe('test', () => {
  it('should workd', () => {
    expect(camelToUnderscore('helloWorld')).toEqual('hello_world');
    expect(underscoreToCamel('hello_world')).toEqual('helloWorld');
  })
})
