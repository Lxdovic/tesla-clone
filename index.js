var currentInterface = 1

var interfaces = [
    ['Model Y', '', 'Configuration personnalisée', 'Essais', 'En savoir plus sur Tesla pour les entreprise'],
    ['Model 3', 'Réservez un essai sans contact', 'Configuration personnalisée', 'Véhicules disponibles', 'A reçu la note maximale de 5 étoiles par Euro NCAP'],
    ['Model S', '', 'Configuration personnalisée', 'En savoir plus', ''],
    ['Model X', '', 'Configuration personnalisée', 'En savoir plus', ''],
    ["Systèmes d'énergie solaire et Powerwalls", 'De l’énergie pour tous vos besoins', 'En savoir plus', '', ''],
    ['Accessoires', '', 'Commander maintenant', '', ''],
]

document.addEventListener('scroll', (e) => {
    var viewHeight = window.innerHeight

    if ((viewHeight * currentInterface) - document.documentElement.scrollTop <= 0) {
        currentInterface++
    }

    var currentInterface = Math.round(5.7 - ((viewHeight * 6) - document.documentElement.scrollTop) / viewHeight) + 1

    var interface = document.getElementById('interface')
    var title = interface.querySelector('h2')
    var button1 = interface.getElementsByTagName('button')[0]
    var button2 = interface.getElementsByTagName('button')[1]
    var subtitle = interface.getElementsByTagName('a')[0]
    var description = interface.getElementsByTagName('a')[1]

    if (interfaces[currentInterface - 1][0] != '') {
        title.innerHTML = interfaces[currentInterface - 1][0]
        title.style.display = 'block'
    }
    
    else { title.style.display = 'none' }

    if (interfaces[currentInterface - 1][1] != '') {
        subtitle.innerHTML = interfaces[currentInterface - 1][1]
        subtitle.style.display = 'block'
    }
    
    else { subtitle.style.display = 'none' }

    if (interfaces[currentInterface - 1][2] != '') {
        button1.innerHTML = interfaces[currentInterface - 1][2]
        button1.style.display = 'block'
    }
    
    else { button1.style.display = 'none' }

    if (interfaces[currentInterface - 1][3] != '') {
        button2.innerHTML = interfaces[currentInterface - 1][3]
        button2.style.display = 'block'
    }
    
    else { button2.style.display = 'none' }

    if (interfaces[currentInterface - 1][4] != '') {
        description.innerHTML = interfaces[currentInterface - 1][4]
        description.style.display = 'block'
    }
    
    else { description.style.display = 'none' }
})