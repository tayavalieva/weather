import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DropdownList from "../DropdownList";
import {
  mockedOnSelect,
  mockErrorMessage,
} from "../../../assets/__mocks__/mockedAutocompleteInputData";
import { mockedSuggestions } from "../../../assets/__mocks__/mockedSuggestionsData";

describe("Dropdown list", () => {
  it("renders passed suggestions", () => {
    render(
      <DropdownList
        suggestions={mockedSuggestions}
        onSelectSuggestion={mockedOnSelect}
        errorMessage={null}
      />
    );
    const dropdownListElements = screen.getAllByText(/london/i);
    expect(dropdownListElements.length).toBe(2);
  });

  it("shows error", () => {
    render(
      <DropdownList
        suggestions={mockedSuggestions}
        onSelectSuggestion={mockedOnSelect}
        errorMessage={mockErrorMessage}
      />
    );
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
  });

  it("calls onSelectSuggestion", async () => {
    render(
      <DropdownList
        suggestions={mockedSuggestions}
        onSelectSuggestion={mockedOnSelect}
        errorMessage={null}
      />
    );
    const dropDownSuggestion = screen.getByText(/london, gb/i);
    await act(async () => fireEvent.click(dropDownSuggestion));
    expect(mockedOnSelect).toHaveBeenCalled();
  });
});
