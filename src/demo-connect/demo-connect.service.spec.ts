import { Test, TestingModule } from '@nestjs/testing';
import { DemoConnectService } from './demo-connect.service';

describe('DemoConnectService', () => {
  let service: DemoConnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoConnectService],
    }).compile();

    service = module.get<DemoConnectService>(DemoConnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
