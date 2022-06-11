import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './modules/doctor/doctor.module';
import {} from 'typeorm'
import { Doctor } from './modules/doctor/entities/doctor.entity';
import { EspecialidadModule } from './modules/especialidad/especialidad.module';
import { Especialidad } from './modules/especialidad/entities/especialidad.entity';


@Module({
  imports: [DoctorModule, EspecialidadModule, TypeOrmModule.forRoot(
    {type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      entities: [Doctor, Especialidad],
      synchronize: false,
      dropSchema: false}
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
