
// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
    }

});

  $(function() {
        $(window).scroll(function() {
            if ($(".navbar").offset().top > $(window).height()) {
                $(".navbar-inner").addClass("sticky");
            }
            else {
                $(".navbar-inner").removeClass("sticky");
            }
        });

    });