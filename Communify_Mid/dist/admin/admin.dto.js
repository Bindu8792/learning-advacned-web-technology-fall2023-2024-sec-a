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
exports.FilePermissionDTO = exports.UserPermissionDTO = exports.UserPermissionEditDTO = void 0;
const class_validator_1 = require("class-validator");
class UserPermissionEditDTO {
}
exports.UserPermissionEditDTO = UserPermissionEditDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "User Id should not be empty!" }),
    __metadata("design:type", Number)
], UserPermissionEditDTO.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Upload Permission should not be empty!" }),
    __metadata("design:type", Boolean)
], UserPermissionEditDTO.prototype, "uploadDisable", void 0);
class UserPermissionDTO {
}
exports.UserPermissionDTO = UserPermissionDTO;
class FilePermissionDTO {
}
exports.FilePermissionDTO = FilePermissionDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Type should not be empty!" }),
    __metadata("design:type", String)
], FilePermissionDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Size should not be empty!" }),
    __metadata("design:type", String)
], FilePermissionDTO.prototype, "size", void 0);
//# sourceMappingURL=admin.dto.js.map