import axios from "axios";
import { LoginPayload } from "../types/LoginPayload";
import { LoginResponse } from "../types/LoginResponse";

export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      "http://localhost:8000/bytecupids/auth/login",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
