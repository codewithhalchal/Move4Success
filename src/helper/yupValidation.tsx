import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const loginWithEmail = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().required("Password required").trim()
});
export const loginWithPhoneNumber = yup.object().shape({
  mobile: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),

});
export const signUp = yup.object().shape({
  username: yup.string().required("Name is required").trim().min(3, "Min length two"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  password: yup.string().required("Password is required").trim(),
  confirmPassword: yup.string().required("Please re-enter your password").trim().oneOf([yup.ref('password'), null], "Should match password"),
});
export const editProfile = yup.object().shape({
  name: yup.string().required("Name is required").trim().min(3, "Min length three"),
  // email: yup.string().email("Invalid email").required("Email is required"),
  // phoneNo: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
});
export const signUpSocialCustomer = yup.object().shape({
  firstName: yup.string().required("First name required").trim().min(2, "Min length two"),
  lastName: yup.string().required("Last name required").trim().min(2, "Min length two"),
  gender: yup.mixed().required("Gender required"),
  dob: yup.string().required("DOB required"),
  email: yup.string().email("Invalid email").required("Email required"),
  ph_number: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  // address : yup.string().required("Address required").trim(),
  coordinate: yup.mixed().required("Location required"),
});
export const signUpProvider = yup.object().shape({
  company: yup.string().required("Company name required").trim(),
  email: yup.string().email("Invalid email").required("Email required"),
  ph_number: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  // address : yup.string().required("Address required").trim(),
  coordinate: yup.mixed().required("Location required"),
  // state : yup.string().required("State required").trim(),
  // city : yup.string().required("City required").trim(),
  pass: yup.string().required("Password required").trim().matches(
    validPassRegex,
    "Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  cnfrm_pass: yup.string().required("Confirm password required").trim().oneOf([yup.ref('pass'), null], "Should match password"),
});
export const signUpSocialProvider = yup.object().shape({
  company: yup.string().required("Company name required").trim(),
  email: yup.string().email("Invalid email").required("Email required"),
  ph_number: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  // address : yup.string().required("Address required").trim(),
  coordinate: yup.mixed().required("Location required"),
});

export const forgotPass = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email required"),
});
export const resetPassword = yup.object().shape({
  password: yup.string().required("Password required").min(8, "Should be at least 8 characters").trim(),
  confirmPassword: yup.string().required("Confirm password required").trim().oneOf([yup.ref('password'), null], "Should match password"),
});
export const changePassword = yup.object().shape({
  oldPass: yup.string().required("Old Password required").trim(),
  newPass: yup.string().required("New Password required").min(8, "Should be at least 8 characters").trim(),
  cnfNewPass: yup.string().required("Confirm password required").trim().oneOf([yup.ref('newPass'), null], "Should match new password"),
});
export const setupProfile = yup.object().shape({
  workExp: yup.string().required("Work experience required").trim().max(2),
  about: yup.string().required("About required").trim(),
  licence: yup.mixed(),
});
export const editProfileProvider = yup.object().shape({
  companyName: yup.string().required("Company name is required").trim().min(2, "Min length two"),
  email: yup.string().email("Invalid email").required("Email required"),
  phoneNumber: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  // address : yup.string().required("Address required").trim(),
  // state : yup.string().required("State required").trim(),
  // city : yup.string().required("City required").trim(),
  coordinate: yup.mixed().required("Location required"),
  workExp: yup.string().required("Work experience required").trim().max(2),
  about: yup.string().required("About required").trim(),
});
export const editProfileCustomer = yup.object().shape({
  firstName: yup.string().required("First name required").trim().min(2, "Min length two"),
  lastName: yup.string().required("Last name required").trim().min(2, "Min length two"),
  gender: yup.mixed().required("Gender required"),
  dob: yup.string().required("DOB required"),
  email: yup.string().email("Invalid email").required("Email required"),
  phoneNumber: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  // address : yup.string().required("Address required").trim(),
  coordinate: yup.mixed().required("Location required"),
  // state : yup.string().required("State required").trim(),
  // city : yup.string().required("City required").trim(),
});
export const postNewJob = yup.object().shape({
  title: yup.string().required("Title is required").trim().min(2, "Min length two"),
  serviceValue: yup.string().required("Service type is required"),
  categoryValue: yup.string().required("Category is required"),
  desc: yup.string().required("Description required").trim().max(1000),
  instruction: yup.string().required("Description required").trim().max(1000),
  coordinate: yup.mixed().required("Location required"),
  images: yup.array(),
  videos: yup.array(),
});
export const placeYourBid = yup.object().shape({
  message: yup.string().required("Message required").trim().max(200),
});

export const contactUs = yup.object().shape({
  fullName: yup.string().required("FullName required").trim(),
  email: yup.string().email().required("Email required").trim(),
  phone: yup.string().required("Phone number required").trim().matches(phoneRegExp, "Invalid phone number").max(15),
  msg: yup.string().required("Message required").trim(),
});