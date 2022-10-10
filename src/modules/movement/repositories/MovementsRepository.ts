import { Movement } from "../model/Movement";
import { ICreateMovementDTO, ICreateTransferDTO } from "./IMovementsRepository"
import { AccountsRepository } from "../../accounts/repositories/AccountsRepository"

class MovementsRepository {
  private movementsRepository: Movement[];

  constructor(){
    this.movementsRepository = [];
  }
  
  deposit({account_id, type, value}: ICreateMovementDTO) {

  }

  withdraw({account_id, type, value}: ICreateMovementDTO) {

  }
  
  transfer({toAccount_id, fromAccount_id, value}: ICreateTransferDTO) {

  }
}