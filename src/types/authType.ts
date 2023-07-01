export interface authType{
    loading: boolean;
    currentUser:any;
    authToken: string;
    guestUser: boolean;
    okayResponse: boolean;
    resetPasswordId: string;
    rememberEmail:string;
    rememberPassword:string;
    imageUrl:string;

}

export interface RegisterPayload {
    username: string;
    email: string;
    mobile: number;
    password: string;
    confirmPassword?: string;
    tourist: number;
  }
  
  export interface LoginPayload {
    email?: string;
    password?: string;
    fcmToken?: string;
    mobile?: string;
  }
  
  export interface RememberMePayload {
    email?: string;
    password?: string;
  }
  
  export interface ForgetPasswordPayload {
    email?: string;
  }
  
  export interface OtpVerifyPayload {
    otp: number;
    mobile?: number;
    email?: string;
    fcmToken?: string;
  }
  
  export interface resetPasswordPayload {
    id: string;
    password: string;
    confirmPassword?: string;
  }
  
  export interface AuthState {
    loading?: boolean;
    currentUser?: any;
    authToken?: string;
    guestUser: boolean;
    okayResponse?: boolean;
    resetPasswordId?: string;
    rememberEmail?: string;
    rememberPassword?: string;
    imageUrl?: string;
  }
  