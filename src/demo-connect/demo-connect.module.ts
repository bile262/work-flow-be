import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DemoConnectController } from './demo-connect.controller';
import { DemoConnectService } from './demo-connect.service';
import { ListAppSchema } from './schemas/list-app.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: "list_app", schema: ListAppSchema }])],
  controllers: [DemoConnectController],
  providers: [DemoConnectService]
})
export class DemoConnectModule {}
