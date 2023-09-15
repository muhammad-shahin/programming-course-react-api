
# Programming Course Registration - Project


## Here are top features of this Projects
* Multi Selection Check : Users can't select multiple course at once. User can only select one course for one time.
* Multi Selection Warning : If user try to slect same course twice then a popup will show to notify the user.
* Credit Check: By default user have 20 credit to spend on course. Every time user select a new course his/her remaining credit balance get updated with remaining balance. When user credit decresses to 0 and user try to select another course a popup is shown to notify the user.
* Multi-functionlity on One Click: In a signle 'Select' button clcik multiple data get updated.

## How I managed the states?
In This React Project I manages the state of various variables using the useState hook. Let's break down the main state management in this project:
* courses, selectedCourses, totalCredit, remainingCredit, totalPrice, showToast, isModalOpen, modalTitle, and modalMessage are all initialized as state variables using the useState hook. Each of these variables represents a different aspect of the application's state.

Here are the main satate that is being used in this project to manage multiple operation:

    1. courses: Holds course data fetched from a JSON file.
    2. selectedCourses: Stores the selected courses.
    3. totalCredit: Tracks the total credit of selected courses.
    4. remainingCredit: Represents the remaining credit limit.
    5. totalPrice: Keeps the total price of selected courses.
    6. showToast: Manages an array of toast notifications.
    7. isModalOpen, modalTitle, and modalMessage: Control the visibility and content of a modal dialog.

In this project I also used the useEffect hook to fetch initial data and includes functions for selecting courses and handling modals.