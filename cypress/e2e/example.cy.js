describe('Example Test Suite', () => {
    it('should visit the example page', () => {
        cy.visit('https://example.com'); // Replace with your actual URL
    });

    it('should check for a specific element', () => {
        cy.get('h1').should('contain', 'Example Domain'); // Adjust the selector and text as needed
    });

    it('should interact with an element', () => {
        cy.get('a').click();
        cy.url().should('include', 'iana.org'); // Adjust the URL check as needed
    });
});