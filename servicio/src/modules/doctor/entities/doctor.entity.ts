import { BaseEntity } from "src/modules/base/base.entity";

import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('doctor')
export class Doctor extends BaseEntity{

    @Column()
    readonly nombre: string;
    @Column()
    readonly apellido: string;
    @Column()
    readonly especialidad: string;
    @Column()
    readonly imagenURL: string;

    constructor(o: Object){
        super();
        Object.assign(this, o);
    }
}