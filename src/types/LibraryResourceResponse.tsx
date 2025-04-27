import { LibraryResource } from "./LibraryResource";

export interface LibraryResourceResponse {
    resources: LibraryResource[];
    message: string;
    status: string;
    code: number;
    error:string;
    timeStamp: string;
    success: boolean;
}