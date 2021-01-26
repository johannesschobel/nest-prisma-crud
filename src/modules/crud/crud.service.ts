import { Injectable } from '@nestjs/common';
import { CrudMapType } from './interfaces/crud-map-type.interface';
import { Delegate } from './interfaces/delegate.interface';

@Injectable()
export abstract class CrudService<D extends Delegate, T extends CrudMapType> {
  constructor(protected delegate: D) {}

  public getDelegate(): D {
    return this.delegate;
  }

  public async aggregate(data: T['aggregate']) {
    const result = await this.delegate.aggregate(data);
    return result;
  }

  public async count(data: T['count']) {
    const result = await this.delegate.count(data);
    return result;
  }

  public async create(data: T['create']) {
    const result = await this.delegate.create(data);
    return result;
  }

  public async delete(data: T['delete']) {
    const result = await this.delegate.delete(data);
    return result;
  }

  public async deleteMany(data: T['deleteMany']) {
    const result = await this.delegate.deleteMany(data);
    return result;
  }

  public async findFirst(data: T['findFirst']) {
    const result = await this.delegate.findFirst(data);
    return result;
  }

  public async findMany(data: T['findMany']) {
    const result = await this.delegate.findMany(data);
    return result;
  }

  public async findUnique(data: T['findUnique']) {
    const result = await this.delegate.findUnique(data);
    return result;
  }

  public async update(data: T['update']) {
    const result = await this.delegate.update(data);
    return result;
  }

  public async updateMany(data: T['updateMany']) {
    const result = await this.delegate.updateMany(data);
    return result;
  }

  public async upsert(data: T['upsert']) {
    const result = await this.delegate.upsert(data);
    return result;
  }
}
