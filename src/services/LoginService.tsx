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

    // Check if the response contains valid user data
    if (!response.data.user?.uuid || !response.data.accessToken) {
      throw new Error("User not found. Please sign up first.");
    }

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    if (response.data.status !== "success") {
      throw new Error(response.data.message || "Login failed");
    }

    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        throw new Error("Invalid email or password");
      } else if (error.response.status === 404) {
        throw new Error("User not found");
      } else if (error.response.status === 403) {
        throw new Error("Account is locked");
      } else if (error.response.status === 429) {
        throw new Error("Too many login attempts");
      }
      throw new Error(error.response.data?.message || "Login failed");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response from server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || "An error occurred during login");
    }
  }
};
