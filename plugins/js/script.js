
// country drop down
// changeImage()
function changeImage() {
    // Get the dropdown and selected option
    var dropdown = document.getElementById('imageDropdown');
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    
    // Get the new image source and text from the selected option
    var imageSrc = selectedOption.value;
    var text = selectedOption.getAttribute('data-text');
    var url = selectedOption.getAttribute('data-url');

    
    // Update the image source
    document.getElementById('dropdownImage').src = imageSrc;
    
    // Update the displayed text
    // document.getElementById('selectedText').textContent = text;

     // page url use this for showing data on pultiple pages
     window.location.href = url;

    // Fetch data when the dropdown changes and use this for showing data on single pages
    // fetchData()
}


function checkChangeImage(){
    var dropdown = document.getElementById('imageDropdown');
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    
    // Get the new image source and text from the selected option
    var imageSrc = selectedOption.value;
    var text = selectedOption.getAttribute('data-text');
    
    // Update the image source
    document.getElementById('dropdownImage').src = imageSrc;
    
    // Update the displayed text
    document.getElementById('selectedText').textContent = text;
}
checkChangeImage()

// house progress bar 
$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

//house hold



/////////////////////////////////
/////////////////////////////////
// all countries data
$(document).ready(function () {
    fetchData()
});


// randome number generator 
// between 3 to 20 
  function between3To20() {
    // Determine whether to generate a decimal or an integer (90% chance for decimal numbers)
    const isDecimal = Math.random() < 0.9;
    
  
    // Use a higher probability for numbers between 3 and 5
    const inLowerRange = Math.random() < 0.9; // 90% chance to pick a number in the 3-5 range
  
    let randomValue;
  
    if (inLowerRange) {
      // Generate a random number between 3 and 5
      randomValue = Math.random() * (5 - 3) + 3;
    } else {
      // Generate a random number between 5 and 20
      randomValue = Math.random() * (20 - 5) + 5;
    }
  
    if (isDecimal) {
      // Return a decimal number with one decimal place
      return randomValue.toFixed(1);
    } else {
      // Return an integer
      return Math.floor(randomValue);
    }
  }
  
// between 5 to 7 
function between5To7() {
    // Determine whether to generate a decimal or an integer (90% chance for decimal numbers)
    const isDecimal = Math.random() < 0.9;
    
    // Use a higher probability for numbers between 5 and 6
    const inLowerRange = Math.random() < 0.9; // 90% chance to pick a number in the 5-6 range
  
    let randomValue;
  
    if (inLowerRange) {
      // Generate a random number between 5 and 6
      randomValue = Math.random() * (6 - 5) + 5;
    } else {
      // Generate a random number between 6 and 7
      randomValue = Math.random() * (7 - 6) + 6;
    }
  
    if (isDecimal) {
      // Return a decimal number without decimal
      return randomValue.toFixed();
    } else {
      // Return an integer
      return Math.floor(randomValue);
    }
  }

// between 3 to 5
// Department / Specialist
function dsBetween3To5() {
    // Determine whether to generate a decimal or an integer (98% chance for decimals)
    const isDecimal = Math.random() < 0.98;  // 98% chance for decimal numbers
    
    // Generate a random value between 0 and 1 to control the probability distribution
    const randomValue = Math.random();

    let randomNumber;
  
    if (randomValue < 0.05) {
        // 5% chance for the number 3
        randomNumber = 3;
    } else if (randomValue < 0.95) {
        // 90% chance for a number between 4 and 5
        randomNumber = 4 + Math.random();  // 4 to 5
    } else {
        // 5% chance for the number 5
        randomNumber = 5;
    }

    // Return the result, formatted to one decimal place if it's a decimal
    if (isDecimal) {
        return randomNumber.toFixed(1)+"%";  // Ensure one decimal place if it's a decimal number
    } else {
        return Math.floor(randomNumber)+"%";  // Round down if it's an integer
    }
}


// for Department / Specialist
// Medical Specialist
function between1To2(){
    // Determine whether to generate a decimal or an integer (98% chance for decimals)
    const isDecimal = Math.random() < 0.98;  // 98% chance for decimal numbers
    
    // Generate a random value between 0 and 1 to control the probability distribution
    const randomValue = Math.random();

    let randomNumber;
  
    if (randomValue < 0.05) {
        // 5% chance for the number 2
        randomNumber = 2;
    } else if (randomValue < 0.95) {
        // 90% chance for 1
        randomNumber = 1 + Math.random(); 
    } else {
        // 5% chance for the number 2
        randomNumber = 2;
    }

    if (isDecimal) {
        return randomNumber.toFixed(1)+"%";
    } else {
        return Math.floor(randomNumber)+"%";
    }
}

