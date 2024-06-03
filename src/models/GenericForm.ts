import { ValidationRule } from "../utils/validationRules";

export interface IGenericForm<T>{
    formData: T;
    isValid: boolean;
    errors:{[key in keyof T]: Array<string> | undefined};
    validationRules: { [key in keyof T]: Array<ValidationRule> | undefined };
}

export class GenericForm<T> implements IGenericForm<T> {
    constructor(){
        this.isValid = false;
        this.formData = {} as T;
        this.errors = {} as { [key in keyof T]: Array<string> | undefined}; // Initialize with optional string values
        this.validationRules = {} as { [key in keyof T]: Array<ValidationRule> | undefined }; 
    }

    formData: T;
    isValid: boolean;
    errors:{[key in keyof T]: Array<string> | undefined};
    validationRules: { [key in keyof T]: Array<ValidationRule> | undefined };
  }