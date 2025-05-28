export interface TopicResponse {
  message: string;
  status: string;
  error: string;
  timestamp: string;
  code: number;
  success: boolean;
  topics: {
    subTopicName: string;
    topicName: string;
    moduleId: number;
    subTopicId: number;
  }[];
}
