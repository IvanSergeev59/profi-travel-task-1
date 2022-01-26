import updatePhoneForm from "./update-phone-form"

const reducer = (state, action) => {
    return {
        phoneForm: updatePhoneForm(state, action)
    }
}

export default reducer