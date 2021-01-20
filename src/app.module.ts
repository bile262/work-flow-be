import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoConnectModule } from './demo-connect/demo-connect.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/work-flow'), DemoConnectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
