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
exports.MessageDTO = exports.UserProfile = exports.UserLoginDTO = void 0;
const class_validator_1 = require("class-validator");
class UserLoginDTO {
}
exports.UserLoginDTO = UserLoginDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Username should not be empty!" }),
    __metadata("design:type", String)
], UserLoginDTO.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password should not be empty!" }),
    __metadata("design:type", String)
], UserLoginDTO.prototype, "password", void 0);
class UserProfile {
}
exports.UserProfile = UserProfile;
class MessageDTO {
}
exports.MessageDTO = MessageDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Received Id should not be empty!" }),
    __metadata("design:type", Number)
], MessageDTO.prototype, "receiverId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "message should not be empty!" }),
    __metadata("design:type", String)
], MessageDTO.prototype, "message", void 0);
//# sourceMappingURL=user.dto.js.map