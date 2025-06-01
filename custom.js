$(document).ready(function () {
  $("#dummyData").on("click", generateDummyData);
  $("#previewTemplate").on("click", previewTemplate);
});

function getDataParams() {
  return {
    companyName: $("#companyName").val(),
    companyLogo: $("#companyLogo").val(),
    websiteLink: $("#websiteLink").val(),
    facebookLink: $("#facebookLink").val(),
    instagramLink: $("#instagramLink").val(),
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
    websiteLogo: $("#websiteLogo").val(),
    facebookLogo: $("#facebookLogo").val(),
    instagramLogo: $("#instagramLogo").val(),
    twitterLogo: $("#twitterLogo").val(),
    linkedinLogo: $("#linkedinLogo").val(),
    companyMailLogo: $("#companyMailLogo").val(),
    companyWebsiteLogo: $("#companyWebsiteLogo").val(),
  };
}

function generateDummyData() {
  // Get the current URL
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);
  const partnerCompany = `${baseUrl}assets/3m.png`;
  const companyLogo = `${baseUrl}assets/logo.avif`;
  const websiteLogo = `${baseUrl}assets/website.png`;
  const facebookLogo = `${baseUrl}assets/facebook.png`;
  const instagramLogo = `${baseUrl}assets/instagram.png`;
  const twitterLogo = `${baseUrl}assets/twitter.png`;
  const linkedinLogo = `${baseUrl}assets/linkedin.png`;
  const companyMailLogo = `${baseUrl}assets/mail.png`;
  const companyWebsiteLogo = `${baseUrl}assets/website.png`;

  // Set dummy data for all form fields
  $("#companyName").val("TechCorp Solutions Pvt Ltd");
  $("#companyLogo").val(companyLogo);
  $("#websiteLink").val("https://techcorp-solutions.com");
  $("#facebookLink").val("https://facebook.com/techcorp");
  $("#instagramLink").val("https://instagram.com/techcorp");
  $("#twitterLink").val("https://twitter.com/techcorp");
  $("#linkedinLink").val("https://linkedin.com/company/techcorp");
  $("#companyMail").val("contact@techcorp-solutions.com");
  $("#companyServices").val(
    "Software Development\nCloud Solutions\nIT Consulting\nDigital Transformation\nCybersecurity Services"
  );
  $("#companyBranches").val("New York | London | Singapore | Dubai");
  $("#companyAddress").val(
    "123 Tech Plaza\nSuite 500\nNew York, NY 10001\nUnited States"
  );
  $("#partnerCompany1").val(partnerCompany);
  $("#partnerCompany2").val(partnerCompany);
  $("#partnerCompany3").val(partnerCompany);
  $("#partnerCompany4").val(partnerCompany);

  $("#websiteLogo").val(websiteLogo);
  $("#facebookLogo").val(facebookLogo);
  $("#instagramLogo").val(instagramLogo);
  $("#twitterLogo").val(twitterLogo);
  $("#linkedinLogo").val(linkedinLogo);
  $("#companyMailLogo").val(companyMailLogo);
  $("#companyWebsiteLogo").val(companyWebsiteLogo);
}

function previewTemplate() {
  const formData = {};
  const formValues = getDataParams();

  // Only add fields that have values
  for (const [key, value] of Object.entries(formValues)) {
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
}
