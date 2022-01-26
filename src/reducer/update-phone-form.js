
const updatePhoneForm = (state, action) => {

    // clear currentNumber from - symbols
    const currentPhoneToBase = (data) => {
        let newData = data.split('-').join('');  
        return newData 
    }

    // used add number to array of phone numbers
    const addCurrentNumberToArr = (phones, currentNumber) => {      
        let item = currentPhoneToBase(currentNumber);  
        let newArr = [...phones];       
        newArr.push(item);
        return newArr
        
    }

    //add phone number mask
    const phoneToMask = (finishData) => {
        let num ='';
        switch (true) {
            case (finishData.length > 0 && finishData.length < 4) : return num = `${finishData.substring(0, 3)}`;
            case (finishData.length < 7 && finishData.length > 3) : return num = `${finishData.substring(0, 3)}-${finishData.substring(3, 6)}`;
            case (finishData.length < 9 && finishData.length > 6) : return num = `${finishData.substring(0, 3)}-${finishData.substring(3, 6)}-${finishData.substring(6, 8)}`;
            case (finishData.length < 11 && finishData.length > 8) : return num = `${finishData.substring(0, 3)}-${finishData.substring(3, 6)}-${finishData.substring(6, 8)}-${finishData.substring(8, 10)}`;
            default: return num        
        }
    }


    const phoneHandler = (data) => {
        let basePhoneNumber = currentPhoneToBase(data);
        let finishData = [];
        const {phones} = state.phoneForm;
        let isArr = true;
        let wrongSymbol = false
       
        const number = basePhoneNumber.split('');      
        
        //check wrong symbols
        number.map(item => {
            if(/^(0|[1-9]\d*)$/.test(item)) {finishData = finishData+item} else { wrongSymbol = true}; return finishData
        })      

        //check phone number lentgh
        if (number.length > 8) {finishData = finishData.substr(0, 10)};

        // check is currentNumber in array of numbers
        phones.map(item => {
            if(item === finishData ) {  isArr = false}; return isArr
        })

        // additional check length of current number
        if (isArr && finishData.length === 10) { isArr = true} else {isArr = false}
      
        let num = {
            currentNumber: phoneToMask(finishData),
            isPhoneInArr: isArr,
            wrongSymbol: wrongSymbol
        };

        return num
    }


    
    if (state ===undefined) {
        return {
            phones: [''],
            phoneBorder: '',
            currentNumber: '',
            buttonDisabled: true,       
        }
    }

    switch (action.type) {        
        case "ADD_BUTTON":
            const {phones, currentNumber} = state.phoneForm;
            return {
                ...state.phoneForm,
                phones: addCurrentNumberToArr(phones, currentNumber),
                currentNumber: '',
                buttonDisabled: true,
                phoneBorder: ''
               
            }
        case "CHANGE_CURRENT_NUMBER":
            let phoneNumberHandled = phoneHandler(action.payload);
            let border = '';
            let buttonDisabled = true;
            // add red border
            if(phoneNumberHandled.wrongSymbol) border = 'input-red';

            //add yellow border
            if(phoneNumberHandled.isPhoneInArr) {border = 'input-yellow';  buttonDisabled = false}
             
            return {
                ...state.phoneForm,
                currentNumber: phoneNumberHandled.currentNumber,
                phoneBorder: border,
                buttonDisabled: buttonDisabled
            }
        default: return state.phoneForm
    
    }
}
export default updatePhoneForm