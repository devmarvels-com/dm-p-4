import { useMemo } from "react";
import type { FormInput } from "../types";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import DynamicInputControl from "./DynamicInputControl";

type FormGeneratorProps = {
  schema: FormInput[];
  resolver?: Resolver;
};

const FormGenerator = ({ schema, resolver }: FormGeneratorProps) => {
  type DynamicForm = {
    [K in (typeof schema)[number]["name"]]: (typeof schema)[number]["name"];
  };

  const defaultValues = useMemo(() => {
    return schema.reduce((acc: Record<string, string | number>, i) => {
      acc[i.name] =
        typeof i.value === "boolean" ? (i.value ? "true" : "false") : i.value;
      return acc;
    }, {});
  }, [schema]);

  const {
    register,
    unregister,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver,
    defaultValues,
  });

  const onFormSubmit: SubmitHandler<DynamicForm> = (
    data: DynamicForm,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {schema.map((field, i) => (
        <DynamicInputControl
          key={field.name + "-" + i}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          fieldType={field.fieldType}
          options={field?.options}
          register={register}
          unregister={unregister}
          logicTrueIf={field?.depConditionsTrueIf}
          conditionalLogic={field?.conditionalLogic}
          control={control}
          errors={errors}
          index={i}
        />
      ))}
    </form>
  );
};

export default FormGenerator;
