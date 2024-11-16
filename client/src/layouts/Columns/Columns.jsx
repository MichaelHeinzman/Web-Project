import PropTypes from "prop-types";
import "./Columns.css";

const ColumnsLayout = ({ columns, children }) => {
  return <div className={`columns-layout columns-${columns}`}>{children}</div>;
};

ColumnsLayout.propTypes = {
  columns: PropTypes.number.isRequired, // Number of columns to display
  children: PropTypes.node.isRequired, // The child components to render in the columns layout
};

export default ColumnsLayout;
