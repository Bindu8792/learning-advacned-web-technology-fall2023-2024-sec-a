import { MessageDTO, UserLoginDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { FriendEntity } from 'src/Entities/friend.entity';
import { FriendRequestEntity } from 'src/Entities/friendRequest.entity';
import { FileEntity } from 'src/Entities/file.entity';
import { MessageEntity } from 'src/Entities/message.entity';
import { NotificationEntity } from 'src/Entities/notification.entity';
export declare class UsersService {
    private userRepo;
    private friendRepo;
    private friendRequestRepo;
    private fileRepo;
    private messageRepo;
    private notificationRepo;
    constructor(userRepo: Repository<UserEntity>, friendRepo: Repository<FriendEntity>, friendRequestRepo: Repository<FriendRequestEntity>, fileRepo: Repository<FileEntity>, messageRepo: Repository<MessageEntity>, notificationRepo: Repository<NotificationEntity>);
    login(login: UserLoginDTO): Promise<{
        isLogin: boolean;
        user: UserEntity;
    } | {
        isLogin: boolean;
        user?: undefined;
    }>;
    searchById(userId: number): Promise<UserEntity[]>;
    searchByUsername(username: string): Promise<UserEntity[]>;
    searchFromFriend(id: number, userId: number): Promise<boolean>;
    searchFromCommunication(id: number, userId: number): Promise<boolean>;
    createDraft(userId: number, messageObj: MessageDTO): Promise<MessageEntity>;
    getDraft(userId: string, reciever: string): Promise<{
        draft: string;
    }>;
    allNotifications(userId: string): Promise<NotificationEntity[]>;
    allFriends(userId: number): Promise<UserEntity[]>;
    sendFriendRequest(userId: number, sentUser: {
        user: number;
    }): Promise<FriendRequestEntity | {
        message: string;
        status: number;
    }>;
    acceptFriendRequest(userId: number, sentUser: {
        user: number;
    }): Promise<import("typeorm").UpdateResult | {
        message: string;
        status: number;
    }>;
    rejectFriendRequest(userId: number, sentUser: {
        user: number;
    }): Promise<import("typeorm").UpdateResult | {
        message: string;
        status: number;
    }>;
    unfriend(userId: number, sentUser: {
        user: number;
    }): Promise<import("typeorm").DeleteResult | {
        message: string;
        status: number;
    }>;
}
