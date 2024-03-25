import PropTypes from "prop-types";

export default function Button({ children }) {
  return (
    <div className="flex items-center gap-1 py-1 px-3 rounded bg-sky-500 text-white hover:bg-sky-600 duration-200">
      {children}
    </div>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
