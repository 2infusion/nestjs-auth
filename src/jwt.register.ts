import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

export const Jwt = JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '3600s' },
});
