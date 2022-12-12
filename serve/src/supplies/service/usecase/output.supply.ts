import { Injectable } from '@nestjs/common';
import { FindByIdUsecase } from './findById.supply';
import { UpdateSupplyUsecase } from './update.supply';

@Injectable()
export class SupplyOutputUsecase {
  constructor(
    private readonly findByIdUsecase: FindByIdUsecase,
    private readonly updateSupplyUsecase: UpdateSupplyUsecase,
  ) {}

  async execute(id: string, amount: number): Promise<boolean> {
    try {
      const supply = await this.findByIdUsecase.execute(id);
      supply.quantity_stock = supply.quantity_stock - amount;

      await this.updateSupplyUsecase.execute(id, {
        quantity_stock: supply.quantity_stock,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
