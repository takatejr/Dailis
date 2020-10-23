import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { a } from '../../a';
import { UsersModule } from 'src/user/user.module';



@Module({
  imports: [PassportModule, UsersModule, JwtModule.register({
    secret: a.JWT_SECRET,
    signOptions: { expiresIn: '600s'}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
  exports: [AuthService]
})
export class AuthModule {}
