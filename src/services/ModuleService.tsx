import { ModuleResponse } from "../types/ModuleResponse";

export const getModules = async () : Promise<ModuleResponse> => {
  try {
    const response = await fetch(
      "http://localhost:8080/bytecupids/lab/get_modules",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching modules:", error);
    throw error;
  }
}