import union from 'lodash'

export const management_role_type = [
    {"name": "Chief Executive Officer - CEO","value":"CEO"},
    {"name": "Chief Operating Officer - COO","value":"COO"},
    {"name": "Chief Finance Officer - CFO","value":"CFO"},
    {"name": "Assistant Vice President","value":"AVP"},
    {"name": "CEO & Founder","value":"CEOF"},
    {"name": "Chairman","value":"CHA"},
    {"name": "Chairman & Founder","value":"CHAF"},
    {"name": "Chief Finance Officer","value":"CFO"},
    {"name": "Chairman & CEO","value":"CHAE"},
    {"name": "Chairwoman","value":"CHW"},
    {"name": "Chairwoman & CEO","value":"CHWE"},
    {"name": "Chief Communications Officer","value":"CCO"},
    {"name": "Chief Investment Officer","value":"CIO"},
    {"name": "Chief Technology Officer","value":"CTO"},
    {"name": "Co-Founder","value":"COF"},
    {"name": "Director","value":"DIR"},
    {"name": "Executive Chairman","value":"EXC"},
    {"name": "Executive Director","value":"EXD"},
    {"name": "Financial Control Officer","value":"FCO"},
    {"name": "Founder","value":"FOU"},
    {"name": "Invester Relations Manager","value":"IRM"},
    {"name": "Managing Director","value":"MD"},
    {"name": "Managing Director & Founding Partner","value":"MDF"},
    {"name": "Managing Partner","value":"MP"},
    {"name": "Non-Executive Chairman","value":"NEC"},
    {"name": "President","value":"PRE"},
    {"name": "President & CEO","value":"PRC"},
    {"name": "Vice Chairman","value":"VCH"},
    {"name": "Vice President","value":"VP"}];


export const news_type = [
    {"name": "Any Type","value":""},
    {"name": "Announcements","value":"ANN"},
    {"name": "Media Release","value":"MER"},
    {"name": "IR Briefing","value":"IRB"},
    {"name": "Change In Shareholding", "value":"CIS"}
]
export const connections_type = [
    {"name": "Fund Managers","value":"FM"},
    {"name": "Listed Companies","value":"LC"}
]
export const display_options_no_calendar=[
  {
    "name": "list",
    "src":"/public/static/images/common/list-view-icon.png",
    "selected": "/public/static/images/common/list-view-icon-selected.png",
    "value": "list",
    "class": "hidden-sm hidden-xs list"
  },

  {
    "name": "grid",
    "src":"/public/static/images/common/grid-view-icon.png",
    "selected": "/public/static/images/common/grid-view-icon-selected.png",
    "value": "grid",
    "class": "hidden-sm hidden-xs grid"
  }

]

export const display_options=[...display_options_no_calendar,

  {
    "name": "calendar",
    "src":"/public/static/images/common/calendar-view-icon.png",
    "selected": "/public/static/images/common/calendar-view-icon-selected.png",
    "value": "calendar"
  }]

