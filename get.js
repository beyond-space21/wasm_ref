bundle = {
    get_districts:()=>{
        fetch("https://tngis.tn.gov.in/apps/village_dashboard_new_api/v1/admin_dropdown", {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "en-GB,en;q=0.5",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "sec-gpc": "1",
              "x-app-id": "te$t",
              "x-requested-with": "XMLHttpRequest",
              "Referer": "https://tngis.tn.gov.in/apps/village_dashboard/",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "type=district",
            "method": "POST"
          }).then(response => response.json());
    },
    get_taluk:(district)=>{
        fetch("https://tngis.tn.gov.in/apps/village_dashboard_new_api/v1/admin_dropdown", {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "en-GB,en;q=0.5",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "sec-gpc": "1",
              "x-app-id": "te$t",
              "x-requested-with": "XMLHttpRequest",
              "Referer": "https://tngis.tn.gov.in/apps/village_dashboard/",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "type=taluk&district_code="+toString(district),
            "method": "POST"
          }).then(response => response.json());
    },
    get_Village:(district,taluk)=>{
        fetch("https://tngis.tn.gov.in/apps/village_dashboard_new_api/v1/admin_dropdown", {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "en-GB,en;q=0.5",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "sec-gpc": "1",
              "x-app-id": "te$t",
              "x-requested-with": "XMLHttpRequest",
              "Referer": "https://tngis.tn.gov.in/apps/village_dashboard/",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "type=village&taluk_code="+toString(taluk)+"&district_code="+toString(district),
            "method": "POST"
          }).then(response => response.json());
    },
    get_survey_num:(district,taluk,village)=>{
        fetch("https://tngis.tn.gov.in/apps/village_dashboard_new_api/v1/survey_subdivision_dropdown", {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "en-GB,en;q=0.5",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "sec-ch-ua": "\"Brave\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "sec-gpc": "1",
              "x-app-id": "te$t",
              "x-requested-with": "XMLHttpRequest",
              "Referer": "https://tngis.tn.gov.in/apps/village_dashboard/",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "type=survey&taluk_code="+toString(taluk)+"&district_code="+toString(district)+"&village_code="+toString(village),
            "method": "POST"
          }).then(response => response.json());
    }
}

