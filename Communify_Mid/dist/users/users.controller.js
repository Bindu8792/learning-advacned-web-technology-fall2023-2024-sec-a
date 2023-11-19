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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_dto_1 = require("./user.dto");
const session_guard_1 = require("./session.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async login(session, login, res) {
        const user = await this.usersService.login(login);
        try {
            if (user.isLogin) {
                session.userId = user.user.user_id;
                session.username = user.user.user_name;
                return { session, message: "Login Successfull!", success: true, user: user };
            }
            else {
                return { message: "Username or Password incorrect", success: false };
            }
        }
        catch {
            return { message: "Username or Password incorrect...", success: false };
        }
    }
    async searchById(userId) {
        return this.usersService.searchById(userId);
    }
    searchByUsername(username) {
        return this.usersService.searchByUsername(username);
    }
    searchFromFriend(session, userId) {
        return this.usersService.searchFromFriend(session.userId, userId);
    }
    searchFromCommunication(userId, session) {
        return this.usersService.searchFromCommunication(session.userId, userId);
    }
    createDraft(message, session) {
        return this.usersService.createDraft(session.userId, message);
    }
    getDraft(reciever, session) {
        return this.usersService.getDraft(session.userId, reciever);
    }
    allNotifications(session) {
        return this.usersService.allNotifications(session.userId);
    }
    allFriends(session) {
        return this.usersService.allFriends(session.userId);
    }
    sendFriendRequest(sentUser, session) {
        return this.usersService.sendFriendRequest(session.userId, sentUser);
    }
    acceptFriendRequest(sentUser, session) {
        return this.usersService.acceptFriendRequest(session.userId, sentUser);
    }
    rejectFriendRequest(sentUser, session) {
        return this.usersService.rejectFriendRequest(session.userId, sentUser);
    }
    unfriend(sentUser, session) {
        return this.usersService.unfriend(session.userId, sentUser);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserLoginDTO,
        Response]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/all/search/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "searchById", null);
__decorate([
    (0, common_1.Get)('/all/searchbyusername/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchByUsername", null);
__decorate([
    (0, common_1.Get)('/friend/search/:userId'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchFromFriend", null);
__decorate([
    (0, common_1.Get)('/conversation/search/:userId'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchFromCommunication", null);
__decorate([
    (0, common_1.Post)('/conversation/draft'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.MessageDTO, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createDraft", null);
__decorate([
    (0, common_1.Get)('/conversation/draft/:reciever'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Param)('reciever')),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getDraft", null);
__decorate([
    (0, common_1.Get)('/notifications'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "allNotifications", null);
__decorate([
    (0, common_1.Get)('/friends'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "allFriends", null);
__decorate([
    (0, common_1.Post)('/friend/send'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "sendFriendRequest", null);
__decorate([
    (0, common_1.Put)('/friend/accept'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "acceptFriendRequest", null);
__decorate([
    (0, common_1.Patch)('/friend/reject/'),
    (0, common_1.UseGuards)(session_guard_1.UserSessionGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "rejectFriendRequest", null);
__decorate([
    (0, common_1.Delete)('/friend/unfriend'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "unfriend", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('/api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map