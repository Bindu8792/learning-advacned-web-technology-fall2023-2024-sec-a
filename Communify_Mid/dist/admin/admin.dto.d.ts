interface User {
    userId: number;
}
export declare class UserPermissionEditDTO {
    userId: number;
    uploadDisable: boolean;
}
export declare class UserPermissionDTO {
    users: User[];
}
export declare class FilePermissionDTO {
    filePermissionId: number;
    type: string;
    size: string;
}
export {};
