import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorController } from '../doctor/doctor.controller';
import { DoctorService } from '../doctor/doctor.service';
import { Doctor } from './entities/doctor.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Doctor])],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
