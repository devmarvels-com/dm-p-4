import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormUnregister,
  useWatch,
} from "react-hook-form";
import { ConditionalLogic, SelectOpt } from "../types";
import { useEffect } from "react";
import { passesConditionalLogic } from "./utils";

type DynamicInputControlProps = {
  name: string;
  label: string | undefined;
  type: string;
  placeholder: string | undefined;
  fieldType: string | undefined;
  options: SelectOpt[] | undefined;
  conditionalLogic: ConditionalLogic[] | undefined;
  register: UseFormRegister<any>;
  unregister: UseFormUnregister<any>;
  logicTrueIf?: "all" | "any";
  errors: FieldErrors;
  control: Control;
  index: number;
};

const DynamicInputControl = ({
  name,
  label,
  type,
  fieldType,
  placeholder,
  options,
  conditionalLogic,
  register,
  unregister,
  logicTrueIf,
  errors,
  control,
}: DynamicInputControlProps) => {
  const error = (errors[name]?.message as string) || null;
  const watchList = useWatch({
    control,
  });

  const passes = passesConditionalLogic(
    name,
    conditionalLogic,
    logicTrueIf,
    watchList
  );

  useEffect(() => {
    if (!passes) {
      unregister(name);
    }
  }, [passes, unregister, name]);

  if (!passes) {
    return null;
  }

  switch (type) {
    case "text":
      return (
        <div key={name} className={`field ${error ? "has-error" : ""}`}>
          <label htmlFor={name}>{label}</label>
          <input
            placeholder={placeholder || ""}
            id={name}
            {...register(name)}
            type={fieldType ? fieldType : "text"}
          />
          <span>{error}</span>
        </div>
      );
    case "radio":
      return (
        <div key={name} className={`field ${error ? "has-error" : ""}`}>
          <label>{label}</label>
          {options?.map(({ text, val }) => (
            <span key={`${text}-${val}`}>
              {text}
              <input {...register(name)} type="radio" value={val} />
              <span>{error}</span>
            </span>
          ))}
        </div>
      );
    case "select":
      return (
        <div key={name} className={`field ${error ? "has-error" : ""}`}>
          <label htmlFor={name}>{label}</label>
          <select name={name}>
            {options?.map(({ text, val }) => (
              <option key={val}>{text}</option>
            ))}
          </select>
          <span>{error}</span>
        </div>
      );
    case "submit":
      return (
        <div key={name} className={`field`}>
          <input type="submit" value={label} />
        </div>
      );
  }

  return null;
};

export default DynamicInputControl;
