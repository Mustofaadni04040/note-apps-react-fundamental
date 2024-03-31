import { forwardRef } from "react";
import PropTypes from "prop-types";

const InputForm = forwardRef(
  ({ name, label, type, value, placeholder, onChange = () => {} }, ref) => {
    return (
      <div className="mb-6 flex flex-col">
        <label htmlFor={name} className="text-xs font-bold text-slate-800 mb-1">
          {label}
        </label>
        <input
          className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          ref={ref}
          onChange={onChange}
          value={value}
          required
        />
      </div>
    );
  }
);

InputForm.displayName = "InputForm";
InputForm.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default InputForm;
