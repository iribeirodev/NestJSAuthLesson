import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats.controller';
import { CatService } from './cats.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
