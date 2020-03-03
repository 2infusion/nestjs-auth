"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.Permissions = (...roles) => common_1.SetMetadata('permissions', roles);
//# sourceMappingURL=permission.decorator.js.map