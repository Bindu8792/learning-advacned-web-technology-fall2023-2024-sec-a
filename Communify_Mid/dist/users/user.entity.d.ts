import { FileEntity } from "src/Entities/file.entity";
import { FriendEntity } from "src/Entities/friend.entity";
import { FriendRequestEntity } from "src/Entities/friendRequest.entity";
import { MessageEntity } from "src/Entities/message.entity";
import { NotificationEntity } from "src/Entities/notification.entity";
import { UserPermissionsEntity } from "src/Entities/userPermission.entity";
export declare class UserEntity {
    user_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    number: string;
    password: string;
    registration_at: string;
    sender: MessageEntity[];
    receiver: MessageEntity[];
    requested: FriendEntity[];
    accepted: FriendEntity[];
    user: NotificationEntity[];
    requester: FriendRequestEntity[];
    receiverReq: FriendRequestEntity[];
    file: FileEntity[];
    userPermission: UserPermissionsEntity[];
}
