describe("Articles", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("stubbed tests", () => {
    beforeEach(() => {
      cy.server();
      cy.fixture("articles.json").as("articlesJSON");
      cy.fixture("articles.full.json").as("articlesFullJSON");
    });

    it("testing fixtures", () => {
      cy.route("POST", "/api/articles/search", "@articlesJSON");

      cy.get("input#keyword").type("NgRx{enter}");

      cy.get("article").should("have.length", 3);
    });

    // USER CREATED TEST FOR TAGS
    it("should filter tags", () => {
      
    });
  });
});
