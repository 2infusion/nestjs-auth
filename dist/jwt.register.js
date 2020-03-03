"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants");
exports.Jwt = jwt_1.JwtModule.register({
    secret: constants_1.jwtConstants.secret,
    signOptions: { expiresIn: '3600s' },
});
//# sourceMappingURL=jwt.register.js.map