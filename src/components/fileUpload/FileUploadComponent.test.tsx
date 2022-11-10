import {render, screen} from "@testing-library/react";
import React from "react";
import FileUploadComponent from "./FileUploadComponent";

describe("File upload component", () => {
    test("No content is loaded", () => {
        render(<FileUploadComponent setOdds={() => null} />);
        const fileContent = screen.queryByText(/No content loaded/i);
        expect(fileContent).toBeInTheDocument()
    });
})
