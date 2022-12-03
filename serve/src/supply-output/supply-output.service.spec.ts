import { Test, TestingModule } from '@nestjs/testing';
import { SupplyOutputService } from './supply-output.service';

describe('SupplyOutputService', () => {
  let service: SupplyOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplyOutputService],
    }).compile();

    service = module.get<SupplyOutputService>(SupplyOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
