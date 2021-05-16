let state = 'passive';
//we define the current state the user is in
$(".state").on("click", function () {
    $(".state").removeClass('active');

    //changing the active class
    $(`[value='${this.value}']`).attr('class', 'state active');
    state = this.value.toLowerCase();
    changeState();
});

let group = 'fontStyle';
let groupIndex = 0;
//we define the current group the user is in
$(".group").on("click", function () {
    $(".group").removeClass('active');

    $(`[value='${this.value}']`).attr('class', 'group active');
    group = this.value.toLowerCase().camel();
    changeGroup();
});

//we display the right state inputs
const changeState = () => {
    $("#inputs").children().css('display', 'none');
    $(`#${state}`).css('display', 'unset');
    
    if(state == 'passive') groupIndex = 0;
    else if (state == 'hover') groupIndex = 1;
    else if (state == 'click') groupIndex = 2;
    changeGroup();
}

//we display the right inputs depending on the user choice
const changeGroup = () => {
    $(`#${state}`).children().css('display', 'none');
    $(`.${group}`).eq(groupIndex).css('display', 'unset');
}

changeState();
changeGroup();