export const public_date_filter_list = [

  {
    "name":"Upcoming Events",
    "value":0
  },
  {
    "name":"Past Events",
    "value":-30
  }
]
export const public_news_date_filter_list = [

  {
    "name":"All Dates",
    "value":0
  },
  {
    "name":"Last 7 Days",
    "value":-7
  }
  ,
  {
    "name":"Last 30 Days",
    "value":-30
  }
  ,
  {
    "name":"Last 180 Days",
    "value":-180
  }
]
export const country_list = [
  {
    "name":"Afghanistan",
    "iso":"AF",
    "currency":"afn"
  },
  {
    "name":"\u00c5land Islands",
    "iso":"AX",
    "currency":"eur"
  },
  {
    "name":"Albania",
    "iso":"AL",
    "currency":"all"
  },
  {
    "name":"Algeria",
    "iso":"DZ",
    "currency":"dzd"
  },
  {
    "name":"American Samoa",
    "iso":"AS",
    "currency":"usd"
  },
  {
    "name":"AndorrA",
    "iso":"AD",
    "currency":"eur"
  },
  {
    "name":"Angola",
    "iso":"AO",
    "currency":"aoa"
  },
  {
    "name":"Anguilla",
    "iso":"AI",
    "currency":"xcd"
  },
  {
    "name":"Antarctica",
    "iso":"AQ",
    "currency":"usd"
  },
  {
    "name":"Antigua and Barbuda",
    "iso":"AG",
    "currency":"xcd"
  },
  {
    "name":"Argentina",
    "iso":"AR",
    "currency":"ars"
  },
  {
    "name":"Armenia",
    "iso":"AM",
    "currency":"amd"
  },
  {
    "name":"Aruba",
    "iso":"AW",
    "currency":"awg"
  },
  {
    "name":"Australia",
    "iso":"AU",
    "currency":"aud"
  },
  {
    "name":"Austria",
    "iso":"AT",
    "currency":"eur"
  },
  {
    "name":"Azerbaijan",
    "iso":"AZ",
    "currency":"azn"
  },
  {
    "name":"Bahamas",
    "iso":"BS",
    "currency":"bsd"
  },
  {
    "name":"Bahrain",
    "iso":"BH",
    "currency":"bhd"
  },
  {
    "name":"Bangladesh",
    "iso":"BD",
    "currency":"bdt"
  },
  {
    "name":"Barbados",
    "iso":"BB",
    "currency":"bbd"
  },
  {
    "name":"Belarus",
    "iso":"BY",
    "currency":"byr"
  },
  {
    "name":"Belgium",
    "iso":"BE",
    "currency":"eur"
  },
  {
    "name":"Belize",
    "iso":"BZ",
    "currency":"bzd"
  },
  {
    "name":"Benin",
    "iso":"BJ",
    "currency":"xof"
  },
  {
    "name":"Bermuda",
    "iso":"BM",
    "currency":"bmd"
  },
  {
    "name":"Bhutan",
    "iso":"BT",
    "currency":"btn"
  },
  {
    "name":"Bolivia",
    "iso":"BO",
    "currency":"bob"
  },
  {
    "name":"Bosnia and Herzegovina",
    "iso":"BA",
    "currency":"bam"
  },
  {
    "name":"Botswana",
    "iso":"BW",
    "currency":"bwp"
  },
  {
    "name":"Bouvet Island",
    "iso":"BV",
    "currency":"nok"
  },
  {
    "name":"Brazil",
    "iso":"BR",
    "currency":"brl"
  },
  {
    "name":"British Indian Ocean Territory",
    "iso":"IO",
    "currency":"usd"
  },
  {
    "name":"Brunei Darussalam",
    "iso":"BN",
    "currency":"bnd"
  },
  {
    "name":"Bulgaria",
    "iso":"BG",
    "currency":"bgn"
  },
  {
    "name":"Burkina Faso",
    "iso":"BF",
    "currency":"xof"
  },
  {
    "name":"Burundi",
    "iso":"BI",
    "currency":"bif"
  },
  {
    "name":"Cambodia",
    "iso":"KH",
    "currency":"khr"
  },
  {
    "name":"Cameroon",
    "iso":"CM",
    "currency":"xaf"
  },
  {
    "name":"Canada",
    "iso":"CA",
    "currency":"cad"
  },
  {
    "name":"Cape Verde",
    "iso":"CV",
    "currency":"cve"
  },
  {
    "name":"Cayman Islands",
    "iso":"KY",
    "currency":"kyd"
  },
  {
    "name":"Central African Republic",
    "iso":"CF",
    "currency":"xaf"
  },
  {
    "name":"Chad",
    "iso":"TD",
    "currency":"xaf"
  },
  {
    "name":"Chile",
    "iso":"CL",
    "currency":"clp"
  },
  {
    "name":"China",
    "iso":"CN",
    "currency":"cny"
  },
  {
    "name":"Christmas Island",
    "iso":"CX",
    "currency":"aud"
  },
  {
    "name":"Cocos (Keeling) Islands",
    "iso":"CC",
    "currency":"aud"
  },
  {
    "name":"Colombia",
    "iso":"CO",
    "currency":"cop"
  },
  {
    "name":"Comoros",
    "iso":"KM",
    "currency":"kmf"
  },
  {
    "name":"Congo",
    "iso":"CG",
    "currency":"xaf"
  },
  {
    "name":"Congo, The Democratic Republic of the",
    "iso":"CD",
    "currency":"cdf"
  },
  {
    "name":"Cook Islands",
    "iso":"CK",
    "currency":"nzd"
  },
  {
    "name":"Costa Rica",
    "iso":"CR",
    "currency":"crc"
  },
  {
    "name":"Cote D\"Ivoire",
    "iso":"CI",
    "currency":"xof"
  },
  {
    "name":"Croatia",
    "iso":"HR",
    "currency":"hrk"
  },
  {
    "name":"Cuba",
    "iso":"CU",
    "currency":"cup"
  },
  {
    "name":"Cyprus",
    "iso":"CY",
    "currency":"eur"
  },
  {
    "name":"Czech Republic",
    "iso":"CZ",
    "currency":"czk"
  },
  {
    "name":"Denmark",
    "iso":"DK",
    "currency":"dkk"
  },
  {
    "name":"Djibouti",
    "iso":"DJ",
    "currency":"djf"
  },
  {
    "name":"Dominica",
    "iso":"DM",
    "currency":"xcd"
  },
  {
    "name":"Dominican Republic",
    "iso":"DO",
    "currency":"dop"
  },
  {
    "name":"Ecuador",
    "iso":"EC",
    "currency":"usd"
  },
  {
    "name":"Egypt",
    "iso":"EG",
    "currency":"egp"
  },
  {
    "name":"El Salvador",
    "iso":"SV",
    "currency":"usd"
  },
  {
    "name":"Equatorial Guinea",
    "iso":"GQ",
    "currency":"xaf"
  },
  {
    "name":"Eritrea",
    "iso":"ER",
    "currency":"ern"
  },
  {
    "name":"Estonia",
    "iso":"EE",
    "currency":"eur"
  },
  {
    "name":"Ethiopia",
    "iso":"ET",
    "currency":"etb"
  },
  {
    "name":"Falkland Islands (Malvinas)",
    "iso":"FK",
    "currency":"fkp"
  },
  {
    "name":"Faroe Islands",
    "iso":"FO",
    "currency":"dkk"
  },
  {
    "name":"Fiji",
    "iso":"FJ",
    "currency":"fjd"
  },
  {
    "name":"Finland",
    "iso":"FI",
    "currency":"eur"
  },
  {
    "name":"France",
    "iso":"FR",
    "currency":"eur"
  },
  {
    "name":"French Guiana",
    "iso":"GF",
    "currency":"eur"
  },
  {
    "name":"French Polynesia",
    "iso":"PF",
    "currency":"xpf"
  },
  {
    "name":"French Southern Territories",
    "iso":"TF",
    "currency":"eur"
  },
  {
    "name":"Gabon",
    "iso":"GA",
    "currency":"xaf"
  },
  {
    "name":"Gambia",
    "iso":"GM",
    "currency":"gmd"
  },
  {
    "name":"Georgia",
    "iso":"GE",
    "currency":"gel"
  },
  {
    "name":"Germany",
    "iso":"DE",
    "currency":"eur"
  },
  {
    "name":"Ghana",
    "iso":"GH",
    "currency":"ghs"
  },
  {
    "name":"Gibraltar",
    "iso":"GI",
    "currency":"gip"
  },
  {
    "name":"Greece",
    "iso":"GR",
    "currency":"eur"
  },
  {
    "name":"Greenland",
    "iso":"GL",
    "currency":"dkk"
  },
  {
    "name":"Grenada",
    "iso":"GD",
    "currency":"xcd"
  },
  {
    "name":"Guadeloupe",
    "iso":"GP",
    "currency":"eur"
  },
  {
    "name":"Guam",
    "iso":"GU",
    "currency":"usd"
  },
  {
    "name":"Guatemala",
    "iso":"GT",
    "currency":"gtq"
  },
  {
    "name":"Guernsey",
    "iso":"GG",
    "currency":"gbp"
  },
  {
    "name":"Guinea",
    "iso":"GN",
    "currency":"gnf"
  },
  {
    "name":"Guinea-Bissau",
    "iso":"GW",
    "currency":"xof"
  },
  {
    "name":"Guyana",
    "iso":"GY",
    "currency":"gyd"
  },
  {
    "name":"Haiti",
    "iso":"HT",
    "currency":"htg"
  },
  {
    "name":"Heard Island and Mcdonald Islands",
    "iso":"HM",
    "currency":"aud"
  },
  {
    "name":"Holy See (Vatican City State)",
    "iso":"VA",
    "currency":"eur"
  },
  {
    "name":"Honduras",
    "iso":"HN",
    "currency":"hnl"
  },
  {
    "name":"Hong Kong",
    "iso":"HK",
    "currency":"hkd"
  },
  {
    "name":"Hungary",
    "iso":"HU",
    "currency":"huf"
  },
  {
    "name":"Iceland",
    "iso":"IS",
    "currency":"isk"
  },
  {
    "name":"India",
    "iso":"IN",
    "currency":"inr"
  },
  {
    "name":"Indonesia",
    "iso":"ID",
    "currency":"idr"
  },
  {
    "name":"Iran, Islamic Republic Of",
    "iso":"IR",
    "currency":"irr"
  },
  {
    "name":"Iraq",
    "iso":"IQ",
    "currency":"iqd"
  },
  {
    "name":"Ireland",
    "iso":"IE",
    "currency":"eur"
  },
  {
    "name":"Isle of Man",
    "iso":"IM",
    "currency":"gbp"
  },
  {
    "name":"Israel",
    "iso":"IL",
    "currency":"ils"
  },
  {
    "name":"Italy",
    "iso":"IT",
    "currency":"eur"
  },
  {
    "name":"Jamaica",
    "iso":"JM",
    "currency":"jmd"
  },
  {
    "name":"Japan",
    "iso":"JP",
    "currency":"jpy"
  },
  {
    "name":"Jersey",
    "iso":"JE",
    "currency":"gbp"
  },
  {
    "name":"Jordan",
    "iso":"JO",
    "currency":"jod"
  },
  {
    "name":"Kazakhstan",
    "iso":"KZ",
    "currency":"kzt"
  },
  {
    "name":"Kenya",
    "iso":"KE",
    "currency":"kes"
  },
  {
    "name":"Kiribati",
    "iso":"KI",
    "currency":"aud"
  },
  {
    "name":"Korea, Democratic People\"S Republic of",
    "iso":"KP",
    "currency":"kpw"
  },
  {
    "name":"Korea, Republic of",
    "iso":"KR",
    "currency":"krw"
  },
  {
    "name":"Kuwait",
    "iso":"KW",
    "currency":"kwd"
  },
  {
    "name":"Kyrgyzstan",
    "iso":"KG",
    "currency":"kgs"
  },
  {
    "name":"Lao People\"S Democratic Republic",
    "iso":"LA",
    "currency":"lak"
  },
  {
    "name":"Latvia",
    "iso":"LV",
    "currency":"eur"
  },
  {
    "name":"Lebanon",
    "iso":"LB",
    "currency":"lbp"
  },
  {
    "name":"Lesotho",
    "iso":"LS",
    "currency":"lsl"
  },
  {
    "name":"Liberia",
    "iso":"LR",
    "currency":"lrd"
  },
  {
    "name":"Libyan Arab Jamahiriya",
    "iso":"LY",
    "currency":"lyd"
  },
  {
    "name":"Liechtenstein",
    "iso":"LI",
    "currency":"chf"
  },
  {
    "name":"Lithuania",
    "iso":"LT",
    "currency":"ltl"
  },
  {
    "name":"Luxembourg",
    "iso":"LU",
    "currency":"eur"
  },
  {
    "name":"Macao",
    "iso":"MO",
    "currency":"mop"
  },
  {
    "name":"Macedonia, The Former Yugoslav Republic of",
    "iso":"MK",
    "currency":"mkd"
  },
  {
    "name":"Madagascar",
    "iso":"MG",
    "currency":"mga"
  },
  {
    "name":"Malawi",
    "iso":"MW",
    "currency":"mwk"
  },
  {
    "name":"Malaysia",
    "iso":"MY",
    "currency":"myr"
  },
  {
    "name":"Maldives",
    "iso":"MV",
    "currency":"mvr"
  },
  {
    "name":"Mali",
    "iso":"ML",
    "currency":"xof"
  },
  {
    "name":"Malta",
    "iso":"MT",
    "currency":"eur"
  },
  {
    "name":"Marshall Islands",
    "iso":"MH",
    "currency":"usd"
  },
  {
    "name":"Martinique",
    "iso":"MQ",
    "currency":"eur"
  },
  {
    "name":"Mauritania",
    "iso":"MR",
    "currency":"mro"
  },
  {
    "name":"Mauritius",
    "iso":"MU",
    "currency":"mur"
  },
  {
    "name":"Mayotte",
    "iso":"YT",
    "currency":"eur"
  },
  {
    "name":"Mexico",
    "iso":"MX",
    "currency":"mxn"
  },
  {
    "name":"Micronesia, Federated States of",
    "iso":"FM",
    "currency":"usd"
  },
  {
    "name":"Moldova, Republic of",
    "iso":"MD",
    "currency":"mdl"
  },
  {
    "name":"Monaco",
    "iso":"MC",
    "currency":"eur"
  },
  {
    "name":"Mongolia",
    "iso":"MN",
    "currency":"mnt"
  },
  {
    "name":"Montserrat",
    "iso":"MS",
    "currency":"xcd"
  },
  {
    "name":"Morocco",
    "iso":"MA",
    "currency":"mad"
  },
  {
    "name":"Mozambique",
    "iso":"MZ",
    "currency":"mzn"
  },
  {
    "name":"Myanmar",
    "iso":"MM",
    "currency":"mmk"
  },
  {
    "name":"Namibia",
    "iso":"NA",
    "currency":"nad"
  },
  {
    "name":"Nauru",
    "iso":"NR",
    "currency":"aud"
  },
  {
    "name":"Nepal",
    "iso":"NP",
    "currency":"npr"
  },
  {
    "name":"Netherlands",
    "iso":"NL",
    "currency":"eur"
  },
  {
    "name":"Netherlands Antilles",
    "iso":"AN",
    "currency":"ang"
  },
  {
    "name":"New Caledonia",
    "iso":"NC",
    "currency":"xpf"
  },
  {
    "name":"New Zealand",
    "iso":"NZ",
    "currency":"nzd"
  },
  {
    "name":"Nicaragua",
    "iso":"NI",
    "currency":"nio"
  },
  {
    "name":"Niger",
    "iso":"NE",
    "currency":"xof"
  },
  {
    "name":"Nigeria",
    "iso":"NG",
    "currency":"ngn"
  },
  {
    "name":"Niue",
    "iso":"NU",
    "currency":"nzd"
  },
  {
    "name":"Norfolk Island",
    "iso":"NF",
    "currency":"aud"
  },
  {
    "name":"Northern Mariana Islands",
    "iso":"MP",
    "currency":"usd"
  },
  {
    "name":"Norway",
    "iso":"NO",
    "currency":"nok"
  },
  {
    "name":"Oman",
    "iso":"OM",
    "currency":"omr"
  },
  {
    "name":"Pakistan",
    "iso":"PK",
    "currency":"pkr"
  },
  {
    "name":"Palau",
    "iso":"PW",
    "currency":"usd"
  },
  {
    "name":"Palestinian Territory, Occupied",
    "iso":"PS",
    "currency":"ils"
  },
  {
    "name":"Panama",
    "iso":"PA",
    "currency":"pab"
  },
  {
    "name":"Papua New Guinea",
    "iso":"PG",
    "currency":"pgk"
  },
  {
    "name":"Paraguay",
    "iso":"PY",
    "currency":"pyg"
  },
  {
    "name":"Peru",
    "iso":"PE",
    "currency":"pen"
  },
  {
    "name":"Philippines",
    "iso":"PH",
    "currency":"php"
  },
  {
    "name":"Pitcairn",
    "iso":"PN",
    "currency":"nzd"
  },
  {
    "name":"Poland",
    "iso":"PL",
    "currency":"pln"
  },
  {
    "name":"Portugal",
    "iso":"PT",
    "currency":"eur"
  },
  {
    "name":"Puerto Rico",
    "iso":"PR",
    "currency":"usd"
  },
  {
    "name":"Qatar",
    "iso":"QA",
    "currency":"qar"
  },
  {
    "name":"Reunion",
    "iso":"RE",
    "currency":"eur"
  },
  {
    "name":"Romania",
    "iso":"RO",
    "currency":"ron"
  },
  {
    "name":"Russian Federation",
    "iso":"RU",
    "currency":"rub"
  },
  {
    "name":"RWANDA",
    "iso":"RW",
    "currency":"rwf"
  },
  {
    "name":"Saint Helena",
    "iso":"SH",
    "currency":"shp"
  },
  {
    "name":"Saint Kitts and Nevis",
    "iso":"KN",
    "currency":"xcd"
  },
  {
    "name":"Saint Lucia",
    "iso":"LC",
    "currency":"xcd"
  },
  {
    "name":"Saint Pierre and Miquelon",
    "iso":"PM",
    "currency":"eur"
  },
  {
    "name":"Saint Vincent and the Grenadines",
    "iso":"VC",
    "currency":"xcd"
  },
  {
    "name":"Samoa",
    "iso":"WS",
    "currency":"wst"
  },
  {
    "name":"San Marino",
    "iso":"SM",
    "currency":"eur"
  },
  {
    "name":"Sao Tome and Principe",
    "iso":"ST",
    "currency":"std"
  },
  {
    "name":"Saudi Arabia",
    "iso":"SA",
    "currency":"sar"
  },
  {
    "name":"Senegal",
    "iso":"SN",
    "currency":"xof"
  },
  {
    "name":"Serbia and Montenegro",
    "iso":"CS",
    "currency":"eur"
  },
  {
    "name":"Seychelles",
    "iso":"SC",
    "currency":"scr"
  },
  {
    "name":"Sierra Leone",
    "iso":"SL",
    "currency":"sll"
  },
  {
    "name":"Singapore",
    "iso":"SG",
    "currency":"sgd"
  },
  {
    "name":"Slovakia",
    "iso":"SK",
    "currency":"eur"
  },
  {
    "name":"Slovenia",
    "iso":"SI",
    "currency":"eur"
  },
  {
    "name":"Solomon Islands",
    "iso":"SB",
    "currency":"sbd"
  },
  {
    "name":"Somalia",
    "iso":"SO",
    "currency":"sos"
  },
  {
    "name":"South Africa",
    "iso":"ZA",
    "currency":"zar"
  },
  {
    "name":"South Georgia and the South Sandwich Islands",
    "iso":"GS",
    "currency":"gbp"
  },
  {
    "name":"Spain",
    "iso":"ES",
    "currency":"eur"
  },
  {
    "name":"Sri Lanka",
    "iso":"LK",
    "currency":"lkr"
  },
  {
    "name":"Sudan",
    "iso":"SD",
    "currency":"sdg"
  },
  {
    "name":"Suriname",
    "iso":"SR",
    "currency":"srd"
  },
  {
    "name":"Svalbard and Jan Mayen",
    "iso":"SJ",
    "currency":"nok"
  },
  {
    "name":"Swaziland",
    "iso":"SZ",
    "currency":"szl"
  },
  {
    "name":"Sweden",
    "iso":"SE",
    "currency":"sek"
  },
  {
    "name":"Switzerland",
    "iso":"CH",
    "currency":"chf"
  },
  {
    "name":"Syrian Arab Republic",
    "iso":"SY",
    "currency":"syp"
  },
  {
    "name":"Taiwan, Province of China",
    "iso":"TW",
    "currency":"twd"
  },
  {
    "name":"Tajikistan",
    "iso":"TJ",
    "currency":"tjs"
  },
  {
    "name":"Tanzania, United Republic of",
    "iso":"TZ",
    "currency":"tzs"
  },
  {
    "name":"Thailand",
    "iso":"TH",
    "currency":"thb"
  },
  {
    "name":"Timor-Leste",
    "iso":"TL",
    "currency":"usd"
  },
  {
    "name":"Togo",
    "iso":"TG",
    "currency":"xof"
  },
  {
    "name":"Tokelau",
    "iso":"TK",
    "currency":"nzd"
  },
  {
    "name":"Tonga",
    "iso":"TO",
    "currency":"top"
  },
  {
    "name":"Trinidad and Tobago",
    "iso":"TT",
    "currency":"ttd"
  },
  {
    "name":"Tunisia",
    "iso":"TN",
    "currency":"tnd"
  },
  {
    "name":"Turkey",
    "iso":"TR",
    "currency":"try"
  },
  {
    "name":"Turkmenistan",
    "iso":"TM",
    "currency":"tmt"
  },
  {
    "name":"Turks and Caicos Islands",
    "iso":"TC",
    "currency":"usd"
  },
  {
    "name":"Tuvalu",
    "iso":"TV",
    "currency":"aud"
  },
  {
    "name":"Uganda",
    "iso":"UG",
    "currency":"ugx"
  },
  {
    "name":"Ukraine",
    "iso":"UA",
    "currency":"uah"
  },
  {
    "name":"United Arab Emirates",
    "iso":"AE",
    "currency":"aed"
  },
  {
    "name":"United Kingdom",
    "iso":"GB",
    "currency":"gbp"
  },
  {
    "name":"United States",
    "iso":"US",
    "currency":"usd"
  },
  {
    "name":"United States Minor Outlying Islands",
    "iso":"UM",
    "currency":"usd"
  },
  {
    "name":"Uruguay",
    "iso":"UY",
    "currency":"uyu"
  },
  {
    "name":"Uzbekistan",
    "iso":"UZ",
    "currency":"uzs"
  },
  {
    "name":"Vanuatu",
    "iso":"VU",
    "currency":"vuv"
  },
  {
    "name":"Venezuela",
    "iso":"VE",
    "currency":"vef"
  },
  {
    "name":"Viet Nam",
    "iso":"VN",
    "currency":"vnd"
  },
  {
    "name":"Virgin Islands, British",
    "iso":"VG",
    "currency":"usd"
  },
  {
    "name":"Virgin Islands, U.S.",
    "iso":"VI",
    "currency":"usd"
  },
  {
    "name":"Wallis and Futuna",
    "iso":"WF",
    "currency":"xpf"
  },
  {
    "name":"Western Sahara",
    "iso":"EH",
    "currency":"mad"
  },
  {
    "name":"Yemen",
    "iso":"YE",
    "currency":"yer"
  },
  {
    "name":"Zambia",
    "iso":"ZM",
    "currency":"zmk"
  },
  {
    "name":"Zimbabwe",
    "iso":"ZW",
    "currency":"zwl"
  }
]
export const country_list_with_any = [
  {
    "name":"Any",
    "iso":"",
    "currency":""
  }].concat(country_list);

