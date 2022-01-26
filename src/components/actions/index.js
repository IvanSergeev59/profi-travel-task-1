const addButton = (data) => {
    return {
        type: "ADD_BUTTON",
        payload: data
    }
}

const changeCurrentNumber = (data) => {
    return {
        type: "CHANGE_CURRENT_NUMBER",
        payload: data
    }
}

export {addButton, changeCurrentNumber}