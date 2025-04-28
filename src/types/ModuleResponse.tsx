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
        moduleImgUri: string;
        noOfTopics: number;
    }[];
}