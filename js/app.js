var valid=0;
$(function(){
    $("span").hide();
});
function addDetails()
{
    var valid=0;
    $("span").hide();
    var validate=validateDetails();
    if(validate)
    {
        postTheData();
    }

}
function validateDetails(){

    validateFirstName();
    validateFullName();
    validateDesignation();
    validateEmployeeNumber();    
    validateReasonsforIssues();    
    validateEmployeeMobileNumber();
    validateEmployeeEmergencyNumber();
    validateEmailId();
    validateBloodGroup();
    if(valid == 1)
    {
        return false;
    }
    return true;

}
function validateFirstName()
{
   if(checkNull("firstName"))
   {
        valid = 1;
        showError("errorMesssageForFirstName", "firstName");
   }
}
function validateFullName()
{
    if(checkNull("fullName"))
    {
        valid =1;
        showError("errorMesssageForFullName","fullName");
    }
}
function validateDesignation()
{
    if(checkNull("designation"))
    {
        valid =1;
        showError("errorMessageForDesignation","designation");
    }
}
function validateEmployeeNumber()
{
    if(checkNull("employeeNumber"))
   {
       valid = 1;
       showError("errorMessageForEmployeeNumber", "employeeNumber");
      
   }
     else if(checkNumbersOnly("employeeNumber")) {
        valid = 1;
        showError("errorMessageForEmployeeNumber", "employeeNumber");
    
      }
      else if(checkLength("employeeNumber", 7)) {
        valid = 1;
        showError("errorMessageForEmployeeNumber", "employeeNumber");
    
      }

}
function validateBloodGroup()
{
    if(checkNull("bloodgroup1"))
    {
        valid =1;
        showError("errorMessageForBloodGroup","bloodgroup1");
    }
    if(checkNull("bloodgroup2"))
    {
        valid =1;
        showError("errorMessageForBloodGroup","bloodgroup2");
    }
}
function validateReasonsforIssues()
{
    if(checkNull("reasonsForIssue"))
   {
       valid = 1;
       showError("errorMessageForReasonsForIssue", "reasonsForIssue");
      
   }
}
function validateEmailId()
{
    if(checkNull("email"))
   {
       valid = 1;
       showError("errorMessageEmailID", "email");
      
   }
   else if(checkEmail("email")) {
    valid = 1;
    showError("errorMessageEmailID", "email");
       
   }
}

function validateEmployeeMobileNumber()
{
    if(checkNull("mobile"))
   {
       valid = 1;
       showError("errorMessageForEmployeeMobileNumber", "mobile");
      
   }
     else if(checkLength("mobile", 10)) {
        valid = 1;
        showError("errorMessageForEmployeeMobileNumber", "mobile");
    
      }
}
function validateEmployeeEmergencyNumber()
{
    if(checkLength("emergency", 10)) 
    {
        valid = 1;
        showError("errorMessageForEmployeeEmergencyContactNumber", "emergency");
    
      }
}

function checkNull(id)
{
    const value = $(`#${id}`).val();
    if(value == null || value == '')
    {
        return true;
    }
    return false;
}
function checkNumbersOnly(id)
{
    const pattern="/^[0-9]+$/;"
    const value=$(`#${id}`).val();
    if(value.match(pattern))
    {
        return true;
    }
    return false;
    
}
function checkLength(id, length)
{
    const value=$(`#${id}`).val();
    if(value.length != length)
    {
        return true;
    }
    return false;
}
function checkEmail(id)
   {
    const valid=/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/;    
    const value=$(`#${id}`).val();
    const result=value.match(pattern);
    if(value.match(pattern))
    {
        return true;
    }
    return false;
   }

function showError(spanId, inputId)
{
    $(`#${spanId}`).show();
    $(`#${inputId}`).addClass('error');
}

function postTheData()
{
    console.log("Finally inside posting the data");
    const firstName = $("#firstName").val();
    const fullName = $("#fullName").val();
    const formDetails = {
        "firstName" : firstName,
        "fullName" : fullName
    }
    const data = JSON.stringify(formDetails);
    $.ajax({
        type: "POST",
        url: "https://application-form-fd16d.firebaseio.com/ApplicationIds.json",
        data: data,
        success : function(data)
        {
            console.log("In success");
        },
        error : function(err)
        {
            console.log(err);
        }
      });
}