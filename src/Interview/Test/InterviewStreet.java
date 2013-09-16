package Interview.Test;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;



public class InterviewStreet {
	
protected WebDriver browser;
Properties Prop = new Properties();

public void Loadfile() throws FileNotFoundException, IOException{
	Prop.load(new FileInputStream("data.properties"));	
    }


@Given("^interviewstreet is open in browser$")


public void openbrowser() throws FileNotFoundException, IOException{
	String browsername;
	String url;
	Loadfile();
	browsername =  Prop.getProperty("browser");
	url =  Prop.getProperty("url");
	System.out.println(browsername);
	if (browsername.equalsIgnoreCase("FireFox")){
		FirefoxProfile profile = new FirefoxProfile();
		browser = new FirefoxDriver(profile);
		}
	     else{
     	   	System.setProperty("webdriver.ie.driver","C:\\users\\IEDriverServer.exe");
	        DesiredCapabilities iecapabilities = DesiredCapabilities.internetExplorer();
   	        iecapabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
            browser = new InternetExplorerDriver(iecapabilities);
        	}
	 browser.get(url);
	 browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	 }


//launched Page Test Case

@Then("^i validate whether interviewstreet url is launched successfully$")
public void interviewstreet_page_launched() throws Throwable{
       assertEquals("Programming Test | Hire programmers | Interviewstreet | Dashboard", browser.getTitle());
       tearDown();
       }


//Sign Up Page Test Cases
@When("^i click on the signup tab$")
public void i_click_on_the_signup_tab() throws Throwable{
	browser.findElement(By.cssSelector("[href*='signup']")).click();	
    }

@When("^i do not enter firstname but enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_firstname_empty() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("signemail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for firstname is displayed$")
public void signup_firstname_error() throws Throwable{
	assertEquals("Name is required", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i do not enter email address but enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_email_empty() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).click();
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for email address is displayed$")
public void signup_error_email() throws Throwable{
	assertEquals("Email Address is required", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i enter invalid email address and enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_email_invalid() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("bademail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputCompany")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for invalid email address is displayed$")
public void signup_error_invalid_email() throws Throwable{
	assertEquals("Invalid email address", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i do not enter password but enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_password_empty() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("signemail"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputPassword")).click();
	browser.findElement(By.id("inputCompany")).click();
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for password is displayed$")
public void signup_error_password_empty() throws Throwable{
	assertEquals("Password is required", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i do not enter company name but enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_company_empty() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("signemail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputCompany")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for company name is displayed$")
public void signup_error_company_empty() throws Throwable{
	assertEquals("Company is required", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i do not enter phone number but enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_phone_empty() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("signemail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).click();
	browser.findElement(By.id("inputCompany")).click();
	browser.findElement(By.xpath("//p/a")).click();
	browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

@Then("^i validate whether error message for phone number is displayed$")
public void signup_error_phone_empty() throws Throwable{
	assertEquals("Phone Number is required", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i enter invalid phone number and enter the different sign up fields and click on sign up$")
public void enterfield_signup_all_phone_invalid() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("signemail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("invalidphone"));
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for invalid phone number is displayed$")
public void signup_error_phone_invalid() throws Throwable{
	assertEquals("Invalid phone number", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

@When("^i enter the different sign  up fields and click on sign up$")
public void enterfield_signup() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("signemail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether sign up is successful$")
public void signup() throws Throwable{
	assertEquals("Create Test", browser.findElement(By.cssSelector("div.button-container")).getText());
	assertEquals("All Tests | Interviewstreet", browser.getTitle());
	tearDown();
    }


@When("^i enter already registered email address and the different sign up fields and click on sign up$")
public void enterfield_signup_all_email_alregistered() throws Throwable{
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).click();
	browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	browser.findElement(By.id("inputFirstName")).sendKeys(Prop.getProperty("firstname"));
	browser.findElement(By.id("inputLastName")).sendKeys(Prop.getProperty("lastname"));
	browser.findElement(By.id("inputEmail")).sendKeys(Prop.getProperty("regsignemail"));
	browser.findElement(By.id("inputPassword")).sendKeys(Prop.getProperty("signpassword"));
	browser.findElement(By.id("inputCompany")).sendKeys(Prop.getProperty("company"));
	browser.findElement(By.id("inputNumber")).sendKeys(Prop.getProperty("phone"));
	browser.findElement(By.id("inputFirstName")).click();
	browser.findElement(By.xpath("//p/a")).click();
	}

@Then("^i validate whether error message for already registered email address is displayed$")
public void signup_error_reg_email() throws Throwable{
	assertEquals("This email is already registered", browser.findElement(By.cssSelector("div.popover-content")).getText());
	tearDown();
    }

//login Page test cases
@When("^i click on the Login tab$")
public void i_click_on_the_Login_tab() throws Throwable {
	browser.findElement(By.linkText("LOGIN")).click();
    }

@When("^i enter the different login fields and click on login$")
public void enterfieldlogin() throws Throwable{
	  browser.findElement(By.id("email")).sendKeys(Prop.getProperty("emailid"));;
	  browser.findElement(By.id("password")).sendKeys(Prop.getProperty("password"));
	  browser.findElement(By.id("login_action")).click();
	  browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

@Then("^i validate whether login is successful$")
public void login_is_successful() throws Throwable{
	assertEquals("Login Success. Redirecting to Dashboard", browser.findElement(By.id("login-msg")).getText());
	tearDown();
    }

@When("^i enter the wrong email id and correct password fields and click on login$")
public void enterfieldlogin_incorrect_emailid() throws Throwable{
	  browser.findElement(By.id("email")).sendKeys(Prop.getProperty("bademail"));;
	  browser.findElement(By.id("password")).sendKeys(Prop.getProperty("password"));
	  browser.findElement(By.id("login_action")).click();
      }

@Then("^i validate  login is not successful for wrong email id$")
public void login_is_Not_successful_wemailid() throws Throwable{
	  assertEquals("Login Failed. Please check username/password.", browser.findElement(By.xpath("//div[@id='login-msg']/div/p")).getText());
	  tearDown();
      }	
	
		
@When("^i enter the correct email id and wrong password fields and click on login$")
public void enterfieldlogin_incorrect_password() throws Throwable{
	  browser.findElement(By.id("email")).sendKeys(Prop.getProperty("emailid"));;
	  browser.findElement(By.id("password")).sendKeys(Prop.getProperty("badpassword"));
	  browser.findElement(By.id("login_action")).click();
      }

@Then("^i validate  login is not successful for wrong password$")
public void login_is_Not_successful_wpassword() throws Throwable{
	 assertEquals("Login Failed. Please check username/password.", browser.findElement(By.xpath("//div[@id='login-msg']/div/p")).getText());
	 tearDown();
	 }		
		
@When("^i enter the wrong email id and wrong password fields and click on login$")
public void enterfieldlogin_incorrect_email_password() throws Throwable{
	  browser.findElement(By.id("email")).sendKeys(Prop.getProperty("bademail"));;
	  browser.findElement(By.id("password")).sendKeys(Prop.getProperty("badpassword"));
	  browser.findElement(By.id("login_action")).click();
      }

@Then("^i validate  login is not successful for incorrect email id and password$")
public void login_is_Not_successful_uwpassword() throws Throwable{
	 assertEquals("Login Failed. Please check username/password.", browser.findElement(By.xpath("//div[@id='login-msg']/div/p")).getText());
	 tearDown();
	 }

@When("^i enter email id and click on login$")
public void enterfieldlogin_email() throws Throwable{
	  browser.findElement(By.id("email")).sendKeys(Prop.getProperty("emailid"));
	  browser.findElement(By.id("login_action")).click();
    }

@Then("^i validate login is not successful for empty password field$")
public void login_Not_successful_empty_password() throws Throwable{
	 assertEquals("Please enter a password.", browser.findElement(By.xpath("//div[@id='login-msg']/div/p")).getText());
	 tearDown();
	 }

@When("^i enter password and click on login$")
public void enterfieldlogin_password() throws Throwable{
	  browser.findElement(By.id("password")).sendKeys(Prop.getProperty("password"));
	  browser.findElement(By.id("login_action")).click();
    }

@Then("^i validate login is not successful for empty email id field$")
public void login_Not_successful_empty_emailid() throws Throwable{
	 assertEquals("Please enter your registered e-mail address.", browser.findElement(By.xpath("//div[@id='login-msg']/div/p")).getText());
	 tearDown();
	 }

@When("^i click the forgot password link and enter email id and click reset password$")
public void click_forgot_password() throws Throwable{
	 browser.findElement(By.linkText("Forgot Password")).click();
	 browser.findElement(By.id("resetEmail")).sendKeys(Prop.getProperty("emailid"));
	 browser.findElement(By.id("sendResetLink")).click();
    }

@Then("^i validate how to reset password message displayed$")
public void reset_password_msg() throws Throwable{
	assertTrue(isTextPresent("EMAIL SENT"));
	assertTrue(isTextPresent("You will receive an email with instructions about how to reset your password in a few minutes."));
	tearDown();
	 }

public boolean isTextPresent(String string) {
	for (WebElement e : browser.findElements(By.cssSelector("*"))) {
		if (e.isDisplayed() && e.getText().contains(string)) {
			return true;
		}
	}
	return false;
}

public void tearDown() throws Exception {
	browser.quit();
	}
}
    				
		
		
		
		
		
		
		
		
		
		
		
		