export const language_list = [
	{"language":"Afar","code":"aa"},
	{"language":"Abkhazian","code":"ab"},
	{"language":"Afrikaans","code":"af"},
	{"language":"Akan","code":"ak"},
	{"language":"Albanian","code":"sq"},
	{"language":"Amharic","code":"am"},
	{"language":"Aragonese","code":"an"},
	{"language":"Arabic","code":"ar"},
	{"language":"Armenian","code":"hy"},
	{"language":"Assamese","code":"as"},
	{"language":"Avar","code":"av"},
	{"language":"Aymara","code":"ay"},
	{"language":"Azerbaijani","code":"az"},
	{"language":"Bambara","code":"bm"},
	{"language":"Bashkir","code":"ba"},
	{"language":"Basque","code":"eu"},
	{"language":"Belarusian","code":"be"},
	{"language":"Bengali","code":"bn"},
	{"language":"Bihari","code":"bh"},
	{"language":"Bislama","code":"bi"},
	{"language":"Bosnian","code":"bs"},
	{"language":"Breton","code":"br"},
	{"language":"Bulgarian","code":"bg"},
	{"language":"Burmese","code":"my"},
	{"language":"Cambodian","code":"km"},
	{"language":"Catalan","code":"ca"},
	{"language":"Chechen","code":"ce"},
	{"language":"Chamorro","code":"ch"},
	{"language":"Chichewa","code":"ny"},
	{"language":"Chinese","code":"zh"},
	{"language":"Cornish","code":"kw"},
	{"language":"Corsican","code":"co"},
	{"language":"Cree","code":"cr"},
	{"language":"Croatian","code":"hr"},
	{"language":"Czech","code":"cs"},
	{"language":"Chuvash","code":"cv"},
	{"language":"Danish","code":"da"},
	{"language":"Divehi","code":"dv"},
	{"language":"Dutch","code":"nl"},
	{"language":"Dzongkha","code":"dz"},
	{"language":"Ewe","code":"ee"},
	{"language":"English","code":"en"},
	{"language":"Esperanto","code":"eo"},
	{"language":"Estonian","code":"et"},
	{"language":"Finnish","code":"fi"},
	{"language":"Fijian","code":"fj"},
	{"language":"Faroese","code":"fo"},
	{"language":"French","code":"fr"},
	{"language":"Ganda","code":"lg"},
	{"language":"German","code":"de"},
	{"language":"Greek","code":"el"},
	{"language":"Greenlandic","code":"kl"},
	{"language":"Galician","code":"gl"},
	{"language":"Guarani","code":"gn"},
	{"language":"Gujarati","code":"gu"},
	{"language":"Haitian","code":"ht"},
	{"language":"Hausa","code":"ha"},
	{"language":"Hebrew","code":"he"},
	{"language":"Herero","code":"hz"},
	{"language":"Hindi","code":"hi"},
	{"language":"Hiri Motu","code":"ho"},
	{"language":"Hungarian","code":"hu"},
	{"language":"Icelandic","code":"is"},
	{"language":"Ido","code":"io"},
	{"language":"Igbo","code":"ig"},
	{"language":"Interlingua","code":"ia"},
	{"language":"Indonesian","code":"id"},
	{"language":"Interlingue","code":"ie"},
	{"language":"Inuktitut","code":"iu"},
	{"language":"Inupiak","code":"ik"},
	{"language":"Irish","code":"ga"},
	{"language":"Italian","code":"it"},
	{"language":"Japanese","code":"ja"},
	{"language":"Javanese","code":"jv"},
	{"language":"Kannada","code":"kn"},
	{"language":"Kanuri","code":"kr"},
	{"language":"Kashmiri","code":"ks"},
	{"language":"Kazakh","code":"kk"},
	{"language":"Kikuyu","code":"ki"},
	{"language":"Kirghiz","code":"ky"},
	{"language":"Kirundi","code":"rn"},
	{"language":"Komi","code":"kv"},
	{"language":"Kongo","code":"kg"},
	{"language":"Korean","code":"ko"},
	{"language":"Kuanyama","code":"kj"},
	{"language":"Kurdish","code":"ku"},
	{"language":"Laotian","code":"lo"},
	{"language":"Latin","code":"la"},
	{"language":"Latvian","code":"lv"},
	{"language":"Limburgian","code":"li"},
	{"language":"Lingala","code":"ln"},
	{"language":"Lithuanian","code":"lt"},
	{"language":"Luxembourgish","code":"lb"},
	{"language":"Macedonian","code":"mk"},
	{"language":"Malagasy","code":"mg"},
	{"language":"Malayalam","code":"ml"},
	{"language":"Malay","code":"ms"},
	{"language":"Maltese","code":"mt"},
	{"language":"Marathi","code":"mr"},
	{"language":"Marshallese","code":"mh"},
	{"language":"Manx","code":"gv"},
	{"language":"Maori","code":"mi"},
	{"language":"Moldovan","code":"mo"},
	{"language":"Mongolian","code":"mn"},
	{"language":"Nauruan","code":"na"},
	{"language":"Navajo","code":"nv"},
	{"language":"Ndonga","code":"ng"},
	{"language":"Nepali","code":"ne"},
	{"language":"North Ndebele","code":"nd"},
	{"language":"Norwegian Nynorsk","code":"nn"},
	{"language":"Norwegian","code":"no"},

	{"language":"Occitan","code":"oc"},
	{"language":"Ojibwa","code":"oj"},
	{"language":"Oromo","code":"om"},
	{"language":"Oriya","code":"or"},
	{"language":"Ossetian","code":"os"},
	{"language":"Pali","code":"pi"},
	{"language":"Pashto","code":"ps"},
	{"language":"Persian","code":"fa"},
	{"language":"Peul","code":"ff"},
	{"language":"Polish","code":"pl"},
	{"language":"Portuguese","code":"pt"},
	{"language":"Punjabi","code":"pa"},
	{"language":"Quechua","code":"qu"},
	{"language":"Raeto Romance","code":"rm"},
	{"language":"Romanian","code":"ro"},
	{"language":"Russian","code":"ru"},
	{"language":"Rwandi","code":"rw"},
	{"language":"Samoan","code":"sm"},
	{"language":"Sango","code":"sg"},
	{"language":"Sanskrit","code":"sa"},
	{"language":"Sardinian","code":"sc"},
	{"language":"Scottish Gaelic","code":"gd"},
	{"language":"Serbian","code":"sr"},
	{"language":"Serbo-Croatian","code":"sh"},
	{"language":"Shona","code":"sn"},
	{"language":"Sichuan Yi","code":"ii"},
	{"language":"Sindhi","code":"sd"},
	{"language":"Sinhalese","code":"si"},
	{"language":"Slovak","code":"sk"},
	{"language":"Slovenian","code":"sl"},
	{"language":"Somalia","code":"so"},
	{"language":"South Ndebele","code":"nr"},
	{"language":"Southern Sotho","code":"st"},
	{"language":"Spanish","code":"es"},
	{"language":"Sundanese","code":"su"},
	{"language":"Swahili","code":"sw"},
	{"language":"Swati","code":"ss"},
	{"language":"Swedish","code":"sv"},
	{"language":"Tagalog","code":"tl"},
	{"language":"Tahitian","code":"ty"},
	{"language":"Tamil","code":"ta"},
	{"language":"Tajik","code":"tg"},
	{"language":"Tatar","code":"tt"},
	{"language":"Telugu","code":"te"},
	{"language":"Thai","code":"th"},
	{"language":"Tibetan","code":"bo"},
	{"language":"Tigrinya","code":"ti"},
	{"language":"Tonga","code":"to"},
	{"language":"Tswana","code":"tn"},
	{"language":"Tsonga","code":"ts"},
	{"language":"Turkmen","code":"tk"},
	{"language":"Turkish","code":"tr"},
	{"language":"Twi","code":"tw"},
	{"language":"Urdu","code":"ur"},
	{"language":"Uyghur","code":"ug"},
	{"language":"Venda","code":"ve"},
	{"language":"Vietnamese","code":"vi"},
	{"language":"Volapük","code":"vo"},
	{"language":"Walloon","code":"wa"},
	{"language":"Welsh","code":"cy"},
	{"language":"West Frisian","code":"fy"},
	{"language":"Wolof","code":"wo"},
	{"language":"Xhosa","code":"xh"},
	{"language":"Yiddish","code":"yi"},
	{"language":"Yoruba","code":"yo"},
	{"language":"Zhuang","code":"za"},
	{"language":"Zulu","code":"zu"}

]

