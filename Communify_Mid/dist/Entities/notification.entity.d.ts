import { UserEntity } from "src/users/user.entity";
export declare class NotificationEntity {
    notification_id: number;
    type: string;
    notification: string;
    notification_at: string;
    user_id: UserEntity;
}
