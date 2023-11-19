"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const friend_entity_1 = require("./friend.entity");
const message_entity_1 = require("./message.entity");
const friendRequest_entity_1 = require("./friendRequest.entity");
const file_entity_1 = require("./file.entity");
const notification_entity_1 = require("./notification.entity");
const userPermission_entity_1 = require("./userPermission.entity");
const filePermission_entity_1 = require("./filePermission.entity");
let MessageModule = class MessageModule {
};
exports.MessageModule = MessageModule;
exports.MessageModule = MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([message_entity_1.MessageEntity, friend_entity_1.FriendEntity, friendRequest_entity_1.FriendRequestEntity, file_entity_1.FileEntity, notification_entity_1.NotificationEntity, userPermission_entity_1.UserPermissionsEntity, filePermission_entity_1.FilePermissionsEntity])],
    })
], MessageModule);
//# sourceMappingURL=entity.module.js.map