export const account_type_list = [
   {"name":"I AM A FUND MANAGER","value":"FM"},
   {"name":"I AM A LISTED COMPANY REPRESENTATIVE","value":"LC"}
]
export const region_list = [
   {"name":"Global","value":"GLBL"},
   {"name":"East Asia","value":"ESTA"},
   {"name":"South-East Asia","value":"SHEA"},
   {"name":"South Asia","value":"STHA"},
   {"name":"Australia/New Zealand","value":"AUNZ"},
   {"name":"US","value":"US"},
    {"name":"Europe","value":"EU"},
    {"name":"Middle East","value":"MDET"},
    {"name":"Africa","value":"AFC"},
    {"name":"Others","value":"OTH"}

]

export const company_size_list = [
   {"name":"1-9 Employees","value":"micro"},
   {"name":"10 - 49 Employees","value":"Small"},
   {"name":"50 - 249 Employees","value":"Medium"},
   {"name":"> 250 Employees","value":"Large"}
]
export const investment_size_list = [
   {"name":"Less than $500K","value":"Seed"},
   {"name":"$500K to $2M","value":"Series A"},
   {"name":"$2M to $10M","value":"Series B"},
   {"name":"$10M to $50M","value":"Series C"},
    {"name":"More than $50M","value":"Series D"}
]
export const industry_list = [
   {"name":"Conglomerate","value":"CONG"},
   {"name":"Consumer Goods","value":"CNSG"},
   {"name":"Industrial","value":"INDU"},
   {"name":"Finance","value":"FINA"},
   {"name":"Health Care","value":"HLCR"},
   {"name":"Basic Materials","value":"BMAT"},
    {"name":"Consumer Service","value":"CSMS"},
    {"name":"Energy","value":"ENER"},
    {"name":"Technology","value":"TECH"}

]

