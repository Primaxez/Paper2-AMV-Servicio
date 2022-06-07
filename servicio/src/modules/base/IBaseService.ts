export interface IBaseService<T> {

    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
    getEspecialidad(id_especialidad: any): Promise<T[]>;
}