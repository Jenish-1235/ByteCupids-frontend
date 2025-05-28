export interface ModuleResponse {
  message: string;
  status: string;
  error: string;
  success: boolean;
  code: number;
  timestamp: string;
  modules: {
    moduleId: string;
    name: string;
    noOfTopics: number;
    noOfSubTopics: number;
    moduleImgUri?: string; // Optional, since backend does not provide it
  }[];
}
