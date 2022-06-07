import { Controller } from '@nestjs/common';
import { BaseController } from 'src/modules/base/base.controller';
import { Doctor } from '../doctor/entities/doctor.entity';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController extends BaseController<Doctor>{
    constructor(private readonly doctorService: DoctorService){
        super(doctorService);
    }
}
