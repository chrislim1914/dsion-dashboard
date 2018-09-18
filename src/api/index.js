/**
 * api routes
 */

import {
  apiURL
} from '@/config.js'

export const user = {
  signin: apiURL + '/login'
}

export const sales = {
  getAllSalesStatus: apiURL + '/Sale/all',
  getSpecificSalesStatus: apiURL + '/Sale/:id',
  getTotalSales: apiURL + '/sliderData'
}