// Ailments
// between 13 t0 22
function between13To22() {
    const randomValue = Math.floor(Math.random() * (22 - 13 + 1)) + 13;
    
    return randomValue + "%";
}

// between 9 to 13
function between9To13() {
    const randomValue = Math.floor(Math.random() * (13 - 9 + 1)) + 9;
    
    return randomValue + "%";
}

// between 6 to 9
function between6To9() {
    const randomValue = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
    
    return randomValue + "%";
}

// between 7 to 11
function between7To11() {
    const randomValue = Math.floor(Math.random() * (11 - 7 + 1)) + 7;
    
    return randomValue + "%";
}

// between 3 to 5
function between3To5() {
    const randomValue = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    
    return randomValue + "%";
}

// between 5 to 8
function between5To8() {
    const randomValue = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
    
    return randomValue + "%";
}

// between 3 to 4
function between3To4() {
    const randomValue = Math.floor(Math.random() * (4 - 3 + 1)) + 3;
    
    return randomValue + "%";
}


// between 3 to 5
function between3To5() {
    const randomValue = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    
    return randomValue + "%";
}

// between 8 to 12
function between8To12() {
    const randomValue = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
    
    return randomValue + "%";
}

// between 4 to 6
function between4To6() {
    const randomValue = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
    
    return randomValue + "%";
}

  

