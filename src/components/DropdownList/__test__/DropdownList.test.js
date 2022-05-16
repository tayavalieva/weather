import { render, screen } from "@testing-library/react";
import DropdownList from "../DropdownList";
import {
  mockedOnSelect,
  mockErrorMessage,
} from "../../../assets/__mocks__/mockedAutocompleteInputData";

import { mockedSuggestions } from "../../../assets/__mocks__/mockedSuggestionsData";

describe("Dropdown list is rendered and renders multiple items", () => {
  it("is renders passed suggestions", () => {
    render(
      <DropdownList
        suggestions={mockedSuggestions}
        onSelectSuggestion={mockedOnSelect}
        errorMessage={mockErrorMessage}
      />
    );
    const dropdownListElements = screen.getAllByText(/london/i);
    expect(dropdownListElements.length).toBe(2);
  });
});
