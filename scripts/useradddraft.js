$().ready(function() {
    $("button").click(function() {
        var userName = $("#userName").val();
        var password = $("#password").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phoneNumber = $("#phoneNumber").val();
        var email = $("#email").val();
            var user = {
                id: id,
                firstname: firstName,
                lastname: lastName,
                password: password,
                userName: userName,
                phoneNumber: phoneNumber,
                email: email,
                reviewer: reviewer,
                admin: admin
            }
            console.log(userName)
        })

})