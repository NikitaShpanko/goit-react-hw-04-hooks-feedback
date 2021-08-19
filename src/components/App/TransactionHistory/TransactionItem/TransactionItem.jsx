import PropTypes from "prop-types";
import titleCase from "../../../../js/titleCase";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{titleCase(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;
