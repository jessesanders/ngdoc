describe("Articles", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load when home page loads", () => {
    cy.get("app-article").should("have.length.greaterThan", 0);
  });

  // Dont test the browser, test the attributes
  it("should open a new tab when clicked", () => {
    cy.get("app-article")
      .eq(2)
      .children("a")
      .should("have.attr", "target", "_blank");
  });

  it("should search", () => {
    cy.get("input.search").type("canvas");
    cy.get(".search-button").click();
    cy.get("app-article").should("have.length", 1);
  });

  // USER CREATED TEST
  it("should search (student version)", () => {
    // put test here
  });



  // USER CREATED TEST FOR TAGS
  it('should filter tags', () => {
    
    // find tags search input and type 'anim' in it
   // assert the number of tags returned
   // click on 2nd tag
    // 
    cy.get('div.tags.selected').should('have.length', 1);
    cy.get('div.tags').should('have.length', 15)
      .contains('routing').click()
    cy.get("app-article")
      .should("have.length", 3);
  })
});
