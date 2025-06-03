
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://staging-fuse-aws.flatirons.com");
  });

  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
