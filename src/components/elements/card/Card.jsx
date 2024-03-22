import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <div className="p-3 w-full shadow border-slate-500 rounded">{children}</div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};
