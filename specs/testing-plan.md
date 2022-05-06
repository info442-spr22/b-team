# Testing Plan

## Types of Testing Methods
**Manual acceptance testing** will be the main type of testing done

## Process
1. Who will test: 
    Each team member will test their assigned feature as they are developing and the product designer will do the final test.
3. When will tests be executed:
    At the end of each sprint, the product designer will go through the testing script to check all features
4. When changes are made and the developer thinks their feature meets requirements, they can open a pull request and deploy to prepare for acceptance testing.


## Test Environments
Tests will be on teams computers first by deploying to the local host. Testers will use _Chrome_ as their main environment. Once testing is complete we will then deploy to production and run the final acceptance testing. 

### Manual Acceptance Testing Script

**Navigation Bar** 
1. On every page of the website (except the log-in page), expect to see a navgivation bar at the top of the screen
2. Expect to see an image of the app logo and the name of the application on the side of the navigation bar. On the right side of the bar expect to see the text of the home, forum and account navigation buttons (navigation bar 1)
3. Expect to see options for the user when the user hovers over  the accounts button on the navigation bar. (navigation 2, 3)
    - Your posts
    - Logout 
4. Navigation links take the user to the correct page (navigation 1 c,d,e)
    - Home
    - Forum
    - Your Posts

**Log-in/Googe Authentication (User not logged-in)**
1. When first entering the website or when not logged in as a user, expect to see a sign in button for the user to click.
2. Button is a google sign in button,  a prompt asking the user to sign in via their google accounts should pop up. 
3. Users will then be able to see their google accounts and pick which one they want in order to sign in. 
4. After successfull log-in, expect to be redirected to the home/landing page with their desired google account.
5. The log in/sign up page is the only page that can be accessed by users who are not logged in to their google accounts
6. There is no nav bar displayed for users who are not signed in
7. Navigation to other pages through their URL will lead to a error page stating that the user must be logged in to access to the page.

**Home Page/Forum Page (User Logged In)****

1. On visit to home page, expect to see the overall header centered at the top of the page with an image of Washington State directly below.  (home/landing 1)
1. Expect to see the navigation bar at the top of the page and navigation links take the user to the correct pages (navigation 1)
2. Expect to see text field how up for text entry (forum 1b)
    - Able to click and type within text box
3. Expect to see forum component that shows other posts (forum 1e)
    - Forum should show other posts chronological order
    - Should allow scrolling through posts
    - Formatting of posts should be [Post Title | Location | Posted by Author | Date]
4. Post button shows up and is clickable (forum 1c)
5. Error message displays if user tries to post with no text (forum 1ci)


**Individual Forum Post**
1. Back button appears on the top left of the page, beside the post and under the navigation bar (individual forum posts 1b)
2. Back button should be clickable (individual forum posts 1b)
3. Back button correctly takes the user to their last viewed page (individual forum posts 1b)
4. All elements of the post should be displayed in the middle of the page in the correct layout (individual forum posts c)
5. Comment section displays in the correct location under the post (individual form posts 1d)
6. Comment section contains a text input area at the top (individual form posts 1e)
7. Comment text input allows the input of no more than 300 characters (individual form posts 1e)
8. Pressing the “comment” button after typing in the text field will display the text input as a comment at the top of the comment section (individual form posts 1ei)
9. Expect to see an error message beside the comment text field if the “comment” button is pressed when the text input is empty (individual form posts ieii)
10. Expect to see comments displayed in the correct chronological order (individual form posts 1f)


**Deleting Posts/Comments (stretch goal)**
1. Expect to see the navigation bar at the top of the page and navigation links take the user to the correct pages (navigation 1)
2. When viewing an individual post, expect to see a “Delete Post” button on the upper right corner of the post’s box that is clickable (deleting posts/comments 2)
3. Expect to see a confirmation message (“Are you sure you want to delete this post?”) pop-up with two buttons giving the user the options of “Yes” and “Cancel” (deleting posts/comments 3)
    - Expect to see the post get deleted if user clicks “Yes” button (deleting posts/comments 4)
    - Expect to see the individual post details again and pop-up to go away if user clicks “Cancel” button (deleting posts/comments 5)
4. Expect to see a “Delete Comment” button that is clickable on a comment (deleting posts/comments 6)
5. Expect to only be able to delete a comment when logged in (deleting posts/comments 7)
6. Expect to see unclickable delete buttons if user is not logged in (deleting posts/comments 8)

**Your Posts (stretch goal)**
1. Expect to see the navigation bar at the top of the page and navigation links take the user to the correct pages (navigation 1)
2. Expect to see the page titled “Your Posts” centered under the navigation bar (your posts 2)
3. Expect to see the user’s account information (name, account) below the title on the left side (your posts 3)
4. Expect to see previews of the user’s posts displayed in chronological order (newer posts at the top, older posts at the bottom) below the title on the right side (your posts 4)
5. Expect to be able to scroll up and down the page if the user has a lot of posts (your posts 5)
6. Expect the posts to be clickable and redirects to the page with the individual post’s full details and comments (your posts 6)

 


## Defect Management
If defects are found during testing this bug will be reported to team PM. The PM will notify developers of the bug via github milestones/issues in the comments. Then the PM will divide up the work based on the availability or tasks of developers.
