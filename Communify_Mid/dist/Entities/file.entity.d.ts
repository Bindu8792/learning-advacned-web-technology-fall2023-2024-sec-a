import { UserEntity } from "src/users/user.entity";
export declare class FileEntity {
    file_id: number;
    file_name: string;
    uploaded_at: string;
    user_id: UserEntity;
}
