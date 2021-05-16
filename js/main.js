/* ---- GETTING THE VALUES AND APPLYING THE STYLE ---- */

//we're getting the value of the text input.
$("input[type='text']").keypress(function () {
    setTimeout(() => {
        //apllying the style when the user change the input[type='text'] value
        $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        if ($(this).attr('placeholder').toLowerCase() == 'value') {
            $("#btn").val($(this).val());
        }
    }, 150);
});

//we're getting the value of the ranges
$("input[type='range']").mouseup(() => {
    if (group == 'bordersAndOutline') {
        setTimeout(() => {
            //we change the style when the user change the input[type='range'] value
            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        }, 150);
    } else {
        setTimeout(() => {
            //we change the style when the user change the input[type='range'] value
            $("#btn").css($(this).attr('placeholder').toLowerCase(), $(this).val());
        }, 150);
    }

});

//we're getting the value of the select's options
$('select').click(function () {
    if (group == 'bordersAndOutline') {
        //we loop through the 4 divs of the borders and outline div
        for (let i = 0; i < $(`.${group}`).eq(groupIndex).children().length; i++) {
            //we loop through the inputs childs of the 4 divs
            for (let j = 0; j < $(`.${group}`).eq(groupIndex).children().eq(i).children().length; j++) {
                setTimeout(() => {
                    $("#btn").css($(this).attr('aria-placeholder'), $(this).val());
                }, 150);
            }
        }
    } else if (group == 'colors') {
        for (let i = 0; i < $(`.${group}`).eq(groupIndex).children().length; i++) {
            setTimeout(() => {
                console.log($(`.${group}`).eq(groupIndex).children().eq(i).val());
                if ($(`.${group}`).eq(groupIndex).children().eq(i).val() == 'linear-gradient'
                    || $(`.${group}`).eq(groupIndex).children().eq(i).val() == 'radial-gradient') {
                    //append the right content to create a liner or radial gradient
                }
            }, 150);
        }
    }
});

/* ---- END OF GROUP ---- */