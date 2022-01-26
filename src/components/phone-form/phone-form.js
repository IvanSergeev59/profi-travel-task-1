import React from "react"
import { connect } from "react-redux";
import {addButton, changeCurrentNumber} from "../actions";

const PhoneForm = (props) => {    
    const {phoneBorder, currentNumber, buttonDisabled} = props.phoneForm
    const {onAddButton, changeCurrentNumber} = props
    return (
        <div className="phone-form">
            <p>Номер телефона</p>
            <input
            className={`phone-form__input ${phoneBorder}`}
            name="phone"
            mask="999-999-99-99"
            value={currentNumber}
            placeholder="999-999-99-99"
            pattern="2-[0-9]{3}-[0-9]{3}"
            onChange={(event) => changeCurrentNumber(event.target.value)} >                           
            </input>
            <button className="phone-form__button" onClick={onAddButton} disabled={buttonDisabled}>Добавить телефон</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddButton: (data) => dispatch(addButton(data)),
        changeCurrentNumber: (data) => dispatch(changeCurrentNumber(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);