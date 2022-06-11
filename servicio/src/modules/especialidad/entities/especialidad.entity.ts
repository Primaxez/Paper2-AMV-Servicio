import { BaseEntity } from "src/modules/base/base.entity";

import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('especialidad')
export class Especialidad extends BaseEntity{

    @Column()
    readonly nombre: string;

    constructor(o: Object){
        super();
        Object.assign(this, o);
    }
}