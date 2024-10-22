document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.To');
    const page = document.body;

    page.classList.add('page-enter');

    setTimeout(() => {
        page.classList.add('page-enter-active');
    }, 10);

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');

            page.classList.add('page-leave');
            setTimeout(() => {
                page.classList.add('page-leave-active');
            }, 10);

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    window.addEventListener('popstate', function () {
        page.classList.remove('page-enter-active');
        page.classList.add('page-leave');

        setTimeout(() => {
            page.classList.add('page-leave-active');
        }, 10);

        setTimeout(() => {
            page.classList.remove('page-leave-active');
            page.classList.add('page-enter');
        }, 500);
    });
});
