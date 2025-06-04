$(document).ready(function () {
  getInitialData();
  // $("#copy-template").on("click", copyTemplate);
});

function getInitialData() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Map of URL parameters to their corresponding elements
  const paramMap = {
    companyName: ".company-name",
    companyLogo: ".company-logo",
    websiteLink: ".company-website",
    // facebookLink: ".facebook-link",
    // twitterLink: ".twitter-link",
    // linkedinLink: ".linkedin-link",
    companyMail: ".company-mail",
    companyServices: ".company-services",
    companyBranches: ".company-branches",
    companyAddress: ".company-address",
    // partnerCompany1: ".partner-company-1",
    // partnerCompany2: ".partner-company-2",
    // partnerCompany3: ".partner-company-3",
    // partnerCompany4: ".partner-company-4",
  };

  // Set values from URL parameters and hide elements if no data
  for (const [param, selector] of Object.entries(paramMap)) {
    const value = urlParams.get(param);
    if (value) {
      $(selector).text(value).show();
    } else {
      $(selector).hide();
    }
  }

  // Special handling for links and images
  const linkMap = {
    // websiteLink: { selector: ".website-link", attr: "href" },
    // companyMail: { selector: ".company-mail-link", attr: "href" },
    facebookLink: { selector: ".facebook-link", attr: "href" },
    twitterLink: { selector: ".twitter-link", attr: "href" },
    linkedinLink: { selector: ".linkedin-link", attr: "href" },
    instagramLink: { selector: ".instagram-link", attr: "href" },
    companyLogo: { selector: ".company-logo", attr: "src" },
    partnerCompany1: { selector: ".partner-company-1", attr: "src" },
    partnerCompany2: { selector: ".partner-company-2", attr: "src" },
    partnerCompany3: { selector: ".partner-company-3", attr: "src" },
    partnerCompany4: { selector: ".partner-company-4", attr: "src" },
    websiteLogo: { selector: ".website-logo", attr: "src" },
    facebookLogo: { selector: ".facebook-logo", attr: "src" },
    instagramLogo: { selector: ".instagram-logo", attr: "src" },
    twitterLogo: { selector: ".twitter-logo", attr: "src" },
    linkedinLogo: { selector: ".linkedin-logo", attr: "src" },
    companyMailLogo: { selector: ".company-mail-logo", attr: "src" },
  };

  for (const [param, { selector, attr }] of Object.entries(linkMap)) {
    const value = urlParams.get(param);
    if (value) {
      $(selector).attr(attr, value).show();
    } else {
      $(selector).hide();
    }
  }
}

function copyTemplate() {
  const template = $(".template").html();
  navigator.clipboard.writeText(template);
  alert("Template copied to clipboard successfully");
}
