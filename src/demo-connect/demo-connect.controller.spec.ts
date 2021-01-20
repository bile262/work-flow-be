import { Test, TestingModule } from '@nestjs/testing';
import { DemoConnectController } from './demo-connect.controller';

describe('DemoConnectController', () => {
  let controller: DemoConnectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoConnectController],
    }).compile();

    controller = module.get<DemoConnectController>(DemoConnectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
