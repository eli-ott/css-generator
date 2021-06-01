//we're getting the value of the text input.
$("input[type='text']").on('keypress', function () {
    setTimeout(() => {

        //apllying the style when the user change the input[type='text'] value
        if (state == 'passive') {
            //pushing the changed style in the passiveChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            if ($(this).attr('shadowType') == 'boxShadow') {
                //changing the style of the boxShadow or the textShadow
                $("#btn").css(
                    'boxShadow',
                    `${$('#passive > .shadows > #boxShadow > #boxShadowType').val()} 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetX').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetY').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxShadowColor').val()}`
                );
            } else {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            }
        } else if (state == 'hover') {
            //pushing the changed style in the hoverChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the initial value of the button style before the hover effect so the value is took before it changes
            if ($(this).attr('shadowType') == 'boxShadow') {
                //setting the old value for the box shadow
                var oldVal =
                    `${$('#passive > .shadows > #boxShadow > #boxShadowType').val()} 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetX').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetY').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxShadowColor').val()}`;
            } else {
                var oldVal = $('#passive').find(`#${$(this).attr('id')}`).val();
            }

            //changing the style on hover
            $("#btn").hover(() => {
                //changing the style for the box shadow
                if ($(this).attr('shadowType') == 'boxShadow') {
                    $("#btn").css(
                        'boxShadow',
                        `${$('#hover > .shadows > #boxShadow > #boxShadowType').val()} 
                        ${$('#hover > .shadows > #boxShadow > #boxOffsetX').val()}px 
                        ${$('#hover > .shadows > #boxShadow > #boxOffsetY').val()}px 
                        ${$('#hover > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                        ${$('#hover > .shadows > #boxShadow > #boxShadowColor').val()}`
                    );
                } else {
                    $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
                }
            }, () => {
                if ($(this).attr('shadowType') == 'boxShadow') {
                    $("#btn").css('boxShadow', oldVal);
                } else {
                    $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
                }
            });
        } else if (state == 'click') {
            //pushing the changed style in the clickChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the inital value of the button style before the click effect so the value is took before it changes
            if ($(this).attr('shadowType') == 'boxShadow') {
                //setting the old value for the box shadow
                var oldVal =
                    `${$('#hover > .shadows > #boxShadow > #boxShadowType').val()} 
                    ${$('#hover > .shadows > #boxShadow > #boxOffsetX').val()}px 
                    ${$('#hover > .shadows > #boxShadow > #boxOffsetY').val()}px 
                    ${$('#hover > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                    ${$('#hover > .shadows > #boxShadow > #boxShadowColor').val()}`;
            } else {
                var oldVal = $('#hover').find(`#${$(this).attr('id')}`).val();
            }

            //we change the style when the user is clicking the button
            $("#btn").mousedown(() => {
                //changing the style for the box shadow
                if ($(this).attr('shadowType') == 'boxShadow') {
                    console.log(oldVal);
                    $("#btn").css(
                        'boxShadow',
                        `${$('#click > .shadows > #boxShadow > #boxShadowType').val()} 
                        ${$('#click > .shadows > #boxShadow > #boxOffsetX').val()}px 
                        ${$('#click > .shadows > #boxShadow > #boxOffsetY').val()}px 
                        ${$('#click > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                        ${$('#click > .shadows > #boxShadow > #boxShadowColor').val()}`
                    );
                } else {
                    $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
                }
            });
            //we change the style when the user releasing the click on the button
            $("#btn").mouseup(() => {
                if ($(this).attr('shadowType') == 'boxShadow') {
                    $("#btn").css('boxShadow', oldVal);
                } else {
                    $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
                }
            });
        }

        if ($(this).attr('placeholder').toLowerCase() == 'value') {
            $("#btn").val($(this).val());
        }
    }, 150);
});

