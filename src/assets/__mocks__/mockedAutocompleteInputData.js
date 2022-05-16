export const mockedSuggestionsProvider = (searchTerm) => {
  const cities = [
    { name: "London", country: "GB" },
    { name: "London", country: "CA" },
    { name: "Londo", country: "NE" },
    { name: "Linz", country: "AT" },
  ];
  return Promise.resolve(
    cities.filter((city) => city.name.includes(searchTerm))
  );
};

export const mockedOnSelect = jest.fn();

export const mockErrorMessage = null;
