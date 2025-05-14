let localStorageBackup = {};

before(() => {
    cy.login();
    cy.wait(2000); // Esperar a que se cargue la sesión
    cy.window().then((win) => {
        localStorageBackup = { ...win.localStorage };
    });
});

beforeEach(() => {
    cy.wait(1000); // Esperar a que la página cargue completamente antes de interactuar con los elementos
    cy.visit('https://web-gestioncomerciallight.dev2.macamedia.com.ar/#/ventas/nueva');
    cy.window().then((win) => {
        Object.entries(localStorageBackup).forEach(([key, value]) => {
            win.localStorage.setItem(key, value);
        });
    });
});

describe('Realizar una Venta de Mostrador', () => {
       
    it('Seleccionar Ventas y realizar una venta', () => {
        // Seleccionar la segunda opción "Ventas"
        cy.wait(1000); // Esperar a que la página cargue completamente antes de interactuar con los elementos
        // Seleccionar un producto
        cy.contains('div', 'Combo Automatización').click(); // Ajusta el selector según la lista de productos

        cy.wait(1000);
        // Hacer clic en "Pago"
        cy.contains('button', 'PAGO').click(); // Ajusta el selector según el botón de pago

        cy.wait(1000);  
        // Seleccionar el método de pago
        cy.contains('button', 'Efectivo').click(); // Ajusta el selector según el método de pago

        cy.wait(1000);
        // Finalizar la venta
        cy.contains('button', 'FINALIZAR').click(); // Ajusta el selector según el botón de finalizar
    });
});