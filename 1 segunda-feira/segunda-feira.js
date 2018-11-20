$("#formNewsLetter").submit(function (event) {
    let $form = $(this)
    console.log($form.serializeArray())
})