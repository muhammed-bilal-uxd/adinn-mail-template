$(document).ready(function () {
  getInitialData();
  $("#copy-template").on("click", copyTemplate);
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
    partnerCompany1: ".partner-company-1",
    partnerCompany2: ".partner-company-2",
    partnerCompany3: ".partner-company-3",
    partnerCompany4: ".partner-company-4",
  };

  // Set values from URL parameters
  for (const [param, selector] of Object.entries(paramMap)) {
    const value = urlParams.get(param);
    if (value) {
      $(selector).text(value);
    }
  }

  // Special handling for links
  if (urlParams.get("companyLogo")) {
    $(".company-logo").attr("src", urlParams.get("companyLogo"));
  }
  if (urlParams.get("websiteLink")) {
    $(".website-link").attr("href", urlParams.get("websiteLink"));
  }
  if (urlParams.get("facebookLink")) {
    $(".facebook-link").attr("href", urlParams.get("facebookLink"));
  }
  if (urlParams.get("twitterLink")) {
    $(".twitter-link").attr("href", urlParams.get("twitterLink"));
  }
  if (urlParams.get("linkedinLink")) {
    $(".linkedin-link").attr("href", urlParams.get("linkedinLink"));
  }
  // add partner company
  if (urlParams.get("partnerCompany1")) {
    $(".partner-company-1").attr("src", urlParams.get("partnerCompany1"));
  }
  if (urlParams.get("partnerCompany2")) {
    $(".partner-company-2").attr("src", urlParams.get("partnerCompany2"));
  }
  if (urlParams.get("partnerCompany3")) {
    $(".partner-company-3").attr("src", urlParams.get("partnerCompany3"));
  }
  if (urlParams.get("partnerCompany4")) {
    $(".partner-company-4").attr("src", urlParams.get("partnerCompany4"));
  }
}

function copyTemplate() {
  const template = $(".template").html();
  navigator.clipboard.writeText(template);
}
