//we're getting the value of the text input.
$("input[type='text']").on('keypress', function () {
    setTimeout(() => {

        //apllying the style when the user change the input[type='text'] value
        if (state == 'passive') {
            //pushing the changed style in the passiveChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        } else if (state == 'hover') {
            //pushing the changed style in the hoverChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the initial value of the button style before the hover effect so the value is took before it changes
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

            //defining the inital value of the button style before the click effect so the value is took before it changes
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

        if ($(this).attr('placeholder').toLowerCase() == 'value') {
            $("#btn").val($(this).val());
        }
    }, 150);
});

//we're getting the value of the ranges
$("input[type='range']").on('mouseup', function () {
    //applying the style when the user release his mouse on input[type='range']
    setTimeout(() => {
        if (state == 'passive') {
            //pushing the changed style in the passiveChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        } else if (state == 'hover') {
            //pushing the changed style in the hoverChangedStyle array to reuse it in the cssCode.js
            if ($(this).attr('changed') != 'true') {
                $(this).attr('changed', 'true');
            }

            //defining the inital value of the button style before the hover effect so the value is took before it changes
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