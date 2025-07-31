export enum FormReducerActionKind {
  UPDATE_FIELD = "UPDATE_FIELD",
  RESET_FORM = "RESET_FORM",
  LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA",
}

export interface UpdateFieldAction {
  type: FormReducerActionKind.UPDATE_FIELD;
  payload: {
    field: keyof EditCarInput;
    value: string | number | undefined | Date;
  };
}

export interface ResetFormAction {
  type: FormReducerActionKind.RESET_FORM;
}

export interface LoadInitialDataAction {
  type: FormReducerActionKind.LOAD_INITIAL_DATA;
  payload: MyCar;
}

export type FormReducerAction =
  | UpdateFieldAction
  | ResetFormAction
  | LoadInitialDataAction;

import type { EditCarInput, MyCar } from "~/utils/types";

function formReducer(
  state: EditCarInput,
  action: FormReducerAction,
): EditCarInput {
  switch (action.type) {
    case FormReducerActionKind.UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case FormReducerActionKind.RESET_FORM:
      return { id: state.id } as EditCarInput;
    case FormReducerActionKind.LOAD_INITIAL_DATA:
      return {
        id: action.payload.id,
        vin: action.payload.vin ?? undefined,
        make: action.payload.make,
        model: action.payload.model,
        year: action.payload.year,
        mileage: action.payload.mileage,
        milesBoughtAt: action.payload.milesBoughtAt,
        hp: action.payload.hp,
        color: action.payload.color ?? undefined,
        description: action.payload.description ?? undefined,
        engineType: action.payload.engineType,
        transmissionType: action.payload.transmissionType,
        purchaseDate: action.payload.purchaseDate,
        licensePlate: action.payload.licensePlate ?? undefined,
        engine: action.payload.engine ?? undefined,
        status: action.payload.status,
      };
    default:
      return state;
  }
}

export default formReducer;
