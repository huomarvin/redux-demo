import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as countActions from "../../store/actions/count.action";

function Count({ count, increment, decrement, asyncIncrement, sagaIncrement }) {
  return (
    <div>
      <button type="button" onClick={() => increment(5)}>
        +
      </button>
      <button type="button" onClick={() => asyncIncrement(5)}>
        +
      </button>
      <button type="button" onClick={() => sagaIncrement(10)}>
        +
      </button>
      <span id="count">{count}</span>
      <button id="decrement" type="button" onClick={() => decrement(5)}>
        -
      </button>
    </div>
  );
}

const mapStateToProps = (state) => state.countReducer;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(countActions, dispatch);

const WrapperCount = connect(mapStateToProps, mapDispatchToProps)(Count);

export default WrapperCount;
