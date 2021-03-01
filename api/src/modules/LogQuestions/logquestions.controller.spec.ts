import { Test, TestingModule } from '@nestjs/testing';
import { LogquestionsController } from './logquestions.controller';

describe('LogquestionsController', () => {
  let controller: LogquestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogquestionsController],
    }).compile();

    controller = module.get<LogquestionsController>(LogquestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
