export interface IBaseService<T> {

    getAll(): Promise<T[]>;
    get(id: any): Promise<T>;
}