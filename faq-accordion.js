// Open & Close FAQ Accordion
$(document).ready(function() {
    $(".faq > .faq__item").click(function() {
        // Cancel the siblings
        $(this).siblings(".faq__item").removeClass("is-active").children(".faq__item-content").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".faq__item-content").slideToggle("ease-out");
    });
});
