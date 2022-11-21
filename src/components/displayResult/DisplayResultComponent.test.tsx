import React from "react";
import {render, screen} from "@testing-library/react";
import DisplayResultComponent from "./DisplayResultComponent";


describe("Test Display Result component", () => {
    test("Display result in percentage", () => {
        render(<DisplayResultComponent odds={58} />);
        const titleElement = screen.getByText(/58 %/i);
        expect(titleElement).toBeInTheDocument();
    });
    test("Display result 0 in percentage", () => {
        render(<DisplayResultComponent odds={0} />);
        const titleElement = screen.getByText(/0 %/i);
        expect(titleElement).toBeInTheDocument();
    });
    test("Nothing to display", () => {
        render(<DisplayResultComponent odds={undefined} />);
        const titleElement = screen.queryByText(/(100|[0-9]{1,2})\\s%/i);
        expect(titleElement).not.toBeInTheDocument();
    });
})
