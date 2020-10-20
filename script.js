$(".calc").click(function() {
    let Name = $(".name").val();


    let snack = $(".snack").val();


    let weeks = $(".week").val();

    let totalTime = 52 * 50 * weeks;
    let message = `By the year 2070 ${Name} will eat ${snack} ${totalTime} times`;
    $(".mes").append(message);




});