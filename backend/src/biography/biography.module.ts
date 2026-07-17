import { Module } from '@nestjs/common';
import { BiographyService } from './biography.service';
import { BiographyController } from './biography.controller';

@Module({
  providers: [BiographyService],
  controllers: [BiographyController]
})
export class BiographyModule {}
