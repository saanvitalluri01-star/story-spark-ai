import { useState } from "react";
import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

interface SSInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T>;
  error?: FieldError;
  autoComplete?: string;
}

const SSInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  register,
  validation,
  error,
  autoComplete,
}: SSInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

const inputType =
  type === "password"
    ? showPassword
      ? "text"
      : "password"
    : type;
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      <div className="relative w-full">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <i className={icon}></i>
          </span>
        )}

        <input
          id={name}
          type={inputType}
          id={name}
          className={`w-full pl-10 pr-10 py-2 text-base text-gray-900 dark:text-gray-200 bg-white dark:bg-slate-800 border rounded-md sm:text-sm transition-all focus:outline-none ${
          error
          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-red-500"
          : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:focus:border-blue-500"
          }`}          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, validation)}
          className={`
            w-full
            min-w-0
            rounded-xl
            border
            bg-white
            dark:bg-slate-800
            px-4
            py-3
            ${icon ? "pl-10" : ""}
            ${type === "password" ? "pr-12" : ""}
            text-sm
            text-slate-900
            dark:text-slate-100
            placeholder:text-slate-400
            transition-all
            duration-200

            ${
              error
                ? `
                  border-red-500
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-500/20
                `
                : `
                  border-slate-300
                  dark:border-slate-700
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                `
            }

            focus:outline-none
          `}
        />

        {type === "password" && (
  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
    aria-label={showPassword ? "Hide password" : "Show password"}
    title={showPassword ? "Hide password" : "Show password"}
  >
    <i
              className={showPassword ? "fi fi-rr-eye" : "fi fi-rr-eye-crossed"}
            />
  </button>
)}
      </div>

      <div className="min-h-[20px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};

export default SSInput;
