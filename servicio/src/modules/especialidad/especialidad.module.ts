import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadController } from '../especialidad/especialidad.controller';
import { EspecialidadService } from '../especialidad/especialidad.service';
import { Especialidad } from './entities/especialidad.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Especialidad])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService]
})
export class EspecialidadModule {}
