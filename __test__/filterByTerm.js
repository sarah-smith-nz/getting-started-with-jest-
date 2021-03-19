describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});


describe('search uRl', () => {
  test ("it should test for the search term (uRl)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];
    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];

    expect(filterByTerm(input, "url")).toEqual(output);

  })
})
describe('error thrown when empty searchTerm', () => {
  test ("test for an empty searchTerm", () => {
    const input = [];
    expect(() => {filterByTerm(input, "");
     }).toThrowError(Error('search cannot be empty'));

  });
})


function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error('search cannot be empty');
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

