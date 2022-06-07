import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { IBaseService } from '../base/IBaseService';
import { BaseEntity } from './base.entity';

export class BaseController<T extends BaseEntity>{

	constructor(private readonly IBaseService: IBaseService<T>) {}

	@Get('get')

	async findAll(): Promise<T[]> {
	  return  this.IBaseService.getAll()
	}

	@Get('get/:id')
	async findById(@Param('id') id: number): Promise<T> {
	  return  this.IBaseService.get(id)
	}


}