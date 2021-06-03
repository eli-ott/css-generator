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

    //We remove the box shadow duplicate attributes in the passiveStylesAttributes array
    for (let i = 0;  i < passiveStylesAttribute.length; i++) {
        for (let k = 0; k < passiveStylesAttribute.length; k++) {
            if (passiveStylesAttribute[i] == passiveStylesAttribute[k] && passiveStylesAttribute[k] == 'box-shadow'){
                passiveStylesAttribute.remove(k);
            }
        }
    }

    //We remove the box shadow duplicate values in the passiveStylesValues array
    let boxShadowValue = [$("#passive #boxShadowType").val(), `${$("#passive #boxOffsetX").val()}px`, `${$("#passive #boxOffsetY").val()}px`,`${$("#passive #boxBlurRadius").val()}px`, $("#passive #boxShadowColor").val()];
    for (let i = 0; i < passiveStylesValue.length; i++) {
        for (let k = 0; k < passiveStylesValue.length; k++) {
            if (passiveStylesValue[i] == passiveStylesValue[k] && passiveStylesValue[k].split(' ').areEqual(boxShadowValue)){
                passiveStylesValue.remove(k);
            }
        }
    }
    

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

const optimizeCode = () => {
    //We lower case the arrays elements
    passiveStylesAttribute = passiveStylesAttribute.map(element => { return element.toLowerCase(); });
    passiveStylesValue = passiveStylesValue.map(element => { return element.toLowerCase() });
    hoverStylesAttribute = hoverStylesAttribute.map(element => { return element.toLowerCase(); });
    hoverStylesValue = hoverStylesValue.map(element => { return element.toLowerCase() });
    clickStylesAttribute = clickStylesAttribute.map(element => { return element.toLowerCase(); });
    clickStylesValue = clickStylesValue.map(element => { return element.toLowerCase() });

    /* OPTIMIZING THE PASSIVE STYLE */
    //optimizing the code for the transition
    if (passiveStylesAttribute.includes('transition-property')
        || passiveStylesAttribute.includes('transition-duration')
        || passiveStylesAttribute.includes('transition-delay')
        || passiveStylesAttribute.includes('transition-timing-function')) {
        
    }

    //optimizing the code for the margin
    if (passiveStylesAttribute.includes('margin-top')
        || passiveStylesAttribute.includes('margin-bottom')
        || passiveStylesAttribute.includes('margin-right')
        || passiveStylesAttribute.includes('margin-left')) {
        console.log('optimize margin');
    }

    //optimizing the code for the padding
    if (passiveStylesAttribute.includes('padding-top')
        || passiveStylesAttribute.includes('padding-bottom')
        || passiveStylesAttribute.includes('padding-right')
        || passiveStylesAttribute.includes('padding-left')) {
        console.log('optimize padding');
    }

    //optimizing the code for the border radius
    if (passiveStylesAttribute.includes('border-top-left-radius')
        || passiveStylesAttribute.includes('border-top-right-radius')
        || passiveStylesAttribute.includes('border-bottom-left-radius')
        || passiveStylesAttribute.includes('border-bottom-right-radius')) {
        console.log('optimizing border radius');
    }

    //optimizing the code for the border style
    if (passiveStylesAttribute.includes('border-left-style')
        || passiveStylesAttribute.includes('border-right-style')
        || passiveStylesAttribute.includes('border-top-style')
        || passiveStylesAttribute.includes('border-bottom-style')) {
        console.log('optimizing border style');
    }


    /* OPTIMIZING THE HOVER STYLE */
    //optimizing the code for the transition
    if (hoverStylesAttribute.includes('transition-property')
        || hoverStylesAttribute.includes('transition-duration')
        || hoverStylesAttribute.includes('transition-delay')
        || hoverStylesAttribute.includes('transition-timing-function')) {
        console.log('optimize transition');
    }

    //optimizing the code for the margin
    if (hoverStylesAttribute.includes('margin-top')
        || hoverStylesAttribute.includes('margin-bottom')
        || hoverStylesAttribute.includes('margin-right')
        || hoverStylesAttribute.includes('margin-left')) {
        console.log('optimize margin');
    }

    //optimizing the code for the padding
    if (hoverStylesAttribute.includes('padding-top')
        || hoverStylesAttribute.includes('padding-bottom')
        || hoverStylesAttribute.includes('padding-right')
        || hoverStylesAttribute.includes('padding-left')) {
        console.log('optimize padding');
    }

    //optimizing the code for the border radius
    if (hoverStylesAttribute.includes('border-top-left-radius')
        || hoverStylesAttribute.includes('border-top-right-radius')
        || hoverStylesAttribute.includes('border-bottom-left-radius')
        || hoverStylesAttribute.includes('border-bottom-right-radius')) {
        console.log('optimizing border radius');
    }

    //optimizing the code for the border style
    if (hoverStylesAttribute.includes('border-left-style')
        || hoverStylesAttribute.includes('border-right-style')
        || hoverStylesAttribute.includes('border-top-style')
        || hoverStylesAttribute.includes('border-bottom-style')) {
        console.log('optimizing border style');
    }


    /* OPTIMIZING THE CLICK STYLE */
    //optimizing the code for the transition
    if (clickStylesAttribute.includes('transition-property')
        || clickStylesAttribute.includes('transition-duration')
        || clickStylesAttribute.includes('transition-delay')
        || clickStylesAttribute.includes('transition-timing-function')) {
        console.log('optimize transition');
    }

    //optimizing the code for the margin
    if (clickStylesAttribute.includes('margin-top')
        || clickStylesAttribute.includes('margin-bottom')
        || clickStylesAttribute.includes('margin-right')
        || clickStylesAttribute.includes('margin-left')) {
        console.log('optimize margin');
    }

    //optimizing the code for the padding
    if (clickStylesAttribute.includes('padding-top')
        || clickStylesAttribute.includes('padding-bottom')
        || clickStylesAttribute.includes('padding-right')
        || clickStylesAttribute.includes('padding-left')) {
        console.log('optimize padding');
    }

    //optimizing the code for the border radius
    if (clickStylesAttribute.includes('border-top-left-radius')
        || clickStylesAttribute.includes('border-top-right-radius')
        || clickStylesAttribute.includes('border-bottom-left-radius')
        || clickStylesAttribute.includes('border-bottom-right-radius')) {
        console.log('optimizing border radius');
    }

    //optimizing the code for the border style
    if (clickStylesAttribute.includes('border-left-style')
        || clickStylesAttribute.includes('border-right-style')
        || clickStylesAttribute.includes('border-top-style')
        || clickStylesAttribute.includes('border-bottom-style')) {
        console.log('optimizing border style');
    }
}