import { GenericForm } from "../models/GenericForm";

export type ValidationRule = (value: any) => ValidationResult;
export type ValidationResult = { isValid: boolean, message: string };

export function required(value: any): ValidationResult {
    return { isValid: value !== undefined && value !== null && value.toString().trim() !== '', message: 'This field is required' };
}

export function maxLength(length: number): (value: string) => ValidationResult {
    return (value: string) => ({
        isValid: value.length <= length,
        message: `Maximum length is ${length}`
    });
}

export function minLength(length: number): (value: string) => ValidationResult {
    return (value: string) => ({
        isValid: value.length >= length,
        message: `Minimum length is ${length}`
    });
}

export function email(email: string): ValidationResult {
    return {
        isValid: email.indexOf('@') > 0 && email.indexOf('.') > 0,
        message: `Invalid E-mail format`
    };
  }
export function validate<T>(form:GenericForm<T>) : GenericForm<T>{
    const newErrors= form.errors;
    for(const field in form.errors){
        newErrors[field] = [];
    }
    let hasErrors = false;

    for (const field in form.formData) {
      const value = form.formData[field];
      const fieldRules = form.validationRules[field]; // Get validation rules for the field

      if (!fieldRules) continue; // Skip fields without rules

      for (const rule of fieldRules) {
        const result = rule(value);
        if (!result.isValid) {
          hasErrors = true;
          newErrors[field]?.push(result.message); // Set error message for the field
        }
      }
    }

    form.errors = newErrors;
    form.isValid = !hasErrors;
    return form;
}