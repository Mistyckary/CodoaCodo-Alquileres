// Definimos una clase para nuestro componente personalizado
class Nosotros extends HTMLElement {
    constructor() {
        super();

        // Creamos un Shadow DOM para encapsular el estilo y contenido del componente
        const shadow = this.attachShadow({ mode: 'open' });

        // Creamos un contenedor para el contenido del componente
        const container = document.createElement('div');
        container.setAttribute('class', 'nosotros-container');

        // Añadimos contenido al contenedor
        container.innerHTML = `
            <h2>Sobre Nosotros</h2>
            <p>Somos una empresa comprometida con la excelencia y la innovación.</p>
        `;

        // Añadimos estilo al componente
        const style = document.createElement('style');
        style.textContent = `
            .nosotros-container {
                border: 1px solid #ccc;
                padding: 16px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .nosotros-container h2 {
                margin-top: 0;
            }
        `;

        // Adjuntamos el estilo y el contenido al Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

// Definimos el nuevo elemento personalizado
customElements.define('nosotros', Nosotros);