export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    uuid: string;
    email: string;
    username: string;
  };
  message: string;
  status: string;
  error: string;
  success: boolean;
  code: number;
  timestamp: string;
}
