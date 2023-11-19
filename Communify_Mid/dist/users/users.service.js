"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const friend_entity_1 = require("../Entities/friend.entity");
const friendRequest_entity_1 = require("../Entities/friendRequest.entity");
const file_entity_1 = require("../Entities/file.entity");
const message_entity_1 = require("../Entities/message.entity");
const notification_entity_1 = require("../Entities/notification.entity");
let UsersService = class UsersService {
    constructor(userRepo, friendRepo, friendRequestRepo, fileRepo, messageRepo, notificationRepo) {
        this.userRepo = userRepo;
        this.friendRepo = friendRepo;
        this.friendRequestRepo = friendRequestRepo;
        this.fileRepo = fileRepo;
        this.messageRepo = messageRepo;
        this.notificationRepo = notificationRepo;
    }
    async login(login) {
        const user = await this.userRepo.findOneBy({
            user_name: login.username
        });
        if (user) {
            if (user.password == login.password) {
                return { isLogin: true, user: user };
            }
            else
                return { isLogin: false };
        }
    }
    searchById(userId) {
        return this.userRepo.find({
            where: { user_id: userId }
        });
    }
    searchByUsername(username) {
        return this.userRepo.find({
            where: { user_name: username }
        });
    }
    async searchFromFriend(id, userId) {
        const friendCount = await this.friendRepo
            .createQueryBuilder('friends')
            .where('(friends.requested_user = :id AND friends.accepted_user = :userId) OR (friends.requested_user = :userId AND friends.accepted_user = :id)', { id, userId })
            .getCount();
        return friendCount > 0;
    }
    async searchFromCommunication(id, userId) {
        const conversation = await this.messageRepo
            .createQueryBuilder('messages')
            .where('(messages.sender_id = :id AND messages.reciever_id = :userId) OR (messages.sender_id = :userId AND messages.reciever_id = :id)', { id, userId })
            .getCount();
        return conversation > 0;
    }
    async createDraft(userId, messageObj) {
        const sender = await this.userRepo.findOneBy({ user_id: userId });
        const receiver = await this.userRepo.findOneBy({ user_id: messageObj.receiverId });
        if (!sender || !receiver) {
            throw new Error('Sender or receiver not found');
        }
        const draftMessage = new message_entity_1.MessageEntity();
        draftMessage.message = messageObj.message;
        draftMessage.message_at = new Date().toISOString();
        draftMessage.status = "draft";
        draftMessage.sender_id = sender;
        draftMessage.receiver_id = receiver;
        const savedMessage = await this.messageRepo.save(draftMessage);
        return savedMessage;
    }
    async getDraft(userId, reciever) {
        const messages = await this.messageRepo
            .createQueryBuilder('messages')
            .where('(messages.sender_id = :userId AND messages.receiver_id = :reciever) OR (messages.sender_id = :reciever AND messages.receiver_id = :userId)', { userId, reciever })
            .getOne();
        return { draft: messages.message };
    }
    async allNotifications(userId) {
        const notification = await this.notificationRepo
            .createQueryBuilder('notifications')
            .where('notifications.user_id = :userId', { userId })
            .getMany();
        return notification;
    }
    async allFriends(userId) {
        const friends = await this.friendRepo
            .createQueryBuilder('friend')
            .leftJoinAndSelect('friend.requested_user', 'requestedUser')
            .leftJoinAndSelect('friend.accepted_user', 'acceptedUser')
            .where('requestedUser.user_id = :userId OR acceptedUser.user_id = :userId', { userId })
            .getMany();
        const friendUsers = friends.flatMap(friend => {
            return friend.requested_user.user_id === userId
                ? [friend.accepted_user]
                : [friend.requested_user];
        });
        return friendUsers;
    }
    async sendFriendRequest(userId, sentUser) {
        const user = await this.userRepo.findOneBy({ user_id: userId });
        const sent = await this.userRepo.findOneBy({ user_id: sentUser.user });
        if (!user || !sent) {
            return { message: 'Sender or receiver not found', status: 403 };
        }
        const sentId = sentUser.user;
        const friendCount = await this.friendRepo
            .createQueryBuilder('friends')
            .where('(friends.requested_user = :sentId AND friends.accepted_user = :userId) OR (friends.requested_user = :userId AND friends.accepted_user = :sentId)', { sentId, userId })
            .getCount();
        const friendRequestCount = await this.friendRequestRepo
            .createQueryBuilder('friendRequest')
            .where("(friendRequest.requested_user = :sentId AND friendRequest.received_user = :userId) OR (friendRequest.requested_user = :userId AND friendRequest.received_user = :sentId AND friendRequest.status != 'unfriend')", { sentId, userId })
            .getCount();
        if (!(friendCount > 0) && !(friendRequestCount > 0)) {
            const friendRequest = new friendRequest_entity_1.FriendRequestEntity();
            friendRequest.requested_user = user;
            friendRequest.received_user = sent;
            friendRequest.requested_at = new Date().toISOString();
            friendRequest.accepted_at = null;
            friendRequest.rejected_at = null;
            friendRequest.status = "pending";
            return this.friendRequestRepo.save(friendRequest);
        }
        else
            return { message: 'An error occured!', status: 403 };
    }
    async acceptFriendRequest(userId, sentUser) {
        const sentId = sentUser.user;
        const user = await this.userRepo.findOneBy({ user_id: userId });
        const sent = await this.userRepo.findOneBy({ user_id: sentUser.user });
        if (!user || !sent) {
            return { message: 'Sender or receiver not found', status: 403 };
        }
        const friendRequest = await this.friendRequestRepo
            .createQueryBuilder('friendRequests')
            .where("friendRequests.requested_user = :sentId AND friendRequests.received_user = :userId AND friendRequests.status = 'pending'", { userId, sentId })
            .getOne();
        if (friendRequest) {
            const friend = new friend_entity_1.FriendEntity();
            friend.requested_user = sent;
            friend.accepted_user = user;
            friend.added_at = new Date().toISOString();
            await this.friendRepo.save(friend);
            return this.friendRequestRepo.update(friendRequest.friend_id, {
                status: "friend",
                accepted_at: new Date().toISOString()
            });
        }
        else
            return { message: 'An error occured!', status: 403 };
    }
    async rejectFriendRequest(userId, sentUser) {
        const sentId = sentUser.user;
        const user = await this.userRepo.findOneBy({ user_id: userId });
        const sent = await this.userRepo.findOneBy({ user_id: sentUser.user });
        if (!user || !sent) {
            return { message: 'Sender or receiver not found', status: 403 };
        }
        const friendRequest = await this.friendRequestRepo
            .createQueryBuilder('friendRequests')
            .where("friendRequests.requested_user = :sentId AND friendRequests.received_user = :userId AND friendRequests.status = 'pending'", { userId, sentId })
            .getOne();
        if (friendRequest) {
            return this.friendRequestRepo.update(friendRequest.friend_id, {
                status: "rejected",
                rejected_at: new Date().toISOString()
            });
        }
        else
            return { message: 'An error occured!', status: 403 };
    }
    async unfriend(userId, sentUser) {
        const friendId = sentUser.user;
        const user = await this.userRepo.findOneBy({ user_id: userId });
        const sent = await this.userRepo.findOneBy({ user_id: sentUser.user });
        if (!user || !sent) {
            return { message: 'friend not found', status: 403 };
        }
        const friendRequest = await this.friendRequestRepo
            .createQueryBuilder('friendRequests')
            .where("friendRequests.requested_user = :friendId AND friendRequests.received_user = :userId AND friendRequests.status = 'friend'", { userId, friendId })
            .getOne();
        if (friendRequest) {
            const friend = await this.friendRepo
                .createQueryBuilder('friends')
                .where('(friends.requested_user = :userId AND friends.accepted_user = :friendId) OR (friends.requested_user = :friendId AND friends.accepted_user = :userId)', { userId, friendId })
                .getOne();
            this.friendRequestRepo.update(friendRequest.friend_id, {
                status: "unfriend",
                unfriend_at: new Date().toISOString()
            });
            return this.friendRepo.delete(friend.friend_id);
        }
        else
            return { message: 'An error occured!', status: 403 };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(friend_entity_1.FriendEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(friendRequest_entity_1.FriendRequestEntity)),
    __param(3, (0, typeorm_2.InjectRepository)(file_entity_1.FileEntity)),
    __param(4, (0, typeorm_2.InjectRepository)(message_entity_1.MessageEntity)),
    __param(5, (0, typeorm_2.InjectRepository)(notification_entity_1.NotificationEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map