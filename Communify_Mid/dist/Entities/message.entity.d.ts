import { UserEntity } from "src/users/user.entity";
export declare class MessageEntity {
    message_id: number;
    message: string;
    status: string;
    message_at: string;
    sender_id: UserEntity;
    receiver_id: UserEntity;
}
