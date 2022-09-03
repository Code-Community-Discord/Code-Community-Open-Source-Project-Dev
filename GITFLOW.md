# Git Workflow

This document provides best practices for collaborators when interacting with GitHub for this project. 

Git prompts are also provided to address common requests.

## Prerequisites

1. Create a personal account on <a href="https://github.com/">GitHub</a>. 

2. Install <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Git</a>.

## Visual Aid

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--M_fHUEqA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/128hsgntnsu9bww0y8sz.png" width="600px">

## Getting Started

1. Clone the remote repository to your local device.
* Select or create a new folder where you want the project contents to be stored. 
* Open a shell of your choice and navigate to the folder you created. For example:
    ```
    cd "C:\Users\Darius\Documents\Project Folder"
    ```
* Open the GitHub repository you want to clone and copy the Web URL from GitHub. 

    <img src="https://i.imgur.com/3kxmfR7.png" width="1200px">
* Enter the command: 
    ```
    git clone "<repository_URL>"
    ```

2. Confirm you have write access to the repository. Contact the Product Owner if you do not currently have write access.  

3. Create your own branch. This will become your working directory. Your branch name can be either your first name or Discord username.  
    ```
    git checkout -b <your_name>
    ```

## Making Changes to the Project

### Make this first step a habit
------
Before writing any code, it's a good idea to pull the latest updates from the remote repository into your local main branch, and merge those updates into the branch you're working on.
* Fetch the latest project updates.
    ```
    git fetch
    ```
* Checkout the main branch.
    ```
    git checkout main
    ```
* Pull the latest changes.
    ```
    git pull
    ```
* Checkout your branch.
    ```
    git checkout <your_branch_name>
    ```
* Pull the latest changes from your branch, if any.
    ```
    git pull
    ```
* Merge your the main branch into your working branch. 
    ```
    git merge <your_branch> main
    ```
    *This command essentially means: git merge "THIS_branch" with what's in "THAT_branch"*
* Work on your changes to the project. 

### Submitting Changes 
------
Follow these steps when you have finished editing your files.
* Confirm you are still working in your branch to avoid submitting changes to an incorrect branch. We do not want to push changes to the main branch before they have been reviewed. 
    ```
    git branch
    ```
    Your current local branch will be marked with an asterisk (*).
* Add your files to the staging area. You can add files one by one:
    ```
    git add <file_name>
    ```
    Or, you can add all files:
    ```
    git add .
    ```
* Commit your changes to the local repository. 
    ```
    git commit -m "<your_message>"
    ```
    * Note that commit messages must follow a specific format: 

        **(type)(scope)**: **(subject)**

        Where **(scope)** is optional. 
        
        For more details, see <a href="https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716">Semantic Commit Messages</a>.

* Push your changes to your branch. 
    ```
    git push
    ```
* Submit a Pull Request on the GitHub site. You can add a more descriptive message of what you are pushing here. If there are any questions, conflicts, or issues with what you are pushing, please note them here as well. 

    For steps on submitting a pull request, refer to the GitHub documentation <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request">here</a>.

    <img src="https://i.imgur.com/I7WQbTM.png" width="800px">