$(document).ready(function () {

    //Плавная прокрутка страницы
    $(function () {
        $('.nav-link').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top + 'px'
            }, {
                duration: 1000,
                easing: 'swing'
            });
            return false;
        })
    })

    //Выдвижение строки поиска при наведении и его исчезновение спустя 11 секунд 
    $(function () {
        $('.search-box').hover(function () {
            $('.search-txt').css({ width: '150px' });

            setTimeout(function () {
                $('.search-txt').css({ width: '0' });
            }, 11000)
        })
    })

    //Добавление класса "services__block-hover1" блоку "services__block" при наведении на кнопку
    $(function () {
        $('.read-more').on('mouseover', function () {
            $(this).parent().addClass('services__block-hover1');
        }).on('mouseout', function () {
            $(this).parent().removeClass('services__block-hover1');
        })
    })

    //Переключение табов в блоке "works"
    $(function () {
        let tabBody = document.querySelectorAll('.tab-body');
        for (let i = 1; i < tabBody.length; i++) {
            tabBody[i].style.display = 'none';
        }

        $('.tab1').addClass('tab-click');

        let tab = document.querySelectorAll('.tab');
        tab.forEach(function (element) {
            element.onclick = function () {

                $('.tab').removeClass('tab-click');
                $(this).addClass('tab-click');

                let data = this.getAttribute('data');
                tabBody.forEach(function (element) {
                    element.style.display = 'none';
                });

                document.querySelector(`.tab-body[data = "${data}"]`).style.display = 'flex';
            }
        })
    })

    //Lazy Loading по нажатию кнопки "MORE VIEW" в блоке "blog"
    $(function () {
        $('.blog__content').hide();
        $('.blog__content').slice(0, 3).show();
        $('#blog__more').click(function (e) {
            $('.blog__content:hidden').slice(0, 3).slideDown();
        })
    })

    //Валидация формы
    $(function () {
        $('.btn_registration').click(function () {
            var firstName = $('.first_name').val();
            var mail = $('.mail').val();

            if (firstName.length <= 0 || firstName > 30) {
                $('.first_name').addClass('is-invalid');
            }
            else if (mail.length <= 0) {
                $('.mail').addClass('is-invalid');
            }

        });
    })

})