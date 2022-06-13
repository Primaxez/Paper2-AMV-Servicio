import { BaseEntity } from "src/modules/base/base.entity";
import { Especialidad } from "src/modules/especialidad/entities/especialidad.entity";

import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm"

@Entity('doctor')
export class Doctor extends BaseEntity{

    @Column()
    readonly nombre: string;
    @Column()
    readonly apellido: string;
    @Column()
    readonly genero: string;    
    @Column({type: 'blob'})
    readonly imagen: Buffer;

    @ManyToMany(() => Especialidad, {cascade: true, eager: true})
    @JoinTable({
        name: 'doctor_especialidad',
        joinColumn: {name: 'id_doctor', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'id_especialidad', referencedColumnName: 'id'}
    })
    readonly especialidades: Especialidad[];

    constructor(o: Object){
        super();
        Object.assign(this, o);
    }
}