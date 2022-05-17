import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {
  mockedSuggestionsProvider,
  mockedOnSelect,
} from "../../../assets/__mocks__/mockedAutocompleteInputData";
import AutocompleteInput from "../AutocompleteInput";

describe("Autocomplete input", () => {
  it("renders an input field", () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("allows to type into input", async () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByRole("textbox");
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
    const inputElement = screen.getByRole("textbox");
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "L" } })
    );

    const dropDownList = screen.getByTestId("dropdown");
    expect(dropDownList).toBeInTheDocument();
  });

  it("fills the input value with a clicked item name", async () => {
    jest.useFakeTimers("modern");

    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByRole("textbox");
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "London" } })
    );
    await act(async () => {
      jest.runAllTimers();
    });
    const dropDownSuggestion = screen.getByText(/london, gb/i);
    await act(async () => fireEvent.click(dropDownSuggestion));

    expect(inputElement.value).toBe("London, GB");
  });

  it("calls onSelect", async () => {
    jest.useFakeTimers("modern");

    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );

    const inputElement = screen.getByRole("textbox");
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "London" } })
    );
    await act(async () => {
      jest.runAllTimers();
    });
    const dropDownSuggestion = screen.getByText(/london, gb/i);
    await act(async () => fireEvent.click(dropDownSuggestion));

    expect(mockedOnSelect).toHaveBeenCalled();
  });

  it("clears the input value", async () => {
    render(
      <AutocompleteInput
        onSelect={mockedOnSelect}
        suggestionsProvider={mockedSuggestionsProvider}
      />
    );
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");
    await act(async () =>
      fireEvent.change(inputElement, { target: { value: "London" } })
    );
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
