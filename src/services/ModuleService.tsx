import axios from "axios";
import { ModuleResponse } from "../types/ModuleResponse";

export const getModules = async (): Promise<ModuleResponse> => {
  try {
    const response = await axios.post(
      "http://localhost:8000/bytecupids/lab/get_modules"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
    throw error;
  }
};
