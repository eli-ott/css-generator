let stylesValue = [];

const generateCode = () => {
    for (let i = 0; i < changedStyle.length; i++) {
        console.log(changedStyle[i]);
        stylesValue[i] = $(`#${changedStyle[i]}`).val();
    }
}

setInterval(generateCode, 1000);