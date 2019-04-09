describe("Articles using waits", () => {
  it("should wait for tags", () => {
    cy.server();
    cy.route("/api/tags").as("tags");
    cy.visit("/");
    cy.wait("@tags");

    // test continues as before
    cy.get(".tags-container input").type("anim");
    cy.get("div.tags").should("have.length", 3);
  });

  it("should filter tags", () => {
    cy.visit("/");

    // This is Hacky
    cy.get("div.tags").should("have.length", 20);

    cy.get(".tags-container input").type("anim");
    cy.get("div.tags")
      .should("have.length", 3)
      .eq(1)
      .click();
    cy.get("div.tags.selected").should("have.length", 1);
    cy.get("div.tags")
      .should("have.length", 15)
      .contains("routing")
      .click();
    cy.get("app-article").should("have.length", 3);
  });

  // USER CREATED TEST FOR WAITS
  it("should wait for articles to load then assert count", () => {
    // route: api/articles/recent
  });
});
