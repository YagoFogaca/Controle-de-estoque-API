import { Test, TestingModule } from '@nestjs/testing';
import { SupplyEntryService } from './supply-entry.service';

describe('SupplyEntryService', () => {
  let service: SupplyEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplyEntryService],
    }).compile();

    service = module.get<SupplyEntryService>(SupplyEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
