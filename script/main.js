// Плавный переход к якорю
$('a[href*="#"]').on('click', function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    var targetId = href.substring(href.indexOf('#'));
    var target = $(targetId);

    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    } else {
        window.location.href = href;
    }
});

// Плавный переход при клике на кнопку 
var hiddenElement = document.getElementById("about-product");
var btn = document.querySelector(".hero__btn");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);