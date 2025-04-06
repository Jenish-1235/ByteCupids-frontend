import axios from "axios";
import { RegisterPayload } from "../types/RegisterPayload";
import { RegisterResponse } from "../types/RegisterResponse";

export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(
      "http://localhost:8080/bytecupids/auth/register",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
