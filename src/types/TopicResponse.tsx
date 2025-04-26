export interface TopicResponse {
  message: string;
  status: string;
  error: string;
  timestamp: string;
  code: number;
  success: boolean;
  topics: {
    topicId: string;
    topicName: string;
    moduleId: string;
    noOfLabs: number;
  }[];
}
