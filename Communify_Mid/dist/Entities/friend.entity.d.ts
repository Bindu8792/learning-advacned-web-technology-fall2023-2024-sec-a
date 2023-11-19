import { UserEntity } from "src/users/user.entity";
export declare class FriendEntity {
    friend_id: number;
    added_at: string;
    requested_user: UserEntity;
    accepted_user: UserEntity;
}
