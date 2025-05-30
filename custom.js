$(document).ready(function () {
  // $("#myForm").on("submit", submitForm);
  $("#dummyData").on("click", generateDummyData);
  $("#previewTemplate").on("click", previewTemplate);
});

function getDataParams() {
  return {
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
}

function submitForm(e) {
  const formValues = getDataParams();

  $("body").html(getPreviewTemplate(formValues));
}

function generateDummyData() {
  // Get the current URL
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);
  const partnerCompany = `${baseUrl}assets/3m.png`;
  const companyLogo = `${baseUrl}assets/logo.avif`;

  // Set dummy data for all form fields
  $("#companyName").val("TechCorp Solutions Pvt Ltd");
  $("#companyLogo").val(companyLogo);
  $("#websiteLink").val("https://techcorp-solutions.com");
  $("#facebookLink").val("https://facebook.com/techcorp");
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
}

function getPreviewTemplate(data) {
  const {
    companyName,
    companyLogo,
    websiteLink,
    facebookLink,
    twitterLink,
    linkedinLink,
    companyMail,
    companyServices,
    companyBranches,
    companyAddress,
    partnerCompany1,
    partnerCompany2,
    partnerCompany3,
    partnerCompany4,
  } = data;

  return `
     <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="600"
      style="
        width: 600px;
        min-width: 600px;
        padding: 20px;
        background-color: #f6f9fe;
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
      "
    >
      <tr>
        <td>
          <!-- Signature -->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style="font-size: 14px"
          >
            <tr>
              <td style="min-width: 140px">
                <p
                  style="font-size: 24px !important; color: #000000; margin: 0"
                >
                  <strong>TALK TO US FOR MORE AND MORE ROIs</strong>
                </p>
              </td>
              <td width="140" style="text-align: center; padding: 10px">
                <img
                  class="logo company-logo"
                  src="${companyLogo}"
                  alt="company Logo"
                  style="width: 150px; height: auto"
                />
                <p
                  style="font-size: 14px; text-align: center; margin: 10px 0; white-space:nowrap"
                  class="company-website"
                >
                  ${websiteLink}
                </p>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  style="text-align: center"
                >
                  <tr>
                    <td>
                      <a
                        href="${facebookLink}"
                        class="company-facebook"
                        style="text-decoration: none"
                      >
                        <img
                          src="assets/facebook.png"
                          alt="Facebook"
                          style="
                            width: 20px;
                            height: auto;
                            margin-right: 5px;
                            vertical-align: middle;
                          "
                        />
                      </a>
                      <a
                        href="${twitterLink}"
                        class="company-twitter"
                        style="text-decoration: none"
                      >
                        <img
                          src="assets/twitter.png"
                          alt="Twitter"
                          style="
                            width: 20px;
                            height: auto;
                            margin-right: 5px;
                            vertical-align: middle;
                          "
                        />
                      </a>
                      <a
                        href="${linkedinLink}"
                        class="company-linkedin"
                        style="text-decoration: none"
                      >
                        <img
                          src="assets/linkedin.png"
                          alt="LinkedIn"
                          style="
                            width: 20px;
                            height: auto;
                            margin-right: 5px;
                            vertical-align: middle;
                          "
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                width="320"
                style="
                  padding: 10px 10px 10px 20px;
                  border-left: 1px solid #000000;
                "
              >
                <h3
                  style="margin: 0 0 5px; font-size: 16px; color: #000"
                  class="company-name"
                >
                ${companyName}
                </h3>
                <p
                  style="color: #ff0000; margin: 7px 0"
                  class="company-services"
                >
                ${companyServices}
                </p>
                <p
                  style="font-size: 12px; color: #000000; margin: 7px 0"
                  class="company-address"
                >
                ${companyAddress}
                </p>
                <p
                  style="font-size: 12px; color: #000000; margin: 7px 0"
                  class="company-branches"
                >
                ${companyBranches}
                </p>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td>
                    <table>
                    <tbody>
                    <tr>
                      <td style="font-size: 12px; color: #000000; white-space: nowrap">
                        <img
                          class="mini-icon"
                          src="assets/website.png"
                          alt="Website"
                          style="
                            width: 20px;
                            height: auto;
                            vertical-align: middle;
                          "
                        />
                        <span
                          style="font-size: 13px; color: #000000;"
                          class="company-website"
                        >
                        ${websiteLink}
                        </span>
                      </td>
                      <td style="font-size: 12px; color: #000000; white-space: nowrap">
                        <img
                          class="mini-icon"
                          src="assets/mail.png"
                          alt="mail"
                          style="
                            width: 20px;
                            height: auto;
                            vertical-align: middle;
                          "
                        />
                        <span
                          style="font-size: 13px; color: #000000"
                          class="company-mail"
                        >
                        ${companyMail}
                        </span>
                      </td>
                      <tr>
                      <tbody>
                       <table>
                    </td>
                  </tr>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  style="margin-top: 10px"
                >
                  <tr>
                    <td>
                      <img
                        class="clients-mini-icon partner-company-1"
                        src="${partnerCompany1}"
                        alt="clients"
                        style="
                          width: 20px;
                          height: auto;
                          vertical-align: middle;
                        "
                      />
                      <img
                        class="clients-mini-icon partner-company-2"
                        alt="clients"
                        src="${partnerCompany2}"
                        style="
                          width: 20px;
                          height: auto;
                          vertical-align: middle;
                        "
                      />
                      <img
                        class="clients-mini-icon partner-company-3"
                        alt="clients"
                        src="${partnerCompany3}"
                        style="
                          width: 20px;
                          height: auto;
                          vertical-align: middle;
                        "
                      />
                      <img
                        class="clients-mini-icon partner-company-4"
                        alt="clients"
                        src="${partnerCompany4}"
                        style="
                          width: 20px;
                          height: auto;
                          vertical-align: middle;
                        "
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style="margin-top: 20px"
          >
            <tr>
              <td style="font-size: 12px; color: #7d8184">
                The content of this email is confidential and intended for the
                recipient specified in message only. It is strictly forbidden to
                share any part of this message with any third party, without a
                written consent of the sender. If you received this message by
                mistage, please reply to this message and follow with its
                deletion, so that we can ensure such a mistake does not occur in
                the future.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
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
