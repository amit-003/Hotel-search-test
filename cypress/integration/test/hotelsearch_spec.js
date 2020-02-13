describe("QA Assessment Test ", function () {

	beforeEach(function () {
		cy.visit('https://www.phptravels.net', {
			
		})
	})


	it("Hotel Search", function () {
        cy.get('#s2id_autogen1 > .select2-choice > .select2-chosen').click();
        cy.get('#select2-drop > .select2-search > .select2-input').type("mumbai");
        cy.get('#select2-drop > .select2-results > .select2-results-dept-0 > .select2-result-sub > .select2-results-dept-1 > .select2-result-label > .select2-match').click();
        cy.get('.align-items-end > .col-md-2 > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > .custom-control-label > :nth-child(3)').click();
        cy.wait(1000);
        cy.get('.box-content > .custom-control > :nth-child(1) > .custom-control-label').click();
        cy.wait(1000);
        cy.get('#searchform').click();
        cy.wait(1000);
        cy.get('.ml-auto > .btn').click();
        cy.wait(1000);
        cy.get('.o2 > .form-group > .form-icon-left > .input-group > .input-group-btn-vertical > .bootstrap-touchspin-up').click();
        cy.wait(1000);
        cy.get('.col-md-2 > .btn').click();

    })
}) 

