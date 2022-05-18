# Requirements
This document defines all requirements for the product. It will be used as a basis for creating development tasks and the development phase will be graded against completion of these requirements.

There are two types of requirements: core (those the team commits to meeting during development) and stretch (those the team would like to complete, but cannot commit to). Stretch goals are clearly labeled.

## General 
`complete #40` Every page in the site includes a navigation bar with links to all pages:
<br />
> Note: If a user isn't logged in, they will only see the `Login` option on the navigation page
- Home
- Create Post 
- Log out button which will logout the user

## Navigation Bar
1. `complete #40` When a user is not logged in the option the following Navigation bar contains:
    - `Complete #40` "Login" as a navigation button 
2. `complete #40` When a user is logged in the following Navigation bar contains (from left to right): 
    - `Complete #73` An image of the app logo 
    - `Complete #73` Name of the app
    - `Complete #40`"Home" as a navigation button
    - `Complete #40`"Create Post" as a navigation button
    - `Complete #40`"Logout" as a navigation button
    
## Home/Landing Page
1. `complete #33` When users are not logged in the home page, it will contain the following
    - A divided page of two sections
    - Our logo and product title 
    -`complete #78` Below in a paragraph is the slogan and a short description of our application
    
2.  `complete #32` If a user is logged in, the page has three sections
    - Better Educators logo
    - slogan and paragraph with description of application
    - previous posts from other users
> Note: `complete #32` User will be able to scroll through and view all past posts

## Home Option 2 (Stretch Goal): 
### Interactive Washington State Map `incomplete`
> Example diagram:  https://www.nytimes.com/interactive/2021/us/washington-covid-cases.html
1. The interactive map will allow users to hover and click their choice of county
2. Once county of choice is clicked a popup appears including the resource link and county name (interactive map)
3. When users click on their county of choice, they will be redirected to its respective resource page (external from our site)

## Your Posts Page (Stretch Goal) `incomplete`
1. Title of the page (“Your Posts”) is centered at the top of the page
2. Below the title on the left side, the user’s account information is displayed (name, username)
3. Below the title on the right side, previews of the user’s posts are displayed in chronological order (older posts towards the bottom, newer posts towards the top)
4. If the user has a large amount of posts, they will be able to scroll up and down on the page to view them
5. Clicking on the post previews (any area within the sectioned lines) will redirect the user to a page with the post’s full details and comments

## Forum/Home Page
1. `complete #30` Users will be able to access the forum while on the `Home` navigation tab after logging in
2. `complete #32` The forum page will include:
    - `complete #40` Navigation bar at the tope of the page
    - `complete #32` When a user is at the top of the page, they can scroll to view past posts
    - `complete #32` Forum will be organized by date with the earliest being at the top of the page
    - `complete #32` Forum will show multiple posts from the users
    - `complete #32` Forum format will be as follows: 
       - Post Title
       - Post Body
       - Author of the post
    - `complete #32` Forum page will be in one section, with the main forum component centered in the screen
    - `complete #52` Clicking on the individual post within the post boundaries will redirect the user to a page with further details about that post
    - **(Stretch goal) `incomplete`:** Forum will have a search bar above the forum posts to allow users to find posts with certain keywords

## Individual Forum Posts

1. `complete #52` Users can access the full page for an individual post upon clicking forum post previews from the “Forum” page and the “Your Posts” page
2. Individual Forum Post page will include:
    - `complete #40` A navigation bar at the top of the page
    - `complete #63` A back button on the top left of the page to navigate back to the page they were previously viewing
    - `complete #53` The post of interest in the middle of the page
        - `complete #53` The post will display the title, location, author, and date in the top section of the post area
        - `complete #53` The bottom of the post area will display the post’s body text
    - `complete #53` Under the post, there is a comment section
    - `complete #53` Inside the comment section, at the very top, there is a text field for the user to type a comment
        - `complete #53` Below the text field, there is a button labeled ‘Comment” that the user can click to submit their comment
        - `complete #69` An error message beside the text field will display if the user presses the “comment” button when the text field is empty
    - `complete #54` Under comment text field, past comments from the user and other users display in chronological order (new posts towards the top, older posts towards the bottom)

## Deleting Posts/Comments (Stretch goal):
1. `complete #40` Contains a navigation bar at the top of the page
1. `complete #66` When pressed into the view of the post, button that has “delete posts” on the upper right corner of the post box
1. `complete #68` Once button has been clicked a confirmation message will pop up “Are you sure you want to delete post” with two buttons giving the option of yes or cancel
1. `complete #68` If a user selects yes, the post will be deleted permanently
1. `complete #68` If a user selects cancel, the screen will be back to the post view.
1. `complete #68` If a user wants to delete a comment, a button with text “delete comment” must be prompted or clicked on to delete comment
1. `complete #68` The user can only delete posts/comments when logged in
1. `complete #68` If the user is not logged in, delete buttons on the posts/comments will be static.

## Google Authentication/Login 
1. `complete #30` At the home page when not logged in users will select the login button at the top of the nav bar and be redirected to a page that includes “Sign in with google” 
2. `complete #30` Users will be prompted to login with their google accounts
3. `complete #30` Page will have a google sign in button that is used to automatically rendered sign-in button
4. `complete #30` Once clicked the user will be prompted with a popup window asking which of their google accounts they will be logging in with.

# Non-Functional Requirements

## Reliability 
Keeping links/resources up to date through a comment form for the resource page. If a resource provided is out of date/no longer active than a comment form could be submitted

1. `complete #73` Contains a report button on the home page and pages for individual posts
2. `complete #73` Report button opens a pop-up
3. `complete #73` Report-pop up contains check-boxes/radio buttons to select the type of issue the resource is being faced with. Issues include:
    - Invalid link
    - Inappropriate link/content
    - Fraud
4. `complete #73` Report pop-up contains a text input box underneath check-boxes/radio buttons to describe the issue in further detail 
5. `complete #76` Report pop-up contains a submit button at the bottom of the pop-up
6. `complete #76`Submitting a report displays a confirmation message in the same pop-up that the user’s report was received
7. `complete #73` Contains a form for educators to submit which includes:
    - Name 
    - School 
    - Resource 
    - Description section 
    - Form of contact
8. `complete #73` Contains instructions for the form
9. `complete #73` Contains a submit button on form to push upon completion
    - Contains text about completion of form

## Usability/Accessibility
Website is responsive and usable on mobile devices, laptops, and desktops

1. `complete #75` Media Queries work accordingly for all screen sizes:
    - Phones
    - Laptops
    - Tablets
2. Webpage has fast load time (< 1.8 sec) in accordance with FCP guidelines
3. User friendly/Intuitive design


