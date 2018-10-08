/**
 * filters
 */
import {
  baseURL
} from '../config'
const moment = require('moment')

/**
 * @description changes raw url youtube link to embed.
 */
export function linkify (link) {
  return link.replace('watch?v=', 'embed/')
}

/**
 * @description get asset url based on the provided link
 */
export function assetUrl (link) {
  return baseURL + '/' + link
}

/**
 * @description capitalize first character of the word entry
 */
export function capitalize (entry = '') {
  entry = entry.toString()
  return entry.charAt(0).toUpperCase() + entry.slice(1)
}

export function breadify (entry = '') {
  entry = entry.toString()
  entry = entry.replace(new RegExp('-', 'g'), ' ')
  return entry.charAt(0).toUpperCase() + entry.slice(1)
}

export function readerDate (entry = '') {
  return moment(entry).add(1, 'days').format('MMMM D, Y')
}

export function shorterDate (entry = '') {
  return moment(entry).format('D MMM, Y')
}

export function salesPeriodFrom (entry = '') {
  return moment(entry).format('YYYY.MM.DD')
}

export function salesPeriodTo (entry = '') {
  var salesPeriod = ''
  if (entry === '0000-00-00 00:00:00') {
    salesPeriod = '00.00'
  } else {
    salesPeriod = moment(entry).format('YYYY-MM.DD')
  }
  return salesPeriod
}

export function digitCommafy (entry = '') {
  var str = entry.toString().split('.')
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ')
  }
  return str.join('.')
}
