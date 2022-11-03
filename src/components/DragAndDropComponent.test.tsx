import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DragAndDropComponent from "./DragAndDropComponent";


describe("Default state of DragAndDropComponent", () => {

    test("No file uploaded", () => {
        render(<DragAndDropComponent setEmpireInformation={() => null} />);
        const fileInput : any = screen.getByLabelText(/Click to upload/i);
        expect(fileInput.files.length).toBe(0);
    });

    test("Input file is present", () => {
        const component = render(<DragAndDropComponent setEmpireInformation={() => null} />);
        const fileInput = component.container.querySelector("#dropzone-file")
        expect(fileInput).toBeInTheDocument();
    });
})

describe("Upload a file", () => {
    test("A file is uploaded", () => {
        const testFile = new File(["hello"], "test.json");
        render(<DragAndDropComponent setEmpireInformation={() => null} />);

        const fileInput : any = screen.getByLabelText(/Click to upload/i);
        expect(fileInput.files.length).toBe(0);

        userEvent.upload(fileInput, testFile);

        expect(fileInput.files.length).toBe(1);
    });
})
