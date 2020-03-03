import { Permissions } from './permission.decorator';

let crudRoutes = [
    {crudMethod: 'getManyBase', 'permissionPreFix': 'read'},
    {crudMethod: 'getOneBase', 'permissionPreFix': 'read'},
    {crudMethod: 'createOneBase', 'permissionPreFix': 'create'},
    {crudMethod: 'createManyBase', 'permissionPreFix': 'create'},
    {crudMethod: 'updateOneBase', 'permissionPreFix': 'update'},
    {crudMethod: 'replaceOneBase', 'permissionPreFix': 'update'},
    {crudMethod: 'deleteOneBase', 'permissionPreFix': 'delete'},
]

export const RoutePermissionGenerator = (entity: String) => {

    let crudPermissions = {}

    crudRoutes.forEach((method) => {
        crudPermissions[method.crudMethod] = {
            decorators: [
                Permissions(`${entity}:${method.permissionPreFix}`)
            ]
        }
    });

    return crudPermissions;

}