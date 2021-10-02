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
    var xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        var container = document.querySelector('div.container')
        container.innerHTML = xhttp.responseText
    }
    xhttp.open("GET", navItemSource)
    xhttp.send()
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
