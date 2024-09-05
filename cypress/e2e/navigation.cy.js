describe('Shopping Cart', () => {
  
  it('loads products and adds items to the cart', () => {
    // Visit the homepage
    cy.visit('http://localhost:3000');

    // Wait for products to load by waiting for the network request
    cy.intercept('GET', '**/products').as('getProducts');
    cy.wait('@getProducts', { timeout: 10000 });


    // Ensure that product items are loaded
    cy.get('.product-card').should('have.length.greaterThan', 0); // Adjust selector based on actual class name

    // Add the first product to the cart
    cy.get('.product-card').first().find('button').contains('Add to Cart').click();

    // Go to the cart
    cy.get('nav').contains('Cart').click();

    // Check that the cart contains one product
    cy.get('.cart-item').should('have.length', 1); // Adjust selector based on actual class name
  });

  it('removes an item from the cart', () => {
    // Visit the cart page directly
    cy.visit('http://localhost:3000/cart');

    // Ensure that there is one product in the cart
    cy.get('.cart-item').should('have.length', 1); // Adjust selector based on actual class name

    // Remove the item from the cart
    cy.get('.cart-item').first().find('button').contains('Remove').click();

    // Verify that the cart is now empty
    cy.get('.cart-item').should('have.length', 0); // Adjust selector based on actual class name
  });
});
