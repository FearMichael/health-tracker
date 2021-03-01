import { Test, TestingModule } from '@nestjs/testing';
import { LogquestionsService } from './logquestions.service';

describe('LogquestionsService', () => {
  let service: LogquestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogquestionsService],
    }).compile();

    service = module.get<LogquestionsService>(LogquestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
