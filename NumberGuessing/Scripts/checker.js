function check() {
    var entered = document.getElementById("numberField").value;

    $.ajax({
        type: "POST",
        //$('#form-container').data('request-url')
        url: "/Home/Check",
        data: { toCheck: entered },
        dataType: "json",
        success: successFunc,
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Error: "+xhr.status);
        }
    })
}

function successFunc(data) {
    if (data==0) {
        //winner
        if (confirm('Congrats! You guessed the number right! Play again?')) {
            window.location.reload();
        } else {
            //Bask in your glory with a congratulations message
            document.getElementById("hints").innerHTML = "<span style='color: #000000'>Congrats, You Won!!</span>";
        }

    } else if (data>0) {
        //too high
        document.getElementById("numberField").value = "";
        document.getElementById("hints").innerHTML = 'Too High!';
    } else {
        //too low
        document.getElementById("numberField").value = "";
        document.getElementById("hints").innerHTML = 'Too Low!';
    }
}
