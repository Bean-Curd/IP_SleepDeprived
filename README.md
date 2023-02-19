<h2>IP SleepDeprived Slimepedia Website</h2>

GitHub Link: https://bean-curd.github.io/IP_SleepDeprived/

A Genshin website that allows users to collect Genshin characters as slimes. Players answer trivia questions to unlock new information on the characters, and get rewards.

<h2>Design Process</h2>

The Slimepedia website is targeted at Genshin Players looking to know more about Genshin Characters or get in-game rewards like Primogems or Character Materials.
The website will reward users for answering trivia questions correctly, and 2 different kinds of trivia will be displayed: Character Trivia and Genshin Trivia.
A Slimepedia acts as a encyclopedia to store information that users have collected about the characters.

- As a user, I want to know more about Genshin Characters, so that I can deepen my knowledge of the game
- As a user, I want to get Primogems and Character Materials for my Genshin account, so that I can pull for more characters and upgrade my characters
- As a user, I want to test my knowledge of the game, so that I can see how much I know about Genshin
- As a user, I want a convenient location to store the Character information I have unlocked, so that it would be easier for me to access

<h2>Features</h2>

The Slimepedia website would consist of:

1. A login page for users to sign in using their Genshin accounts
2. A homepage for users to access the Character Trivia, Genshin Trivia and Slimepedia pages
3. A profile button for users to access the shop and sign out
4. A shop section for users to see their Primogems and convert them over to their Genshin Accounts
5. A Character Trivia page to display Character Questions and buttons with their answers, a 30 second countdown timer for the questions and a help button for users to give the question they are struggling with to another user
6. A Genshin Trivia page to display general Genshin Questions and buttons wth their answers, a 30 second countdown timer for the question and display of the user's unlocked character <strong>(If a favourite character has not been selected, a random character is chosen)</strong>
7. A Slimepedia page for the user to see the image of the character, information unlocked of the character and the 3D model of the character

Future Features:

- The help option would give the question to another player who logged in
- If a question the user requested for help for is answered correctly, the user would be given the rewards the next day
- Gives the user Character Materials for the 1st, 10th and 20th questions of each character answered
- Unlocks information according to Character Trivia questions answered for the first time
- A favorite option for characters in Genshin Trivia
- Implement the convert 160 Primogems for new character information in the shop
- More Characters would be added for more content
- Randomized Enemies and Reward Drops based on those enemies in the Genshin Trivia

<h2>Technologies Used</h2>

HTML -> For the content of the pages of the website
CSS -> To format and arrange the contents of the website
JavaScript -> For the API, button responses and functions used in the website

RestDB -> The database for our user accounts
GitHub -> Where the website will be uploaded

Official W3C Validator -> To check our HTML files (https://validator.w3.org/)
Official (Jigsaw) Validator -> To check our CSS files (https://jigsaw.w3.org/css-validator/)

<h2>Testing</h2>

IMPORTANT: If Restdb does not work you can switch between the APIKEYs and GET/PUT urls

e.g.

// const APIKEY = "63e531fa478852088da67f67";
const APIKEY = "63ee3468478852088da68361"; //The demo one
// const APIKEY = "63eed80f478852088da6838f"; //The demo two

If it still does not the database fields are shown in the screenshot under Database_Fields_Screenshot

1. Login page:
   <li>i. Start from index.html (The main account is Test1@gmail.com, Test1 -> Each resddb database has 5 accounts: Test1@gmail.com, Test1; Test2@gmail.com, Test2; Test3@gmail.com, Test3; Test4@gmail.com, Test4; Test5@gmail.com, Test5)(All accounts start with 0 tries)</li>
   <li>ii. Try to submit an empty form and an error message should appear</li>
   <li>iii. Try to submit an invalid email (without @ + anything after) and upon hover a message should appear telling you to fill it out</li>
   <li>iv. Try entering the email and password without capitial letters and it should still be wrong</li>
   <li>v. Submit the correct account and a loading animation should play and bring you to the homepage</li>

2. Homepage:
   <li>Tap the top right Profile icon to go to the Profile Page</li>
   <li>Tap the Character Trivia to go to the Character Trivia Page</li>
   <li>Tap the Genshin Trivia to go to the General Trivia Page</li>
   <li>Tap the Slimepedia to go to the Slimepedia Page</li>

3. Profile page:
   <li>i. Test that the back arrow in the top left brings you back to the Homepage</li>
   <li>ii. Check that a primo count has been created under inspect -> application as email+primo | 0  </li>
   <li>iii. Test that the 1st button alerts that the Primogems have been converted if you have enough (There is a code in profile.js line 9 to add 450 Primogems)</li>
   <li>iv. Test that the 1st button alerts that you do not have enough Primogems if you do not have enough</li>
   <li>v. Test that the Sign Out button brings you back to the Login Page</li>

4. Character Trivia page:
   <li>i. You should see a 30 second timer, a question, 4 options and a help button (There are 5 tries a day, it might be easier testing with your own database so you can reset the tries)</li>
   <li>ii. Check that under inspect -> application there is the email+question number | 0,0 (You can check the question number in character_trivia.js line 7)(It is the position of the question so the first question for the first character is 00)</li>
   <li>iii. Test that a alert pops up saying that time is up when the countdown ends, this is counted as a wrong answer</li>
   <li>iv. Test that a alert pops up saying that the answer is wrong when a wrong answer is clicked</li>
   <li>v. Test that the help button brings you to the Ask Help Page and that the Ok button brings you back to the Character Trivia Page, this counts as a try for today</li>
   <li>vi. Test that the help button no longer works in the same day</li>
   <li>vii. Test that if a correct answer is picked (The correct answers are the 1st one in the list in character_trivia.js: e.g. What is Venti's element?(Anemo(Hydro(Dendro(Voido -> the correct answer is Anemo), the question in inspect -> application changes from email+question number | 0,0 to email+question number | 1,1</li>
   <li>viii. Test that when 5 tries are up it returns you to the Homepage</li>
   <li>ix. Test that it no longer lets you in on the same day</li>

   Harder parts to test:
   <li>Test that if a question is answered correctly for the second time, an alert would appear saying you have answered this question before and get 2 Primogems, and the question in inspect -> application changes from email+question number | 1,1 to email+question number | 1,2 and the primonum in inspect -> application increaes by 2</li>
   <li>ix. Test that if a question is answered on the day after the quiz is started</li>

<h2>Credits</h2>

Media drawn by us
