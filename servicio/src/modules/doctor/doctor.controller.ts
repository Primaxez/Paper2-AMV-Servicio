import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { BaseController } from 'src/modules/base/base.controller';
import { Doctor } from '../doctor/entities/doctor.entity';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController extends BaseController<Doctor>{
    constructor(private readonly doctorService: DoctorService){
        super(doctorService);
    }

    @Get('get/e/:especialidad')
    async findByEspecialidad(@Param('especialidad') especialidad: string): Promise<Doctor[]> {
        return this.doctorService.getDoctoresFromEspecialidad(especialidad);
    }
}
