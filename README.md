A simple Events Page built with React and Chakra UI to display and manage events. The app allows users to browse, filter, add, edit, and delete events with relevant details.

Features:

Event List: Displays a list of all events with details like title, description, categories, and times.
Search and Filter: Search for events by title or description, and filter them by categories.
Add/Edit/Delete Events: Users can add new events, edit existing ones, or delete them.
Responsive Design: The app is responsive and works across different screen sizes.


How the App Works

The app is structured with two main sections:

Events List Page: Shows all events and includes search and category filtering functionality.
Event Detail & Edit Page: Displays detailed information for a selected event and provides options to edit or delete it.
Structure
Components: Reusable UI components like event cards, search bars, forms for adding/editing events, and category checkboxes are located in the components folder.
Pages: Main views like the events list and individual event details are structured as pages in the pages folder.


Installation and Setup:
1.Install dependencies:
npm install
2. Run the app:
npm start
3. Start de JSON-server:
json-server --watch db.json --port 3000




