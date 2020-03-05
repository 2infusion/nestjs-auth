import { Reflector } from '@nestjs/core';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    validate(payload: any): Promise<{
        id: any;
        username: any;
        permissions: any;
    }>;
}
export {};
