let adv1 = [
  {
    ADVERTISER: "MyConstant",
    TARGETED_COUNTRIES: "US",
    LINK_ID: "14500725",
    NAME: "MyConstant",
    DESCRIPTION: "Join MyConstant And Sign Up For A Free Account Now!",
    KEYWORDS: "myconstant, p2p, cryptocurrency, bitcoin, ethereum, p2p lending, investing, finance",
    LINK_TYPE: "Text Link",
    THREE_MONTH_EPC: "$17.86 USD",
    SEVEN_DAY_EPC: "N/A",
    LAST_UDPATED: "28-Jan-2021",
    HTML_LINKS: "https://www.tqlkg.com/image-100405473-14500713\" width=\"300\" height=\"250\" alt=\"Get Delta 8 Tinctures Online!\" border=\"0\"/>",
    JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.tkqlhce.com/placeholder-47705724?target=_top&mouseover=N\"></script>",
    CLICK_URL: "https://www.tkqlhce.com/click-100405473-14500725",
    PROMOTION_TYPE: "N/A",
    COUPON_CODE: "",
    PROMOTIONAL_DATE: "",
    PROMOTIONAL_END_DATE: "",
    CATEGORY: "Wellness",
    ADV_CID: "5654236",
    RELATIONSHIP_STATUS: "Active",
    LANGUAGE: "English",
    MOBILE_OPTIMIZED: "No"
  },
  {
    ADVERTISER: "MyConstant",
    TARGETED_COUNTRIES: "US",
    LINK_ID: "14500725",
    NAME: "MyConstant",
    DESCRIPTION: "Join MyConstant And Sign Up For A Free Account Now!",
    KEYWORDS: "myconstant, p2p, cryptocurrency, bitcoin, ethereum, p2p lending, investing, finance",
    LINK_TYPE: "Text Link",
    THREE_MONTH_EPC: "$17.86 USD",
    SEVEN_DAY_EPC: "N/A",
    LAST_UDPATED: "28-Jan-2021",
    HTML_LINKS: "https://www.tqlkg.com/image-100405473-14500713\" width=\"300\" height=\"250\" alt=\"Get Delta 8 Tinctures Online!\" border=\"0\"/>",
    JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.kqzyfj.com/placeholder-47705725?target=_top&mouseover=N\"></script>",
    CLICK_URL: "https://www.tkqlhce.com/click-100405473-14500713",
    PROMOTION_TYPE: "N/A",
    COUPON_CODE: "",
    PROMOTIONAL_DATE: "",
    PROMOTIONAL_END_DATE: "",
    CATEGORY: "Wellness",
    ADV_CID: "5654236",
    RELATIONSHIP_STATUS: "Active",
    LANGUAGE: "English",
    MOBILE_OPTIMIZED: "No"
  },
  {
    ADVERTISER: "MyConstant",
    TARGETED_COUNTRIES: "US",
    LINK_ID: "14500725",
    NAME: "MyConstant",
    DESCRIPTION: "Join MyConstant And Sign Up For A Free Account Now!",
    KEYWORDS: "myconstant, p2p, cryptocurrency, bitcoin, ethereum, p2p lending, investing, finance",
    LINK_TYPE: "Text Link",
    THREE_MONTH_EPC: "$17.86 USD",
    SEVEN_DAY_EPC: "N/A",
    LAST_UDPATED: "28-Jan-2021",
    HTML_LINKS: "https://www.tqlkg.com/image-100405473-14500702\" width=\"300\" height=\"250\" alt=\"Get Delta 8 Tinctures Online!\" border=\"0\"/>",
    JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.kqzyfj.com/placeholder-47705726?target=_top&mouseover=N\"></script>",
    CLICK_URL: "https://www.tkqlhce.com/click-100405473-14500702",
    PROMOTION_TYPE: "N/A",
    COUPON_CODE: "",
    PROMOTIONAL_DATE: "",
    PROMOTIONAL_END_DATE: "",
    CATEGORY: "Wellness",
    ADV_CID: "5654236",
    RELATIONSHIP_STATUS: "Active",
    LANGUAGE: "English",
    MOBILE_OPTIMIZED: "No"
  },
  {
    ADVERTISER: "MyConstant",
    TARGETED_COUNTRIES: "US",
    LINK_ID: "14500725",
    NAME: "MyConstant",
    DESCRIPTION: "Join MyConstant And Sign Up For A Free Account Now!",
    KEYWORDS: "myconstant, p2p, cryptocurrency, bitcoin, ethereum, p2p lending, investing, finance",
    LINK_TYPE: "Text Link",
    THREE_MONTH_EPC: "$17.86 USD",
    SEVEN_DAY_EPC: "N/A",
    LAST_UDPATED: "28-Jan-2021",
    HTML_LINKS: "https://www.awltovhc.com/image-100405473-14500714\" width=\"300\" height=\"250\" alt=\"Get Delta 8 Tinctures Online!\" border=\"0\"/>",
    JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.tkqlhce.com/placeholder-47705727?target=_top&mouseover=N\"></script>",
    CLICK_URL: "https://www.anrdoezrs.net/click-100405473-14500714",
    PROMOTION_TYPE: "N/A",
    COUPON_CODE: "",
    PROMOTIONAL_DATE: "",
    PROMOTIONAL_END_DATE: "",
    CATEGORY: "Wellness",
    ADV_CID: "5654236",
    RELATIONSHIP_STATUS: "Active",
    LANGUAGE: "English",
    MOBILE_OPTIMIZED: "No"
  }
]
let finalAd = ""
let src = [`${adv1[0].HTML_LINKS}`, `${adv1[1].HTML_LINKS}`, `${adv1[2].HTML_LINKS}`, `${adv1[3].HTML_LINKS}`]
let adCategory = [`${adv1[0].CATEGORY}`, `${adv1[1].CATEGORY}`, `${adv1[2].CATEGORY}`, `${adv1[3].CATEGORY}`]
let adName = [`${adv1[0].NAME}`, `${adv1[1].NAME}`, `${adv1[2].NAME}`, `${adv1[3].NAME}`]
let adURL = [`${adv1[0].CLICK_URL}`, `${adv1[1].CLICK_URL}`, `${adv1[2].CLICK_URL}`, `${adv1[3].CLICK_URL}`]
let adDesc = [`${adv1[0].DESCRIPTION}`, `${adv1[1].DESCRIPTION}`, `${adv1[2].DESCRIPTION}`, `${adv1[3].DESCRIPTION}`]
let adUpdate = [`${adv1[0].LAST_UDPATED}`, `${adv1[1].LAST_UDPATED}`, `${adv1[2].LAST_UDPATED}`, `${adv1[3].LAST_UDPATED}`]
for (var i = 0; i < 4; i++) {
  finalAd += `

                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_sidebar_inner_social_wrapper ne_sidebar_second_inner_social_wrapper">
                                    <div class="ne_recent_heading_main_wrapper font_18px">
                                        <h2>${adDesc[i]}</h2>
                                    </div>
                                    <div class="ne_sidebar_advertize_main_wrapper">
                                        <a target="_blank" href="${adURL[i]}">
                                            <img src="${src[i]}
                                        </a>
                                    </div>
                                </div>
                            </div>
 `
  console.log(finalAd)
  document.querySelector('.adverts').innerHTML = finalAd;
}

