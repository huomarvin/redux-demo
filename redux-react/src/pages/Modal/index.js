import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as modalActions from "../../store/actions/modal.action";

function Modal(props) {
  const { showState, show, hidden, sagaShow } = props;
  const style = {
    backgroundColor: "skyblue",
    width: 200,
    height: 200,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -100,
    marginTop: -100,
    display: showState ? "block" : "none",
  };
  return (
    <div>
      <button onClick={sagaShow}>Show</button>
      <button onClick={hidden}>Hidden</button>
      <div style={style} />
    </div>
  );
}

const mapStateToProps = (state) => state.modalReducer;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(modalActions, dispatch);

const WrapperModal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default WrapperModal;
