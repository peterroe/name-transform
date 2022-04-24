/*
  camel       -->  'iAm24YearsOld'
  pascal      -->  'IAm24YearsOld'
  hyphen      -->  'i-am-24-years-old'
  constant    -->  'I_AM_24_YEARS_OLD'
  sentence    -->  'I am 24 years old'
  underscore  -->  'i_am_24_years_old'
 */
export const camelToUnderscore = (str: string) =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase();

export const underscoreToCamel = (str: string) =>
  str.replace(/(_\w)/g, (m) => m[1].toUpperCase());
