module.exports = {
  INTERNAL_ERROR: "Internal server error.",
  countryList: "Country list",
  stateList: "State list",
  cityList: "City list",
  OTP_SEND: "OTP sent Successfully!",
  OTP_EXPIRED: "OTP expired.",
  OTP_VIRIFIED: "OTP has been verified successfully.",
  INCORRECT_OTP: "Incorrect OTP",
  BLOCK_BY_ADMIN: "You have been blocked by admin",
  DELETE_BY_ADMIN: "Your account has been deleted by admin",
  NO_TOKEN: "Please provide token",
  LOGIN: "Login successfully",
  OTP_VERIFY: "OTP verified successfully",
  USER_ALREADY_EXIST: "User already exist",
  USER_NOT_FOUND: "User not found",
  PROFILE_UPDATED: "Profile updated successfully",
  USER_EXISTS: "User Exists",
  MOBILE_EXIST: "This mobile number already exists",
  EMAIL_EXIST: "This email already exists",
  TITLE_EXIST: "This title already exists",
  USER_NAME_EXIST: "That username is taken. Try another.",
  USER_DETAILS: "User details",
  USER_CREATED: "User created successfully",
  USER_UPDATED: "User updated successfully",
  INCORRECT_LOGIN: "Incorrect login credential provided",
  INCORRECT_SOCIAL_USER:
    "User with social id exists, but the entered mobile number/email is incorrect",
  NOT_REGISTERED: "User not registered",
  NOT_ACTIVATED: "User not activated",
  RESET_LINK_SEND: "Reset password link has been sent at your email.",
  LINK_EXPIRED: "Password reset link has been expired",
  PWD_CHANGED: "Password has been changed successfully",
  PWD_NOT_MATCH: "Password not matched.",
  CMS_SAVED: "Static content added successfully",
  FAQ_ADDED: "FAQ added successfully",
  UPLOAD_SUCCESS: "File uploaded successfully",
  TRANSACTION_SUCCESS: "Transaction has been completed",
  DATA_FOUND: "Data found successfully",
  DETAILS_FETCHED: "Details has been fetched successfully",
  DATA_NOT_FOUND: "Data not found",
  UPDATE_SUCCESS: "Successfully updated",
  DELETE_SUCCESS: "Successfully deleted",
  SUBSCRIPTION_ADDED: "Subscription plan added successfully.",
  BUNDLE_ADDED: "Bundle added successfully.",
  USER_LOGOUT: "User logged out successfully",
  TWO_FA_GENERATED: "Two factor authentication url generated successfully.",
  INCORRECT_CODE: "Code expired, Please provide another one.",
  FILE_NOT_FOUND: "Random file not found.",
  METADATA_UPLOADED: "Successfully uploaded and transferred.",
  COLLECTION_EXIST: "Collection already exist.",
  COLLECTION_ADDED: "Collection added successfully.",
  COLLECTION_NOT_FOUND: "Collection not found",
  NFT_ADDED: "Nft added successfully",
  NFT_EXIST: "Nft already exist.",
  NFT_NOT_FOUND: "Nft not found",
  NFT_ALREADY_PLACE: "This nft is already placed.",
  ORDER_ADDED: "Order added successfully.",
  ORDER_EXIST: "This order is already placed.",
  ORDER_NOT_FOUND: "Order not found.",
  BID_ADDED: "Bid added successfully.",
  SUBSCRIBED: "You have successfully subscribed.",
  BUYED: "You have successfully buyed.",
  UNSUBSCRIBED: "You have successfully unsubscribed.",
  MODERATOR_ADDED: "Moderator added successfully.",
  SHARED_AUDIENCE: "Successfully shared with audience.",
  LIKES: "Added to liked nfts.",
  DISLIKES: "Removed from liked nfts.",
  LIKE_BUNDLE: "Added to liked bundles.",
  DISLIKE_BUNDLE: "Removed from liked bundles.",
  LIKE_FEED: "Added to liked feed.",
  DISLIKE_FEED: "Removed from liked feed.",
  LIKE_USER: "Added to liked user.",
  DISLIKE_USER: "Removed from liked user.",
  FEED_NOT_FOUND: "Feed not found.",
  REPORT_NOT_ALLOWED: "You are not allowed to share the report as you are blocked by Admin.",
  BLOCKED_NOT_ALLOWED: "You are not allowed to perform this request as you are blocked by Admin.",
  LOGIN_NOT_ALLOWED: "You are not allowed to login as you are blocked by Admin.",
  CHAT_NOT_FOUND: "Chat not found.",
  REPORTED: "You have successfully reported.",
  ALREADY_REPORTED: "You have already reported for this chat.",
  BLOCKED: "Successfully blocked.",
  UNBLOCKED: "Successfully unblocked.",
  WARNING_SENT: "Warning message has been sent successfully.",
  STOPPED: "Auction has been stopped successfully.",
  SUBSCRIPTION_NOT_FOUND: "Subscription not found.",
  PLAN_ADDED: "You have successfully selected the plan.",
  EXPIRY_BUNDLE: "This bundle has been expired.",
  DONATION_SUCCESS: "Donation has been sent successfully.",
  DELETED_REPORT: "Report has been deleted successfully.",
  PASSWORD_EXPIRED: "Password expired, Need to be reset your password first.",
  PAYMENT_AWAITED:
    "Your payment is being processed you will be notified with payment status soon.",
  REFERRAL_NOT_FOUND: "Please provide a valid referral code.",
  ADD_BANNER: "Banner add successfully.",
  VIEW_BANNER: "Banner details fetch successfully.",
  DELETE_BANNER: "Banner deleted successfully.",
  EDIT_BANNER: "Banner edited successfully.",
  BANNER_UNBLOCKED: "Banner is unblocked successfully.",
  BANNER_BLOCKED: "Banner is blocked successfully.",
  ADD_SOCIAL: "Social add successfully.",
  VIEW_SOCIAL: "Social details fetch successfully.",
  DELETE_SOCIAL: "Social deleted successfully.",
  EDIT_SOCIAL: "Social edited successfully.",
  SOCIAL_UNBLOCKED: "Social is unblocked successfully.",
  SOCIAL_BLOCKED: "Social is blocked successfully.",
  ADD_LOGO: "Logo added successfully.",
  VIEW_LOGO: "Logo details fetch successfully.",
  DELETE_LOGO: "Logo deleted successfully.",
  EDIT_LOGO: "Logo edited successfully.",
  LOGO_ACTIVATED: "Logo is unblocked.",
  LOGO_BLOCKED: "Logo is blocked.",
  ALREADY_EXITS: "Data already exist",
  PRESS_SAVE: "Press data saved successfully .",
  PARTNER_SAVE: "Partner added successfully .",
  PARTNER_EXIST: "Partner already exist .",
  NFT_EXPORTED: "NFT has been successfully exported",
  SUBADMIN_CREATED: "Sub-Admin has been created successfully",
  SEND_ORDER: "Order sent successfully",
  VIDEO_ADD: "Video added successfully",
  ADVERTISEMENT_ADD: "Advertisement added successfully",
  CREATE_STORY: "Successfully created story",
  STORY_FOUND: "Found story successfully",
  STORY_NOT_FOUND: "Story not found",
  STORY_REMOVE: "Story removed successfully",
  STORY_WATCH: "You have watch this story",
  BILL_ADDED: "bill add successfully",

  SMS_BODY: (otp) => `Your verification code is  ${otp}`,
  INSUFFICIENT_BALANCE: (coin) =>
    `You have insufficient balance of ${coin} in your wallet`,
  REFER_SMS_BODY: (
    first_name,
    last_name,
    referral_code,
    iosLink,
    androidLink,
    webLink
  ) => `${first_name} ${last_name} wants to refer you on PayPenny application. 
	Please use ${referral_code} as the referral code. Website Link : ${webLink}, Android Link : ${androidLink}, IOS Link : ${iosLink}`,
};
