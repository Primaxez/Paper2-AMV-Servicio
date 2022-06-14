import { BadGatewayException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService extends BaseService<Doctor> {

    constructor(@InjectRepository(Doctor) private readonly doctorRepository: Repository<Doctor>){
        super(doctorRepository);
    }

    getDoctoresFromEspecialidad(especialidad: any): Promise<Doctor[]> {
        try {
            return <Promise<Doctor[]>>this.doctorRepository.findBy({especialidades: {nombre: especialidad}});
          } catch (error) {
            throw new BadGatewayException(error);
        }
      }
}
