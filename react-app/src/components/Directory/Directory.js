import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteMaker, loadMakers } from '../../store/maker';

import './Directory.css';

const Directory = () => {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadMakers());
    }, []);

    const allMakers = useSelector(state => {
        return state.makers;
    });

    const [searchParams, setSearchParams] = useState('');
    const [searchYarn, setSearchYarn] = useState(false);
    const [searchFiber, setSearchFiber] = useState(false);
    const [searchNotions, setSearchNotions] = useState(false);
    const [searchKnitting, setSearchKnitting] = useState(false);
    const [searchCrochet, setSearchCrochet] = useState(false);
    const [searchEmbroidery, setSearchEmbroidery] = useState(false);
    const [searchCountry, setSearchCountry] = useState('');

    const [sortMaker, setSortMaker] = useState(false);
    const [sortWebsite, setSortWebsite] = useState(false);
    const [sortInstagram, setSortInstagram] = useState(false);
    const [sortCountry, setSortCountry] = useState(false);
    const [sortYarn, setSortYarn] = useState(false);
    const [sortFiber, setSortFiber] = useState(false);
    const [sortNotions, setSortNotions] = useState(false);
    const [sortKnitting, setSortKnitting] = useState(false);
    const [sortCrochet, setSortCrochet] = useState(false);
    const [sortEmbroidery, setSortEmbroidery] = useState(false);

    const [searchResultsArr, setSearchResultsArr] = useState([]);

    useEffect(() => {
        setSearchResultsArr(Object.values(allMakers));
    }, [allMakers]);

    const handleSearchYarn = () => {
        setSearchYarn(!searchYarn);
    };

    const handleSearchFiber = () => {
        setSearchFiber(!searchFiber);
    };

    const handleSearchNotions = () => {
        setSearchNotions(!searchNotions);
    };

    const handleSearchKnitting = () => {
        setSearchKnitting(!searchKnitting);
    };

    const handleSearchCrochet = () => {
        setSearchCrochet(!searchCrochet);
    };

    const handleSearchEmbroidery = () => {
        setSearchEmbroidery(!searchEmbroidery);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        let tempArr = [];
        if (searchParams.length > 0) {
            Object.values(allMakers).forEach(maker => {
                if (maker.name.toLowerCase().includes(searchParams.toLowerCase()) || maker.instagram.toLowerCase().includes(searchParams.toLowerCase())) {
                    tempArr.push(maker);
                };
            });
        } else {
            tempArr = Object.values(allMakers);
        };

        if (searchCountry.length > 0 && searchCountry !== 'select country') {
            let countriesSortArr = [];
            tempArr.forEach(maker => {
                if (maker.country === searchCountry) {
                    countriesSortArr.push(maker);
                };
            });
            tempArr = countriesSortArr.slice();
        };

        if (searchYarn || searchFiber || searchNotions || searchKnitting || searchCrochet || searchEmbroidery) {
            let tempSet = new Set();
            if (searchYarn) {
                tempArr.forEach(maker => {
                    if (maker.isYarn) {
                        tempSet.add(maker);
                    };
                });
            };
            if (searchFiber) {
                tempArr.forEach(maker => {
                    if (maker.isFiber) {
                        tempSet.add(maker);
                    };
                });
            };
            if (searchNotions) {
                tempArr.forEach(maker => {
                    if (maker.isNotions) {
                        tempSet.add(maker);
                    };
                });
            };
            if (searchKnitting) {
                tempArr.forEach(maker => {
                    if (maker.isKnitting) {
                        tempSet.add(maker);
                    };
                });
            };
            if (searchCrochet) {
                tempArr.forEach(maker => {
                    if (maker.isCrochet) {
                        tempSet.add(maker);
                    };
                });
            };
            if (searchEmbroidery) {
                tempArr.forEach(maker => {
                    if (maker.isEmbroidery) {
                        tempSet.add(maker);
                    };
                });
            };
            tempArr = Array.from(tempSet);
        };

        setSearchResultsArr(tempArr);
    };

    const handleEdit = (e) => {
        history.push(`/edit/${e.target.value}`);
    };

    const handleDelete = (e) => {
        dispatch(deleteMaker(e.target.value));
    };

    const countries = {
        "AF": "Afghanistan",
        "AX": "Aland Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia",
        "BQ": "Bonaire, Sint Eustatius and Saba",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "CV": "Cape Verde",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CG": "Congo",
        "CD": "Congo, the Democratic Republic of the",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "CI": "Cote D'Ivoire",
        "HR": "Croatia",
        "CU": "Cuba",
        "CW": "Curacao",
        "CY": "Cyprus",
        "CZ": "Czech Republic",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "ET": "Ethiopia",
        "FK": "Falkland Islands (Malvinas)",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and Mcdonald Islands",
        "VA": "Holy See (Vatican City State)",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran, Islamic Republic of",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KP": "Korea, Democratic People's Republic of",
        "KR": "Korea, Republic of",
        "XK": "Kosovo",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People's Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libyan Arab Jamahiriya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MK": "Macedonia, the Former Yugoslav Republic of",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia, Federated States of",
        "MD": "Moldova, Republic of",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "AN": "Netherlands Antilles",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestinian Territory, Occupied",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "RE": "Reunion",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "BL": "Saint Barthelemy",
        "SH": "Saint Helena",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and the Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "CS": "Serbia and Montenegro",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SX": "Sint Maarten",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard and Jan Mayen",
        "SZ": "Swaziland",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syrian Arab Republic",
        "TW": "Taiwan, Province of China",
        "TJ": "Tajikistan",
        "TZ": "Tanzania, United Republic of",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "Turkey",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom",
        "US": "United States",
        "UM": "United States Minor Outlying Islands",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela",
        "VN": "Viet Nam",
        "VG": "Virgin Islands, British",
        "VI": "Virgin Islands, U.s.",
        "WF": "Wallis and Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    };

    return (
        <div className='directory-page'>
            <form className='search-form-container'
                onSubmit={handleSearch}>
                <div id='search-form-header'>
                    Search for...
                </div>
                <input
                    onChange={async (e) => {
                        setSearchParams(e.target.value);
                    }}
                    className='search-input-element'
                    value={searchParams}
                    id='search-params'
                    type='text'
                    placeholder='Search for anything'
                />
                <p className='label'>
                    I'm looking for any of these...
                </p>
                <div className='option-buttons'>
                    <button
                        type='button'
                        className={searchYarn ? 'yes-button' : ''}
                        onClick={handleSearchYarn}>
                        Yarn
                    </button>
                    <button
                        type='button'
                        className={searchFiber ? 'yes-button' : ''}
                        onClick={handleSearchFiber}>
                        Fiber
                    </button>
                    <button
                        type='button'
                        className={searchNotions ? 'yes-button' : ''}
                        onClick={handleSearchNotions}>
                        Notions
                    </button>
                    <button
                        type='button'
                        className={searchKnitting ? 'yes-button' : ''}
                        onClick={handleSearchKnitting}>
                        Knitting Patterns
                    </button>
                    <button
                        type='button'
                        className={searchCrochet ? 'yes-button' : ''}
                        onClick={handleSearchCrochet}>
                        Crochet Patterns
                    </button>
                    <button
                        type='button'
                        className={searchEmbroidery ? 'yes-button' : ''}
                        onClick={handleSearchEmbroidery}>
                        Embroidery Patterns
                    </button>
                </div>
                <p className='label'>
                    Maker Country
                </p>
                <select id="country" name="country" onChange={(e) => setSearchCountry(e.target.value)}>
                    <option>select country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and Mcdonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.s.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                </select>
                <button
                    type='submit'
                    onClick={handleSearch}
                    className='submit-search-button'>
                    Submit
                </button>
            </form>
            <div className='search-body'>
                <h1>Queer Maker Directory</h1>
                <p>Please consider this directory a starting point to discover and support some amazing and talented Queer makers in our community.</p>
                <p>If you are a Queer maker and would like to be added to the directory, please submit the relevant details at <a class="body-link" href="https://forms.gle/mJvUT68hnVLLuWsUA" rel="noreferrer" target="_blank">the link here</a>, thank you!</p>
                <table className='search-results'>
                    <thead>
                        <tr>
                            <th>Maker</th>
                            <th>Website</th>
                            <th>Instagram</th>
                            <th>Country</th>
                            <th className='table-short'>Yarn?</th>
                            <th className='table-short'>Fiber?</th>
                            <th className='table-short'>Notions?</th>
                            <th className='table-icons'>
                                <img src='https://scrapswap.s3.amazonaws.com/knitting.png' alt='knitting' /></th>
                            <th className='table-icons'>
                                <img src='https://scrapswap.s3.amazonaws.com/crochet.png' alt='crochet' /></th>
                            <th className='table-icons'>
                                <img src='https://scrapswap.s3.amazonaws.com/cross-stitch.png' alt='embroidery' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResultsArr.length ?
                            searchResultsArr.map((maker, idx) =>
                                <tr key={idx}>
                                    <td className={user?.username === 'admin' || user?.username === 'DemoUser' ? 'maker-name-div' : ''}>
                                        {maker.name}
                                        {(user?.username === 'admin' || user?.username === 'DemoUser') ?
                                            <div className='maker-name-div-buttons'>
                                                <button value={maker.id} onClick={handleEdit}>Edit</button>
                                                <button value={maker.id} onClick={handleDelete}>Delete</button>
                                            </div>
                                            : ''}
                                    </td>
                                    <td>
                                        <a href={maker.website}
                                            className='body-link'
                                            target='_blank'
                                            rel='noreferrer'>
                                            Link
                                        </a>
                                    </td>
                                    <td>
                                        <a href={`https://instagram.com/${maker.instagram}`}
                                            className='body-link'
                                            target='_blank'
                                            rel='noreferrer'>
                                            {maker.instagram}
                                        </a>
                                    </td>
                                    <td>
                                        {countries[maker.country]}
                                    </td>
                                    <td>
                                        {maker.isYarn ? <>Yes</> : <>No</>}
                                    </td>
                                    <td>
                                        {maker.isFiber ? <>Yes</> : <>No</>}
                                    </td>
                                    <td>
                                        {maker.isNotions ? <>Yes</> : <>No</>}
                                    </td>
                                    <td>
                                        {maker.isKnitting ? <>Yes</> : <>No</>}
                                    </td>
                                    <td>
                                        {maker.isCrochet ? <>Yes</> : <>No</>}
                                    </td>
                                    <td>
                                        {maker.isEmbroidery ? <>Yes</> : <>No</>}
                                    </td>
                                </tr>)
                            : ''}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Directory;
