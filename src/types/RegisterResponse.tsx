export interface RegisterResponse {
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
