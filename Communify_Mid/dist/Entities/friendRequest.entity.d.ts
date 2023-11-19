import { UserEntity } from "src/users/user.entity";
export declare class FriendRequestEntity {
    friend_id: number;
    requested_at: string;
    accepted_at: string;
    rejected_at: string;
    unfriend_at: string;
    status: string;
    requested_user: UserEntity;
    received_user: UserEntity;
}
