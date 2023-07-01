// live
// export const baseURL = 'https://buildersbidroom.com/api/';

// local
const localURL = 'http://172.16.11.111:3006/api/';
const stagingURL = 'https://cuelaundry.devtechnosys.tech/api/';

export const baseURL = stagingURL;
// export const googleApiKey = 'AIzaSyD6LI0RHjEzNMuhex_ZCa1QFzWmhfxVUMw';
export const googleApiKey = 'AIzaSyA1rt8OKhZ-8_Fv_OjiSA0n1NC1M6TAN94';

export const ApiURL = {
  //*********************************** Auth ****************************************** //
  signin: 'driver-signin',
  forgotpasswordSendOtp: 'forgot-password',
  forgetPasswordOtpVerify: 'verifyForgetOTP',
  resetPassword: 'reset-password',
  verifyEmailOTP: 'verifyEmailOTP',
  verifyMobileOTP: 'verifyMobileOTP',
  resendOTP: 'resendOTP',
  //*********************************** Intro ****************************************** //
  intro: 'get-intro',
  //*********************************** App ****************************************** //
  help: 'help',
  home: 'home',
  changePassword: 'change-password',
  getProfileInfo: 'get-profile',
  editProfile: 'update-profile',
  vanDetail: 'van-detail',
  setNotification: 'set-notification',
  contactUs: 'driver-contact',
  // pickupOrderList: 'pickup-order-list',
  pickupOrderList: 'order-list',
  getOrderInfoFromQR: 'scan-QR',
  searchOrders: 'get-search-order',
  cancelOrder: 'pickup-cancel-order',
  reasonList: 'driver-reason-list',
  cancelDelivery: 'deliver-cancel-order',
  updateQRCode: 'update-QR-code',
  updateOrderStatus: 'update-order-status',
  dropOffDelivery: 'deliver-drop-off-image',
  markOutForDelivery: 'out-for-delivery',
  orderHistory: 'driver-order-history',
  orderHistoryDetails: 'order-history-detail',
};
