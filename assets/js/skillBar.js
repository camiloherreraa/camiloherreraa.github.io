$(".skillLevel").each(function(i) {

    var value = $(this).data('value');
    var level = 5 - value

    for (let idx = 0; idx < value; idx++) {
        // const element = array[idx];
        $(this).append('<div class="dot-filled"></div>')
    }
    for (let idx = 0; idx < level; idx++) {
        // const element = array[idx];
        $(this).append('<div class="dot"></div>')
    }
})