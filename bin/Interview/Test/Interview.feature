Feature:Testing for different scenarios on interviewstreet.com

Scenario: The interviewstreet url is launched successfully

Given interviewstreet is open in browser
Then i validate whether interviewstreet url is launched successfully

Scenario: The sign up is not successful when firstname field is empty

Given interviewstreet is open in browser
When i click on the signup tab
And i do not enter firstname but enter the different sign up fields and click on sign up
Then i validate whether error message for firstname is displayed
        
Scenario: The sign up is not successful when email address field is empty

Given interviewstreet is open in browser
When i click on the signup tab
And i do not enter email address but enter the different sign up fields and click on sign up
Then i validate whether error message for email address is displayed

Scenario: The sign up is not successful when enter invalid email address 

Given interviewstreet is open in browser
When i click on the signup tab
And i enter invalid email address and enter the different sign up fields and click on sign up
Then i validate whether error message for invalid email address is displayed

Scenario: The sign up is not successful when password field is empty

Given interviewstreet is open in browser
When i click on the signup tab
And i do not enter password but enter the different sign up fields and click on sign up
Then i validate whether error message for password is displayed			
		
Scenario: The sign up is not successful when company name field is empty

Given interviewstreet is open in browser
When i click on the signup tab
And i do not enter company name but enter the different sign up fields and click on sign up
Then i validate whether error message for company name is displayed

Scenario: The sign up is not successful when phone number field is empty

Given interviewstreet is open in browser
When i click on the signup tab
And i do not enter phone number but enter the different sign up fields and click on sign up
Then i validate whether error message for phone number is displayed

Scenario: The sign up is not successful when enter invalid phone number 

Given interviewstreet is open in browser
When i click on the signup tab
And i enter invalid phone number and enter the different sign up fields and click on sign up
Then i validate whether error message for invalid phone number is displayed

Scenario: The sign up is successful

Given interviewstreet is open in browser
When i click on the signup tab
And i enter the different sign  up fields and click on sign up
Then i validate whether sign up is successful

Scenario: The sign up is not successful when enter already registered email address

Given interviewstreet is open in browser
When i click on the signup tab
And i enter already registered email address and the different sign up fields and click on sign up
Then i validate whether error message for already registered email address is displayed

Scenario:Login in Successful

Given interviewstreet is open in browser
When i click on the Login tab
And i enter the different login fields and click on login
Then i validate whether login is successful

Scenario:Login is not successful when email id wrong
 
Given interviewstreet is open in browser
When i click on the Login tab
And i enter the wrong email id and correct password fields and click on login
Then i validate  login is not successful for wrong email id

Scenario:Login is not successful when password is wrong

Given interviewstreet is open in browser 
When i click on the Login tab
And i enter the correct email id and wrong password fields and click on login
Then i validate  login is not successful for wrong password

Scenario:Login is not successful when email id and password both are wrong

Given interviewstreet is open in browser
When i click on the Login tab
And i enter the wrong email id and wrong password fields and click on login
Then i validate  login is not successful for incorrect email id and password

Scenario:Login is not successful when password field is empty

Given interviewstreet is open in browser
When i click on the Login tab
And i enter email id and click on login
Then i validate login is not successful for empty password field	

Scenario:Login is not successful when email id field is empty

Given interviewstreet is open in browser
When i click on the Login tab
And i enter password and click on login
Then i validate login is not successful for empty email id field

Scenario:Check forgot password link working

Given interviewstreet is open in browser
When i click on the Login tab
And i click the forgot password link and enter email id and click reset password	                  
Then i validate how to reset password message displayed

		
		