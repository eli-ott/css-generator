let passiveStylesAttribute = [];
let passiveStylesValue = [];
let passiveCSSCode = [];

let hoverStylesAttribute = [];
let hoverStylesValue = [];
let hoverCSSCode = [];

let clickStylesAttribute = [];
let clickStylesValue = [];
let clickCSSCode = [];

let changedBorder = false;
const generateValues = () => {
    //we get the value of the modified inputs and we push them inside an the corresponding array
    for (let i = 0; i < $("#passive").find("[changed='true']").length; i++) {
        if ($("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-type'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-x'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-y'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Blur-radius'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-color') {
            passiveStylesAttribute[i] = 'box-shadow';
            passiveStylesValue[i] = `${$("#passive #boxShadowType").val()}
                    ${$("#passive #boxOffsetX").val()}px
                    ${$("#passive #boxOffsetY").val()}px
                    ${$("#passive #boxBlurRadius").val()}px
                    ${$("#passive #boxShadowColor").val()}`;
        } else {
            passiveStylesAttribute[i] = $("#passive").find("[changed='true']").eq(i).attr('placeholder');
            passiveStylesValue[i] = $("#passive").find("[changed='true']").eq(i).val();
        }
    }
    for (let i = 0; i < $("#hover").find("[changed='true']").length; i++) {
        if ($("#hover").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-type'
            || $("#hover").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-x'
            || $("#hover").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-y'
            || $("#hover").find("[changed='true']").eq(i).attr('placeholder') == 'Blur-radius'
            || $("#hover").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-color') {
            hoverStylesAttribute[i] = 'box-shadow';
            hoverStylesValue[i] = `${$("#hover #boxShadowType").val()}
                    ${$("#hover #boxOffsetX").val()}px
                    ${$("#hover #boxOffsetY").val()}px
                    ${$("#hover #boxBlurRadius").val()}px
                    ${$("#hover #boxShadowColor").val()}`;
        } else {
            hoverStylesAttribute[i] = $("#hover").find("[changed='true']").eq(i).attr('placeholder');
            hoverStylesValue[i] = $("#hover").find("[changed='true']").eq(i).val();
        }
    }
    for (let i = 0; i < $("#click").find("[changed='true']").length; i++) {
        if ($("#click").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-type'
            || $("#click").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-x'
            || $("#click").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-y'
            || $("#click").find("[changed='true']").eq(i).attr('placeholder') == 'Blur-radius'
            || $("#click").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-color') {
            clickStylesAttribute[i] = 'box-shadow';
            clickStylesValue[i] = `${$("#click #boxShadowType").val()}
                    ${$("#click #boxOffsetX").val()}px
                    ${$("#click #boxOffsetY").val()}px
                    ${$("#click #boxBlurRadius").val()}px
                    ${$("#click #boxShadowColor").val()}`;
        } else {
            clickStylesAttribute[i] = $("#click").find("[changed='true']").eq(i).attr('placeholder');
            clickStylesValue[i] = $("#click").find("[changed='true']").eq(i).val();
        }
    }

    //We remove the duplicate values in the styles and attributes arrays 
    passiveStylesAttribute = [...new Set(passiveStylesAttribute)];
    passiveStylesValue = [...new Set(passiveStylesValue)];

    hoverStylesAttribute = [...new Set(hoverStylesAttribute)];
    hoverStylesValue = [...new Set(hoverStylesValue)];

    clickStylesAttribute = [...new Set(clickStylesAttribute)];
    clickStylesValue = [...new Set(clickStylesValue)];

    generateCode();
}

const generateCode = () => {
    //wwe create a line of code depending on the value that we got and the name of the property
    for (let i = 0; i < passiveStylesAttribute.length; i++) {
        passiveCSSCode[i] = `&nbsp; <span class='attr'>${passiveStylesAttribute[i].toLowerCase()}</span><span class='punctuation'>:</span> &nbsp; <span class='attrVal'>${passiveStylesValue[i]}</span><span class='punctuation'>;</span> <br/>`;
    }
    for (let i = 0; i < hoverStylesAttribute.length; i++) {
        hoverCSSCode[i] = `&nbsp; <span class='attr'>${hoverStylesAttribute[i].toLowerCase()}</span><span class='punctuation'>:</span> &nbsp; <span class='attrVal'>${hoverStylesValue[i]}</span><span class='punctuation'>;</span> <br/>`;
    }
    for (let i = 0; i < clickStylesAttribute.length; i++) {
        clickCSSCode[i] = `&nbsp; <span class='attr'>${clickStylesAttribute[i].toLowerCase()}</span><span class='punctuation'>:</span> &nbsp; <span class='attrVal'>${clickStylesValue[i]}</span><span class='punctuation'>;</span> <br/>`;
    }

    //we're removing all the elements inside the code sample paragraph and the copy to clipboard icon
    $("#codeSample").empty();
    $("#copyImg").empty();

    //we're defining the code content with the right class to highlight it after
    let finalCode = `<span class='property'>input[type='button']</span><span class='punctuation'> {</span> <br>
        ${passiveCSSCode.join('')}
        <span class='punctuation'>}</span> <br>
        <span class='property'>input[type='button']</span><span class='pseudoElem'>:hover</span><span class='punctuation'> {</span> <br>
        ${hoverCSSCode.join('')}
        <span class='punctuation'>}</span> <br>
        <span class='property'>input[type='button']</span><span class='pseudoElem'>:focus</span><span class='punctuation'> {</span> <br>
        ${clickCSSCode.join('')}
        <span class='punctuation'>}</span> <br>`;

    //appending the content and the copy to clipboard icon
    $("#codeSample").append(finalCode);
    $("#copyImg").append("<img src='./icons/copy.svg' alt='copy to clipboard icon' id='copy' onclick='copyToClipboard()'>");
}

const copyToClipboard = () => {
    //we're creating a new range and selecting the right content
    let range = document.createRange();
    range.selectNodeContents(document.getElementById('codeSample'));

    //we're removing other range that could be on the page
    window.getSelection().removeAllRanges();

    //we're copying the selection
    window.getSelection().addRange(range);
    document.execCommand('copy');

    //we're removing the range
    window.getSelection().removeAllRanges();
}