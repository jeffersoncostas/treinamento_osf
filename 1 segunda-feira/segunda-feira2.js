$("#custom-form").submit(function (event) {
    let $customForm = $(this);

    console.log("Entrei no submit")

    console.log($customForm.serializeArray());

    let arrayForm = $customForm.serializeArray();

    let formName = arrayForm[0];
    let formEmail = arrayForm[1];

    alert("name: " + formName.value, "email: " + formEmail.value)

})