function fetchData(){
    let countriesData;

    fetch('countryData.json')
        .then(response => response.json())
        .then(jsonData => {
            countriesData = jsonData.countries;
            showCountryData()
        })
        .catch(error => console.error('Error fetching data:', error));

    function showCountryData() {
        var dropdown = document.getElementById('imageDropdown');
        var selectedOption = dropdown.options[dropdown.selectedIndex];
        const selectedCountry = selectedOption.getAttribute('data-text');

        if (selectedCountry && countriesData[selectedCountry]) {
            const data = countriesData[selectedCountry].data;

            // number convert in percentage without decimal
            function numberRound(number) {
                // Convert the number to percentage
                const percentage = number * 100;
                // Check if the decimal part is >= 0.50 to round up
                const decimalPart = percentage % 1;  // Extract decimal part
                // If decimal part is 0.50 or more, round up, otherwise round down
                let finalPercentage;
                if (decimalPart >= 0.50) {
                    finalPercentage = Math.ceil(percentage);
                } else {
                    finalPercentage = Math.floor(percentage);
                }

                // Return the result, without decimals if it's an integer
                return finalPercentage + '%';
            }

            // number convert in percentage with decimal
            function roundWithDecimal(number) {
                // Convert the number to percentage with two decimals
                return (number * 100).toFixed(2) + '%';
            }

            // B2C datas 
            // B2b datas 
            // all people count
            // country name
            document.querySelector('.country_name').innerText = `${data.Country}`;

            // on tab click 
            const tabs = document.querySelectorAll('.nav-link');
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', function () {
                    if (1 == index + 1) {
                        document.querySelector('.all_people_count').innerText = `${data.panellists.b2c}`;
                    }
                    if (2 == index + 1) {
                        document.querySelector('.all_people_count').innerText = `${data.panellists.b2b}`;
                    }
                    if (3 == index + 1) {
                        // document.querySelector('.all_people_count').innerText = `${data.healthcare.data.panellists}`;
                        document.querySelector('.all_people_count').innerText = `${data.healthcare.data.pannelists}`;

                    }
                });
            });

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', function () {
                    if (1 == index + 1) {
                        document.querySelector('.all_active_count').innerText = `${data.activepanellists.b2c}`;
                    }
                    if (2 == index + 1) {
                        document.querySelector('.all_active_count').innerText = `${data.activepanellists.b2b}`;
                    }
                    if (3 == index + 1) {
                        document.querySelector('.all_active_count').innerText = `${data.healthcare.data.activepanellists}`;
                    }
                });
            });

            // on page load
            const activeTab = document.querySelector('.nav-link.active');
            if (activeTab) {
                const activeTabIndex = Array.from(tabs).indexOf(activeTab);
                if (1 == activeTabIndex + 1) {
                    document.querySelector('.all_people_count').innerText = `${data.panellists.b2c}`;
                }
                if (2 == activeTabIndex + 1) {
                    document.querySelector('.all_people_count').innerText = `${data.panellists.b2b}`;
                }
                if (3 == activeTabIndex + 1) {
                        document.querySelector('.all_people_count').innerText = `${data.healthcare.data.panellists}`;
                }
            }

            if (activeTab) {
                const activeTabIndex = Array.from(tabs).indexOf(activeTab);
                if (1 == activeTabIndex + 1) {
                    document.querySelector('.all_active_count').innerText = `${data.activepanellists.b2c}`;
                }
                if (2 == activeTabIndex + 1) {
                    document.querySelector('.all_active_count').innerText = `${data.activepanellists.b2b}`;
                }
                if (3 == activeTabIndex + 1) {
                        document.querySelector('.all_active_count').innerText = `${data.healthcare.data.activepanellists}`;
                }
            }

            // healthcare tab hide and show when healthcare data is coming
            if (!data.healthcare) {
                document.querySelector('#healthcare-tab').classList.add('d-none');
            }


            // ethnicity
            document.querySelector('.B2C_ethnicity_title_percentage_1').innerText = `${data.ethnicity['White/Caucian']}%`;
            document.querySelector('.B2C_ethnicity_title_percentage_2').innerText = `${data.ethnicity['Black, or African American']}%`;
            document.querySelector('.B2C_ethnicity_title_percentage_3').innerText = `${data.ethnicity['American Indian or Alaska Native']}%`;
            document.querySelector('.B2C_ethnicity_title_percentage_4').innerText = `${data.ethnicity['Asian']}%`;
            document.querySelector('.B2C_ethnicity_title_percentage_5').innerText = `${data.ethnicity['Hispanic']}%`;
            document.querySelector('.B2C_ethnicity_title_percentage_6').innerText = `${data.ethnicity['Other race']}%`;

            // gender
            document.querySelector('.B2C_man_percentage').innerText = `${data.gender.B2C.males}%`;
            document.querySelector('.B2C_woman_percentage').innerText = `${data.gender.B2C.females}%`;
            document.querySelector('.B2C_other_percentage').innerText = `${data.gender.B2C.others}%`;

            // age 
            document.querySelector('.B2C_age_1').innerText = `${data.age['13-17']}%`;
            document.querySelector('.B2C_age_2').innerText = `${data.age['18-29']}%`;
            document.querySelector('.B2C_age_3').innerText = `${data.age['30-49']}%`;
            document.querySelector('.B2C_age_4').innerText = `${data.age['50-64']}%`;
            document.querySelector('.B2C_age_5').innerText = `${data.age['65+']}%`;

            // education 
            document.querySelector('.B2C_education_percentage_1').innerText = `${data.education['Less than high school']}%`;
            document.querySelector('.B2C_education_percentage_2').innerText = `${data.education['High school graduate']}%`;
            document.querySelector('.B2C_education_percentage_3').innerText = `${data.education['Post High School']}%`;
            document.querySelector('.B2C_education_percentage_4').innerText = `${data.education['College - no degree']}%`;
            document.querySelector('.B2C_education_percentage_5').innerText = `${data.education['Associates degree']}%`;
            document.querySelector('.B2C_education_percentage_6').innerText = `${data.education['Bachelor’s degree']}%`;
            document.querySelector('.B2C_education_percentage_7').innerText = `${data.education['Master’s degree']}%`;
            document.querySelector('.B2C_education_percentage_8').innerText = `${data.education['Professional degree']}%`;
            document.querySelector('.B2C_education_percentage_9').innerText = `${data.education['Doctorate degree']}%`;

            // house_ownership
            document.querySelector('.B2C_house_ownership_1').innerText = `${data.homeType['Apartment/Flat']}%`;
            document.querySelector('.B2C_house_ownership_2').innerText = `${data.homeType['Bungalow']}%`;
            document.querySelector('.B2C_house_ownership_3').innerText = `${data.homeType['Caravan']}%`;
            document.querySelector('.B2C_house_ownership_4').innerText = `${data.homeType['Castle']}%`;
            document.querySelector('.B2C_house_ownership_5').innerText = `${data.homeType['Condominium/Condo']}%`;
            document.querySelector('.B2C_house_ownership_6').innerText = `${data.homeType['Cottage']}%`;
            document.querySelector('.B2C_house_ownership_7').innerText = `${data.homeType['Dormitory/Group Quarters']}%`;
            document.querySelector('.B2C_house_ownership_8').innerText = `${data.homeType['Flat/Apartment with a Garden']}%`;
            document.querySelector('.B2C_house_ownership_9').innerText = `${data.homeType['Flat/Apartment with no outside space']}%`;
            document.querySelector('.B2C_house_ownership_10').innerText = `${data.homeType['Detached house']}%`;
            document.querySelector('.B2C_house_ownership_11').innerText = `${data.homeType['Semi detached house']}%`;
            document.querySelector('.B2C_house_ownership_12').innerText = `${data.homeType['Semi-detached']}%`;
            document.querySelector('.B2C_house_ownership_13').innerText = `${data.homeType['Terrace']}%`;
            document.querySelector('.B2C_house_ownership_14').innerText = `${data.homeType['Other']}%`;

            // Household Income
            document.querySelector('.B2C_household_income_1').innerText = `${data.householdIncome['> 15K']}%`;
            document.querySelector('.B2C_household_income_2').innerText = `${data.householdIncome['15K - 24K']}%`;
            document.querySelector('.B2C_household_income_3').innerText = `${data.householdIncome['25K - 34K']}%`;
            document.querySelector('.B2C_household_income_4').innerText = `${data.householdIncome['35K - 44K']}%`;
            document.querySelector('.B2C_household_income_5').innerText = `${data.householdIncome['45K - 59K']}%`;
            document.querySelector('.B2C_household_income_6').innerText = `${data.householdIncome['60K - 84K']}%`;
            document.querySelector('.B2C_household_income_7').innerText = `${data.householdIncome['85K - 124K']}%`;
            document.querySelector('.B2C_household_income_8').innerText = `${data.householdIncome['125K - 149K']}%`;
            document.querySelector('.B2C_household_income_9').innerText = `${data.householdIncome['150K - 174K']}%`;
            document.querySelector('.B2C_household_income_10').innerText = `${data.householdIncome['175K <']}%`;

            // ocupations
            document.querySelector('.B2C_ocupation_1').innerText = `${data.employmentStatus['Full Time Employee']}%`;
            document.querySelector('.B2C_ocupation_2').innerText = `${data.employmentStatus['Part Time Employee']}%`;
            document.querySelector('.B2C_ocupation_3').innerText = `${data.employmentStatus['Retired']}%`;
            document.querySelector('.B2C_ocupation_4').innerText = `${data.employmentStatus['Student']}%`;
            document.querySelector('.B2C_ocupation_5').innerText = `${data.employmentStatus['Military']}%`;
            document.querySelector('.B2C_ocupation_6').innerText = `${data.employmentStatus['Self Employed']}%`;
            document.querySelector('.B2C_ocupation_7').innerText = `${data.employmentStatus['Unemployed']}%`;
            document.querySelector('.B2C_ocupation_8').innerText = `${data.employmentStatus['Notable to work']}%`;
            document.querySelector('.B2C_ocupation_9').innerText = `${data.employmentStatus['Seasonal Emp']}%`;
            document.querySelector('.B2C_ocupation_10').innerText = `${data.employmentStatus['Homemaker']}%`;
            document.querySelector('.B2C_ocupation_11').innerText = `${data.employmentStatus['Home Parents']}%`;

            // Married Status
            document.querySelector('.B2C_married').innerText = `${data.maritalStatus['Married']}%`;
            document.querySelector('.B2C_unmarried').innerText = `${data.maritalStatus['Unmarried/Single']}%`;
            document.querySelector('.B2C_divorce').innerText = `${data.maritalStatus['Divorce']}%`;
            document.querySelector('.B2C_separated').innerText = `${data.maritalStatus['Widow/Separated']}%`;

            // Residential Status
            document.querySelector('.B2C_residential_status_1').innerText = `${data.homeOwnership['Own Primary Residence']}%`;
            document.querySelector('.B2C_residential_status_2').innerText = `${data.homeOwnership['Rent Promary Residence']}%`;
            document.querySelector('.B2C_residential_status_3').innerText = `${data.homeOwnership['Live with family Members']}%`;
            document.querySelector('.B2C_residential_status_4').innerText = `${data.homeOwnership['Live in student/University living']}%`;
            document.querySelector('.B2C_residential_status_5').innerText = `${data.homeOwnership['Other']}%`;

            // Parents Of Children
            document.querySelector('.B2C_parents_of_children_1').innerText = `${data.parentism['18+']}%`;
            document.querySelector('.B2C_parents_of_children_2').innerText = `${data.parentism['15-18Years']}%`;
            document.querySelector('.B2C_parents_of_children_3').innerText = `${data.parentism['7-14 Years']}%`;
            document.querySelector('.B2C_parents_of_children_4').innerText = `${data.parentism['3-7 Years']}%`;
            document.querySelector('.B2C_parents_of_children_5').innerText = `${data.parentism['0-2 Years']}%`;


            // B2B DATAS 
            // Employee Size 
            document.querySelector('.B2B_emp_percentage_1').innerHTML = `${data.empCount['1 - 9 Employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_2').innerHTML = `${data.empCount['10 - 49 Employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_3').innerHTML = `${data.empCount['50 to 99 employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_4').innerHTML = `${data.empCount['100 to 499 employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_5').innerHTML = `${data.empCount['500 to 999 employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_6').innerHTML = `${data.empCount['1000 to 4999 employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_7').innerHTML = `${data.empCount['5000 to 9999 Employees']}% <i class="fa-solid fa-user "></i>`;
            document.querySelector('.B2B_emp_percentage_8').innerHTML = `${data.empCount['10000 or more employees']}% <i class="fa-solid fa-user "></i>`;

            // Gender
            document.querySelector('.B2B_man_percentage').innerText = `${data.gender.B2B.males}%`;
            document.querySelector('.B2B_woman_percentage').innerText = `${data.gender.B2B.females}%`;
            document.querySelector('.B2B_other_percentage').innerText = `${data.gender.B2B.others}%`;

            // Profiles
            document.querySelector('.B2B_profile_percentage_1').innerText = `${data.profiles['UPPER MGMT']}%`;
            document.querySelector('.B2B_profile_percentage_2').innerText = `${data.profiles['DR / VP / SVP']}%`;
            document.querySelector('.B2B_profile_percentage_3').innerText = `${data.profiles['MANAGER & BELOW']}%`;
            document.querySelector('.B2B_profile_percentage_4').innerText = `${data.profiles['DMS']}%`;
            document.querySelector('.B2B_profile_percentage_5').innerText = `${data.profiles['OTHERS']}%`;

            // annual revenue
            document.querySelector('.B2B_annual_revenue_percentage_1').innerText = `${data.orgRevenue['> 50 K']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_2').innerText = `${data.orgRevenue['50 K - 250 K']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_3').innerText = `${data.orgRevenue['250 K - 500 K']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_4').innerText = `${data.orgRevenue['500 K - 750 K']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_5').innerText = `${data.orgRevenue['750 K - 1 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_6').innerText = `${data.orgRevenue['1 M - 2 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_7').innerText = `${data.orgRevenue['2 M - 5 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_8').innerText = `${data.orgRevenue['5 M - 10 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_9').innerText = `${data.orgRevenue['10 M - 25 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_10').innerText = `${data.orgRevenue['25 M - 50 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_11').innerText = `${data.orgRevenue['50 M - 100 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_12').innerText = `${data.orgRevenue['100 M - 249 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_13').innerText = `${data.orgRevenue['250 M - 500 M']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_14').innerText = `${data.orgRevenue['500 M - 1 B']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_15').innerText = `${data.orgRevenue['1 B - 10 B']}%`;
            document.querySelector('.B2B_annual_revenue_percentage_16').innerText = `${data.orgRevenue['10 B <']}%`;

            // industry
            // industry Agriculture
            document.querySelector('.B2B_industry_agriculture_sector_percentage_1').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_agriculture_sector_percentage_3').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_agriculture_sector_percentage_4').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_agriculture_sector_percentage_5').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_agriculture_sector_percentage_2').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_agriculture_sector_percentage_6').innerText = between3To20()+"%";

            // industry Manufacturing
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_1').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_2').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_3').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_4').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_5').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_6').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_7').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_8').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_9').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_10').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_11').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_12').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_13').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_14').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_15').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_16').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_17').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_18').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_19').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_20').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_21').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_22').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_manufacturing_sector_percentage_23').innerText = between3To20()+"%";

            // industry service
            document.querySelector('.B2B_industry_service_sector_percentage_1').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_2').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_3').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_4').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_5').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_6').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_7').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_8').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_9').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_10').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_11').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_12').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_13').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_14').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_15').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_16').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_17').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_18').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_19').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_20').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_21').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_22').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_23').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_24').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_service_sector_percentage_25').innerText = between3To20()+"%";


            // govt and defense 
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_1').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_2').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_3').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_4').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_5').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_6').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_7').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_8').innerText = between3To20()+"%";
            document.querySelector('.B2B_industry_govt_defense_sector_percentage_9').innerText = between3To20()+"%";

            // Healthcare 
            // hospital type
            document.querySelector('.healthcare_hospital_type_percentage_1').innerText = numberRound(`${data.healthcare.data.htype['Academic institution or teaching hospital']}`);
            document.querySelector('.healthcare_hospital_type_percentage_2').innerText = numberRound(`${data.healthcare.data.htype['Private clinic']}`);
            document.querySelector('.healthcare_hospital_type_percentage_3').innerText = numberRound(`${data.healthcare.data.htype['Community clinic']}`);
            document.querySelector('.healthcare_hospital_type_percentage_4').innerText = numberRound(`${data.healthcare.data.htype['University hospital']}`);
            document.querySelector('.healthcare_hospital_type_percentage_5').innerText = numberRound(`${data.healthcare.data.htype['General']}`);
            document.querySelector('.healthcare_hospital_type_percentage_6').innerText = numberRound(`${data.healthcare.data.htype['National hospital']}`);

            // gender 
            document.querySelector('.healthcare_gender_man_percentage').innerText = roundWithDecimal(`${data.healthcare.data.gender['male']}`);
            document.querySelector('.healthcare_gender_woman_percentage').innerText = roundWithDecimal(`${data.healthcare.data.gender['female']}`);
            document.querySelector('.healthcare_gender_others_percentage').innerText = roundWithDecimal(`${data.healthcare.data.gender['others']}`);

            // Education
            document.querySelector('.healthcare_education_percentage_1').innerText = numberRound(`${data.healthcare.data.education['M.B.B.S']}`);
            document.querySelector('.healthcare_education_percentage_2').innerText = numberRound(`${data.healthcare.data.education['B.D.S']}`);
            document.querySelector('.healthcare_education_percentage_3').innerText = numberRound(`${data.healthcare.data.education['B.A.M.S']}`);
            document.querySelector('.healthcare_education_percentage_4').innerText = numberRound(`${data.healthcare.data.education['B.U.M.S']}`);
            document.querySelector('.healthcare_education_percentage_5').innerText = numberRound(`${data.healthcare.data.education['B.H.M.S']}`);
            document.querySelector('.healthcare_education_percentage_6').innerText = numberRound(`${data.healthcare.data.education['B.Y.N.S']}`);
            document.querySelector('.healthcare_education_percentage_7').innerText = numberRound(`${data.healthcare.data.education['B.V.sc&AH']}`);
            document.querySelector('.healthcare_education_percentage_8').innerText = numberRound(`${data.healthcare.data.education['MBBCh']}`);
            document.querySelector('.healthcare_education_percentage_9').innerText = numberRound(`${data.healthcare.data.education['MBChC']}`);
            document.querySelector('.healthcare_education_percentage_10').innerText = numberRound(`${data.healthcare.data.education['MD']}`);
            document.querySelector('.healthcare_education_percentage_11').innerText = numberRound(`${data.healthcare.data.education['M.M,Mmed']}`);
            document.querySelector('.healthcare_education_percentage_12').innerText = numberRound(`${data.healthcare.data.education['MCM']}`);

            // household income
            document.querySelector('.healthcare_household_income_percentage_1').innerText = numberRound(`${data.healthcare.data.income['> 15K']}`);
            document.querySelector('.healthcare_household_income_percentage_2').innerText = numberRound(`${data.healthcare.data.income['15K - 24K']}`);
            document.querySelector('.healthcare_household_income_percentage_3').innerText = numberRound(`${data.healthcare.data.income['25K - 34K']}`);
            document.querySelector('.healthcare_household_income_percentage_4').innerText = numberRound(`${data.healthcare.data.income['35K - 44K']}`);
            document.querySelector('.healthcare_household_income_percentage_5').innerText = numberRound(`${data.healthcare.data.income['45K - 59K']}`);
            document.querySelector('.healthcare_household_income_percentage_6').innerText = numberRound(`${data.healthcare.data.income['60K - 84K']}`);
            document.querySelector('.healthcare_household_income_percentage_7').innerText = numberRound(`${data.healthcare.data.income['85K - 124K']}`);
            document.querySelector('.healthcare_household_income_percentage_8').innerText = numberRound(`${data.healthcare.data.income['125K - 149K']}`);
            document.querySelector('.healthcare_household_income_percentage_9').innerText = numberRound(`${data.healthcare.data.income['150K - 174K']}`);
            document.querySelector('.healthcare_household_income_percentage_10').innerText = numberRound(`${data.healthcare.data.income['175K <']}`);

            // Hospital bed size
            document.querySelector('.healthcare_bed_size_percentage_1').innerText = numberRound(`${data.healthcare.data.bedsize['> 10 beds']}`);
            document.querySelector('.healthcare_bed_size_percentage_2').innerText = numberRound(`${data.healthcare.data.bedsize['10 to 15 beds']}`);
            document.querySelector('.healthcare_bed_size_percentage_3').innerText = numberRound(`${data.healthcare.data.bedsize['16 to 30 beds']}`);
            document.querySelector('.healthcare_bed_size_percentage_4').innerText = numberRound(`${data.healthcare.data.bedsize['31 to 50 beds']}`);
            document.querySelector('.healthcare_bed_size_percentage_5').innerText = numberRound(`${data.healthcare.data.bedsize['51 to 80 beds']}`);
            document.querySelector('.healthcare_bed_size_percentage_6').innerText = numberRound(`${data.healthcare.data.bedsize['81 to 100 beds']}`);
            document.querySelector('.healthcare_bed_size_percentage_7').innerText = numberRound(`${data.healthcare.data.bedsize['100+ beds']}`);

            // Ethnicity
            document.querySelector('.healthcare_ethnicity_percentage_1').innerText = numberRound(`${data.healthcare.data.ethnicity['White/Caucian']}`);
            document.querySelector('.healthcare_ethnicity_percentage_2').innerText = numberRound(`${data.healthcare.data.ethnicity['Black, or African American']}`);
            document.querySelector('.healthcare_ethnicity_percentage_3').innerText = numberRound(`${data.healthcare.data.ethnicity['American Indian or Alaska Native']}`);
            document.querySelector('.healthcare_ethnicity_percentage_4').innerText = numberRound(`${data.healthcare.data.ethnicity['Asian']}`);
            document.querySelector('.healthcare_ethnicity_percentage_5').innerText = numberRound(`${data.healthcare.data.ethnicity['Hispanic']}`);
            document.querySelector('.healthcare_ethnicity_percentage_6').innerText = numberRound(`${data.healthcare.data.ethnicity['Other race']}`);

            // Hospital Expertise
            document.querySelector('.healthcare_hospital_expertise_percentage_1').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_2').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_3').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_4').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_5').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_6').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_7').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_8').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_9').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_10').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_11').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_12').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_13').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_14').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_15').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_16').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_17').innerText = between5To7()+"%";
            document.querySelector('.healthcare_hospital_expertise_percentage_18').innerText = between5To7()+"%";

            // Department / Specialist
            document.querySelector('.healthcare_department_specialist_percentage_1').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_2').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_3').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_4').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_5').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_6').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_7').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_8').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_9').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_10').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_11').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_12').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_13').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_14').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_15').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_16').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_17').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_18').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_19').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_20').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_21').innerText = dsBetween3To5();
            document.querySelector('.healthcare_department_specialist_percentage_22').innerText = dsBetween3To5();

            // for Department / Specialist
            // Medical Specialist 
            document.querySelector('.department_specialist_percentage_1').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_2').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_3').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_4').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_5').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_6').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_7').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_8').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_9').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_10').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_11').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_12').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_13').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_14').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_15').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_16').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_17').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_18').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_19').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_20').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_21').innerText = between1To2();
            document.querySelector('.department_specialist_percentage_22').innerText = between1To2();


            // Ailments
            // Allergy & Immunology 
            document.querySelector('.healthcare_allergy_immunology_percentage_1').innerText = between13To22();
            document.querySelector('.healthcare_allergy_immunology_percentage_2').innerText = between13To22();
            document.querySelector('.healthcare_allergy_immunology_percentage_3').innerText = between13To22();
            document.querySelector('.healthcare_allergy_immunology_percentage_4').innerText = between13To22();
            document.querySelector('.healthcare_allergy_immunology_percentage_5').innerText = between13To22();
            document.querySelector('.healthcare_allergy_immunology_percentage_6').innerText = between13To22();

            // blood & circulation;
            document.querySelector('.healthcare_blood_circulation_percentage_1').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_2').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_3').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_4').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_5').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_6').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_7').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_8').innerText = between9To13();
            document.querySelector('.healthcare_blood_circulation_percentage_9').innerText = between9To13();

            // brain & nervous system
            document.querySelector('.healthcare_brain_nervous_percentage_1').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_2').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_3').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_4').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_5').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_6').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_7').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_8').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_9').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_10').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_11').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_12').innerText = between6To9();
            document.querySelector('.healthcare_brain_nervous_percentage_13').innerText = between6To9();

            
            // cancer 
            document.querySelector('.healthcare_cancer_percentage_1').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_2').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_3').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_4').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_5').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_6').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_7').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_8').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_9').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_10').innerText = between7To11();
            document.querySelector('.healthcare_cancer_percentage_11').innerText = between7To11();

            
            // digestive system 
            document.querySelector('.healthcare_digestive_system_percentage_1').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_2').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_3').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_4').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_5').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_6').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_7').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_8').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_9').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_10').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_11').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_12').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_13').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_14').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_15').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_16').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_17').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_18').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_19').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_20').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_21').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_22').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_23').innerText = between3To5();
            document.querySelector('.healthcare_digestive_system_percentage_24').innerText = between3To5();


            // endocrine system
            document.querySelector('.healthcare_endocrine_system_percentage_1').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_2').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_3').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_4').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_5').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_6').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_7').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_8').innerText = between9To13();
            document.querySelector('.healthcare_endocrine_system_percentage_9').innerText = between9To13();


            // Content for Ear/Eye/Nose/Throat
            document.querySelector('.healthcare_throat_percentage_1').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_2').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_3').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_4').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_5').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_6').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_7').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_8').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_9').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_10').innerText = between7To11();
            document.querySelector('.healthcare_throat_percentage_11').innerText = between7To11();


            // Heart & Vascular Disorders
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_1').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_2').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_3').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_4').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_5').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_6').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_7').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_8').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_9').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_10').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_11').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_12').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_13').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_14').innerText = between5To8();
            document.querySelector('.healthcare_heart_vascular_disorders_percentage_15').innerText = between5To8();


            // infectious diseases
            document.querySelector('.healthcare_infectious_diseases_percentage_1').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_2').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_3').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_4').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_5').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_6').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_7').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_8').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_9').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_10').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_11').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_12').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_13').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_14').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_15').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_16').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_17').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_18').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_19').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_20').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_21').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_22').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_23').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_24').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_25').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_26').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_27').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_28').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_29').innerText = between3To4();
            document.querySelector('.healthcare_infectious_diseases_percentage_30').innerText = between3To4();


            // musculoskeletal
            document.querySelector('.healthcare_musculoskeletal_percentage_1').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_2').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_3').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_4').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_5').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_6').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_7').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_8').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_9').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_10').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_11').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_12').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_13').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_14').innerText = between5To8();
            document.querySelector('.healthcare_musculoskeletal_percentage_15').innerText = between5To8();


            // psychology
            document.querySelector('.healthcare_psychology_percentage_1').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_2').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_3').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_4').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_5').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_6').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_7').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_8').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_9').innerText = between8To12();
            document.querySelector('.healthcare_psychology_percentage_10').innerText = between8To12();


            // reproductive system
            document.querySelector('.healthcare_reproductive_system_percentage_1').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_2').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_3').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_4').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_5').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_6').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_7').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_8').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_9').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_10').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_11').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_12').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_13').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_14').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_15').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_16').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_17').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_18').innerText = between4To6();
            document.querySelector('.healthcare_reproductive_system_percentage_19').innerText = between4To6();
            
            
            // respiratory
            document.querySelector('.healthcare_respiratory_percentage_1').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_2').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_3').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_4').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_5').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_6').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_7').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_8').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_9').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_10').innerText = between7To11();
            document.querySelector('.healthcare_respiratory_percentage_11').innerText = between7To11();


            // skin, nails & hair disorders
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_1').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_2').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_3').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_4').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_5').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_6').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_7').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_8').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_9').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_10').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_11').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_12').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_13').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_14').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_15').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_16').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_17').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_18').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_19').innerText = between4To6();
            document.querySelector('.healthcare_skin_nails_hair_disorders_percentage_20').innerText = between4To6();


            // ailments other
            document.querySelector('.healthcare_ailments_other_percentage_1').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_2').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_3').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_4').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_5').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_6').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_7').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_8').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_9').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_10').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_11').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_12').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_13').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_14').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_15').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_16').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_17').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_18').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_19').innerText = between4To6();
            document.querySelector('.healthcare_ailments_other_percentage_20').innerText = between4To6();


        } else {
        }
    }
}

////////////////////////////////////////
////////////////////////////////////////



