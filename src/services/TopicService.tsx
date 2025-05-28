import axios from "axios";
import { TopicPayload } from "../types/TopicPayload";
import { TopicResponse } from "../types/TopicResponse";


export const getTopics = async (payload: TopicPayload): Promise<TopicResponse> => {
  try {
    const response = await axios.post<TopicResponse>(
      "http://localhost:8000/bytecupids/lab/get_topics",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching topics:", error);
        throw error;
    }
};