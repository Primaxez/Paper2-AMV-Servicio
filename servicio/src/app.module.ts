import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './modules/doctor/doctor.module';
import {} from 'typeorm'
import { Doctor } from './modules/doctor/entities/doctor.entity';


@Module({
  imports: [DoctorModule, TypeOrmModule.forRoot(
    {type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      entities: [Doctor],
      synchronize: true,
      dropSchema: true}
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
