# Testing Plan

## Types of Testing Methods
**Manual testing** will be the main type of testing done

## Process
1. Who will test: Each team member will test their assigned test script
2. When will tests be executed: At the end of each sprint
3. When changes are made, update to branch and deploy after each sprint to test on computer

## Test Environments
Tests will be on teams computers first by deploying to the local host. Testers will use _Chrome_ as their main environment. Once testing is complete we will then deploy to production.

### Manual Acceptance Testing Script

**Navigation Bar** 
1. Expect to see an image of the app logo and the name of the application on the side of the navigation bar. On the right side of the bar expect to see the text of the home, forum and account navigation buttons (navigation bar 1)
1. Expect to see options for the user when the user hovers over  the accounts button on the navigation bar. (navigation 2, 3)
    - Your posts
    - Logout 
1. Navigation links take the user to the correct page (navigation 1 c,d,e)
    - Home
    - Forum
    - Your Posts

**Home Page**

1. Expect to see the overall header centered at the top of the page with an image of Washington State directly below.  (home/landing 1)
2. Expect to see 2 sections below titled “About” with a small description of the product and the “FAQ” portion (home/landing 4-6). 
3. Navigation links take the user to the correct page (navigation 1 c,d,e)
    - Home
    - Forum
    - Your Posts

**Forum Page**

**Individual Forum Post**
1. Expect to see the navigation bar at the top of the page (navigation 1)
2. Navigation links take the user to the correct pages (navigation 1 c, d, e)
3. Back button appears on the top left of the page, beside the post and under the navigation bar (individual forum posts 1b)
4. Back button should be clickable (individual forum posts 1b)
5. Back button correctly takes the user to their last viewed page (individual forum posts 1b)
6. All elements of the post should be displayed in the middle of the page in the correct layout (individual forum posts c)
7. Comment section displays in the correct location under the post (individual form posts 1d)
8. Comment section contains a text input area at the top (individual form posts 1e)
9. Comment text input allows the input of no more than 300 characters (individual form posts 1e)
10. Pressing the “comment” button after typing in the text field will display the text input as a comment at the top of the comment section (individual form posts 1ei)
11. Expect to see an error message beside the comment text field if the “comment” button is pressed when the text input is empty (individual form posts ieii)
12. Expect to see comments displayed in the correct chronological order (individual form posts 1f)


**Deleting Posts/Comments (stretch goal)**

**Your Posts (stretch goal)**

**Googe Autentication**

## Defect Management
If defects are found during testing this bug will be reported to team PM. The PM will notify developers of the bug via github milestones/issues in the comments. Then the PM will divide up the work based on the availability or tasks of developers.