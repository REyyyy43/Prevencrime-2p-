const createNavHerramientas = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
        
            <h1 class="flex items-center text-2xl font-bold text-white">PREVENCRIME
                    <img class="h-10 w-10 text-white" src="/images/pngwing.com.png" alt="1">
                </h1>
                <a class="p-1 cursor-pointer border-b-4 text-white">Herramientas</a>
                <div class="flex md:order-2 space-x-4 p-3 md:space-x-4 rtl:space-x-reverse relative">
                    <button class="left-auto p-1 cursor-pointer border-b-4 text-white">Cerrar sesión</button>
                    <a href="/RegisterDE/" class="left-auto p-1 cursor-pointer border-b-4 text-white">Registrar DNC</a>
                     <a href="/Herramientas/" class="left-auto p-1 cursor-pointer border-b-4 text-white">Herramientas</a>
                </div>

          
        `;
    } else {
        console.error('Elemento navbar no encontrado en el DOM');
    }
};

// Función para crear el navbar de Admin
const createNavAdmin = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
           
                <h1 class="flex items-center text-2xl font-bold text-white">PREVENCRIME
                    <img class="h-10 w-10 text-white" src="/images/pngwing.com.png" alt="1">
                </h1>
                <a class="p-1 cursor-pointer border-b-4 text-white">Herramientas</a>
                <div class="flex md:order-2 space-x-4 p-3 md:space-x-4 rtl:space-x-reverse relative">
                    <button class="left-auto p-1 cursor-pointer border-b-4 text-white">Cerrar sesión</button>
                    <a href="/RegisterDE/" class="left-auto p-1 cursor-pointer border-b-4 text-white">Registrar DNC</a>
                </div>
          
        `;
    } else {
        console.error('Elemento navbar no encontrado en el DOM');
    }
};

// Función para determinar qué navbar mostrar según la ruta actual
const setNavbar = () => {
    if (window.location.pathname === '/Herramientas/') {
        createNavHerramientas();
    } else if (window.location.pathname === '/Admin/') {
        createNavAdmin();
    }
};

// Ejecutar la función al cargar la página para mostrar el navbar correcto
document.addEventListener('DOMContentLoaded', setNavbar);

// Manejo del botón de menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.querySelector('#navbar nav ul li:nth-child(3) a');
    if (navButton) {
        navButton.addEventListener('click', e => {
            const menuMobile = document.querySelector('#navbar div');
            if (menuMobile && !navButton.classList.contains('active')) {
                navButton.querySelector('path').setAttribute('d', 'M6 18 18 6M6 6l12 12');
                navButton.classList.add('active');
                menuMobile.classList.remove('hidden');
                menuMobile.classList.add('flex');
            } else {
                navButton.querySelector('path').setAttribute('d', 'M3.75 9h16.5m-16.5 6.75h16.5');
                navButton.classList.remove('active');
                if (menuMobile) {
                    menuMobile.classList.add('hidden');
                    menuMobile.classList.remove('flex');
                }
            }
        });
    }
});

// Manejo del botón de cerrar sesión en escritorio y móvil
document.addEventListener('DOMContentLoaded', function() {
    const closeBtnDesktop = document.querySelector('#navbar div button');
    if (closeBtnDesktop) {
        closeBtnDesktop.addEventListener('click', async e => {
            try {
                await axios.get('/api/logout');
                loggedOut = true; // Marcamos que el usuario ha cerrado la sesión
                window.location.replace('/login');
            } catch (error) {
                console.log(error);
            }
        });
    }

    const closeBtnMobile = document.querySelector('#navbar div div button');
    if (closeBtnMobile) {
        closeBtnMobile.addEventListener('click', async e => {
            try {
                await axios.get('/api/logout');
                loggedOut = true; // Marcamos que el usuario ha cerrado la sesión
                window.location.replace('/login');
            } catch (error) {
                console.log(error);
            }
        });
    }
});