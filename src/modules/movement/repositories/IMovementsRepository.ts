import { Movement } from "../model/Movement";

// DTO => Data transfer object
interface ICreateMovementDTO {
  account_id: string,
  type: string,
  value: number
}

interface ICreateTransferDTO {
  toAccount_id: string,
  fromAccount_id: string,
  value: number
}

interface IMovementsRepository {
  deposit({ account_id, type, value }: ICreateMovementDTO): void;
  withdraw({ account_id, type, value }: ICreateMovementDTO): void;
  transfer({ toAccount_id, fromAccount_id, value}: ICreateTransferDTO): void;
}

export { ICreateMovementDTO, ICreateTransferDTO, IMovementsRepository };