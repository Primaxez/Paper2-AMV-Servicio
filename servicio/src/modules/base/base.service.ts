import {  Inject, BadGatewayException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { IBaseService } from '../base/IBaseService';
import { BaseEntity } from '../base/base.entity';

export class BaseService<T extends BaseEntity> implements IBaseService<T>{
	constructor(
    private readonly genericRepository: Repository<T>) {}


  getAll(): Promise<T[]> {
	  try {
		return this.genericRepository.find();
	  } catch (error) {
		throw new BadGatewayException(error);
	}
  }

  get(id: any): Promise<T> {
	try {
		  
	} catch (error) {
		throw new BadGatewayException(error);
	}
  	return this.genericRepository.findOne({where: {id}},);
  }

  delete(id: number) {
	try {
		this.genericRepository.delete(id)
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }

}