"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_decorator_1 = require("./permission.decorator");
let crudRoutes = [
    { crudMethod: 'getManyBase', 'permissionPreFix': 'read' },
    { crudMethod: 'getOneBase', 'permissionPreFix': 'read' },
    { crudMethod: 'createOneBase', 'permissionPreFix': 'create' },
    { crudMethod: 'createManyBase', 'permissionPreFix': 'create' },
    { crudMethod: 'updateOneBase', 'permissionPreFix': 'update' },
    { crudMethod: 'replaceOneBase', 'permissionPreFix': 'update' },
    { crudMethod: 'deleteOneBase', 'permissionPreFix': 'delete' },
];
exports.RoutePermissionGenerator = (entity) => {
    let crudPermissions = {};
    crudRoutes.forEach((method) => {
        crudPermissions[method.crudMethod] = {
            decorators: [
                permission_decorator_1.Permissions(`${entity}:${method.permissionPreFix}`)
            ]
        };
    });
    return crudPermissions;
};
//# sourceMappingURL=routes-permission.generator.js.map