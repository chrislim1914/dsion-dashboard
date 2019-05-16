/**
 * api routes
 */

import {
  apiURL
} from '@/config.js'

export const user = {
  signin: apiURL + '/login',
  logout: apiURL + '/auth/logout',
  refreshToken: apiURL + '/auth/refresh',
  getInfo: apiURL + '/auth/User',
  getContribution: apiURL + '/user/deposit/',
  changePassword: apiURL + '/User/changePassword',
  changeWalletAddress: apiURL + '/User/addAddress',
  googleLogin: 'https://api.dsion.io/googleLogin',
  removeUser: apiURL + '/User/delete'
}

export const sales = {
  getAllSalesStatus: apiURL + '/Sale/all',
  getActiveSale: apiURL + '/SaleActive',
  getSpecificSalesStatus: apiURL + '/Sale/:id',
  getTotalSales: apiURL + '/sliderData'
}

export const kyc = {
  postKycApplication: apiURL + '/User/Kyc/Register'
}
