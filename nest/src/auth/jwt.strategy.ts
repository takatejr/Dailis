import { ExtractJwt, Strategy } from "passport-jwt"
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { a } from '../../a';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: a.JWT_SECRET,
        });
    }

    validate(payload: any) {
        return { name: payload.name, password: payload.password}
    }
}
