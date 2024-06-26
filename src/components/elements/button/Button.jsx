import PropTypes from "prop-types";

export default function Button({
  children,
  type,
  classname,
  onClick = () => {},
}) {
  return (
    <button className={classname} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
