import { Controller, Get } from '@nestjs/common';
import { DemoConnectService } from './demo-connect.service';
import { ListApp } from './schemas/list-app.schemas';

@Controller('demo-connect')
export class DemoConnectController {
  constructor(private readonly demoConnect: DemoConnectService) {}
  @Get()
  async findAll(): Promise<ListApp[]> {
    return this.demoConnect.findAll();
  }
}
