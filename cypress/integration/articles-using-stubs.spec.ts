describe("Articles using stubs", () => {
  it("stubbing tests using router", () => {
    cy.server();
    cy.route("/api/articles/recent", []);

    cy.visit("/");
    cy.get("app-article").should("have.length", 0);
  });

  it("stubbing tests using router and waiting", () => {
    cy.server();
    cy.route("/api/articles/recent", [
      {
        _id: "58e5e3c695fa350004ee37f3",
        submitted_date: "2017-04-06T06:44:22.103Z",
        submitted_by_name: "Kim Maida",
        submitted_by_id: 102521772882979320000,
        published_date: "2017-03-07T00:00:00.000Z",
        author_lower_name: "kim maida",
        author_name: "Kim Maida",
        status: "approved",
        title_lower: "managing state in angular with ngrx/store",
        title: "Managing State in Angular with ngrx/store",
        url:
          "https://auth0.com/blog/managing-state-in-angular-with-ngrx-store/",
        version: "2+",
        type: "Blog",
        __v: 0,
        url_lower:
          "https://auth0.com/blog/managing-state-in-angular-with-ngrx-store/",
        rating: 0,
        tags: ["ngrx", "state-management"]
      }
    ]).as("articles");

    cy.visit("/");

    cy.wait(["@articles"]);

    cy.get("app-article").should("have.length", 1);
  });

  // USER CREATED TEST FOR STUBS
  it("should display 2 tags", () => {
    // stub the tags return to only return 'constructor' & 'components'
    // assert that tags count = 2
    // tag model: {"_id":"58c16f1fe24a2d000471a591","tag":"testing","__v":0}
  });
});
