import { Module } from '@nestjs/common';
import { DocentiService } from './docenti.service';
import { DocentiController } from './docenti.controller';
import { Docenti } from './entities/docenti.entity';

@Module({
  import: [TypeOrmModule.forFeature([Docenti])]
  controllers: [DocentiController],
  providers: [DocentiService],
})
export class DocentiModule {}
