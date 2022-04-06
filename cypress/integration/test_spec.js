describe('Trick List Homepage', () => {
    it('Should be able to visit the page and render the correct elements', () => {
      cy.visit('http://localhost:3000')
        .contains('Sick Trick Wish List')
        .get('form')
          .contains('Choose Stance')
        .get('form')
          .contains('Choose Obstacle')
        .get('button')
          .contains('Send it!')
        .get('.all-tricks div')
            .contains('regular treflip')
        .get('.all-tricks div')
            .contains('flat ground')
        .get('.all-tricks div')
            .contains('Link to tutorial:')
        .get('.all-tricks div')
            .contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
    })

    
    it('Data values are inputing correctly', () => {
          cy.visit('http://localhost:3000')
            .get('form')
                .get('input[name="name"]').type('nollie')
                .should('have.value', 'nollie')
                .get('select[name="stance"]').select('Regular')
                .should('have.value', 'Regular')
                .get('input[name="tutorial"]').type('www.google.com')
                .should('have.value', 'www.google.com')
                .get('select[name="obstacle"]')
                .should('have.value', '')
    })


    it('Data values are inputing correctly', () => {
        cy.visit('http://localhost:3000')
          .get('form')
              .get('input[name="name"]').type('nollie')
              .get('select[name="stance')
              
              .get('input[name="tutorial"]').type('www.google.com')
              .get('select[name="obstacle')
              
  })


  });