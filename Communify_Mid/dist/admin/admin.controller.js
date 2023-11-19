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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_dto_1 = require("./admin.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    createNewFilePermission(permission) {
        return this.adminService.createNewFilePermission(permission);
    }
    filePermissions() {
        return this.adminService.filePermissions();
    }
    updateFilePermission(permission) {
        return this.adminService.updateFilePermission(permission);
    }
    createNewUserPermission(users) {
        return this.adminService.createNewUserPermission(users);
    }
    userPermissions() {
        return this.adminService.userPermissions();
    }
    updateUserPermission(permission) {
        return this.adminService.updateUserPermission(permission);
    }
    removeUploadedFile(id) {
        return this.adminService.removeUploadedFile(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/file/rule/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.FilePermissionDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createNewFilePermission", null);
__decorate([
    (0, common_1.Get)('/file/rules'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "filePermissions", null);
__decorate([
    (0, common_1.Put)('/file/rule/edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.FilePermissionDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateFilePermission", null);
__decorate([
    (0, common_1.Post)('/user/rule/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.UserPermissionDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createNewUserPermission", null);
__decorate([
    (0, common_1.Get)('/user/rules'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "userPermissions", null);
__decorate([
    (0, common_1.Patch)('/user/rule/edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.UserPermissionEditDTO]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateUserPermission", null);
__decorate([
    (0, common_1.Delete)('/file/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "removeUploadedFile", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('/api/admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map