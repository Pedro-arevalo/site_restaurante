   /*
    var weekDay = new Date().getDay()
    var hour = new Date().getHours()
    var oneTitle = document.querySelector('section#two .sectTitle')
    var oneNotice = document.querySelector('.aviso')
    oneTitle.innerText = ''
    oneNotice.innerText = ''
    $('#foodMenu').hide()
    if (weekDay >=1 && weekDay < 6) {
        if (hour < 14) {
        oneTitle.innerText = 'Cardápio de hoje:'
        $('#foodMenu').show()
            //CARDÁPIO
        } else {
            oneTitle.innerText = 'Até amanhã!'
            oneNotice.innerHTML = 'Nosso estabelecimento encontra-se <span class="foco">fechado</span> no momento.'
            //HASTA MAÑANA
        }
    } else if (weekDay == 6) {
        if (hour < 14) {
            oneTitle.innerText = 'Cardápio de hoje:'
            $('#foodMenu').show()
            //CARDÁPIO
        } else {
            oneTitle.innerText = 'Até segunda!'
            oneNotice.innerHTML = 'Nosso estabelecimento encontra-se <span class="foco">fechado</span> no momento.'
            //HASTA EL LUNES
        }
    } else {
        oneTitle.innerText = 'Até amanhã!'
        oneNotice.innerHTML = 'Hoje nosso estabelecimento encontra-se <span class="foco">fechado</span>.'
        //HOY NO ABRIMOS
    }*/

function navSwitching(navItemSource) {
    //the script for the little message section on the main page
    function mainNotice() {
        var weekDay = new Date().getDay()
        var hour = new Date().getHours()
        var oneTitle = document.querySelector('section#two .sectTitle')
        var oneNotice = document.querySelector('.aviso')
        oneTitle.innerText = ''
        oneNotice.innerText = ''
        $('#foodMenu').hide()
        hour = 9;
        weekDay = 4;
        if (weekDay >=1 && weekDay < 6) {
            if (hour < 14) {
            oneTitle.innerText = 'Cardápio de hoje:'
            $('#foodMenu').show()
                //CARDÁPIO
            } else {
                oneTitle.innerText = 'Até amanhã!'
                oneNotice.innerHTML = 'Nosso estabelecimento encontra-se <span class="foco">fechado</span> no momento.'
                //HASTA MAÑANA
            }
        } else if (weekDay == 6) {
            if (hour < 14) {
                oneTitle.innerText = 'Cardápio de hoje:'
                $('#foodMenu').show()
                //CARDÁPIO
            } else {
                oneTitle.innerText = 'Até segunda!'
                oneNotice.innerHTML = 'Nosso estabelecimento encontra-se <span class="foco">fechado</span> no momento.'
                //HASTA EL LUNES
            }
        } else {
            oneTitle.innerText = 'Até amanhã!'
            oneNotice.innerHTML = 'Hoje nosso estabelecimento encontra-se <span class="foco">fechado</span>.'
            //HOY NO ABRIMOS
        }
    }
    var xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        var container = document.querySelector('div.container')
        if (xhttp.status === 200) {
            container.innerHTML = xhttp.responseText
        } else {
            container.innerHTML = '<h2>Oops! Ocorreu um erro inesperado. Tente novamente mais tarde.</h2>'
        }
        if (navItemSource == src_navMain) {
            mainNotice()
        }
    }
    xhttp.open("GET", navItemSource, true)
    xhttp.send(null)
}

//defining the source of each navigation item
src_navMain = 'menuData_ajax/main.html'
src_navGallery = 'menuData_ajax/gallery.html'
src_navAboutUs = 'menuData_ajax/about-us.html'

navSwitching(src_navMain)

//adding click events on each navigation item (button)
var b_navMain = document.getElementById('main')
var b_navGallery = document.getElementById('gallery')
var b_navAboutUs = document.getElementById('about-us')
b_navMain.addEventListener('click', function(){ navSwitching(src_navMain) })
b_navGallery.addEventListener('click', function(){ navSwitching(src_navGallery) })
b_navAboutUs.addEventListener('click', function(){ navSwitching(src_navAboutUs) })
