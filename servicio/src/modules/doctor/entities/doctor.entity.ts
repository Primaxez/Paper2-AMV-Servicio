import { BaseEntity } from "../../base/base.entity";
import { Especialidad } from "../../especialidad/entities/especialidad.entity";

import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm"

@Entity('doctor')
export class Doctor extends BaseEntity{

    @Column()
    readonly nombre: string;
    @Column()
    readonly apellido: string;
    @Column()
    readonly genero: string;    
    @Column()
    readonly imagen: string;

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