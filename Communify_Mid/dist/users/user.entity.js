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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const file_entity_1 = require("../Entities/file.entity");
const friend_entity_1 = require("../Entities/friend.entity");
const friendRequest_entity_1 = require("../Entities/friendRequest.entity");
const message_entity_1 = require("../Entities/message.entity");
const notification_entity_1 = require("../Entities/notification.entity");
const userPermission_entity_1 = require("../Entities/userPermission.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "registration_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.MessageEntity, (sender) => sender.sender_id, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.MessageEntity, (receiver) => receiver.receiver_id, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => friend_entity_1.FriendEntity, (requested) => requested.requested_user, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "requested", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => friend_entity_1.FriendEntity, (accepted) => accepted.accepted_user, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "accepted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.NotificationEntity, (user) => user.user_id, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => friendRequest_entity_1.FriendRequestEntity, (sender) => sender.requested_user, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "requester", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => friendRequest_entity_1.FriendRequestEntity, (receiverReq) => receiverReq.received_user, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "receiverReq", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.FileEntity, (file) => file.user_id, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userPermission_entity_1.UserPermissionsEntity, (userPermission) => userPermission.user_id, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], UserEntity.prototype, "userPermission", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)("Users")
], UserEntity);
//# sourceMappingURL=user.entity.js.map