let passiveStylesAttribute = [];
let passiveStylesValue = [];
let passiveCSSCode = [];

let hoverStylesAttribute = [];
let hoverStylesValue = [];
let hoverCSSCode = [];

let clickStylesAttribute = [];
let clickStylesValue = [];
let clickCSSCode = [];

//APPEND THE UNITS AT THE END OF THE NIPUT WHEN THE USER WRITE ON IT

let changedBorder = false;

const generateValues = () => {
    //we add the units at the end of the inputs
    for (let i = 0; i < $(".numbers").length; i++) {
        if($(".numbers").eq(i).val() != '') {
            $(".numbers").eq(i).val($('.numbers').eq(i).val() + "px");
        }
    }

    //we get the value of the modified inputs and we push them inside an the corresponding array
    for (let i = 0; i < $("#passive").find("[changed='true']").length; i++) {
        if ($("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-type'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-x'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Offset-y'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Blur-radius'
            || $("#passive").find("[changed='true']").eq(i).attr('placeholder') == 'Shadow-color') {
            passiveStylesAttribute[i] = 'box-shadow';
            passiveStylesValue[i] = `${$("#passive #boxShadowType").val()} ${$("#passive #boxOffsetX").val()}px ${$("#passive #boxOffsetY").val()}px ${$("#passive #boxBlurRadius").val()}px ${$("#passive #boxShadowColor").val()}`;
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
            hoverStylesValue[i] = `${$("#hover #boxShadowType").val()} ${$("#hover #boxOffsetX").val()}px ${$("#hover #boxOffsetY").val()}px ${$("#hover #boxBlurRadius").val()}px ${$("#hover #boxShadowColor").val()}`;
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
            clickStylesValue[i] = `${$("#click #boxShadowType").val()} ${$("#click #boxOffsetX").val()}px ${$("#click #boxOffsetY").val()}px ${$("#click #boxBlurRadius").val()}px ${$("#click #boxShadowColor").val()}`;
        } else {
            clickStylesAttribute[i] = $("#click").find("[changed='true']").eq(i).attr('placeholder');
            clickStylesValue[i] = $("#click").find("[changed='true']").eq(i).val();
        }
    }

    //We remove the box shadow duplicate attributes in the passiveStylesAttributes array
    for (let i = 0; i < passiveStylesAttribute.length; i++) {
        for (let k = 0; k < passiveStylesAttribute.length; k++) {
            if (passiveStylesAttribute[i] == passiveStylesAttribute[k] && passiveStylesAttribute[k] == 'box-shadow') {
                passiveStylesAttribute.remove(k);
            }
        }
    }

    //We remove the box shadow duplicate values in the passiveStylesValues array
    let passiveBoxShadowValue = [$("#passive #boxShadowType").val(), `${$("#passive #boxOffsetX").val()}px`, `${$("#passive #boxOffsetY").val()}px`, `${$("#passive #boxBlurRadius").val()}px`, $("#passive #boxShadowColor").val()];
    for (let i = 0; i < passiveStylesValue.length; i++) {
        for (let k = 0; k < passiveStylesValue.length; k++) {
            if (passiveStylesValue[i] == passiveStylesValue[k] && passiveStylesValue[k].split(' ').areEqual(passiveBoxShadowValue)) {
                passiveStylesValue.remove(k);
            }
        }
    }

    //We remove the box shadow duplicate attributes in the hoverStylesAttributes array
    for (let i = 0; i < hoverStylesAttribute.length; i++) {
        for (let k = 0; k < hoverStylesAttribute.length; k++) {
            if (hoverStylesAttribute[i] == hoverStylesAttribute[k] && hoverStylesAttribute[k] == 'box-shadow') {
                hoverStylesAttribute.remove(k);
            }
        }
    }

    //We remove the box shadow duplicate values in the hoverStylesValues array
    let hoverBoxShadowValue = [$("#hover #boxShadowType").val(), `${$("#hover #boxOffsetX").val()}px`, `${$("#hover #boxOffsetY").val()}px`, `${$("#hover #boxBlurRadius").val()}px`, $("#hover #boxShadowColor").val()];
    for (let i = 0; i < hoverStylesValue.length; i++) {
        for (let k = 0; k < hoverStylesValue.length; k++) {
            if (hoverStylesValue[i] == hoverStylesValue[k] && hoverStylesValue[k].split(' ').areEqual(hoverBoxShadowValue)) {
                hoverStylesValue.remove(k);
            }
        }
    }

    //We remove the box shadow duplicate attributes in the clickStylesAttributes array
    for (let i = 0; i < clickStylesAttribute.length; i++) {
        for (let k = 0; k < clickStylesAttribute.length; k++) {
            if (clickStylesAttribute[i] == clickStylesAttribute[k] && clickStylesAttribute[k] == 'box-shadow') {
                clickStylesAttribute.remove(k);
            }
        }
    }

    //We remove the box shadow duplicate values in the clickStylesValues array
    let clickBoxShadowValue = [$("#click #boxShadowType").val(), `${$("#click #boxOffsetX").val()}px`, `${$("#click #boxOffsetY").val()}px`, `${$("#click #boxBlurRadius").val()}px`, $("#click #boxShadowColor").val()];
    for (let i = 0; i < clickStylesValue.length; i++) {
        for (let k = 0; k < clickStylesValue.length; k++) {
            if (clickStylesValue[i] == clickStylesValue[k] && clickStylesValue[k].split(' ').areEqual(clickBoxShadowValue)) {
                clickStylesValue.remove(k);
            }
        }
    }

    optimizeCode();
}

const generateCode = () => {
    //we're emptying the CSS code arrays
    passiveCSSCode = [];
    hoverCSSCode = [];
    clickCSSCode = [];

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
        <span class='property'>input[type='button']</span><span class='pseudoElem'>:active</span><span class='punctuation'> {</span> <br>
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

        //we're removing the values that are present and we don't need after the refactoring
        if (passiveStylesAttribute.includes('transition-property')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('transition-property') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#transitionProperty").val()) + 1);
        }
        if (passiveStylesAttribute.includes('transition-duration')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('transition-duration') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#transitionDuration").val()) + 1);
        }
        if (passiveStylesAttribute.includes('transition-delay')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('transition-delay') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#transitionDelay").val()) + 1);
        }
        if (passiveStylesAttribute.includes('transition-timing-function')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('transition-timing-function') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#transitionTimingFunction").val()) + 1);
        }

        //we pass the one line value in the passiveStylesAttributes and passiveStylesvalue arrays
        passiveStylesAttribute.push('transition');
        passiveStylesValue.push(`${$("#transitionProperty").val()} ${$("#transitionDuration").val()} ${$("#transitionDelay").val()} ${$("#transitionTimingFunction").val()}`);
    }

    //optimizing the code for the margin
    if (passiveStylesAttribute.includes('margin-top')
        || passiveStylesAttribute.includes('margin-bottom')
        || passiveStylesAttribute.includes('margin-right')
        || passiveStylesAttribute.includes('margin-left')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (passiveStylesAttribute.includes('margin-top')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('margin-top') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#marginTop").val()) + 1);
        }
        if (passiveStylesAttribute.includes('margin-bottom')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('margin-bottom') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#marginBottom").val()) + 1);
        }
        if (passiveStylesAttribute.includes('margin-left')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('margin-left') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#marginLeft").val()) + 1);
        }
        if (passiveStylesAttribute.includes('margin-right')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('margin-right') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#marginRight").val()) + 1);
        }

        //we pass the one line value in the passiveStylesAttributes and passiveStylesvalue arrays
        passiveStylesAttribute.push('margin');
        passiveStylesValue.push(`${$("#passive #marginTop").val()} ${$("#passive #marginRight").val()} ${$("#passive #marginBottom").val()} ${$("#passive #marginLeft").val()}`);
    }

    // optimizing the code for the padding
    if (passiveStylesAttribute.includes('padding-top')
        || passiveStylesAttribute.includes('padding-bottom')
        || passiveStylesAttribute.includes('padding-right')
        || passiveStylesAttribute.includes('padding-left')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (passiveStylesAttribute.includes('padding-top')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('padding-top') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#paddingTop").val()) + 1);
        }
        if (passiveStylesAttribute.includes('padding-bottom')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('padding-bottom') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#paddingBottom").val()) + 1);
        }
        if (passiveStylesAttribute.includes('padding-left')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('padding-left') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#paddingLeft").val()) + 1);
        }
        if (passiveStylesAttribute.includes('padding-right')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('padding-right') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#paddingRight").val()) + 1);
        }

        //we pass the one line value in the passiveStylesAttributes and passiveStylesvalue arrays
        passiveStylesAttribute.push('padding');
        passiveStylesValue.push(`${$("#passive #paddingTop").val()} ${$("#passive #paddingRight").val()} ${$("#passive #paddingBottom").val()} ${$("#passive #paddingLeft").val()}`);
    }

    //optimizing the code for the border radius
    if (passiveStylesAttribute.includes('border-top-left-radius')
        || passiveStylesAttribute.includes('border-top-right-radius')
        || passiveStylesAttribute.includes('border-bottom-left-radius')
        || passiveStylesAttribute.includes('border-bottom-right-radius')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (passiveStylesAttribute.includes('border-top-left-radius')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-top-left-radius') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderTopLeftRadius").val()) + 1);
        }
        if (passiveStylesAttribute.includes('border-top-right-radius')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-top-right-radius') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderTopRightRadius").val()) + 1);
        }
        if (passiveStylesAttribute.includes('border-bottom-right-radius')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-bottom-right-radius') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderBottomRightRadius").val()) + 1);
        }
        if (passiveStylesAttribute.includes('border-bottom-left-radius')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-bottom-left-radius') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderBottomLeftRadius").val()) + 1);
        }

        //we pass the one line value in the passiveStylesAttributes and passiveStylesvalue arrays
        passiveStylesAttribute.push('border-radius');
        passiveStylesValue.push(`${$("#passive #borderTopLeftRadius").val()} ${$("#passive #borderTopRightRadius").val()} ${$("#passive #borderBottomRightRadius").val()} ${$("#passive #borderBottomLeftRadius").val()}`);
    }

    //optimizing the code for the border style
    if (passiveStylesAttribute.includes('border-left-style')
        || passiveStylesAttribute.includes('border-right-style')
        || passiveStylesAttribute.includes('border-top-style')
        || passiveStylesAttribute.includes('border-bottom-style')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (passiveStylesAttribute.includes('border-left-style')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-left-style') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderLeftStyle").val()) + 1);
        }
        if (passiveStylesAttribute.includes('border-right-style')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-right-style') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderRightStyle").val()) + 1);
        }
        if (passiveStylesAttribute.includes('border-top-style')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-top-style') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderTopStyle").val()) + 1);
        }
        if (passiveStylesAttribute.includes('border-bottom-style')) {
            passiveStylesAttribute.remove(passiveStylesAttribute.indexOf('border-bottom-style') + 1);
            passiveStylesValue.remove(passiveStylesValue.indexOf($("#borderBottomStyle").val()) + 1);
        }

        //we pass the one line value in the passiveStylesAttributes and passiveStylesvalue arrays
        passiveStylesAttribute.push('border-style');
        passiveStylesValue.push(`${$("#passive #borderTopStyle").val()} ${$("#passive #borderRightStyle").val()} ${$("#passive #borderBottomStyle").val()} ${$("#passive #borderLeftStyle").val()}`);
    }


    // /* OPTIMIZING THE HOVER STYLE */
    //optimizing the code for the margin
    if (hoverStylesAttribute.includes('margin-top')
        || hoverStylesAttribute.includes('margin-bottom')
        || hoverStylesAttribute.includes('margin-right')
        || hoverStylesAttribute.includes('margin-left')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (hoverStylesAttribute.includes('margin-top')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('margin-top') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#marginTop").val()) + 1);
        }
        if (hoverStylesAttribute.includes('margin-bottom')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('margin-bottom') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#marginBottom").val()) + 1);
        }
        if (hoverStylesAttribute.includes('margin-left')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('margin-left') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#marginLeft").val()) + 1);
        }
        if (hoverStylesAttribute.includes('margin-right')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('margin-right') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#marginRight").val()) + 1);
        }

        //we pass the one line value in the hoverStylesAttributes and hoverStylesvalue arrays
        hoverStylesAttribute.push('margin');
        hoverStylesValue.push(`${$("#hover #marginTop").val()} ${$("#hover #marginRight").val()} ${$("#hover #marginBottom").val()} ${$("#hover #marginLeft").val()}`);
    }

    //optimizing the code for the padding
    if (hoverStylesAttribute.includes('padding-top')
        || hoverStylesAttribute.includes('padding-bottom')
        || hoverStylesAttribute.includes('padding-right')
        || hoverStylesAttribute.includes('padding-left')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (hoverStylesAttribute.includes('padding-top')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('padding-top') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#paddingTop").val()) + 1);
        }
        if (hoverStylesAttribute.includes('padding-bottom')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('padding-bottom') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#paddingBottom").val()) + 1);
        }
        if (hoverStylesAttribute.includes('padding-left')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('padding-left') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#paddingLeft").val()) + 1);
        }
        if (hoverStylesAttribute.includes('padding-right')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('padding-right') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#paddingRight").val()) + 1);
        }

        //we pass the one line value in the hoverStylesAttributes and hoverStylesvalue arrays
        hoverStylesAttribute.push('padding');
        hoverStylesValue.push(`${$("#hover #paddingTop").val()} ${$("#hover #paddingRight").val()} ${$("#hover #paddingBottom").val()} ${$("#hover #paddingLeft").val()}`);
    }

    //optimizing the code for the border radius
    if (hoverStylesAttribute.includes('border-top-left-radius')
        || hoverStylesAttribute.includes('border-top-right-radius')
        || hoverStylesAttribute.includes('border-bottom-left-radius')
        || hoverStylesAttribute.includes('border-bottom-right-radius')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (hoverStylesAttribute.includes('border-top-left-radius')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-top-left-radius') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderTopLeftRadius").val()) + 1);
        }
        if (hoverStylesAttribute.includes('border-top-right-radius')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-top-right-radius') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderTopRightRadius").val()) + 1);
        }
        if (hoverStylesAttribute.includes('border-bottom-right-radius')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-bottom-right-radius') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderBottomRightRadius").val()) + 1);
        }
        if (hoverStylesAttribute.includes('border-bottom-left-radius')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-bottom-left-radius') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderBottomLeftRadius").val()) + 1);
        }

        //we pass the one line value in the hoverStylesAttributes and hoverStylesvalue arrays
        hoverStylesAttribute.push('border-radius');
        hoverStylesValue.push(`${$("#hover #borderTopLeftRadius").val()} ${$("#hover #borderTopRightRadius").val()} ${$("#hover #borderBottomRightRadius").val()} ${$("#hover #borderBottomLeftRadius").val()}`);
    }

    //optimizing the code for the border style
    if (hoverStylesAttribute.includes('border-left-style')
        || hoverStylesAttribute.includes('border-right-style')
        || hoverStylesAttribute.includes('border-top-style')
        || hoverStylesAttribute.includes('border-bottom-style')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (hoverStylesAttribute.includes('border-left-style')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-left-style') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderLeftStyle").val()) + 1);
        }
        if (hoverStylesAttribute.includes('border-right-style')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-right-style') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderRightStyle").val()) + 1);
        }
        if (hoverStylesAttribute.includes('border-top-style')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-top-style') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderTopStyle").val()) + 1);
        }
        if (hoverStylesAttribute.includes('border-bottom-style')) {
            hoverStylesAttribute.remove(hoverStylesAttribute.indexOf('border-bottom-style') + 1);
            hoverStylesValue.remove(hoverStylesValue.indexOf($("#borderBottomStyle").val()) + 1);
        }

        //we pass the one line value in the hoverStylesAttributes and hoverStylesvalue arrays
        hoverStylesAttribute.push('border-style');
        hoverStylesValue.push(`${$("#hover #borderTopStyle").val()} ${$("#hover #borderRightStyle").val()} ${$("#hover #borderBottomStyle").val()} ${$("#hover #borderLeftStyle").val()}`);
    }


    // /* OPTIMIZING THE CLICK STYLE */
    //optimizing the code for the margin
    if (clickStylesAttribute.includes('margin-top')
        || clickStylesAttribute.includes('margin-bottom')
        || clickStylesAttribute.includes('margin-right')
        || clickStylesAttribute.includes('margin-left')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (clickStylesAttribute.includes('margin-top')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('margin-top') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#marginTop").val()) + 1);
        }
        if (clickStylesAttribute.includes('margin-bottom')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('margin-bottom') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#marginBottom").val()) + 1);
        }
        if (clickStylesAttribute.includes('margin-left')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('margin-left') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#marginLeft").val()) + 1);
        }
        if (clickStylesAttribute.includes('margin-right')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('margin-right') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#marginRight").val()) + 1);
        }

        //we pass the one line value in the clickStylesAttributes and clickStylesvalue arrays
        clickStylesAttribute.push('margin');
        clickStylesValue.push(`${$("#click #marginTop").val()} ${$("#click #marginRight").val()} ${$("#click #marginBottom").val()} ${$("#click #marginLeft").val()}`);
    }

    //optimizing the code for the padding
    if (clickStylesAttribute.includes('padding-top')
        || clickStylesAttribute.includes('padding-bottom')
        || clickStylesAttribute.includes('padding-right')
        || clickStylesAttribute.includes('padding-left')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (clickStylesAttribute.includes('padding-top')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('padding-top') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#paddingTop").val()) + 1);
        }
        if (clickStylesAttribute.includes('padding-bottom')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('padding-bottom') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#paddingBottom").val()) + 1);
        }
        if (clickStylesAttribute.includes('padding-left')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('padding-left') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#paddingLeft").val()) + 1);
        }
        if (clickStylesAttribute.includes('padding-right')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('padding-right') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#paddingRight").val()) + 1);
        }

        //we pass the one line value in the clickStylesAttributes and clickStylesvalue arrays
        clickStylesAttribute.push('padding');
        clickStylesValue.push(`${$("#click #paddingTop").val()} ${$("#click #paddingRight").val()} ${$("#click #paddingBottom").val()} ${$("#click #paddingLeft").val()}`);
    }

    //optimizing the code for the border radius
    if (clickStylesAttribute.includes('border-top-left-radius')
        || clickStylesAttribute.includes('border-top-right-radius')
        || clickStylesAttribute.includes('border-bottom-left-radius')
        || clickStylesAttribute.includes('border-bottom-right-radius')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (clickStylesAttribute.includes('border-top-left-radius')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-top-left-radius') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderTopLeftRadius").val()) + 1);
        }
        if (clickStylesAttribute.includes('border-top-right-radius')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-top-right-radius') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderTopRightRadius").val()) + 1);
        }
        if (clickStylesAttribute.includes('border-bottom-right-radius')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-bottom-right-radius') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderBottomRightRadius").val()) + 1);
        }
        if (clickStylesAttribute.includes('border-bottom-left-radius')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-bottom-left-radius') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderBottomLeftRadius").val()) + 1);
        }

        //we pass the one line value in the clickStylesAttributes and clickStylesvalue arrays
        clickStylesAttribute.push('border-radius');
        clickStylesValue.push(`${$("#click #borderTopLeftRadius").val()} ${$("#click #borderTopRightRadius").val()} ${$("#click #borderBottomRightRadius").val()} ${$("#click #borderBottomLeftRadius").val()}`);
    }

    //optimizing the code for the border style
    if (clickStylesAttribute.includes('border-left-style')
        || clickStylesAttribute.includes('border-right-style')
        || clickStylesAttribute.includes('border-top-style')
        || clickStylesAttribute.includes('border-bottom-style')) {

        //we're removing the values that are present and we don't need after the refactoring
        if (clickStylesAttribute.includes('border-left-style')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-left-style') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderLeftStyle").val()) + 1);
        }
        if (clickStylesAttribute.includes('border-right-style')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-right-style') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderRightStyle").val()) + 1);
        }
        if (clickStylesAttribute.includes('border-top-style')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-top-style') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderTopStyle").val()) + 1);
        }
        if (clickStylesAttribute.includes('border-bottom-style')) {
            clickStylesAttribute.remove(clickStylesAttribute.indexOf('border-bottom-style') + 1);
            clickStylesValue.remove(clickStylesValue.indexOf($("#borderBottomStyle").val()) + 1);
        }

        //we pass the one line value in the clickStylesAttributes and clickStylesvalue arrays
        clickStylesAttribute.push('border-style');
        clickStylesValue.push(`${$("#click #borderTopStyle").val()} ${$("#click #borderRightStyle").val()} ${$("#click #borderBottomStyle").val()} ${$("#click #borderLeftStyle").val()}`);
    }

    crossBrowserCode();
}

const crossBrowserCode = () => {
    let transitionPrefix = [
        '-webkit-transition',
        '-moz-transition',
        '-ms-transition',
        '-o-transition'
    ];
    let borderRadiusPrefix = [
        '-webkit-border-radius',
        '-moz-border-radius',
        '-ms-border-radius',
        '-o-border-radius'
    ];

    //We make the compatibility for the transitions
    if (passiveStylesAttribute.includes('transition')) {
        for (let i = 0; i < transitionPrefix.length; i++) {
            passiveStylesAttribute.push(transitionPrefix[i]);
            console.log(passiveStylesAttribute.indexOf('transition'));
            passiveStylesValue.push(passiveStylesValue[passiveStylesAttribute.indexOf('transition')]);
        }
    }
    //We make the compatibility for the border-radius
    if (passiveStylesAttribute.includes('border-radius')) {
        for (let i = 0; i < borderRadiusPrefix.length; i++) {
            passiveStylesAttribute.push(borderRadiusPrefix[i]);
            console.log(passiveStylesAttribute.indexOf('border-radius'));
            passiveStylesValue.push(passiveStylesValue[passiveStylesAttribute.indexOf('border-radius')]);
        }
    }

    generateCode();
}