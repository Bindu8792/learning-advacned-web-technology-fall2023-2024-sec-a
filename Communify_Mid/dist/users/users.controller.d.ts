import { UsersService } from './users.service';
import { MessageDTO, UserLoginDTO } from './user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(session: any, login: UserLoginDTO, res: Response): Promise<{
        session: any;
        message: string;
        success: boolean;
        user: {
            isLogin: boolean;
            user: import("./user.entity").UserEntity;
        } | {
            isLogin: boolean;
            user?: undefined;
        };
    } | {
        message: string;
        success: boolean;
        session?: undefined;
        user?: undefined;
    }>;
    searchById(userId: number): Promise<import("./user.entity").UserEntity[]>;
    searchByUsername(username: string): Promise<import("./user.entity").UserEntity[]>;
    searchFromFriend(session: any, userId: number): Promise<boolean>;
    searchFromCommunication(userId: number, session: any): Promise<boolean>;
    createDraft(message: MessageDTO, session: any): Promise<import("../Entities/message.entity").MessageEntity>;
    getDraft(reciever: string, session: any): Promise<{
        draft: string;
    }>;
    allNotifications(session: any): Promise<import("../Entities/notification.entity").NotificationEntity[]>;
    allFriends(session: any): Promise<import("./user.entity").UserEntity[]>;
    sendFriendRequest(sentUser: {
        user: number;
    }, session: any): Promise<import("../Entities/friendRequest.entity").FriendRequestEntity | {
        message: string;
        status: number;
    }>;
    acceptFriendRequest(sentUser: {
        user: number;
    }, session: any): Promise<import("typeorm").UpdateResult | {
        message: string;
        status: number;
    }>;
    rejectFriendRequest(sentUser: {
        user: number;
    }, session: any): Promise<import("typeorm").UpdateResult | {
        message: string;
        status: number;
    }>;
    unfriend(sentUser: {
        user: number;
    }, session: any): Promise<import("typeorm").DeleteResult | {
        message: string;
        status: number;
    }>;
}
