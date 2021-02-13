import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
// import { LocalStrategy } from './local.strategy';
// import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../user/user.module';
import { UsersService } from '../user/user.service';




@Module({
  imports: [ UsersModule, JwtModule.register({
    secret: process.env.SECRET_JWT_KEY,
    signOptions: { expiresIn: '600s'}
  })],
  providers: [AuthService, UsersService],
  exports: [AuthService]
})
export class AuthModule {}
