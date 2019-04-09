describe("Articles using fixtures", () => {
  it("stubbed data can be referenced inline", () => {
    cy.server();
    cy.route("api/articles/recent", "fixture:articles").as("recent");
    cy.visit("/");
    cy.wait("@recent");
    cy.get("app-article").should("have.length", 3);
  });

  describe("stubbed tests using fixture keyword and alias", () => {
    beforeEach(() => {
      cy.server();
      cy.fixture("articles.json").as("articlesJSON");
      cy.route("api/articles/recent", "@articlesJSON").as("recent");
      cy.visit("/");
      cy.wait("@recent");
      cy.get("app-article").should("have.length", 3);
    });

    it("testing fixtures", () => {
      cy.route("POST", "/api/articles/search", "@articlesJSON").as("articles");

      cy.get("input#keyword").type("NgRx{enter}");

      cy.wait("@articles");
      cy.get("app-article").should("have.length", 3);
    });

    // USER CREATED TEST FOR TAGS
    it("should filter tags", () => {
      // write test here
    });
  });
});
