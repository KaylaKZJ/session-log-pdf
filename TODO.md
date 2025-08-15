# TODO List

1. **Type Definitions**

   - Review and document the [`PdfFormData`](<app/(ops)/types/index.ts>) type in `types.ts`.
   - Ensure all field types in [`FieldType`](<app/(ops)/enums/index.ts>) enum are used and documented.

2. **Form Logic**

   - Validate that all required fields in [`INPUT_FIELDS`](<app/(ops)/constants/index.ts>) are handled correctly in form submission.
   - Add client-side validation for field types (e.g., date format, velocity as percentage).

3. **PDF Generation**

   - Confirm that the PDF generation logic uses all fields from [`PdfFormData`](<app/(ops)/types/index.ts>).
   - Add error handling for missing or invalid data during PDF creation.

4. **UI Components**

   - Create reusable input and textarea components based on [`FieldType`](<app/(ops)/enums/index.ts>).
   - Ensure hidden fields are not rendered in the UI.

5. **Accessibility & UX**

   - Add labels and ARIA attributes to form fields.
   - Provide user feedback for validation errors.

6. **Testing**

   - Write unit tests for form validation logic.
   - Add integration tests for PDF generation.

7. **Documentation**

   - Document the purpose of each constant and helper function.
   - Add usage instructions for the main form and PDF export features.

8. **Code Quality**
   - Refactor repeated logic (e.g., field rendering) into reusable functions/components.
   - Ensure consistent naming conventions and code formatting.
