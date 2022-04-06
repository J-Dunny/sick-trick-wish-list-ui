describe('Trick List Homepage', () => {
    it('Should be able to visit the page and render the correct elements', () => {
      cy.visit('http://localhost:3000')
        .contains('Sick Trick Wish List')
        .get('form')
          .contains('Choose Stance');
    });
  });