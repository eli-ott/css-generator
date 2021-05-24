let passiveStylesAttribute = [];
let passiveStylesValue = [];
let passiveCSSCode = [];

let hoverStylesAttribute = [];
let hoverStylesValue = [];
let hoverCSSCode = [];

let clickStylesAttribute = [];
let clickStylesValue = [];
let clickCSSCode = [];

const generateValues = () => {
    //we get the value of the modified passive inputs and we push them inside an array
    for (let i = 0; i < $("#passive").find("[changed='true']").length; i++) {
        passiveStylesAttribute[i] = $("#passive").find("[changed='true']").eq(i).attr('placeholder');
        passiveStylesValue[i] = $("#passive").find("[changed='true']").eq(i).val();
    }
    for (let i = 0; i < $("#hover").find("[changed='true']").length; i++) {
        hoverStylesAttribute[i] = $("#hover").find("[changed='true']").eq(i).attr('placeholder');
        hoverStylesValue[i] = $("#hover").find("[changed='true']").eq(i).val();
    }
    for (let i = 0; i < $("#click").find("[changed='true']").length; i++) {
        clickStylesAttribute[i] = $("#click").find("[changed='true']").eq(i).attr('placeholder');
        clickStylesValue[i] = $("#click").find("[changed='true']").eq(i).val();
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

    //we're removing all the elements inside the code sample paragraph
    $("#codeSample").empty();

    //we're defining the code content with the right class to highlight it after
    let finalcode = `<span class='property'>input[type='button']</span><span class='punctuation'> {</span> <br>
        ${passiveCSSCode.join('')}
        <span class='punctuation'>}</span> <br>
        <span class='property'>input[type='button']</span><span class='pseudoElem'>:hover</span><span class='punctuation'> {</span> <br>
        ${hoverCSSCode.join('')}
        <span class='punctuation'>}</span> <br>
        <span class='property'>input[type='button']</span><span class='pseudoElem'>:focus</span><span class='punctuation'> {</span> <br>
        ${clickCSSCode.join('')}
        <span class='punctuation'>}</span> <br>
    `;

    //we're appending the code we created
    $("#codeSample").append(finalcode)
}
