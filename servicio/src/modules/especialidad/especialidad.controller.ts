import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { Especialidad } from '../especialidad/entities/especialidad.entity';
import { EspecialidadService } from './especialidad.service';

@Controller('especialidad')
export class EspecialidadController extends BaseController<Especialidad>{
    constructor(private readonly especialidadService: EspecialidadService){
        super(especialidadService);
    }
}
