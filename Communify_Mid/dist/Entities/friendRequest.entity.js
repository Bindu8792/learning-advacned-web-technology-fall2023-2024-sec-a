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
exports.FriendRequestEntity = void 0;
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let FriendRequestEntity = class FriendRequestEntity {
};
exports.FriendRequestEntity = FriendRequestEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FriendRequestEntity.prototype, "friend_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FriendRequestEntity.prototype, "requested_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FriendRequestEntity.prototype, "accepted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FriendRequestEntity.prototype, "rejected_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FriendRequestEntity.prototype, "unfriend_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FriendRequestEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (sender) => sender.user_id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'requested_user' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FriendRequestEntity.prototype, "requested_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (receiver) => receiver.user_id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'received_user' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FriendRequestEntity.prototype, "received_user", void 0);
exports.FriendRequestEntity = FriendRequestEntity = __decorate([
    (0, typeorm_1.Entity)("FriendRequests")
], FriendRequestEntity);
//# sourceMappingURL=friendRequest.entity.js.map