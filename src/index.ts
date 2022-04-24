/*
  camel       -->  'iAm24YearsOld'
  pascal      -->  'IAm24YearsOld'
  hyphen      -->  'i-am-24-years-old'
  underscore  -->  'i_am_24_years_old'
 */

export const camelToPascal = (str: string) => {
  const [first, ...rest] = str.split('')
  return first.toUpperCase() + rest.join('')
}

export const camelToHyphen = (str: string) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase()

export const camelToUnderscore = (str: string) =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase()

// HelloWorld --> helloWorld
export const pascalToCamel = (str: string) =>
  str.replace(/([A-Z])/, (match, p1) => `${p1.toLowerCase()}`)

// HelloWorld --> hello-world
export const pascalToHyphen = (str: string) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)

export const pascalToUnderscore = (str: string) =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase().slice(1)

// hello_world --> helloWorld
export const underscoreToCamel = (str: string) =>
  str.replace(/\_([a-z])/g, (_, p1) => p1.toUpperCase())

// hello_world --> HelloWorld
export const underscoreToPascal = (str: string) => {
  const t = underscoreToCamel(str)
  return t[0].toUpperCase() + t.slice(1)
}

// hello_world --> hello-world
export const underscoreToHyphen = (str: string) =>
  str.replace(/_([a-z])/g, '-$1')
