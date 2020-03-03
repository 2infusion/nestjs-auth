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
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
let PermissionGuard = class PermissionGuard extends passport_1.AuthGuard('jwt') {
    constructor(reflector, jwtService) {
        super('jwt');
        this.reflector = reflector;
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const permissions = this.reflector.get('permissions', context.getHandler());
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            throw false;
        }
        try {
            const jwt = request.headers.authorization.replace("Bearer ", "");
            const user = this.jwtService.verify(jwt);
            return user.permissions.some(r => permissions.indexOf(r) >= 0);
        }
        catch (_a) {
            return false;
        }
    }
};
PermissionGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector, jwt_1.JwtService])
], PermissionGuard);
exports.PermissionGuard = PermissionGuard;
//# sourceMappingURL=permission.guard.js.map