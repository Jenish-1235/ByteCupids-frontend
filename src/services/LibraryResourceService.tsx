import axios from "axios";
import { LibraryResourcePayload } from "../types/LibraryResourcePayload";
import { LibraryResourceResponse } from "../types/LibraryResourceResponse";

export const getLibraryResources = async (payload: LibraryResourcePayload): Promise<LibraryResourceResponse> => {
    try{
        const response = await axios.post<LibraryResourceResponse>(
            "http://localhost:8080/bytecupids/lab/get_resources",
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching library resources:", error);
        throw error;
    }
};