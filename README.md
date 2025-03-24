# Multi-Step Form with React

A responsive multi-step form with three steps, featuring data validation, error handling, and local storage persistence.

## Features

- Three-step form with personal, address, and confirmation sections
- Tabbed navigation between steps
- Client-side validation with error messages
- Data persistence using local storage
- Responsive design for all screen sizes
- State management with React hooks

# Usage
1. Fill out personal information (Name, Email, Phone)
2. Proceed to address information (Address, City, State, ZIP)
3. Review all entered data on the confirmation page
4. Submit the form

Data will be automatically saved to local storage as you progress through the steps.

# Validation Rules

* All fields are required
* Email must be valid format (user@example.com)
* Phone must be at least 10 digits
* ZIP code must be 5 digits
