let changedStyle = [];

//we're getting the value of the text input.
$("input[type='text']").on('keypress', function () {
    setTimeout(() => {
        //pushing the changed style in the changedStyle array to reuse it in the cssCode.js
        console.log($(this).attr('class'));
        if($(this).attr('changed') != 'true'){
            changedStyle.push($(this).attr('id'));
            $(this).attr('changed', 'true');
        }

        //apllying the style when the user change the input[type='text'] value
        if (state == 'passive') {
            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        } else if (state == 'hover') {
            //defining the initial value of the button style before the hover effect so the value is took before it changes
            let oldVal = $("#btn").css($(this).attr('placeholder').toLowerCase());

            //changing the style on hover
            $("#btn").hover(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            }, () => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
            });
        } else if (state == 'click') {
            //defining the inital value of the button style before the click effect so the value is took before it changes
            let oldVal = $("#btn").css($(this).attr('placeholder').toLowerCase());

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
            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        } else if (state == 'hover') {
            //defining the inital value of the button style before the hover effect so the value is took before it changes
            let oldVal = $("#btn").css($(this).attr('placeholder').toLowerCase());

            //changing the style on hover
            $("#btn").hover(() => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
            }, () => {
                $("#btn").css($(this).attr('placeholder').toLowerCase(), oldVal);
            });
        } else if (state == 'click') {
            //defining the inital value of the button style before the hover effect so the value is took before it changes
            let oldVal = $("#btn").css($(this).attr('placeholder').toLowerCase());

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
    if (group == 'borders') {
        setTimeout(() => {
            if (state == 'passive') {
                $("#btn").css($(this).attr('aria-placeholder').toLowerCase(), $(this).val().toLowerCase());
            } else if (state == 'hover') {
                //defining the initial value of the button style before the gover effect so the value is took before ut changes
                let oldVal = $("#btn").css($(this).attr('aria-placeholder').toLowerCase());

                //changing the style on hover
                $("#btn").hover(() => {
                    $("#btn").css($(this).attr('aria-placeholder').toLowerCase(), $(this).val());
                }, () => {
                    $("#btn").css($(this).attr('aria-placeholder').toLowerCase(), oldVal);
                });
            } else if (state == 'click') {
                //defining the inital value of the button style before the hover effect so the value is took before it changes
                let oldVal = $("#btn").css($(this).attr('aria-placeholder').toLowerCase());

                //we change the style when the user is clicking the button
                $("#btn").mousedown(() => {
                    $("#btn").css($(this).attr('aria-placeholder').toLowerCase(), $(this).val());
                });
                //we change the style when the user releasing the click on the button
                $("#btn").mouseup(() => {
                    $("#btn").css($(this).attr('aria-placeholder').toLowerCase(), oldVal);
                });
            }
        }, 150);
    } else if (group == 'colors') {
        for (let i = 0; i < $(`.${group}`).eq(groupIndex).children().length; i++) {
            setTimeout(() => {
                if ($(`.${group}`).eq(groupIndex).children().eq(i).val() == 'linear-gradient'
                    || $(`.${group}`).eq(groupIndex).children().eq(i).val() == 'radial-gradient') {
                    //append the right content to create a liner or radial gradient
                }
            }, 150);
        }
    }
});