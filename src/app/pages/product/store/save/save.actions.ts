import { Action } from "@ngrx/store";
import { ProductResponse, ProductCreateRequest, ProductUpdateRequest } from "./save.models";

export enum Types {
  CREATE = '[Product] Create: Start',
  CREATE_SUCCESS = '[Product] Create: Success',
  CREATE_ERROR = '[Product] Create: Error',

  UPDATE = '[Product] Update: Start',
  UPDATE_SUCCESS = '[Product] Update: Success',
  UPDATE_ERROR = '[Product] Update: Error',

  READ = '[Product] Read: Start',
  READ_SUCCESS = '[Product] Read: Success',
  READ_ERROR = '[Product] Read: Error',
}

export class Create implements Action{
  readonly type = Types.CREATE;
  constructor(public product: ProductCreateRequest){}
}

export class CreateSuccess implements Action{
  readonly type = Types.CREATE_SUCCESS;
  constructor(public product: ProductResponse){}
}

export class CreateError implements Action{
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string){}
}


//UPDATE
export class Update implements Action{
  readonly type = Types.UPDATE;
  constructor(public id: string, public product: ProductUpdateRequest){}
}

export class UpdateSuccess implements Action{
  readonly type = Types.UPDATE_SUCCESS;
  constructor(public product: ProductResponse){}
}

export class UpdateError implements Action{
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string){}
}

//get product por id
export class Read implements Action{
  readonly type = Types.READ;
  constructor(public id: string){}
}

export class ReadSuccess implements Action{
  readonly type = Types.READ_SUCCESS;
  constructor(public product: ProductResponse){}
}

export class ReadError implements Action{
  readonly type = Types.READ_ERROR;
  constructor(public error: string){}
}

export type All =
              Create
            | CreateSuccess
            | CreateError
            | Update
            | UpdateSuccess
            | UpdateError
            | Read
            | ReadSuccess
            | ReadError;







