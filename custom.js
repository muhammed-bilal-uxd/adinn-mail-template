$(document).ready(function () {
  // Form submission handler
  $("#myForm").on("submit", function (e) {
    e.preventDefault();

    // Get all form fields and only include those with values
    const formData = {};

    // Check each field and only add if it has a value
    const fields = {
      companyName: $("#companyName").val(),
      companyLogo: $("#companyLogo").val(),
      websiteLink: $("#websiteLink").val(),
      facebookLink: $("#facebookLink").val(),
      twitterLink: $("#twitterLink").val(),
      linkedinLink: $("#linkedinLink").val(),
      companyMail: $("#companyMail").val(),
      companyServices: $("#companyServices").val(),
      companyBranches: $("#companyBranches").val(),
      companyAddress: $("#companyAddress").val(),
      partnerCompany1: $("#partnerCompany1").val(),
      partnerCompany2: $("#partnerCompany2").val(),
      partnerCompany3: $("#partnerCompany3").val(),
      partnerCompany4: $("#partnerCompany4").val(),
    };

    // Only add fields that have values
    for (const [key, value] of Object.entries(fields)) {
      if (value && value.trim() !== "") {
        formData[key] = value.trim();
      }
    }

    // Convert form data to URL parameters
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(formData)) {
      params.append(key, value);
    }

    // Open preview in new tab/window
    window.open(`preview.html?${params.toString()}`, "_blank");
  });
});
