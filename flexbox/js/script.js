var button = document.querySelector('.click-to-toggle');

button.addEventListener('click', function (event) {

    var next = this.nextElementSibling;

    if (next.style.display == "none") {
        next.style.display = "block";

    } else {
        next.style.display = "none";
    }
});