//we're getting the value of the ranges
$("input[type='range']").on('mousemove', function () {
    //applying the style when the user release his mouse on input[type='range']
    setTimeout(() => {
        if (state == 'passive') {
            //pushing the changed style in the passiveChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            if ($(this).attr('shadowType') == 'boxShadow') {
                //changing the style of the boxShadow or the textShadow
                $("#btn").css(
                    'boxShadow',
                    `${$('#passive > .shadows > #boxShadow > #boxShadowType').val()} 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetX').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetY').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxShadowColor').val()}`
                );
            } else {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            }
        } else if (state == 'hover') {
            //pushing the changed style in the hoverChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the inital value of the button style before the hover effect so the value is took before it changes
            if ($(this).attr('shadowType') == 'boxShadow') {
                //setting the old value for the box shadow
                var oldVal =
                    `${$('#passive > .shadows > #boxShadow > #boxShadowType').val()} 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetX').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxOffsetY').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                    ${$('#passive > .shadows > #boxShadow > #boxShadowColor').val()}`;
            } else {
                var oldVal = $('#passive').find(`#${$(this).attr('id')}`).val();
            }

            //changing the style on hover
            $("#btn").hover(() => {
                //changing the style for the box shadow
                if ($(this).attr('shadowType') == 'boxShadow') {
                    $("#btn").css(
                        'boxShadow',
                        `${$('#hover > .shadows > #boxShadow > #boxShadowType').val()} 
                        ${$('#hover > .shadows > #boxShadow > #boxOffsetX').val()}px 
                        ${$('#hover > .shadows > #boxShadow > #boxOffsetY').val()}px 
                        ${$('#hover > .shadows > #boxShadow > #boxBlurRadius').val()}px 
                        ${$('#hover > .shadows > #boxShadow > #boxShadowColor').val()}`
                    );
                } else {
                    $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
                }
            }, () => {
                if ($(this).attr('shadowType') == 'boxShadow') {
                    $("#btn").css('boxShadow', oldVal);
                } else {
                    $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
                }
            });
        } else if (state == 'click') {
            //pushing the changed style in the clickChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the inital value of the button style before the hover effect so the value is took before it changes
            let oldVal = $('#hover').find(`#${$(this).attr('id')}`).val();

            //we change the style when the user is clicking the button
            $("#btn").mousedown(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            });
            //we change the style when the user releasing the click on the button
            $("#btn").mouseup(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
            });
        }

        //calling the function to append the values after the inputs
        displayRangeValues($(this));
    }, 150);
});

//we're getting the value of the select's options
$('select').on('click', function () {
    setTimeout(() => {
        if (state == 'passive') {
            //pushing the changed style in the passiveChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val().toLowerCase());
        } else if (state == 'hover') {
            //pushing the changed style in the hoverChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the initial value of the button style before the gover effect so the value is took before ut changes
            let oldVal = $('#passive').find(`#${$(this).attr('id')}`).val();

            //changing the style on hover
            $("#btn").hover(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            }, () => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
            });
        } else if (state == 'click') {
            //pushing the changed style in the clickChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the inital value of the button style before the hover effect so the value is took before it changes
            let oldVal = $('#hover').find(`#${$(this).attr('id')}`).val();

            //we change the style when the user is clicking the button
            $("#btn").mousedown(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            });
            //we change the style when the user releasing the click on the button
            $("#btn").mouseup(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
            });
        }
    }, 150);
});

//we trigger a keypress on the text inputs to change the button value
for (let i = 0; i < document.getElementsByTagName("input[type='text']").length; i++) {
    document.getElementsByName("input[type='text']")[i].dispatchEvent(new Event('keypress'));
}
//we trigger a mouseup on the range inputs to change the button value
for (let i = 0; i < document.getElementsByName("input[type='range']").length; i++) {
    document.getElementsByTagName("input[type='range']")[i].dispatchEvent(new Event('mouseup'));
}
//we trigger a click on the select to change the button value
for (let i = 0; i < document.getElementsByName('select').length; i++) {
    document.getElementsByName('select')[i].dispatchEvent(new Event('click'));
}


//we display the value of the range inputs
const displayRangeValues = elem => {
    //we append the value of the input inside the label
    $(`#${state} label[for='${elem.attr('id')}']`).empty();
    if (elem.attr('id') == 'fontWeight')  $(`#${state}  label[for='${elem.attr('id')}']`).append($(elem).val());
    else $(`#${state}  label[for='${elem.attr('id')}']`).append(`${$(elem).val()}px`);
}