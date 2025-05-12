let localStorageBackup = {};

before(() => {
    cy.login();
    cy.wait(1000); // Esperar a que se cargue la sesión
    cy.window().then((win) => {
        localStorageBackup = { ...win.localStorage };
    });
});

beforeEach(() => {
    cy.wait(1000); // Esperar a que la página cargue completamente antes de interactuar con los elementos
    cy.visit('https://web-gestioncomerciallight.dev2.macamedia.com.ar/#/productos/lista');
    cy.window().then((win) => {
        Object.entries(localStorageBackup).forEach(([key, value]) => {
            win.localStorage.setItem(key, value);
        });
    });
});

it('Debe crear un nuevo producto', () => {
    cy.wait(1000); // Esperar a que la página cargue completamente antes de interactuar con los elementos
    cy.get('i.eva-plus-outline').click();
    cy.wait(1000);
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Generar un número aleatorio de 6 dígitos
    cy.get('input[data-autofocus="true"]').type(`${randomNumber}`);
    cy.wait(1000);
    const randomTwoDigitNumber = Math.floor(10 + Math.random() * 90); // Generar un número aleatorio de 2 dígitos
    cy.get('input#input-orden').type(`${randomTwoDigitNumber}`);
    cy.wait(1000);
    const randomThreeDigitNumber = Math.floor(100 + Math.random() * 900); // Generar un número aleatorio de 3 dígitos
    cy.get('input#input-nombre').type(`Producto Automatizado ${randomThreeDigitNumber}`);
    cy.wait(1000);
    cy.get('textarea#input-descripcion').type('Descripción del producto automatizado');
    cy.wait(1000);
    cy.get('div.q-field__native').eq(0).click();
    cy.wait(1000);
    cy.contains('span', 'Monte Alto').click();
    cy.wait(1000);
    cy.get('div.q-field__native').eq(1).click();
    cy.wait(1000);
    cy.contains('span', 'Vino Tinto').click();
    cy.wait(1000);
    cy.get('input#input-precio-costo').type('1000');
    cy.wait(1000);
    cy.get('input#input-precio-venta').type('1500');
    cy.wait(1000);
    cy.get('input#input-punto-reposicion').type('100');
    cy.wait(1000);
    // Agregar Cantidad a la Casa Central
    cy.get('div.q-item__section.column.q-item__section--main.justify-center.text')
        .contains('Casa Central')
        .parents('div.q-item.q-item-type.row.no-wrap.q-item--dense.q-mx-xs.q-mt-none')
        .find('input[placeholder="Cantidad"]')
        .click()
        .type('100');
    // Agregar Cantidad a la Sucursal 2
    cy.get('div.q-item__section.column.q-item__section--main.justify-center.text')
        .contains('Sucursal 2')
        .parents('div.q-item.q-item-type.row.no-wrap.q-item--dense.q-mx-xs.q-mt-none')
        .find('input[placeholder="Cantidad"]')
        .click()
        .type('200');
    // Agregar Cantidad a Peru 211
    cy.get('div.q-item__section.column.q-item__section--main.justify-center.text')
        .contains('Peru 211')
        .parents('div.q-item.q-item-type.row.no-wrap.q-item--dense.q-mx-xs.q-mt-none')
        .find('input[placeholder="Cantidad"]')
        .click()
        .type('300');
    cy.wait(1000);
    cy.contains('span', ' Guardar ').click();
});