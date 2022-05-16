import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import AutocompleteInput from "../AutocompleteInput";

const mockErrorMessage = null;
const mockedOnSelect = jest.fn();
const mockedSuggestionsProvider = (searchTerm) => {
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

describe("Autocomplete input", () => {
  it("renders an input field", () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByPlaceholderText(/city/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("allows to type into input and get autocomplete suggestions", async () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByPlaceholderText(/city/i);
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "London" } })
    );
    expect(inputElement.value).toBe("London");
  });

  it("renders dropDownList on input value filled", async () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByPlaceholderText(/city/i);
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "L" } })
    );

    const dropDownList = screen.getByTestId("dropdown");
    expect(dropDownList).toBeInTheDocument();
  });

  it("should fill the input value with a clicked item name", async () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByPlaceholderText(/city/i);
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "London" } })
    );

    const dropDownSuggestion = screen.getByText(/london, gb/i);
    await act(async () => fireEvent.click(dropDownSuggestion));

    expect(inputElement.value).toBe("London, GB");
  });

  it("should clear the input value", async () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByPlaceholderText(/city/i);
    const buttonElement = screen.getByRole("button");
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "London" } })
    );
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
