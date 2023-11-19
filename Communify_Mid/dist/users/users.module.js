"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const friend_entity_1 = require("../Entities/friend.entity");
const friendRequest_entity_1 = require("../Entities/friendRequest.entity");
const file_entity_1 = require("../Entities/file.entity");
const message_entity_1 = require("../Entities/message.entity");
const notification_entity_1 = require("../Entities/notification.entity");
const userPermission_entity_1 = require("../Entities/userPermission.entity");
const filePermission_entity_1 = require("../Entities/filePermission.entity");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, friend_entity_1.FriendEntity, friendRequest_entity_1.FriendRequestEntity, file_entity_1.FileEntity, message_entity_1.MessageEntity, notification_entity_1.NotificationEntity, userPermission_entity_1.UserPermissionsEntity, filePermission_entity_1.FilePermissionsEntity])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map