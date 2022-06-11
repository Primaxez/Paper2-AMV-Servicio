import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';
import { Especialidad } from './entities/especialidad.entity';

@Injectable()
export class EspecialidadService extends BaseService<Especialidad> {

    constructor(@InjectRepository(Especialidad) private readonly especialidadRepository: Repository<Especialidad>){
        super(especialidadRepository);
    }
}
