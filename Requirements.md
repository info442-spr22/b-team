# Requirements
This document defines all requirements for the product. It will be used as a basis for creating development tasks and the development phase will be graded against completion of these requirements.

There are two types of requirements: core (those the team commits to meeting during development) and stretch (those the team would like to complete, but cannot commit to). Stretch goals are clearly labeled.

## General

Every page in the site includes a navigation bar with links to all pages:  
- Home (Washington State Map)
- Forum
- Account

## Navigation Bar
1. Navigation bar contains (from left to right):
    - An image of the app logo
    - Name of the app
    - “Home” as a navigation button
    - “Forum” as a navigation button
    - “Account” as a drop down that opens when the user hovers over the word
2. When the user hovers over the word “Account”, the following buttons display in the drop down menu:
    - “Your posts” button to navigate to a page that displays all posts that the user has made
    - “Log out” button that signs out the user and redirects them to the log-in page
3. The drop down menu is hidden when the user is no longer hovering over the “Account” area



## Home/Landing Page

1. Contains Navigation bar at the top of the page with options to navigate to the home page and forum page
2. Contains an overall header with description of the app
3. Below the header will be a photo of washington state,
4. The page is divided into 2 sections. The about, and the FAQ, Users can scroll through to view the full page.
5. The first section will be the content of the About description including the following:
    - About title
    - About description underneath the title
    - Image of logo to the left
6. The second section will be the FAQ with the following information:
    - Image of an question mark or something easy to spot relating to FAQs
    - Numbered questions bolded, with answer to question directly underneath


## Home Option 2 (_Stretch Goal_) :

**Interactive Washington State Map**

Example diagram: https://www.nytimes.com/interactive/2021/us/washington-covid-cases.html

1. The interactive map will allow users to hover and click their choice of county
2. Once county of choice is clicked a popup appears including the resource link and county name (interactive map) 
3. When users click on their county of choice, they will be redirected to its respective resource page (external from our site)

## Your Posts Page (Stretch)
1. Contains a navigation bar at the top of the page
2. Title of the page (“Your Posts”) is centered at the top of the page
3. Below the title on the left side, the user’s account information is displayed (name, username, role) 
4. Below the title on the right side, previews of the user’s posts are displayed in chronological order (older posts towards the bottom, newer posts towards the top)
5. If the user has a large amount of posts, they will be able to scroll up and down on the page to view them
6. Clicking on the post previews (any area within the sectioned lines) will redirect the user to a page with the post’s full details and comments

## Forum Page
1. The forum page will include: 
    - Navigation bar at the top of the page
    - Text field on top of the page (below the navigation bar) to enable user to post to the forum
        - Text field will have two sections for the post title and the post body text.
    - Beside the text field to create a post, there is a “post” button that the user can press to publish their post
        - An error message beside empty text fields will display if the user presses the “post” button when the text fields are empty
    - A search bar above the forum posts to allow users to find posts with certain keywords **(stretch)**
        - Search bar finds relevant forum posts after the user presses enter (the search bar does not search dynamically as the user is typing) 
    - At the top of the page, the user can scroll up and down to view posts from the past. 
        - Forum will be organized by date, with older posts towards the bottom of the list and recent posts higher on the list. 
        - Forum will show multiple posts from users
        - Forum format will be as follows:

            `[ Post Title | Location | Posted by Author | Date ]
Example => Need laptops | Tacoma | Posted by Angela Houston|02/12/22`
        - Forum page will be in one section, with the main forum component in the middle of the user’s screen
1. Clicking on any area of a forum post (within the sectioned lines) in the list will redirect the user to a page with full details about the post


## Individual Forum Posts

1. Users can access the full page for an individual post upon clicking forum post previews from the “Forum” page and the “Your Posts” page
2. Individual Forum Post page will include:
    - A navigation bar at the top of the page
    - A back button on the top left of the page to navigate back to the page they were previously viewing
    - The post of interest in the middle of the page
        - The post will display the title, location, author, and date in the top section of the post area
        - The bottom of the post area will display the post’s body text
    - Under the post, there is a comment section
    - Inside the comment section, at the very top, there is a text field for the user to type a comment
        - Below the text field, there is a button labeled ‘Comment” that the user can click to submit their comment
        - An error message beside the text field will display if the user presses the “comment” button when the text field is empty
    - Under comment text field, past comments from the user and other users display in chronological order (new posts towards the top, older posts towards the bottom)


## Deleting Posts/Comments (stretch)
1. Contains a navigation bar at the top of the page
1. When pressed into the view of the post, button that has “delete posts” on the upper right corner of the post box
1. Once button has been clicked a confirmation message will pop up “Are you sure you want to delete post” with two buttons giving the option of yes or cancel
1. If a user selects yes, the post will be deleted permanently
1. If a user selects cancel, the screen will be back to the post view.
1. If a user wants to delete a comment, a button with text “delete comment” must be prompted or clicked on to delete comment
1. The user can only delete posts/comments when logged in
1. If the user is not logged in, delete buttons on the posts/comments will be static.

## Google Authentication
1. users will be prompted to login with their google accounts
2. Page will have a google sign in button that is used to automatically rendered sign-in button
3. Once clicked user will be prompted with popup window asking which of their google accounts they will be logging in with. 
# Non-Functional Requirements

## Reliability 
Keeping links/resources up to date through a comment form for the resource page. If a resource provided is out of date/no longer active than a comment form could be submitted

1. Contains a report button on the home page and pages for individual rentals
2. Report button opens a pop-up
3. Report-pop up contains check-boxes/radio buttons to select the type of issue the resource is being faced with. Issues include:
    - Invalid link
    - Inappropriate link/content
    - Fraud
4. Report pop-up contains a text input box underneath check-boxes/radio buttons to describe the issue in further detail 
5. Report pop-up contains a submit button at the bottom of the pop-up
6. Submitting a report displays a confirmation message in the same pop-up that the user’s report was received
7. Contains a form for educators to submit which includes:
    - Name 
    - School 
    - Resource 
    - Description section 
    - Form of contact
8. Contains instructions for the form
9. Contains a submit button on form to push upon completion
    - Contains text about completion of form

## Usability/Accessibility
Website is responsive and usable on mobile devices, laptops, and desktops

1. Media Queries work accordingly for all screen sizes:
    - Phones
    - Laptops
    - Tablets
2. Webpage has fast load time (< 1.8 sec) in accordance with FCP guidelines
3. User friendly/Intuitive design
