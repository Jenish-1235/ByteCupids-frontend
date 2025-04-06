export interface RegisterResponse {
  user: {
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
