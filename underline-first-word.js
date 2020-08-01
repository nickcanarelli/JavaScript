// Add Underline to First Word in Hero Section
$(function() {
    $('#hero .title span').each(function() {
        var text = this.innerHTML;
        var firstSpaceIndex = text.indexOf(" ");
        if (firstSpaceIndex > 0) {
            var substrBefore = text.substring(0,firstSpaceIndex);
            var substrAfter = text.substring(firstSpaceIndex, text.length)
            var newText = '<span class="firstWord">' + substrBefore + '</span>' + substrAfter;
            this.innerHTML = newText;
        } else {
            this.innerHTML = '<span class="firstWord">' + text + '</span>';
        }
    });
});
