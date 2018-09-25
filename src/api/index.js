/**
 * api routes
 */

import {
  apiURL
} from '@/config.js'

export const user = {
  signin: apiURL + '/login',
  logout: apiURL + '/auth/logout',
  getInfo: apiURL + '/auth/User',
  changePassword: apiURL + '/User/changePassword',
  changeWalletAddress: apiURL + '/User/addAddress',
  googleLogin: 'https://api.dsion.io/googleLogin'
}

export const sales = {
  getAllSalesStatus: apiURL + '/Sale/all',
  getSpecificSalesStatus: apiURL + '/Sale/:id',
  getTotalSales: apiURL + '/sliderData'
}

export const kyc = {
  postKycApplication: apiURL + '/User/Kyc/Register'
}
