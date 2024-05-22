# Alphabet Tiles Readme

# Features
   Tile Rendering: Render a tile for each letter of the alphabet (A to Z) within a container or grid layout.
   Click Interaction: When a tile is clicked, append the corresponding letter to a string displayed in an HTML element with the ID outputString.
   Consecutive Letter Replacement: If three consecutive letters in the outputString are the same, replace them with an underscore (_). If more than three consecutive letters are the 
   same, replace them with the appropriate number of underscores.
   Validation: Ensures that the solution meets the specified requirements.
   Installation
   Follow these steps to set up the project on your local machine:

# Clone the repository:
   git clone https://github.com/sazzadurrahmaan/Alphabet-Tiles.git
   cd Alphabet-Tiles
   
#  Install dependencies:

   Make sure you have Node.js installed, then run:

   npm install
   
# Running the Project
   To run the project locally, follow these steps:

   Start the development server:
   npm run dev
# Open your browser:

   Navigate to http://localhost:5173/ to see the application in action.

# Usage
Click Tiles: Click on any tile to append its letter to the output string.
Consecutive Letter Replacement: When three or more consecutive identical letters are added to the output string, they are replaced with underscores.
Example
Initial state: outputString is empty.

After clicking "A", "B", "C", "F", "F", "F", "G": outputString displays "ABC_G".

After clicking "A" six times followed by "B": outputString displays "___B".


# Another Task: Recursive Partition
You can also check out the "Recursive Partition" project, which provides an interactive layout builder with vertical and horizontal splits.

# Recursive Partition Repository:
# https://github.com/sazzadurrahmaan/Recursive_Partition


