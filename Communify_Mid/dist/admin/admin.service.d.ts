import { FilePermissionDTO, UserPermissionDTO, UserPermissionEditDTO } from './admin.dto';
export declare class AdminService {
    createNewFilePermission(permission: FilePermissionDTO): void;
    filePermissions(): void;
    updateFilePermission(permission: FilePermissionDTO): void;
    createNewUserPermission(users: UserPermissionDTO): void;
    userPermissions(): void;
    updateUserPermission(permission: UserPermissionEditDTO): void;
    removeUploadedFile(id: string): void;
}