export const industry_list_with_any = [{"name":"Any Industry","value":""}].concat(industry_list);

export const sub_industry_list = {
 "CONG":[{"name":"Conglomerate","value":"CONG"}],
 "ENER": [
    {"name": "Oil & Gas Producers", "value": "OGP"},
    {"name": "Oil Equipment, Services & Distribution", "value": "OESD"},
    {"name": "Alternative Energy", "value": "ALE"}],
  "CNSG": [
    {"name": "Automobiles & Parts", "value": "AUP"},
    {"name": "Food & Beverage", "value": "FOB"},
    {"name": "Personal & Household Goods", "value": "PHG"}],
  "INDU": [
    {"name": "Construction & Materials", "value": "CNM"},
    {"name": "Aerospace & Defense", "value": "AND"},
    {"name": "General Industrials", "value": "GEI"},
    {"name": "Electronic & Electrical  Equipment", "value": "EEE"},
    {"name": "Industrial Engineering", "value": "INE"},
    {"name": "Industrial Transportation", "value": "INT"},
    {"name": "Support Services", "value": "SUS"}],
  "FINA": [
    {"name": "Banks", "value": "BNK"},
    {"name": "Financial Services", "value": "FIS"},
    {"name": "Insurance", "value": "INS"},
    {"name": "Real Estate & REITS", "value": "RER"}],
  "HLCR": [
    {"name": "Health Care Equipment & Service", "value": "HCES"},
    {"name": "Pharmaceuticals, Biotechnology & Life  Sciences", "value": "PBLS"}],
  "BMAT": [
    {"name": "Chemicals", "value": "CHEM"},
    {"name": "Forestry & Paper", "value": "PNP"},
    {"name": "Mining & Processing", "value": "MNP"}],
  "TECH":[
      {"name": "Software & Computer  Service", "value": "SNCS"},
    {"name": "Technology Hardware & Equipment", "value": "THNE"}],
  "CSMS": [
    {"name": "Retail", "value": "RET"},
    {"name": "MEDIA", "value": "MED"},
    {"name": "Travel & Leisure", "value": "TNL"}],

}

