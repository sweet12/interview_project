$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027Interview\\Test\\Interview.feature\u0027");
formatter.feature({
  "id": "testing-for-different-scenarios-on-interviewstreet.com",
  "description": "",
  "name": "Testing for different scenarios on interviewstreet.com",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-interviewstreet-url-is-launched-successfully",
  "description": "",
  "name": "The interviewstreet url is launched successfully",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "i validate whether interviewstreet url is launched successfully",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 23546599702,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.interviewstreet_page_launched()"
});
formatter.result({
  "duration": 3890534417,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-firstname-field-is-empty",
  "description": "",
  "name": "The sign up is not successful when firstname field is empty",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "i do not enter firstname but enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "i validate whether error message for firstname is displayed",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 25623545436,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 870272924,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_firstname_empty()"
});
formatter.result({
  "duration": 3577570709,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_firstname_error()"
});
formatter.result({
  "duration": 2943690694,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-email-address-field-is-empty",
  "description": "",
  "name": "The sign up is not successful when email address field is empty",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "i do not enter email address but enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "i validate whether error message for email address is displayed",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 19417644638,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 669458557,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_email_empty()"
});
formatter.result({
  "duration": 4776024759,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_email()"
});
formatter.result({
  "duration": 3241106327,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-enter-invalid-email-address",
  "description": "",
  "name": "The sign up is not successful when enter invalid email address",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 24
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "i enter invalid email address and enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "i validate whether error message for invalid email address is displayed",
  "keyword": "Then ",
  "line": 27
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 21508939517,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 736883599,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_email_invalid()"
});
formatter.result({
  "duration": 3923733867,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_invalid_email()"
});
formatter.result({
  "duration": 2427562889,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-password-field-is-empty",
  "description": "",
  "name": "The sign up is not successful when password field is empty",
  "keyword": "Scenario",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 31
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "i do not enter password but enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "i validate whether error message for password is displayed",
  "keyword": "Then ",
  "line": 34
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 18655154174,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 601626811,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_password_empty()"
});
formatter.result({
  "duration": 5322264443,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_password_empty()"
});
formatter.result({
  "duration": 2158982233,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-company-name-field-is-empty",
  "description": "",
  "name": "The sign up is not successful when company name field is empty",
  "keyword": "Scenario",
  "line": 36,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 38
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 39
});
formatter.step({
  "name": "i do not enter company name but enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 40
});
formatter.step({
  "name": "i validate whether error message for company name is displayed",
  "keyword": "Then ",
  "line": 41
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 20570428626,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 366801512,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_company_empty()"
});
formatter.result({
  "duration": 4250709323,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_company_empty()"
});
formatter.result({
  "duration": 3209389777,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-phone-number-field-is-empty",
  "description": "",
  "name": "The sign up is not successful when phone number field is empty",
  "keyword": "Scenario",
  "line": 43,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 45
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 46
});
formatter.step({
  "name": "i do not enter phone number but enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "i validate whether error message for phone number is displayed",
  "keyword": "Then ",
  "line": 48
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 23619259416,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 924786481,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_phone_empty()"
});
formatter.result({
  "duration": 4485924959,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_phone_empty()"
});
formatter.result({
  "duration": 3374637156,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-enter-invalid-phone-number",
  "description": "",
  "name": "The sign up is not successful when enter invalid phone number",
  "keyword": "Scenario",
  "line": 50,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 52
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 53
});
formatter.step({
  "name": "i enter invalid phone number and enter the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "i validate whether error message for invalid phone number is displayed",
  "keyword": "Then ",
  "line": 55
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 26322844416,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 595013200,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_phone_invalid()"
});
formatter.result({
  "duration": 3911262776,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_phone_invalid()"
});
formatter.result({
  "duration": 3148977828,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-successful",
  "description": "",
  "name": "The sign up is successful",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 59
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "i enter the different sign  up fields and click on sign up",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "i validate whether sign up is successful",
  "keyword": "Then ",
  "line": 62
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 22922845860,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 744435754,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup()"
});
formatter.result({
  "duration": 4013767246,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup()"
});
formatter.result({
  "duration": 9166146938,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;the-sign-up-is-not-successful-when-enter-already-registered-email-address",
  "description": "",
  "name": "The sign up is not successful when enter already registered email address",
  "keyword": "Scenario",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 66
});
formatter.step({
  "name": "i click on the signup tab",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "i enter already registered email address and the different sign up fields and click on sign up",
  "keyword": "And ",
  "line": 68
});
formatter.step({
  "name": "i validate whether error message for already registered email address is displayed",
  "keyword": "Then ",
  "line": 69
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 19795889175,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_signup_tab()"
});
formatter.result({
  "duration": 1150196012,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfield_signup_all_email_alregistered()"
});
formatter.result({
  "duration": 4334358673,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.signup_error_reg_email()"
});
formatter.result({
  "duration": 2739590939,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;login-in-successful",
  "description": "",
  "name": "Login in Successful",
  "keyword": "Scenario",
  "line": 71,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 73
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 74
});
formatter.step({
  "name": "i enter the different login fields and click on login",
  "keyword": "And ",
  "line": 75
});
formatter.step({
  "name": "i validate whether login is successful",
  "keyword": "Then ",
  "line": 76
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 19975755709,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 954675035,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfieldlogin()"
});
formatter.result({
  "duration": 3728412151,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.login_is_successful()"
});
formatter.result({
  "duration": 3808957084,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;login-is-not-successful-when-email-id-wrong",
  "description": "",
  "name": "Login is not successful when email id wrong",
  "keyword": "Scenario",
  "line": 78,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 80
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 81
});
formatter.step({
  "name": "i enter the wrong email id and correct password fields and click on login",
  "keyword": "And ",
  "line": 82
});
formatter.step({
  "name": "i validate  login is not successful for wrong email id",
  "keyword": "Then ",
  "line": 83
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 28980910966,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 565958266,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfieldlogin_incorrect_emailid()"
});
formatter.result({
  "duration": 1792318855,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.login_is_Not_successful_wemailid()"
});
formatter.result({
  "duration": 2460430239,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;login-is-not-successful-when-password-is-wrong",
  "description": "",
  "name": "Login is not successful when password is wrong",
  "keyword": "Scenario",
  "line": 85,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 87
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 88
});
formatter.step({
  "name": "i enter the correct email id and wrong password fields and click on login",
  "keyword": "And ",
  "line": 89
});
formatter.step({
  "name": "i validate  login is not successful for wrong password",
  "keyword": "Then ",
  "line": 90
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 20153596912,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 454109261,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfieldlogin_incorrect_password()"
});
formatter.result({
  "duration": 2314102474,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.login_is_Not_successful_wpassword()"
});
formatter.result({
  "duration": 2153152668,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;login-is-not-successful-when-email-id-and-password-both-are-wrong",
  "description": "",
  "name": "Login is not successful when email id and password both are wrong",
  "keyword": "Scenario",
  "line": 92,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 94
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 95
});
formatter.step({
  "name": "i enter the wrong email id and wrong password fields and click on login",
  "keyword": "And ",
  "line": 96
});
formatter.step({
  "name": "i validate  login is not successful for incorrect email id and password",
  "keyword": "Then ",
  "line": 97
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 21220016509,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 1029162264,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfieldlogin_incorrect_email_password()"
});
formatter.result({
  "duration": 3452335171,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.login_is_Not_successful_uwpassword()"
});
formatter.result({
  "duration": 3677015043,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;login-is-not-successful-when-password-field-is-empty",
  "description": "",
  "name": "Login is not successful when password field is empty",
  "keyword": "Scenario",
  "line": 99,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 101
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 102
});
formatter.step({
  "name": "i enter email id and click on login",
  "keyword": "And ",
  "line": 103
});
formatter.step({
  "name": "i validate login is not successful for empty password field",
  "keyword": "Then ",
  "line": 104
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 20836776990,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 736857127,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfieldlogin_email()"
});
formatter.result({
  "duration": 2478834376,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.login_Not_successful_empty_password()"
});
formatter.result({
  "duration": 3133394138,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;login-is-not-successful-when-email-id-field-is-empty",
  "description": "",
  "name": "Login is not successful when email id field is empty",
  "keyword": "Scenario",
  "line": 106,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 108
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 109
});
formatter.step({
  "name": "i enter password and click on login",
  "keyword": "And ",
  "line": 110
});
formatter.step({
  "name": "i validate login is not successful for empty email id field",
  "keyword": "Then ",
  "line": 111
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 21577408991,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 712892475,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.enterfieldlogin_password()"
});
formatter.result({
  "duration": 2354366518,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.login_Not_successful_empty_emailid()"
});
formatter.result({
  "duration": 3130059176,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-for-different-scenarios-on-interviewstreet.com;check-forgot-password-link-working",
  "description": "",
  "name": "Check forgot password link working",
  "keyword": "Scenario",
  "line": 113,
  "type": "scenario"
});
formatter.step({
  "name": "interviewstreet is open in browser",
  "keyword": "Given ",
  "line": 115
});
formatter.step({
  "name": "i click on the Login tab",
  "keyword": "When ",
  "line": 116
});
formatter.step({
  "name": "i click the forgot password link and enter email id and click reset password",
  "keyword": "And ",
  "line": 117
});
formatter.step({
  "name": "i validate how to reset password message displayed",
  "keyword": "Then ",
  "line": 118
});
formatter.match({
  "location": "InterviewStreet.openbrowser()"
});
formatter.result({
  "duration": 26046977766,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.i_click_on_the_Login_tab()"
});
formatter.result({
  "duration": 649633125,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.click_forgot_password()"
});
formatter.result({
  "duration": 3561647699,
  "status": "passed"
});
formatter.match({
  "location": "InterviewStreet.reset_password_msg()"
});
formatter.result({
  "duration": 5012975499,
  "status": "passed"
});
});