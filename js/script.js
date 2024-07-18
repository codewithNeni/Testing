document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName('collapsible');
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            var content = this.nextElementSibling;
            var isExpanded = content.style.maxHeight;

            // Toggle max-height to show/hide the content
            if (isExpanded) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

            // Smooth scroll to the content
            setTimeout(() => {
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 400); // Delay the scroll to match the CSS transition duration
        });
    }
});