export const public_event_type_list = [
  {"name":"Seminar","value":"SMN","public":true},
  {"name":"Conference","value":"CONF","public":true},
  {"name":"Roadshow","value":"RDS","public":true},
  {"name":"Plant Visit","value":"PLTV","public":true},
  {"name":"Results Briefing","value":"IRB","public":true}
];

export const private_event_type_list = [
  {"name":"Group Meeting","value":"MTNG","public":false},
  {"name":"One-on-One","value":"OOO","public":false}
];

export const event_type_list = public_event_type_list.concat(private_event_type_list);

export const public_event_type_list_with_any = [{"name":"Any Type","value":"","public":true}].concat(public_event_type_list);

export const event_type_list_with_any = [{"name":"Any Type","value":"","public":true}].concat(event_type_list);

export const lookup = (list, value, field,returnField) =>{
   for(let datum of list)
   {
     if(datum[field] == value)
       return datum[returnField];
   }
   return '';

}

export const get_lookup_from_values = (values,list,valueField) =>{
  let finalized_list = [];
  for(let datum of values)
  {
      for(let list_item of  list)
      {

        if(list_item[valueField] == datum)
        {
          finalized_list = finalized_list.concat(list_item);
        }

      }
  }
  return finalized_list;
}

export const get_lookup_label_from_values = (values,list,labelField,valueField) =>{
  let finalized_list = [];
  for(let datum of values)
  {
      for(let list_item of  list)
      {

        if(list_item[valueField] == datum)
        {
          finalized_list = finalized_list.concat(list_item[labelField]);
        }

      }
  }
  return finalized_list;
}
export const get_label_list = (values,list,valueField,textField) =>{
  let finalized_list = [];
  for(let datum of values)
  {
      for(let list_item of  list)
      {

        if(list_item[valueField] == datum)
        {
          finalized_list = finalized_list.concat(list_item[textField]);
        }

      }
  }
  return finalized_list;
}