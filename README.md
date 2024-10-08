# Tech Committee Workshops

Welcome to the **Tech Committee Workshops** repository! This repository contains the files and resources you’ll need to follow along with the workshops, each of which will cover different topics required to work on the full-stack SSE Website Rebuild project. By the end of the workshop series, you'll have developed a solid foundation in the tools necessary to work on this project.

### Workshop Topics
The workshops will cover the following topics:

1. **JavaScript** – Get comfortable with the fundamentals of JavaScript.
2. **TypeScript** – Learn how TypeScript extends JavaScript by adding types.

WIP

### Prerequisites

Make sure you have the following tools installed before you begin:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server (Ritwick Dey) VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### How to Use This Repository

1. **Fork this repository**:  
   At the top right of this page, click the **Fork** button. This creates a copy of the repository under your GitHub account, where you can work on your own version of the project without affecting the original.

2. **Clone your forked repository to your local machine**:
   After forking, you'll need to copy (or **clone**) the repository to your computer so you can work on it locally.
   
   Here’s how to do it:
   - Go to your **GitHub account** and navigate to your forked repository.
   - Click the green **Code** button, and then copy the URL (it will look like `https://github.com/your-username/Workshops.git`).
   - Open a terminal or command prompt on your computer, and navigate to the folder where you want to store these tutorials:
     ```bash
     cd path/to/destination/folder
     ```
   - Run the following command (replacing `your-username` with your GitHub username):
     ```bash
     git clone https://github.com/your-username/Workshops.git
     ```
   - This will create a local copy of the repository on your machine.

3. **Navigate into the folder of the workshop you're currently working on**:
   Once you've cloned the repository, navigate to the directory of the specific workshop you want to work on using the `cd` (change directory) command:
   ```bash
   cd Workshops/workshop-01-javascript
   ```
   Repeat this for other workshops as you progress through them.

4. **Open the files in a code editor**:
   If you're using a code editor like Visual Studio Code, you can open the entire project by running:
   ```bash
   code .
   ```
   Alternatively, you can open the project manually from your editor's interface.

5. **Follow the instructions in the workshop's `README.md`**:
   Each workshop folder contains a `README.md` file with detailed instructions, examples, and exercises. Be sure to read it carefully to understand what to do next.

To be able to pull new changes from this repository:
1. **Add the upstream repository** to your local git configuration:
   First, navigate to your forked repository directory in the terminal.

   Then, run:
   ```bash
   git remote add upstream https://github.com/rit-sse/Workshops.git
   ```

   This command adds a new remote called `upstream`, which points to the original repository from which you forked.

2. **Fetch the latest changes** from the upstream repository:
   ```bash
   git fetch upstream
   ```

3. **Merge or rebase the changes** from the upstream repository into your local branch:
   If you are on the branch that you want to update (e.g., `main`), run:
   ```bash
   git merge upstream/main
   ```

4. **Push the changes to your forked repository** (if necessary):
   After merging or rebasing, you can push the updated changes to your forked repository:
   ```bash
   git push origin main
   ```

After these steps, you should be able to pull updates from the main Workshops repository but still push your workshop progress to your own forked copy.
