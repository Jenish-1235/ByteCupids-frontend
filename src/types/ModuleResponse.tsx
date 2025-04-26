export interface ModuleResponse {
    moduleName: string;
    noOfTopics: number;
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
    }[];
}