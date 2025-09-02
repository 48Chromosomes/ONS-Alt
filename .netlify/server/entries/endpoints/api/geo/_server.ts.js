import { j as json } from "../../../../chunks/index.js";
const data = [
  {
    en: "Hartlepool",
    geoType: "LAD",
    geoCode: "E06000001"
  },
  {
    en: "Middlesbrough",
    geoType: "LAD",
    geoCode: "E06000002"
  },
  {
    en: "Redcar and Cleveland",
    geoType: "LAD",
    geoCode: "E06000003"
  },
  {
    en: "Stockton-on-Tees",
    geoType: "LAD",
    geoCode: "E06000004"
  },
  {
    en: "Darlington",
    geoType: "LAD",
    geoCode: "E06000005"
  },
  {
    en: "Halton",
    geoType: "LAD",
    geoCode: "E06000006"
  },
  {
    en: "Warrington",
    geoType: "LAD",
    geoCode: "E06000007"
  },
  {
    en: "Blackburn with Darwen",
    geoType: "LAD",
    geoCode: "E06000008"
  },
  {
    en: "Blackpool",
    geoType: "LAD",
    geoCode: "E06000009"
  },
  {
    en: "Kingston upon Hull, City of",
    geoType: "LAD",
    geoCode: "E06000010"
  },
  {
    en: "East Riding of Yorkshire",
    geoType: "LAD",
    geoCode: "E06000011"
  },
  {
    en: "North East Lincolnshire",
    geoType: "LAD",
    geoCode: "E06000012"
  },
  {
    en: "North Lincolnshire",
    geoType: "LAD",
    geoCode: "E06000013"
  },
  {
    en: "York",
    geoType: "LAD",
    geoCode: "E06000014"
  },
  {
    en: "Derby",
    geoType: "LAD",
    geoCode: "E06000015"
  },
  {
    en: "Leicester",
    geoType: "LAD",
    geoCode: "E06000016"
  },
  {
    en: "Rutland",
    geoType: "LAD",
    geoCode: "E06000017"
  },
  {
    en: "Nottingham",
    geoType: "LAD",
    geoCode: "E06000018"
  },
  {
    en: "Herefordshire, County of",
    geoType: "LAD",
    geoCode: "E06000019"
  },
  {
    en: "Telford and Wrekin",
    geoType: "LAD",
    geoCode: "E06000020"
  },
  {
    en: "Stoke-on-Trent",
    geoType: "LAD",
    geoCode: "E06000021"
  },
  {
    en: "Bath and North East Somerset",
    geoType: "LAD",
    geoCode: "E06000022"
  },
  {
    en: "Bristol, City of",
    geoType: "LAD",
    geoCode: "E06000023"
  },
  {
    en: "North Somerset",
    geoType: "LAD",
    geoCode: "E06000024"
  },
  {
    en: "South Gloucestershire",
    geoType: "LAD",
    geoCode: "E06000025"
  },
  {
    en: "Plymouth",
    geoType: "LAD",
    geoCode: "E06000026"
  },
  {
    en: "Torbay",
    geoType: "LAD",
    geoCode: "E06000027"
  },
  {
    en: "Swindon",
    geoType: "LAD",
    geoCode: "E06000030"
  },
  {
    en: "Peterborough",
    geoType: "LAD",
    geoCode: "E06000031"
  },
  {
    en: "Luton",
    geoType: "LAD",
    geoCode: "E06000032"
  },
  {
    en: "Southend-on-Sea",
    geoType: "LAD",
    geoCode: "E06000033"
  },
  {
    en: "Thurrock",
    geoType: "LAD",
    geoCode: "E06000034"
  },
  {
    en: "Medway",
    geoType: "LAD",
    geoCode: "E06000035"
  },
  {
    en: "Bracknell Forest",
    geoType: "LAD",
    geoCode: "E06000036"
  },
  {
    en: "West Berkshire",
    geoType: "LAD",
    geoCode: "E06000037"
  },
  {
    en: "Reading",
    geoType: "LAD",
    geoCode: "E06000038"
  },
  {
    en: "Slough",
    geoType: "LAD",
    geoCode: "E06000039"
  },
  {
    en: "Windsor and Maidenhead",
    geoType: "LAD",
    geoCode: "E06000040"
  },
  {
    en: "Wokingham",
    geoType: "LAD",
    geoCode: "E06000041"
  },
  {
    en: "Milton Keynes",
    geoType: "LAD",
    geoCode: "E06000042"
  },
  {
    en: "Brighton and Hove",
    geoType: "LAD",
    geoCode: "E06000043"
  },
  {
    en: "Portsmouth",
    geoType: "LAD",
    geoCode: "E06000044"
  },
  {
    en: "Southampton",
    geoType: "LAD",
    geoCode: "E06000045"
  },
  {
    en: "Isle of Wight",
    geoType: "LAD",
    geoCode: "E06000046"
  },
  {
    en: "County Durham",
    geoType: "LAD",
    geoCode: "E06000047"
  },
  {
    en: "Cheshire East",
    geoType: "LAD",
    geoCode: "E06000049"
  },
  {
    en: "Cheshire West and Chester",
    geoType: "LAD",
    geoCode: "E06000050"
  },
  {
    en: "Shropshire",
    geoType: "LAD",
    geoCode: "E06000051"
  },
  {
    en: "Cornwall",
    geoType: "LAD",
    geoCode: "E06000052"
  },
  {
    en: "Isles of Scilly",
    geoType: "LAD",
    geoCode: "E06000053"
  },
  {
    en: "Wiltshire",
    geoType: "LAD",
    geoCode: "E06000054"
  },
  {
    en: "Bedford",
    geoType: "LAD",
    geoCode: "E06000055"
  },
  {
    en: "Central Bedfordshire",
    geoType: "LAD",
    geoCode: "E06000056"
  },
  {
    en: "Northumberland",
    geoType: "LAD",
    geoCode: "E06000057"
  },
  {
    en: "Bournemouth, Christchurch and Poole",
    geoType: "LAD",
    geoCode: "E06000058"
  },
  {
    en: "Dorset",
    geoType: "LAD",
    geoCode: "E06000059"
  },
  {
    en: "Buckinghamshire",
    geoType: "LAD",
    geoCode: "E06000060"
  },
  {
    en: "North Northamptonshire",
    geoType: "LAD",
    geoCode: "E06000061"
  },
  {
    en: "West Northamptonshire",
    geoType: "LAD",
    geoCode: "E06000062"
  },
  {
    en: "Cambridge",
    geoType: "LAD",
    geoCode: "E07000008"
  },
  {
    en: "East Cambridgeshire",
    geoType: "LAD",
    geoCode: "E07000009"
  },
  {
    en: "Fenland",
    geoType: "LAD",
    geoCode: "E07000010"
  },
  {
    en: "Huntingdonshire",
    geoType: "LAD",
    geoCode: "E07000011"
  },
  {
    en: "South Cambridgeshire",
    geoType: "LAD",
    geoCode: "E07000012"
  },
  {
    en: "Allerdale",
    geoType: "LAD",
    geoCode: "E07000026"
  },
  {
    en: "Barrow-in-Furness",
    geoType: "LAD",
    geoCode: "E07000027"
  },
  {
    en: "Carlisle",
    geoType: "LAD",
    geoCode: "E07000028"
  },
  {
    en: "Copeland",
    geoType: "LAD",
    geoCode: "E07000029"
  },
  {
    en: "Eden",
    geoType: "LAD",
    geoCode: "E07000030"
  },
  {
    en: "South Lakeland",
    geoType: "LAD",
    geoCode: "E07000031"
  },
  {
    en: "Amber Valley",
    geoType: "LAD",
    geoCode: "E07000032"
  },
  {
    en: "Bolsover",
    geoType: "LAD",
    geoCode: "E07000033"
  },
  {
    en: "Chesterfield",
    geoType: "LAD",
    geoCode: "E07000034"
  },
  {
    en: "Derbyshire Dales",
    geoType: "LAD",
    geoCode: "E07000035"
  },
  {
    en: "Erewash",
    geoType: "LAD",
    geoCode: "E07000036"
  },
  {
    en: "High Peak",
    geoType: "LAD",
    geoCode: "E07000037"
  },
  {
    en: "North East Derbyshire",
    geoType: "LAD",
    geoCode: "E07000038"
  },
  {
    en: "South Derbyshire",
    geoType: "LAD",
    geoCode: "E07000039"
  },
  {
    en: "East Devon",
    geoType: "LAD",
    geoCode: "E07000040"
  },
  {
    en: "Exeter",
    geoType: "LAD",
    geoCode: "E07000041"
  },
  {
    en: "Mid Devon",
    geoType: "LAD",
    geoCode: "E07000042"
  },
  {
    en: "North Devon",
    geoType: "LAD",
    geoCode: "E07000043"
  },
  {
    en: "South Hams",
    geoType: "LAD",
    geoCode: "E07000044"
  },
  {
    en: "Teignbridge",
    geoType: "LAD",
    geoCode: "E07000045"
  },
  {
    en: "Torridge",
    geoType: "LAD",
    geoCode: "E07000046"
  },
  {
    en: "West Devon",
    geoType: "LAD",
    geoCode: "E07000047"
  },
  {
    en: "Eastbourne",
    geoType: "LAD",
    geoCode: "E07000061"
  },
  {
    en: "Hastings",
    geoType: "LAD",
    geoCode: "E07000062"
  },
  {
    en: "Lewes",
    geoType: "LAD",
    geoCode: "E07000063"
  },
  {
    en: "Rother",
    geoType: "LAD",
    geoCode: "E07000064"
  },
  {
    en: "Wealden",
    geoType: "LAD",
    geoCode: "E07000065"
  },
  {
    en: "Basildon",
    geoType: "LAD",
    geoCode: "E07000066"
  },
  {
    en: "Braintree",
    geoType: "LAD",
    geoCode: "E07000067"
  },
  {
    en: "Brentwood",
    geoType: "LAD",
    geoCode: "E07000068"
  },
  {
    en: "Castle Point",
    geoType: "LAD",
    geoCode: "E07000069"
  },
  {
    en: "Chelmsford",
    geoType: "LAD",
    geoCode: "E07000070"
  },
  {
    en: "Colchester",
    geoType: "LAD",
    geoCode: "E07000071"
  },
  {
    en: "Epping Forest",
    geoType: "LAD",
    geoCode: "E07000072"
  },
  {
    en: "Harlow",
    geoType: "LAD",
    geoCode: "E07000073"
  },
  {
    en: "Maldon",
    geoType: "LAD",
    geoCode: "E07000074"
  },
  {
    en: "Rochford",
    geoType: "LAD",
    geoCode: "E07000075"
  },
  {
    en: "Tendring",
    geoType: "LAD",
    geoCode: "E07000076"
  },
  {
    en: "Uttlesford",
    geoType: "LAD",
    geoCode: "E07000077"
  },
  {
    en: "Cheltenham",
    geoType: "LAD",
    geoCode: "E07000078"
  },
  {
    en: "Cotswold",
    geoType: "LAD",
    geoCode: "E07000079"
  },
  {
    en: "Forest of Dean",
    geoType: "LAD",
    geoCode: "E07000080"
  },
  {
    en: "Gloucester",
    geoType: "LAD",
    geoCode: "E07000081"
  },
  {
    en: "Stroud",
    geoType: "LAD",
    geoCode: "E07000082"
  },
  {
    en: "Tewkesbury",
    geoType: "LAD",
    geoCode: "E07000083"
  },
  {
    en: "Basingstoke and Deane",
    geoType: "LAD",
    geoCode: "E07000084"
  },
  {
    en: "East Hampshire",
    geoType: "LAD",
    geoCode: "E07000085"
  },
  {
    en: "Eastleigh",
    geoType: "LAD",
    geoCode: "E07000086"
  },
  {
    en: "Fareham",
    geoType: "LAD",
    geoCode: "E07000087"
  },
  {
    en: "Gosport",
    geoType: "LAD",
    geoCode: "E07000088"
  },
  {
    en: "Hart",
    geoType: "LAD",
    geoCode: "E07000089"
  },
  {
    en: "Havant",
    geoType: "LAD",
    geoCode: "E07000090"
  },
  {
    en: "New Forest",
    geoType: "LAD",
    geoCode: "E07000091"
  },
  {
    en: "Rushmoor",
    geoType: "LAD",
    geoCode: "E07000092"
  },
  {
    en: "Test Valley",
    geoType: "LAD",
    geoCode: "E07000093"
  },
  {
    en: "Winchester",
    geoType: "LAD",
    geoCode: "E07000094"
  },
  {
    en: "Broxbourne",
    geoType: "LAD",
    geoCode: "E07000095"
  },
  {
    en: "Dacorum",
    geoType: "LAD",
    geoCode: "E07000096"
  },
  {
    en: "Hertsmere",
    geoType: "LAD",
    geoCode: "E07000098"
  },
  {
    en: "North Hertfordshire",
    geoType: "LAD",
    geoCode: "E07000099"
  },
  {
    en: "Three Rivers",
    geoType: "LAD",
    geoCode: "E07000102"
  },
  {
    en: "Watford",
    geoType: "LAD",
    geoCode: "E07000103"
  },
  {
    en: "Ashford",
    geoType: "LAD",
    geoCode: "E07000105"
  },
  {
    en: "Canterbury",
    geoType: "LAD",
    geoCode: "E07000106"
  },
  {
    en: "Dartford",
    geoType: "LAD",
    geoCode: "E07000107"
  },
  {
    en: "Dover",
    geoType: "LAD",
    geoCode: "E07000108"
  },
  {
    en: "Gravesham",
    geoType: "LAD",
    geoCode: "E07000109"
  },
  {
    en: "Maidstone",
    geoType: "LAD",
    geoCode: "E07000110"
  },
  {
    en: "Sevenoaks",
    geoType: "LAD",
    geoCode: "E07000111"
  },
  {
    en: "Folkestone and Hythe",
    geoType: "LAD",
    geoCode: "E07000112"
  },
  {
    en: "Swale",
    geoType: "LAD",
    geoCode: "E07000113"
  },
  {
    en: "Thanet",
    geoType: "LAD",
    geoCode: "E07000114"
  },
  {
    en: "Tonbridge and Malling",
    geoType: "LAD",
    geoCode: "E07000115"
  },
  {
    en: "Tunbridge Wells",
    geoType: "LAD",
    geoCode: "E07000116"
  },
  {
    en: "Burnley",
    geoType: "LAD",
    geoCode: "E07000117"
  },
  {
    en: "Chorley",
    geoType: "LAD",
    geoCode: "E07000118"
  },
  {
    en: "Fylde",
    geoType: "LAD",
    geoCode: "E07000119"
  },
  {
    en: "Hyndburn",
    geoType: "LAD",
    geoCode: "E07000120"
  },
  {
    en: "Lancaster",
    geoType: "LAD",
    geoCode: "E07000121"
  },
  {
    en: "Pendle",
    geoType: "LAD",
    geoCode: "E07000122"
  },
  {
    en: "Preston",
    geoType: "LAD",
    geoCode: "E07000123"
  },
  {
    en: "Ribble Valley",
    geoType: "LAD",
    geoCode: "E07000124"
  },
  {
    en: "Rossendale",
    geoType: "LAD",
    geoCode: "E07000125"
  },
  {
    en: "South Ribble",
    geoType: "LAD",
    geoCode: "E07000126"
  },
  {
    en: "West Lancashire",
    geoType: "LAD",
    geoCode: "E07000127"
  },
  {
    en: "Wyre",
    geoType: "LAD",
    geoCode: "E07000128"
  },
  {
    en: "Blaby",
    geoType: "LAD",
    geoCode: "E07000129"
  },
  {
    en: "Charnwood",
    geoType: "LAD",
    geoCode: "E07000130"
  },
  {
    en: "Harborough",
    geoType: "LAD",
    geoCode: "E07000131"
  },
  {
    en: "Hinckley and Bosworth",
    geoType: "LAD",
    geoCode: "E07000132"
  },
  {
    en: "Melton",
    geoType: "LAD",
    geoCode: "E07000133"
  },
  {
    en: "North West Leicestershire",
    geoType: "LAD",
    geoCode: "E07000134"
  },
  {
    en: "Oadby and Wigston",
    geoType: "LAD",
    geoCode: "E07000135"
  },
  {
    en: "Boston",
    geoType: "LAD",
    geoCode: "E07000136"
  },
  {
    en: "East Lindsey",
    geoType: "LAD",
    geoCode: "E07000137"
  },
  {
    en: "Lincoln",
    geoType: "LAD",
    geoCode: "E07000138"
  },
  {
    en: "North Kesteven",
    geoType: "LAD",
    geoCode: "E07000139"
  },
  {
    en: "South Holland",
    geoType: "LAD",
    geoCode: "E07000140"
  },
  {
    en: "South Kesteven",
    geoType: "LAD",
    geoCode: "E07000141"
  },
  {
    en: "West Lindsey",
    geoType: "LAD",
    geoCode: "E07000142"
  },
  {
    en: "Breckland",
    geoType: "LAD",
    geoCode: "E07000143"
  },
  {
    en: "Broadland",
    geoType: "LAD",
    geoCode: "E07000144"
  },
  {
    en: "Great Yarmouth",
    geoType: "LAD",
    geoCode: "E07000145"
  },
  {
    en: "King's Lynn and West Norfolk",
    geoType: "LAD",
    geoCode: "E07000146"
  },
  {
    en: "North Norfolk",
    geoType: "LAD",
    geoCode: "E07000147"
  },
  {
    en: "Norwich",
    geoType: "LAD",
    geoCode: "E07000148"
  },
  {
    en: "South Norfolk",
    geoType: "LAD",
    geoCode: "E07000149"
  },
  {
    en: "Craven",
    geoType: "LAD",
    geoCode: "E07000163"
  },
  {
    en: "Hambleton",
    geoType: "LAD",
    geoCode: "E07000164"
  },
  {
    en: "Harrogate",
    geoType: "LAD",
    geoCode: "E07000165"
  },
  {
    en: "Richmondshire",
    geoType: "LAD",
    geoCode: "E07000166"
  },
  {
    en: "Ryedale",
    geoType: "LAD",
    geoCode: "E07000167"
  },
  {
    en: "Scarborough",
    geoType: "LAD",
    geoCode: "E07000168"
  },
  {
    en: "Selby",
    geoType: "LAD",
    geoCode: "E07000169"
  },
  {
    en: "Ashfield",
    geoType: "LAD",
    geoCode: "E07000170"
  },
  {
    en: "Bassetlaw",
    geoType: "LAD",
    geoCode: "E07000171"
  },
  {
    en: "Broxtowe",
    geoType: "LAD",
    geoCode: "E07000172"
  },
  {
    en: "Gedling",
    geoType: "LAD",
    geoCode: "E07000173"
  },
  {
    en: "Mansfield",
    geoType: "LAD",
    geoCode: "E07000174"
  },
  {
    en: "Newark and Sherwood",
    geoType: "LAD",
    geoCode: "E07000175"
  },
  {
    en: "Rushcliffe",
    geoType: "LAD",
    geoCode: "E07000176"
  },
  {
    en: "Cherwell",
    geoType: "LAD",
    geoCode: "E07000177"
  },
  {
    en: "Oxford",
    geoType: "LAD",
    geoCode: "E07000178"
  },
  {
    en: "South Oxfordshire",
    geoType: "LAD",
    geoCode: "E07000179"
  },
  {
    en: "Vale of White Horse",
    geoType: "LAD",
    geoCode: "E07000180"
  },
  {
    en: "West Oxfordshire",
    geoType: "LAD",
    geoCode: "E07000181"
  },
  {
    en: "Mendip",
    geoType: "LAD",
    geoCode: "E07000187"
  },
  {
    en: "Sedgemoor",
    geoType: "LAD",
    geoCode: "E07000188"
  },
  {
    en: "South Somerset",
    geoType: "LAD",
    geoCode: "E07000189"
  },
  {
    en: "Cannock Chase",
    geoType: "LAD",
    geoCode: "E07000192"
  },
  {
    en: "East Staffordshire",
    geoType: "LAD",
    geoCode: "E07000193"
  },
  {
    en: "Lichfield",
    geoType: "LAD",
    geoCode: "E07000194"
  },
  {
    en: "Newcastle-under-Lyme",
    geoType: "LAD",
    geoCode: "E07000195"
  },
  {
    en: "South Staffordshire",
    geoType: "LAD",
    geoCode: "E07000196"
  },
  {
    en: "Stafford",
    geoType: "LAD",
    geoCode: "E07000197"
  },
  {
    en: "Staffordshire Moorlands",
    geoType: "LAD",
    geoCode: "E07000198"
  },
  {
    en: "Tamworth",
    geoType: "LAD",
    geoCode: "E07000199"
  },
  {
    en: "Babergh",
    geoType: "LAD",
    geoCode: "E07000200"
  },
  {
    en: "Ipswich",
    geoType: "LAD",
    geoCode: "E07000202"
  },
  {
    en: "Mid Suffolk",
    geoType: "LAD",
    geoCode: "E07000203"
  },
  {
    en: "Elmbridge",
    geoType: "LAD",
    geoCode: "E07000207"
  },
  {
    en: "Epsom and Ewell",
    geoType: "LAD",
    geoCode: "E07000208"
  },
  {
    en: "Guildford",
    geoType: "LAD",
    geoCode: "E07000209"
  },
  {
    en: "Mole Valley",
    geoType: "LAD",
    geoCode: "E07000210"
  },
  {
    en: "Reigate and Banstead",
    geoType: "LAD",
    geoCode: "E07000211"
  },
  {
    en: "Runnymede",
    geoType: "LAD",
    geoCode: "E07000212"
  },
  {
    en: "Spelthorne",
    geoType: "LAD",
    geoCode: "E07000213"
  },
  {
    en: "Surrey Heath",
    geoType: "LAD",
    geoCode: "E07000214"
  },
  {
    en: "Tandridge",
    geoType: "LAD",
    geoCode: "E07000215"
  },
  {
    en: "Waverley",
    geoType: "LAD",
    geoCode: "E07000216"
  },
  {
    en: "Woking",
    geoType: "LAD",
    geoCode: "E07000217"
  },
  {
    en: "North Warwickshire",
    geoType: "LAD",
    geoCode: "E07000218"
  },
  {
    en: "Nuneaton and Bedworth",
    geoType: "LAD",
    geoCode: "E07000219"
  },
  {
    en: "Rugby",
    geoType: "LAD",
    geoCode: "E07000220"
  },
  {
    en: "Stratford-on-Avon",
    geoType: "LAD",
    geoCode: "E07000221"
  },
  {
    en: "Warwick",
    geoType: "LAD",
    geoCode: "E07000222"
  },
  {
    en: "Adur",
    geoType: "LAD",
    geoCode: "E07000223"
  },
  {
    en: "Arun",
    geoType: "LAD",
    geoCode: "E07000224"
  },
  {
    en: "Chichester",
    geoType: "LAD",
    geoCode: "E07000225"
  },
  {
    en: "Crawley",
    geoType: "LAD",
    geoCode: "E07000226"
  },
  {
    en: "Horsham",
    geoType: "LAD",
    geoCode: "E07000227"
  },
  {
    en: "Mid Sussex",
    geoType: "LAD",
    geoCode: "E07000228"
  },
  {
    en: "Worthing",
    geoType: "LAD",
    geoCode: "E07000229"
  },
  {
    en: "Bromsgrove",
    geoType: "LAD",
    geoCode: "E07000234"
  },
  {
    en: "Malvern Hills",
    geoType: "LAD",
    geoCode: "E07000235"
  },
  {
    en: "Redditch",
    geoType: "LAD",
    geoCode: "E07000236"
  },
  {
    en: "Worcester",
    geoType: "LAD",
    geoCode: "E07000237"
  },
  {
    en: "Wychavon",
    geoType: "LAD",
    geoCode: "E07000238"
  },
  {
    en: "Wyre Forest",
    geoType: "LAD",
    geoCode: "E07000239"
  },
  {
    en: "St Albans",
    geoType: "LAD",
    geoCode: "E07000240"
  },
  {
    en: "Welwyn Hatfield",
    geoType: "LAD",
    geoCode: "E07000241"
  },
  {
    en: "East Hertfordshire",
    geoType: "LAD",
    geoCode: "E07000242"
  },
  {
    en: "Stevenage",
    geoType: "LAD",
    geoCode: "E07000243"
  },
  {
    en: "East Suffolk",
    geoType: "LAD",
    geoCode: "E07000244"
  },
  {
    en: "West Suffolk",
    geoType: "LAD",
    geoCode: "E07000245"
  },
  {
    en: "Somerset West and Taunton",
    geoType: "LAD",
    geoCode: "E07000246"
  },
  {
    en: "Bolton",
    geoType: "LAD",
    geoCode: "E08000001"
  },
  {
    en: "Bury",
    geoType: "LAD",
    geoCode: "E08000002"
  },
  {
    en: "Manchester",
    geoType: "LAD",
    geoCode: "E08000003"
  },
  {
    en: "Oldham",
    geoType: "LAD",
    geoCode: "E08000004"
  },
  {
    en: "Rochdale",
    geoType: "LAD",
    geoCode: "E08000005"
  },
  {
    en: "Salford",
    geoType: "LAD",
    geoCode: "E08000006"
  },
  {
    en: "Stockport",
    geoType: "LAD",
    geoCode: "E08000007"
  },
  {
    en: "Tameside",
    geoType: "LAD",
    geoCode: "E08000008"
  },
  {
    en: "Trafford",
    geoType: "LAD",
    geoCode: "E08000009"
  },
  {
    en: "Wigan",
    geoType: "LAD",
    geoCode: "E08000010"
  },
  {
    en: "Knowsley",
    geoType: "LAD",
    geoCode: "E08000011"
  },
  {
    en: "Liverpool",
    geoType: "LAD",
    geoCode: "E08000012"
  },
  {
    en: "St. Helens",
    geoType: "LAD",
    geoCode: "E08000013"
  },
  {
    en: "Sefton",
    geoType: "LAD",
    geoCode: "E08000014"
  },
  {
    en: "Wirral",
    geoType: "LAD",
    geoCode: "E08000015"
  },
  {
    en: "Barnsley",
    geoType: "LAD",
    geoCode: "E08000016"
  },
  {
    en: "Doncaster",
    geoType: "LAD",
    geoCode: "E08000017"
  },
  {
    en: "Rotherham",
    geoType: "LAD",
    geoCode: "E08000018"
  },
  {
    en: "Sheffield",
    geoType: "LAD",
    geoCode: "E08000019"
  },
  {
    en: "Newcastle upon Tyne",
    geoType: "LAD",
    geoCode: "E08000021"
  },
  {
    en: "North Tyneside",
    geoType: "LAD",
    geoCode: "E08000022"
  },
  {
    en: "South Tyneside",
    geoType: "LAD",
    geoCode: "E08000023"
  },
  {
    en: "Sunderland",
    geoType: "LAD",
    geoCode: "E08000024"
  },
  {
    en: "Birmingham",
    geoType: "LAD",
    geoCode: "E08000025"
  },
  {
    en: "Coventry",
    geoType: "LAD",
    geoCode: "E08000026"
  },
  {
    en: "Dudley",
    geoType: "LAD",
    geoCode: "E08000027"
  },
  {
    en: "Sandwell",
    geoType: "LAD",
    geoCode: "E08000028"
  },
  {
    en: "Solihull",
    geoType: "LAD",
    geoCode: "E08000029"
  },
  {
    en: "Walsall",
    geoType: "LAD",
    geoCode: "E08000030"
  },
  {
    en: "Wolverhampton",
    geoType: "LAD",
    geoCode: "E08000031"
  },
  {
    en: "Bradford",
    geoType: "LAD",
    geoCode: "E08000032"
  },
  {
    en: "Calderdale",
    geoType: "LAD",
    geoCode: "E08000033"
  },
  {
    en: "Kirklees",
    geoType: "LAD",
    geoCode: "E08000034"
  },
  {
    en: "Leeds",
    geoType: "LAD",
    geoCode: "E08000035"
  },
  {
    en: "Wakefield",
    geoType: "LAD",
    geoCode: "E08000036"
  },
  {
    en: "Gateshead",
    geoType: "LAD",
    geoCode: "E08000037"
  },
  {
    en: "City of London",
    geoType: "LAD",
    geoCode: "E09000001"
  },
  {
    en: "Barking and Dagenham",
    geoType: "LAD",
    geoCode: "E09000002"
  },
  {
    en: "Barnet",
    geoType: "LAD",
    geoCode: "E09000003"
  },
  {
    en: "Bexley",
    geoType: "LAD",
    geoCode: "E09000004"
  },
  {
    en: "Brent",
    geoType: "LAD",
    geoCode: "E09000005"
  },
  {
    en: "Bromley",
    geoType: "LAD",
    geoCode: "E09000006"
  },
  {
    en: "Camden",
    geoType: "LAD",
    geoCode: "E09000007"
  },
  {
    en: "Croydon",
    geoType: "LAD",
    geoCode: "E09000008"
  },
  {
    en: "Ealing",
    geoType: "LAD",
    geoCode: "E09000009"
  },
  {
    en: "Enfield",
    geoType: "LAD",
    geoCode: "E09000010"
  },
  {
    en: "Greenwich",
    geoType: "LAD",
    geoCode: "E09000011"
  },
  {
    en: "Hackney",
    geoType: "LAD",
    geoCode: "E09000012"
  },
  {
    en: "Hammersmith and Fulham",
    geoType: "LAD",
    geoCode: "E09000013"
  },
  {
    en: "Haringey",
    geoType: "LAD",
    geoCode: "E09000014"
  },
  {
    en: "Harrow",
    geoType: "LAD",
    geoCode: "E09000015"
  },
  {
    en: "Havering",
    geoType: "LAD",
    geoCode: "E09000016"
  },
  {
    en: "Hillingdon",
    geoType: "LAD",
    geoCode: "E09000017"
  },
  {
    en: "Hounslow",
    geoType: "LAD",
    geoCode: "E09000018"
  },
  {
    en: "Islington",
    geoType: "LAD",
    geoCode: "E09000019"
  },
  {
    en: "Kensington and Chelsea",
    geoType: "LAD",
    geoCode: "E09000020"
  },
  {
    en: "Kingston upon Thames",
    geoType: "LAD",
    geoCode: "E09000021"
  },
  {
    en: "Lambeth",
    geoType: "LAD",
    geoCode: "E09000022"
  },
  {
    en: "Lewisham",
    geoType: "LAD",
    geoCode: "E09000023"
  },
  {
    en: "Merton",
    geoType: "LAD",
    geoCode: "E09000024"
  },
  {
    en: "Newham",
    geoType: "LAD",
    geoCode: "E09000025"
  },
  {
    en: "Redbridge",
    geoType: "LAD",
    geoCode: "E09000026"
  },
  {
    en: "Richmond upon Thames",
    geoType: "LAD",
    geoCode: "E09000027"
  },
  {
    en: "Southwark",
    geoType: "LAD",
    geoCode: "E09000028"
  },
  {
    en: "Sutton",
    geoType: "LAD",
    geoCode: "E09000029"
  },
  {
    en: "Tower Hamlets",
    geoType: "LAD",
    geoCode: "E09000030"
  },
  {
    en: "Waltham Forest",
    geoType: "LAD",
    geoCode: "E09000031"
  },
  {
    en: "Wandsworth",
    geoType: "LAD",
    geoCode: "E09000032"
  },
  {
    en: "Westminster",
    geoType: "LAD",
    geoCode: "E09000033"
  },
  {
    en: "Clackmannanshire",
    geoType: "LAD",
    geoCode: "S12000005"
  },
  {
    en: "Dumfries and Galloway",
    geoType: "LAD",
    geoCode: "S12000006"
  },
  {
    en: "East Ayrshire",
    geoType: "LAD",
    geoCode: "S12000008"
  },
  {
    en: "East Lothian",
    geoType: "LAD",
    geoCode: "S12000010"
  },
  {
    en: "East Renfrewshire",
    geoType: "LAD",
    geoCode: "S12000011"
  },
  {
    en: "Na h-Eileanan Siar",
    geoType: "LAD",
    geoCode: "S12000013"
  },
  {
    en: "Falkirk",
    geoType: "LAD",
    geoCode: "S12000014"
  },
  {
    en: "Highland",
    geoType: "LAD",
    geoCode: "S12000017"
  },
  {
    en: "Inverclyde",
    geoType: "LAD",
    geoCode: "S12000018"
  },
  {
    en: "Midlothian",
    geoType: "LAD",
    geoCode: "S12000019"
  },
  {
    en: "Moray",
    geoType: "LAD",
    geoCode: "S12000020"
  },
  {
    en: "North Ayrshire",
    geoType: "LAD",
    geoCode: "S12000021"
  },
  {
    en: "Orkney Islands",
    geoType: "LAD",
    geoCode: "S12000023"
  },
  {
    en: "Scottish Borders",
    geoType: "LAD",
    geoCode: "S12000026"
  },
  {
    en: "Shetland Islands",
    geoType: "LAD",
    geoCode: "S12000027"
  },
  {
    en: "South Ayrshire",
    geoType: "LAD",
    geoCode: "S12000028"
  },
  {
    en: "South Lanarkshire",
    geoType: "LAD",
    geoCode: "S12000029"
  },
  {
    en: "Stirling",
    geoType: "LAD",
    geoCode: "S12000030"
  },
  {
    en: "Aberdeen City",
    geoType: "LAD",
    geoCode: "S12000033"
  },
  {
    en: "Aberdeenshire",
    geoType: "LAD",
    geoCode: "S12000034"
  },
  {
    en: "Argyll and Bute",
    geoType: "LAD",
    geoCode: "S12000035"
  },
  {
    en: "City of Edinburgh",
    geoType: "LAD",
    geoCode: "S12000036"
  },
  {
    en: "Renfrewshire",
    geoType: "LAD",
    geoCode: "S12000038"
  },
  {
    en: "West Dunbartonshire",
    geoType: "LAD",
    geoCode: "S12000039"
  },
  {
    en: "West Lothian",
    geoType: "LAD",
    geoCode: "S12000040"
  },
  {
    en: "Angus",
    geoType: "LAD",
    geoCode: "S12000041"
  },
  {
    en: "Dundee City",
    geoType: "LAD",
    geoCode: "S12000042"
  },
  {
    en: "East Dunbartonshire",
    geoType: "LAD",
    geoCode: "S12000045"
  },
  {
    en: "Fife",
    geoType: "LAD",
    geoCode: "S12000047"
  },
  {
    en: "Perth and Kinross",
    geoType: "LAD",
    geoCode: "S12000048"
  },
  {
    en: "Glasgow City",
    geoType: "LAD",
    geoCode: "S12000049"
  },
  {
    en: "North Lanarkshire",
    geoType: "LAD",
    geoCode: "S12000050"
  },
  {
    en: "Isle of Anglesey",
    geoType: "LAD",
    geoCode: "W06000001"
  },
  {
    en: "Gwynedd",
    geoType: "LAD",
    geoCode: "W06000002"
  },
  {
    en: "Conwy",
    geoType: "LAD",
    geoCode: "W06000003"
  },
  {
    en: "Denbighshire",
    geoType: "LAD",
    geoCode: "W06000004"
  },
  {
    en: "Flintshire",
    geoType: "LAD",
    geoCode: "W06000005"
  },
  {
    en: "Wrexham",
    geoType: "LAD",
    geoCode: "W06000006"
  },
  {
    en: "Ceredigion",
    geoType: "LAD",
    geoCode: "W06000008"
  },
  {
    en: "Pembrokeshire",
    geoType: "LAD",
    geoCode: "W06000009"
  },
  {
    en: "Carmarthenshire",
    geoType: "LAD",
    geoCode: "W06000010"
  },
  {
    en: "Swansea",
    geoType: "LAD",
    geoCode: "W06000011"
  },
  {
    en: "Neath Port Talbot",
    geoType: "LAD",
    geoCode: "W06000012"
  },
  {
    en: "Bridgend",
    geoType: "LAD",
    geoCode: "W06000013"
  },
  {
    en: "Vale of Glamorgan",
    geoType: "LAD",
    geoCode: "W06000014"
  },
  {
    en: "Cardiff",
    geoType: "LAD",
    geoCode: "W06000015"
  },
  {
    en: "Rhondda Cynon Taf",
    geoType: "LAD",
    geoCode: "W06000016"
  },
  {
    en: "Caerphilly",
    geoType: "LAD",
    geoCode: "W06000018"
  },
  {
    en: "Blaenau Gwent",
    geoType: "LAD",
    geoCode: "W06000019"
  },
  {
    en: "Torfaen",
    geoType: "LAD",
    geoCode: "W06000020"
  },
  {
    en: "Monmouthshire",
    geoType: "LAD",
    geoCode: "W06000021"
  },
  {
    en: "Newport",
    geoType: "LAD",
    geoCode: "W06000022"
  },
  {
    en: "Powys",
    geoType: "LAD",
    geoCode: "W06000023"
  },
  {
    en: "Merthyr Tydfil",
    geoType: "LAD",
    geoCode: "W06000024"
  },
  {
    en: "City of London",
    geoType: "MSOA",
    geoCode: "E02000001"
  },
  {
    en: "Marks Gate",
    geoType: "MSOA",
    geoCode: "E02000002"
  },
  {
    en: "Chadwell Heath East",
    geoType: "MSOA",
    geoCode: "E02000003"
  },
  {
    en: "Eastbrookend",
    geoType: "MSOA",
    geoCode: "E02000004"
  },
  {
    en: "Becontree Heath",
    geoType: "MSOA",
    geoCode: "E02000005"
  },
  {
    en: "Central Park & Frizlands Lane",
    geoType: "MSOA",
    geoCode: "E02000007"
  },
  {
    en: "Becontree East",
    geoType: "MSOA",
    geoCode: "E02000008"
  },
  {
    en: "Becontree West",
    geoType: "MSOA",
    geoCode: "E02000009"
  },
  {
    en: "Dagenham North",
    geoType: "MSOA",
    geoCode: "E02000010"
  },
  {
    en: "Dagenham Eastbrook",
    geoType: "MSOA",
    geoCode: "E02000011"
  },
  {
    en: "Longbridge & Barking Park",
    geoType: "MSOA",
    geoCode: "E02000012"
  },
  {
    en: "Becontree South",
    geoType: "MSOA",
    geoCode: "E02000013"
  },
  {
    en: "Dagenham Central",
    geoType: "MSOA",
    geoCode: "E02000014"
  },
  {
    en: "Old Dagenham Park & Village",
    geoType: "MSOA",
    geoCode: "E02000015"
  },
  {
    en: "Barking Central",
    geoType: "MSOA",
    geoCode: "E02000016"
  },
  {
    en: "Barking East",
    geoType: "MSOA",
    geoCode: "E02000017"
  },
  {
    en: "Mayesbrook Park & Rippleside",
    geoType: "MSOA",
    geoCode: "E02000018"
  },
  {
    en: "Goresbrook & Scrattons Farm",
    geoType: "MSOA",
    geoCode: "E02000019"
  },
  {
    en: "Creekmouth & Barking Riverside",
    geoType: "MSOA",
    geoCode: "E02000020"
  },
  {
    en: "Rylands Estate & Dagenham Dock",
    geoType: "MSOA",
    geoCode: "E02000021"
  },
  {
    en: "Gascoigne Estate & Roding Riverside",
    geoType: "MSOA",
    geoCode: "E02000022"
  },
  {
    en: "Thames View",
    geoType: "MSOA",
    geoCode: "E02000023"
  },
  {
    en: "High Barnet & Hadley",
    geoType: "MSOA",
    geoCode: "E02000024"
  },
  {
    en: "Hadley Wood",
    geoType: "MSOA",
    geoCode: "E02000025"
  },
  {
    en: "Oak Hill",
    geoType: "MSOA",
    geoCode: "E02000026"
  },
  {
    en: "Ducks Island & Underhill",
    geoType: "MSOA",
    geoCode: "E02000027"
  },
  {
    en: "New Barnet West",
    geoType: "MSOA",
    geoCode: "E02000028"
  },
  {
    en: "New Barnet Town & East Barnet",
    geoType: "MSOA",
    geoCode: "E02000029"
  },
  {
    en: "Totteridge & Barnet Gate",
    geoType: "MSOA",
    geoCode: "E02000030"
  },
  {
    en: "Oakleigh Park",
    geoType: "MSOA",
    geoCode: "E02000031"
  },
  {
    en: "Osidge",
    geoType: "MSOA",
    geoCode: "E02000032"
  },
  {
    en: "Brunswick Park Road",
    geoType: "MSOA",
    geoCode: "E02000033"
  },
  {
    en: "Whetstone East",
    geoType: "MSOA",
    geoCode: "E02000034"
  },
  {
    en: "Woodside Park",
    geoType: "MSOA",
    geoCode: "E02000035"
  },
  {
    en: "Edgware East",
    geoType: "MSOA",
    geoCode: "E02000036"
  },
  {
    en: "Edgware Park",
    geoType: "MSOA",
    geoCode: "E02000037"
  },
  {
    en: "Friern Barnet",
    geoType: "MSOA",
    geoCode: "E02000038"
  },
  {
    en: "Mill Hill Park",
    geoType: "MSOA",
    geoCode: "E02000039"
  },
  {
    en: "Mill Hill East",
    geoType: "MSOA",
    geoCode: "E02000040"
  },
  {
    en: "Edgware Central",
    geoType: "MSOA",
    geoCode: "E02000041"
  },
  {
    en: "North Finchley",
    geoType: "MSOA",
    geoCode: "E02000042"
  },
  {
    en: "West Finchley",
    geoType: "MSOA",
    geoCode: "E02000043"
  },
  {
    en: "Mill Hill Broadway",
    geoType: "MSOA",
    geoCode: "E02000044"
  },
  {
    en: "Colney Hatch",
    geoType: "MSOA",
    geoCode: "E02000045"
  },
  {
    en: "Church End",
    geoType: "MSOA",
    geoCode: "E02000046"
  },
  {
    en: "Burnt Oak & Watling Park",
    geoType: "MSOA",
    geoCode: "E02000047"
  },
  {
    en: "Copthall & Downage",
    geoType: "MSOA",
    geoCode: "E02000048"
  },
  {
    en: "Grahame Park",
    geoType: "MSOA",
    geoCode: "E02000049"
  },
  {
    en: "Fallow Corner",
    geoType: "MSOA",
    geoCode: "E02000050"
  },
  {
    en: "Finchley Central",
    geoType: "MSOA",
    geoCode: "E02000051"
  },
  {
    en: "East Finchley",
    geoType: "MSOA",
    geoCode: "E02000052"
  },
  {
    en: "North Hendon & Sunny Hill",
    geoType: "MSOA",
    geoCode: "E02000054"
  },
  {
    en: "Hendon Central",
    geoType: "MSOA",
    geoCode: "E02000055"
  },
  {
    en: "Hampstead Garden Suburb",
    geoType: "MSOA",
    geoCode: "E02000056"
  },
  {
    en: "Hendon Park",
    geoType: "MSOA",
    geoCode: "E02000057"
  },
  {
    en: "Temple Fortune",
    geoType: "MSOA",
    geoCode: "E02000058"
  },
  {
    en: "West Hendon",
    geoType: "MSOA",
    geoCode: "E02000059"
  },
  {
    en: "Golders Green North",
    geoType: "MSOA",
    geoCode: "E02000060"
  },
  {
    en: "Golders Green South",
    geoType: "MSOA",
    geoCode: "E02000061"
  },
  {
    en: "Brent Cross & Staples Corner",
    geoType: "MSOA",
    geoCode: "E02000062"
  },
  {
    en: "North Cricklewood",
    geoType: "MSOA",
    geoCode: "E02000063"
  },
  {
    en: "Childs Hill",
    geoType: "MSOA",
    geoCode: "E02000064"
  },
  {
    en: "Crossway Park",
    geoType: "MSOA",
    geoCode: "E02000065"
  },
  {
    en: "South Thamesmead",
    geoType: "MSOA",
    geoCode: "E02000066"
  },
  {
    en: "Belvedere & Lessness Heath",
    geoType: "MSOA",
    geoCode: "E02000067"
  },
  {
    en: "Erith East",
    geoType: "MSOA",
    geoCode: "E02000068"
  },
  {
    en: "Erith West",
    geoType: "MSOA",
    geoCode: "E02000069"
  },
  {
    en: "Lesnes Abbey",
    geoType: "MSOA",
    geoCode: "E02000070"
  },
  {
    en: "Northumberland Heath",
    geoType: "MSOA",
    geoCode: "E02000071"
  },
  {
    en: "Slade Green & Crayford Marshes",
    geoType: "MSOA",
    geoCode: "E02000072"
  },
  {
    en: "Bostall",
    geoType: "MSOA",
    geoCode: "E02000073"
  },
  {
    en: "Lesney Farm & Colyers East",
    geoType: "MSOA",
    geoCode: "E02000074"
  },
  {
    en: "Bursted Wood",
    geoType: "MSOA",
    geoCode: "E02000075"
  },
  {
    en: "St Michael's",
    geoType: "MSOA",
    geoCode: "E02000077"
  },
  {
    en: "Barnehurst North",
    geoType: "MSOA",
    geoCode: "E02000078"
  },
  {
    en: "Bexleyheath Broadway",
    geoType: "MSOA",
    geoCode: "E02000079"
  },
  {
    en: "Welling",
    geoType: "MSOA",
    geoCode: "E02000080"
  },
  {
    en: "Barnehurst South",
    geoType: "MSOA",
    geoCode: "E02000081"
  },
  {
    en: "Falconwood",
    geoType: "MSOA",
    geoCode: "E02000082"
  },
  {
    en: "Crayford",
    geoType: "MSOA",
    geoCode: "E02000083"
  },
  {
    en: "Danson Park",
    geoType: "MSOA",
    geoCode: "E02000084"
  },
  {
    en: "Blackfen",
    geoType: "MSOA",
    geoCode: "E02000085"
  },
  {
    en: "Lamorbey",
    geoType: "MSOA",
    geoCode: "E02000086"
  },
  {
    en: "Bexley Village",
    geoType: "MSOA",
    geoCode: "E02000087"
  },
  {
    en: "Albany Park",
    geoType: "MSOA",
    geoCode: "E02000088"
  },
  {
    en: "Longlands & Halfway",
    geoType: "MSOA",
    geoCode: "E02000089"
  },
  {
    en: "Sidcup West",
    geoType: "MSOA",
    geoCode: "E02000090"
  },
  {
    en: "Sidcup East",
    geoType: "MSOA",
    geoCode: "E02000091"
  },
  {
    en: "Foots Cray Meadows",
    geoType: "MSOA",
    geoCode: "E02000092"
  },
  {
    en: "Queensbury South",
    geoType: "MSOA",
    geoCode: "E02000093"
  },
  {
    en: "Kingsbury East",
    geoType: "MSOA",
    geoCode: "E02000094"
  },
  {
    en: "Kingsbury West",
    geoType: "MSOA",
    geoCode: "E02000095"
  },
  {
    en: "Kenton Woodcock Park",
    geoType: "MSOA",
    geoCode: "E02000096"
  },
  {
    en: "Kingsbury South",
    geoType: "MSOA",
    geoCode: "E02000097"
  },
  {
    en: "Barnhill The Avenue",
    geoType: "MSOA",
    geoCode: "E02000098"
  },
  {
    en: "Preston Park & East Lane",
    geoType: "MSOA",
    geoCode: "E02000099"
  },
  {
    en: "Northwick Park",
    geoType: "MSOA",
    geoCode: "E02000100"
  },
  {
    en: "Forty Lane",
    geoType: "MSOA",
    geoCode: "E02000101"
  },
  {
    en: "Welsh Harp",
    geoType: "MSOA",
    geoCode: "E02000102"
  },
  {
    en: "Dollis Hill",
    geoType: "MSOA",
    geoCode: "E02000103"
  },
  {
    en: "Wembley North",
    geoType: "MSOA",
    geoCode: "E02000104"
  },
  {
    en: "Sudbury East",
    geoType: "MSOA",
    geoCode: "E02000105"
  },
  {
    en: "Neasden",
    geoType: "MSOA",
    geoCode: "E02000106"
  },
  {
    en: "Cricklewood Anson Road",
    geoType: "MSOA",
    geoCode: "E02000107"
  },
  {
    en: "Sudbury West",
    geoType: "MSOA",
    geoCode: "E02000108"
  },
  {
    en: "Dudden Hill",
    geoType: "MSOA",
    geoCode: "E02000110"
  },
  {
    en: "Wembley West",
    geoType: "MSOA",
    geoCode: "E02000111"
  },
  {
    en: "Wembley East",
    geoType: "MSOA",
    geoCode: "E02000112"
  },
  {
    en: "St Raphaels",
    geoType: "MSOA",
    geoCode: "E02000113"
  },
  {
    en: "Willesden Green",
    geoType: "MSOA",
    geoCode: "E02000114"
  },
  {
    en: "Brondesbury",
    geoType: "MSOA",
    geoCode: "E02000115"
  },
  {
    en: "Roundwood Park",
    geoType: "MSOA",
    geoCode: "E02000116"
  },
  {
    en: "Church End",
    geoType: "MSOA",
    geoCode: "E02000117"
  },
  {
    en: "Alperton East",
    geoType: "MSOA",
    geoCode: "E02000118"
  },
  {
    en: "Stonebridge",
    geoType: "MSOA",
    geoCode: "E02000119"
  },
  {
    en: "Kilburn West",
    geoType: "MSOA",
    geoCode: "E02000120"
  },
  {
    en: "Alperton West",
    geoType: "MSOA",
    geoCode: "E02000121"
  },
  {
    en: "Brondesbury Park",
    geoType: "MSOA",
    geoCode: "E02000122"
  },
  {
    en: "Harlesden",
    geoType: "MSOA",
    geoCode: "E02000123"
  },
  {
    en: "Queens Park",
    geoType: "MSOA",
    geoCode: "E02000124"
  },
  {
    en: "Kensal Green",
    geoType: "MSOA",
    geoCode: "E02000125"
  },
  {
    en: "Kilburn Park",
    geoType: "MSOA",
    geoCode: "E02000126"
  },
  {
    en: "Mottingham",
    geoType: "MSOA",
    geoCode: "E02000127"
  },
  {
    en: "Chislehurst North",
    geoType: "MSOA",
    geoCode: "E02000128"
  },
  {
    en: "Penge East",
    geoType: "MSOA",
    geoCode: "E02000130"
  },
  {
    en: "Crystal Palace Park",
    geoType: "MSOA",
    geoCode: "E02000131"
  },
  {
    en: "New Beckenham",
    geoType: "MSOA",
    geoCode: "E02000132"
  },
  {
    en: "Chislehurst West & Elmstead",
    geoType: "MSOA",
    geoCode: "E02000133"
  },
  {
    en: "Bromley North & Sundridge",
    geoType: "MSOA",
    geoCode: "E02000134"
  },
  {
    en: "Anerley North & Penge West",
    geoType: "MSOA",
    geoCode: "E02000135"
  },
  {
    en: "Chislehurst East & Hoblingwell Wood",
    geoType: "MSOA",
    geoCode: "E02000136"
  },
  {
    en: "Shortlands Bromley Road",
    geoType: "MSOA",
    geoCode: "E02000137"
  },
  {
    en: "Beckenham East & Kelsey Park",
    geoType: "MSOA",
    geoCode: "E02000138"
  },
  {
    en: "Clock House & Cator Park",
    geoType: "MSOA",
    geoCode: "E02000139"
  },
  {
    en: "St Mary Cray North",
    geoType: "MSOA",
    geoCode: "E02000140"
  },
  {
    en: "Anerley South",
    geoType: "MSOA",
    geoCode: "E02000141"
  },
  {
    en: "Widmore",
    geoType: "MSOA",
    geoCode: "E02000142"
  },
  {
    en: "Bromley South",
    geoType: "MSOA",
    geoCode: "E02000144"
  },
  {
    en: "St Mary Cray East",
    geoType: "MSOA",
    geoCode: "E02000145"
  },
  {
    en: "Bickley West",
    geoType: "MSOA",
    geoCode: "E02000146"
  },
  {
    en: "Langley Park",
    geoType: "MSOA",
    geoCode: "E02000147"
  },
  {
    en: "Bickley East",
    geoType: "MSOA",
    geoCode: "E02000148"
  },
  {
    en: "St Mary Cray South",
    geoType: "MSOA",
    geoCode: "E02000149"
  },
  {
    en: "Eden Park & Bethlem",
    geoType: "MSOA",
    geoCode: "E02000150"
  },
  {
    en: "Petts Wood",
    geoType: "MSOA",
    geoCode: "E02000151"
  },
  {
    en: "Bromley Common",
    geoType: "MSOA",
    geoCode: "E02000152"
  },
  {
    en: "Hayes North",
    geoType: "MSOA",
    geoCode: "E02000153"
  },
  {
    en: "Orpington West",
    geoType: "MSOA",
    geoCode: "E02000154"
  },
  {
    en: "Orpington East",
    geoType: "MSOA",
    geoCode: "E02000155"
  },
  {
    en: "West Wickham",
    geoType: "MSOA",
    geoCode: "E02000156"
  },
  {
    en: "Crofton",
    geoType: "MSOA",
    geoCode: "E02000157"
  },
  {
    en: "Goddington",
    geoType: "MSOA",
    geoCode: "E02000158"
  },
  {
    en: "Keston",
    geoType: "MSOA",
    geoCode: "E02000159"
  },
  {
    en: "Hayes South & Coney Hall",
    geoType: "MSOA",
    geoCode: "E02000160"
  },
  {
    en: "Orpington South",
    geoType: "MSOA",
    geoCode: "E02000161"
  },
  {
    en: "Farnborough",
    geoType: "MSOA",
    geoCode: "E02000162"
  },
  {
    en: "Chelsfield & Green Street Green",
    geoType: "MSOA",
    geoCode: "E02000163"
  },
  {
    en: "Biggin Hill West",
    geoType: "MSOA",
    geoCode: "E02000165"
  },
  {
    en: "Highgate West",
    geoType: "MSOA",
    geoCode: "E02000166"
  },
  {
    en: "Hampstead Town",
    geoType: "MSOA",
    geoCode: "E02000167"
  },
  {
    en: "Tufnell Park West",
    geoType: "MSOA",
    geoCode: "E02000168"
  },
  {
    en: "Frognal",
    geoType: "MSOA",
    geoCode: "E02000169"
  },
  {
    en: "Fortune Green",
    geoType: "MSOA",
    geoCode: "E02000170"
  },
  {
    en: "Mansfield Road & Park Hill Road",
    geoType: "MSOA",
    geoCode: "E02000171"
  },
  {
    en: "Kentish Town West",
    geoType: "MSOA",
    geoCode: "E02000172"
  },
  {
    en: "Fitzjohns & Royal Free",
    geoType: "MSOA",
    geoCode: "E02000173"
  },
  {
    en: "Kentish Town East",
    geoType: "MSOA",
    geoCode: "E02000174"
  },
  {
    en: "West Hampstead",
    geoType: "MSOA",
    geoCode: "E02000175"
  },
  {
    en: "Belsize Park",
    geoType: "MSOA",
    geoCode: "E02000176"
  },
  {
    en: "Chalk Farm",
    geoType: "MSOA",
    geoCode: "E02000177"
  },
  {
    en: "Kilburn Grange",
    geoType: "MSOA",
    geoCode: "E02000178"
  },
  {
    en: "Adelaide Road",
    geoType: "MSOA",
    geoCode: "E02000179"
  },
  {
    en: "Camden Road South",
    geoType: "MSOA",
    geoCode: "E02000180"
  },
  {
    en: "South Hampstead",
    geoType: "MSOA",
    geoCode: "E02000181"
  },
  {
    en: "Swiss Cottage",
    geoType: "MSOA",
    geoCode: "E02000182"
  },
  {
    en: "Primrose Hill",
    geoType: "MSOA",
    geoCode: "E02000183"
  },
  {
    en: "Camden Street & Elm Village",
    geoType: "MSOA",
    geoCode: "E02000184"
  },
  {
    en: "Kilburn East",
    geoType: "MSOA",
    geoCode: "E02000185"
  },
  {
    en: "Camden Town & Mornington Crescent",
    geoType: "MSOA",
    geoCode: "E02000186"
  },
  {
    en: "Somers Town",
    geoType: "MSOA",
    geoCode: "E02000187"
  },
  {
    en: "Euston",
    geoType: "MSOA",
    geoCode: "E02000188"
  },
  {
    en: "Fitzrovia East & Bloomsbury West",
    geoType: "MSOA",
    geoCode: "E02000191"
  },
  {
    en: "Hatton Garden & Theobalds Road",
    geoType: "MSOA",
    geoCode: "E02000192"
  },
  {
    en: "Holborn, St Giles & Bloomsbury South",
    geoType: "MSOA",
    geoCode: "E02000193"
  },
  {
    en: "Crystal Palace Triangle",
    geoType: "MSOA",
    geoCode: "E02000194"
  },
  {
    en: "Upper Norwood",
    geoType: "MSOA",
    geoCode: "E02000195"
  },
  {
    en: "Norbury East",
    geoType: "MSOA",
    geoCode: "E02000196"
  },
  {
    en: "Norbury West",
    geoType: "MSOA",
    geoCode: "E02000197"
  },
  {
    en: "Thornton Heath North West",
    geoType: "MSOA",
    geoCode: "E02000198"
  },
  {
    en: "Thornton Heath North East",
    geoType: "MSOA",
    geoCode: "E02000199"
  },
  {
    en: "South Norwood Hill",
    geoType: "MSOA",
    geoCode: "E02000200"
  },
  {
    en: "South Norwood Central",
    geoType: "MSOA",
    geoCode: "E02000201"
  },
  {
    en: "Thornton Heath West",
    geoType: "MSOA",
    geoCode: "E02000202"
  },
  {
    en: "Thornton Heath Central",
    geoType: "MSOA",
    geoCode: "E02000203"
  },
  {
    en: "West Thornton North",
    geoType: "MSOA",
    geoCode: "E02000204"
  },
  {
    en: "Selhurst North",
    geoType: "MSOA",
    geoCode: "E02000206"
  },
  {
    en: "Woodside & Ashburton",
    geoType: "MSOA",
    geoCode: "E02000207"
  },
  {
    en: "University Hospital & Queen's Road",
    geoType: "MSOA",
    geoCode: "E02000208"
  },
  {
    en: "West Thornton South & Ampere Way",
    geoType: "MSOA",
    geoCode: "E02000209"
  },
  {
    en: "Addiscombe North",
    geoType: "MSOA",
    geoCode: "E02000210"
  },
  {
    en: "Monks Orchard",
    geoType: "MSOA",
    geoCode: "E02000211"
  },
  {
    en: "Broad Green & Waddon Marsh",
    geoType: "MSOA",
    geoCode: "E02000212"
  },
  {
    en: "Selhurst South & West Croydon",
    geoType: "MSOA",
    geoCode: "E02000213"
  },
  {
    en: "Addiscombe East",
    geoType: "MSOA",
    geoCode: "E02000214"
  },
  {
    en: "Addiscombe West",
    geoType: "MSOA",
    geoCode: "E02000215"
  },
  {
    en: "Park Hill & Lloyd Park",
    geoType: "MSOA",
    geoCode: "E02000216"
  },
  {
    en: "Croydon Minster & Waddon North",
    geoType: "MSOA",
    geoCode: "E02000217"
  },
  {
    en: "Shirley East",
    geoType: "MSOA",
    geoCode: "E02000218"
  },
  {
    en: "Shirley West",
    geoType: "MSOA",
    geoCode: "E02000219"
  },
  {
    en: "Waddon South",
    geoType: "MSOA",
    geoCode: "E02000221"
  },
  {
    en: "Croham",
    geoType: "MSOA",
    geoCode: "E02000222"
  },
  {
    en: "New Addington North",
    geoType: "MSOA",
    geoCode: "E02000223"
  },
  {
    en: "Purley North",
    geoType: "MSOA",
    geoCode: "E02000224"
  },
  {
    en: "New Addington Central",
    geoType: "MSOA",
    geoCode: "E02000225"
  },
  {
    en: "Selsdon",
    geoType: "MSOA",
    geoCode: "E02000226"
  },
  {
    en: "Forestdale",
    geoType: "MSOA",
    geoCode: "E02000227"
  },
  {
    en: "Sanderstead",
    geoType: "MSOA",
    geoCode: "E02000228"
  },
  {
    en: "New Addington South",
    geoType: "MSOA",
    geoCode: "E02000229"
  },
  {
    en: "Purley Central",
    geoType: "MSOA",
    geoCode: "E02000230"
  },
  {
    en: "Woodcote",
    geoType: "MSOA",
    geoCode: "E02000231"
  },
  {
    en: "Selsdon Park & Hamsey Green",
    geoType: "MSOA",
    geoCode: "E02000232"
  },
  {
    en: "Kenley North",
    geoType: "MSOA",
    geoCode: "E02000233"
  },
  {
    en: "Coulsdon",
    geoType: "MSOA",
    geoCode: "E02000234"
  },
  {
    en: "Kenley South",
    geoType: "MSOA",
    geoCode: "E02000235"
  },
  {
    en: "Woodmansterne",
    geoType: "MSOA",
    geoCode: "E02000236"
  },
  {
    en: "Old Coulsdon",
    geoType: "MSOA",
    geoCode: "E02000237"
  },
  {
    en: "Whitton Avenue West",
    geoType: "MSOA",
    geoCode: "E02000238"
  },
  {
    en: "Horsenden",
    geoType: "MSOA",
    geoCode: "E02000239"
  },
  {
    en: "Northolt West",
    geoType: "MSOA",
    geoCode: "E02000240"
  },
  {
    en: "Northolt East",
    geoType: "MSOA",
    geoCode: "E02000241"
  },
  {
    en: "Bilton Road",
    geoType: "MSOA",
    geoCode: "E02000242"
  },
  {
    en: "Greenford North",
    geoType: "MSOA",
    geoCode: "E02000243"
  },
  {
    en: "Perivale",
    geoType: "MSOA",
    geoCode: "E02000244"
  },
  {
    en: "Northolt South",
    geoType: "MSOA",
    geoCode: "E02000245"
  },
  {
    en: "Kingshill Avenue",
    geoType: "MSOA",
    geoCode: "E02000246"
  },
  {
    en: "Greenford West",
    geoType: "MSOA",
    geoCode: "E02000247"
  },
  {
    en: "Hanger Hill East",
    geoType: "MSOA",
    geoCode: "E02000248"
  },
  {
    en: "Greenford South",
    geoType: "MSOA",
    geoCode: "E02000249"
  },
  {
    en: "Pitshanger",
    geoType: "MSOA",
    geoCode: "E02000250"
  },
  {
    en: "Greenford Ravenor Park",
    geoType: "MSOA",
    geoCode: "E02000251"
  },
  {
    en: "North Acton",
    geoType: "MSOA",
    geoCode: "E02000252"
  },
  {
    en: "Cuckoo Park",
    geoType: "MSOA",
    geoCode: "E02000253"
  },
  {
    en: "Southall North",
    geoType: "MSOA",
    geoCode: "E02000254"
  },
  {
    en: "Drayton Green & Cleveland",
    geoType: "MSOA",
    geoCode: "E02000255"
  },
  {
    en: "Ealing Broadway West",
    geoType: "MSOA",
    geoCode: "E02000256"
  },
  {
    en: "Acton Noel Road & Lynton Road",
    geoType: "MSOA",
    geoCode: "E02000258"
  },
  {
    en: "Brent Valley",
    geoType: "MSOA",
    geoCode: "E02000259"
  },
  {
    en: "Southall Park",
    geoType: "MSOA",
    geoCode: "E02000260"
  },
  {
    en: "East Acton",
    geoType: "MSOA",
    geoCode: "E02000261"
  },
  {
    en: "Acton Central",
    geoType: "MSOA",
    geoCode: "E02000262"
  },
  {
    en: "Southall West",
    geoType: "MSOA",
    geoCode: "E02000263"
  },
  {
    en: "Ealing Common & Twyford Ave",
    geoType: "MSOA",
    geoCode: "E02000264"
  },
  {
    en: "West Ealing",
    geoType: "MSOA",
    geoCode: "E02000265"
  },
  {
    en: "Norwood Green North & Windmill Park",
    geoType: "MSOA",
    geoCode: "E02000266"
  },
  {
    en: "Hanwell",
    geoType: "MSOA",
    geoCode: "E02000267"
  },
  {
    en: "St Mary's",
    geoType: "MSOA",
    geoCode: "E02000268"
  },
  {
    en: "Northfields",
    geoType: "MSOA",
    geoCode: "E02000269"
  },
  {
    en: "South Acton",
    geoType: "MSOA",
    geoCode: "E02000270"
  },
  {
    en: "Bedford Park",
    geoType: "MSOA",
    geoCode: "E02000271"
  },
  {
    en: "Elthorne Park",
    geoType: "MSOA",
    geoCode: "E02000272"
  },
  {
    en: "Norwood Green South",
    geoType: "MSOA",
    geoCode: "E02000275"
  },
  {
    en: "South Ealing",
    geoType: "MSOA",
    geoCode: "E02000276"
  },
  {
    en: "Bullsmoor & Freezywater",
    geoType: "MSOA",
    geoCode: "E02000277"
  },
  {
    en: "Turkey Street",
    geoType: "MSOA",
    geoCode: "E02000278"
  },
  {
    en: "Enfield Lock",
    geoType: "MSOA",
    geoCode: "E02000279"
  },
  {
    en: "Chase & Crews Hill",
    geoType: "MSOA",
    geoCode: "E02000280"
  },
  {
    en: "Carterhatch & Forty Hall",
    geoType: "MSOA",
    geoCode: "E02000281"
  },
  {
    en: "Enfield Wash",
    geoType: "MSOA",
    geoCode: "E02000282"
  },
  {
    en: "Brimsdown Avenue",
    geoType: "MSOA",
    geoCode: "E02000283"
  },
  {
    en: "Chase Side",
    geoType: "MSOA",
    geoCode: "E02000284"
  },
  {
    en: "Enfield Town North",
    geoType: "MSOA",
    geoCode: "E02000285"
  },
  {
    en: "Chase Farm & The Ridgeway",
    geoType: "MSOA",
    geoCode: "E02000286"
  },
  {
    en: "Cockfosters & Hadley Wood",
    geoType: "MSOA",
    geoCode: "E02000287"
  },
  {
    en: "Southbury East",
    geoType: "MSOA",
    geoCode: "E02000288"
  },
  {
    en: "World's End",
    geoType: "MSOA",
    geoCode: "E02000289"
  },
  {
    en: "Brimsdown & Ponders End",
    geoType: "MSOA",
    geoCode: "E02000290"
  },
  {
    en: "Enfield Town South & Bush Hill Park",
    geoType: "MSOA",
    geoCode: "E02000291"
  },
  {
    en: "Southbury West",
    geoType: "MSOA",
    geoCode: "E02000292"
  },
  {
    en: "Grange Park",
    geoType: "MSOA",
    geoCode: "E02000293"
  },
  {
    en: "Ponders End South",
    geoType: "MSOA",
    geoCode: "E02000294"
  },
  {
    en: "Oakwood Park & Highlands",
    geoType: "MSOA",
    geoCode: "E02000295"
  },
  {
    en: "Southgate",
    geoType: "MSOA",
    geoCode: "E02000296"
  },
  {
    en: "Bury Street West & Village Road",
    geoType: "MSOA",
    geoCode: "E02000297"
  },
  {
    en: "Winchmore Hill",
    geoType: "MSOA",
    geoCode: "E02000298"
  },
  {
    en: "Lower Edmonton North",
    geoType: "MSOA",
    geoCode: "E02000299"
  },
  {
    en: "Haslebury North",
    geoType: "MSOA",
    geoCode: "E02000300"
  },
  {
    en: "Lower Edmonton South",
    geoType: "MSOA",
    geoCode: "E02000301"
  },
  {
    en: "Palmers Green East",
    geoType: "MSOA",
    geoCode: "E02000302"
  },
  {
    en: "Haslebury South",
    geoType: "MSOA",
    geoCode: "E02000303"
  },
  {
    en: "Southgate Green",
    geoType: "MSOA",
    geoCode: "E02000304"
  },
  {
    en: "Palmers Green West",
    geoType: "MSOA",
    geoCode: "E02000305"
  },
  {
    en: "Edmonton Green",
    geoType: "MSOA",
    geoCode: "E02000306"
  },
  {
    en: "Tatem Park",
    geoType: "MSOA",
    geoCode: "E02000307"
  },
  {
    en: "New Southgate & Arnos Grove",
    geoType: "MSOA",
    geoCode: "E02000308"
  },
  {
    en: "Upper Edmonton East & Meridian Water",
    geoType: "MSOA",
    geoCode: "E02000309"
  },
  {
    en: "Bowes",
    geoType: "MSOA",
    geoCode: "E02000311"
  },
  {
    en: "Broomfield Park",
    geoType: "MSOA",
    geoCode: "E02000312"
  },
  {
    en: "Thamesmead Birchmere Park",
    geoType: "MSOA",
    geoCode: "E02000313"
  },
  {
    en: "West Thamesmead",
    geoType: "MSOA",
    geoCode: "E02000314"
  },
  {
    en: "Abbey Wood North",
    geoType: "MSOA",
    geoCode: "E02000315"
  },
  {
    en: "Woolwich West",
    geoType: "MSOA",
    geoCode: "E02000317"
  },
  {
    en: "Plumstead High Street",
    geoType: "MSOA",
    geoCode: "E02000318"
  },
  {
    en: "Plumstead Common & Riverside",
    geoType: "MSOA",
    geoCode: "E02000319"
  },
  {
    en: "Abbey Wood South",
    geoType: "MSOA",
    geoCode: "E02000320"
  },
  {
    en: "Woolwich Glyndon",
    geoType: "MSOA",
    geoCode: "E02000321"
  },
  {
    en: "Woolwich South",
    geoType: "MSOA",
    geoCode: "E02000323"
  },
  {
    en: "Charlton Village",
    geoType: "MSOA",
    geoCode: "E02000324"
  },
  {
    en: "Charlton Slopes",
    geoType: "MSOA",
    geoCode: "E02000326"
  },
  {
    en: "Woolwich Common",
    geoType: "MSOA",
    geoCode: "E02000327"
  },
  {
    en: "Westcombe Park & Maze Hill",
    geoType: "MSOA",
    geoCode: "E02000328"
  },
  {
    en: "Plumstead South",
    geoType: "MSOA",
    geoCode: "E02000329"
  },
  {
    en: "Hornfair Park",
    geoType: "MSOA",
    geoCode: "E02000331"
  },
  {
    en: "Shooters Hill",
    geoType: "MSOA",
    geoCode: "E02000332"
  },
  {
    en: "Blackheath Standard & Village",
    geoType: "MSOA",
    geoCode: "E02000333"
  },
  {
    en: "Kidbrooke North",
    geoType: "MSOA",
    geoCode: "E02000334"
  },
  {
    en: "Eltham North",
    geoType: "MSOA",
    geoCode: "E02000335"
  },
  {
    en: "Eltham West",
    geoType: "MSOA",
    geoCode: "E02000337"
  },
  {
    en: "Eltham Park",
    geoType: "MSOA",
    geoCode: "E02000339"
  },
  {
    en: "Eltham South",
    geoType: "MSOA",
    geoCode: "E02000340"
  },
  {
    en: "Middlepark & Horn Park",
    geoType: "MSOA",
    geoCode: "E02000341"
  },
  {
    en: "Avery Hill",
    geoType: "MSOA",
    geoCode: "E02000342"
  },
  {
    en: "Mottingham East",
    geoType: "MSOA",
    geoCode: "E02000343"
  },
  {
    en: "New Eltham",
    geoType: "MSOA",
    geoCode: "E02000344"
  },
  {
    en: "Stamford Hill North",
    geoType: "MSOA",
    geoCode: "E02000345"
  },
  {
    en: "Woodberry Down & Manor House",
    geoType: "MSOA",
    geoCode: "E02000346"
  },
  {
    en: "Stamford Hill West",
    geoType: "MSOA",
    geoCode: "E02000347"
  },
  {
    en: "Stamford Hill South",
    geoType: "MSOA",
    geoCode: "E02000348"
  },
  {
    en: "Stoke Newington East & Cazenove",
    geoType: "MSOA",
    geoCode: "E02000350"
  },
  {
    en: "Brownswood",
    geoType: "MSOA",
    geoCode: "E02000351"
  },
  {
    en: "Clissold North",
    geoType: "MSOA",
    geoCode: "E02000352"
  },
  {
    en: "Stoke Newington North",
    geoType: "MSOA",
    geoCode: "E02000353"
  },
  {
    en: "Hackney Downs",
    geoType: "MSOA",
    geoCode: "E02000354"
  },
  {
    en: "Lower Clapton",
    geoType: "MSOA",
    geoCode: "E02000355"
  },
  {
    en: "Clissold South",
    geoType: "MSOA",
    geoCode: "E02000356"
  },
  {
    en: "Hackney Marshes",
    geoType: "MSOA",
    geoCode: "E02000357"
  },
  {
    en: "Stoke Newington South",
    geoType: "MSOA",
    geoCode: "E02000358"
  },
  {
    en: "Homerton North",
    geoType: "MSOA",
    geoCode: "E02000359"
  },
  {
    en: "Amhurst Road & Pembury Estate",
    geoType: "MSOA",
    geoCode: "E02000360"
  },
  {
    en: "Hackney Central",
    geoType: "MSOA",
    geoCode: "E02000361"
  },
  {
    en: "Hackney Wick",
    geoType: "MSOA",
    geoCode: "E02000362"
  },
  {
    en: "Homerton South",
    geoType: "MSOA",
    geoCode: "E02000363"
  },
  {
    en: "Dalston East",
    geoType: "MSOA",
    geoCode: "E02000364"
  },
  {
    en: "South Hackney",
    geoType: "MSOA",
    geoCode: "E02000366"
  },
  {
    en: "London Fields & Mare Street",
    geoType: "MSOA",
    geoCode: "E02000367"
  },
  {
    en: "Haggerston East",
    geoType: "MSOA",
    geoCode: "E02000368"
  },
  {
    en: "Haggerston West & Kingsland Basin",
    geoType: "MSOA",
    geoCode: "E02000369"
  },
  {
    en: "Hoxton North & West",
    geoType: "MSOA",
    geoCode: "E02000370"
  },
  {
    en: "Old Oak & Wormwood",
    geoType: "MSOA",
    geoCode: "E02000372"
  },
  {
    en: "White City",
    geoType: "MSOA",
    geoCode: "E02000373"
  },
  {
    en: "Wormholt Road",
    geoType: "MSOA",
    geoCode: "E02000374"
  },
  {
    en: "Shepherd's Bush North",
    geoType: "MSOA",
    geoCode: "E02000375"
  },
  {
    en: "Shepherd's Bush West",
    geoType: "MSOA",
    geoCode: "E02000376"
  },
  {
    en: "Askew",
    geoType: "MSOA",
    geoCode: "E02000377"
  },
  {
    en: "Shepherd's Bush South",
    geoType: "MSOA",
    geoCode: "E02000378"
  },
  {
    en: "Ravenscourt Park North",
    geoType: "MSOA",
    geoCode: "E02000379"
  },
  {
    en: "Brackenbury",
    geoType: "MSOA",
    geoCode: "E02000380"
  },
  {
    en: "Brook Green",
    geoType: "MSOA",
    geoCode: "E02000381"
  },
  {
    en: "Ravenscourt Park South",
    geoType: "MSOA",
    geoCode: "E02000382"
  },
  {
    en: "West Kensington",
    geoType: "MSOA",
    geoCode: "E02000383"
  },
  {
    en: "Hammersmith Broadway",
    geoType: "MSOA",
    geoCode: "E02000384"
  },
  {
    en: "Barons Court",
    geoType: "MSOA",
    geoCode: "E02000385"
  },
  {
    en: "North End",
    geoType: "MSOA",
    geoCode: "E02000386"
  },
  {
    en: "Lillie Road & Greyhound Road",
    geoType: "MSOA",
    geoCode: "E02000387"
  },
  {
    en: "Fulham Broadway",
    geoType: "MSOA",
    geoCode: "E02000388"
  },
  {
    en: "Fulham Reach",
    geoType: "MSOA",
    geoCode: "E02000389"
  },
  {
    en: "Fulham Aintree",
    geoType: "MSOA",
    geoCode: "E02000390"
  },
  {
    en: "Parsons Green East & Eel Brook Common",
    geoType: "MSOA",
    geoCode: "E02000391"
  },
  {
    en: "Parsons Green West",
    geoType: "MSOA",
    geoCode: "E02000392"
  },
  {
    en: "Munster",
    geoType: "MSOA",
    geoCode: "E02000393"
  },
  {
    en: "Sands End & Chelsea Harbour",
    geoType: "MSOA",
    geoCode: "E02000394"
  },
  {
    en: "Fulham Palace & Hurlingham Park",
    geoType: "MSOA",
    geoCode: "E02000395"
  },
  {
    en: "South Park",
    geoType: "MSOA",
    geoCode: "E02000396"
  },
  {
    en: "Bowes Park",
    geoType: "MSOA",
    geoCode: "E02000397"
  },
  {
    en: "Northumberland Park",
    geoType: "MSOA",
    geoCode: "E02000398"
  },
  {
    en: "Bounds Green",
    geoType: "MSOA",
    geoCode: "E02000400"
  },
  {
    en: "Roundway",
    geoType: "MSOA",
    geoCode: "E02000401"
  },
  {
    en: "Tottenham Bruce Castle Park",
    geoType: "MSOA",
    geoCode: "E02000402"
  },
  {
    en: "Wood Green North",
    geoType: "MSOA",
    geoCode: "E02000403"
  },
  {
    en: "Scotch Estate",
    geoType: "MSOA",
    geoCode: "E02000404"
  },
  {
    en: "Alexandra Park",
    geoType: "MSOA",
    geoCode: "E02000405"
  },
  {
    en: "Noel Park",
    geoType: "MSOA",
    geoCode: "E02000406"
  },
  {
    en: "Bruce Grove North",
    geoType: "MSOA",
    geoCode: "E02000407"
  },
  {
    en: "Tottenham North West",
    geoType: "MSOA",
    geoCode: "E02000408"
  },
  {
    en: "Lordship Lane & Broadwater Farm",
    geoType: "MSOA",
    geoCode: "E02000409"
  },
  {
    en: "Muswell Hill North",
    geoType: "MSOA",
    geoCode: "E02000410"
  },
  {
    en: "Tottenham Lea Valley",
    geoType: "MSOA",
    geoCode: "E02000411"
  },
  {
    en: "Wood Green South",
    geoType: "MSOA",
    geoCode: "E02000412"
  },
  {
    en: "Fortis Green & Coldfall",
    geoType: "MSOA",
    geoCode: "E02000413"
  },
  {
    en: "Bruce Grove South",
    geoType: "MSOA",
    geoCode: "E02000414"
  },
  {
    en: "Downhills Park",
    geoType: "MSOA",
    geoCode: "E02000415"
  },
  {
    en: "Hornsey East",
    geoType: "MSOA",
    geoCode: "E02000416"
  },
  {
    en: "Muswell Hill South",
    geoType: "MSOA",
    geoCode: "E02000417"
  },
  {
    en: "Hornsey West",
    geoType: "MSOA",
    geoCode: "E02000418"
  },
  {
    en: "Harringay Ladder North",
    geoType: "MSOA",
    geoCode: "E02000419"
  },
  {
    en: "Tottenham Green West",
    geoType: "MSOA",
    geoCode: "E02000420"
  },
  {
    en: "Tottenham Green East",
    geoType: "MSOA",
    geoCode: "E02000421"
  },
  {
    en: "West Green & St Ann's",
    geoType: "MSOA",
    geoCode: "E02000422"
  },
  {
    en: "Harringay East",
    geoType: "MSOA",
    geoCode: "E02000423"
  },
  {
    en: "Hornsey Vale",
    geoType: "MSOA",
    geoCode: "E02000424"
  },
  {
    en: "South Tottenham",
    geoType: "MSOA",
    geoCode: "E02000425"
  },
  {
    en: "Highgate Wood",
    geoType: "MSOA",
    geoCode: "E02000426"
  },
  {
    en: "Harringay Ladder South",
    geoType: "MSOA",
    geoCode: "E02000427"
  },
  {
    en: "Harringay Warehouse District & Vartry",
    geoType: "MSOA",
    geoCode: "E02000428"
  },
  {
    en: "Crouch End West",
    geoType: "MSOA",
    geoCode: "E02000429"
  },
  {
    en: "Crouch End East",
    geoType: "MSOA",
    geoCode: "E02000430"
  },
  {
    en: "Highgate East",
    geoType: "MSOA",
    geoCode: "E02000431"
  },
  {
    en: "Stroud Green",
    geoType: "MSOA",
    geoCode: "E02000432"
  },
  {
    en: "Stanmore Park",
    geoType: "MSOA",
    geoCode: "E02000433"
  },
  {
    en: "Canons Park",
    geoType: "MSOA",
    geoCode: "E02000434"
  },
  {
    en: "Stanmore Uxbridge Road",
    geoType: "MSOA",
    geoCode: "E02000435"
  },
  {
    en: "Hatch End North",
    geoType: "MSOA",
    geoCode: "E02000436"
  },
  {
    en: "Harrow Weald",
    geoType: "MSOA",
    geoCode: "E02000437"
  },
  {
    en: "Hatch End South",
    geoType: "MSOA",
    geoCode: "E02000438"
  },
  {
    en: "Edgware West",
    geoType: "MSOA",
    geoCode: "E02000439"
  },
  {
    en: "Belmont",
    geoType: "MSOA",
    geoCode: "E02000440"
  },
  {
    en: "Pinner Green",
    geoType: "MSOA",
    geoCode: "E02000441"
  },
  {
    en: "Queensbury East",
    geoType: "MSOA",
    geoCode: "E02000442"
  },
  {
    en: "Wealdstone North",
    geoType: "MSOA",
    geoCode: "E02000443"
  },
  {
    en: "Queensbury West",
    geoType: "MSOA",
    geoCode: "E02000444"
  },
  {
    en: "Wealdstone South",
    geoType: "MSOA",
    geoCode: "E02000445"
  },
  {
    en: "Headstone Lane",
    geoType: "MSOA",
    geoCode: "E02000447"
  },
  {
    en: "Pinner Central",
    geoType: "MSOA",
    geoCode: "E02000448"
  },
  {
    en: "Kenton East",
    geoType: "MSOA",
    geoCode: "E02000449"
  },
  {
    en: "North Harrow",
    geoType: "MSOA",
    geoCode: "E02000451"
  },
  {
    en: "Greenhill North",
    geoType: "MSOA",
    geoCode: "E02000452"
  },
  {
    en: "Pinner Road",
    geoType: "MSOA",
    geoCode: "E02000453"
  },
  {
    en: "Pinner South",
    geoType: "MSOA",
    geoCode: "E02000454"
  },
  {
    en: "Greenhill South",
    geoType: "MSOA",
    geoCode: "E02000455"
  },
  {
    en: "West Harrow",
    geoType: "MSOA",
    geoCode: "E02000456"
  },
  {
    en: "Rayners Lane North",
    geoType: "MSOA",
    geoCode: "E02000457"
  },
  {
    en: "South Harrow",
    geoType: "MSOA",
    geoCode: "E02000459"
  },
  {
    en: "Newton Farm",
    geoType: "MSOA",
    geoCode: "E02000460"
  },
  {
    en: "Harrow-on-the-Hill",
    geoType: "MSOA",
    geoCode: "E02000461"
  },
  {
    en: "Alexandra Park",
    geoType: "MSOA",
    geoCode: "E02000462"
  },
  {
    en: "Earlsmead",
    geoType: "MSOA",
    geoCode: "E02000463"
  },
  {
    en: "Dagnam Park & Noak Hill",
    geoType: "MSOA",
    geoCode: "E02000464"
  },
  {
    en: "Petersfield Avenue & Duck Wood",
    geoType: "MSOA",
    geoCode: "E02000465"
  },
  {
    en: "Havering-atte-Bower & Chase Cross",
    geoType: "MSOA",
    geoCode: "E02000466"
  },
  {
    en: "Harold Hill East",
    geoType: "MSOA",
    geoCode: "E02000467"
  },
  {
    en: "Collier Row & Park Farm",
    geoType: "MSOA",
    geoCode: "E02000468"
  },
  {
    en: "Harold Hill West",
    geoType: "MSOA",
    geoCode: "E02000469"
  },
  {
    en: "Harold Park & Harold Wood",
    geoType: "MSOA",
    geoCode: "E02000470"
  },
  {
    en: "Rise Park",
    geoType: "MSOA",
    geoCode: "E02000471"
  },
  {
    en: "Romford North",
    geoType: "MSOA",
    geoCode: "E02000472"
  },
  {
    en: "Ardleigh Green",
    geoType: "MSOA",
    geoCode: "E02000473"
  },
  {
    en: "Romford North West",
    geoType: "MSOA",
    geoCode: "E02000474"
  },
  {
    en: "Gidea Park",
    geoType: "MSOA",
    geoCode: "E02000475"
  },
  {
    en: "Central Romford",
    geoType: "MSOA",
    geoCode: "E02000476"
  },
  {
    en: "Romford East",
    geoType: "MSOA",
    geoCode: "E02000477"
  },
  {
    en: "Emerson Park",
    geoType: "MSOA",
    geoCode: "E02000478"
  },
  {
    en: "Romford South",
    geoType: "MSOA",
    geoCode: "E02000479"
  },
  {
    en: "Rush Green",
    geoType: "MSOA",
    geoCode: "E02000480"
  },
  {
    en: "Cranham East",
    geoType: "MSOA",
    geoCode: "E02000481"
  },
  {
    en: "Upminster North & Cranham West",
    geoType: "MSOA",
    geoCode: "E02000482"
  },
  {
    en: "Hornchurch",
    geoType: "MSOA",
    geoCode: "E02000483"
  },
  {
    en: "Hylands",
    geoType: "MSOA",
    geoCode: "E02000484"
  },
  {
    en: "Upminster Bridge",
    geoType: "MSOA",
    geoCode: "E02000485"
  },
  {
    en: "Elm Park East",
    geoType: "MSOA",
    geoCode: "E02000486"
  },
  {
    en: "Upminster South & Corbets Tey",
    geoType: "MSOA",
    geoCode: "E02000487"
  },
  {
    en: "Hacton",
    geoType: "MSOA",
    geoCode: "E02000488"
  },
  {
    en: "Elm Park West",
    geoType: "MSOA",
    geoCode: "E02000489"
  },
  {
    en: "South Hornchurch",
    geoType: "MSOA",
    geoCode: "E02000490"
  },
  {
    en: "Hornchurch Marshes",
    geoType: "MSOA",
    geoCode: "E02000491"
  },
  {
    en: "Rainham East & Wennington",
    geoType: "MSOA",
    geoCode: "E02000492"
  },
  {
    en: "Rainham West",
    geoType: "MSOA",
    geoCode: "E02000493"
  },
  {
    en: "Ducks Hill",
    geoType: "MSOA",
    geoCode: "E02000494"
  },
  {
    en: "Northwood",
    geoType: "MSOA",
    geoCode: "E02000495"
  },
  {
    en: "Harefield",
    geoType: "MSOA",
    geoCode: "E02000496"
  },
  {
    en: "Northwood Hills",
    geoType: "MSOA",
    geoCode: "E02000497"
  },
  {
    en: "West Ruislip North",
    geoType: "MSOA",
    geoCode: "E02000498"
  },
  {
    en: "Eastcote",
    geoType: "MSOA",
    geoCode: "E02000499"
  },
  {
    en: "Ruislip",
    geoType: "MSOA",
    geoCode: "E02000500"
  },
  {
    en: "Ruislip Manor",
    geoType: "MSOA",
    geoCode: "E02000501"
  },
  {
    en: "West Ruislip South",
    geoType: "MSOA",
    geoCode: "E02000502"
  },
  {
    en: "Ruislip Gardens",
    geoType: "MSOA",
    geoCode: "E02000503"
  },
  {
    en: "Ickenham",
    geoType: "MSOA",
    geoCode: "E02000504"
  },
  {
    en: "Uxbridge Common & Swakeleys",
    geoType: "MSOA",
    geoCode: "E02000506"
  },
  {
    en: "Hillingdon North East",
    geoType: "MSOA",
    geoCode: "E02000507"
  },
  {
    en: "Uxbridge Central & Brunel",
    geoType: "MSOA",
    geoCode: "E02000508"
  },
  {
    en: "Uxbridge West",
    geoType: "MSOA",
    geoCode: "E02000509"
  },
  {
    en: "Hillingdon South",
    geoType: "MSOA",
    geoCode: "E02000510"
  },
  {
    en: "Charville",
    geoType: "MSOA",
    geoCode: "E02000511"
  },
  {
    en: "Hillingdon Heath",
    geoType: "MSOA",
    geoCode: "E02000512"
  },
  {
    en: "Yeading North",
    geoType: "MSOA",
    geoCode: "E02000513"
  },
  {
    en: "Yeading West",
    geoType: "MSOA",
    geoCode: "E02000514"
  },
  {
    en: "Yiewsley West",
    geoType: "MSOA",
    geoCode: "E02000515"
  },
  {
    en: "Yeading Brookside",
    geoType: "MSOA",
    geoCode: "E02000516"
  },
  {
    en: "Hayes End",
    geoType: "MSOA",
    geoCode: "E02000517"
  },
  {
    en: "Yiewsley East",
    geoType: "MSOA",
    geoCode: "E02000518"
  },
  {
    en: "Hayes Town North",
    geoType: "MSOA",
    geoCode: "E02000519"
  },
  {
    en: "Hayes Town & Lake Farm",
    geoType: "MSOA",
    geoCode: "E02000520"
  },
  {
    en: "West Drayton East",
    geoType: "MSOA",
    geoCode: "E02000521"
  },
  {
    en: "West Drayton West",
    geoType: "MSOA",
    geoCode: "E02000522"
  },
  {
    en: "Hayes South",
    geoType: "MSOA",
    geoCode: "E02000523"
  },
  {
    en: "Heathrow, Hardmonsworth & Sipson",
    geoType: "MSOA",
    geoCode: "E02000524"
  },
  {
    en: "Harlington & Cranford Cross",
    geoType: "MSOA",
    geoCode: "E02000525"
  },
  {
    en: "Chiswick North East",
    geoType: "MSOA",
    geoCode: "E02000526"
  },
  {
    en: "Heston North",
    geoType: "MSOA",
    geoCode: "E02000529"
  },
  {
    en: "North Hyde & North Cranford",
    geoType: "MSOA",
    geoCode: "E02000530"
  },
  {
    en: "Brentford Central",
    geoType: "MSOA",
    geoCode: "E02000531"
  },
  {
    en: "Chiswick South East",
    geoType: "MSOA",
    geoCode: "E02000532"
  },
  {
    en: "Chiswick South West",
    geoType: "MSOA",
    geoCode: "E02000533"
  },
  {
    en: "Brentford West & Osterley Park",
    geoType: "MSOA",
    geoCode: "E02000534"
  },
  {
    en: "Heston West",
    geoType: "MSOA",
    geoCode: "E02000535"
  },
  {
    en: "Heston Central & Lampton West",
    geoType: "MSOA",
    geoCode: "E02000536"
  },
  {
    en: "Osterley & Lampton East",
    geoType: "MSOA",
    geoCode: "E02000537"
  },
  {
    en: "Cranford",
    geoType: "MSOA",
    geoCode: "E02000538"
  },
  {
    en: "Syon Green",
    geoType: "MSOA",
    geoCode: "E02000539"
  },
  {
    en: "Spring Grove",
    geoType: "MSOA",
    geoCode: "E02000540"
  },
  {
    en: "Hounslow Meadows",
    geoType: "MSOA",
    geoCode: "E02000541"
  },
  {
    en: "Hounslow West",
    geoType: "MSOA",
    geoCode: "E02000542"
  },
  {
    en: "Hounslow High Street",
    geoType: "MSOA",
    geoCode: "E02000543"
  },
  {
    en: "Hounslow East",
    geoType: "MSOA",
    geoCode: "E02000544"
  },
  {
    en: "Isleworth & Ivybridge",
    geoType: "MSOA",
    geoCode: "E02000545"
  },
  {
    en: "Hounslow Heath",
    geoType: "MSOA",
    geoCode: "E02000546"
  },
  {
    en: "North Feltham & Hatton",
    geoType: "MSOA",
    geoCode: "E02000547"
  },
  {
    en: "Bedfont",
    geoType: "MSOA",
    geoCode: "E02000548"
  },
  {
    en: "Feltham East",
    geoType: "MSOA",
    geoCode: "E02000549"
  },
  {
    en: "Feltham Central",
    geoType: "MSOA",
    geoCode: "E02000550"
  },
  {
    en: "Hanworth North",
    geoType: "MSOA",
    geoCode: "E02000551"
  },
  {
    en: "Lower Feltham",
    geoType: "MSOA",
    geoCode: "E02000552"
  },
  {
    en: "Hanworth South",
    geoType: "MSOA",
    geoCode: "E02000553"
  },
  {
    en: "Highcroft & Holly Park",
    geoType: "MSOA",
    geoCode: "E02000554"
  },
  {
    en: "Archway East",
    geoType: "MSOA",
    geoCode: "E02000555"
  },
  {
    en: "Tollington",
    geoType: "MSOA",
    geoCode: "E02000556"
  },
  {
    en: "Archway West",
    geoType: "MSOA",
    geoCode: "E02000557"
  },
  {
    en: "Finsbury Park West",
    geoType: "MSOA",
    geoCode: "E02000558"
  },
  {
    en: "Gillespie Road",
    geoType: "MSOA",
    geoCode: "E02000559"
  },
  {
    en: "Holloway Nag's Head",
    geoType: "MSOA",
    geoCode: "E02000560"
  },
  {
    en: "Tufnell Park East",
    geoType: "MSOA",
    geoCode: "E02000561"
  },
  {
    en: "Highbury",
    geoType: "MSOA",
    geoCode: "E02000562"
  },
  {
    en: "Hilldrop",
    geoType: "MSOA",
    geoCode: "E02000563"
  },
  {
    en: "Lower Holloway",
    geoType: "MSOA",
    geoCode: "E02000564"
  },
  {
    en: "Newington Green",
    geoType: "MSOA",
    geoCode: "E02000565"
  },
  {
    en: "Highbury Fields",
    geoType: "MSOA",
    geoCode: "E02000566"
  },
  {
    en: "Canonbury East & Mildmay Park",
    geoType: "MSOA",
    geoCode: "E02000567"
  },
  {
    en: "Caledonian Road",
    geoType: "MSOA",
    geoCode: "E02000568"
  },
  {
    en: "Islington North & Canonbury West",
    geoType: "MSOA",
    geoCode: "E02000569"
  },
  {
    en: "Barnsbury East",
    geoType: "MSOA",
    geoCode: "E02000570"
  },
  {
    en: "Islington East & Arlington",
    geoType: "MSOA",
    geoCode: "E02000571"
  },
  {
    en: "Barnsbury West",
    geoType: "MSOA",
    geoCode: "E02000572"
  },
  {
    en: "Angel",
    geoType: "MSOA",
    geoCode: "E02000573"
  },
  {
    en: "Pentonville",
    geoType: "MSOA",
    geoCode: "E02000574"
  },
  {
    en: "Clerkenwell",
    geoType: "MSOA",
    geoCode: "E02000575"
  },
  {
    en: "Old Street & St Luke's",
    geoType: "MSOA",
    geoCode: "E02000576"
  },
  {
    en: "Golborne & Swinbrook",
    geoType: "MSOA",
    geoCode: "E02000577"
  },
  {
    en: "Ladbroke Grove",
    geoType: "MSOA",
    geoCode: "E02000578"
  },
  {
    en: "North Kensington",
    geoType: "MSOA",
    geoCode: "E02000579"
  },
  {
    en: "Portobello",
    geoType: "MSOA",
    geoCode: "E02000580"
  },
  {
    en: "Notting Dale",
    geoType: "MSOA",
    geoCode: "E02000581"
  },
  {
    en: "Notting Hill Gate",
    geoType: "MSOA",
    geoCode: "E02000582"
  },
  {
    en: "Notting Hill West",
    geoType: "MSOA",
    geoCode: "E02000583"
  },
  {
    en: "Notting Hill South",
    geoType: "MSOA",
    geoCode: "E02000584"
  },
  {
    en: "Holland Park",
    geoType: "MSOA",
    geoCode: "E02000585"
  },
  {
    en: "Queen's Gate",
    geoType: "MSOA",
    geoCode: "E02000586"
  },
  {
    en: "Kensington Abingdon",
    geoType: "MSOA",
    geoCode: "E02000587"
  },
  {
    en: "Hans Town",
    geoType: "MSOA",
    geoCode: "E02000588"
  },
  {
    en: "Kensington Gardens",
    geoType: "MSOA",
    geoCode: "E02000589"
  },
  {
    en: "Brompton",
    geoType: "MSOA",
    geoCode: "E02000590"
  },
  {
    en: "Earl's Court",
    geoType: "MSOA",
    geoCode: "E02000591"
  },
  {
    en: "South Kensington",
    geoType: "MSOA",
    geoCode: "E02000592"
  },
  {
    en: "West Brompton",
    geoType: "MSOA",
    geoCode: "E02000593"
  },
  {
    en: "Chelsea Manor & Royal Hospital",
    geoType: "MSOA",
    geoCode: "E02000594"
  },
  {
    en: "Chelsea Riverside East",
    geoType: "MSOA",
    geoCode: "E02000595"
  },
  {
    en: "Fulham Road",
    geoType: "MSOA",
    geoCode: "E02000596"
  },
  {
    en: "Chelsea Riverside West",
    geoType: "MSOA",
    geoCode: "E02000597"
  },
  {
    en: "Tudor Drive",
    geoType: "MSOA",
    geoCode: "E02000598"
  },
  {
    en: "Kingston Vale & Coombe Hill",
    geoType: "MSOA",
    geoCode: "E02000599"
  },
  {
    en: "Kingston Hill",
    geoType: "MSOA",
    geoCode: "E02000600"
  },
  {
    en: "Kingston North",
    geoType: "MSOA",
    geoCode: "E02000601"
  },
  {
    en: "Kingston East & Norbiton West",
    geoType: "MSOA",
    geoCode: "E02000602"
  },
  {
    en: "Norbiton East",
    geoType: "MSOA",
    geoCode: "E02000603"
  },
  {
    en: "New Malden East",
    geoType: "MSOA",
    geoCode: "E02000604"
  },
  {
    en: "New Malden West",
    geoType: "MSOA",
    geoCode: "E02000605"
  },
  {
    en: "Kingston Riverside",
    geoType: "MSOA",
    geoCode: "E02000606"
  },
  {
    en: "Berrylands North",
    geoType: "MSOA",
    geoCode: "E02000607"
  },
  {
    en: "Surbiton North",
    geoType: "MSOA",
    geoCode: "E02000608"
  },
  {
    en: "Malden Manor",
    geoType: "MSOA",
    geoCode: "E02000609"
  },
  {
    en: "Surbiton South",
    geoType: "MSOA",
    geoCode: "E02000610"
  },
  {
    en: "Berrylands South",
    geoType: "MSOA",
    geoCode: "E02000611"
  },
  {
    en: "Motspur Park",
    geoType: "MSOA",
    geoCode: "E02000612"
  },
  {
    en: "Southborough",
    geoType: "MSOA",
    geoCode: "E02000613"
  },
  {
    en: "Tolworth",
    geoType: "MSOA",
    geoCode: "E02000614"
  },
  {
    en: "Hook",
    geoType: "MSOA",
    geoCode: "E02000615"
  },
  {
    en: "Chessington North",
    geoType: "MSOA",
    geoCode: "E02000616"
  },
  {
    en: "Chessington South & Malden Rushett",
    geoType: "MSOA",
    geoCode: "E02000617"
  },
  {
    en: "Lambeth Walk & North Kennington",
    geoType: "MSOA",
    geoCode: "E02000619"
  },
  {
    en: "Kennington West & Vauxhall North",
    geoType: "MSOA",
    geoCode: "E02000620"
  },
  {
    en: "Vauxhall South",
    geoType: "MSOA",
    geoCode: "E02000621"
  },
  {
    en: "Oval",
    geoType: "MSOA",
    geoCode: "E02000622"
  },
  {
    en: "Stockwell North",
    geoType: "MSOA",
    geoCode: "E02000623"
  },
  {
    en: "Stockwell East",
    geoType: "MSOA",
    geoCode: "E02000624"
  },
  {
    en: "Stockwell West",
    geoType: "MSOA",
    geoCode: "E02000625"
  },
  {
    en: "Loughborough Road",
    geoType: "MSOA",
    geoCode: "E02000626"
  },
  {
    en: "Stockwell South",
    geoType: "MSOA",
    geoCode: "E02000627"
  },
  {
    en: "Brixton North",
    geoType: "MSOA",
    geoCode: "E02000628"
  },
  {
    en: "Clapham North",
    geoType: "MSOA",
    geoCode: "E02000629"
  },
  {
    en: "Clapham Old Town",
    geoType: "MSOA",
    geoCode: "E02000630"
  },
  {
    en: "Herne Hill East",
    geoType: "MSOA",
    geoCode: "E02000631"
  },
  {
    en: "Acre Lane",
    geoType: "MSOA",
    geoCode: "E02000632"
  },
  {
    en: "Brixton Central",
    geoType: "MSOA",
    geoCode: "E02000633"
  },
  {
    en: "Clapham Common North",
    geoType: "MSOA",
    geoCode: "E02000634"
  },
  {
    en: "Poets' Corner & Brockwell Park",
    geoType: "MSOA",
    geoCode: "E02000635"
  },
  {
    en: "Clapham South",
    geoType: "MSOA",
    geoCode: "E02000636"
  },
  {
    en: "Brixton Hill East",
    geoType: "MSOA",
    geoCode: "E02000637"
  },
  {
    en: "Brixton Hill West",
    geoType: "MSOA",
    geoCode: "E02000638"
  },
  {
    en: "Clapham Park East & Streatham Hill North",
    geoType: "MSOA",
    geoCode: "E02000639"
  },
  {
    en: "Clapham Park West",
    geoType: "MSOA",
    geoCode: "E02000640"
  },
  {
    en: "Tulse Hill",
    geoType: "MSOA",
    geoCode: "E02000641"
  },
  {
    en: "West Dulwich",
    geoType: "MSOA",
    geoCode: "E02000642"
  },
  {
    en: "Streatham Hill",
    geoType: "MSOA",
    geoCode: "E02000643"
  },
  {
    en: "Leigham Vale & Royal Circus",
    geoType: "MSOA",
    geoCode: "E02000644"
  },
  {
    en: "West Norwood East",
    geoType: "MSOA",
    geoCode: "E02000645"
  },
  {
    en: "Streatham Central",
    geoType: "MSOA",
    geoCode: "E02000646"
  },
  {
    en: "West Norwood West & Streatham East",
    geoType: "MSOA",
    geoCode: "E02000647"
  },
  {
    en: "West Norwood South",
    geoType: "MSOA",
    geoCode: "E02000648"
  },
  {
    en: "Streatham Green",
    geoType: "MSOA",
    geoCode: "E02000649"
  },
  {
    en: "Gipsy Hill",
    geoType: "MSOA",
    geoCode: "E02000650"
  },
  {
    en: "Streatham Common",
    geoType: "MSOA",
    geoCode: "E02000651"
  },
  {
    en: "Streatham Vale",
    geoType: "MSOA",
    geoCode: "E02000652"
  },
  {
    en: "Silwood & Pepys",
    geoType: "MSOA",
    geoCode: "E02000653"
  },
  {
    en: "Deptford North",
    geoType: "MSOA",
    geoCode: "E02000654"
  },
  {
    en: "New Cross Gate",
    geoType: "MSOA",
    geoCode: "E02000655"
  },
  {
    en: "New Cross South",
    geoType: "MSOA",
    geoCode: "E02000657"
  },
  {
    en: "Telegraph Hill",
    geoType: "MSOA",
    geoCode: "E02000658"
  },
  {
    en: "Blackheath West",
    geoType: "MSOA",
    geoCode: "E02000659"
  },
  {
    en: "Brockley East & St Johns",
    geoType: "MSOA",
    geoCode: "E02000660"
  },
  {
    en: "Blackheath Village",
    geoType: "MSOA",
    geoCode: "E02000661"
  },
  {
    en: "Brockley West",
    geoType: "MSOA",
    geoCode: "E02000662"
  },
  {
    en: "Loampit & Hilly Fields",
    geoType: "MSOA",
    geoCode: "E02000663"
  },
  {
    en: "Manor House",
    geoType: "MSOA",
    geoCode: "E02000665"
  },
  {
    en: "Ladywell",
    geoType: "MSOA",
    geoCode: "E02000666"
  },
  {
    en: "Crofton Park",
    geoType: "MSOA",
    geoCode: "E02000667"
  },
  {
    en: "Lee",
    geoType: "MSOA",
    geoCode: "E02000668"
  },
  {
    en: "Hither Green",
    geoType: "MSOA",
    geoCode: "E02000669"
  },
  {
    en: "Catford East & Mountsfield Park",
    geoType: "MSOA",
    geoCode: "E02000670"
  },
  {
    en: "Honor Oak",
    geoType: "MSOA",
    geoCode: "E02000671"
  },
  {
    en: "Catford Bridge",
    geoType: "MSOA",
    geoCode: "E02000672"
  },
  {
    en: "Forest Hill West",
    geoType: "MSOA",
    geoCode: "E02000673"
  },
  {
    en: "Corbett Estate",
    geoType: "MSOA",
    geoCode: "E02000674"
  },
  {
    en: "Grove Park & Lee South",
    geoType: "MSOA",
    geoCode: "E02000675"
  },
  {
    en: "Forest Hill East",
    geoType: "MSOA",
    geoCode: "E02000676"
  },
  {
    en: "Culverley Green",
    geoType: "MSOA",
    geoCode: "E02000677"
  },
  {
    en: "Further Green",
    geoType: "MSOA",
    geoCode: "E02000678"
  },
  {
    en: "Perry Vale",
    geoType: "MSOA",
    geoCode: "E02000679"
  },
  {
    en: "Upper Sydenham",
    geoType: "MSOA",
    geoCode: "E02000680"
  },
  {
    en: "Bellingham & Perry Hill",
    geoType: "MSOA",
    geoCode: "E02000681"
  },
  {
    en: "Forster Park & Southend",
    geoType: "MSOA",
    geoCode: "E02000682"
  },
  {
    en: "Chinbrook",
    geoType: "MSOA",
    geoCode: "E02000683"
  },
  {
    en: "Sydenham Wells",
    geoType: "MSOA",
    geoCode: "E02000685"
  },
  {
    en: "Beckenham Hill",
    geoType: "MSOA",
    geoCode: "E02000686"
  },
  {
    en: "Lower Sydenham",
    geoType: "MSOA",
    geoCode: "E02000687"
  },
  {
    en: "Wimbledon Park & Durnsford Road",
    geoType: "MSOA",
    geoCode: "E02000689"
  },
  {
    en: "Wimbledon Common",
    geoType: "MSOA",
    geoCode: "E02000690"
  },
  {
    en: "Wimbledon Broadway North",
    geoType: "MSOA",
    geoCode: "E02000691"
  },
  {
    en: "Wimbledon Hill",
    geoType: "MSOA",
    geoCode: "E02000692"
  },
  {
    en: "Colliers Wood",
    geoType: "MSOA",
    geoCode: "E02000693"
  },
  {
    en: "South Wimbledon",
    geoType: "MSOA",
    geoCode: "E02000694"
  },
  {
    en: "Graveney",
    geoType: "MSOA",
    geoCode: "E02000695"
  },
  {
    en: "Lavender Park",
    geoType: "MSOA",
    geoCode: "E02000696"
  },
  {
    en: "Wimbledon Broadway South",
    geoType: "MSOA",
    geoCode: "E02000697"
  },
  {
    en: "Cottenham Park",
    geoType: "MSOA",
    geoCode: "E02000698"
  },
  {
    en: "Wimbledon Chase",
    geoType: "MSOA",
    geoCode: "E02000699"
  },
  {
    en: "Merton Church Road & Phipps Bridge",
    geoType: "MSOA",
    geoCode: "E02000700"
  },
  {
    en: "Mitcham East",
    geoType: "MSOA",
    geoCode: "E02000701"
  },
  {
    en: "Lonesome",
    geoType: "MSOA",
    geoCode: "E02000702"
  },
  {
    en: "Merton Park",
    geoType: "MSOA",
    geoCode: "E02000703"
  },
  {
    en: "Raynes Park",
    geoType: "MSOA",
    geoCode: "E02000704"
  },
  {
    en: "Rowan Road",
    geoType: "MSOA",
    geoCode: "E02000705"
  },
  {
    en: "Mitcham West",
    geoType: "MSOA",
    geoCode: "E02000706"
  },
  {
    en: "Pollards Hill",
    geoType: "MSOA",
    geoCode: "E02000707"
  },
  {
    en: "West Barnes",
    geoType: "MSOA",
    geoCode: "E02000708"
  },
  {
    en: "Cannon Hill",
    geoType: "MSOA",
    geoCode: "E02000709"
  },
  {
    en: "Mitcham South",
    geoType: "MSOA",
    geoCode: "E02000710"
  },
  {
    en: "Morden Central",
    geoType: "MSOA",
    geoCode: "E02000711"
  },
  {
    en: "St Helier North",
    geoType: "MSOA",
    geoCode: "E02000712"
  },
  {
    en: "Lower Morden",
    geoType: "MSOA",
    geoCode: "E02000713"
  },
  {
    en: "Forest Gate North",
    geoType: "MSOA",
    geoCode: "E02000714"
  },
  {
    en: "Little Ilford West",
    geoType: "MSOA",
    geoCode: "E02000715"
  },
  {
    en: "Manor Park North",
    geoType: "MSOA",
    geoCode: "E02000716"
  },
  {
    en: "Manor Park South",
    geoType: "MSOA",
    geoCode: "E02000717"
  },
  {
    en: "Little Ilford East",
    geoType: "MSOA",
    geoCode: "E02000718"
  },
  {
    en: "Forest Gate West",
    geoType: "MSOA",
    geoCode: "E02000719"
  },
  {
    en: "Forest Gate East",
    geoType: "MSOA",
    geoCode: "E02000720"
  },
  {
    en: "Forest Gate South",
    geoType: "MSOA",
    geoCode: "E02000721"
  },
  {
    en: "Stratford East",
    geoType: "MSOA",
    geoCode: "E02000722"
  },
  {
    en: "East Ham North",
    geoType: "MSOA",
    geoCode: "E02000723"
  },
  {
    en: "Plashet East",
    geoType: "MSOA",
    geoCode: "E02000724"
  },
  {
    en: "Stratford Central",
    geoType: "MSOA",
    geoCode: "E02000725"
  },
  {
    en: "Plashet West",
    geoType: "MSOA",
    geoCode: "E02000727"
  },
  {
    en: "Wallend North",
    geoType: "MSOA",
    geoCode: "E02000728"
  },
  {
    en: "West Ham Park",
    geoType: "MSOA",
    geoCode: "E02000729"
  },
  {
    en: "Upton Park",
    geoType: "MSOA",
    geoCode: "E02000730"
  },
  {
    en: "East Ham Central",
    geoType: "MSOA",
    geoCode: "E02000731"
  },
  {
    en: "East Ham West",
    geoType: "MSOA",
    geoCode: "E02000732"
  },
  {
    en: "West Ham & Stratford Park",
    geoType: "MSOA",
    geoCode: "E02000733"
  },
  {
    en: "Plaistow North",
    geoType: "MSOA",
    geoCode: "E02000734"
  },
  {
    en: "Plaistow North East",
    geoType: "MSOA",
    geoCode: "E02000735"
  },
  {
    en: "Wallend South",
    geoType: "MSOA",
    geoCode: "E02000736"
  },
  {
    en: "East Ham South",
    geoType: "MSOA",
    geoCode: "E02000737"
  },
  {
    en: "East Ham South West",
    geoType: "MSOA",
    geoCode: "E02000738"
  },
  {
    en: "Plaistow Park",
    geoType: "MSOA",
    geoCode: "E02000739"
  },
  {
    en: "Canning Town North",
    geoType: "MSOA",
    geoCode: "E02000740"
  },
  {
    en: "Plaistow South",
    geoType: "MSOA",
    geoCode: "E02000741"
  },
  {
    en: "Lonsdale Avenue",
    geoType: "MSOA",
    geoCode: "E02000742"
  },
  {
    en: "Canning Town Central",
    geoType: "MSOA",
    geoCode: "E02000743"
  },
  {
    en: "Canning Town East",
    geoType: "MSOA",
    geoCode: "E02000744"
  },
  {
    en: "Beckton North",
    geoType: "MSOA",
    geoCode: "E02000745"
  },
  {
    en: "Beckton",
    geoType: "MSOA",
    geoCode: "E02000746"
  },
  {
    en: "Canning Town South & Bow Creek",
    geoType: "MSOA",
    geoCode: "E02000747"
  },
  {
    en: "Beckton Park",
    geoType: "MSOA",
    geoCode: "E02000748"
  },
  {
    en: "Custom House",
    geoType: "MSOA",
    geoCode: "E02000749"
  },
  {
    en: "Woodford Wells",
    geoType: "MSOA",
    geoCode: "E02000751"
  },
  {
    en: "Hainault East",
    geoType: "MSOA",
    geoCode: "E02000752"
  },
  {
    en: "Hainault West",
    geoType: "MSOA",
    geoCode: "E02000753"
  },
  {
    en: "Woodford Green",
    geoType: "MSOA",
    geoCode: "E02000754"
  },
  {
    en: "Woodford Bridge",
    geoType: "MSOA",
    geoCode: "E02000755"
  },
  {
    en: "Fairlop",
    geoType: "MSOA",
    geoCode: "E02000756"
  },
  {
    en: "South Woodford High Road",
    geoType: "MSOA",
    geoCode: "E02000757"
  },
  {
    en: "Clayhall North",
    geoType: "MSOA",
    geoCode: "E02000758"
  },
  {
    en: "Roding",
    geoType: "MSOA",
    geoCode: "E02000759"
  },
  {
    en: "Barkingside North",
    geoType: "MSOA",
    geoCode: "E02000760"
  },
  {
    en: "Barkingside West",
    geoType: "MSOA",
    geoCode: "E02000762"
  },
  {
    en: "Aldborough Hatch",
    geoType: "MSOA",
    geoCode: "E02000763"
  },
  {
    en: "Snaresbrook",
    geoType: "MSOA",
    geoCode: "E02000764"
  },
  {
    en: "Barkingside East",
    geoType: "MSOA",
    geoCode: "E02000765"
  },
  {
    en: "Newbury Park",
    geoType: "MSOA",
    geoCode: "E02000767"
  },
  {
    en: "Wanstead",
    geoType: "MSOA",
    geoCode: "E02000768"
  },
  {
    en: "Seven Kings Park",
    geoType: "MSOA",
    geoCode: "E02000770"
  },
  {
    en: "Goodmayes North",
    geoType: "MSOA",
    geoCode: "E02000772"
  },
  {
    en: "Ley Street",
    geoType: "MSOA",
    geoCode: "E02000773"
  },
  {
    en: "Seven Kings Meads Lane",
    geoType: "MSOA",
    geoCode: "E02000774"
  },
  {
    en: "Ilford North East",
    geoType: "MSOA",
    geoCode: "E02000776"
  },
  {
    en: "Wanstead Flats",
    geoType: "MSOA",
    geoCode: "E02000777"
  },
  {
    en: "Ilford North West",
    geoType: "MSOA",
    geoCode: "E02000779"
  },
  {
    en: "South Park",
    geoType: "MSOA",
    geoCode: "E02000781"
  },
  {
    en: "Ilford South West",
    geoType: "MSOA",
    geoCode: "E02000782"
  },
  {
    en: "Loxford Park",
    geoType: "MSOA",
    geoCode: "E02000783"
  },
  {
    en: "North Barnes",
    geoType: "MSOA",
    geoCode: "E02000784"
  },
  {
    en: "Kew Gardens",
    geoType: "MSOA",
    geoCode: "E02000785"
  },
  {
    en: "Mortlake & South Barnes",
    geoType: "MSOA",
    geoCode: "E02000786"
  },
  {
    en: "North Sheen",
    geoType: "MSOA",
    geoCode: "E02000787"
  },
  {
    en: "East Sheen North",
    geoType: "MSOA",
    geoCode: "E02000788"
  },
  {
    en: "Queen's Road",
    geoType: "MSOA",
    geoCode: "E02000789"
  },
  {
    en: "St Margarets",
    geoType: "MSOA",
    geoCode: "E02000790"
  },
  {
    en: "Richmond Central",
    geoType: "MSOA",
    geoCode: "E02000791"
  },
  {
    en: "Twickenham Marble Hill",
    geoType: "MSOA",
    geoCode: "E02000792"
  },
  {
    en: "Whitton",
    geoType: "MSOA",
    geoCode: "E02000793"
  },
  {
    en: "Twickenham North",
    geoType: "MSOA",
    geoCode: "E02000794"
  },
  {
    en: "Richmond Park, Sheen Gate & Petersham",
    geoType: "MSOA",
    geoCode: "E02000795"
  },
  {
    en: "Heathfield",
    geoType: "MSOA",
    geoCode: "E02000796"
  },
  {
    en: "Twickenham Town",
    geoType: "MSOA",
    geoCode: "E02000797"
  },
  {
    en: "Twickenham West",
    geoType: "MSOA",
    geoCode: "E02000798"
  },
  {
    en: "Strawberry Hill",
    geoType: "MSOA",
    geoCode: "E02000799"
  },
  {
    en: "Ham",
    geoType: "MSOA",
    geoCode: "E02000800"
  },
  {
    en: "Teddington North",
    geoType: "MSOA",
    geoCode: "E02000801"
  },
  {
    en: "Hampton Hill",
    geoType: "MSOA",
    geoCode: "E02000802"
  },
  {
    en: "Nursery Lands & Hampton North",
    geoType: "MSOA",
    geoCode: "E02000803"
  },
  {
    en: "Teddington Central",
    geoType: "MSOA",
    geoCode: "E02000804"
  },
  {
    en: "Hampton Wick & Teddington East",
    geoType: "MSOA",
    geoCode: "E02000805"
  },
  {
    en: "Hampton Village",
    geoType: "MSOA",
    geoCode: "E02000806"
  },
  {
    en: "Rotherhithe",
    geoType: "MSOA",
    geoCode: "E02000807"
  },
  {
    en: "Borough & Southwark Street",
    geoType: "MSOA",
    geoCode: "E02000808"
  },
  {
    en: "Bermondsey East",
    geoType: "MSOA",
    geoCode: "E02000810"
  },
  {
    en: "London Bridge & Bermondsey West",
    geoType: "MSOA",
    geoCode: "E02000812"
  },
  {
    en: "Canada Water",
    geoType: "MSOA",
    geoCode: "E02000813"
  },
  {
    en: "Surrey Quays",
    geoType: "MSOA",
    geoCode: "E02000814"
  },
  {
    en: "Elephant & Castle",
    geoType: "MSOA",
    geoCode: "E02000815"
  },
  {
    en: "South Bermondsey Central",
    geoType: "MSOA",
    geoCode: "E02000816"
  },
  {
    en: "South Bermondsey East",
    geoType: "MSOA",
    geoCode: "E02000817"
  },
  {
    en: "Walworth North",
    geoType: "MSOA",
    geoCode: "E02000818"
  },
  {
    en: "South Bermondsey West",
    geoType: "MSOA",
    geoCode: "E02000819"
  },
  {
    en: "Newington, Kennington East & Walworth West",
    geoType: "MSOA",
    geoCode: "E02000820"
  },
  {
    en: "Burgess Park",
    geoType: "MSOA",
    geoCode: "E02000821"
  },
  {
    en: "Walworth South",
    geoType: "MSOA",
    geoCode: "E02000822"
  },
  {
    en: "Burgess Park West & John Ruskin Street",
    geoType: "MSOA",
    geoCode: "E02000823"
  },
  {
    en: "Peckham Park Road",
    geoType: "MSOA",
    geoCode: "E02000824"
  },
  {
    en: "Peckham North West",
    geoType: "MSOA",
    geoCode: "E02000825"
  },
  {
    en: "Camberwell North",
    geoType: "MSOA",
    geoCode: "E02000826"
  },
  {
    en: "Camberwell Green",
    geoType: "MSOA",
    geoCode: "E02000827"
  },
  {
    en: "Peckham North",
    geoType: "MSOA",
    geoCode: "E02000828"
  },
  {
    en: "Queens Road Peckham",
    geoType: "MSOA",
    geoCode: "E02000829"
  },
  {
    en: "Camberwell South",
    geoType: "MSOA",
    geoCode: "E02000830"
  },
  {
    en: "Peckham Rye",
    geoType: "MSOA",
    geoCode: "E02000831"
  },
  {
    en: "Nunhead North",
    geoType: "MSOA",
    geoCode: "E02000832"
  },
  {
    en: "North Dulwich",
    geoType: "MSOA",
    geoCode: "E02000833"
  },
  {
    en: "Peckham Rye Common",
    geoType: "MSOA",
    geoCode: "E02000834"
  },
  {
    en: "Nunhead South & Newlands",
    geoType: "MSOA",
    geoCode: "E02000835"
  },
  {
    en: "East Dulwich",
    geoType: "MSOA",
    geoCode: "E02000836"
  },
  {
    en: "Herne Hill & Dulwich Park",
    geoType: "MSOA",
    geoCode: "E02000837"
  },
  {
    en: "Dulwich Hill",
    geoType: "MSOA",
    geoCode: "E02000838"
  },
  {
    en: "Sydenham Hill",
    geoType: "MSOA",
    geoCode: "E02000839"
  },
  {
    en: "Middleton Circle",
    geoType: "MSOA",
    geoCode: "E02000840"
  },
  {
    en: "St Helier South",
    geoType: "MSOA",
    geoCode: "E02000841"
  },
  {
    en: "Stonecot",
    geoType: "MSOA",
    geoCode: "E02000842"
  },
  {
    en: "Hackbridge",
    geoType: "MSOA",
    geoCode: "E02000843"
  },
  {
    en: "The Wrythe",
    geoType: "MSOA",
    geoCode: "E02000844"
  },
  {
    en: "Worcester Park East",
    geoType: "MSOA",
    geoCode: "E02000845"
  },
  {
    en: "Sutton North",
    geoType: "MSOA",
    geoCode: "E02000846"
  },
  {
    en: "North Cheam West",
    geoType: "MSOA",
    geoCode: "E02000847"
  },
  {
    en: "North Cheam East",
    geoType: "MSOA",
    geoCode: "E02000848"
  },
  {
    en: "Wallington North",
    geoType: "MSOA",
    geoCode: "E02000849"
  },
  {
    en: "Beddington",
    geoType: "MSOA",
    geoCode: "E02000850"
  },
  {
    en: "Sutton Central",
    geoType: "MSOA",
    geoCode: "E02000851"
  },
  {
    en: "Sutton East",
    geoType: "MSOA",
    geoCode: "E02000852"
  },
  {
    en: "Sutton West",
    geoType: "MSOA",
    geoCode: "E02000853"
  },
  {
    en: "Carshalton Village",
    geoType: "MSOA",
    geoCode: "E02000854"
  },
  {
    en: "Cheam High Street",
    geoType: "MSOA",
    geoCode: "E02000855"
  },
  {
    en: "Wallington South",
    geoType: "MSOA",
    geoCode: "E02000856"
  },
  {
    en: "Sutton South West",
    geoType: "MSOA",
    geoCode: "E02000857"
  },
  {
    en: "Roundshaw",
    geoType: "MSOA",
    geoCode: "E02000858"
  },
  {
    en: "Carshalton on the Hill",
    geoType: "MSOA",
    geoCode: "E02000859"
  },
  {
    en: "Sutton South & Shanklin",
    geoType: "MSOA",
    geoCode: "E02000860"
  },
  {
    en: "Carshalton Beeches & Banstead Road",
    geoType: "MSOA",
    geoCode: "E02000861"
  },
  {
    en: "Orchard Hill, Woodcote Green & Clockhouse",
    geoType: "MSOA",
    geoCode: "E02000863"
  },
  {
    en: "Bow North & Fish Island",
    geoType: "MSOA",
    geoCode: "E02000864"
  },
  {
    en: "Bethnal Green North East",
    geoType: "MSOA",
    geoCode: "E02000865"
  },
  {
    en: "Bow West",
    geoType: "MSOA",
    geoCode: "E02000866"
  },
  {
    en: "Bow South",
    geoType: "MSOA",
    geoCode: "E02000867"
  },
  {
    en: "Bethnal Green North West",
    geoType: "MSOA",
    geoCode: "E02000868"
  },
  {
    en: "Columbia Road",
    geoType: "MSOA",
    geoCode: "E02000869"
  },
  {
    en: "Bethnal Green East",
    geoType: "MSOA",
    geoCode: "E02000870"
  },
  {
    en: "Bromley-by-Bow East",
    geoType: "MSOA",
    geoCode: "E02000871"
  },
  {
    en: "Brick Lane North",
    geoType: "MSOA",
    geoCode: "E02000872"
  },
  {
    en: "Mile End West",
    geoType: "MSOA",
    geoCode: "E02000873"
  },
  {
    en: "Bethnal Green Central",
    geoType: "MSOA",
    geoCode: "E02000874"
  },
  {
    en: "Bromley-by-Bow West",
    geoType: "MSOA",
    geoCode: "E02000875"
  },
  {
    en: "Bethnal Green South",
    geoType: "MSOA",
    geoCode: "E02000876"
  },
  {
    en: "Mile End East & Burdett Estate",
    geoType: "MSOA",
    geoCode: "E02000877"
  },
  {
    en: "Spitalfields",
    geoType: "MSOA",
    geoCode: "E02000878"
  },
  {
    en: "Stepney Green",
    geoType: "MSOA",
    geoCode: "E02000879"
  },
  {
    en: "Whitechapel",
    geoType: "MSOA",
    geoCode: "E02000880"
  },
  {
    en: "Poplar Leaside",
    geoType: "MSOA",
    geoCode: "E02000881"
  },
  {
    en: "Limehouse North & Stepney East",
    geoType: "MSOA",
    geoCode: "E02000882"
  },
  {
    en: "Poplar Central",
    geoType: "MSOA",
    geoCode: "E02000883"
  },
  {
    en: "Aldgate",
    geoType: "MSOA",
    geoCode: "E02000884"
  },
  {
    en: "Shadwell North",
    geoType: "MSOA",
    geoCode: "E02000885"
  },
  {
    en: "Limehouse East",
    geoType: "MSOA",
    geoCode: "E02000886"
  },
  {
    en: "Poplar West",
    geoType: "MSOA",
    geoCode: "E02000887"
  },
  {
    en: "Shadwell Basin & Ratcliffe",
    geoType: "MSOA",
    geoCode: "E02000888"
  },
  {
    en: "St George in the East & Wapping North",
    geoType: "MSOA",
    geoCode: "E02000889"
  },
  {
    en: "Tower Hill & Wapping South",
    geoType: "MSOA",
    geoCode: "E02000890"
  },
  {
    en: "Mudchute",
    geoType: "MSOA",
    geoCode: "E02000893"
  },
  {
    en: "Millwall South",
    geoType: "MSOA",
    geoCode: "E02000894"
  },
  {
    en: "Chingford Green West",
    geoType: "MSOA",
    geoCode: "E02000895"
  },
  {
    en: "Chingford Green East",
    geoType: "MSOA",
    geoCode: "E02000896"
  },
  {
    en: "Friday Hill",
    geoType: "MSOA",
    geoCode: "E02000897"
  },
  {
    en: "Larkswood",
    geoType: "MSOA",
    geoCode: "E02000898"
  },
  {
    en: "Chingford Mount",
    geoType: "MSOA",
    geoCode: "E02000899"
  },
  {
    en: "South Chingford",
    geoType: "MSOA",
    geoCode: "E02000900"
  },
  {
    en: "Highams Park East",
    geoType: "MSOA",
    geoCode: "E02000901"
  },
  {
    en: "Highams Park West",
    geoType: "MSOA",
    geoCode: "E02000902"
  },
  {
    en: "Higham Hill",
    geoType: "MSOA",
    geoCode: "E02000903"
  },
  {
    en: "Fulbourne Road & Walthamstow Forest",
    geoType: "MSOA",
    geoCode: "E02000904"
  },
  {
    en: "Lloyd Park",
    geoType: "MSOA",
    geoCode: "E02000905"
  },
  {
    en: "William Morris",
    geoType: "MSOA",
    geoCode: "E02000906"
  },
  {
    en: "Wood Street",
    geoType: "MSOA",
    geoCode: "E02000907"
  },
  {
    en: "Blackhorse Road",
    geoType: "MSOA",
    geoCode: "E02000908"
  },
  {
    en: "Upper Walthamstow",
    geoType: "MSOA",
    geoCode: "E02000909"
  },
  {
    en: "Walthamstow Central",
    geoType: "MSOA",
    geoCode: "E02000910"
  },
  {
    en: "Walthamstow Market & South Grove",
    geoType: "MSOA",
    geoCode: "E02000911"
  },
  {
    en: "Markhouse & St James Park",
    geoType: "MSOA",
    geoCode: "E02000912"
  },
  {
    en: "Whipps Cross",
    geoType: "MSOA",
    geoCode: "E02000913"
  },
  {
    en: "Baker's Arms",
    geoType: "MSOA",
    geoCode: "E02000914"
  },
  {
    en: "Leytonstone North",
    geoType: "MSOA",
    geoCode: "E02000915"
  },
  {
    en: "Lea Bridge",
    geoType: "MSOA",
    geoCode: "E02000916"
  },
  {
    en: "Leyton North",
    geoType: "MSOA",
    geoCode: "E02000917"
  },
  {
    en: "Leytonstone East",
    geoType: "MSOA",
    geoCode: "E02000918"
  },
  {
    en: "Leyton East",
    geoType: "MSOA",
    geoCode: "E02000919"
  },
  {
    en: "Leyton South",
    geoType: "MSOA",
    geoCode: "E02000920"
  },
  {
    en: "Leytonstone South West",
    geoType: "MSOA",
    geoCode: "E02000921"
  },
  {
    en: "Leytonstone South East",
    geoType: "MSOA",
    geoCode: "E02000922"
  },
  {
    en: "Battersea Park",
    geoType: "MSOA",
    geoCode: "E02000923"
  },
  {
    en: "Battersea Latchmere",
    geoType: "MSOA",
    geoCode: "E02000925"
  },
  {
    en: "St Mary's & Cotton Row",
    geoType: "MSOA",
    geoCode: "E02000926"
  },
  {
    en: "Lavender Hill East",
    geoType: "MSOA",
    geoCode: "E02000927"
  },
  {
    en: "Putney Embankment & Lower Common",
    geoType: "MSOA",
    geoCode: "E02000928"
  },
  {
    en: "York Gardens",
    geoType: "MSOA",
    geoCode: "E02000929"
  },
  {
    en: "Lavender Hill West & Little India",
    geoType: "MSOA",
    geoCode: "E02000930"
  },
  {
    en: "Clapham Common West",
    geoType: "MSOA",
    geoCode: "E02000931"
  },
  {
    en: "Putney Town & Wandsworth Park",
    geoType: "MSOA",
    geoCode: "E02000932"
  },
  {
    en: "Putney West",
    geoType: "MSOA",
    geoCode: "E02000933"
  },
  {
    en: "Clapham Junction & East Hill",
    geoType: "MSOA",
    geoCode: "E02000934"
  },
  {
    en: "Roehampton North West",
    geoType: "MSOA",
    geoCode: "E02000935"
  },
  {
    en: "East Putney",
    geoType: "MSOA",
    geoCode: "E02000936"
  },
  {
    en: "Wandsworth Common",
    geoType: "MSOA",
    geoCode: "E02000937"
  },
  {
    en: "Roehampton North East",
    geoType: "MSOA",
    geoCode: "E02000938"
  },
  {
    en: "Nightingale Lane",
    geoType: "MSOA",
    geoCode: "E02000939"
  },
  {
    en: "Wandsworth South",
    geoType: "MSOA",
    geoCode: "E02000940"
  },
  {
    en: "Earlsfield North",
    geoType: "MSOA",
    geoCode: "E02000941"
  },
  {
    en: "Southfields North",
    geoType: "MSOA",
    geoCode: "E02000942"
  },
  {
    en: "Balham",
    geoType: "MSOA",
    geoCode: "E02000943"
  },
  {
    en: "West Hill North",
    geoType: "MSOA",
    geoCode: "E02000944"
  },
  {
    en: "Roehampton South & Putney Vale",
    geoType: "MSOA",
    geoCode: "E02000945"
  },
  {
    en: "Earlsfield South",
    geoType: "MSOA",
    geoCode: "E02000946"
  },
  {
    en: "Merton Road",
    geoType: "MSOA",
    geoCode: "E02000947"
  },
  {
    en: "Tooting Bec Common",
    geoType: "MSOA",
    geoCode: "E02000948"
  },
  {
    en: "Springfield",
    geoType: "MSOA",
    geoCode: "E02000949"
  },
  {
    en: "West Hill South",
    geoType: "MSOA",
    geoCode: "E02000950"
  },
  {
    en: "Tooting Bec West",
    geoType: "MSOA",
    geoCode: "E02000951"
  },
  {
    en: "Tooting Bec East",
    geoType: "MSOA",
    geoCode: "E02000952"
  },
  {
    en: "Summerstown",
    geoType: "MSOA",
    geoCode: "E02000953"
  },
  {
    en: "Upper Tooting",
    geoType: "MSOA",
    geoCode: "E02000954"
  },
  {
    en: "Tooting North",
    geoType: "MSOA",
    geoCode: "E02000955"
  },
  {
    en: "Tooting West",
    geoType: "MSOA",
    geoCode: "E02000956"
  },
  {
    en: "Tooting East",
    geoType: "MSOA",
    geoCode: "E02000957"
  },
  {
    en: "Furzedown West",
    geoType: "MSOA",
    geoCode: "E02000958"
  },
  {
    en: "Furzedown East",
    geoType: "MSOA",
    geoCode: "E02000959"
  },
  {
    en: "St John's Wood North",
    geoType: "MSOA",
    geoCode: "E02000960"
  },
  {
    en: "Abbey Road",
    geoType: "MSOA",
    geoCode: "E02000961"
  },
  {
    en: "St John's Wood South",
    geoType: "MSOA",
    geoCode: "E02000962"
  },
  {
    en: "Queen's Park Gardens",
    geoType: "MSOA",
    geoCode: "E02000963"
  },
  {
    en: "Maida Hill",
    geoType: "MSOA",
    geoCode: "E02000964"
  },
  {
    en: "Maida Vale",
    geoType: "MSOA",
    geoCode: "E02000965"
  },
  {
    en: "Little Venice",
    geoType: "MSOA",
    geoCode: "E02000966"
  },
  {
    en: "Regent's Park",
    geoType: "MSOA",
    geoCode: "E02000967"
  },
  {
    en: "Church Street",
    geoType: "MSOA",
    geoCode: "E02000968"
  },
  {
    en: "Westbourne",
    geoType: "MSOA",
    geoCode: "E02000969"
  },
  {
    en: "Marylebone & Park Lane",
    geoType: "MSOA",
    geoCode: "E02000970"
  },
  {
    en: "Bryanston & Dorset Square",
    geoType: "MSOA",
    geoCode: "E02000971"
  },
  {
    en: "Fitzrovia West & Soho",
    geoType: "MSOA",
    geoCode: "E02000972"
  },
  {
    en: "Westbourne Grove",
    geoType: "MSOA",
    geoCode: "E02000973"
  },
  {
    en: "Paddington & St George's Fields",
    geoType: "MSOA",
    geoCode: "E02000974"
  },
  {
    en: "Bayswater East",
    geoType: "MSOA",
    geoCode: "E02000975"
  },
  {
    en: "Queensway",
    geoType: "MSOA",
    geoCode: "E02000976"
  },
  {
    en: "Strand, St James & Mayfair",
    geoType: "MSOA",
    geoCode: "E02000977"
  },
  {
    en: "Knightsbridge, Belgravia & Hyde Park",
    geoType: "MSOA",
    geoCode: "E02000978"
  },
  {
    en: "Central Westminster",
    geoType: "MSOA",
    geoCode: "E02000979"
  },
  {
    en: "Millbank",
    geoType: "MSOA",
    geoCode: "E02000980"
  },
  {
    en: "Pimlico North",
    geoType: "MSOA",
    geoCode: "E02000981"
  },
  {
    en: "Victoria",
    geoType: "MSOA",
    geoCode: "E02000982"
  },
  {
    en: "Pimlico South",
    geoType: "MSOA",
    geoCode: "E02000983"
  },
  {
    en: "Dunscar & Egerton",
    geoType: "MSOA",
    geoCode: "E02000984"
  },
  {
    en: "Bromley Cross & Bradshaw",
    geoType: "MSOA",
    geoCode: "E02000985"
  },
  {
    en: "Eagley & Sharples",
    geoType: "MSOA",
    geoCode: "E02000986"
  },
  {
    en: "Horwich North",
    geoType: "MSOA",
    geoCode: "E02000987"
  },
  {
    en: "Astley Bridge & Waters Meeting",
    geoType: "MSOA",
    geoCode: "E02000988"
  },
  {
    en: "Harwood",
    geoType: "MSOA",
    geoCode: "E02000989"
  },
  {
    en: "Horwich South & Middlebrook",
    geoType: "MSOA",
    geoCode: "E02000990"
  },
  {
    en: "Smithills",
    geoType: "MSOA",
    geoCode: "E02000991"
  },
  {
    en: "Blackrod & Butterwick Fields",
    geoType: "MSOA",
    geoCode: "E02000992"
  },
  {
    en: "Hall I' th' Wood",
    geoType: "MSOA",
    geoCode: "E02000993"
  },
  {
    en: "Halliwell & Brownlow Fold",
    geoType: "MSOA",
    geoCode: "E02000994"
  },
  {
    en: "Doffcocker & Moss Bank",
    geoType: "MSOA",
    geoCode: "E02000995"
  },
  {
    en: "Breightmet North",
    geoType: "MSOA",
    geoCode: "E02000996"
  },
  {
    en: "Horwich East",
    geoType: "MSOA",
    geoCode: "E02000997"
  },
  {
    en: "Gilnow & Victory",
    geoType: "MSOA",
    geoCode: "E02000998"
  },
  {
    en: "Central Bolton",
    geoType: "MSOA",
    geoCode: "E02000999"
  },
  {
    en: "Tonge",
    geoType: "MSOA",
    geoCode: "E02001000"
  },
  {
    en: "Heaton & Deane",
    geoType: "MSOA",
    geoCode: "E02001001"
  },
  {
    en: "Breightmet South & Darcy Lever",
    geoType: "MSOA",
    geoCode: "E02001002"
  },
  {
    en: "Lostock & Ladybridge",
    geoType: "MSOA",
    geoCode: "E02001003"
  },
  {
    en: "Rumworth North",
    geoType: "MSOA",
    geoCode: "E02001004"
  },
  {
    en: "Burnden & Great Lever",
    geoType: "MSOA",
    geoCode: "E02001005"
  },
  {
    en: "Rumworth South",
    geoType: "MSOA",
    geoCode: "E02001006"
  },
  {
    en: "Little Lever",
    geoType: "MSOA",
    geoCode: "E02001007"
  },
  {
    en: "Lever Edge",
    geoType: "MSOA",
    geoCode: "E02001008"
  },
  {
    en: "Daubhill & Fernhill Gate",
    geoType: "MSOA",
    geoCode: "E02001009"
  },
  {
    en: "Farnworth North",
    geoType: "MSOA",
    geoCode: "E02001010"
  },
  {
    en: "Westhoughton East",
    geoType: "MSOA",
    geoCode: "E02001011"
  },
  {
    en: "Harper Green",
    geoType: "MSOA",
    geoCode: "E02001012"
  },
  {
    en: "Over Hulton",
    geoType: "MSOA",
    geoCode: "E02001013"
  },
  {
    en: "Westhoughton West",
    geoType: "MSOA",
    geoCode: "E02001014"
  },
  {
    en: "Farnworth South",
    geoType: "MSOA",
    geoCode: "E02001015"
  },
  {
    en: "Highfield & New Bury",
    geoType: "MSOA",
    geoCode: "E02001016"
  },
  {
    en: "Kearsley & Stoneclough",
    geoType: "MSOA",
    geoCode: "E02001017"
  },
  {
    en: "Westhoughton Daisy Hill",
    geoType: "MSOA",
    geoCode: "E02001018"
  },
  {
    en: "Ramsbottom",
    geoType: "MSOA",
    geoCode: "E02001019"
  },
  {
    en: "Summerseat",
    geoType: "MSOA",
    geoCode: "E02001020"
  },
  {
    en: "Nuttall & Tottington",
    geoType: "MSOA",
    geoCode: "E02001021"
  },
  {
    en: "Walmersley & Limefield",
    geoType: "MSOA",
    geoCode: "E02001022"
  },
  {
    en: "Higher Woodhill",
    geoType: "MSOA",
    geoCode: "E02001023"
  },
  {
    en: "Walshaw & Woolfold",
    geoType: "MSOA",
    geoCode: "E02001024"
  },
  {
    en: "Fairfield & Jericho",
    geoType: "MSOA",
    geoCode: "E02001025"
  },
  {
    en: "Fernhill & Pimhole",
    geoType: "MSOA",
    geoCode: "E02001026"
  },
  {
    en: "Whitehead Park",
    geoType: "MSOA",
    geoCode: "E02001027"
  },
  {
    en: "Elton Vale",
    geoType: "MSOA",
    geoCode: "E02001028"
  },
  {
    en: "Buckley Wells & Fishpool",
    geoType: "MSOA",
    geoCode: "E02001029"
  },
  {
    en: "Ainsworth & Bradley Fold",
    geoType: "MSOA",
    geoCode: "E02001030"
  },
  {
    en: "Redvales & Hollins",
    geoType: "MSOA",
    geoCode: "E02001031"
  },
  {
    en: "Black Lane",
    geoType: "MSOA",
    geoCode: "E02001032"
  },
  {
    en: "Bank Top & Radcliffe Ees",
    geoType: "MSOA",
    geoCode: "E02001033"
  },
  {
    en: "Radcliffe",
    geoType: "MSOA",
    geoCode: "E02001034"
  },
  {
    en: "Unsworth",
    geoType: "MSOA",
    geoCode: "E02001035"
  },
  {
    en: "Outwood Gate",
    geoType: "MSOA",
    geoCode: "E02001036"
  },
  {
    en: "Whitefield West & Park Lane",
    geoType: "MSOA",
    geoCode: "E02001037"
  },
  {
    en: "Whitefield East",
    geoType: "MSOA",
    geoCode: "E02001038"
  },
  {
    en: "Besses",
    geoType: "MSOA",
    geoCode: "E02001039"
  },
  {
    en: "Kirkhams & Holyrood",
    geoType: "MSOA",
    geoCode: "E02001040"
  },
  {
    en: "Prestwich East",
    geoType: "MSOA",
    geoCode: "E02001041"
  },
  {
    en: "Prestwich Central",
    geoType: "MSOA",
    geoCode: "E02001042"
  },
  {
    en: "Prestwich Clough & Rainsough",
    geoType: "MSOA",
    geoCode: "E02001043"
  },
  {
    en: "Sedgley Park",
    geoType: "MSOA",
    geoCode: "E02001044"
  },
  {
    en: "Boothroyden & Higher Blackley",
    geoType: "MSOA",
    geoCode: "E02001045"
  },
  {
    en: "Blackley",
    geoType: "MSOA",
    geoCode: "E02001046"
  },
  {
    en: "Charlestown",
    geoType: "MSOA",
    geoCode: "E02001047"
  },
  {
    en: "Crumpsall North & Heaton Park",
    geoType: "MSOA",
    geoCode: "E02001048"
  },
  {
    en: "New Moston",
    geoType: "MSOA",
    geoCode: "E02001049"
  },
  {
    en: "Harpurhey North",
    geoType: "MSOA",
    geoCode: "E02001050"
  },
  {
    en: "Moston West",
    geoType: "MSOA",
    geoCode: "E02001051"
  },
  {
    en: "Crumpsall South",
    geoType: "MSOA",
    geoCode: "E02001052"
  },
  {
    en: "Harpurhey South & Monsall",
    geoType: "MSOA",
    geoCode: "E02001053"
  },
  {
    en: "Newton Heath",
    geoType: "MSOA",
    geoCode: "E02001055"
  },
  {
    en: "Clayton Vale",
    geoType: "MSOA",
    geoCode: "E02001056"
  },
  {
    en: "Beswick, Eastlands & Openshaw Park",
    geoType: "MSOA",
    geoCode: "E02001059"
  },
  {
    en: "Openshaw & Gorton North",
    geoType: "MSOA",
    geoCode: "E02001061"
  },
  {
    en: "Ardwick",
    geoType: "MSOA",
    geoCode: "E02001062"
  },
  {
    en: "Hulme & University",
    geoType: "MSOA",
    geoCode: "E02001063"
  },
  {
    en: "Belle Vue & West Gorton",
    geoType: "MSOA",
    geoCode: "E02001064"
  },
  {
    en: "Abbey Hey",
    geoType: "MSOA",
    geoCode: "E02001065"
  },
  {
    en: "Victoria Park & Longsight West",
    geoType: "MSOA",
    geoCode: "E02001066"
  },
  {
    en: "Gorton South",
    geoType: "MSOA",
    geoCode: "E02001067"
  },
  {
    en: "Moss Side West",
    geoType: "MSOA",
    geoCode: "E02001068"
  },
  {
    en: "Rusholme West & Moss Side East",
    geoType: "MSOA",
    geoCode: "E02001069"
  },
  {
    en: "Rusholme East",
    geoType: "MSOA",
    geoCode: "E02001070"
  },
  {
    en: "Whalley Range North",
    geoType: "MSOA",
    geoCode: "E02001072"
  },
  {
    en: "Chorlton North",
    geoType: "MSOA",
    geoCode: "E02001073"
  },
  {
    en: "Fallowfield West & Whalley Range South",
    geoType: "MSOA",
    geoCode: "E02001074"
  },
  {
    en: "Levenshulme Central",
    geoType: "MSOA",
    geoCode: "E02001075"
  },
  {
    en: "Fallowfield Central",
    geoType: "MSOA",
    geoCode: "E02001076"
  },
  {
    en: "Chorlton South",
    geoType: "MSOA",
    geoCode: "E02001077"
  },
  {
    en: "Levenshulme South & Burnage North",
    geoType: "MSOA",
    geoCode: "E02001078"
  },
  {
    en: "Withington North & Old Moat",
    geoType: "MSOA",
    geoCode: "E02001079"
  },
  {
    en: "Ladybarn",
    geoType: "MSOA",
    geoCode: "E02001080"
  },
  {
    en: "Beech Road & Chorlton Meadows",
    geoType: "MSOA",
    geoCode: "E02001081"
  },
  {
    en: "Withington West",
    geoType: "MSOA",
    geoCode: "E02001082"
  },
  {
    en: "West Didsbury",
    geoType: "MSOA",
    geoCode: "E02001083"
  },
  {
    en: "Withington East",
    geoType: "MSOA",
    geoCode: "E02001084"
  },
  {
    en: "Burnage South",
    geoType: "MSOA",
    geoCode: "E02001085"
  },
  {
    en: "Merseybank & Barlow Moor",
    geoType: "MSOA",
    geoCode: "E02001086"
  },
  {
    en: "Didsbury Village",
    geoType: "MSOA",
    geoCode: "E02001087"
  },
  {
    en: "Northern Moor",
    geoType: "MSOA",
    geoCode: "E02001088"
  },
  {
    en: "East Didsbury",
    geoType: "MSOA",
    geoCode: "E02001089"
  },
  {
    en: "Northenden",
    geoType: "MSOA",
    geoCode: "E02001090"
  },
  {
    en: "Baguley West & Brooklands",
    geoType: "MSOA",
    geoCode: "E02001091"
  },
  {
    en: "Baguley East & Wythenshawe Park",
    geoType: "MSOA",
    geoCode: "E02001092"
  },
  {
    en: "Benchill North & Sharston",
    geoType: "MSOA",
    geoCode: "E02001093"
  },
  {
    en: "Benchill South & Wythenshawe Central",
    geoType: "MSOA",
    geoCode: "E02001094"
  },
  {
    en: "Newall Green",
    geoType: "MSOA",
    geoCode: "E02001095"
  },
  {
    en: "Wythenshawe East & Peel Hall",
    geoType: "MSOA",
    geoCode: "E02001096"
  },
  {
    en: "Woodhouse Park & Airport",
    geoType: "MSOA",
    geoCode: "E02001097"
  },
  {
    en: "Shaw & Crompton",
    geoType: "MSOA",
    geoCode: "E02001098"
  },
  {
    en: "Wood End",
    geoType: "MSOA",
    geoCode: "E02001099"
  },
  {
    en: "Clough & Shaw Side",
    geoType: "MSOA",
    geoCode: "E02001100"
  },
  {
    en: "Royton North",
    geoType: "MSOA",
    geoCode: "E02001101"
  },
  {
    en: "Royton East & Cowlishaw",
    geoType: "MSOA",
    geoCode: "E02001102"
  },
  {
    en: "Diggle, Delph & Denshaw",
    geoType: "MSOA",
    geoCode: "E02001103"
  },
  {
    en: "Moorside & Sholver",
    geoType: "MSOA",
    geoCode: "E02001104"
  },
  {
    en: "Royton South West",
    geoType: "MSOA",
    geoCode: "E02001105"
  },
  {
    en: "Royton South East",
    geoType: "MSOA",
    geoCode: "E02001106"
  },
  {
    en: "Chadderton North",
    geoType: "MSOA",
    geoCode: "E02001107"
  },
  {
    en: "Derker",
    geoType: "MSOA",
    geoCode: "E02001108"
  },
  {
    en: "Waterhead",
    geoType: "MSOA",
    geoCode: "E02001109"
  },
  {
    en: "New Delph, Dobcross & Austerlands",
    geoType: "MSOA",
    geoCode: "E02001110"
  },
  {
    en: "Oldham Town North",
    geoType: "MSOA",
    geoCode: "E02001111"
  },
  {
    en: "Middleton Junction",
    geoType: "MSOA",
    geoCode: "E02001112"
  },
  {
    en: "Busk",
    geoType: "MSOA",
    geoCode: "E02001113"
  },
  {
    en: "Chadderton Central",
    geoType: "MSOA",
    geoCode: "E02001114"
  },
  {
    en: "Lees & Hey",
    geoType: "MSOA",
    geoCode: "E02001115"
  },
  {
    en: "Salem",
    geoType: "MSOA",
    geoCode: "E02001116"
  },
  {
    en: "Greenfield & Uppermill",
    geoType: "MSOA",
    geoCode: "E02001117"
  },
  {
    en: "Springhead & Grasscroft",
    geoType: "MSOA",
    geoCode: "E02001118"
  },
  {
    en: "Alexandra Park",
    geoType: "MSOA",
    geoCode: "E02001119"
  },
  {
    en: "Oldham Town South",
    geoType: "MSOA",
    geoCode: "E02001121"
  },
  {
    en: "Alt",
    geoType: "MSOA",
    geoCode: "E02001123"
  },
  {
    en: "Chadderton South East",
    geoType: "MSOA",
    geoCode: "E02001124"
  },
  {
    en: "Chadderton South West",
    geoType: "MSOA",
    geoCode: "E02001125"
  },
  {
    en: "Hathershaw",
    geoType: "MSOA",
    geoCode: "E02001126"
  },
  {
    en: "Lime Side & Garden Suburb",
    geoType: "MSOA",
    geoCode: "E02001127"
  },
  {
    en: "Failsworth East",
    geoType: "MSOA",
    geoCode: "E02001128"
  },
  {
    en: "Failsworth West",
    geoType: "MSOA",
    geoCode: "E02001129"
  },
  {
    en: "Holt Lane End & Bardsley",
    geoType: "MSOA",
    geoCode: "E02001130"
  },
  {
    en: "Failsworth South",
    geoType: "MSOA",
    geoCode: "E02001131"
  },
  {
    en: "Littleborough North & Calderbook",
    geoType: "MSOA",
    geoCode: "E02001132"
  },
  {
    en: "Littleborough West & Wardle",
    geoType: "MSOA",
    geoCode: "E02001133"
  },
  {
    en: "Littleborough South & Smithy Bridge",
    geoType: "MSOA",
    geoCode: "E02001134"
  },
  {
    en: "Hurstead & Smallbridge",
    geoType: "MSOA",
    geoCode: "E02001135"
  },
  {
    en: "Healey, Syke & Shawclough",
    geoType: "MSOA",
    geoCode: "E02001136"
  },
  {
    en: "Hooley Bridge & Norden West",
    geoType: "MSOA",
    geoCode: "E02001137"
  },
  {
    en: "Norden East & Bagslate Moor",
    geoType: "MSOA",
    geoCode: "E02001138"
  },
  {
    en: "Wardleworth & Newbold Brow",
    geoType: "MSOA",
    geoCode: "E02001139"
  },
  {
    en: "Spotland Bridge",
    geoType: "MSOA",
    geoCode: "E02001140"
  },
  {
    en: "Central Rochdale & Mandale Park",
    geoType: "MSOA",
    geoCode: "E02001141"
  },
  {
    en: "Springfield Park",
    geoType: "MSOA",
    geoCode: "E02001142"
  },
  {
    en: "Kingsway",
    geoType: "MSOA",
    geoCode: "E02001143"
  },
  {
    en: "Milnrow West",
    geoType: "MSOA",
    geoCode: "E02001144"
  },
  {
    en: "Milnrow East & Newhey",
    geoType: "MSOA",
    geoCode: "E02001145"
  },
  {
    en: "Deeplish",
    geoType: "MSOA",
    geoCode: "E02001146"
  },
  {
    en: "Balderstone & Kirkholt",
    geoType: "MSOA",
    geoCode: "E02001147"
  },
  {
    en: "Castleton & Trub",
    geoType: "MSOA",
    geoCode: "E02001148"
  },
  {
    en: "Heywood Town",
    geoType: "MSOA",
    geoCode: "E02001149"
  },
  {
    en: "Heywood Heap Bridge & Darnhill",
    geoType: "MSOA",
    geoCode: "E02001150"
  },
  {
    en: "Heywood Hopwood & Siddal Moor",
    geoType: "MSOA",
    geoCode: "E02001151"
  },
  {
    en: "North Middleton & Stakehill",
    geoType: "MSOA",
    geoCode: "E02001152"
  },
  {
    en: "Langley & Wood Side",
    geoType: "MSOA",
    geoCode: "E02001153"
  },
  {
    en: "Middleton East",
    geoType: "MSOA",
    geoCode: "E02001154"
  },
  {
    en: "Middleton Town & Rhodes",
    geoType: "MSOA",
    geoCode: "E02001155"
  },
  {
    en: "Alkrington",
    geoType: "MSOA",
    geoCode: "E02001156"
  },
  {
    en: "Little Hulton North",
    geoType: "MSOA",
    geoCode: "E02001157"
  },
  {
    en: "Walkden North West",
    geoType: "MSOA",
    geoCode: "E02001158"
  },
  {
    en: "Walkden North East",
    geoType: "MSOA",
    geoCode: "E02001159"
  },
  {
    en: "Little Hulton South",
    geoType: "MSOA",
    geoCode: "E02001160"
  },
  {
    en: "Clifton",
    geoType: "MSOA",
    geoCode: "E02001161"
  },
  {
    en: "Swinton Newtown",
    geoType: "MSOA",
    geoCode: "E02001162"
  },
  {
    en: "Walkden South",
    geoType: "MSOA",
    geoCode: "E02001163"
  },
  {
    en: "Clifton Green & Pendlebury East",
    geoType: "MSOA",
    geoCode: "E02001164"
  },
  {
    en: "Swinton West",
    geoType: "MSOA",
    geoCode: "E02001165"
  },
  {
    en: "Broughton Park",
    geoType: "MSOA",
    geoCode: "E02001166"
  },
  {
    en: "Kersal Dale",
    geoType: "MSOA",
    geoCode: "E02001167"
  },
  {
    en: "Swinton Worsley Road",
    geoType: "MSOA",
    geoCode: "E02001168"
  },
  {
    en: "Ellenbrook & Boothstown",
    geoType: "MSOA",
    geoCode: "E02001169"
  },
  {
    en: "Worsley",
    geoType: "MSOA",
    geoCode: "E02001170"
  },
  {
    en: "Swinton South East & Pendlebury West",
    geoType: "MSOA",
    geoCode: "E02001171"
  },
  {
    en: "Cromwell Road & Broad Street",
    geoType: "MSOA",
    geoCode: "E02001173"
  },
  {
    en: "Lightoaks",
    geoType: "MSOA",
    geoCode: "E02001174"
  },
  {
    en: "Winton & Westwood",
    geoType: "MSOA",
    geoCode: "E02001175"
  },
  {
    en: "Eccles",
    geoType: "MSOA",
    geoCode: "E02001176"
  },
  {
    en: "Weaste & Seedley",
    geoType: "MSOA",
    geoCode: "E02001177"
  },
  {
    en: "Langworthy Buile Hill",
    geoType: "MSOA",
    geoCode: "E02001179"
  },
  {
    en: "Pendleton",
    geoType: "MSOA",
    geoCode: "E02001180"
  },
  {
    en: "Peel Green",
    geoType: "MSOA",
    geoCode: "E02001181"
  },
  {
    en: "Barton upon Irwell",
    geoType: "MSOA",
    geoCode: "E02001182"
  },
  {
    en: "Patricroft",
    geoType: "MSOA",
    geoCode: "E02001183"
  },
  {
    en: "Higher Irlam",
    geoType: "MSOA",
    geoCode: "E02001185"
  },
  {
    en: "Lower Irlam & Cadishead",
    geoType: "MSOA",
    geoCode: "E02001186"
  },
  {
    en: "Reddish Vale View",
    geoType: "MSOA",
    geoCode: "E02001187"
  },
  {
    en: "North Reddish",
    geoType: "MSOA",
    geoCode: "E02001188"
  },
  {
    en: "Central Reddish",
    geoType: "MSOA",
    geoCode: "E02001189"
  },
  {
    en: "Brinnington",
    geoType: "MSOA",
    geoCode: "E02001190"
  },
  {
    en: "Woodley",
    geoType: "MSOA",
    geoCode: "E02001191"
  },
  {
    en: "Heaton Chapel & Shaw Road",
    geoType: "MSOA",
    geoCode: "E02001192"
  },
  {
    en: "South Reddish & Heaton Norris",
    geoType: "MSOA",
    geoCode: "E02001193"
  },
  {
    en: "Heaton Moor",
    geoType: "MSOA",
    geoCode: "E02001194"
  },
  {
    en: "Bredbury",
    geoType: "MSOA",
    geoCode: "E02001195"
  },
  {
    en: "Romiley & Compstall",
    geoType: "MSOA",
    geoCode: "E02001196"
  },
  {
    en: "Norris Bank",
    geoType: "MSOA",
    geoCode: "E02001197"
  },
  {
    en: "Bredbury Green",
    geoType: "MSOA",
    geoCode: "E02001198"
  },
  {
    en: "Heaton Mersey",
    geoType: "MSOA",
    geoCode: "E02001199"
  },
  {
    en: "Central Stockport, Portwood & Shaw Heath",
    geoType: "MSOA",
    geoCode: "E02001200"
  },
  {
    en: "Woodbank Park",
    geoType: "MSOA",
    geoCode: "E02001201"
  },
  {
    en: "Edgeley",
    geoType: "MSOA",
    geoCode: "E02001202"
  },
  {
    en: "Marple Bridge & Mellor",
    geoType: "MSOA",
    geoCode: "E02001203"
  },
  {
    en: "Cheadle Heath",
    geoType: "MSOA",
    geoCode: "E02001204"
  },
  {
    en: "Heaviley",
    geoType: "MSOA",
    geoCode: "E02001205"
  },
  {
    en: "Marple & Rose Hill",
    geoType: "MSOA",
    geoCode: "E02001206"
  },
  {
    en: "Offerton East & Bosden Farm",
    geoType: "MSOA",
    geoCode: "E02001207"
  },
  {
    en: "Cheadle East",
    geoType: "MSOA",
    geoCode: "E02001208"
  },
  {
    en: "Davenport",
    geoType: "MSOA",
    geoCode: "E02001209"
  },
  {
    en: "Offerton West",
    geoType: "MSOA",
    geoCode: "E02001210"
  },
  {
    en: "Gatley North",
    geoType: "MSOA",
    geoCode: "E02001211"
  },
  {
    en: "Adswood",
    geoType: "MSOA",
    geoCode: "E02001212"
  },
  {
    en: "Woodsmoor & Mile End",
    geoType: "MSOA",
    geoCode: "E02001213"
  },
  {
    en: "Gatley South & Cheadle West",
    geoType: "MSOA",
    geoCode: "E02001214"
  },
  {
    en: "Marple & Hawk Green",
    geoType: "MSOA",
    geoCode: "E02001215"
  },
  {
    en: "Cheadle Hulme Orrishmere",
    geoType: "MSOA",
    geoCode: "E02001216"
  },
  {
    en: "Hazel Grove North",
    geoType: "MSOA",
    geoCode: "E02001217"
  },
  {
    en: "Bramhall North West",
    geoType: "MSOA",
    geoCode: "E02001218"
  },
  {
    en: "Hazel Grove West",
    geoType: "MSOA",
    geoCode: "E02001219"
  },
  {
    en: "Cheadle Hulme West",
    geoType: "MSOA",
    geoCode: "E02001220"
  },
  {
    en: "Hazel Grove East & South",
    geoType: "MSOA",
    geoCode: "E02001221"
  },
  {
    en: "Heald Green West",
    geoType: "MSOA",
    geoCode: "E02001222"
  },
  {
    en: "Bramhall North East",
    geoType: "MSOA",
    geoCode: "E02001223"
  },
  {
    en: "High Lane",
    geoType: "MSOA",
    geoCode: "E02001224"
  },
  {
    en: "Cheadle Hulme South East",
    geoType: "MSOA",
    geoCode: "E02001225"
  },
  {
    en: "Heald Green East",
    geoType: "MSOA",
    geoCode: "E02001226"
  },
  {
    en: "Bramhall West",
    geoType: "MSOA",
    geoCode: "E02001227"
  },
  {
    en: "Bramhall South & Woodford",
    geoType: "MSOA",
    geoCode: "E02001228"
  },
  {
    en: "Mossley",
    geoType: "MSOA",
    geoCode: "E02001229"
  },
  {
    en: "Ashton North",
    geoType: "MSOA",
    geoCode: "E02001230"
  },
  {
    en: "Carrbrook & Micklehurst",
    geoType: "MSOA",
    geoCode: "E02001231"
  },
  {
    en: "Hurst Cross",
    geoType: "MSOA",
    geoCode: "E02001232"
  },
  {
    en: "Ashton Waterloo",
    geoType: "MSOA",
    geoCode: "E02001233"
  },
  {
    en: "Smallshaw",
    geoType: "MSOA",
    geoCode: "E02001234"
  },
  {
    en: "Ashton East",
    geoType: "MSOA",
    geoCode: "E02001235"
  },
  {
    en: "Stalybridge North",
    geoType: "MSOA",
    geoCode: "E02001236"
  },
  {
    en: "Stalybridge East & Swineshaw",
    geoType: "MSOA",
    geoCode: "E02001237"
  },
  {
    en: "Droylsden East",
    geoType: "MSOA",
    geoCode: "E02001238"
  },
  {
    en: "Droylsden Central",
    geoType: "MSOA",
    geoCode: "E02001239"
  },
  {
    en: "Droylsden West",
    geoType: "MSOA",
    geoCode: "E02001240"
  },
  {
    en: "Ashton Central",
    geoType: "MSOA",
    geoCode: "E02001241"
  },
  {
    en: "Audenshaw",
    geoType: "MSOA",
    geoCode: "E02001242"
  },
  {
    en: "Stalybridge South",
    geoType: "MSOA",
    geoCode: "E02001243"
  },
  {
    en: "Dukinfield East & Hough Hill",
    geoType: "MSOA",
    geoCode: "E02001244"
  },
  {
    en: "Dukinfield West",
    geoType: "MSOA",
    geoCode: "E02001245"
  },
  {
    en: "Newtonmoor",
    geoType: "MSOA",
    geoCode: "E02001246"
  },
  {
    en: "Guide Bridge",
    geoType: "MSOA",
    geoCode: "E02001247"
  },
  {
    en: "Hyde North",
    geoType: "MSOA",
    geoCode: "E02001248"
  },
  {
    en: "Denton North",
    geoType: "MSOA",
    geoCode: "E02001249"
  },
  {
    en: "Godley",
    geoType: "MSOA",
    geoCode: "E02001250"
  },
  {
    en: "Mottram, Hollingworth & Broadbottom",
    geoType: "MSOA",
    geoCode: "E02001251"
  },
  {
    en: "Dane Bank",
    geoType: "MSOA",
    geoCode: "E02001252"
  },
  {
    en: "Denton West",
    geoType: "MSOA",
    geoCode: "E02001253"
  },
  {
    en: "Denton East",
    geoType: "MSOA",
    geoCode: "E02001254"
  },
  {
    en: "Hattersley",
    geoType: "MSOA",
    geoCode: "E02001255"
  },
  {
    en: "Hyde South",
    geoType: "MSOA",
    geoCode: "E02001256"
  },
  {
    en: "Denton South",
    geoType: "MSOA",
    geoCode: "E02001257"
  },
  {
    en: "Cheetham Fold & Gee Cross",
    geoType: "MSOA",
    geoCode: "E02001258"
  },
  {
    en: "Old Trafford",
    geoType: "MSOA",
    geoCode: "E02001259"
  },
  {
    en: "Trafford Park West & Kingsway Park",
    geoType: "MSOA",
    geoCode: "E02001260"
  },
  {
    en: "Gorse Hill",
    geoType: "MSOA",
    geoCode: "E02001261"
  },
  {
    en: "Firswood",
    geoType: "MSOA",
    geoCode: "E02001262"
  },
  {
    en: "Davyhulme",
    geoType: "MSOA",
    geoCode: "E02001263"
  },
  {
    en: "Trafford Park East & Sevenways",
    geoType: "MSOA",
    geoCode: "E02001264"
  },
  {
    en: "Flixton & Moorside",
    geoType: "MSOA",
    geoCode: "E02001265"
  },
  {
    en: "Lostock & Stretford Meadows",
    geoType: "MSOA",
    geoCode: "E02001266"
  },
  {
    en: "Urmston East",
    geoType: "MSOA",
    geoCode: "E02001267"
  },
  {
    en: "Urmston West",
    geoType: "MSOA",
    geoCode: "E02001268"
  },
  {
    en: "Stretford East",
    geoType: "MSOA",
    geoCode: "E02001269"
  },
  {
    en: "Sale North",
    geoType: "MSOA",
    geoCode: "E02001270"
  },
  {
    en: "Ashton upon Mersey North",
    geoType: "MSOA",
    geoCode: "E02001271"
  },
  {
    en: "Sale East",
    geoType: "MSOA",
    geoCode: "E02001272"
  },
  {
    en: "Sale Central",
    geoType: "MSOA",
    geoCode: "E02001273"
  },
  {
    en: "Ashton upon Mersey South",
    geoType: "MSOA",
    geoCode: "E02001274"
  },
  {
    en: "Partington",
    geoType: "MSOA",
    geoCode: "E02001275"
  },
  {
    en: "Sale Moor",
    geoType: "MSOA",
    geoCode: "E02001276"
  },
  {
    en: "Broadheath & Firsway",
    geoType: "MSOA",
    geoCode: "E02001277"
  },
  {
    en: "West Timperley",
    geoType: "MSOA",
    geoCode: "E02001278"
  },
  {
    en: "Timperley North",
    geoType: "MSOA",
    geoCode: "E02001279"
  },
  {
    en: "Timperley East",
    geoType: "MSOA",
    geoCode: "E02001280"
  },
  {
    en: "Timperley South",
    geoType: "MSOA",
    geoCode: "E02001281"
  },
  {
    en: "Altrincham East",
    geoType: "MSOA",
    geoCode: "E02001282"
  },
  {
    en: "Altrincham West, Dunham & Warburton",
    geoType: "MSOA",
    geoCode: "E02001283"
  },
  {
    en: "Hale",
    geoType: "MSOA",
    geoCode: "E02001284"
  },
  {
    en: "Bowdon",
    geoType: "MSOA",
    geoCode: "E02001285"
  },
  {
    en: "Hale Barns",
    geoType: "MSOA",
    geoCode: "E02001286"
  },
  {
    en: "Standish North",
    geoType: "MSOA",
    geoCode: "E02001287"
  },
  {
    en: "Standish South",
    geoType: "MSOA",
    geoCode: "E02001288"
  },
  {
    en: "Shevington",
    geoType: "MSOA",
    geoCode: "E02001289"
  },
  {
    en: "Aspull & Red Rock",
    geoType: "MSOA",
    geoCode: "E02001290"
  },
  {
    en: "Beech Hill",
    geoType: "MSOA",
    geoCode: "E02001291"
  },
  {
    en: "Wigan Marylebone & Bottling Wood",
    geoType: "MSOA",
    geoCode: "E02001292"
  },
  {
    en: "New Springs",
    geoType: "MSOA",
    geoCode: "E02001293"
  },
  {
    en: "Wigan Central",
    geoType: "MSOA",
    geoCode: "E02001294"
  },
  {
    en: "Wigan East",
    geoType: "MSOA",
    geoCode: "E02001295"
  },
  {
    en: "Laithwaite & Marsh Green",
    geoType: "MSOA",
    geoCode: "E02001296"
  },
  {
    en: "Pemberton North",
    geoType: "MSOA",
    geoCode: "E02001297"
  },
  {
    en: "Ince-in-Makerfield",
    geoType: "MSOA",
    geoCode: "E02001298"
  },
  {
    en: "Hindley West",
    geoType: "MSOA",
    geoCode: "E02001299"
  },
  {
    en: "Pemberton South",
    geoType: "MSOA",
    geoCode: "E02001300"
  },
  {
    en: "Wigan South",
    geoType: "MSOA",
    geoCode: "E02001301"
  },
  {
    en: "Hindley East",
    geoType: "MSOA",
    geoCode: "E02001302"
  },
  {
    en: "Atherton North",
    geoType: "MSOA",
    geoCode: "E02001303"
  },
  {
    en: "Orrell & Longshaw",
    geoType: "MSOA",
    geoCode: "E02001304"
  },
  {
    en: "Hindley Green",
    geoType: "MSOA",
    geoCode: "E02001305"
  },
  {
    en: "Worsley Mesnes & Hawkley",
    geoType: "MSOA",
    geoCode: "E02001306"
  },
  {
    en: "Winstanley",
    geoType: "MSOA",
    geoCode: "E02001307"
  },
  {
    en: "Atherton South East & Tyldesley West",
    geoType: "MSOA",
    geoCode: "E02001308"
  },
  {
    en: "Atherton South West",
    geoType: "MSOA",
    geoCode: "E02001309"
  },
  {
    en: "Platt Bridge & Spring View",
    geoType: "MSOA",
    geoCode: "E02001310"
  },
  {
    en: "Tyldesley North",
    geoType: "MSOA",
    geoCode: "E02001311"
  },
  {
    en: "Abram & Bickershaw",
    geoType: "MSOA",
    geoCode: "E02001312"
  },
  {
    en: "Leigh North",
    geoType: "MSOA",
    geoCode: "E02001313"
  },
  {
    en: "Tyldesley South",
    geoType: "MSOA",
    geoCode: "E02001314"
  },
  {
    en: "Astley, Blackmoor & Mosley Common",
    geoType: "MSOA",
    geoCode: "E02001315"
  },
  {
    en: "Leigh Central",
    geoType: "MSOA",
    geoCode: "E02001316"
  },
  {
    en: "Leigh East & Higher Folds",
    geoType: "MSOA",
    geoCode: "E02001317"
  },
  {
    en: "Ashton-in-Makerfield North",
    geoType: "MSOA",
    geoCode: "E02001318"
  },
  {
    en: "Leigh West",
    geoType: "MSOA",
    geoCode: "E02001319"
  },
  {
    en: "Leigh South East",
    geoType: "MSOA",
    geoCode: "E02001320"
  },
  {
    en: "Ashton-in-Makerfield East",
    geoType: "MSOA",
    geoCode: "E02001321"
  },
  {
    en: "Ashton-in-Makerfield West",
    geoType: "MSOA",
    geoCode: "E02001322"
  },
  {
    en: "Leigh South",
    geoType: "MSOA",
    geoCode: "E02001323"
  },
  {
    en: "Golborne",
    geoType: "MSOA",
    geoCode: "E02001324"
  },
  {
    en: "Lowton",
    geoType: "MSOA",
    geoCode: "E02001325"
  },
  {
    en: "Lowton Common",
    geoType: "MSOA",
    geoCode: "E02001326"
  },
  {
    en: "Kirkby North East",
    geoType: "MSOA",
    geoCode: "E02001327"
  },
  {
    en: "Kirkby North West",
    geoType: "MSOA",
    geoCode: "E02001328"
  },
  {
    en: "Kirkby South East",
    geoType: "MSOA",
    geoCode: "E02001329"
  },
  {
    en: "Kirkby South West & Field Lane",
    geoType: "MSOA",
    geoCode: "E02001330"
  },
  {
    en: "Knowsley Village & Southdene",
    geoType: "MSOA",
    geoCode: "E02001331"
  },
  {
    en: "Stockbridge Village",
    geoType: "MSOA",
    geoCode: "E02001332"
  },
  {
    en: "Prescot",
    geoType: "MSOA",
    geoCode: "E02001333"
  },
  {
    en: "Page Moss & Fincham",
    geoType: "MSOA",
    geoCode: "E02001334"
  },
  {
    en: "Whiston North",
    geoType: "MSOA",
    geoCode: "E02001335"
  },
  {
    en: "Longview & Knowsley Park",
    geoType: "MSOA",
    geoCode: "E02001336"
  },
  {
    en: "Mosscroft & Bakers Green",
    geoType: "MSOA",
    geoCode: "E02001337"
  },
  {
    en: "Huyton Farm",
    geoType: "MSOA",
    geoCode: "E02001338"
  },
  {
    en: "Whiston South",
    geoType: "MSOA",
    geoCode: "E02001339"
  },
  {
    en: "Court Hey & Swanside",
    geoType: "MSOA",
    geoCode: "E02001340"
  },
  {
    en: "Huyton East",
    geoType: "MSOA",
    geoCode: "E02001341"
  },
  {
    en: "Huyton West & Roby",
    geoType: "MSOA",
    geoCode: "E02001342"
  },
  {
    en: "Halsnead, Cronton & Halewood East",
    geoType: "MSOA",
    geoCode: "E02001343"
  },
  {
    en: "Halewood North",
    geoType: "MSOA",
    geoCode: "E02001344"
  },
  {
    en: "Halewood Central",
    geoType: "MSOA",
    geoCode: "E02001345"
  },
  {
    en: "Halewood South",
    geoType: "MSOA",
    geoCode: "E02001346"
  },
  {
    en: "Fazakerley North",
    geoType: "MSOA",
    geoCode: "E02001347"
  },
  {
    en: "Walton Vale",
    geoType: "MSOA",
    geoCode: "E02001348"
  },
  {
    en: "Orrell Park",
    geoType: "MSOA",
    geoCode: "E02001349"
  },
  {
    en: "Croxteth West & Gillmoss",
    geoType: "MSOA",
    geoCode: "E02001350"
  },
  {
    en: "Fazakerley South",
    geoType: "MSOA",
    geoCode: "E02001351"
  },
  {
    en: "Walton North",
    geoType: "MSOA",
    geoCode: "E02001352"
  },
  {
    en: "Croxteth East",
    geoType: "MSOA",
    geoCode: "E02001353"
  },
  {
    en: "Walton East",
    geoType: "MSOA",
    geoCode: "E02001354"
  },
  {
    en: "Walton Hall",
    geoType: "MSOA",
    geoCode: "E02001355"
  },
  {
    en: "Norris Green East",
    geoType: "MSOA",
    geoCode: "E02001356"
  },
  {
    en: "Norris Green West",
    geoType: "MSOA",
    geoCode: "E02001357"
  },
  {
    en: "Walton South",
    geoType: "MSOA",
    geoCode: "E02001358"
  },
  {
    en: "Croxteth Park",
    geoType: "MSOA",
    geoCode: "E02001359"
  },
  {
    en: "Kirkdale North",
    geoType: "MSOA",
    geoCode: "E02001360"
  },
  {
    en: "Anfield North",
    geoType: "MSOA",
    geoCode: "E02001361"
  },
  {
    en: "Muirhead Avenue",
    geoType: "MSOA",
    geoCode: "E02001362"
  },
  {
    en: "Yewtree",
    geoType: "MSOA",
    geoCode: "E02001363"
  },
  {
    en: "Anfield West",
    geoType: "MSOA",
    geoCode: "E02001364"
  },
  {
    en: "Anfield East",
    geoType: "MSOA",
    geoCode: "E02001365"
  },
  {
    en: "Tuebrook",
    geoType: "MSOA",
    geoCode: "E02001366"
  },
  {
    en: "Sandfield Park & Holly Lodge",
    geoType: "MSOA",
    geoCode: "E02001367"
  },
  {
    en: "Kirkdale South & Vauxhall",
    geoType: "MSOA",
    geoCode: "E02001368"
  },
  {
    en: "Everton West",
    geoType: "MSOA",
    geoCode: "E02001369"
  },
  {
    en: "Everton East",
    geoType: "MSOA",
    geoCode: "E02001370"
  },
  {
    en: "Knotty Ash",
    geoType: "MSOA",
    geoCode: "E02001371"
  },
  {
    en: "Dovecot",
    geoType: "MSOA",
    geoCode: "E02001372"
  },
  {
    en: "Fairfield East",
    geoType: "MSOA",
    geoCode: "E02001373"
  },
  {
    en: "Fairfield West & Newsham Park",
    geoType: "MSOA",
    geoCode: "E02001374"
  },
  {
    en: "Stoneycroft",
    geoType: "MSOA",
    geoCode: "E02001375"
  },
  {
    en: "Kensington",
    geoType: "MSOA",
    geoCode: "E02001376"
  },
  {
    en: "Edge Hill",
    geoType: "MSOA",
    geoCode: "E02001377"
  },
  {
    en: "Wavertree East",
    geoType: "MSOA",
    geoCode: "E02001378"
  },
  {
    en: "Broad Green",
    geoType: "MSOA",
    geoCode: "E02001380"
  },
  {
    en: "Wavertree West",
    geoType: "MSOA",
    geoCode: "E02001381"
  },
  {
    en: "Childwall East",
    geoType: "MSOA",
    geoCode: "E02001382"
  },
  {
    en: "Chinatown, St James & Georgian Quarter",
    geoType: "MSOA",
    geoCode: "E02001383"
  },
  {
    en: "Wavertree South",
    geoType: "MSOA",
    geoCode: "E02001384"
  },
  {
    en: "Toxteth Park",
    geoType: "MSOA",
    geoCode: "E02001385"
  },
  {
    en: "Belle Vale",
    geoType: "MSOA",
    geoCode: "E02001386"
  },
  {
    en: "Childwall West & Wavertree Green",
    geoType: "MSOA",
    geoCode: "E02001387"
  },
  {
    en: "Wavertree Penny Lane",
    geoType: "MSOA",
    geoCode: "E02001388"
  },
  {
    en: "Princes Park",
    geoType: "MSOA",
    geoCode: "E02001389"
  },
  {
    en: "Toxteth",
    geoType: "MSOA",
    geoCode: "E02001390"
  },
  {
    en: "Netherley",
    geoType: "MSOA",
    geoCode: "E02001391"
  },
  {
    en: "Gateacre",
    geoType: "MSOA",
    geoCode: "E02001392"
  },
  {
    en: "Calderstones",
    geoType: "MSOA",
    geoCode: "E02001393"
  },
  {
    en: "Mossley Hill West & Sefton Park",
    geoType: "MSOA",
    geoCode: "E02001394"
  },
  {
    en: "Mossley Hill East",
    geoType: "MSOA",
    geoCode: "E02001395"
  },
  {
    en: "Dingle",
    geoType: "MSOA",
    geoCode: "E02001396"
  },
  {
    en: "Woolton",
    geoType: "MSOA",
    geoCode: "E02001397"
  },
  {
    en: "St Michael's & Otterspool",
    geoType: "MSOA",
    geoCode: "E02001398"
  },
  {
    en: "West Allerton",
    geoType: "MSOA",
    geoCode: "E02001399"
  },
  {
    en: "Allerton",
    geoType: "MSOA",
    geoCode: "E02001400"
  },
  {
    en: "Hunts Cross",
    geoType: "MSOA",
    geoCode: "E02001401"
  },
  {
    en: "Aigburth & Grassendale",
    geoType: "MSOA",
    geoCode: "E02001402"
  },
  {
    en: "Garston",
    geoType: "MSOA",
    geoCode: "E02001403"
  },
  {
    en: "Speke West & Airport",
    geoType: "MSOA",
    geoCode: "E02001404"
  },
  {
    en: "Speke East",
    geoType: "MSOA",
    geoCode: "E02001405"
  },
  {
    en: "Rainford",
    geoType: "MSOA",
    geoCode: "E02001406"
  },
  {
    en: "Billinge",
    geoType: "MSOA",
    geoCode: "E02001407"
  },
  {
    en: "Garswood",
    geoType: "MSOA",
    geoCode: "E02001408"
  },
  {
    en: "Moss Bank",
    geoType: "MSOA",
    geoCode: "E02001409"
  },
  {
    en: "Haydock East",
    geoType: "MSOA",
    geoCode: "E02001410"
  },
  {
    en: "Haydock West",
    geoType: "MSOA",
    geoCode: "E02001411"
  },
  {
    en: "Windle & Denton's Green",
    geoType: "MSOA",
    geoCode: "E02001412"
  },
  {
    en: "Blackbrook",
    geoType: "MSOA",
    geoCode: "E02001413"
  },
  {
    en: "Eccleston",
    geoType: "MSOA",
    geoCode: "E02001414"
  },
  {
    en: "Earlestown North",
    geoType: "MSOA",
    geoCode: "E02001415"
  },
  {
    en: "Broad Oak",
    geoType: "MSOA",
    geoCode: "E02001416"
  },
  {
    en: "Town Centre West",
    geoType: "MSOA",
    geoCode: "E02001417"
  },
  {
    en: "Earlestown South",
    geoType: "MSOA",
    geoCode: "E02001418"
  },
  {
    en: "Town Centre East & Fingerpost",
    geoType: "MSOA",
    geoCode: "E02001419"
  },
  {
    en: "Newton-le-Willows",
    geoType: "MSOA",
    geoCode: "E02001420"
  },
  {
    en: "West Park",
    geoType: "MSOA",
    geoCode: "E02001421"
  },
  {
    en: "Derbyshire Hill",
    geoType: "MSOA",
    geoCode: "E02001422"
  },
  {
    en: "Eccleston Park",
    geoType: "MSOA",
    geoCode: "E02001423"
  },
  {
    en: "Sutton Leach",
    geoType: "MSOA",
    geoCode: "E02001425"
  },
  {
    en: "Rainhill North",
    geoType: "MSOA",
    geoCode: "E02001426"
  },
  {
    en: "Bold & Clock Face",
    geoType: "MSOA",
    geoCode: "E02001427"
  },
  {
    en: "Rainhill South",
    geoType: "MSOA",
    geoCode: "E02001428"
  },
  {
    en: "Crossens",
    geoType: "MSOA",
    geoCode: "E02001429"
  },
  {
    en: "Marshside",
    geoType: "MSOA",
    geoCode: "E02001430"
  },
  {
    en: "Hesketh Park",
    geoType: "MSOA",
    geoCode: "E02001431"
  },
  {
    en: "Southport Waterfront",
    geoType: "MSOA",
    geoCode: "E02001432"
  },
  {
    en: "Southport High Park",
    geoType: "MSOA",
    geoCode: "E02001433"
  },
  {
    en: "Meols Cop",
    geoType: "MSOA",
    geoCode: "E02001434"
  },
  {
    en: "Southport South",
    geoType: "MSOA",
    geoCode: "E02001435"
  },
  {
    en: "Southport Kew",
    geoType: "MSOA",
    geoCode: "E02001436"
  },
  {
    en: "Birkdale",
    geoType: "MSOA",
    geoCode: "E02001437"
  },
  {
    en: "Hillside",
    geoType: "MSOA",
    geoCode: "E02001438"
  },
  {
    en: "Ainsdale East",
    geoType: "MSOA",
    geoCode: "E02001439"
  },
  {
    en: "Ainsdale West",
    geoType: "MSOA",
    geoCode: "E02001440"
  },
  {
    en: "Formby West & Freshfield North",
    geoType: "MSOA",
    geoCode: "E02001441"
  },
  {
    en: "Formby Central & Freshfield South",
    geoType: "MSOA",
    geoCode: "E02001442"
  },
  {
    en: "Formby South West",
    geoType: "MSOA",
    geoCode: "E02001443"
  },
  {
    en: "Formby South East & Ince Blundell",
    geoType: "MSOA",
    geoCode: "E02001444"
  },
  {
    en: "Maghull North West & Lydiate",
    geoType: "MSOA",
    geoCode: "E02001445"
  },
  {
    en: "Maghull North East",
    geoType: "MSOA",
    geoCode: "E02001446"
  },
  {
    en: "Maghull South East",
    geoType: "MSOA",
    geoCode: "E02001447"
  },
  {
    en: "Maghull South West",
    geoType: "MSOA",
    geoCode: "E02001448"
  },
  {
    en: "Hightown & Thornton",
    geoType: "MSOA",
    geoCode: "E02001449"
  },
  {
    en: "Blundellsands",
    geoType: "MSOA",
    geoCode: "E02001450"
  },
  {
    en: "Netherton North",
    geoType: "MSOA",
    geoCode: "E02001451"
  },
  {
    en: "Ford",
    geoType: "MSOA",
    geoCode: "E02001452"
  },
  {
    en: "Crosby East",
    geoType: "MSOA",
    geoCode: "E02001453"
  },
  {
    en: "Aintree East & Waddicar",
    geoType: "MSOA",
    geoCode: "E02001454"
  },
  {
    en: "Aintree West & Old Roan",
    geoType: "MSOA",
    geoCode: "E02001455"
  },
  {
    en: "Brighton le Sands & Crosby West",
    geoType: "MSOA",
    geoCode: "E02001456"
  },
  {
    en: "Netherton South",
    geoType: "MSOA",
    geoCode: "E02001457"
  },
  {
    en: "Waterloo",
    geoType: "MSOA",
    geoCode: "E02001458"
  },
  {
    en: "Litherland North",
    geoType: "MSOA",
    geoCode: "E02001459"
  },
  {
    en: "Seaforth North",
    geoType: "MSOA",
    geoCode: "E02001460"
  },
  {
    en: "Litherland South",
    geoType: "MSOA",
    geoCode: "E02001461"
  },
  {
    en: "Seaforth South",
    geoType: "MSOA",
    geoCode: "E02001462"
  },
  {
    en: "Orrell",
    geoType: "MSOA",
    geoCode: "E02001463"
  },
  {
    en: "Bootle North",
    geoType: "MSOA",
    geoCode: "E02001464"
  },
  {
    en: "Bootle South",
    geoType: "MSOA",
    geoCode: "E02001465"
  },
  {
    en: "Bootle East",
    geoType: "MSOA",
    geoCode: "E02001466"
  },
  {
    en: "New Brighton",
    geoType: "MSOA",
    geoCode: "E02001467"
  },
  {
    en: "Wallasey East",
    geoType: "MSOA",
    geoCode: "E02001468"
  },
  {
    en: "Wallasey Village",
    geoType: "MSOA",
    geoCode: "E02001469"
  },
  {
    en: "Wallasey Central",
    geoType: "MSOA",
    geoCode: "E02001470"
  },
  {
    en: "Egremont",
    geoType: "MSOA",
    geoCode: "E02001471"
  },
  {
    en: "Leasowe",
    geoType: "MSOA",
    geoCode: "E02001472"
  },
  {
    en: "Liscard",
    geoType: "MSOA",
    geoCode: "E02001473"
  },
  {
    en: "Seacombe",
    geoType: "MSOA",
    geoCode: "E02001474"
  },
  {
    en: "Leasowe South & Moreton East",
    geoType: "MSOA",
    geoCode: "E02001475"
  },
  {
    en: "Poulton",
    geoType: "MSOA",
    geoCode: "E02001476"
  },
  {
    en: "Bidston Hill",
    geoType: "MSOA",
    geoCode: "E02001477"
  },
  {
    en: "Moreton West",
    geoType: "MSOA",
    geoCode: "E02001478"
  },
  {
    en: "Great Meols",
    geoType: "MSOA",
    geoCode: "E02001479"
  },
  {
    en: "Hoylake",
    geoType: "MSOA",
    geoCode: "E02001480"
  },
  {
    en: "Claughton North",
    geoType: "MSOA",
    geoCode: "E02001481"
  },
  {
    en: "Birkenhead Central",
    geoType: "MSOA",
    geoCode: "E02001482"
  },
  {
    en: "Saughall Massie",
    geoType: "MSOA",
    geoCode: "E02001483"
  },
  {
    en: "Upton West",
    geoType: "MSOA",
    geoCode: "E02001484"
  },
  {
    en: "Noctorum North & Upton East",
    geoType: "MSOA",
    geoCode: "E02001485"
  },
  {
    en: "Claughton South & Oxton North",
    geoType: "MSOA",
    geoCode: "E02001486"
  },
  {
    en: "Birkenhead South",
    geoType: "MSOA",
    geoCode: "E02001487"
  },
  {
    en: "Oxton South",
    geoType: "MSOA",
    geoCode: "E02001488"
  },
  {
    en: "Greasby",
    geoType: "MSOA",
    geoCode: "E02001489"
  },
  {
    en: "Noctorum South",
    geoType: "MSOA",
    geoCode: "E02001490"
  },
  {
    en: "Woodchurch",
    geoType: "MSOA",
    geoCode: "E02001491"
  },
  {
    en: "West Kirby",
    geoType: "MSOA",
    geoCode: "E02001492"
  },
  {
    en: "Tranmere",
    geoType: "MSOA",
    geoCode: "E02001493"
  },
  {
    en: "Caldy & Newton",
    geoType: "MSOA",
    geoCode: "E02001494"
  },
  {
    en: "Egerton Park",
    geoType: "MSOA",
    geoCode: "E02001495"
  },
  {
    en: "Prenton",
    geoType: "MSOA",
    geoCode: "E02001496"
  },
  {
    en: "Bebington New Ferry",
    geoType: "MSOA",
    geoCode: "E02001497"
  },
  {
    en: "Woodhey",
    geoType: "MSOA",
    geoCode: "E02001498"
  },
  {
    en: "Thurstaston & Irby",
    geoType: "MSOA",
    geoCode: "E02001499"
  },
  {
    en: "Pensby & Thingwall",
    geoType: "MSOA",
    geoCode: "E02001500"
  },
  {
    en: "Higher Bebington",
    geoType: "MSOA",
    geoCode: "E02001501"
  },
  {
    en: "Lower Bebington & Bromborough Pool",
    geoType: "MSOA",
    geoCode: "E02001502"
  },
  {
    en: "Heswall",
    geoType: "MSOA",
    geoCode: "E02001503"
  },
  {
    en: "Poulton, Raby Mere & Thornton Hough",
    geoType: "MSOA",
    geoCode: "E02001504"
  },
  {
    en: "Bromborough North",
    geoType: "MSOA",
    geoCode: "E02001505"
  },
  {
    en: "Gayton & Lower Heswall",
    geoType: "MSOA",
    geoCode: "E02001506"
  },
  {
    en: "Bromborough South",
    geoType: "MSOA",
    geoCode: "E02001507"
  },
  {
    en: "Eastham",
    geoType: "MSOA",
    geoCode: "E02001508"
  },
  {
    en: "Royston West",
    geoType: "MSOA",
    geoCode: "E02001509"
  },
  {
    en: "Royston East & Carlton",
    geoType: "MSOA",
    geoCode: "E02001510"
  },
  {
    en: "Shafton & Upper Cudworth",
    geoType: "MSOA",
    geoCode: "E02001511"
  },
  {
    en: "Mapplewell & Staincross",
    geoType: "MSOA",
    geoCode: "E02001512"
  },
  {
    en: "Darton & Kexborough",
    geoType: "MSOA",
    geoCode: "E02001513"
  },
  {
    en: "Grimethorpe & Brierley",
    geoType: "MSOA",
    geoCode: "E02001514"
  },
  {
    en: "Athersley",
    geoType: "MSOA",
    geoCode: "E02001515"
  },
  {
    en: "Cudworth Village",
    geoType: "MSOA",
    geoCode: "E02001516"
  },
  {
    en: "Monk Bretton",
    geoType: "MSOA",
    geoCode: "E02001517"
  },
  {
    en: "Honeywell",
    geoType: "MSOA",
    geoCode: "E02001518"
  },
  {
    en: "Lundwood",
    geoType: "MSOA",
    geoCode: "E02001519"
  },
  {
    en: "Wilthorpe & Barugh Green",
    geoType: "MSOA",
    geoCode: "E02001520"
  },
  {
    en: "Barnsley Town & Park Road",
    geoType: "MSOA",
    geoCode: "E02001521"
  },
  {
    en: "Thurnscoe",
    geoType: "MSOA",
    geoCode: "E02001522"
  },
  {
    en: "Ardsley & Stairfoot",
    geoType: "MSOA",
    geoCode: "E02001523"
  },
  {
    en: "Silkstone, Hoylandswaine & Cawthorne",
    geoType: "MSOA",
    geoCode: "E02001524"
  },
  {
    en: "Worsbrough Common",
    geoType: "MSOA",
    geoCode: "E02001525"
  },
  {
    en: "Kendray",
    geoType: "MSOA",
    geoCode: "E02001526"
  },
  {
    en: "Dodworth",
    geoType: "MSOA",
    geoCode: "E02001527"
  },
  {
    en: "Darfield & Great Houghton",
    geoType: "MSOA",
    geoCode: "E02001528"
  },
  {
    en: "Worsbrough",
    geoType: "MSOA",
    geoCode: "E02001529"
  },
  {
    en: "Goldthorpe",
    geoType: "MSOA",
    geoCode: "E02001530"
  },
  {
    en: "Wombwell North",
    geoType: "MSOA",
    geoCode: "E02001531"
  },
  {
    en: "Penistone",
    geoType: "MSOA",
    geoCode: "E02001532"
  },
  {
    en: "Bolton-upon-Dearne",
    geoType: "MSOA",
    geoCode: "E02001533"
  },
  {
    en: "Wombwell South",
    geoType: "MSOA",
    geoCode: "E02001534"
  },
  {
    en: "Ingbirchworth, Dunford Bridge & Thurgoland",
    geoType: "MSOA",
    geoCode: "E02001535"
  },
  {
    en: "Birdwell",
    geoType: "MSOA",
    geoCode: "E02001536"
  },
  {
    en: "Elsecar",
    geoType: "MSOA",
    geoCode: "E02001537"
  },
  {
    en: "Hoyland",
    geoType: "MSOA",
    geoCode: "E02001538"
  },
  {
    en: "Moorends",
    geoType: "MSOA",
    geoCode: "E02001539"
  },
  {
    en: "Askern, Campsall & Norton",
    geoType: "MSOA",
    geoCode: "E02001540"
  },
  {
    en: "Thorne",
    geoType: "MSOA",
    geoCode: "E02001541"
  },
  {
    en: "Stainforth",
    geoType: "MSOA",
    geoCode: "E02001542"
  },
  {
    en: "Carcroft",
    geoType: "MSOA",
    geoCode: "E02001543"
  },
  {
    en: "Hatfield West",
    geoType: "MSOA",
    geoCode: "E02001544"
  },
  {
    en: "Kirk Sandall & Barnby Dun",
    geoType: "MSOA",
    geoCode: "E02001545"
  },
  {
    en: "Hatfield East",
    geoType: "MSOA",
    geoCode: "E02001546"
  },
  {
    en: "Adwick le Street & Woodlands",
    geoType: "MSOA",
    geoCode: "E02001547"
  },
  {
    en: "Bentley & Toll Bar",
    geoType: "MSOA",
    geoCode: "E02001548"
  },
  {
    en: "Edenthorpe & Mere Lane",
    geoType: "MSOA",
    geoCode: "E02001549"
  },
  {
    en: "Scawthorpe",
    geoType: "MSOA",
    geoCode: "E02001550"
  },
  {
    en: "Bentley Rise",
    geoType: "MSOA",
    geoCode: "E02001551"
  },
  {
    en: "Armthorpe North",
    geoType: "MSOA",
    geoCode: "E02001552"
  },
  {
    en: "Wheatley Hills",
    geoType: "MSOA",
    geoCode: "E02001553"
  },
  {
    en: "Cusworth",
    geoType: "MSOA",
    geoCode: "E02001554"
  },
  {
    en: "Armthorpe South",
    geoType: "MSOA",
    geoCode: "E02001555"
  },
  {
    en: "Intake",
    geoType: "MSOA",
    geoCode: "E02001556"
  },
  {
    en: "Belle Vue & Town Fields",
    geoType: "MSOA",
    geoCode: "E02001557"
  },
  {
    en: "Cadeby, Hickleton & Hampole",
    geoType: "MSOA",
    geoCode: "E02001558"
  },
  {
    en: "Sprotbrough",
    geoType: "MSOA",
    geoCode: "E02001559"
  },
  {
    en: "Central Doncaster & Hyde Park",
    geoType: "MSOA",
    geoCode: "E02001560"
  },
  {
    en: "Hexthorpe & Balby North",
    geoType: "MSOA",
    geoCode: "E02001561"
  },
  {
    en: "Cantley Park",
    geoType: "MSOA",
    geoCode: "E02001562"
  },
  {
    en: "Bessacarr Bawtry Road",
    geoType: "MSOA",
    geoCode: "E02001563"
  },
  {
    en: "Old Cantley, Auckley & Finningley",
    geoType: "MSOA",
    geoCode: "E02001564"
  },
  {
    en: "Bessacarr Grange & Lakeside",
    geoType: "MSOA",
    geoCode: "E02001565"
  },
  {
    en: "Balby Carr",
    geoType: "MSOA",
    geoCode: "E02001566"
  },
  {
    en: "Balby South",
    geoType: "MSOA",
    geoCode: "E02001567"
  },
  {
    en: "Mexborough East",
    geoType: "MSOA",
    geoCode: "E02001568"
  },
  {
    en: "Mexborough West",
    geoType: "MSOA",
    geoCode: "E02001569"
  },
  {
    en: "Conisbrough North",
    geoType: "MSOA",
    geoCode: "E02001570"
  },
  {
    en: "Warmsworth, Braithwell & Stainton",
    geoType: "MSOA",
    geoCode: "E02001571"
  },
  {
    en: "Edlington",
    geoType: "MSOA",
    geoCode: "E02001572"
  },
  {
    en: "Conisbrough South",
    geoType: "MSOA",
    geoCode: "E02001573"
  },
  {
    en: "Rossington",
    geoType: "MSOA",
    geoCode: "E02001574"
  },
  {
    en: "New Rossington",
    geoType: "MSOA",
    geoCode: "E02001575"
  },
  {
    en: "Bawtry, Austerfield & Hayfield",
    geoType: "MSOA",
    geoCode: "E02001576"
  },
  {
    en: "Tickhill & Wadworth",
    geoType: "MSOA",
    geoCode: "E02001577"
  },
  {
    en: "Brampton & West Melton",
    geoType: "MSOA",
    geoCode: "E02001578"
  },
  {
    en: "Wath upon Dearne",
    geoType: "MSOA",
    geoCode: "E02001579"
  },
  {
    en: "Swinton North",
    geoType: "MSOA",
    geoCode: "E02001580"
  },
  {
    en: "Swinton South",
    geoType: "MSOA",
    geoCode: "E02001581"
  },
  {
    en: "Rawmarsh North West",
    geoType: "MSOA",
    geoCode: "E02001582"
  },
  {
    en: "Rawmarsh North East",
    geoType: "MSOA",
    geoCode: "E02001583"
  },
  {
    en: "Thorpe Hesley",
    geoType: "MSOA",
    geoCode: "E02001584"
  },
  {
    en: "Rawmarsh South",
    geoType: "MSOA",
    geoCode: "E02001585"
  },
  {
    en: "Greasborough",
    geoType: "MSOA",
    geoCode: "E02001586"
  },
  {
    en: "Thrybergh & Hooton Roberts",
    geoType: "MSOA",
    geoCode: "E02001587"
  },
  {
    en: "Kimberworth Park",
    geoType: "MSOA",
    geoCode: "E02001588"
  },
  {
    en: "Ravenfield & Bramley North",
    geoType: "MSOA",
    geoCode: "E02001589"
  },
  {
    en: "East Herringthorpe",
    geoType: "MSOA",
    geoCode: "E02001590"
  },
  {
    en: "Eastwood & East Dene",
    geoType: "MSOA",
    geoCode: "E02001591"
  },
  {
    en: "Kimberworth",
    geoType: "MSOA",
    geoCode: "E02001592"
  },
  {
    en: "Masbrough & Bradgate",
    geoType: "MSOA",
    geoCode: "E02001593"
  },
  {
    en: "Rotherham Central",
    geoType: "MSOA",
    geoCode: "E02001594"
  },
  {
    en: "Maltby West & Hellaby",
    geoType: "MSOA",
    geoCode: "E02001595"
  },
  {
    en: "Wickersley North",
    geoType: "MSOA",
    geoCode: "E02001596"
  },
  {
    en: "Maltby East",
    geoType: "MSOA",
    geoCode: "E02001597"
  },
  {
    en: "Herringthorpe",
    geoType: "MSOA",
    geoCode: "E02001598"
  },
  {
    en: "Rotherham South",
    geoType: "MSOA",
    geoCode: "E02001600"
  },
  {
    en: "Brinsworth",
    geoType: "MSOA",
    geoCode: "E02001602"
  },
  {
    en: "Thurcroft",
    geoType: "MSOA",
    geoCode: "E02001603"
  },
  {
    en: "Catcliffe, Treeton & Waverley",
    geoType: "MSOA",
    geoCode: "E02001604"
  },
  {
    en: "Laughton & Throapham",
    geoType: "MSOA",
    geoCode: "E02001605"
  },
  {
    en: "Dinnington",
    geoType: "MSOA",
    geoCode: "E02001606"
  },
  {
    en: "Aston",
    geoType: "MSOA",
    geoCode: "E02001607"
  },
  {
    en: "Swallownest & Wales",
    geoType: "MSOA",
    geoCode: "E02001608"
  },
  {
    en: "Anston & Woodsetts",
    geoType: "MSOA",
    geoCode: "E02001609"
  },
  {
    en: "Kiveton, Todwick & Harthill",
    geoType: "MSOA",
    geoCode: "E02001610"
  },
  {
    en: "Stocksbridge",
    geoType: "MSOA",
    geoCode: "E02001611"
  },
  {
    en: "Deepcar & Bolsterstone",
    geoType: "MSOA",
    geoCode: "E02001612"
  },
  {
    en: "High Green & Burncross",
    geoType: "MSOA",
    geoCode: "E02001613"
  },
  {
    en: "Chapeltown",
    geoType: "MSOA",
    geoCode: "E02001614"
  },
  {
    en: "Grenoside & Ecclesfield North",
    geoType: "MSOA",
    geoCode: "E02001615"
  },
  {
    en: "Ecclesfield South",
    geoType: "MSOA",
    geoCode: "E02001616"
  },
  {
    en: "Shiregreen North",
    geoType: "MSOA",
    geoCode: "E02001617"
  },
  {
    en: "Oughtibridge & Bradfield",
    geoType: "MSOA",
    geoCode: "E02001618"
  },
  {
    en: "Parson Cross",
    geoType: "MSOA",
    geoCode: "E02001619"
  },
  {
    en: "Shiregreen South",
    geoType: "MSOA",
    geoCode: "E02001620"
  },
  {
    en: "Sheffield Lane Top & Longley Park",
    geoType: "MSOA",
    geoCode: "E02001621"
  },
  {
    en: "Southey Green West",
    geoType: "MSOA",
    geoCode: "E02001622"
  },
  {
    en: "Firth Park",
    geoType: "MSOA",
    geoCode: "E02001623"
  },
  {
    en: "Brightside & Wincobank",
    geoType: "MSOA",
    geoCode: "E02001624"
  },
  {
    en: "Southey Green East",
    geoType: "MSOA",
    geoCode: "E02001625"
  },
  {
    en: "Wadsley & Marlcliffe",
    geoType: "MSOA",
    geoCode: "E02001626"
  },
  {
    en: "Hillsborough, Owlerton & Wadsley Bridge",
    geoType: "MSOA",
    geoCode: "E02001627"
  },
  {
    en: "Tinsley & Carbrook",
    geoType: "MSOA",
    geoCode: "E02001628"
  },
  {
    en: "Shirecliffe & Parkwood Springs",
    geoType: "MSOA",
    geoCode: "E02001629"
  },
  {
    en: "Crabtree & Fir Vale",
    geoType: "MSOA",
    geoCode: "E02001630"
  },
  {
    en: "Malin Bridge & Wisewood",
    geoType: "MSOA",
    geoCode: "E02001631"
  },
  {
    en: "Burngreave & Grimesthorpe",
    geoType: "MSOA",
    geoCode: "E02001632"
  },
  {
    en: "Upper Stannington & Loxley",
    geoType: "MSOA",
    geoCode: "E02001633"
  },
  {
    en: "Walkley",
    geoType: "MSOA",
    geoCode: "E02001634"
  },
  {
    en: "Lower Stannington",
    geoType: "MSOA",
    geoCode: "E02001635"
  },
  {
    en: "Upperthorpe, Netherthorpe & Langsett",
    geoType: "MSOA",
    geoCode: "E02001636"
  },
  {
    en: "Darnall",
    geoType: "MSOA",
    geoCode: "E02001637"
  },
  {
    en: "Springvale & Steel Bank",
    geoType: "MSOA",
    geoCode: "E02001638"
  },
  {
    en: "Crookes",
    geoType: "MSOA",
    geoCode: "E02001639"
  },
  {
    en: "Broomhill & Lower Crookesmoor",
    geoType: "MSOA",
    geoCode: "E02001640"
  },
  {
    en: "Littledale & Handsworth North",
    geoType: "MSOA",
    geoCode: "E02001642"
  },
  {
    en: "Sandygate & Crosspool",
    geoType: "MSOA",
    geoCode: "E02001643"
  },
  {
    en: "Broomhall",
    geoType: "MSOA",
    geoCode: "E02001646"
  },
  {
    en: "Handsworth South",
    geoType: "MSOA",
    geoCode: "E02001647"
  },
  {
    en: "Endcliffe & Ranmoor",
    geoType: "MSOA",
    geoCode: "E02001648"
  },
  {
    en: "Woodthorpe",
    geoType: "MSOA",
    geoCode: "E02001649"
  },
  {
    en: "Sharrow",
    geoType: "MSOA",
    geoCode: "E02001650"
  },
  {
    en: "Fulwood & Lodge Moor",
    geoType: "MSOA",
    geoCode: "E02001651"
  },
  {
    en: "Highfield & Lowfield",
    geoType: "MSOA",
    geoCode: "E02001652"
  },
  {
    en: "Norfolk Park",
    geoType: "MSOA",
    geoCode: "E02001653"
  },
  {
    en: "Woodhouse Mill",
    geoType: "MSOA",
    geoCode: "E02001654"
  },
  {
    en: "Richmond & Stradbroke",
    geoType: "MSOA",
    geoCode: "E02001655"
  },
  {
    en: "Brincliffe & Sharrow Vale",
    geoType: "MSOA",
    geoCode: "E02001656"
  },
  {
    en: "Ecclesall & Greystones",
    geoType: "MSOA",
    geoCode: "E02001657"
  },
  {
    en: "Arbourthorne",
    geoType: "MSOA",
    geoCode: "E02001658"
  },
  {
    en: "Woodhouse West",
    geoType: "MSOA",
    geoCode: "E02001659"
  },
  {
    en: "Nether Edge",
    geoType: "MSOA",
    geoCode: "E02001660"
  },
  {
    en: "Heeley & Newfield Green",
    geoType: "MSOA",
    geoCode: "E02001661"
  },
  {
    en: "Intake",
    geoType: "MSOA",
    geoCode: "E02001662"
  },
  {
    en: "Meersbrook",
    geoType: "MSOA",
    geoCode: "E02001663"
  },
  {
    en: "Gleadless",
    geoType: "MSOA",
    geoCode: "E02001664"
  },
  {
    en: "Bents Green & Millhouses",
    geoType: "MSOA",
    geoCode: "E02001665"
  },
  {
    en: "Beighton",
    geoType: "MSOA",
    geoCode: "E02001666"
  },
  {
    en: "Woodseats",
    geoType: "MSOA",
    geoCode: "E02001669"
  },
  {
    en: "Herdings & Gleadless Valley",
    geoType: "MSOA",
    geoCode: "E02001670"
  },
  {
    en: "Hackenthorpe",
    geoType: "MSOA",
    geoCode: "E02001671"
  },
  {
    en: "Charnock & Basegreen",
    geoType: "MSOA",
    geoCode: "E02001672"
  },
  {
    en: "Sothall",
    geoType: "MSOA",
    geoCode: "E02001673"
  },
  {
    en: "Norton & Norton Lees",
    geoType: "MSOA",
    geoCode: "E02001674"
  },
  {
    en: "Westfield & Waterthorpe",
    geoType: "MSOA",
    geoCode: "E02001675"
  },
  {
    en: "Beauchief",
    geoType: "MSOA",
    geoCode: "E02001676"
  },
  {
    en: "Dore & Whirlow",
    geoType: "MSOA",
    geoCode: "E02001678"
  },
  {
    en: "Greenhill & Lowedges",
    geoType: "MSOA",
    geoCode: "E02001679"
  },
  {
    en: "Batemoor & Jordanthorpe",
    geoType: "MSOA",
    geoCode: "E02001680"
  },
  {
    en: "Totley & Bradway",
    geoType: "MSOA",
    geoCode: "E02001681"
  },
  {
    en: "Ryton",
    geoType: "MSOA",
    geoCode: "E02001682"
  },
  {
    en: "Crawcrook & Greenside",
    geoType: "MSOA",
    geoCode: "E02001683"
  },
  {
    en: "Pelaw, Felling Shore & Bill Quay",
    geoType: "MSOA",
    geoCode: "E02001684"
  },
  {
    en: "Blaydon South",
    geoType: "MSOA",
    geoCode: "E02001685"
  },
  {
    en: "Blaydon North & Winlaton Mill",
    geoType: "MSOA",
    geoCode: "E02001686"
  },
  {
    en: "Dunston & Teams",
    geoType: "MSOA",
    geoCode: "E02001688"
  },
  {
    en: "Bensham North",
    geoType: "MSOA",
    geoCode: "E02001689"
  },
  {
    en: "Swalwell",
    geoType: "MSOA",
    geoCode: "E02001690"
  },
  {
    en: "Bensham South & Saltwell",
    geoType: "MSOA",
    geoCode: "E02001691"
  },
  {
    en: "Mount Pleasant & Deckham East",
    geoType: "MSOA",
    geoCode: "E02001692"
  },
  {
    en: "Felling South",
    geoType: "MSOA",
    geoCode: "E02001693"
  },
  {
    en: "Dunston Hill",
    geoType: "MSOA",
    geoCode: "E02001694"
  },
  {
    en: "Wardley",
    geoType: "MSOA",
    geoCode: "E02001695"
  },
  {
    en: "Heworth",
    geoType: "MSOA",
    geoCode: "E02001696"
  },
  {
    en: "Low Fell East",
    geoType: "MSOA",
    geoCode: "E02001697"
  },
  {
    en: "Whickham",
    geoType: "MSOA",
    geoCode: "E02001698"
  },
  {
    en: "Windy Nook & Whitehills",
    geoType: "MSOA",
    geoCode: "E02001699"
  },
  {
    en: "Sunniside & Lobley Hill",
    geoType: "MSOA",
    geoCode: "E02001700"
  },
  {
    en: "Low Fell West",
    geoType: "MSOA",
    geoCode: "E02001701"
  },
  {
    en: "Beacon Lough & Wrekenton",
    geoType: "MSOA",
    geoCode: "E02001702"
  },
  {
    en: "Rowlands Gill & Lockhaugh",
    geoType: "MSOA",
    geoCode: "E02001703"
  },
  {
    en: "Easedale Gardens",
    geoType: "MSOA",
    geoCode: "E02001704"
  },
  {
    en: "Birtley North & Kibblesworth",
    geoType: "MSOA",
    geoCode: "E02001706"
  },
  {
    en: "Birtley South",
    geoType: "MSOA",
    geoCode: "E02001707"
  },
  {
    en: "North Gosforth",
    geoType: "MSOA",
    geoCode: "E02001709"
  },
  {
    en: "Fawdon South",
    geoType: "MSOA",
    geoCode: "E02001710"
  },
  {
    en: "Woolsington & Airport",
    geoType: "MSOA",
    geoCode: "E02001711"
  },
  {
    en: "South Gosforth",
    geoType: "MSOA",
    geoCode: "E02001712"
  },
  {
    en: "Coxlodge & West Gosforth",
    geoType: "MSOA",
    geoCode: "E02001713"
  },
  {
    en: "High Heaton",
    geoType: "MSOA",
    geoCode: "E02001714"
  },
  {
    en: "Kenton",
    geoType: "MSOA",
    geoCode: "E02001715"
  },
  {
    en: "Blakelaw",
    geoType: "MSOA",
    geoCode: "E02001718"
  },
  {
    en: "North Heaton",
    geoType: "MSOA",
    geoCode: "E02001719"
  },
  {
    en: "North Jesmond",
    geoType: "MSOA",
    geoCode: "E02001720"
  },
  {
    en: "Throckley & Newburn",
    geoType: "MSOA",
    geoCode: "E02001721"
  },
  {
    en: "Denton",
    geoType: "MSOA",
    geoCode: "E02001722"
  },
  {
    en: "Cowgate",
    geoType: "MSOA",
    geoCode: "E02001723"
  },
  {
    en: "South Jesmond & Sandyford",
    geoType: "MSOA",
    geoCode: "E02001724"
  },
  {
    en: "Heaton South & Byker North",
    geoType: "MSOA",
    geoCode: "E02001725"
  },
  {
    en: "Fenham",
    geoType: "MSOA",
    geoCode: "E02001726"
  },
  {
    en: "Walkergate",
    geoType: "MSOA",
    geoCode: "E02001727"
  },
  {
    en: "Lemington",
    geoType: "MSOA",
    geoCode: "E02001728"
  },
  {
    en: "Nunsmoor",
    geoType: "MSOA",
    geoCode: "E02001729"
  },
  {
    en: "Scotswood",
    geoType: "MSOA",
    geoCode: "E02001732"
  },
  {
    en: "Benwell",
    geoType: "MSOA",
    geoCode: "E02001734"
  },
  {
    en: "Walker North",
    geoType: "MSOA",
    geoCode: "E02001735"
  },
  {
    en: "Walker South",
    geoType: "MSOA",
    geoCode: "E02001737"
  },
  {
    en: "Whitley Bay North",
    geoType: "MSOA",
    geoCode: "E02001738"
  },
  {
    en: "Fordley",
    geoType: "MSOA",
    geoCode: "E02001739"
  },
  {
    en: "Whitley Sands",
    geoType: "MSOA",
    geoCode: "E02001740"
  },
  {
    en: "Wideopen & Seaton Burn",
    geoType: "MSOA",
    geoCode: "E02001741"
  },
  {
    en: "West Monkseaton",
    geoType: "MSOA",
    geoCode: "E02001742"
  },
  {
    en: "Whitley Bay Promenade",
    geoType: "MSOA",
    geoCode: "E02001743"
  },
  {
    en: "Shiremoor North & South Wellfield",
    geoType: "MSOA",
    geoCode: "E02001744"
  },
  {
    en: "Killingworth West & Camperdown",
    geoType: "MSOA",
    geoCode: "E02001745"
  },
  {
    en: "Monkseaton",
    geoType: "MSOA",
    geoCode: "E02001746"
  },
  {
    en: "Cullercoats",
    geoType: "MSOA",
    geoCode: "E02001747"
  },
  {
    en: "Shiremoor South & West Allotment",
    geoType: "MSOA",
    geoCode: "E02001748"
  },
  {
    en: "Killingworth East",
    geoType: "MSOA",
    geoCode: "E02001749"
  },
  {
    en: "Preston Grange",
    geoType: "MSOA",
    geoCode: "E02001750"
  },
  {
    en: "Forest Hall & West Moor",
    geoType: "MSOA",
    geoCode: "E02001751"
  },
  {
    en: "New York",
    geoType: "MSOA",
    geoCode: "E02001752"
  },
  {
    en: "Tynemouth Priory",
    geoType: "MSOA",
    geoCode: "E02001753"
  },
  {
    en: "Tynemouth West",
    geoType: "MSOA",
    geoCode: "E02001754"
  },
  {
    en: "Holystone & Benton",
    geoType: "MSOA",
    geoCode: "E02001755"
  },
  {
    en: "Longbenton",
    geoType: "MSOA",
    geoCode: "E02001756"
  },
  {
    en: "Preston Billy Mill",
    geoType: "MSOA",
    geoCode: "E02001757"
  },
  {
    en: "Battle Hill East",
    geoType: "MSOA",
    geoCode: "E02001758"
  },
  {
    en: "North Shields",
    geoType: "MSOA",
    geoCode: "E02001759"
  },
  {
    en: "Chirton",
    geoType: "MSOA",
    geoCode: "E02001760"
  },
  {
    en: "Battle Hill West",
    geoType: "MSOA",
    geoCode: "E02001761"
  },
  {
    en: "East Benton",
    geoType: "MSOA",
    geoCode: "E02001762"
  },
  {
    en: "Howdon",
    geoType: "MSOA",
    geoCode: "E02001763"
  },
  {
    en: "Percy Main",
    geoType: "MSOA",
    geoCode: "E02001764"
  },
  {
    en: "Willington Quay",
    geoType: "MSOA",
    geoCode: "E02001765"
  },
  {
    en: "Wallsend East",
    geoType: "MSOA",
    geoCode: "E02001766"
  },
  {
    en: "Wallsend West",
    geoType: "MSOA",
    geoCode: "E02001767"
  },
  {
    en: "South Shields East",
    geoType: "MSOA",
    geoCode: "E02001768"
  },
  {
    en: "South Shields West",
    geoType: "MSOA",
    geoCode: "E02001769"
  },
  {
    en: "Westoe",
    geoType: "MSOA",
    geoCode: "E02001770"
  },
  {
    en: "Horsley Hill",
    geoType: "MSOA",
    geoCode: "E02001771"
  },
  {
    en: "West Park",
    geoType: "MSOA",
    geoCode: "E02001772"
  },
  {
    en: "Harton West",
    geoType: "MSOA",
    geoCode: "E02001773"
  },
  {
    en: "Jarrow Town",
    geoType: "MSOA",
    geoCode: "E02001774"
  },
  {
    en: "Harton East",
    geoType: "MSOA",
    geoCode: "E02001775"
  },
  {
    en: "Hebburn North",
    geoType: "MSOA",
    geoCode: "E02001776"
  },
  {
    en: "Hebburn West",
    geoType: "MSOA",
    geoCode: "E02001777"
  },
  {
    en: "West Harton",
    geoType: "MSOA",
    geoCode: "E02001778"
  },
  {
    en: "Simonside",
    geoType: "MSOA",
    geoCode: "E02001779"
  },
  {
    en: "Cleadon Park",
    geoType: "MSOA",
    geoCode: "E02001780"
  },
  {
    en: "Brockley Whins",
    geoType: "MSOA",
    geoCode: "E02001781"
  },
  {
    en: "Hebburn South",
    geoType: "MSOA",
    geoCode: "E02001782"
  },
  {
    en: "Biddick Hill",
    geoType: "MSOA",
    geoCode: "E02001783"
  },
  {
    en: "Primrose",
    geoType: "MSOA",
    geoCode: "E02001784"
  },
  {
    en: "Whitburn & Marsden",
    geoType: "MSOA",
    geoCode: "E02001785"
  },
  {
    en: "Whiteleas",
    geoType: "MSOA",
    geoCode: "E02001786"
  },
  {
    en: "Fellgate & Hedworth",
    geoType: "MSOA",
    geoCode: "E02001787"
  },
  {
    en: "Boldon Colliery",
    geoType: "MSOA",
    geoCode: "E02001788"
  },
  {
    en: "Cleadon & East Boldon",
    geoType: "MSOA",
    geoCode: "E02001789"
  },
  {
    en: "West Boldon",
    geoType: "MSOA",
    geoCode: "E02001790"
  },
  {
    en: "Fulwell",
    geoType: "MSOA",
    geoCode: "E02001791"
  },
  {
    en: "Seaburn",
    geoType: "MSOA",
    geoCode: "E02001792"
  },
  {
    en: "Town End Farm",
    geoType: "MSOA",
    geoCode: "E02001793"
  },
  {
    en: "Hylton Red House & Marley Pots",
    geoType: "MSOA",
    geoCode: "E02001794"
  },
  {
    en: "Southwick",
    geoType: "MSOA",
    geoCode: "E02001795"
  },
  {
    en: "Monkwearmouth",
    geoType: "MSOA",
    geoCode: "E02001796"
  },
  {
    en: "Springwell & Usworth",
    geoType: "MSOA",
    geoCode: "E02001797"
  },
  {
    en: "North Hylton",
    geoType: "MSOA",
    geoCode: "E02001798"
  },
  {
    en: "Concord and Sulgrave",
    geoType: "MSOA",
    geoCode: "E02001799"
  },
  {
    en: "Albany and Blackfell",
    geoType: "MSOA",
    geoCode: "E02001800"
  },
  {
    en: "Millfield",
    geoType: "MSOA",
    geoCode: "E02001801"
  },
  {
    en: "Pallion North",
    geoType: "MSOA",
    geoCode: "E02001802"
  },
  {
    en: "Sunderland Central & Deptford",
    geoType: "MSOA",
    geoCode: "E02001803"
  },
  {
    en: "South Hylton",
    geoType: "MSOA",
    geoCode: "E02001804"
  },
  {
    en: "Pallion South & High Barnes",
    geoType: "MSOA",
    geoCode: "E02001805"
  },
  {
    en: "Hendon & Docks",
    geoType: "MSOA",
    geoCode: "E02001806"
  },
  {
    en: "Columbia, Barmston & Teal Farm",
    geoType: "MSOA",
    geoCode: "E02001807"
  },
  {
    en: "Barnes Park",
    geoType: "MSOA",
    geoCode: "E02001808"
  },
  {
    en: "Washington Town Centre & Biddick",
    geoType: "MSOA",
    geoCode: "E02001809"
  },
  {
    en: "Oxclose and Lambton",
    geoType: "MSOA",
    geoCode: "E02001810"
  },
  {
    en: "Pennywell and Grindon",
    geoType: "MSOA",
    geoCode: "E02001811"
  },
  {
    en: "Hill View & Tunstall",
    geoType: "MSOA",
    geoCode: "E02001812"
  },
  {
    en: "Thorney Close & Plains Farm",
    geoType: "MSOA",
    geoCode: "E02001813"
  },
  {
    en: "Grangetown",
    geoType: "MSOA",
    geoCode: "E02001814"
  },
  {
    en: "Harraton, Rickleton & Fatfield",
    geoType: "MSOA",
    geoCode: "E02001815"
  },
  {
    en: "Lakeside & Farrington",
    geoType: "MSOA",
    geoCode: "E02001816"
  },
  {
    en: "Silksworth",
    geoType: "MSOA",
    geoCode: "E02001817"
  },
  {
    en: "Ryhope",
    geoType: "MSOA",
    geoCode: "E02001818"
  },
  {
    en: "Herrington & Doxford",
    geoType: "MSOA",
    geoCode: "E02001819"
  },
  {
    en: "Shiney Row",
    geoType: "MSOA",
    geoCode: "E02001820"
  },
  {
    en: "Hall Farm",
    geoType: "MSOA",
    geoCode: "E02001821"
  },
  {
    en: "Newbottle & Penshaw",
    geoType: "MSOA",
    geoCode: "E02001822"
  },
  {
    en: "Houghton West",
    geoType: "MSOA",
    geoCode: "E02001823"
  },
  {
    en: "Houghton Town",
    geoType: "MSOA",
    geoCode: "E02001824"
  },
  {
    en: "Hetton-le-Hole North",
    geoType: "MSOA",
    geoCode: "E02001825"
  },
  {
    en: "Hetton-le-Hole South",
    geoType: "MSOA",
    geoCode: "E02001826"
  },
  {
    en: "Hill Hook",
    geoType: "MSOA",
    geoCode: "E02001827"
  },
  {
    en: "Four Oaks",
    geoType: "MSOA",
    geoCode: "E02001828"
  },
  {
    en: "Little Sutton & Roughley",
    geoType: "MSOA",
    geoCode: "E02001829"
  },
  {
    en: "Sutton Coldfield North & Park",
    geoType: "MSOA",
    geoCode: "E02001830"
  },
  {
    en: "Reddicap Heath",
    geoType: "MSOA",
    geoCode: "E02001831"
  },
  {
    en: "Rectory Park & New Hall Valley",
    geoType: "MSOA",
    geoCode: "E02001832"
  },
  {
    en: "Kingstanding North",
    geoType: "MSOA",
    geoCode: "E02001833"
  },
  {
    en: "Old Oscott",
    geoType: "MSOA",
    geoCode: "E02001834"
  },
  {
    en: "Sutton Coldfield South & Central",
    geoType: "MSOA",
    geoCode: "E02001835"
  },
  {
    en: "New Oscott",
    geoType: "MSOA",
    geoCode: "E02001836"
  },
  {
    en: "Kingstanding South East",
    geoType: "MSOA",
    geoCode: "E02001837"
  },
  {
    en: "Walmley",
    geoType: "MSOA",
    geoCode: "E02001838"
  },
  {
    en: "Queslett",
    geoType: "MSOA",
    geoCode: "E02001839"
  },
  {
    en: "Perry Common - College Road",
    geoType: "MSOA",
    geoCode: "E02001840"
  },
  {
    en: "Wylde Green",
    geoType: "MSOA",
    geoCode: "E02001841"
  },
  {
    en: "Perry Beeches West",
    geoType: "MSOA",
    geoCode: "E02001842"
  },
  {
    en: "Kingstanding South West",
    geoType: "MSOA",
    geoCode: "E02001843"
  },
  {
    en: "Chester Road",
    geoType: "MSOA",
    geoCode: "E02001844"
  },
  {
    en: "Perry Beeches East",
    geoType: "MSOA",
    geoCode: "E02001845"
  },
  {
    en: "Short Heath",
    geoType: "MSOA",
    geoCode: "E02001846"
  },
  {
    en: "Minworth",
    geoType: "MSOA",
    geoCode: "E02001847"
  },
  {
    en: "Upper Witton",
    geoType: "MSOA",
    geoCode: "E02001848"
  },
  {
    en: "Erdington Town",
    geoType: "MSOA",
    geoCode: "E02001849"
  },
  {
    en: "Perry Barr & South Hamstead",
    geoType: "MSOA",
    geoCode: "E02001850"
  },
  {
    en: "Pype Hayes Park",
    geoType: "MSOA",
    geoCode: "E02001851"
  },
  {
    en: "Stockland Green - Marsh Hill",
    geoType: "MSOA",
    geoCode: "E02001852"
  },
  {
    en: "Castle Vale",
    geoType: "MSOA",
    geoCode: "E02001855"
  },
  {
    en: "Brookvale",
    geoType: "MSOA",
    geoCode: "E02001856"
  },
  {
    en: "Gravelly Hill & South Erdington",
    geoType: "MSOA",
    geoCode: "E02001857"
  },
  {
    en: "Handsworth East",
    geoType: "MSOA",
    geoCode: "E02001858"
  },
  {
    en: "Birchfield East",
    geoType: "MSOA",
    geoCode: "E02001859"
  },
  {
    en: "Handsworth West",
    geoType: "MSOA",
    geoCode: "E02001860"
  },
  {
    en: "Birchfield West",
    geoType: "MSOA",
    geoCode: "E02001861"
  },
  {
    en: "Middlemore",
    geoType: "MSOA",
    geoCode: "E02001862"
  },
  {
    en: "Aston Park",
    geoType: "MSOA",
    geoCode: "E02001863"
  },
  {
    en: "Handsworth South",
    geoType: "MSOA",
    geoCode: "E02001865"
  },
  {
    en: "Lozells West",
    geoType: "MSOA",
    geoCode: "E02001866"
  },
  {
    en: "Lozells East",
    geoType: "MSOA",
    geoCode: "E02001867"
  },
  {
    en: "Hodge Hill",
    geoType: "MSOA",
    geoCode: "E02001868"
  },
  {
    en: "Nechells",
    geoType: "MSOA",
    geoCode: "E02001869"
  },
  {
    en: "Ward End & Bromford West",
    geoType: "MSOA",
    geoCode: "E02001870"
  },
  {
    en: "Buckland End",
    geoType: "MSOA",
    geoCode: "E02001871"
  },
  {
    en: "Shard End & Kingfisher",
    geoType: "MSOA",
    geoCode: "E02001872"
  },
  {
    en: "Winson Green & Gib Heath",
    geoType: "MSOA",
    geoCode: "E02001873"
  },
  {
    en: "Washwood Heath",
    geoType: "MSOA",
    geoCode: "E02001874"
  },
  {
    en: "Hockley & Jewellery Quarter",
    geoType: "MSOA",
    geoCode: "E02001875"
  },
  {
    en: "North Central & Dartmouth Circus",
    geoType: "MSOA",
    geoCode: "E02001876"
  },
  {
    en: "Saltley East",
    geoType: "MSOA",
    geoCode: "E02001877"
  },
  {
    en: "Saltley West",
    geoType: "MSOA",
    geoCode: "E02001878"
  },
  {
    en: "Summerfield",
    geoType: "MSOA",
    geoCode: "E02001879"
  },
  {
    en: "Glebe Farm",
    geoType: "MSOA",
    geoCode: "E02001880"
  },
  {
    en: "Belchers Lane & Eastfield Road",
    geoType: "MSOA",
    geoCode: "E02001881"
  },
  {
    en: "Stechford",
    geoType: "MSOA",
    geoCode: "E02001882"
  },
  {
    en: "Kitts Green",
    geoType: "MSOA",
    geoCode: "E02001883"
  },
  {
    en: "Bordesley Green North",
    geoType: "MSOA",
    geoCode: "E02001884"
  },
  {
    en: "Rotton Park",
    geoType: "MSOA",
    geoCode: "E02001886"
  },
  {
    en: "Kent's Moat",
    geoType: "MSOA",
    geoCode: "E02001888"
  },
  {
    en: "Little Bromwich",
    geoType: "MSOA",
    geoCode: "E02001889"
  },
  {
    en: "Edgbaston North",
    geoType: "MSOA",
    geoCode: "E02001890"
  },
  {
    en: "Yardley Fields",
    geoType: "MSOA",
    geoCode: "E02001892"
  },
  {
    en: "Yardley",
    geoType: "MSOA",
    geoCode: "E02001893"
  },
  {
    en: "Sheldon North",
    geoType: "MSOA",
    geoCode: "E02001895"
  },
  {
    en: "Small Heath Park",
    geoType: "MSOA",
    geoCode: "E02001896"
  },
  {
    en: "Sparkbrook North",
    geoType: "MSOA",
    geoCode: "E02001897"
  },
  {
    en: "Lyndon Green",
    geoType: "MSOA",
    geoCode: "E02001898"
  },
  {
    en: "Harborne West",
    geoType: "MSOA",
    geoCode: "E02001899"
  },
  {
    en: "Five Ways South & Calthorpe Park",
    geoType: "MSOA",
    geoCode: "E02001900"
  },
  {
    en: "Harborne East",
    geoType: "MSOA",
    geoCode: "E02001901"
  },
  {
    en: "Yardley South",
    geoType: "MSOA",
    geoCode: "E02001902"
  },
  {
    en: "Sparkbrook South",
    geoType: "MSOA",
    geoCode: "E02001903"
  },
  {
    en: "Hay Mills & Tyseley",
    geoType: "MSOA",
    geoCode: "E02001904"
  },
  {
    en: "Edgbaston South & University",
    geoType: "MSOA",
    geoCode: "E02001905"
  },
  {
    en: "Quinton Ridgacre",
    geoType: "MSOA",
    geoCode: "E02001906"
  },
  {
    en: "Sheldon South",
    geoType: "MSOA",
    geoCode: "E02001907"
  },
  {
    en: "Sparkhill North",
    geoType: "MSOA",
    geoCode: "E02001908"
  },
  {
    en: "Balsall Heath East",
    geoType: "MSOA",
    geoCode: "E02001909"
  },
  {
    en: "Balsall Heath West & Kingswood Road",
    geoType: "MSOA",
    geoCode: "E02001910"
  },
  {
    en: "Quinton East",
    geoType: "MSOA",
    geoCode: "E02001911"
  },
  {
    en: "Metchley",
    geoType: "MSOA",
    geoCode: "E02001913"
  },
  {
    en: "Moor Green & Cannon Hill",
    geoType: "MSOA",
    geoCode: "E02001914"
  },
  {
    en: "Acocks Green East",
    geoType: "MSOA",
    geoCode: "E02001915"
  },
  {
    en: "Acocks Green West",
    geoType: "MSOA",
    geoCode: "E02001916"
  },
  {
    en: "Moseley Village",
    geoType: "MSOA",
    geoCode: "E02001918"
  },
  {
    en: "Moseley",
    geoType: "MSOA",
    geoCode: "E02001919"
  },
  {
    en: "Woodgate Valley",
    geoType: "MSOA",
    geoCode: "E02001920"
  },
  {
    en: "California",
    geoType: "MSOA",
    geoCode: "E02001921"
  },
  {
    en: "Selly Oak",
    geoType: "MSOA",
    geoCode: "E02001922"
  },
  {
    en: "Springfield & Hall Green West",
    geoType: "MSOA",
    geoCode: "E02001923"
  },
  {
    en: "Hall Green East",
    geoType: "MSOA",
    geoCode: "E02001924"
  },
  {
    en: "Selly Oak Park & Lodge Hill",
    geoType: "MSOA",
    geoCode: "E02001925"
  },
  {
    en: "Stirchley North & Selly Park",
    geoType: "MSOA",
    geoCode: "E02001926"
  },
  {
    en: "Weoley Castle",
    geoType: "MSOA",
    geoCode: "E02001927"
  },
  {
    en: "Woodgate",
    geoType: "MSOA",
    geoCode: "E02001928"
  },
  {
    en: "Fox Hollies",
    geoType: "MSOA",
    geoCode: "E02001929"
  },
  {
    en: "Kings Heath",
    geoType: "MSOA",
    geoCode: "E02001930"
  },
  {
    en: "Wake Green East & Moseley Bog",
    geoType: "MSOA",
    geoCode: "E02001931"
  },
  {
    en: "Bartley Green & Shenley Fields",
    geoType: "MSOA",
    geoCode: "E02001932"
  },
  {
    en: "Kings Heath Park & Stirchley East",
    geoType: "MSOA",
    geoCode: "E02001933"
  },
  {
    en: "Hall Green Central",
    geoType: "MSOA",
    geoCode: "E02001934"
  },
  {
    en: "Shenley Lane",
    geoType: "MSOA",
    geoCode: "E02001935"
  },
  {
    en: "Brandwood North",
    geoType: "MSOA",
    geoCode: "E02001936"
  },
  {
    en: "Billesley Common",
    geoType: "MSOA",
    geoCode: "E02001937"
  },
  {
    en: "Bournville East & Stirchley West",
    geoType: "MSOA",
    geoCode: "E02001938"
  },
  {
    en: "Bournville West",
    geoType: "MSOA",
    geoCode: "E02001939"
  },
  {
    en: "Yardley Wood West",
    geoType: "MSOA",
    geoCode: "E02001941"
  },
  {
    en: "Cotteridge",
    geoType: "MSOA",
    geoCode: "E02001942"
  },
  {
    en: "Brandwood East",
    geoType: "MSOA",
    geoCode: "E02001943"
  },
  {
    en: "Brandwood End",
    geoType: "MSOA",
    geoCode: "E02001944"
  },
  {
    en: "Allens Cross",
    geoType: "MSOA",
    geoCode: "E02001945"
  },
  {
    en: "Northfield Victoria Common",
    geoType: "MSOA",
    geoCode: "E02001946"
  },
  {
    en: "Druids Heath",
    geoType: "MSOA",
    geoCode: "E02001947"
  },
  {
    en: "Highter's Heath & Maypole",
    geoType: "MSOA",
    geoCode: "E02001948"
  },
  {
    en: "Lifford & Walkers Heath",
    geoType: "MSOA",
    geoCode: "E02001949"
  },
  {
    en: "Longbridge North",
    geoType: "MSOA",
    geoCode: "E02001950"
  },
  {
    en: "Frankley",
    geoType: "MSOA",
    geoCode: "E02001951"
  },
  {
    en: "Turves Green",
    geoType: "MSOA",
    geoCode: "E02001952"
  },
  {
    en: "King's Norton",
    geoType: "MSOA",
    geoCode: "E02001953"
  },
  {
    en: "Hawkesley",
    geoType: "MSOA",
    geoCode: "E02001954"
  },
  {
    en: "Longbridge South",
    geoType: "MSOA",
    geoCode: "E02001955"
  },
  {
    en: "Rubery East",
    geoType: "MSOA",
    geoCode: "E02001956"
  },
  {
    en: "West Heath",
    geoType: "MSOA",
    geoCode: "E02001957"
  },
  {
    en: "Longford",
    geoType: "MSOA",
    geoCode: "E02001958"
  },
  {
    en: "Keresley",
    geoType: "MSOA",
    geoCode: "E02001959"
  },
  {
    en: "Bell Green",
    geoType: "MSOA",
    geoCode: "E02001961"
  },
  {
    en: "Little Heath",
    geoType: "MSOA",
    geoCode: "E02001962"
  },
  {
    en: "Whitmore Park",
    geoType: "MSOA",
    geoCode: "E02001963"
  },
  {
    en: "Henley Green & Wood End",
    geoType: "MSOA",
    geoCode: "E02001964"
  },
  {
    en: "Walsgrave & Woodway Park",
    geoType: "MSOA",
    geoCode: "E02001965"
  },
  {
    en: "Foleshill West",
    geoType: "MSOA",
    geoCode: "E02001966"
  },
  {
    en: "Brownshill Green",
    geoType: "MSOA",
    geoCode: "E02001967"
  },
  {
    en: "Radford East",
    geoType: "MSOA",
    geoCode: "E02001968"
  },
  {
    en: "Radford West",
    geoType: "MSOA",
    geoCode: "E02001969"
  },
  {
    en: "Wyken Croft",
    geoType: "MSOA",
    geoCode: "E02001970"
  },
  {
    en: "Coundon",
    geoType: "MSOA",
    geoCode: "E02001971"
  },
  {
    en: "Foleshill East",
    geoType: "MSOA",
    geoCode: "E02001972"
  },
  {
    en: "Stoke Heath",
    geoType: "MSOA",
    geoCode: "E02001973"
  },
  {
    en: "Sherbourne",
    geoType: "MSOA",
    geoCode: "E02001974"
  },
  {
    en: "Ravensdale",
    geoType: "MSOA",
    geoCode: "E02001975"
  },
  {
    en: "Clifford Park",
    geoType: "MSOA",
    geoCode: "E02001976"
  },
  {
    en: "Naul's Mill & Bishopsgate Green",
    geoType: "MSOA",
    geoCode: "E02001977"
  },
  {
    en: "Barras Heath",
    geoType: "MSOA",
    geoCode: "E02001978"
  },
  {
    en: "Allesley Park",
    geoType: "MSOA",
    geoCode: "E02001979"
  },
  {
    en: "Allesley Green & Lower Eastern Green",
    geoType: "MSOA",
    geoCode: "E02001980"
  },
  {
    en: "Hillfields",
    geoType: "MSOA",
    geoCode: "E02001981"
  },
  {
    en: "Eastern Green & Tanyard Farm",
    geoType: "MSOA",
    geoCode: "E02001982"
  },
  {
    en: "Whoberley",
    geoType: "MSOA",
    geoCode: "E02001983"
  },
  {
    en: "Copsewood",
    geoType: "MSOA",
    geoCode: "E02001984"
  },
  {
    en: "Lower Stoke & Gosford Park",
    geoType: "MSOA",
    geoCode: "E02001985"
  },
  {
    en: "Tile Hill",
    geoType: "MSOA",
    geoCode: "E02001986"
  },
  {
    en: "Chapelfields",
    geoType: "MSOA",
    geoCode: "E02001987"
  },
  {
    en: "Central Coventry",
    geoType: "MSOA",
    geoCode: "E02001988"
  },
  {
    en: "Earl Place & Lime Tree Park",
    geoType: "MSOA",
    geoCode: "E02001989"
  },
  {
    en: "Binley",
    geoType: "MSOA",
    geoCode: "E02001990"
  },
  {
    en: "Earlsdon & Canley Gardens",
    geoType: "MSOA",
    geoCode: "E02001991"
  },
  {
    en: "Ernesford Grange & Stoke Aldermoor",
    geoType: "MSOA",
    geoCode: "E02001992"
  },
  {
    en: "Canley & Westwood Heath",
    geoType: "MSOA",
    geoCode: "E02001993"
  },
  {
    en: "Cheylesmore Daventry Road",
    geoType: "MSOA",
    geoCode: "E02001994"
  },
  {
    en: "Whitley & Tollbar End",
    geoType: "MSOA",
    geoCode: "E02001995"
  },
  {
    en: "Willenhall",
    geoType: "MSOA",
    geoCode: "E02001996"
  },
  {
    en: "Stivichall & Finham",
    geoType: "MSOA",
    geoCode: "E02001997"
  },
  {
    en: "Finham Park",
    geoType: "MSOA",
    geoCode: "E02001998"
  },
  {
    en: "Cannon Park & University",
    geoType: "MSOA",
    geoCode: "E02001999"
  },
  {
    en: "Coseley Wallbrook",
    geoType: "MSOA",
    geoCode: "E02002000"
  },
  {
    en: "Sedgley East",
    geoType: "MSOA",
    geoCode: "E02002001"
  },
  {
    en: "Sedgley West",
    geoType: "MSOA",
    geoCode: "E02002002"
  },
  {
    en: "West Coseley",
    geoType: "MSOA",
    geoCode: "E02002003"
  },
  {
    en: "Woodsetton",
    geoType: "MSOA",
    geoCode: "E02002004"
  },
  {
    en: "Dudley Priory & Wrens Nest",
    geoType: "MSOA",
    geoCode: "E02002005"
  },
  {
    en: "Upper Gornal & Ruiton",
    geoType: "MSOA",
    geoCode: "E02002006"
  },
  {
    en: "Lower Gornal & The Straits",
    geoType: "MSOA",
    geoCode: "E02002007"
  },
  {
    en: "Dibdale",
    geoType: "MSOA",
    geoCode: "E02002008"
  },
  {
    en: "Kates Hill",
    geoType: "MSOA",
    geoCode: "E02002009"
  },
  {
    en: "New Dock & Eve Hill",
    geoType: "MSOA",
    geoCode: "E02002010"
  },
  {
    en: "Kingswinford North",
    geoType: "MSOA",
    geoCode: "E02002011"
  },
  {
    en: "Russell's Hall",
    geoType: "MSOA",
    geoCode: "E02002012"
  },
  {
    en: "Wall Heath",
    geoType: "MSOA",
    geoCode: "E02002013"
  },
  {
    en: "Dixons Green",
    geoType: "MSOA",
    geoCode: "E02002014"
  },
  {
    en: "Pensett & Kingswinford East",
    geoType: "MSOA",
    geoCode: "E02002015"
  },
  {
    en: "Brockmoor & Woodside",
    geoType: "MSOA",
    geoCode: "E02002016"
  },
  {
    en: "Netherton",
    geoType: "MSOA",
    geoCode: "E02002017"
  },
  {
    en: "Kingswinford South",
    geoType: "MSOA",
    geoCode: "E02002018"
  },
  {
    en: "Dudley Wood & Saltwells",
    geoType: "MSOA",
    geoCode: "E02002019"
  },
  {
    en: "Wordsley & Buckpool",
    geoType: "MSOA",
    geoCode: "E02002020"
  },
  {
    en: "Brierley Hill",
    geoType: "MSOA",
    geoCode: "E02002021"
  },
  {
    en: "Hawbush",
    geoType: "MSOA",
    geoCode: "E02002022"
  },
  {
    en: "Ashwood",
    geoType: "MSOA",
    geoCode: "E02002023"
  },
  {
    en: "Quarry Bank",
    geoType: "MSOA",
    geoCode: "E02002024"
  },
  {
    en: "Shell Corner & Hurst Green",
    geoType: "MSOA",
    geoCode: "E02002025"
  },
  {
    en: "Amblecote East",
    geoType: "MSOA",
    geoCode: "E02002026"
  },
  {
    en: "Withymoor Village",
    geoType: "MSOA",
    geoCode: "E02002027"
  },
  {
    en: "Wollaston",
    geoType: "MSOA",
    geoCode: "E02002028"
  },
  {
    en: "Quinton West",
    geoType: "MSOA",
    geoCode: "E02002029"
  },
  {
    en: "Amblecote West & Stambermill",
    geoType: "MSOA",
    geoCode: "E02002030"
  },
  {
    en: "Cradley West & Hayes Lane",
    geoType: "MSOA",
    geoCode: "E02002031"
  },
  {
    en: "Cradley East",
    geoType: "MSOA",
    geoCode: "E02002032"
  },
  {
    en: "Hawne",
    geoType: "MSOA",
    geoCode: "E02002033"
  },
  {
    en: "Stourbridge Town & Old Quarter",
    geoType: "MSOA",
    geoCode: "E02002034"
  },
  {
    en: "Halesowen East",
    geoType: "MSOA",
    geoCode: "E02002035"
  },
  {
    en: "Lye & Wynall",
    geoType: "MSOA",
    geoCode: "E02002036"
  },
  {
    en: "Norton North",
    geoType: "MSOA",
    geoCode: "E02002037"
  },
  {
    en: "Halesowen Town",
    geoType: "MSOA",
    geoCode: "E02002038"
  },
  {
    en: "Oldswinford & Pedmore",
    geoType: "MSOA",
    geoCode: "E02002039"
  },
  {
    en: "Norton South",
    geoType: "MSOA",
    geoCode: "E02002040"
  },
  {
    en: "Pedmore Fields",
    geoType: "MSOA",
    geoCode: "E02002041"
  },
  {
    en: "Hayley Green",
    geoType: "MSOA",
    geoCode: "E02002042"
  },
  {
    en: "Wood Green & Old Park",
    geoType: "MSOA",
    geoCode: "E02002043"
  },
  {
    en: "Yew Tree & Tamebridge",
    geoType: "MSOA",
    geoCode: "E02002044"
  },
  {
    en: "Woods & Mesty Croft",
    geoType: "MSOA",
    geoCode: "E02002045"
  },
  {
    en: "Friar Park",
    geoType: "MSOA",
    geoCode: "E02002046"
  },
  {
    en: "Wednesbury",
    geoType: "MSOA",
    geoCode: "E02002047"
  },
  {
    en: "Great Barr",
    geoType: "MSOA",
    geoCode: "E02002048"
  },
  {
    en: "Princes End & Willingsworth",
    geoType: "MSOA",
    geoCode: "E02002049"
  },
  {
    en: "Ocker Hill",
    geoType: "MSOA",
    geoCode: "E02002051"
  },
  {
    en: "Stone Cross & Hateley Heath",
    geoType: "MSOA",
    geoCode: "E02002052"
  },
  {
    en: "Hamstead East",
    geoType: "MSOA",
    geoCode: "E02002053"
  },
  {
    en: "Hamstead West",
    geoType: "MSOA",
    geoCode: "E02002054"
  },
  {
    en: "Wednesbury South",
    geoType: "MSOA",
    geoCode: "E02002055"
  },
  {
    en: "Tibbington",
    geoType: "MSOA",
    geoCode: "E02002056"
  },
  {
    en: "Tipton",
    geoType: "MSOA",
    geoCode: "E02002057"
  },
  {
    en: "Great Bridge & Dudley Port",
    geoType: "MSOA",
    geoCode: "E02002058"
  },
  {
    en: "West Bromwich North",
    geoType: "MSOA",
    geoCode: "E02002059"
  },
  {
    en: "Greets Green West",
    geoType: "MSOA",
    geoCode: "E02002060"
  },
  {
    en: "Greets Green East",
    geoType: "MSOA",
    geoCode: "E02002061"
  },
  {
    en: "West Bromwich East & Kenrick Park",
    geoType: "MSOA",
    geoCode: "E02002062"
  },
  {
    en: "North Tividale",
    geoType: "MSOA",
    geoCode: "E02002063"
  },
  {
    en: "Tividale",
    geoType: "MSOA",
    geoCode: "E02002064"
  },
  {
    en: "Smethwick North & West",
    geoType: "MSOA",
    geoCode: "E02002065"
  },
  {
    en: "Oldbury & Rood End",
    geoType: "MSOA",
    geoCode: "E02002066"
  },
  {
    en: "Rowley West",
    geoType: "MSOA",
    geoCode: "E02002067"
  },
  {
    en: "Whiteheath",
    geoType: "MSOA",
    geoCode: "E02002069"
  },
  {
    en: "Smethwick South",
    geoType: "MSOA",
    geoCode: "E02002070"
  },
  {
    en: "Rowley East",
    geoType: "MSOA",
    geoCode: "E02002071"
  },
  {
    en: "Langley Green",
    geoType: "MSOA",
    geoCode: "E02002072"
  },
  {
    en: "Warley East",
    geoType: "MSOA",
    geoCode: "E02002073"
  },
  {
    en: "Warley West",
    geoType: "MSOA",
    geoCode: "E02002074"
  },
  {
    en: "Blackheath",
    geoType: "MSOA",
    geoCode: "E02002075"
  },
  {
    en: "Bearwood & Warley Woods",
    geoType: "MSOA",
    geoCode: "E02002076"
  },
  {
    en: "Old Hill",
    geoType: "MSOA",
    geoCode: "E02002077"
  },
  {
    en: "Warley South",
    geoType: "MSOA",
    geoCode: "E02002078"
  },
  {
    en: "Brandhall",
    geoType: "MSOA",
    geoCode: "E02002079"
  },
  {
    en: "Cradley Heath",
    geoType: "MSOA",
    geoCode: "E02002080"
  },
  {
    en: "Castle Bromwich West",
    geoType: "MSOA",
    geoCode: "E02002081"
  },
  {
    en: "Smith's Wood North",
    geoType: "MSOA",
    geoCode: "E02002082"
  },
  {
    en: "Castle Bromwich East",
    geoType: "MSOA",
    geoCode: "E02002083"
  },
  {
    en: "Smith's Wood South",
    geoType: "MSOA",
    geoCode: "E02002084"
  },
  {
    en: "Kingshurst",
    geoType: "MSOA",
    geoCode: "E02002085"
  },
  {
    en: "Chelmsley Wood West",
    geoType: "MSOA",
    geoCode: "E02002086"
  },
  {
    en: "Fordbridge",
    geoType: "MSOA",
    geoCode: "E02002087"
  },
  {
    en: "Chelmsley Wood East",
    geoType: "MSOA",
    geoCode: "E02002088"
  },
  {
    en: "Marston Green & Airport",
    geoType: "MSOA",
    geoCode: "E02002089"
  },
  {
    en: "Lyndon North",
    geoType: "MSOA",
    geoCode: "E02002090"
  },
  {
    en: "Elmdon Park",
    geoType: "MSOA",
    geoCode: "E02002091"
  },
  {
    en: "Lyndon South",
    geoType: "MSOA",
    geoCode: "E02002092"
  },
  {
    en: "Olton & Kineton Green",
    geoType: "MSOA",
    geoCode: "E02002093"
  },
  {
    en: "Ulverley Green & Langley",
    geoType: "MSOA",
    geoCode: "E02002094"
  },
  {
    en: "Elmdon Heath & Catherine-de-Barnes",
    geoType: "MSOA",
    geoCode: "E02002095"
  },
  {
    en: "Lode Heath",
    geoType: "MSOA",
    geoCode: "E02002096"
  },
  {
    en: "Meriden, Hampton-in-Arden & Temple Balsall",
    geoType: "MSOA",
    geoCode: "E02002097"
  },
  {
    en: "Shirley East",
    geoType: "MSOA",
    geoCode: "E02002098"
  },
  {
    en: "Central Solihull & Sharmans Cross",
    geoType: "MSOA",
    geoCode: "E02002099"
  },
  {
    en: "Solihull Lodge",
    geoType: "MSOA",
    geoCode: "E02002101"
  },
  {
    en: "Blossomfield",
    geoType: "MSOA",
    geoCode: "E02002102"
  },
  {
    en: "Shirley Heath",
    geoType: "MSOA",
    geoCode: "E02002103"
  },
  {
    en: "Monkspath North",
    geoType: "MSOA",
    geoCode: "E02002104"
  },
  {
    en: "Balsall Common",
    geoType: "MSOA",
    geoCode: "E02002105"
  },
  {
    en: "Knowle",
    geoType: "MSOA",
    geoCode: "E02002106"
  },
  {
    en: "Monkspath South",
    geoType: "MSOA",
    geoCode: "E02002107"
  },
  {
    en: "Dorridge",
    geoType: "MSOA",
    geoCode: "E02002108"
  },
  {
    en: "Dickens Heath, Cheswick Green & Hockley Heath",
    geoType: "MSOA",
    geoCode: "E02002109"
  },
  {
    en: "Brownhills West & Clayhanger",
    geoType: "MSOA",
    geoCode: "E02002110"
  },
  {
    en: "Brownhills",
    geoType: "MSOA",
    geoCode: "E02002111"
  },
  {
    en: "Pelsall North",
    geoType: "MSOA",
    geoCode: "E02002112"
  },
  {
    en: "Walsall Wood",
    geoType: "MSOA",
    geoCode: "E02002113"
  },
  {
    en: "Pelsall South",
    geoType: "MSOA",
    geoCode: "E02002114"
  },
  {
    en: "Little Bloxwich",
    geoType: "MSOA",
    geoCode: "E02002115"
  },
  {
    en: "Aldridge North",
    geoType: "MSOA",
    geoCode: "E02002116"
  },
  {
    en: "Bloxwich Central & North",
    geoType: "MSOA",
    geoCode: "E02002117"
  },
  {
    en: "Bloxwich North West",
    geoType: "MSOA",
    geoCode: "E02002118"
  },
  {
    en: "Shelfield",
    geoType: "MSOA",
    geoCode: "E02002119"
  },
  {
    en: "Ashmore",
    geoType: "MSOA",
    geoCode: "E02002120"
  },
  {
    en: "Blakenall North",
    geoType: "MSOA",
    geoCode: "E02002121"
  },
  {
    en: "Blakenall South",
    geoType: "MSOA",
    geoCode: "E02002122"
  },
  {
    en: "New Invention",
    geoType: "MSOA",
    geoCode: "E02002123"
  },
  {
    en: "Aldridge Central",
    geoType: "MSOA",
    geoCode: "E02002124"
  },
  {
    en: "Rushall",
    geoType: "MSOA",
    geoCode: "E02002125"
  },
  {
    en: "Bloxwich South",
    geoType: "MSOA",
    geoCode: "E02002126"
  },
  {
    en: "Walsall Ryecroft",
    geoType: "MSOA",
    geoCode: "E02002127"
  },
  {
    en: "Short Heath East",
    geoType: "MSOA",
    geoCode: "E02002128"
  },
  {
    en: "Short Heath West",
    geoType: "MSOA",
    geoCode: "E02002129"
  },
  {
    en: "Leamore",
    geoType: "MSOA",
    geoCode: "E02002130"
  },
  {
    en: "Aldridge South",
    geoType: "MSOA",
    geoCode: "E02002131"
  },
  {
    en: "Bentley",
    geoType: "MSOA",
    geoCode: "E02002132"
  },
  {
    en: "Walsall North East",
    geoType: "MSOA",
    geoCode: "E02002133"
  },
  {
    en: "Willenhall Park",
    geoType: "MSOA",
    geoCode: "E02002134"
  },
  {
    en: "Walsall West",
    geoType: "MSOA",
    geoCode: "E02002135"
  },
  {
    en: "Willenhall Town",
    geoType: "MSOA",
    geoCode: "E02002136"
  },
  {
    en: "Streetly North",
    geoType: "MSOA",
    geoCode: "E02002137"
  },
  {
    en: "Walsall East",
    geoType: "MSOA",
    geoCode: "E02002138"
  },
  {
    en: "Walsall Central",
    geoType: "MSOA",
    geoCode: "E02002139"
  },
  {
    en: "Pleck",
    geoType: "MSOA",
    geoCode: "E02002140"
  },
  {
    en: "Streetly South",
    geoType: "MSOA",
    geoCode: "E02002141"
  },
  {
    en: "Darlaston East",
    geoType: "MSOA",
    geoCode: "E02002142"
  },
  {
    en: "Palfrey",
    geoType: "MSOA",
    geoCode: "E02002143"
  },
  {
    en: "Walsall South East",
    geoType: "MSOA",
    geoCode: "E02002144"
  },
  {
    en: "Darlaston Central",
    geoType: "MSOA",
    geoCode: "E02002145"
  },
  {
    en: "The Delves",
    geoType: "MSOA",
    geoCode: "E02002146"
  },
  {
    en: "Darlaston West",
    geoType: "MSOA",
    geoCode: "E02002147"
  },
  {
    en: "Pheasey & Sutton Road",
    geoType: "MSOA",
    geoCode: "E02002148"
  },
  {
    en: "Bushbury",
    geoType: "MSOA",
    geoCode: "E02002149"
  },
  {
    en: "Fordhouses",
    geoType: "MSOA",
    geoCode: "E02002150"
  },
  {
    en: "Pendeford",
    geoType: "MSOA",
    geoCode: "E02002151"
  },
  {
    en: "Bushbury Hill",
    geoType: "MSOA",
    geoCode: "E02002152"
  },
  {
    en: "Ashmore Park",
    geoType: "MSOA",
    geoCode: "E02002153"
  },
  {
    en: "Oxley Park",
    geoType: "MSOA",
    geoCode: "E02002154"
  },
  {
    en: "Low Hill",
    geoType: "MSOA",
    geoCode: "E02002155"
  },
  {
    en: "Wood End",
    geoType: "MSOA",
    geoCode: "E02002156"
  },
  {
    en: "Tettenhall North",
    geoType: "MSOA",
    geoCode: "E02002157"
  },
  {
    en: "Wednesfield North East",
    geoType: "MSOA",
    geoCode: "E02002158"
  },
  {
    en: "Park Lane",
    geoType: "MSOA",
    geoCode: "E02002159"
  },
  {
    en: "Wednesfield Town",
    geoType: "MSOA",
    geoCode: "E02002160"
  },
  {
    en: "Whitmore Reans & Dunstall Hill",
    geoType: "MSOA",
    geoCode: "E02002161"
  },
  {
    en: "Tettenhall South",
    geoType: "MSOA",
    geoCode: "E02002162"
  },
  {
    en: "Heath Town",
    geoType: "MSOA",
    geoCode: "E02002163"
  },
  {
    en: "Waterloo Road",
    geoType: "MSOA",
    geoCode: "E02002164"
  },
  {
    en: "West Park",
    geoType: "MSOA",
    geoCode: "E02002165"
  },
  {
    en: "East Park",
    geoType: "MSOA",
    geoCode: "E02002166"
  },
  {
    en: "Castlecroft",
    geoType: "MSOA",
    geoCode: "E02002167"
  },
  {
    en: "Wolverhampton Central",
    geoType: "MSOA",
    geoCode: "E02002168"
  },
  {
    en: "Compton & Merryhill North",
    geoType: "MSOA",
    geoCode: "E02002169"
  },
  {
    en: "Bilston North West",
    geoType: "MSOA",
    geoCode: "E02002170"
  },
  {
    en: "Bilston North East",
    geoType: "MSOA",
    geoCode: "E02002171"
  },
  {
    en: "Bradmore",
    geoType: "MSOA",
    geoCode: "E02002174"
  },
  {
    en: "Bilston Lunt & Loxdale",
    geoType: "MSOA",
    geoCode: "E02002175"
  },
  {
    en: "Merryhill South",
    geoType: "MSOA",
    geoCode: "E02002176"
  },
  {
    en: "Ettingshall",
    geoType: "MSOA",
    geoCode: "E02002177"
  },
  {
    en: "Goldthorn Park",
    geoType: "MSOA",
    geoCode: "E02002178"
  },
  {
    en: "Upper Penn",
    geoType: "MSOA",
    geoCode: "E02002179"
  },
  {
    en: "Ettingshall Park",
    geoType: "MSOA",
    geoCode: "E02002180"
  },
  {
    en: "Bradley",
    geoType: "MSOA",
    geoCode: "E02002181"
  },
  {
    en: "Woodcross",
    geoType: "MSOA",
    geoCode: "E02002182"
  },
  {
    en: "Addingham & Ilkley Moor",
    geoType: "MSOA",
    geoCode: "E02002183"
  },
  {
    en: "Ilkley & Ben Rhydding",
    geoType: "MSOA",
    geoCode: "E02002184"
  },
  {
    en: "Burley-in-Wharfedale",
    geoType: "MSOA",
    geoCode: "E02002185"
  },
  {
    en: "Menston & Burley Moor",
    geoType: "MSOA",
    geoCode: "E02002187"
  },
  {
    en: "Riddlesden & East Morton",
    geoType: "MSOA",
    geoCode: "E02002188"
  },
  {
    en: "Keighley Utley",
    geoType: "MSOA",
    geoCode: "E02002189"
  },
  {
    en: "Keighley Central & East",
    geoType: "MSOA",
    geoCode: "E02002190"
  },
  {
    en: "Keighley Oakworth Road & West Lane",
    geoType: "MSOA",
    geoCode: "E02002191"
  },
  {
    en: "Crossflatts & Eldwick",
    geoType: "MSOA",
    geoCode: "E02002192"
  },
  {
    en: "Keighley South",
    geoType: "MSOA",
    geoCode: "E02002193"
  },
  {
    en: "Keighley Exley Head",
    geoType: "MSOA",
    geoCode: "E02002194"
  },
  {
    en: "Baildon North",
    geoType: "MSOA",
    geoCode: "E02002195"
  },
  {
    en: "Oakworth & Laycock",
    geoType: "MSOA",
    geoCode: "E02002196"
  },
  {
    en: "Bingley Town",
    geoType: "MSOA",
    geoCode: "E02002197"
  },
  {
    en: "Baildon South",
    geoType: "MSOA",
    geoCode: "E02002198"
  },
  {
    en: "Thackley & Esholt",
    geoType: "MSOA",
    geoCode: "E02002199"
  },
  {
    en: "Saltaire & Baildon West",
    geoType: "MSOA",
    geoCode: "E02002200"
  },
  {
    en: "Idle",
    geoType: "MSOA",
    geoCode: "E02002201"
  },
  {
    en: "Shipley Town",
    geoType: "MSOA",
    geoCode: "E02002202"
  },
  {
    en: "Windhill",
    geoType: "MSOA",
    geoCode: "E02002203"
  },
  {
    en: "Cottingley, Harden & Wilsden",
    geoType: "MSOA",
    geoCode: "E02002204"
  },
  {
    en: "Haworth & Oxenhope",
    geoType: "MSOA",
    geoCode: "E02002205"
  },
  {
    en: "Wrose & Bolton Woods",
    geoType: "MSOA",
    geoCode: "E02002206"
  },
  {
    en: "Frizinghall & Heaton Grove",
    geoType: "MSOA",
    geoCode: "E02002207"
  },
  {
    en: "Eccleshill",
    geoType: "MSOA",
    geoCode: "E02002208"
  },
  {
    en: "Ravenscliffe",
    geoType: "MSOA",
    geoCode: "E02002209"
  },
  {
    en: "Bolton Road & Kings Road",
    geoType: "MSOA",
    geoCode: "E02002210"
  },
  {
    en: "Heaton Highgate",
    geoType: "MSOA",
    geoCode: "E02002211"
  },
  {
    en: "Chellow Heights",
    geoType: "MSOA",
    geoCode: "E02002212"
  },
  {
    en: "Cullingworth & Denholme",
    geoType: "MSOA",
    geoCode: "E02002213"
  },
  {
    en: "Haigh Fold",
    geoType: "MSOA",
    geoCode: "E02002214"
  },
  {
    en: "Toller Lane & Infirmary",
    geoType: "MSOA",
    geoCode: "E02002215"
  },
  {
    en: "Manningham & Lister Park",
    geoType: "MSOA",
    geoCode: "E02002216"
  },
  {
    en: "Undercliffe",
    geoType: "MSOA",
    geoCode: "E02002217"
  },
  {
    en: "Allerton",
    geoType: "MSOA",
    geoCode: "E02002218"
  },
  {
    en: "Girlington",
    geoType: "MSOA",
    geoCode: "E02002219"
  },
  {
    en: "Thornbury",
    geoType: "MSOA",
    geoCode: "E02002220"
  },
  {
    en: "Fairweather Green",
    geoType: "MSOA",
    geoCode: "E02002222"
  },
  {
    en: "Brown Royd",
    geoType: "MSOA",
    geoCode: "E02002223"
  },
  {
    en: "Barkerend East",
    geoType: "MSOA",
    geoCode: "E02002224"
  },
  {
    en: "Thornton",
    geoType: "MSOA",
    geoCode: "E02002225"
  },
  {
    en: "Shearbridge & University",
    geoType: "MSOA",
    geoCode: "E02002226"
  },
  {
    en: "Broomfields & East Bowling",
    geoType: "MSOA",
    geoCode: "E02002227"
  },
  {
    en: "Laisterdyke & Bowling",
    geoType: "MSOA",
    geoCode: "E02002228"
  },
  {
    en: "Clayton",
    geoType: "MSOA",
    geoCode: "E02002229"
  },
  {
    en: "Holme Top",
    geoType: "MSOA",
    geoCode: "E02002230"
  },
  {
    en: "Scholemoor",
    geoType: "MSOA",
    geoCode: "E02002231"
  },
  {
    en: "Great Horton & Brackenhill",
    geoType: "MSOA",
    geoCode: "E02002232"
  },
  {
    en: "Canterbury",
    geoType: "MSOA",
    geoCode: "E02002233"
  },
  {
    en: "Holme Wood",
    geoType: "MSOA",
    geoCode: "E02002234"
  },
  {
    en: "Bowling Park",
    geoType: "MSOA",
    geoCode: "E02002235"
  },
  {
    en: "Wibsey St Enoch's",
    geoType: "MSOA",
    geoCode: "E02002236"
  },
  {
    en: "Horton Bank",
    geoType: "MSOA",
    geoCode: "E02002237"
  },
  {
    en: "Bankfoot",
    geoType: "MSOA",
    geoCode: "E02002238"
  },
  {
    en: "Bierley & Tong",
    geoType: "MSOA",
    geoCode: "E02002239"
  },
  {
    en: "Queensbury",
    geoType: "MSOA",
    geoCode: "E02002240"
  },
  {
    en: "Buttershaw",
    geoType: "MSOA",
    geoCode: "E02002241"
  },
  {
    en: "Low Moor",
    geoType: "MSOA",
    geoCode: "E02002242"
  },
  {
    en: "Wyke",
    geoType: "MSOA",
    geoCode: "E02002243"
  },
  {
    en: "Illingworth & Ogden",
    geoType: "MSOA",
    geoCode: "E02002244"
  },
  {
    en: "Mixenden",
    geoType: "MSOA",
    geoCode: "E02002245"
  },
  {
    en: "Northowram & Shelf",
    geoType: "MSOA",
    geoCode: "E02002246"
  },
  {
    en: "Hebden Bridge",
    geoType: "MSOA",
    geoCode: "E02002247"
  },
  {
    en: "Wheatley & Ovenden West",
    geoType: "MSOA",
    geoCode: "E02002248"
  },
  {
    en: "Ovenden East",
    geoType: "MSOA",
    geoCode: "E02002249"
  },
  {
    en: "Mytholmroyd & Cragg Vale",
    geoType: "MSOA",
    geoCode: "E02002250"
  },
  {
    en: "Central Halifax & Boothtown",
    geoType: "MSOA",
    geoCode: "E02002251"
  },
  {
    en: "Norton Tower & Mount Tabor",
    geoType: "MSOA",
    geoCode: "E02002252"
  },
  {
    en: "Pellon West & Highroad Well",
    geoType: "MSOA",
    geoCode: "E02002253"
  },
  {
    en: "Hipperholme",
    geoType: "MSOA",
    geoCode: "E02002254"
  },
  {
    en: "Pellon East",
    geoType: "MSOA",
    geoCode: "E02002255"
  },
  {
    en: "Todmorden West & Cornholme",
    geoType: "MSOA",
    geoCode: "E02002256"
  },
  {
    en: "King Cross",
    geoType: "MSOA",
    geoCode: "E02002257"
  },
  {
    en: "Clifton & Bailiff Bridge",
    geoType: "MSOA",
    geoCode: "E02002258"
  },
  {
    en: "Savile Park",
    geoType: "MSOA",
    geoCode: "E02002259"
  },
  {
    en: "Sowerby Bridge",
    geoType: "MSOA",
    geoCode: "E02002260"
  },
  {
    en: "Southowram & Siddal",
    geoType: "MSOA",
    geoCode: "E02002261"
  },
  {
    en: "Brighouse",
    geoType: "MSOA",
    geoCode: "E02002262"
  },
  {
    en: "Sowerby & Luddendenfoot",
    geoType: "MSOA",
    geoCode: "E02002263"
  },
  {
    en: "Skircoat Green",
    geoType: "MSOA",
    geoCode: "E02002264"
  },
  {
    en: "Todmorden East & Walsden",
    geoType: "MSOA",
    geoCode: "E02002265"
  },
  {
    en: "Rastrick East",
    geoType: "MSOA",
    geoCode: "E02002266"
  },
  {
    en: "Rastrick West",
    geoType: "MSOA",
    geoCode: "E02002267"
  },
  {
    en: "Elland",
    geoType: "MSOA",
    geoCode: "E02002268"
  },
  {
    en: "Greetland & Stainland",
    geoType: "MSOA",
    geoCode: "E02002269"
  },
  {
    en: "Ripponden, Rishworth & Barkisland",
    geoType: "MSOA",
    geoCode: "E02002270"
  },
  {
    en: "Birkenshaw",
    geoType: "MSOA",
    geoCode: "E02002271"
  },
  {
    en: "Birstall",
    geoType: "MSOA",
    geoCode: "E02002272"
  },
  {
    en: "Scholes & Hunsworth",
    geoType: "MSOA",
    geoCode: "E02002273"
  },
  {
    en: "Gomersal",
    geoType: "MSOA",
    geoCode: "E02002274"
  },
  {
    en: "Cleckheaton",
    geoType: "MSOA",
    geoCode: "E02002275"
  },
  {
    en: "Wilton Park, Carlinghow & Brookroyd",
    geoType: "MSOA",
    geoCode: "E02002276"
  },
  {
    en: "Upper Batley & Soothill",
    geoType: "MSOA",
    geoCode: "E02002277"
  },
  {
    en: "Hightown & Hartshead Moor",
    geoType: "MSOA",
    geoCode: "E02002278"
  },
  {
    en: "Liversedge, Littletown & Millbridge",
    geoType: "MSOA",
    geoCode: "E02002279"
  },
  {
    en: "Batley Central",
    geoType: "MSOA",
    geoCode: "E02002280"
  },
  {
    en: "Heckmondwike North",
    geoType: "MSOA",
    geoCode: "E02002281"
  },
  {
    en: "Staincliffe & Healey",
    geoType: "MSOA",
    geoCode: "E02002282"
  },
  {
    en: "Batley Carr & Mount Pleasant",
    geoType: "MSOA",
    geoCode: "E02002283"
  },
  {
    en: "Shaw Cross & Hanging Heaton",
    geoType: "MSOA",
    geoCode: "E02002284"
  },
  {
    en: "Heckmondwike Town, Norristhorpe & Roberttown",
    geoType: "MSOA",
    geoCode: "E02002285"
  },
  {
    en: "Dewsbury Moor Upper",
    geoType: "MSOA",
    geoCode: "E02002286"
  },
  {
    en: "Dewsbury Central & Westborough",
    geoType: "MSOA",
    geoCode: "E02002287"
  },
  {
    en: "Earlsheaton & Chickenley",
    geoType: "MSOA",
    geoCode: "E02002288"
  },
  {
    en: "Dewsbury Moor Lower & Westtown",
    geoType: "MSOA",
    geoCode: "E02002289"
  },
  {
    en: "Northorpe & Crossley",
    geoType: "MSOA",
    geoCode: "E02002290"
  },
  {
    en: "Battyeford",
    geoType: "MSOA",
    geoCode: "E02002291"
  },
  {
    en: "Bradley & North Fixby",
    geoType: "MSOA",
    geoCode: "E02002292"
  },
  {
    en: "Ravensthorpe",
    geoType: "MSOA",
    geoCode: "E02002293"
  },
  {
    en: "Dewsbury Savile Town & Thornhill Lees",
    geoType: "MSOA",
    geoCode: "E02002294"
  },
  {
    en: "Deighton & Brackenhall",
    geoType: "MSOA",
    geoCode: "E02002295"
  },
  {
    en: "Mirfield Central & Hopton",
    geoType: "MSOA",
    geoCode: "E02002296"
  },
  {
    en: "Cowcliffe & South Fixby",
    geoType: "MSOA",
    geoCode: "E02002297"
  },
  {
    en: "Thornhill",
    geoType: "MSOA",
    geoCode: "E02002298"
  },
  {
    en: "Huddersfield Leeds Road & Fartown",
    geoType: "MSOA",
    geoCode: "E02002299"
  },
  {
    en: "North Lindley & Birchencliffe",
    geoType: "MSOA",
    geoCode: "E02002300"
  },
  {
    en: "Birkby",
    geoType: "MSOA",
    geoCode: "E02002301"
  },
  {
    en: "Kirkheaton",
    geoType: "MSOA",
    geoCode: "E02002302"
  },
  {
    en: "Oakes & South Lindley",
    geoType: "MSOA",
    geoCode: "E02002303"
  },
  {
    en: "Edgerton & Marsh",
    geoType: "MSOA",
    geoCode: "E02002304"
  },
  {
    en: "Rawthorpe",
    geoType: "MSOA",
    geoCode: "E02002305"
  },
  {
    en: "Scapegoat Hill, Outlane & West Golcar",
    geoType: "MSOA",
    geoCode: "E02002306"
  },
  {
    en: "Dalton Long Lane",
    geoType: "MSOA",
    geoCode: "E02002307"
  },
  {
    en: "Longwood & Quarmby",
    geoType: "MSOA",
    geoCode: "E02002308"
  },
  {
    en: "Paddock & Greenhead",
    geoType: "MSOA",
    geoCode: "E02002309"
  },
  {
    en: "Moldgreen & Ravensknowle Park",
    geoType: "MSOA",
    geoCode: "E02002310"
  },
  {
    en: "Golcar",
    geoType: "MSOA",
    geoCode: "E02002311"
  },
  {
    en: "Aspley, Longley & University",
    geoType: "MSOA",
    geoCode: "E02002312"
  },
  {
    en: "Lockwood",
    geoType: "MSOA",
    geoCode: "E02002313"
  },
  {
    en: "Almondbury & Waterloo",
    geoType: "MSOA",
    geoCode: "E02002314"
  },
  {
    en: "Cowlersley & Milnsbridge",
    geoType: "MSOA",
    geoCode: "E02002315"
  },
  {
    en: "Lepton, Grange Moor & Flockton",
    geoType: "MSOA",
    geoCode: "E02002316"
  },
  {
    en: "Crosland Moor",
    geoType: "MSOA",
    geoCode: "E02002317"
  },
  {
    en: "Primrose Hill, Newsome & Berry Brow",
    geoType: "MSOA",
    geoCode: "E02002318"
  },
  {
    en: "Slaithwaite & Linthwaite",
    geoType: "MSOA",
    geoCode: "E02002319"
  },
  {
    en: "Netherton & South Crosland",
    geoType: "MSOA",
    geoCode: "E02002320"
  },
  {
    en: "Kirkburton & Farnley Tyas",
    geoType: "MSOA",
    geoCode: "E02002321"
  },
  {
    en: "Marsden & Pole Moor",
    geoType: "MSOA",
    geoCode: "E02002322"
  },
  {
    en: "Honley & Brockholes",
    geoType: "MSOA",
    geoCode: "E02002323"
  },
  {
    en: "Emley & Skelmanthorpe",
    geoType: "MSOA",
    geoCode: "E02002324"
  },
  {
    en: "Meltham",
    geoType: "MSOA",
    geoCode: "E02002325"
  },
  {
    en: "Shelley & Shepley",
    geoType: "MSOA",
    geoCode: "E02002326"
  },
  {
    en: "Denby Dale, Cumberworth & Clayton West",
    geoType: "MSOA",
    geoCode: "E02002327"
  },
  {
    en: "Upperthong & Holmbridge",
    geoType: "MSOA",
    geoCode: "E02002328"
  },
  {
    en: "Holmfirth, New Mill & Hepworth",
    geoType: "MSOA",
    geoCode: "E02002329"
  },
  {
    en: "Wetherby West",
    geoType: "MSOA",
    geoCode: "E02002330"
  },
  {
    en: "Wetherby East & Thorp Arch",
    geoType: "MSOA",
    geoCode: "E02002331"
  },
  {
    en: "Otley North",
    geoType: "MSOA",
    geoCode: "E02002332"
  },
  {
    en: "Otley South",
    geoType: "MSOA",
    geoCode: "E02002333"
  },
  {
    en: "Boston Spa & Bramham",
    geoType: "MSOA",
    geoCode: "E02002334"
  },
  {
    en: "Collingham, Rigton & Harewood",
    geoType: "MSOA",
    geoCode: "E02002335"
  },
  {
    en: "Bramhope & Pool-in-Wharfedale",
    geoType: "MSOA",
    geoCode: "E02002336"
  },
  {
    en: "Guiseley North & West",
    geoType: "MSOA",
    geoCode: "E02002337"
  },
  {
    en: "Guiseley East & South",
    geoType: "MSOA",
    geoCode: "E02002338"
  },
  {
    en: "Yeadon West",
    geoType: "MSOA",
    geoCode: "E02002339"
  },
  {
    en: "Yeadon East",
    geoType: "MSOA",
    geoCode: "E02002340"
  },
  {
    en: "Alwoodley",
    geoType: "MSOA",
    geoCode: "E02002341"
  },
  {
    en: "Cookridge & Holt Park",
    geoType: "MSOA",
    geoCode: "E02002342"
  },
  {
    en: "Yeadon South",
    geoType: "MSOA",
    geoCode: "E02002343"
  },
  {
    en: "Primley Park & Wigton Moor",
    geoType: "MSOA",
    geoCode: "E02002344"
  },
  {
    en: "Adel",
    geoType: "MSOA",
    geoCode: "E02002345"
  },
  {
    en: "Tinshill",
    geoType: "MSOA",
    geoCode: "E02002346"
  },
  {
    en: "Moor Allerton",
    geoType: "MSOA",
    geoCode: "E02002347"
  },
  {
    en: "Lawnswood & Ireland Wood",
    geoType: "MSOA",
    geoCode: "E02002348"
  },
  {
    en: "Roundhay Park & Slaid Hill",
    geoType: "MSOA",
    geoCode: "E02002349"
  },
  {
    en: "Horsforth West",
    geoType: "MSOA",
    geoCode: "E02002350"
  },
  {
    en: "Scarcroft, Shadwell & Scholes",
    geoType: "MSOA",
    geoCode: "E02002351"
  },
  {
    en: "Moortown",
    geoType: "MSOA",
    geoCode: "E02002352"
  },
  {
    en: "Roundhay West",
    geoType: "MSOA",
    geoCode: "E02002353"
  },
  {
    en: "Carr Manor",
    geoType: "MSOA",
    geoCode: "E02002354"
  },
  {
    en: "Horsforth South & Rawdon",
    geoType: "MSOA",
    geoCode: "E02002356"
  },
  {
    en: "Horsforth East",
    geoType: "MSOA",
    geoCode: "E02002357"
  },
  {
    en: "Whinmoor",
    geoType: "MSOA",
    geoCode: "E02002358"
  },
  {
    en: "Aberford, Barwick & Thorner",
    geoType: "MSOA",
    geoCode: "E02002359"
  },
  {
    en: "Meanwood",
    geoType: "MSOA",
    geoCode: "E02002360"
  },
  {
    en: "Gledhow",
    geoType: "MSOA",
    geoCode: "E02002361"
  },
  {
    en: "Hawksworth & West Park",
    geoType: "MSOA",
    geoCode: "E02002362"
  },
  {
    en: "Chapel Allerton North",
    geoType: "MSOA",
    geoCode: "E02002363"
  },
  {
    en: "Seacroft North & Monkswood",
    geoType: "MSOA",
    geoCode: "E02002364"
  },
  {
    en: "Lady Wood & Oakwood",
    geoType: "MSOA",
    geoCode: "E02002366"
  },
  {
    en: "Meanwood South & Sugarwell",
    geoType: "MSOA",
    geoCode: "E02002367"
  },
  {
    en: "Calverley & Farsley North",
    geoType: "MSOA",
    geoCode: "E02002368"
  },
  {
    en: "Hollin Park & Fearnville",
    geoType: "MSOA",
    geoCode: "E02002369"
  },
  {
    en: "Swarcliffe",
    geoType: "MSOA",
    geoCode: "E02002370"
  },
  {
    en: "Chapel Allerton South & Chapeltown",
    geoType: "MSOA",
    geoCode: "E02002371"
  },
  {
    en: "Headingley",
    geoType: "MSOA",
    geoCode: "E02002373"
  },
  {
    en: "Kirkstall",
    geoType: "MSOA",
    geoCode: "E02002374"
  },
  {
    en: "Bramley Fall",
    geoType: "MSOA",
    geoCode: "E02002375"
  },
  {
    en: "Gipton North",
    geoType: "MSOA",
    geoCode: "E02002376"
  },
  {
    en: "Harehills North",
    geoType: "MSOA",
    geoCode: "E02002377"
  },
  {
    en: "Seacroft South",
    geoType: "MSOA",
    geoCode: "E02002379"
  },
  {
    en: "Bramley Park North",
    geoType: "MSOA",
    geoCode: "E02002380"
  },
  {
    en: "Rodley & Stanningley Park",
    geoType: "MSOA",
    geoCode: "E02002381"
  },
  {
    en: "Harehills South",
    geoType: "MSOA",
    geoCode: "E02002382"
  },
  {
    en: "Hyde Park",
    geoType: "MSOA",
    geoCode: "E02002383"
  },
  {
    en: "Woodhouse & Little London",
    geoType: "MSOA",
    geoCode: "E02002384"
  },
  {
    en: "Burley",
    geoType: "MSOA",
    geoCode: "E02002385"
  },
  {
    en: "Cross Gates East & Manston",
    geoType: "MSOA",
    geoCode: "E02002386"
  },
  {
    en: "Bramley Park South",
    geoType: "MSOA",
    geoCode: "E02002387"
  },
  {
    en: "Bramley East",
    geoType: "MSOA",
    geoCode: "E02002388"
  },
  {
    en: "Gipton South & Killingbeck Park",
    geoType: "MSOA",
    geoCode: "E02002389"
  },
  {
    en: "Cross Gates West & Killingbeck",
    geoType: "MSOA",
    geoCode: "E02002390"
  },
  {
    en: "Farsley South, Stanningley & Pudsey North West",
    geoType: "MSOA",
    geoCode: "E02002391"
  },
  {
    en: "University & Little Woodhouse",
    geoType: "MSOA",
    geoCode: "E02002392"
  },
  {
    en: "Lincoln Green & St James",
    geoType: "MSOA",
    geoCode: "E02002393"
  },
  {
    en: "Burmantofts",
    geoType: "MSOA",
    geoCode: "E02002394"
  },
  {
    en: "New Pudsey",
    geoType: "MSOA",
    geoCode: "E02002395"
  },
  {
    en: "Bramley South & Upper Armley",
    geoType: "MSOA",
    geoCode: "E02002396"
  },
  {
    en: "Pudsey North East",
    geoType: "MSOA",
    geoCode: "E02002397"
  },
  {
    en: "Temple Newsam & Graveleythorpe",
    geoType: "MSOA",
    geoCode: "E02002398"
  },
  {
    en: "Osmondthorpe & Neville Hill",
    geoType: "MSOA",
    geoCode: "E02002399"
  },
  {
    en: "Armley & New Wortley",
    geoType: "MSOA",
    geoCode: "E02002400"
  },
  {
    en: "Halton Moor",
    geoType: "MSOA",
    geoCode: "E02002401"
  },
  {
    en: "Colton, Austhorpe & Whitkirk",
    geoType: "MSOA",
    geoCode: "E02002402"
  },
  {
    en: "Garforth West",
    geoType: "MSOA",
    geoCode: "E02002403"
  },
  {
    en: "East End Park & Richmond Hill",
    geoType: "MSOA",
    geoCode: "E02002404"
  },
  {
    en: "Pudsey South West",
    geoType: "MSOA",
    geoCode: "E02002405"
  },
  {
    en: "Garforth East",
    geoType: "MSOA",
    geoCode: "E02002406"
  },
  {
    en: "Farnley East",
    geoType: "MSOA",
    geoCode: "E02002407"
  },
  {
    en: "Pudsey South East",
    geoType: "MSOA",
    geoCode: "E02002408"
  },
  {
    en: "Farnley West & Gamble Hill",
    geoType: "MSOA",
    geoCode: "E02002409"
  },
  {
    en: "Wortley",
    geoType: "MSOA",
    geoCode: "E02002410"
  },
  {
    en: "Holbeck",
    geoType: "MSOA",
    geoCode: "E02002411"
  },
  {
    en: "New Farnley & Lower Wortley",
    geoType: "MSOA",
    geoCode: "E02002412"
  },
  {
    en: "Beeston Hill & Hunslet Moor",
    geoType: "MSOA",
    geoCode: "E02002414"
  },
  {
    en: "Cross Flats Park & Garnets",
    geoType: "MSOA",
    geoCode: "E02002415"
  },
  {
    en: "Garforth South, Swillington & Little Preston",
    geoType: "MSOA",
    geoCode: "E02002416"
  },
  {
    en: "Kippax East, Micklefield & Allerton Bywater",
    geoType: "MSOA",
    geoCode: "E02002417"
  },
  {
    en: "Kippax West",
    geoType: "MSOA",
    geoCode: "E02002418"
  },
  {
    en: "Beeston West & Cottingley",
    geoType: "MSOA",
    geoCode: "E02002419"
  },
  {
    en: "Beeston East",
    geoType: "MSOA",
    geoCode: "E02002420"
  },
  {
    en: "Belle Isle North",
    geoType: "MSOA",
    geoCode: "E02002421"
  },
  {
    en: "Churwell",
    geoType: "MSOA",
    geoCode: "E02002422"
  },
  {
    en: "Belle Isle South",
    geoType: "MSOA",
    geoCode: "E02002423"
  },
  {
    en: "Morley North & Gildersome East",
    geoType: "MSOA",
    geoCode: "E02002424"
  },
  {
    en: "Drighlington & Gildersome West",
    geoType: "MSOA",
    geoCode: "E02002425"
  },
  {
    en: "Woodlesford & Oulton",
    geoType: "MSOA",
    geoCode: "E02002426"
  },
  {
    en: "Rothwell Inner",
    geoType: "MSOA",
    geoCode: "E02002427"
  },
  {
    en: "Middleton Town Street",
    geoType: "MSOA",
    geoCode: "E02002428"
  },
  {
    en: "Rothwell Outer",
    geoType: "MSOA",
    geoCode: "E02002429"
  },
  {
    en: "Middleton Park Avenue",
    geoType: "MSOA",
    geoCode: "E02002430"
  },
  {
    en: "Morley East",
    geoType: "MSOA",
    geoCode: "E02002431"
  },
  {
    en: "Methley",
    geoType: "MSOA",
    geoCode: "E02002432"
  },
  {
    en: "Morley Central",
    geoType: "MSOA",
    geoCode: "E02002433"
  },
  {
    en: "Robin Hood, Lofthouse & Middleton Lane",
    geoType: "MSOA",
    geoCode: "E02002434"
  },
  {
    en: "Morley Bruntcliffe & Woodkirk",
    geoType: "MSOA",
    geoCode: "E02002435"
  },
  {
    en: "Tingley East & East Ardsley",
    geoType: "MSOA",
    geoCode: "E02002436"
  },
  {
    en: "Tingley West & West Ardsley",
    geoType: "MSOA",
    geoCode: "E02002437"
  },
  {
    en: "Ferry Fryston",
    geoType: "MSOA",
    geoCode: "E02002438"
  },
  {
    en: "Castleford Town",
    geoType: "MSOA",
    geoCode: "E02002439"
  },
  {
    en: "Airedale",
    geoType: "MSOA",
    geoCode: "E02002440"
  },
  {
    en: "Castleford West",
    geoType: "MSOA",
    geoCode: "E02002441"
  },
  {
    en: "Glasshoughton",
    geoType: "MSOA",
    geoCode: "E02002442"
  },
  {
    en: "Outwood East",
    geoType: "MSOA",
    geoCode: "E02002443"
  },
  {
    en: "Stanley, Moorhouse & Bottomboat",
    geoType: "MSOA",
    geoCode: "E02002444"
  },
  {
    en: "Outwood West",
    geoType: "MSOA",
    geoCode: "E02002445"
  },
  {
    en: "Altofts",
    geoType: "MSOA",
    geoCode: "E02002446"
  },
  {
    en: "Knottingley",
    geoType: "MSOA",
    geoCode: "E02002447"
  },
  {
    en: "Ferrybridge & West Knottingley",
    geoType: "MSOA",
    geoCode: "E02002448"
  },
  {
    en: "Pontefract North East",
    geoType: "MSOA",
    geoCode: "E02002449"
  },
  {
    en: "Normanton East",
    geoType: "MSOA",
    geoCode: "E02002450"
  },
  {
    en: "Wrenthorpe & Kirkhamgate",
    geoType: "MSOA",
    geoCode: "E02002451"
  },
  {
    en: "Pontefract North West",
    geoType: "MSOA",
    geoCode: "E02002452"
  },
  {
    en: "Normanton West",
    geoType: "MSOA",
    geoCode: "E02002453"
  },
  {
    en: "Wakefield Central",
    geoType: "MSOA",
    geoCode: "E02002454"
  },
  {
    en: "Pontefract South East",
    geoType: "MSOA",
    geoCode: "E02002455"
  },
  {
    en: "Wakefield St John's",
    geoType: "MSOA",
    geoCode: "E02002456"
  },
  {
    en: "Eastmoor",
    geoType: "MSOA",
    geoCode: "E02002457"
  },
  {
    en: "Ossett North",
    geoType: "MSOA",
    geoCode: "E02002458"
  },
  {
    en: "Alverthorpe & Flanshaw",
    geoType: "MSOA",
    geoCode: "E02002459"
  },
  {
    en: "Pontefract South West",
    geoType: "MSOA",
    geoCode: "E02002460"
  },
  {
    en: "Streethouse & Sharlston Common",
    geoType: "MSOA",
    geoCode: "E02002461"
  },
  {
    en: "Ossett West",
    geoType: "MSOA",
    geoCode: "E02002462"
  },
  {
    en: "Lupset",
    geoType: "MSOA",
    geoCode: "E02002463"
  },
  {
    en: "Featherstone",
    geoType: "MSOA",
    geoCode: "E02002464"
  },
  {
    en: "Thornes",
    geoType: "MSOA",
    geoCode: "E02002465"
  },
  {
    en: "Ossett South East & Horbury Bridge",
    geoType: "MSOA",
    geoCode: "E02002466"
  },
  {
    en: "Agbrigg & Belle Isle",
    geoType: "MSOA",
    geoCode: "E02002467"
  },
  {
    en: "Horbury",
    geoType: "MSOA",
    geoCode: "E02002468"
  },
  {
    en: "Crofton",
    geoType: "MSOA",
    geoCode: "E02002469"
  },
  {
    en: "Sandal",
    geoType: "MSOA",
    geoCode: "E02002470"
  },
  {
    en: "Ackworth & Darrington",
    geoType: "MSOA",
    geoCode: "E02002471"
  },
  {
    en: "Netherton & Middlestown",
    geoType: "MSOA",
    geoCode: "E02002472"
  },
  {
    en: "Durkar & Crigglestone",
    geoType: "MSOA",
    geoCode: "E02002473"
  },
  {
    en: "Kettlethorpe & Chapelthorpe",
    geoType: "MSOA",
    geoCode: "E02002474"
  },
  {
    en: "Walton, Woolley & Bretton",
    geoType: "MSOA",
    geoCode: "E02002475"
  },
  {
    en: "Kinsley & Fitzwilliam",
    geoType: "MSOA",
    geoCode: "E02002476"
  },
  {
    en: "Ryhill & South Hiendley",
    geoType: "MSOA",
    geoCode: "E02002477"
  },
  {
    en: "Upton",
    geoType: "MSOA",
    geoCode: "E02002478"
  },
  {
    en: "Hemsworth Town",
    geoType: "MSOA",
    geoCode: "E02002479"
  },
  {
    en: "Moorthorpe",
    geoType: "MSOA",
    geoCode: "E02002480"
  },
  {
    en: "South Elmsall",
    geoType: "MSOA",
    geoCode: "E02002481"
  },
  {
    en: "South Kirkby",
    geoType: "MSOA",
    geoCode: "E02002482"
  },
  {
    en: "Clavering",
    geoType: "MSOA",
    geoCode: "E02002483"
  },
  {
    en: "Headland & West View",
    geoType: "MSOA",
    geoCode: "E02002484"
  },
  {
    en: "Jesmond",
    geoType: "MSOA",
    geoCode: "E02002485"
  },
  {
    en: "Old Town & Grange",
    geoType: "MSOA",
    geoCode: "E02002489"
  },
  {
    en: "Foggy Furze",
    geoType: "MSOA",
    geoCode: "E02002490"
  },
  {
    en: "Rift House & Summerhill",
    geoType: "MSOA",
    geoCode: "E02002491"
  },
  {
    en: "Rossmere & Mill",
    geoType: "MSOA",
    geoCode: "E02002492"
  },
  {
    en: "Seaton Carew",
    geoType: "MSOA",
    geoCode: "E02002493"
  },
  {
    en: "Owton Manor",
    geoType: "MSOA",
    geoCode: "E02002494"
  },
  {
    en: "Middlesbrough Central",
    geoType: "MSOA",
    geoCode: "E02002496"
  },
  {
    en: "North Ormesby & Brambles",
    geoType: "MSOA",
    geoCode: "E02002497"
  },
  {
    en: "Ayresome",
    geoType: "MSOA",
    geoCode: "E02002498"
  },
  {
    en: "Berwick Hills",
    geoType: "MSOA",
    geoCode: "E02002499"
  },
  {
    en: "Linthorpe East & Albert Park",
    geoType: "MSOA",
    geoCode: "E02002500"
  },
  {
    en: "Park Vale",
    geoType: "MSOA",
    geoCode: "E02002501"
  },
  {
    en: "Thorntree",
    geoType: "MSOA",
    geoCode: "E02002502"
  },
  {
    en: "Newport & Maze Park",
    geoType: "MSOA",
    geoCode: "E02002503"
  },
  {
    en: "Linthorpe West",
    geoType: "MSOA",
    geoCode: "E02002504"
  },
  {
    en: "Park End",
    geoType: "MSOA",
    geoCode: "E02002505"
  },
  {
    en: "Beechwood & James Cook",
    geoType: "MSOA",
    geoCode: "E02002506"
  },
  {
    en: "Acklam",
    geoType: "MSOA",
    geoCode: "E02002507"
  },
  {
    en: "Kader",
    geoType: "MSOA",
    geoCode: "E02002508"
  },
  {
    en: "Easterside",
    geoType: "MSOA",
    geoCode: "E02002509"
  },
  {
    en: "Trimdon",
    geoType: "MSOA",
    geoCode: "E02002510"
  },
  {
    en: "Marton West",
    geoType: "MSOA",
    geoCode: "E02002512"
  },
  {
    en: "Stainton & Hemlington",
    geoType: "MSOA",
    geoCode: "E02002513"
  },
  {
    en: "Coulby Newham",
    geoType: "MSOA",
    geoCode: "E02002514"
  },
  {
    en: "Redcar Town & Coatham",
    geoType: "MSOA",
    geoCode: "E02002515"
  },
  {
    en: "Redcar Lakes North",
    geoType: "MSOA",
    geoCode: "E02002516"
  },
  {
    en: "Dormanstown",
    geoType: "MSOA",
    geoCode: "E02002517"
  },
  {
    en: "Redcar East",
    geoType: "MSOA",
    geoCode: "E02002518"
  },
  {
    en: "Redcar Lakes South",
    geoType: "MSOA",
    geoCode: "E02002519"
  },
  {
    en: "Marske",
    geoType: "MSOA",
    geoCode: "E02002520"
  },
  {
    en: "Saltburn",
    geoType: "MSOA",
    geoCode: "E02002521"
  },
  {
    en: "Grangetown",
    geoType: "MSOA",
    geoCode: "E02002523"
  },
  {
    en: "Brotton",
    geoType: "MSOA",
    geoCode: "E02002524"
  },
  {
    en: "Eston",
    geoType: "MSOA",
    geoCode: "E02002525"
  },
  {
    en: "Skelton",
    geoType: "MSOA",
    geoCode: "E02002526"
  },
  {
    en: "Loftus & Skinningrove",
    geoType: "MSOA",
    geoCode: "E02002527"
  },
  {
    en: "Bankfields",
    geoType: "MSOA",
    geoCode: "E02002529"
  },
  {
    en: "Boosbeck, Lingdale & Easington",
    geoType: "MSOA",
    geoCode: "E02002530"
  },
  {
    en: "Guisborough North",
    geoType: "MSOA",
    geoCode: "E02002532"
  },
  {
    en: "Guisborough West",
    geoType: "MSOA",
    geoCode: "E02002533"
  },
  {
    en: "Guisborough Outer & Upleatham",
    geoType: "MSOA",
    geoCode: "E02002534"
  },
  {
    en: "Billingham North & Wolviston",
    geoType: "MSOA",
    geoCode: "E02002535"
  },
  {
    en: "Billingham Central",
    geoType: "MSOA",
    geoCode: "E02002536"
  },
  {
    en: "Billingham East & Haverton Hill",
    geoType: "MSOA",
    geoCode: "E02002537"
  },
  {
    en: "Billingham South",
    geoType: "MSOA",
    geoCode: "E02002538"
  },
  {
    en: "Billingham West, Stillington & Longnewton",
    geoType: "MSOA",
    geoCode: "E02002539"
  },
  {
    en: "Norton North",
    geoType: "MSOA",
    geoCode: "E02002540"
  },
  {
    en: "Norton High Street",
    geoType: "MSOA",
    geoCode: "E02002541"
  },
  {
    en: "Roseworth",
    geoType: "MSOA",
    geoCode: "E02002542"
  },
  {
    en: "Hardwick & Salters Lane",
    geoType: "MSOA",
    geoCode: "E02002543"
  },
  {
    en: "Norton South",
    geoType: "MSOA",
    geoCode: "E02002544"
  },
  {
    en: "Rimswell & Bishopsgarth",
    geoType: "MSOA",
    geoCode: "E02002545"
  },
  {
    en: "Eastbourne & Newham Grange",
    geoType: "MSOA",
    geoCode: "E02002546"
  },
  {
    en: "Elm Tree & Grangefield",
    geoType: "MSOA",
    geoCode: "E02002547"
  },
  {
    en: "Fairfield",
    geoType: "MSOA",
    geoCode: "E02002549"
  },
  {
    en: "Hartburn",
    geoType: "MSOA",
    geoCode: "E02002550"
  },
  {
    en: "Thornaby North",
    geoType: "MSOA",
    geoCode: "E02002551"
  },
  {
    en: "Thornaby Mandale",
    geoType: "MSOA",
    geoCode: "E02002552"
  },
  {
    en: "Thornaby Village",
    geoType: "MSOA",
    geoCode: "E02002553"
  },
  {
    en: "Thornaby South",
    geoType: "MSOA",
    geoCode: "E02002554"
  },
  {
    en: "Eaglescliffe",
    geoType: "MSOA",
    geoCode: "E02002555"
  },
  {
    en: "Ingleby Barwick East & Hilton",
    geoType: "MSOA",
    geoCode: "E02002556"
  },
  {
    en: "Yarm",
    geoType: "MSOA",
    geoCode: "E02002558"
  },
  {
    en: "Faverdale, Heighington & Sadberge",
    geoType: "MSOA",
    geoCode: "E02002559"
  },
  {
    en: "Harrowgate Hill",
    geoType: "MSOA",
    geoCode: "E02002560"
  },
  {
    en: "Whinfield",
    geoType: "MSOA",
    geoCode: "E02002561"
  },
  {
    en: "Rise Carr",
    geoType: "MSOA",
    geoCode: "E02002562"
  },
  {
    en: "Haughton Le Skerne",
    geoType: "MSOA",
    geoCode: "E02002563"
  },
  {
    en: "Cockerton & Hopetown",
    geoType: "MSOA",
    geoCode: "E02002564"
  },
  {
    en: "Albert Hill & Red Hall",
    geoType: "MSOA",
    geoCode: "E02002567"
  },
  {
    en: "College & Park West",
    geoType: "MSOA",
    geoCode: "E02002568"
  },
  {
    en: "Hummersknott",
    geoType: "MSOA",
    geoCode: "E02002569"
  },
  {
    en: "Bank Top",
    geoType: "MSOA",
    geoCode: "E02002570"
  },
  {
    en: "Firthmoor",
    geoType: "MSOA",
    geoCode: "E02002571"
  },
  {
    en: "Park East",
    geoType: "MSOA",
    geoCode: "E02002572"
  },
  {
    en: "Middleton & Hurworth",
    geoType: "MSOA",
    geoCode: "E02002573"
  },
  {
    en: "Farnworth",
    geoType: "MSOA",
    geoCode: "E02002574"
  },
  {
    en: "Upton Rocks",
    geoType: "MSOA",
    geoCode: "E02002575"
  },
  {
    en: "Halton View",
    geoType: "MSOA",
    geoCode: "E02002576"
  },
  {
    en: "Hough Green",
    geoType: "MSOA",
    geoCode: "E02002577"
  },
  {
    en: "Victoria Park",
    geoType: "MSOA",
    geoCode: "E02002578"
  },
  {
    en: "Ditton",
    geoType: "MSOA",
    geoCode: "E02002579"
  },
  {
    en: "Widnes Riverside",
    geoType: "MSOA",
    geoCode: "E02002580"
  },
  {
    en: "Hale Bank",
    geoType: "MSOA",
    geoCode: "E02002581"
  },
  {
    en: "Sandymoor, Daresbury & Preston Brook",
    geoType: "MSOA",
    geoCode: "E02002582"
  },
  {
    en: "Halton Castlefield",
    geoType: "MSOA",
    geoCode: "E02002583"
  },
  {
    en: "Runcorn Halton Road",
    geoType: "MSOA",
    geoCode: "E02002584"
  },
  {
    en: "Runcorn Town & Westfield",
    geoType: "MSOA",
    geoCode: "E02002585"
  },
  {
    en: "Grange, Halton Brook & Hallwood Park",
    geoType: "MSOA",
    geoCode: "E02002586"
  },
  {
    en: "Norton",
    geoType: "MSOA",
    geoCode: "E02002587"
  },
  {
    en: "Halton Lea & Brookvale",
    geoType: "MSOA",
    geoCode: "E02002588"
  },
  {
    en: "Beechwood & Heath",
    geoType: "MSOA",
    geoCode: "E02002589"
  },
  {
    en: "Culcheth West & Croft",
    geoType: "MSOA",
    geoCode: "E02002590"
  },
  {
    en: "Culcheth East & Hollins Green",
    geoType: "MSOA",
    geoCode: "E02002591"
  },
  {
    en: "Winwick & Burtonwood",
    geoType: "MSOA",
    geoCode: "E02002592"
  },
  {
    en: "Locking Stumps",
    geoType: "MSOA",
    geoCode: "E02002593"
  },
  {
    en: "Oakwood & Gorse Covert",
    geoType: "MSOA",
    geoCode: "E02002594"
  },
  {
    en: "Hulme",
    geoType: "MSOA",
    geoCode: "E02002595"
  },
  {
    en: "Houghton Green & Fearnhead",
    geoType: "MSOA",
    geoCode: "E02002596"
  },
  {
    en: "Blackbrook",
    geoType: "MSOA",
    geoCode: "E02002597"
  },
  {
    en: "Kingswood & Whittle Hall",
    geoType: "MSOA",
    geoCode: "E02002598"
  },
  {
    en: "Callands & Old Hall",
    geoType: "MSOA",
    geoCode: "E02002599"
  },
  {
    en: "Orford",
    geoType: "MSOA",
    geoCode: "E02002600"
  },
  {
    en: "Padgate & Paddington",
    geoType: "MSOA",
    geoCode: "E02002601"
  },
  {
    en: "Bewsey & Dallam",
    geoType: "MSOA",
    geoCode: "E02002602"
  },
  {
    en: "Woolston",
    geoType: "MSOA",
    geoCode: "E02002603"
  },
  {
    en: "Great Sankey",
    geoType: "MSOA",
    geoCode: "E02002604"
  },
  {
    en: "Hood Manor & Sankey Bridges",
    geoType: "MSOA",
    geoCode: "E02002605"
  },
  {
    en: "Fairfield & Howley",
    geoType: "MSOA",
    geoCode: "E02002606"
  },
  {
    en: "Central Warrington",
    geoType: "MSOA",
    geoCode: "E02002607"
  },
  {
    en: "Penketh & Cuerdley",
    geoType: "MSOA",
    geoCode: "E02002608"
  },
  {
    en: "Latchford",
    geoType: "MSOA",
    geoCode: "E02002609"
  },
  {
    en: "Lymm",
    geoType: "MSOA",
    geoCode: "E02002610"
  },
  {
    en: "Grappenhall",
    geoType: "MSOA",
    geoCode: "E02002611"
  },
  {
    en: "Stockton Heath & Hillcliffe",
    geoType: "MSOA",
    geoCode: "E02002612"
  },
  {
    en: "Appleton Thorn, Stretton & Walton",
    geoType: "MSOA",
    geoCode: "E02002613"
  },
  {
    en: "Appleton",
    geoType: "MSOA",
    geoCode: "E02002614"
  },
  {
    en: "Roe Lee, Brownhill & Sunnybower",
    geoType: "MSOA",
    geoCode: "E02002615"
  },
  {
    en: "Lammack & Revidge",
    geoType: "MSOA",
    geoCode: "E02002616"
  },
  {
    en: "Little Harwood",
    geoType: "MSOA",
    geoCode: "E02002617"
  },
  {
    en: "Bastwell",
    geoType: "MSOA",
    geoCode: "E02002618"
  },
  {
    en: "Wensley Fold",
    geoType: "MSOA",
    geoCode: "E02002619"
  },
  {
    en: "Central Blackburn",
    geoType: "MSOA",
    geoCode: "E02002620"
  },
  {
    en: "Audley",
    geoType: "MSOA",
    geoCode: "E02002621"
  },
  {
    en: "Shadsworth & Intack",
    geoType: "MSOA",
    geoCode: "E02002622"
  },
  {
    en: "Witton, Mill Hill & Hollin Bank",
    geoType: "MSOA",
    geoCode: "E02002623"
  },
  {
    en: "Beardwood, Pleasington & Livesey",
    geoType: "MSOA",
    geoCode: "E02002624"
  },
  {
    en: "Queen's Park & Higher Croft",
    geoType: "MSOA",
    geoCode: "E02002625"
  },
  {
    en: "Meadowhead",
    geoType: "MSOA",
    geoCode: "E02002626"
  },
  {
    en: "Ewood & Fernhurst",
    geoType: "MSOA",
    geoCode: "E02002627"
  },
  {
    en: "North Darwen",
    geoType: "MSOA",
    geoCode: "E02002628"
  },
  {
    en: "East Darwen",
    geoType: "MSOA",
    geoCode: "E02002629"
  },
  {
    en: "Darwen Town",
    geoType: "MSOA",
    geoCode: "E02002630"
  },
  {
    en: "South Darwen & Whitehall",
    geoType: "MSOA",
    geoCode: "E02002631"
  },
  {
    en: "Tockholes, Edgworth & Hoddlesden",
    geoType: "MSOA",
    geoCode: "E02002632"
  },
  {
    en: "Little Bispham & Anchorsholme",
    geoType: "MSOA",
    geoCode: "E02002633"
  },
  {
    en: "Churchtown",
    geoType: "MSOA",
    geoCode: "E02002634"
  },
  {
    en: "Norbreck & Bispham",
    geoType: "MSOA",
    geoCode: "E02002635"
  },
  {
    en: "Warbreck & Bispham Road",
    geoType: "MSOA",
    geoCode: "E02002636"
  },
  {
    en: "Hoohill",
    geoType: "MSOA",
    geoCode: "E02002637"
  },
  {
    en: "North Shore",
    geoType: "MSOA",
    geoCode: "E02002638"
  },
  {
    en: "Little Layton & Little Carleton",
    geoType: "MSOA",
    geoCode: "E02002639"
  },
  {
    en: "North East Centre",
    geoType: "MSOA",
    geoCode: "E02002640"
  },
  {
    en: "Queenstown & Layton",
    geoType: "MSOA",
    geoCode: "E02002641"
  },
  {
    en: "Central Blackpool",
    geoType: "MSOA",
    geoCode: "E02002642"
  },
  {
    en: "Park Road",
    geoType: "MSOA",
    geoCode: "E02002643"
  },
  {
    en: "Stanley Park & Great Marton",
    geoType: "MSOA",
    geoCode: "E02002644"
  },
  {
    en: "South Promenade & Seasiders Way",
    geoType: "MSOA",
    geoCode: "E02002645"
  },
  {
    en: "Little Marton & Marton Moss Side",
    geoType: "MSOA",
    geoCode: "E02002646"
  },
  {
    en: "Victoria",
    geoType: "MSOA",
    geoCode: "E02002647"
  },
  {
    en: "Hawes Side",
    geoType: "MSOA",
    geoCode: "E02002648"
  },
  {
    en: "South Shore",
    geoType: "MSOA",
    geoCode: "E02002649"
  },
  {
    en: "Common Edge",
    geoType: "MSOA",
    geoCode: "E02002650"
  },
  {
    en: "Squires Gate",
    geoType: "MSOA",
    geoCode: "E02002651"
  },
  {
    en: "Bransholme Central",
    geoType: "MSOA",
    geoCode: "E02002653"
  },
  {
    en: "Orchard Park",
    geoType: "MSOA",
    geoCode: "E02002654"
  },
  {
    en: "Bransholme East",
    geoType: "MSOA",
    geoCode: "E02002655"
  },
  {
    en: "Haworth Park",
    geoType: "MSOA",
    geoCode: "E02002656"
  },
  {
    en: "Bransholme West",
    geoType: "MSOA",
    geoCode: "E02002657"
  },
  {
    en: "Sutton North",
    geoType: "MSOA",
    geoCode: "E02002658"
  },
  {
    en: "Greenwood",
    geoType: "MSOA",
    geoCode: "E02002659"
  },
  {
    en: "Bilton Grange",
    geoType: "MSOA",
    geoCode: "E02002660"
  },
  {
    en: "Longhill",
    geoType: "MSOA",
    geoCode: "E02002661"
  },
  {
    en: "Ings",
    geoType: "MSOA",
    geoCode: "E02002662"
  },
  {
    en: "University & Newland North",
    geoType: "MSOA",
    geoCode: "E02002663"
  },
  {
    en: "Sutton South",
    geoType: "MSOA",
    geoCode: "E02002664"
  },
  {
    en: "Bricknell East",
    geoType: "MSOA",
    geoCode: "E02002665"
  },
  {
    en: "Newland South",
    geoType: "MSOA",
    geoCode: "E02002666"
  },
  {
    en: "Stoneferry & Sutton Fields",
    geoType: "MSOA",
    geoCode: "E02002667"
  },
  {
    en: "Southcoates East",
    geoType: "MSOA",
    geoCode: "E02002668"
  },
  {
    en: "Newland Avenues",
    geoType: "MSOA",
    geoCode: "E02002669"
  },
  {
    en: "Bricknell West",
    geoType: "MSOA",
    geoCode: "E02002670"
  },
  {
    en: "Southcoates Central & Docks",
    geoType: "MSOA",
    geoCode: "E02002671"
  },
  {
    en: "Greatfield",
    geoType: "MSOA",
    geoCode: "E02002672"
  },
  {
    en: "Southcoates West",
    geoType: "MSOA",
    geoCode: "E02002673"
  },
  {
    en: "Derringham",
    geoType: "MSOA",
    geoCode: "E02002674"
  },
  {
    en: "Sculcoates",
    geoType: "MSOA",
    geoCode: "E02002675"
  },
  {
    en: "Chanterlands Avenue",
    geoType: "MSOA",
    geoCode: "E02002676"
  },
  {
    en: "Drypool & Victoria Dock",
    geoType: "MSOA",
    geoCode: "E02002677"
  },
  {
    en: "Newington",
    geoType: "MSOA",
    geoCode: "E02002678"
  },
  {
    en: "East Ella",
    geoType: "MSOA",
    geoCode: "E02002679"
  },
  {
    en: "Hull City Centre",
    geoType: "MSOA",
    geoCode: "E02002680"
  },
  {
    en: "Boulevard & St Andrew's Quay",
    geoType: "MSOA",
    geoCode: "E02002681"
  },
  {
    en: "Gipsyville",
    geoType: "MSOA",
    geoCode: "E02002682"
  },
  {
    en: "Bridlington North & Bempton",
    geoType: "MSOA",
    geoCode: "E02002684"
  },
  {
    en: "Bridlington East & Flamborough",
    geoType: "MSOA",
    geoCode: "E02002685"
  },
  {
    en: "Bridlington West",
    geoType: "MSOA",
    geoCode: "E02002686"
  },
  {
    en: "Bridlington Central",
    geoType: "MSOA",
    geoCode: "E02002687"
  },
  {
    en: "Bridlington Hilderthorpe",
    geoType: "MSOA",
    geoCode: "E02002688"
  },
  {
    en: "Burton Agnes, Rudston & Langtoft",
    geoType: "MSOA",
    geoCode: "E02002689"
  },
  {
    en: "Driffield West & Huggate",
    geoType: "MSOA",
    geoCode: "E02002691"
  },
  {
    en: "Stamford Bridge & Sutton Upon Derwent",
    geoType: "MSOA",
    geoCode: "E02002692"
  },
  {
    en: "Skipsea, Beeford & Brandesburton",
    geoType: "MSOA",
    geoCode: "E02002693"
  },
  {
    en: "Pocklington",
    geoType: "MSOA",
    geoCode: "E02002694"
  },
  {
    en: "Hornsea",
    geoType: "MSOA",
    geoCode: "E02002695"
  },
  {
    en: "Cherry Burton, Leconfield & Middleton",
    geoType: "MSOA",
    geoCode: "E02002696"
  },
  {
    en: "Leven & Tickton",
    geoType: "MSOA",
    geoCode: "E02002697"
  },
  {
    en: "Market Weighton",
    geoType: "MSOA",
    geoCode: "E02002698"
  },
  {
    en: "Molescroft",
    geoType: "MSOA",
    geoCode: "E02002699"
  },
  {
    en: "Beverley North",
    geoType: "MSOA",
    geoCode: "E02002700"
  },
  {
    en: "Holme, Melbourne & Bubwith",
    geoType: "MSOA",
    geoCode: "E02002701"
  },
  {
    en: "Beverley South",
    geoType: "MSOA",
    geoCode: "E02002702"
  },
  {
    en: "Walkington, Bishop Burton & Woodmansey",
    geoType: "MSOA",
    geoCode: "E02002703"
  },
  {
    en: "Aldbrough & Sproatley",
    geoType: "MSOA",
    geoCode: "E02002704"
  },
  {
    en: "Cottingham West",
    geoType: "MSOA",
    geoCode: "E02002705"
  },
  {
    en: "Cottingham East",
    geoType: "MSOA",
    geoCode: "E02002706"
  },
  {
    en: "South Cave, Newbald & Little Weighton",
    geoType: "MSOA",
    geoCode: "E02002707"
  },
  {
    en: "Cottingham South & North Ella",
    geoType: "MSOA",
    geoCode: "E02002708"
  },
  {
    en: "Gilberdyke & North Cave",
    geoType: "MSOA",
    geoCode: "E02002709"
  },
  {
    en: "Willerby",
    geoType: "MSOA",
    geoCode: "E02002710"
  },
  {
    en: "Kirk Ella",
    geoType: "MSOA",
    geoCode: "E02002711"
  },
  {
    en: "Hedon & Preston",
    geoType: "MSOA",
    geoCode: "E02002712"
  },
  {
    en: "Withernsea West & Keyingham",
    geoType: "MSOA",
    geoCode: "E02002714"
  },
  {
    en: "Brough",
    geoType: "MSOA",
    geoCode: "E02002715"
  },
  {
    en: "Burstwick & Thorngumbald",
    geoType: "MSOA",
    geoCode: "E02002716"
  },
  {
    en: "Hessle East & Anlaby South",
    geoType: "MSOA",
    geoCode: "E02002717"
  },
  {
    en: "North Ferriby & Swanland",
    geoType: "MSOA",
    geoCode: "E02002718"
  },
  {
    en: "Hessle West",
    geoType: "MSOA",
    geoCode: "E02002719"
  },
  {
    en: "Howden South & Goole North",
    geoType: "MSOA",
    geoCode: "E02002720"
  },
  {
    en: "Howden North, Eastrington & Swinefleet",
    geoType: "MSOA",
    geoCode: "E02002721"
  },
  {
    en: "Withernsea East & Patrington",
    geoType: "MSOA",
    geoCode: "E02002722"
  },
  {
    en: "Goole West",
    geoType: "MSOA",
    geoCode: "E02002723"
  },
  {
    en: "Goole East",
    geoType: "MSOA",
    geoCode: "E02002724"
  },
  {
    en: "Snaith",
    geoType: "MSOA",
    geoCode: "E02002725"
  },
  {
    en: "Immingham & Habrough",
    geoType: "MSOA",
    geoCode: "E02002726"
  },
  {
    en: "Grimsby East Marsh & Port",
    geoType: "MSOA",
    geoCode: "E02002727"
  },
  {
    en: "Grimsby West Marsh",
    geoType: "MSOA",
    geoCode: "E02002728"
  },
  {
    en: "Great Coates & The Willows",
    geoType: "MSOA",
    geoCode: "E02002729"
  },
  {
    en: "Sidney Park",
    geoType: "MSOA",
    geoCode: "E02002730"
  },
  {
    en: "New Clee",
    geoType: "MSOA",
    geoCode: "E02002731"
  },
  {
    en: "Laceby, Healing & Stallingborough",
    geoType: "MSOA",
    geoCode: "E02002732"
  },
  {
    en: "Littlefield North",
    geoType: "MSOA",
    geoCode: "E02002733"
  },
  {
    en: "Yarborough",
    geoType: "MSOA",
    geoCode: "E02002734"
  },
  {
    en: "Holme Hill",
    geoType: "MSOA",
    geoCode: "E02002736"
  },
  {
    en: "Weelsby & Old Clee",
    geoType: "MSOA",
    geoCode: "E02002737"
  },
  {
    en: "Laceby Acres & Wybers Wood",
    geoType: "MSOA",
    geoCode: "E02002738"
  },
  {
    en: "Cleethorpes Beacon Hill",
    geoType: "MSOA",
    geoCode: "E02002739"
  },
  {
    en: "Littlefield South & Grange",
    geoType: "MSOA",
    geoCode: "E02002740"
  },
  {
    en: "Wellow",
    geoType: "MSOA",
    geoCode: "E02002741"
  },
  {
    en: "Cleethorpes West",
    geoType: "MSOA",
    geoCode: "E02002743"
  },
  {
    en: "Nunsthorpe",
    geoType: "MSOA",
    geoCode: "E02002744"
  },
  {
    en: "Humberston",
    geoType: "MSOA",
    geoCode: "E02002745"
  },
  {
    en: "Scartho",
    geoType: "MSOA",
    geoCode: "E02002746"
  },
  {
    en: "New Waltham",
    geoType: "MSOA",
    geoCode: "E02002747"
  },
  {
    en: "Waltham & East Ravendale",
    geoType: "MSOA",
    geoCode: "E02002748"
  },
  {
    en: "Barton upon Humber",
    geoType: "MSOA",
    geoCode: "E02002749"
  },
  {
    en: "Goxhill, Barrow & New Holland",
    geoType: "MSOA",
    geoCode: "E02002750"
  },
  {
    en: "Winterton & Winteringham",
    geoType: "MSOA",
    geoCode: "E02002751"
  },
  {
    en: "Barnetby, Ulceby & Killingholme",
    geoType: "MSOA",
    geoCode: "E02002752"
  },
  {
    en: "Burton upon Stather, Alkborough & Gunness",
    geoType: "MSOA",
    geoCode: "E02002753"
  },
  {
    en: "Crowle & Keadby",
    geoType: "MSOA",
    geoCode: "E02002754"
  },
  {
    en: "Scunthorpe North",
    geoType: "MSOA",
    geoCode: "E02002755"
  },
  {
    en: "Scunthorpe Central & Crosby",
    geoType: "MSOA",
    geoCode: "E02002756"
  },
  {
    en: "Scunthorpe Berkeley",
    geoType: "MSOA",
    geoCode: "E02002757"
  },
  {
    en: "Scunthorpe Frodingham",
    geoType: "MSOA",
    geoCode: "E02002758"
  },
  {
    en: "Brigg & South Ferriby",
    geoType: "MSOA",
    geoCode: "E02002759"
  },
  {
    en: "Scunthorpe Central Park",
    geoType: "MSOA",
    geoCode: "E02002760"
  },
  {
    en: "Broughton & Appleby",
    geoType: "MSOA",
    geoCode: "E02002761"
  },
  {
    en: "Scunthorpe Lincoln Gardens",
    geoType: "MSOA",
    geoCode: "E02002762"
  },
  {
    en: "Scunthorpe Lakeside",
    geoType: "MSOA",
    geoCode: "E02002763"
  },
  {
    en: "Scunthorpe Westcliff",
    geoType: "MSOA",
    geoCode: "E02002764"
  },
  {
    en: "Scunthorpe Ashby",
    geoType: "MSOA",
    geoCode: "E02002765"
  },
  {
    en: "Scunthorpe Bottesford",
    geoType: "MSOA",
    geoCode: "E02002766"
  },
  {
    en: "Scunthorpe Yaddlethorpe",
    geoType: "MSOA",
    geoCode: "E02002767"
  },
  {
    en: "Epworth & Bracon",
    geoType: "MSOA",
    geoCode: "E02002768"
  },
  {
    en: "Messingham & Scawby",
    geoType: "MSOA",
    geoCode: "E02002769"
  },
  {
    en: "Kirton in Lindsey & Hibaldstow",
    geoType: "MSOA",
    geoCode: "E02002770"
  },
  {
    en: "Westwoodside, Haxey & Owston Ferry",
    geoType: "MSOA",
    geoCode: "E02002771"
  },
  {
    en: "Strensall",
    geoType: "MSOA",
    geoCode: "E02002772"
  },
  {
    en: "Haxby",
    geoType: "MSOA",
    geoCode: "E02002773"
  },
  {
    en: "Wigginton",
    geoType: "MSOA",
    geoCode: "E02002774"
  },
  {
    en: "New Earswick",
    geoType: "MSOA",
    geoCode: "E02002775"
  },
  {
    en: "Huntington",
    geoType: "MSOA",
    geoCode: "E02002776"
  },
  {
    en: "Clifton Without & Skelton",
    geoType: "MSOA",
    geoCode: "E02002777"
  },
  {
    en: "Rawcliffe & Clifton South",
    geoType: "MSOA",
    geoCode: "E02002778"
  },
  {
    en: "Heworth North & Stockton",
    geoType: "MSOA",
    geoCode: "E02002779"
  },
  {
    en: "Clifton North",
    geoType: "MSOA",
    geoCode: "E02002780"
  },
  {
    en: "Heworth South & The Groves",
    geoType: "MSOA",
    geoCode: "E02002781"
  },
  {
    en: "Poppleton, Rufforth & Askham",
    geoType: "MSOA",
    geoCode: "E02002782"
  },
  {
    en: "Acomb",
    geoType: "MSOA",
    geoCode: "E02002783"
  },
  {
    en: "York City Centre",
    geoType: "MSOA",
    geoCode: "E02002784"
  },
  {
    en: "Osbaldwick",
    geoType: "MSOA",
    geoCode: "E02002785"
  },
  {
    en: "Tang Hall",
    geoType: "MSOA",
    geoCode: "E02002786"
  },
  {
    en: "Holgate West",
    geoType: "MSOA",
    geoCode: "E02002787"
  },
  {
    en: "Holgate East",
    geoType: "MSOA",
    geoCode: "E02002788"
  },
  {
    en: "Westfield, Chapelfields & Foxwood",
    geoType: "MSOA",
    geoCode: "E02002789"
  },
  {
    en: "Fulford Road & Clementhorpe",
    geoType: "MSOA",
    geoCode: "E02002790"
  },
  {
    en: "Dunnington, Elvington & Wheldrake",
    geoType: "MSOA",
    geoCode: "E02002791"
  },
  {
    en: "South Bank & Dringhouses",
    geoType: "MSOA",
    geoCode: "E02002792"
  },
  {
    en: "Woodthorpe & Acomb Park",
    geoType: "MSOA",
    geoCode: "E02002793"
  },
  {
    en: "Fulford, Heslington & University",
    geoType: "MSOA",
    geoCode: "E02002794"
  },
  {
    en: "Bishopthorpe & Copmanthorpe",
    geoType: "MSOA",
    geoCode: "E02002795"
  },
  {
    en: "Allestree North",
    geoType: "MSOA",
    geoCode: "E02002796"
  },
  {
    en: "Allestree South",
    geoType: "MSOA",
    geoCode: "E02002797"
  },
  {
    en: "Oakwood",
    geoType: "MSOA",
    geoCode: "E02002798"
  },
  {
    en: "Breadsall Hilltop",
    geoType: "MSOA",
    geoCode: "E02002799"
  },
  {
    en: "Darley Abbey",
    geoType: "MSOA",
    geoCode: "E02002800"
  },
  {
    en: "Chaddesden North",
    geoType: "MSOA",
    geoCode: "E02002801"
  },
  {
    en: "Chaddesden West",
    geoType: "MSOA",
    geoCode: "E02002802"
  },
  {
    en: "Little Chester",
    geoType: "MSOA",
    geoCode: "E02002803"
  },
  {
    en: "Mackworth",
    geoType: "MSOA",
    geoCode: "E02002804"
  },
  {
    en: "Spondon North",
    geoType: "MSOA",
    geoCode: "E02002805"
  },
  {
    en: "New Zealand",
    geoType: "MSOA",
    geoCode: "E02002806"
  },
  {
    en: "Chaddesden Park",
    geoType: "MSOA",
    geoCode: "E02002807"
  },
  {
    en: "Cathedral Quarter & California",
    geoType: "MSOA",
    geoCode: "E02002808"
  },
  {
    en: "Spondon South",
    geoType: "MSOA",
    geoCode: "E02002809"
  },
  {
    en: "Mickleover North",
    geoType: "MSOA",
    geoCode: "E02002810"
  },
  {
    en: "New Normanton",
    geoType: "MSOA",
    geoCode: "E02002811"
  },
  {
    en: "Littleover East",
    geoType: "MSOA",
    geoCode: "E02002812"
  },
  {
    en: "Rose Hill & Castleward",
    geoType: "MSOA",
    geoCode: "E02002813"
  },
  {
    en: "Mickleover South",
    geoType: "MSOA",
    geoCode: "E02002814"
  },
  {
    en: "Normanton North & Peartree",
    geoType: "MSOA",
    geoCode: "E02002815"
  },
  {
    en: "Littleover West & Heatherton",
    geoType: "MSOA",
    geoCode: "E02002816"
  },
  {
    en: "Normanton West",
    geoType: "MSOA",
    geoCode: "E02002817"
  },
  {
    en: "Normanton South",
    geoType: "MSOA",
    geoCode: "E02002818"
  },
  {
    en: "Wilmorton & Alvaston Village",
    geoType: "MSOA",
    geoCode: "E02002819"
  },
  {
    en: "Alvaston & Crewton",
    geoType: "MSOA",
    geoCode: "E02002820"
  },
  {
    en: "Allenton & Osmaston",
    geoType: "MSOA",
    geoCode: "E02002821"
  },
  {
    en: "Sunny Hill",
    geoType: "MSOA",
    geoCode: "E02002822"
  },
  {
    en: "Boulton",
    geoType: "MSOA",
    geoCode: "E02002823"
  },
  {
    en: "Sinfin",
    geoType: "MSOA",
    geoCode: "E02002824"
  },
  {
    en: "Chellaston West & Shelton Lock",
    geoType: "MSOA",
    geoCode: "E02002825"
  },
  {
    en: "Chellaston East",
    geoType: "MSOA",
    geoCode: "E02002826"
  },
  {
    en: "Beaumont Park",
    geoType: "MSOA",
    geoCode: "E02002827"
  },
  {
    en: "Rushey Mead North",
    geoType: "MSOA",
    geoCode: "E02002828"
  },
  {
    en: "Stocking Farm & Mowmacre",
    geoType: "MSOA",
    geoCode: "E02002829"
  },
  {
    en: "Bradgate Heights & Beaumont Leys",
    geoType: "MSOA",
    geoCode: "E02002830"
  },
  {
    en: "Rushey Mead South",
    geoType: "MSOA",
    geoCode: "E02002831"
  },
  {
    en: "Belgrave North West",
    geoType: "MSOA",
    geoCode: "E02002832"
  },
  {
    en: "Belgrave North East",
    geoType: "MSOA",
    geoCode: "E02002833"
  },
  {
    en: "Abbey Park",
    geoType: "MSOA",
    geoCode: "E02002834"
  },
  {
    en: "Belgrave South",
    geoType: "MSOA",
    geoCode: "E02002836"
  },
  {
    en: "Northfields & Merrydale",
    geoType: "MSOA",
    geoCode: "E02002837"
  },
  {
    en: "New Parks & Stokeswood",
    geoType: "MSOA",
    geoCode: "E02002838"
  },
  {
    en: "Colchester Road",
    geoType: "MSOA",
    geoCode: "E02002839"
  },
  {
    en: "Newfoundpool",
    geoType: "MSOA",
    geoCode: "E02002842"
  },
  {
    en: "Spinney Hill Road",
    geoType: "MSOA",
    geoCode: "E02002843"
  },
  {
    en: "St Matthews & Highfields North",
    geoType: "MSOA",
    geoCode: "E02002844"
  },
  {
    en: "North Evington & Rowlatts Hill",
    geoType: "MSOA",
    geoCode: "E02002845"
  },
  {
    en: "Dane Hills & Western Park",
    geoType: "MSOA",
    geoCode: "E02002846"
  },
  {
    en: "Crown Hills",
    geoType: "MSOA",
    geoCode: "E02002847"
  },
  {
    en: "Highfields South",
    geoType: "MSOA",
    geoCode: "E02002848"
  },
  {
    en: "West End & Westcotes",
    geoType: "MSOA",
    geoCode: "E02002849"
  },
  {
    en: "Evington",
    geoType: "MSOA",
    geoCode: "E02002851"
  },
  {
    en: "Braunstone Park West",
    geoType: "MSOA",
    geoCode: "E02002852"
  },
  {
    en: "Stoneygate North",
    geoType: "MSOA",
    geoCode: "E02002853"
  },
  {
    en: "Braunstone Park East",
    geoType: "MSOA",
    geoCode: "E02002854"
  },
  {
    en: "Rowley Fields & Faircharm",
    geoType: "MSOA",
    geoCode: "E02002855"
  },
  {
    en: "Clarendon Park & Stoneygate South",
    geoType: "MSOA",
    geoCode: "E02002856"
  },
  {
    en: "Aylestone North & Saffron Fields",
    geoType: "MSOA",
    geoCode: "E02002857"
  },
  {
    en: "Knighton",
    geoType: "MSOA",
    geoCode: "E02002858"
  },
  {
    en: "Aylestone South",
    geoType: "MSOA",
    geoCode: "E02002860"
  },
  {
    en: "Saffron Lane",
    geoType: "MSOA",
    geoCode: "E02002861"
  },
  {
    en: "Eyres Monsell",
    geoType: "MSOA",
    geoCode: "E02002862"
  },
  {
    en: "Market Overton, Cottesmore & Empingham",
    geoType: "MSOA",
    geoCode: "E02002863"
  },
  {
    en: "Oakham West, Langham & Whissendine",
    geoType: "MSOA",
    geoCode: "E02002864"
  },
  {
    en: "Oakham East",
    geoType: "MSOA",
    geoCode: "E02002865"
  },
  {
    en: "Ketton, Ryhall & Luffenham",
    geoType: "MSOA",
    geoCode: "E02002866"
  },
  {
    en: "Uppingham, Lyddington & Braunston",
    geoType: "MSOA",
    geoCode: "E02002867"
  },
  {
    en: "Rise Park & Top Valley West",
    geoType: "MSOA",
    geoCode: "E02002868"
  },
  {
    en: "Bulwell North",
    geoType: "MSOA",
    geoCode: "E02002869"
  },
  {
    en: "Highbury Vale",
    geoType: "MSOA",
    geoCode: "E02002871"
  },
  {
    en: "Bulwell West",
    geoType: "MSOA",
    geoCode: "E02002872"
  },
  {
    en: "Bestwood",
    geoType: "MSOA",
    geoCode: "E02002873"
  },
  {
    en: "North Sherwood",
    geoType: "MSOA",
    geoCode: "E02002874"
  },
  {
    en: "Basford Park Lane",
    geoType: "MSOA",
    geoCode: "E02002875"
  },
  {
    en: "Old Basford",
    geoType: "MSOA",
    geoCode: "E02002876"
  },
  {
    en: "Sherwood Vale",
    geoType: "MSOA",
    geoCode: "E02002877"
  },
  {
    en: "Broxtowe & Cinderhill",
    geoType: "MSOA",
    geoCode: "E02002878"
  },
  {
    en: "New Basford",
    geoType: "MSOA",
    geoCode: "E02002879"
  },
  {
    en: "Aspley",
    geoType: "MSOA",
    geoCode: "E02002880"
  },
  {
    en: "Bilborough North",
    geoType: "MSOA",
    geoCode: "E02002881"
  },
  {
    en: "Mapperley Park",
    geoType: "MSOA",
    geoCode: "E02002882"
  },
  {
    en: "Thorneywood",
    geoType: "MSOA",
    geoCode: "E02002883"
  },
  {
    en: "Forest Fields",
    geoType: "MSOA",
    geoCode: "E02002884"
  },
  {
    en: "Hyson Green",
    geoType: "MSOA",
    geoCode: "E02002885"
  },
  {
    en: "Bobbers Mill",
    geoType: "MSOA",
    geoCode: "E02002886"
  },
  {
    en: "Beechdale",
    geoType: "MSOA",
    geoCode: "E02002887"
  },
  {
    en: "St Ann's East",
    geoType: "MSOA",
    geoCode: "E02002888"
  },
  {
    en: "Arboretum, Forest & Trent University",
    geoType: "MSOA",
    geoCode: "E02002889"
  },
  {
    en: "St Ann's West",
    geoType: "MSOA",
    geoCode: "E02002890"
  },
  {
    en: "Bakersfield",
    geoType: "MSOA",
    geoCode: "E02002891"
  },
  {
    en: "Bilborough South",
    geoType: "MSOA",
    geoCode: "E02002892"
  },
  {
    en: "Radford",
    geoType: "MSOA",
    geoCode: "E02002893"
  },
  {
    en: "The Park & Castle",
    geoType: "MSOA",
    geoCode: "E02002895"
  },
  {
    en: "Sneinton",
    geoType: "MSOA",
    geoCode: "E02002896"
  },
  {
    en: "Wollaton Vale",
    geoType: "MSOA",
    geoCode: "E02002897"
  },
  {
    en: "Lenton & Dunkirk",
    geoType: "MSOA",
    geoCode: "E02002898"
  },
  {
    en: "Wilford & Silverdale",
    geoType: "MSOA",
    geoCode: "E02002901"
  },
  {
    en: "Clifton North",
    geoType: "MSOA",
    geoCode: "E02002902"
  },
  {
    en: "Clifton West",
    geoType: "MSOA",
    geoCode: "E02002903"
  },
  {
    en: "Clifton South",
    geoType: "MSOA",
    geoCode: "E02002904"
  },
  {
    en: "Wigmore, Orleton & Brimfield",
    geoType: "MSOA",
    geoCode: "E02002905"
  },
  {
    en: "Leominster North",
    geoType: "MSOA",
    geoCode: "E02002906"
  },
  {
    en: "Leominster South",
    geoType: "MSOA",
    geoCode: "E02002907"
  },
  {
    en: "Shobdon, Luston & Bodenham",
    geoType: "MSOA",
    geoCode: "E02002908"
  },
  {
    en: "Bromyard & Bishop's Frome",
    geoType: "MSOA",
    geoCode: "E02002909"
  },
  {
    en: "Kington, Eardisley & Staunton",
    geoType: "MSOA",
    geoCode: "E02002910"
  },
  {
    en: "Credenhill, Weobley & Wellington",
    geoType: "MSOA",
    geoCode: "E02002911"
  },
  {
    en: "Lugwardine, Withington & Moreton on Lugg",
    geoType: "MSOA",
    geoCode: "E02002912"
  },
  {
    en: "Colwall, Cradley & Wellington Heath",
    geoType: "MSOA",
    geoCode: "E02002913"
  },
  {
    en: "Hereford North West",
    geoType: "MSOA",
    geoCode: "E02002914"
  },
  {
    en: "Hereford North East",
    geoType: "MSOA",
    geoCode: "E02002915"
  },
  {
    en: "Hereford Central",
    geoType: "MSOA",
    geoCode: "E02002916"
  },
  {
    en: "Hereford West",
    geoType: "MSOA",
    geoCode: "E02002917"
  },
  {
    en: "Hereford East",
    geoType: "MSOA",
    geoCode: "E02002918"
  },
  {
    en: "Hereford South",
    geoType: "MSOA",
    geoCode: "E02002919"
  },
  {
    en: "Belmont, Madley & Clehonger",
    geoType: "MSOA",
    geoCode: "E02002920"
  },
  {
    en: "Hereford South West",
    geoType: "MSOA",
    geoCode: "E02002921"
  },
  {
    en: "Fownhope, Tarrington & Marcle",
    geoType: "MSOA",
    geoCode: "E02002922"
  },
  {
    en: "Ledbury",
    geoType: "MSOA",
    geoCode: "E02002923"
  },
  {
    en: "Golden Valley",
    geoType: "MSOA",
    geoCode: "E02002924"
  },
  {
    en: "Kingstone & Kingsthorne",
    geoType: "MSOA",
    geoCode: "E02002925"
  },
  {
    en: "Ross-on-Wye",
    geoType: "MSOA",
    geoCode: "E02002926"
  },
  {
    en: "Penyard, Llangarron & Goodrich",
    geoType: "MSOA",
    geoCode: "E02002927"
  },
  {
    en: "Newport North",
    geoType: "MSOA",
    geoCode: "E02002928"
  },
  {
    en: "Edgmond & Church Aston",
    geoType: "MSOA",
    geoCode: "E02002929"
  },
  {
    en: "Newport South",
    geoType: "MSOA",
    geoCode: "E02002930"
  },
  {
    en: "Muxton & Lilleshall",
    geoType: "MSOA",
    geoCode: "E02002931"
  },
  {
    en: "Donnington",
    geoType: "MSOA",
    geoCode: "E02002932"
  },
  {
    en: "Dothill & Shawbirch",
    geoType: "MSOA",
    geoCode: "E02002933"
  },
  {
    en: "Apley & Leegomery",
    geoType: "MSOA",
    geoCode: "E02002934"
  },
  {
    en: "Wrockwardine Wood & Trench",
    geoType: "MSOA",
    geoCode: "E02002935"
  },
  {
    en: "Hadley & Horton",
    geoType: "MSOA",
    geoCode: "E02002936"
  },
  {
    en: "Ironbridge, Admaston & Higher Ercall",
    geoType: "MSOA",
    geoCode: "E02002937"
  },
  {
    en: "Wellington East",
    geoType: "MSOA",
    geoCode: "E02002938"
  },
  {
    en: "Wellington West",
    geoType: "MSOA",
    geoCode: "E02002939"
  },
  {
    en: "St George's",
    geoType: "MSOA",
    geoCode: "E02002940"
  },
  {
    en: "Oakengates & Ketley",
    geoType: "MSOA",
    geoCode: "E02002941"
  },
  {
    en: "Priorslee",
    geoType: "MSOA",
    geoCode: "E02002942"
  },
  {
    en: "Malinslee",
    geoType: "MSOA",
    geoCode: "E02002944"
  },
  {
    en: "Hollinswood & Randlay",
    geoType: "MSOA",
    geoCode: "E02002945"
  },
  {
    en: "Dawley & Aqueduct",
    geoType: "MSOA",
    geoCode: "E02002946"
  },
  {
    en: "Brookside",
    geoType: "MSOA",
    geoCode: "E02002947"
  },
  {
    en: "Woodside",
    geoType: "MSOA",
    geoCode: "E02002948"
  },
  {
    en: "Madeley",
    geoType: "MSOA",
    geoCode: "E02002949"
  },
  {
    en: "Sutton Hill",
    geoType: "MSOA",
    geoCode: "E02002950"
  },
  {
    en: "Great Chell & Packmoor",
    geoType: "MSOA",
    geoCode: "E02002951"
  },
  {
    en: "Goldenhill & Sandyford",
    geoType: "MSOA",
    geoCode: "E02002952"
  },
  {
    en: "Bradeley & Chell Heath",
    geoType: "MSOA",
    geoCode: "E02002953"
  },
  {
    en: "Norton",
    geoType: "MSOA",
    geoCode: "E02002954"
  },
  {
    en: "Tunstall",
    geoType: "MSOA",
    geoCode: "E02002955"
  },
  {
    en: "Little Chell & Stanfield",
    geoType: "MSOA",
    geoCode: "E02002956"
  },
  {
    en: "Baddley & Milton",
    geoType: "MSOA",
    geoCode: "E02002957"
  },
  {
    en: "Smallthorne & Sneyd Green",
    geoType: "MSOA",
    geoCode: "E02002958"
  },
  {
    en: "Longport & Burslem Park",
    geoType: "MSOA",
    geoCode: "E02002959"
  },
  {
    en: "Birches Head",
    geoType: "MSOA",
    geoCode: "E02002960"
  },
  {
    en: "Cobridge & Central Forest",
    geoType: "MSOA",
    geoCode: "E02002961"
  },
  {
    en: "Abbey Hulton",
    geoType: "MSOA",
    geoCode: "E02002962"
  },
  {
    en: "Northwood",
    geoType: "MSOA",
    geoCode: "E02002963"
  },
  {
    en: "Townsend & Eaton Park",
    geoType: "MSOA",
    geoCode: "E02002964"
  },
  {
    en: "Hanley & Etruria",
    geoType: "MSOA",
    geoCode: "E02002965"
  },
  {
    en: "Shelton & Joiner's Square",
    geoType: "MSOA",
    geoCode: "E02002966"
  },
  {
    en: "Bentilee & Ubberley",
    geoType: "MSOA",
    geoCode: "E02002967"
  },
  {
    en: "Basford & Hartshill",
    geoType: "MSOA",
    geoCode: "E02002968"
  },
  {
    en: "Boothen & Penkhull",
    geoType: "MSOA",
    geoCode: "E02002969"
  },
  {
    en: "Fenton",
    geoType: "MSOA",
    geoCode: "E02002970"
  },
  {
    en: "Oakhill & Trent Vale",
    geoType: "MSOA",
    geoCode: "E02002973"
  },
  {
    en: "Weston Coyney",
    geoType: "MSOA",
    geoCode: "E02002974"
  },
  {
    en: "Longton East",
    geoType: "MSOA",
    geoCode: "E02002975"
  },
  {
    en: "Hollybush & Blurton North",
    geoType: "MSOA",
    geoCode: "E02002976"
  },
  {
    en: "Dresden",
    geoType: "MSOA",
    geoCode: "E02002977"
  },
  {
    en: "Meir North",
    geoType: "MSOA",
    geoCode: "E02002978"
  },
  {
    en: "Florence",
    geoType: "MSOA",
    geoCode: "E02002979"
  },
  {
    en: "Hanford & Trentham West",
    geoType: "MSOA",
    geoCode: "E02002980"
  },
  {
    en: "Meir South & Lightwood",
    geoType: "MSOA",
    geoCode: "E02002981"
  },
  {
    en: "Newstead & Blurton South",
    geoType: "MSOA",
    geoCode: "E02002982"
  },
  {
    en: "Meir Park",
    geoType: "MSOA",
    geoCode: "E02002983"
  },
  {
    en: "Trentham East",
    geoType: "MSOA",
    geoCode: "E02002984"
  },
  {
    en: "Keynsham North",
    geoType: "MSOA",
    geoCode: "E02002985"
  },
  {
    en: "Keynsham South",
    geoType: "MSOA",
    geoCode: "E02002986"
  },
  {
    en: "Keynsham East",
    geoType: "MSOA",
    geoCode: "E02002987"
  },
  {
    en: "Lambridge & Fairfield Park",
    geoType: "MSOA",
    geoCode: "E02002988"
  },
  {
    en: "Weston",
    geoType: "MSOA",
    geoCode: "E02002989"
  },
  {
    en: "Walcot",
    geoType: "MSOA",
    geoCode: "E02002990"
  },
  {
    en: "Central Bath & Lansdown",
    geoType: "MSOA",
    geoCode: "E02002991"
  },
  {
    en: "Newbridge",
    geoType: "MSOA",
    geoCode: "E02002992"
  },
  {
    en: "Kingsmead",
    geoType: "MSOA",
    geoCode: "E02002993"
  },
  {
    en: "Bathavon North & South",
    geoType: "MSOA",
    geoCode: "E02002994"
  },
  {
    en: "Twerton",
    geoType: "MSOA",
    geoCode: "E02002995"
  },
  {
    en: "Widcombe, Bathwick Hill & Claverton Down",
    geoType: "MSOA",
    geoCode: "E02002996"
  },
  {
    en: "Oldfield Park West",
    geoType: "MSOA",
    geoCode: "E02002997"
  },
  {
    en: "Oldfield Park East",
    geoType: "MSOA",
    geoCode: "E02002998"
  },
  {
    en: "Southdown",
    geoType: "MSOA",
    geoCode: "E02002999"
  },
  {
    en: "Saltford, Farmborough & Timsbury",
    geoType: "MSOA",
    geoCode: "E02003000"
  },
  {
    en: "Bloomfield",
    geoType: "MSOA",
    geoCode: "E02003001"
  },
  {
    en: "Combe Down",
    geoType: "MSOA",
    geoCode: "E02003002"
  },
  {
    en: "Odd Down",
    geoType: "MSOA",
    geoCode: "E02003003"
  },
  {
    en: "Pensford, Clutton & Temple Cloud",
    geoType: "MSOA",
    geoCode: "E02003004"
  },
  {
    en: "Chew, Bishop Sutton & East Harptree",
    geoType: "MSOA",
    geoCode: "E02003005"
  },
  {
    en: "Peasedown & Bathavon West",
    geoType: "MSOA",
    geoCode: "E02003006"
  },
  {
    en: "High Littleton & Paulton",
    geoType: "MSOA",
    geoCode: "E02003007"
  },
  {
    en: "Radstock",
    geoType: "MSOA",
    geoCode: "E02003008"
  },
  {
    en: "Midsomer Norton North",
    geoType: "MSOA",
    geoCode: "E02003009"
  },
  {
    en: "Westfield",
    geoType: "MSOA",
    geoCode: "E02003010"
  },
  {
    en: "Midsomer Norton Redfield",
    geoType: "MSOA",
    geoCode: "E02003011"
  },
  {
    en: "Henbury & Brentry",
    geoType: "MSOA",
    geoCode: "E02003012"
  },
  {
    en: "Southmead",
    geoType: "MSOA",
    geoCode: "E02003013"
  },
  {
    en: "Lawrence Weston",
    geoType: "MSOA",
    geoCode: "E02003014"
  },
  {
    en: "Monks Park",
    geoType: "MSOA",
    geoCode: "E02003015"
  },
  {
    en: "Upper Horfield",
    geoType: "MSOA",
    geoCode: "E02003016"
  },
  {
    en: "Westbury Village",
    geoType: "MSOA",
    geoCode: "E02003017"
  },
  {
    en: "Sea Mills",
    geoType: "MSOA",
    geoCode: "E02003018"
  },
  {
    en: "Shirehampton & Avonmouth",
    geoType: "MSOA",
    geoCode: "E02003019"
  },
  {
    en: "Westbury-on-Trym",
    geoType: "MSOA",
    geoCode: "E02003020"
  },
  {
    en: "Horfield",
    geoType: "MSOA",
    geoCode: "E02003021"
  },
  {
    en: "Henleaze",
    geoType: "MSOA",
    geoCode: "E02003022"
  },
  {
    en: "Stapleton",
    geoType: "MSOA",
    geoCode: "E02003023"
  },
  {
    en: "Fishponds",
    geoType: "MSOA",
    geoCode: "E02003024"
  },
  {
    en: "Lockleaze",
    geoType: "MSOA",
    geoCode: "E02003025"
  },
  {
    en: "Stoke Bishop",
    geoType: "MSOA",
    geoCode: "E02003026"
  },
  {
    en: "Bishopston",
    geoType: "MSOA",
    geoCode: "E02003027"
  },
  {
    en: "Westbury Park",
    geoType: "MSOA",
    geoCode: "E02003028"
  },
  {
    en: "Hillfields",
    geoType: "MSOA",
    geoCode: "E02003029"
  },
  {
    en: "Eastville",
    geoType: "MSOA",
    geoCode: "E02003030"
  },
  {
    en: "Redland & St Andrew's",
    geoType: "MSOA",
    geoCode: "E02003031"
  },
  {
    en: "Speedwell",
    geoType: "MSOA",
    geoCode: "E02003032"
  },
  {
    en: "Cotham",
    geoType: "MSOA",
    geoCode: "E02003033"
  },
  {
    en: "Kingsdown",
    geoType: "MSOA",
    geoCode: "E02003036"
  },
  {
    en: "Clifton East",
    geoType: "MSOA",
    geoCode: "E02003037"
  },
  {
    en: "Two Mile Hill",
    geoType: "MSOA",
    geoCode: "E02003038"
  },
  {
    en: "St George",
    geoType: "MSOA",
    geoCode: "E02003039"
  },
  {
    en: "Redfield",
    geoType: "MSOA",
    geoCode: "E02003040"
  },
  {
    en: "Clifton Village",
    geoType: "MSOA",
    geoCode: "E02003041"
  },
  {
    en: "Crews Hole",
    geoType: "MSOA",
    geoCode: "E02003044"
  },
  {
    en: "Hotwells",
    geoType: "MSOA",
    geoCode: "E02003045"
  },
  {
    en: "St Annes",
    geoType: "MSOA",
    geoCode: "E02003046"
  },
  {
    en: "Southville",
    geoType: "MSOA",
    geoCode: "E02003047"
  },
  {
    en: "Totterdown",
    geoType: "MSOA",
    geoCode: "E02003048"
  },
  {
    en: "Broom Hill",
    geoType: "MSOA",
    geoCode: "E02003049"
  },
  {
    en: "Bedminster",
    geoType: "MSOA",
    geoCode: "E02003050"
  },
  {
    en: "Windmill Hill",
    geoType: "MSOA",
    geoCode: "E02003051"
  },
  {
    en: "Ashton",
    geoType: "MSOA",
    geoCode: "E02003052"
  },
  {
    en: "Knowle Park",
    geoType: "MSOA",
    geoCode: "E02003053"
  },
  {
    en: "Brislington",
    geoType: "MSOA",
    geoCode: "E02003054"
  },
  {
    en: "Knowle",
    geoType: "MSOA",
    geoCode: "E02003055"
  },
  {
    en: "Knowle West",
    geoType: "MSOA",
    geoCode: "E02003056"
  },
  {
    en: "Bishopsworth",
    geoType: "MSOA",
    geoCode: "E02003057"
  },
  {
    en: "Hengrove",
    geoType: "MSOA",
    geoCode: "E02003058"
  },
  {
    en: "Headley Park",
    geoType: "MSOA",
    geoCode: "E02003059"
  },
  {
    en: "Stockwood",
    geoType: "MSOA",
    geoCode: "E02003060"
  },
  {
    en: "Highridge",
    geoType: "MSOA",
    geoCode: "E02003061"
  },
  {
    en: "Withywood",
    geoType: "MSOA",
    geoCode: "E02003062"
  },
  {
    en: "Whitchurch Park",
    geoType: "MSOA",
    geoCode: "E02003063"
  },
  {
    en: "Hartcliffe",
    geoType: "MSOA",
    geoCode: "E02003064"
  },
  {
    en: "Portishead Central",
    geoType: "MSOA",
    geoCode: "E02003065"
  },
  {
    en: "Portishead Redcliffe",
    geoType: "MSOA",
    geoCode: "E02003066"
  },
  {
    en: "Portishead South",
    geoType: "MSOA",
    geoCode: "E02003067"
  },
  {
    en: "Pill & Easton",
    geoType: "MSOA",
    geoCode: "E02003068"
  },
  {
    en: "Clevedon North & Walton",
    geoType: "MSOA",
    geoCode: "E02003069"
  },
  {
    en: "Long Ashton & Gordano",
    geoType: "MSOA",
    geoCode: "E02003070"
  },
  {
    en: "Clevedon Central",
    geoType: "MSOA",
    geoCode: "E02003071"
  },
  {
    en: "Nailsea West",
    geoType: "MSOA",
    geoCode: "E02003072"
  },
  {
    en: "Nailsea East",
    geoType: "MSOA",
    geoCode: "E02003073"
  },
  {
    en: "Clevedon South & Yeo",
    geoType: "MSOA",
    geoCode: "E02003074"
  },
  {
    en: "Backwell & Flax Bourton",
    geoType: "MSOA",
    geoCode: "E02003075"
  },
  {
    en: "Yatton & Cleeve",
    geoType: "MSOA",
    geoCode: "E02003076"
  },
  {
    en: "Wrington, Felton & Dundry",
    geoType: "MSOA",
    geoCode: "E02003077"
  },
  {
    en: "Congresbury & Kewstoke",
    geoType: "MSOA",
    geoCode: "E02003078"
  },
  {
    en: "North Worle",
    geoType: "MSOA",
    geoCode: "E02003079"
  },
  {
    en: "Mid Worle",
    geoType: "MSOA",
    geoCode: "E02003080"
  },
  {
    en: "Weston Milton",
    geoType: "MSOA",
    geoCode: "E02003081"
  },
  {
    en: "Weston Hillside",
    geoType: "MSOA",
    geoCode: "E02003082"
  },
  {
    en: "Weston Town",
    geoType: "MSOA",
    geoCode: "E02003084"
  },
  {
    en: "Weston Bournville",
    geoType: "MSOA",
    geoCode: "E02003085"
  },
  {
    en: "Weston Clarence",
    geoType: "MSOA",
    geoCode: "E02003086"
  },
  {
    en: "Hutton, Locking & Banwell",
    geoType: "MSOA",
    geoCode: "E02003087"
  },
  {
    en: "Winscombe, Langford & Blagdon",
    geoType: "MSOA",
    geoCode: "E02003088"
  },
  {
    en: "Weston Uphill",
    geoType: "MSOA",
    geoCode: "E02003089"
  },
  {
    en: "Thornbury North",
    geoType: "MSOA",
    geoCode: "E02003090"
  },
  {
    en: "Thornbury South",
    geoType: "MSOA",
    geoCode: "E02003091"
  },
  {
    en: "Charfield, Wickwar & Iron Acton",
    geoType: "MSOA",
    geoCode: "E02003092"
  },
  {
    en: "Alveston, Olveston & Oldbury",
    geoType: "MSOA",
    geoCode: "E02003093"
  },
  {
    en: "Almondsbury, Pilning & Severn Beach",
    geoType: "MSOA",
    geoCode: "E02003094"
  },
  {
    en: "Yate North",
    geoType: "MSOA",
    geoCode: "E02003095"
  },
  {
    en: "Yate West",
    geoType: "MSOA",
    geoCode: "E02003096"
  },
  {
    en: "Chipping Sodbury",
    geoType: "MSOA",
    geoCode: "E02003097"
  },
  {
    en: "Bradley Stoke North East",
    geoType: "MSOA",
    geoCode: "E02003098"
  },
  {
    en: "Yate Kingsgate",
    geoType: "MSOA",
    geoCode: "E02003099"
  },
  {
    en: "Bradley Stoke Central",
    geoType: "MSOA",
    geoCode: "E02003101"
  },
  {
    en: "Frampton Cotterell",
    geoType: "MSOA",
    geoCode: "E02003102"
  },
  {
    en: "Yate South",
    geoType: "MSOA",
    geoCode: "E02003103"
  },
  {
    en: "Stoke Gifford West & Little Stoke",
    geoType: "MSOA",
    geoCode: "E02003104"
  },
  {
    en: "Winterbourne",
    geoType: "MSOA",
    geoCode: "E02003105"
  },
  {
    en: "Filton",
    geoType: "MSOA",
    geoCode: "E02003107"
  },
  {
    en: "Pucklechurch & Westerleigh",
    geoType: "MSOA",
    geoCode: "E02003108"
  },
  {
    en: "Downend North",
    geoType: "MSOA",
    geoCode: "E02003109"
  },
  {
    en: "Emersons Green",
    geoType: "MSOA",
    geoCode: "E02003110"
  },
  {
    en: "Downend South",
    geoType: "MSOA",
    geoCode: "E02003111"
  },
  {
    en: "Mangotsfield",
    geoType: "MSOA",
    geoCode: "E02003112"
  },
  {
    en: "Marshfield, Wick & Hawkesbury",
    geoType: "MSOA",
    geoCode: "E02003113"
  },
  {
    en: "Staple Hill North",
    geoType: "MSOA",
    geoCode: "E02003114"
  },
  {
    en: "Staple Hill South & Kingswood North West",
    geoType: "MSOA",
    geoCode: "E02003115"
  },
  {
    en: "Kingswood North East",
    geoType: "MSOA",
    geoCode: "E02003116"
  },
  {
    en: "Kingswood South",
    geoType: "MSOA",
    geoCode: "E02003117"
  },
  {
    en: "Cadbury Heath North & Bridgeyate",
    geoType: "MSOA",
    geoCode: "E02003118"
  },
  {
    en: "Cadbury Heath South & North Common",
    geoType: "MSOA",
    geoCode: "E02003119"
  },
  {
    en: "Hanham",
    geoType: "MSOA",
    geoCode: "E02003120"
  },
  {
    en: "Longwell Green & Oldland Common",
    geoType: "MSOA",
    geoCode: "E02003121"
  },
  {
    en: "Glenholt & Widewell",
    geoType: "MSOA",
    geoCode: "E02003122"
  },
  {
    en: "Southway",
    geoType: "MSOA",
    geoCode: "E02003123"
  },
  {
    en: "Tamerton Foliot",
    geoType: "MSOA",
    geoCode: "E02003124"
  },
  {
    en: "Ernesettle",
    geoType: "MSOA",
    geoCode: "E02003125"
  },
  {
    en: "Derriford & Estover",
    geoType: "MSOA",
    geoCode: "E02003126"
  },
  {
    en: "King's Tamerton & West Park",
    geoType: "MSOA",
    geoCode: "E02003127"
  },
  {
    en: "Honicknowle & Manadon",
    geoType: "MSOA",
    geoCode: "E02003128"
  },
  {
    en: "Crownhill",
    geoType: "MSOA",
    geoCode: "E02003129"
  },
  {
    en: "St Budeaux",
    geoType: "MSOA",
    geoCode: "E02003130"
  },
  {
    en: "Deer Park & Leigham",
    geoType: "MSOA",
    geoCode: "E02003131"
  },
  {
    en: "Ham, Beacon Park & Pennycross",
    geoType: "MSOA",
    geoCode: "E02003132"
  },
  {
    en: "Higher Compton & Eggbuckland",
    geoType: "MSOA",
    geoCode: "E02003133"
  },
  {
    en: "North Prospect",
    geoType: "MSOA",
    geoCode: "E02003134"
  },
  {
    en: "Keyham",
    geoType: "MSOA",
    geoCode: "E02003135"
  },
  {
    en: "Plympton St Mary",
    geoType: "MSOA",
    geoCode: "E02003136"
  },
  {
    en: "Mannamead & Hartley",
    geoType: "MSOA",
    geoCode: "E02003137"
  },
  {
    en: "Peverell",
    geoType: "MSOA",
    geoCode: "E02003138"
  },
  {
    en: "Plympton Chaddlewood",
    geoType: "MSOA",
    geoCode: "E02003139"
  },
  {
    en: "Plympton Underwood",
    geoType: "MSOA",
    geoCode: "E02003140"
  },
  {
    en: "Ford & Blockhouse Park",
    geoType: "MSOA",
    geoCode: "E02003141"
  },
  {
    en: "Efford, Laira & Crabtree",
    geoType: "MSOA",
    geoCode: "E02003142"
  },
  {
    en: "Plympton St Maurice",
    geoType: "MSOA",
    geoCode: "E02003143"
  },
  {
    en: "Mutley",
    geoType: "MSOA",
    geoCode: "E02003144"
  },
  {
    en: "Stoke & Pennycomequick",
    geoType: "MSOA",
    geoCode: "E02003145"
  },
  {
    en: "Lipson",
    geoType: "MSOA",
    geoCode: "E02003146"
  },
  {
    en: "Devonport, Mount Wise & Morice Town",
    geoType: "MSOA",
    geoCode: "E02003147"
  },
  {
    en: "City Centre, Barbican & Sutton Harbour",
    geoType: "MSOA",
    geoCode: "E02003148"
  },
  {
    en: "Cattedown & Prince Rock",
    geoType: "MSOA",
    geoCode: "E02003149"
  },
  {
    en: "Plymstock Elburton",
    geoType: "MSOA",
    geoCode: "E02003151"
  },
  {
    en: "Plymstock Hooe & Oreston",
    geoType: "MSOA",
    geoCode: "E02003152"
  },
  {
    en: "Plymstock Goosewell & Staddiscombe",
    geoType: "MSOA",
    geoCode: "E02003153"
  },
  {
    en: "Watcombe",
    geoType: "MSOA",
    geoCode: "E02003154"
  },
  {
    en: "St Marychurch & Maidencombe",
    geoType: "MSOA",
    geoCode: "E02003155"
  },
  {
    en: "Shiphay & the Willows",
    geoType: "MSOA",
    geoCode: "E02003156"
  },
  {
    en: "Upton & Hele",
    geoType: "MSOA",
    geoCode: "E02003157"
  },
  {
    en: "Babbacombe & Plainmoor",
    geoType: "MSOA",
    geoCode: "E02003158"
  },
  {
    en: "Ellacombe",
    geoType: "MSOA",
    geoCode: "E02003159"
  },
  {
    en: "Torquay Central",
    geoType: "MSOA",
    geoCode: "E02003161"
  },
  {
    en: "Wellswood",
    geoType: "MSOA",
    geoCode: "E02003163"
  },
  {
    en: "Preston & Shorton",
    geoType: "MSOA",
    geoCode: "E02003164"
  },
  {
    en: "Clifton & Maidenway",
    geoType: "MSOA",
    geoCode: "E02003165"
  },
  {
    en: "Blatchcombe & Blagdon",
    geoType: "MSOA",
    geoCode: "E02003166"
  },
  {
    en: "Paignton Central",
    geoType: "MSOA",
    geoCode: "E02003167"
  },
  {
    en: "Goodrington & Roselands",
    geoType: "MSOA",
    geoCode: "E02003168"
  },
  {
    en: "Churston & Galmpton",
    geoType: "MSOA",
    geoCode: "E02003169"
  },
  {
    en: "Brixham Town",
    geoType: "MSOA",
    geoCode: "E02003170"
  },
  {
    en: "Higher Brixham",
    geoType: "MSOA",
    geoCode: "E02003171"
  },
  {
    en: "Kinson East",
    geoType: "MSOA",
    geoCode: "E02003172"
  },
  {
    en: "Kinson West",
    geoType: "MSOA",
    geoCode: "E02003173"
  },
  {
    en: "Northbourne",
    geoType: "MSOA",
    geoCode: "E02003174"
  },
  {
    en: "Throop & Muscliffe",
    geoType: "MSOA",
    geoCode: "E02003175"
  },
  {
    en: "West Howe",
    geoType: "MSOA",
    geoCode: "E02003176"
  },
  {
    en: "Moordown",
    geoType: "MSOA",
    geoCode: "E02003177"
  },
  {
    en: "East Howe & Ensbury Park",
    geoType: "MSOA",
    geoCode: "E02003178"
  },
  {
    en: "Townsend & Strouden",
    geoType: "MSOA",
    geoCode: "E02003179"
  },
  {
    en: "Winton",
    geoType: "MSOA",
    geoCode: "E02003180"
  },
  {
    en: "Queens Park",
    geoType: "MSOA",
    geoCode: "E02003181"
  },
  {
    en: "Littledown",
    geoType: "MSOA",
    geoCode: "E02003182"
  },
  {
    en: "Talbot & Branksome Woods",
    geoType: "MSOA",
    geoCode: "E02003183"
  },
  {
    en: "Charminster",
    geoType: "MSOA",
    geoCode: "E02003184"
  },
  {
    en: "Iford",
    geoType: "MSOA",
    geoCode: "E02003185"
  },
  {
    en: "Springbourne & Queen's Park",
    geoType: "MSOA",
    geoCode: "E02003186"
  },
  {
    en: "Boscombe East",
    geoType: "MSOA",
    geoCode: "E02003187"
  },
  {
    en: "Central Bournemouth",
    geoType: "MSOA",
    geoCode: "E02003188"
  },
  {
    en: "Southbourne West",
    geoType: "MSOA",
    geoCode: "E02003189"
  },
  {
    en: "Boscombe West",
    geoType: "MSOA",
    geoCode: "E02003190"
  },
  {
    en: "East Southbourne & Hengistbury Head",
    geoType: "MSOA",
    geoCode: "E02003191"
  },
  {
    en: "East Cliff",
    geoType: "MSOA",
    geoCode: "E02003192"
  },
  {
    en: "Merley",
    geoType: "MSOA",
    geoCode: "E02003194"
  },
  {
    en: "Bearwood",
    geoType: "MSOA",
    geoCode: "E02003195"
  },
  {
    en: "Broadstone",
    geoType: "MSOA",
    geoCode: "E02003196"
  },
  {
    en: "Canford Heath West",
    geoType: "MSOA",
    geoCode: "E02003197"
  },
  {
    en: "Canford Heath East",
    geoType: "MSOA",
    geoCode: "E02003198"
  },
  {
    en: "Creekmoor",
    geoType: "MSOA",
    geoCode: "E02003199"
  },
  {
    en: "Rossmore",
    geoType: "MSOA",
    geoCode: "E02003200"
  },
  {
    en: "Newtown",
    geoType: "MSOA",
    geoCode: "E02003201"
  },
  {
    en: "Branksome East",
    geoType: "MSOA",
    geoCode: "E02003202"
  },
  {
    en: "Branksome West",
    geoType: "MSOA",
    geoCode: "E02003203"
  },
  {
    en: "Oakdale East",
    geoType: "MSOA",
    geoCode: "E02003204"
  },
  {
    en: "Oakdale West",
    geoType: "MSOA",
    geoCode: "E02003205"
  },
  {
    en: "Penn Hill",
    geoType: "MSOA",
    geoCode: "E02003206"
  },
  {
    en: "Hamworthy West",
    geoType: "MSOA",
    geoCode: "E02003207"
  },
  {
    en: "Poole Town",
    geoType: "MSOA",
    geoCode: "E02003208"
  },
  {
    en: "Hamworthy East",
    geoType: "MSOA",
    geoCode: "E02003209"
  },
  {
    en: "Parkstone",
    geoType: "MSOA",
    geoCode: "E02003210"
  },
  {
    en: "Branksome Park, Canford Cliffs & Sandbanks",
    geoType: "MSOA",
    geoCode: "E02003211"
  },
  {
    en: "Highworth",
    geoType: "MSOA",
    geoCode: "E02003212"
  },
  {
    en: "Penhill",
    geoType: "MSOA",
    geoCode: "E02003214"
  },
  {
    en: "Haydon Wick",
    geoType: "MSOA",
    geoCode: "E02003215"
  },
  {
    en: "Upper Stratton",
    geoType: "MSOA",
    geoCode: "E02003216"
  },
  {
    en: "Moredon",
    geoType: "MSOA",
    geoCode: "E02003217"
  },
  {
    en: "Pinehurst",
    geoType: "MSOA",
    geoCode: "E02003218"
  },
  {
    en: "Broad Blunsdon, South Marston & Wanborough",
    geoType: "MSOA",
    geoCode: "E02003219"
  },
  {
    en: "Lower Stratton",
    geoType: "MSOA",
    geoCode: "E02003220"
  },
  {
    en: "Gorse Hill",
    geoType: "MSOA",
    geoCode: "E02003221"
  },
  {
    en: "Roughmoor",
    geoType: "MSOA",
    geoCode: "E02003222"
  },
  {
    en: "Rodbourne & Cheney Manor",
    geoType: "MSOA",
    geoCode: "E02003223"
  },
  {
    en: "Covingham",
    geoType: "MSOA",
    geoCode: "E02003224"
  },
  {
    en: "Westlea & Shaw",
    geoType: "MSOA",
    geoCode: "E02003225"
  },
  {
    en: "Central North",
    geoType: "MSOA",
    geoCode: "E02003226"
  },
  {
    en: "Walcot East",
    geoType: "MSOA",
    geoCode: "E02003227"
  },
  {
    en: "Central East & Walcot West",
    geoType: "MSOA",
    geoCode: "E02003228"
  },
  {
    en: "Freshbrook North & Grange Park",
    geoType: "MSOA",
    geoCode: "E02003229"
  },
  {
    en: "Central South & Eastcott",
    geoType: "MSOA",
    geoCode: "E02003230"
  },
  {
    en: "Park North & Park South",
    geoType: "MSOA",
    geoCode: "E02003231"
  },
  {
    en: "Kingshill & Okus",
    geoType: "MSOA",
    geoCode: "E02003232"
  },
  {
    en: "Freshbrook South & Toothill",
    geoType: "MSOA",
    geoCode: "E02003233"
  },
  {
    en: "Eldene & Dorcan",
    geoType: "MSOA",
    geoCode: "E02003234"
  },
  {
    en: "Lawn & East Wichel",
    geoType: "MSOA",
    geoCode: "E02003235"
  },
  {
    en: "Wroughton, Wichelstowe & Chiseldon",
    geoType: "MSOA",
    geoCode: "E02003236"
  },
  {
    en: "Glinton, Northborough & Maxey",
    geoType: "MSOA",
    geoCode: "E02003237"
  },
  {
    en: "Werrington",
    geoType: "MSOA",
    geoCode: "E02003238"
  },
  {
    en: "Newborough & Peakirk",
    geoType: "MSOA",
    geoCode: "E02003239"
  },
  {
    en: "Barnack, Wittering & Wansford",
    geoType: "MSOA",
    geoCode: "E02003240"
  },
  {
    en: "Eye & Thorney",
    geoType: "MSOA",
    geoCode: "E02003241"
  },
  {
    en: "Walton",
    geoType: "MSOA",
    geoCode: "E02003242"
  },
  {
    en: "Paston",
    geoType: "MSOA",
    geoCode: "E02003243"
  },
  {
    en: "Dogsthorpe",
    geoType: "MSOA",
    geoCode: "E02003244"
  },
  {
    en: "North Bretton & Westwood",
    geoType: "MSOA",
    geoCode: "E02003245"
  },
  {
    en: "Millfield & Bourges Boulevard",
    geoType: "MSOA",
    geoCode: "E02003246"
  },
  {
    en: "Bretton Park",
    geoType: "MSOA",
    geoCode: "E02003247"
  },
  {
    en: "Central Park",
    geoType: "MSOA",
    geoCode: "E02003248"
  },
  {
    en: "Fengate & Parnwell",
    geoType: "MSOA",
    geoCode: "E02003249"
  },
  {
    en: "Peterborough Central",
    geoType: "MSOA",
    geoCode: "E02003250"
  },
  {
    en: "Longthorpe & Netherton",
    geoType: "MSOA",
    geoCode: "E02003251"
  },
  {
    en: "West Town & Woodston",
    geoType: "MSOA",
    geoCode: "E02003252"
  },
  {
    en: "Fletton",
    geoType: "MSOA",
    geoCode: "E02003253"
  },
  {
    en: "Orton West & Castor",
    geoType: "MSOA",
    geoCode: "E02003254"
  },
  {
    en: "Stanground",
    geoType: "MSOA",
    geoCode: "E02003255"
  },
  {
    en: "Orton Malborne & Goldhay",
    geoType: "MSOA",
    geoCode: "E02003257"
  },
  {
    en: "Bramingham",
    geoType: "MSOA",
    geoCode: "E02003258"
  },
  {
    en: "Sundon Park",
    geoType: "MSOA",
    geoCode: "E02003259"
  },
  {
    en: "Marsh Farm",
    geoType: "MSOA",
    geoCode: "E02003260"
  },
  {
    en: "Warden Hill",
    geoType: "MSOA",
    geoCode: "E02003261"
  },
  {
    en: "Leagrave",
    geoType: "MSOA",
    geoCode: "E02003262"
  },
  {
    en: "Limbury",
    geoType: "MSOA",
    geoCode: "E02003263"
  },
  {
    en: "Barnfield",
    geoType: "MSOA",
    geoCode: "E02003264"
  },
  {
    en: "Stopsley North",
    geoType: "MSOA",
    geoCode: "E02003265"
  },
  {
    en: "Lewsey North",
    geoType: "MSOA",
    geoCode: "E02003266"
  },
  {
    en: "Montrose Avenue",
    geoType: "MSOA",
    geoCode: "E02003267"
  },
  {
    en: "Challney",
    geoType: "MSOA",
    geoCode: "E02003268"
  },
  {
    en: "Stopsley South & Round Green",
    geoType: "MSOA",
    geoCode: "E02003269"
  },
  {
    en: "Lewsey South",
    geoType: "MSOA",
    geoCode: "E02003270"
  },
  {
    en: "Wigmore & Airport",
    geoType: "MSOA",
    geoCode: "E02003271"
  },
  {
    en: "Kingsway",
    geoType: "MSOA",
    geoCode: "E02003272"
  },
  {
    en: "St Anns Hill",
    geoType: "MSOA",
    geoCode: "E02003273"
  },
  {
    en: "Bury Park",
    geoType: "MSOA",
    geoCode: "E02003274"
  },
  {
    en: "Dallow Road",
    geoType: "MSOA",
    geoCode: "E02003276"
  },
  {
    en: "Farley Hill & Stockwood Park",
    geoType: "MSOA",
    geoCode: "E02003277"
  },
  {
    en: "New Town",
    geoType: "MSOA",
    geoCode: "E02003278"
  },
  {
    en: "Eastwood Park",
    geoType: "MSOA",
    geoCode: "E02003279"
  },
  {
    en: "Eastwood",
    geoType: "MSOA",
    geoCode: "E02003280"
  },
  {
    en: "Belfairs",
    geoType: "MSOA",
    geoCode: "E02003281"
  },
  {
    en: "Prittlewell",
    geoType: "MSOA",
    geoCode: "E02003282"
  },
  {
    en: "Blenheim Park",
    geoType: "MSOA",
    geoCode: "E02003283"
  },
  {
    en: "St Lukes",
    geoType: "MSOA",
    geoCode: "E02003284"
  },
  {
    en: "Westborough",
    geoType: "MSOA",
    geoCode: "E02003285"
  },
  {
    en: "West Leigh",
    geoType: "MSOA",
    geoCode: "E02003286"
  },
  {
    en: "Southchurch",
    geoType: "MSOA",
    geoCode: "E02003287"
  },
  {
    en: "Victoria",
    geoType: "MSOA",
    geoCode: "E02003288"
  },
  {
    en: "Leigh",
    geoType: "MSOA",
    geoCode: "E02003289"
  },
  {
    en: "Chalkwell",
    geoType: "MSOA",
    geoCode: "E02003290"
  },
  {
    en: "Shoeburyness",
    geoType: "MSOA",
    geoCode: "E02003291"
  },
  {
    en: "Kursaal",
    geoType: "MSOA",
    geoCode: "E02003292"
  },
  {
    en: "Southend Central",
    geoType: "MSOA",
    geoCode: "E02003293"
  },
  {
    en: "Thorpe Bay",
    geoType: "MSOA",
    geoCode: "E02003294"
  },
  {
    en: "West Shoebury",
    geoType: "MSOA",
    geoCode: "E02003295"
  },
  {
    en: "Corringham North & London Gateway",
    geoType: "MSOA",
    geoCode: "E02003296"
  },
  {
    en: "Corringham South",
    geoType: "MSOA",
    geoCode: "E02003297"
  },
  {
    en: "Stanford East",
    geoType: "MSOA",
    geoCode: "E02003298"
  },
  {
    en: "Orsett, Bulphan & Hordon-on-the-Hill",
    geoType: "MSOA",
    geoCode: "E02003299"
  },
  {
    en: "Stanford West",
    geoType: "MSOA",
    geoCode: "E02003300"
  },
  {
    en: "North Ockendon",
    geoType: "MSOA",
    geoCode: "E02003301"
  },
  {
    en: "South Ockendon",
    geoType: "MSOA",
    geoCode: "E02003302"
  },
  {
    en: "Aveley",
    geoType: "MSOA",
    geoCode: "E02003303"
  },
  {
    en: "Stifford Clays",
    geoType: "MSOA",
    geoCode: "E02003304"
  },
  {
    en: "Little Thurrock North",
    geoType: "MSOA",
    geoCode: "E02003305"
  },
  {
    en: "Chadwell St Mary",
    geoType: "MSOA",
    geoCode: "E02003307"
  },
  {
    en: "East Tilbury",
    geoType: "MSOA",
    geoCode: "E02003308"
  },
  {
    en: "Little Thurrock South",
    geoType: "MSOA",
    geoCode: "E02003309"
  },
  {
    en: "Grays Chafford Gorges & Orsett Road",
    geoType: "MSOA",
    geoCode: "E02003311"
  },
  {
    en: "Grays Town",
    geoType: "MSOA",
    geoCode: "E02003312"
  },
  {
    en: "Tilbury",
    geoType: "MSOA",
    geoCode: "E02003313"
  },
  {
    en: "Hoo Peninsula",
    geoType: "MSOA",
    geoCode: "E02003314"
  },
  {
    en: "Cliffe",
    geoType: "MSOA",
    geoCode: "E02003315"
  },
  {
    en: "Hoo St Werburgh & High Halstow",
    geoType: "MSOA",
    geoCode: "E02003316"
  },
  {
    en: "Wainscott & City Estate",
    geoType: "MSOA",
    geoCode: "E02003317"
  },
  {
    en: "Broomhill",
    geoType: "MSOA",
    geoCode: "E02003318"
  },
  {
    en: "Strood North & Frindsbury",
    geoType: "MSOA",
    geoCode: "E02003319"
  },
  {
    en: "Chatham Maritime",
    geoType: "MSOA",
    geoCode: "E02003320"
  },
  {
    en: "Rede Common",
    geoType: "MSOA",
    geoCode: "E02003321"
  },
  {
    en: "Gillingham North",
    geoType: "MSOA",
    geoCode: "E02003322"
  },
  {
    en: "Gillingham North East",
    geoType: "MSOA",
    geoCode: "E02003323"
  },
  {
    en: "Strood South & Temple Marsh",
    geoType: "MSOA",
    geoCode: "E02003324"
  },
  {
    en: "Gillingham Central",
    geoType: "MSOA",
    geoCode: "E02003325"
  },
  {
    en: "Gillingham East",
    geoType: "MSOA",
    geoCode: "E02003326"
  },
  {
    en: "Rochester West",
    geoType: "MSOA",
    geoCode: "E02003327"
  },
  {
    en: "Chatham Central and Rochester Riverside",
    geoType: "MSOA",
    geoCode: "E02003328"
  },
  {
    en: "Gillingham South",
    geoType: "MSOA",
    geoCode: "E02003329"
  },
  {
    en: "Rochester East",
    geoType: "MSOA",
    geoCode: "E02003330"
  },
  {
    en: "Twydall",
    geoType: "MSOA",
    geoCode: "E02003331"
  },
  {
    en: "Gillingham South East",
    geoType: "MSOA",
    geoCode: "E02003332"
  },
  {
    en: "Luton",
    geoType: "MSOA",
    geoCode: "E02003333"
  },
  {
    en: "Chatham South West",
    geoType: "MSOA",
    geoCode: "E02003334"
  },
  {
    en: "Chatham South East",
    geoType: "MSOA",
    geoCode: "E02003335"
  },
  {
    en: "Rainham North West",
    geoType: "MSOA",
    geoCode: "E02003336"
  },
  {
    en: "Rochester South West",
    geoType: "MSOA",
    geoCode: "E02003337"
  },
  {
    en: "Rainham North East",
    geoType: "MSOA",
    geoCode: "E02003338"
  },
  {
    en: "Rochester South East",
    geoType: "MSOA",
    geoCode: "E02003339"
  },
  {
    en: "Wayfield",
    geoType: "MSOA",
    geoCode: "E02003340"
  },
  {
    en: "Cuxton & Halling",
    geoType: "MSOA",
    geoCode: "E02003341"
  },
  {
    en: "Rainham South East",
    geoType: "MSOA",
    geoCode: "E02003342"
  },
  {
    en: "Rainham South West",
    geoType: "MSOA",
    geoCode: "E02003343"
  },
  {
    en: "Capstone",
    geoType: "MSOA",
    geoCode: "E02003344"
  },
  {
    en: "Parkwood East",
    geoType: "MSOA",
    geoCode: "E02003345"
  },
  {
    en: "Horsted",
    geoType: "MSOA",
    geoCode: "E02003346"
  },
  {
    en: "Settington",
    geoType: "MSOA",
    geoCode: "E02003347"
  },
  {
    en: "Hempstead & Wigmore",
    geoType: "MSOA",
    geoCode: "E02003348"
  },
  {
    en: "Parkwood West",
    geoType: "MSOA",
    geoCode: "E02003349"
  },
  {
    en: "Walderslade",
    geoType: "MSOA",
    geoCode: "E02003350"
  },
  {
    en: "Lordswood",
    geoType: "MSOA",
    geoCode: "E02003351"
  },
  {
    en: "Winkfield & Cranbourne",
    geoType: "MSOA",
    geoCode: "E02003352"
  },
  {
    en: "Binfield & Popeswood",
    geoType: "MSOA",
    geoCode: "E02003353"
  },
  {
    en: "Wick Hill",
    geoType: "MSOA",
    geoCode: "E02003354"
  },
  {
    en: "Priestwood",
    geoType: "MSOA",
    geoCode: "E02003355"
  },
  {
    en: "Chavey Down & North Ascot West",
    geoType: "MSOA",
    geoCode: "E02003356"
  },
  {
    en: "Bullbrook",
    geoType: "MSOA",
    geoCode: "E02003357"
  },
  {
    en: "Central Bracknell & Wildridings",
    geoType: "MSOA",
    geoCode: "E02003358"
  },
  {
    en: "Crown Wood",
    geoType: "MSOA",
    geoCode: "E02003359"
  },
  {
    en: "Great Hollands",
    geoType: "MSOA",
    geoCode: "E02003360"
  },
  {
    en: "Birch Hill & Hanworth East",
    geoType: "MSOA",
    geoCode: "E02003361"
  },
  {
    en: "Hanworth West",
    geoType: "MSOA",
    geoCode: "E02003362"
  },
  {
    en: "Crowthorne South",
    geoType: "MSOA",
    geoCode: "E02003363"
  },
  {
    en: "Owlsmoor & Broadmoor",
    geoType: "MSOA",
    geoCode: "E02003364"
  },
  {
    en: "Sandhurst",
    geoType: "MSOA",
    geoCode: "E02003365"
  },
  {
    en: "College Town",
    geoType: "MSOA",
    geoCode: "E02003366"
  },
  {
    en: "Chieveley, East Isley & Compton",
    geoType: "MSOA",
    geoCode: "E02003367"
  },
  {
    en: "Lambourn & Great Shefford",
    geoType: "MSOA",
    geoCode: "E02003368"
  },
  {
    en: "Streatley & Pangbourne",
    geoType: "MSOA",
    geoCode: "E02003369"
  },
  {
    en: "Purley on Thames",
    geoType: "MSOA",
    geoCode: "E02003370"
  },
  {
    en: "Westwood",
    geoType: "MSOA",
    geoCode: "E02003371"
  },
  {
    en: "Calcot North & Little Heath",
    geoType: "MSOA",
    geoCode: "E02003372"
  },
  {
    en: "Hermitage & Cold Ash",
    geoType: "MSOA",
    geoCode: "E02003373"
  },
  {
    en: "Calcot South",
    geoType: "MSOA",
    geoCode: "E02003374"
  },
  {
    en: "Theale & Beenham",
    geoType: "MSOA",
    geoCode: "E02003375"
  },
  {
    en: "Hungerford",
    geoType: "MSOA",
    geoCode: "E02003376"
  },
  {
    en: "Thatcham South East & Bradfield",
    geoType: "MSOA",
    geoCode: "E02003377"
  },
  {
    en: "Newbury North West",
    geoType: "MSOA",
    geoCode: "E02003378"
  },
  {
    en: "Newbury Clay Hill",
    geoType: "MSOA",
    geoCode: "E02003379"
  },
  {
    en: "Thatcham West",
    geoType: "MSOA",
    geoCode: "E02003380"
  },
  {
    en: "Burghfield Common",
    geoType: "MSOA",
    geoCode: "E02003381"
  },
  {
    en: "Thatcham Town",
    geoType: "MSOA",
    geoCode: "E02003382"
  },
  {
    en: "Thatcham North East",
    geoType: "MSOA",
    geoCode: "E02003383"
  },
  {
    en: "Kintbury & Boxford",
    geoType: "MSOA",
    geoCode: "E02003384"
  },
  {
    en: "Newbury Central & Greenham",
    geoType: "MSOA",
    geoCode: "E02003385"
  },
  {
    en: "Newbury South West",
    geoType: "MSOA",
    geoCode: "E02003386"
  },
  {
    en: "Newbury Wash Common",
    geoType: "MSOA",
    geoCode: "E02003387"
  },
  {
    en: "Mortimer & Aldermaston Wharf",
    geoType: "MSOA",
    geoCode: "E02003388"
  },
  {
    en: "Caversham Emmer Green",
    geoType: "MSOA",
    geoCode: "E02003389"
  },
  {
    en: "Caversham Heights",
    geoType: "MSOA",
    geoCode: "E02003390"
  },
  {
    en: "Caversham Balmore Park",
    geoType: "MSOA",
    geoCode: "E02003391"
  },
  {
    en: "Lower Caversham",
    geoType: "MSOA",
    geoCode: "E02003392"
  },
  {
    en: "Tilehurst North",
    geoType: "MSOA",
    geoCode: "E02003393"
  },
  {
    en: "Norcot North",
    geoType: "MSOA",
    geoCode: "E02003394"
  },
  {
    en: "Battle & Caversham Bridge",
    geoType: "MSOA",
    geoCode: "E02003395"
  },
  {
    en: "Norcot South",
    geoType: "MSOA",
    geoCode: "E02003396"
  },
  {
    en: "Tilehurst South",
    geoType: "MSOA",
    geoCode: "E02003397"
  },
  {
    en: "Palmer Park",
    geoType: "MSOA",
    geoCode: "E02003398"
  },
  {
    en: "Wokingham Road",
    geoType: "MSOA",
    geoCode: "E02003400"
  },
  {
    en: "Coley Park",
    geoType: "MSOA",
    geoCode: "E02003401"
  },
  {
    en: "Southampton Street & Redlands Road",
    geoType: "MSOA",
    geoCode: "E02003402"
  },
  {
    en: "Southcote",
    geoType: "MSOA",
    geoCode: "E02003403"
  },
  {
    en: "Leighton Park",
    geoType: "MSOA",
    geoCode: "E02003404"
  },
  {
    en: "Kennet Island & Green Park",
    geoType: "MSOA",
    geoCode: "E02003405"
  },
  {
    en: "Whitley Wood",
    geoType: "MSOA",
    geoCode: "E02003406"
  },
  {
    en: "Britwell",
    geoType: "MSOA",
    geoCode: "E02003407"
  },
  {
    en: "Manor Park",
    geoType: "MSOA",
    geoCode: "E02003408"
  },
  {
    en: "Haymill & Lynch Hill",
    geoType: "MSOA",
    geoCode: "E02003409"
  },
  {
    en: "Baylis & Stoke",
    geoType: "MSOA",
    geoCode: "E02003410"
  },
  {
    en: "Wexham Lea",
    geoType: "MSOA",
    geoCode: "E02003411"
  },
  {
    en: "Cippenham Green",
    geoType: "MSOA",
    geoCode: "E02003412"
  },
  {
    en: "Cippenham Meadows",
    geoType: "MSOA",
    geoCode: "E02003414"
  },
  {
    en: "Chalvey",
    geoType: "MSOA",
    geoCode: "E02003415"
  },
  {
    en: "Langley St Mary's",
    geoType: "MSOA",
    geoCode: "E02003416"
  },
  {
    en: "Central Slough & Upton Court",
    geoType: "MSOA",
    geoCode: "E02003417"
  },
  {
    en: "Langley Kederminster",
    geoType: "MSOA",
    geoCode: "E02003418"
  },
  {
    en: "Langley Foxborough",
    geoType: "MSOA",
    geoCode: "E02003419"
  },
  {
    en: "Colnbrook & Poyle",
    geoType: "MSOA",
    geoCode: "E02003420"
  },
  {
    en: "Pinkney's Green & Furze Platt Road",
    geoType: "MSOA",
    geoCode: "E02003421"
  },
  {
    en: "Cookham & Waltham",
    geoType: "MSOA",
    geoCode: "E02003422"
  },
  {
    en: "Furze Platt",
    geoType: "MSOA",
    geoCode: "E02003423"
  },
  {
    en: "Maidenhead East",
    geoType: "MSOA",
    geoCode: "E02003424"
  },
  {
    en: "Maidenhead Central",
    geoType: "MSOA",
    geoCode: "E02003425"
  },
  {
    en: "Maidenhead Highway",
    geoType: "MSOA",
    geoCode: "E02003426"
  },
  {
    en: "Boyn Hill & Norreys Drive",
    geoType: "MSOA",
    geoCode: "E02003427"
  },
  {
    en: "Cox Green",
    geoType: "MSOA",
    geoCode: "E02003428"
  },
  {
    en: "Bray Wick & Holyport",
    geoType: "MSOA",
    geoCode: "E02003429"
  },
  {
    en: "Windsor Town & Eton",
    geoType: "MSOA",
    geoCode: "E02003430"
  },
  {
    en: "Datchet",
    geoType: "MSOA",
    geoCode: "E02003431"
  },
  {
    en: "Clewer Village",
    geoType: "MSOA",
    geoCode: "E02003432"
  },
  {
    en: "Dedworth",
    geoType: "MSOA",
    geoCode: "E02003433"
  },
  {
    en: "Clewer New Town",
    geoType: "MSOA",
    geoCode: "E02003434"
  },
  {
    en: "Spital & Cranbourne Park",
    geoType: "MSOA",
    geoCode: "E02003435"
  },
  {
    en: "Old Windsor & Wraysbury",
    geoType: "MSOA",
    geoCode: "E02003436"
  },
  {
    en: "Ascot & North Ascot East",
    geoType: "MSOA",
    geoCode: "E02003437"
  },
  {
    en: "South Ascot & Sunningdale",
    geoType: "MSOA",
    geoCode: "E02003438"
  },
  {
    en: "Twyford East & Wargrave",
    geoType: "MSOA",
    geoCode: "E02003439"
  },
  {
    en: "Twyford West & Charvil",
    geoType: "MSOA",
    geoCode: "E02003440"
  },
  {
    en: "Sonning & Woodley North",
    geoType: "MSOA",
    geoCode: "E02003441"
  },
  {
    en: "Woodley East",
    geoType: "MSOA",
    geoCode: "E02003442"
  },
  {
    en: "Woodley South",
    geoType: "MSOA",
    geoCode: "E02003443"
  },
  {
    en: "Earley",
    geoType: "MSOA",
    geoCode: "E02003444"
  },
  {
    en: "Southlake",
    geoType: "MSOA",
    geoCode: "E02003445"
  },
  {
    en: "Lower Earley North",
    geoType: "MSOA",
    geoCode: "E02003446"
  },
  {
    en: "Winnersh",
    geoType: "MSOA",
    geoCode: "E02003447"
  },
  {
    en: "Wokingham North & Hurst",
    geoType: "MSOA",
    geoCode: "E02003448"
  },
  {
    en: "Lower Earley South",
    geoType: "MSOA",
    geoCode: "E02003449"
  },
  {
    en: "Shinfield",
    geoType: "MSOA",
    geoCode: "E02003450"
  },
  {
    en: "Wokingham Town",
    geoType: "MSOA",
    geoCode: "E02003451"
  },
  {
    en: "Wokingham East",
    geoType: "MSOA",
    geoCode: "E02003452"
  },
  {
    en: "Barkham & Woose Hill",
    geoType: "MSOA",
    geoCode: "E02003453"
  },
  {
    en: "Wokingham West & South",
    geoType: "MSOA",
    geoCode: "E02003454"
  },
  {
    en: "Spencers Wood & Swallowfield",
    geoType: "MSOA",
    geoCode: "E02003455"
  },
  {
    en: "Arborfield & Garrison",
    geoType: "MSOA",
    geoCode: "E02003456"
  },
  {
    en: "Finchampstead",
    geoType: "MSOA",
    geoCode: "E02003457"
  },
  {
    en: "Crowthorne North",
    geoType: "MSOA",
    geoCode: "E02003458"
  },
  {
    en: "Olney & Lavendon",
    geoType: "MSOA",
    geoCode: "E02003459"
  },
  {
    en: "Hanslope, Castlethorpe & Sherington",
    geoType: "MSOA",
    geoCode: "E02003460"
  },
  {
    en: "Newport Pagnell North",
    geoType: "MSOA",
    geoCode: "E02003461"
  },
  {
    en: "Newport Pagnell South",
    geoType: "MSOA",
    geoCode: "E02003462"
  },
  {
    en: "Great Linford & Giffard Park",
    geoType: "MSOA",
    geoCode: "E02003463"
  },
  {
    en: "Stantonbury & Bradville",
    geoType: "MSOA",
    geoCode: "E02003464"
  },
  {
    en: "Willen & Downhead Park",
    geoType: "MSOA",
    geoCode: "E02003465"
  },
  {
    en: "Wolverton & New Bradwell",
    geoType: "MSOA",
    geoCode: "E02003466"
  },
  {
    en: "Linford Wood",
    geoType: "MSOA",
    geoCode: "E02003467"
  },
  {
    en: "Stony Stratford & Old Wolverton",
    geoType: "MSOA",
    geoCode: "E02003468"
  },
  {
    en: "Bradwell Village",
    geoType: "MSOA",
    geoCode: "E02003469"
  },
  {
    en: "Stacey Bushes & Fullers Slade",
    geoType: "MSOA",
    geoCode: "E02003470"
  },
  {
    en: "Bradwell Common",
    geoType: "MSOA",
    geoCode: "E02003471"
  },
  {
    en: "Central Milton Keynes & Newlands",
    geoType: "MSOA",
    geoCode: "E02003472"
  },
  {
    en: "Two Mile Ash",
    geoType: "MSOA",
    geoCode: "E02003473"
  },
  {
    en: "Woughton & Woolstone",
    geoType: "MSOA",
    geoCode: "E02003474"
  },
  {
    en: "Eaglestone & Fishermead",
    geoType: "MSOA",
    geoCode: "E02003476"
  },
  {
    en: "Loughton",
    geoType: "MSOA",
    geoCode: "E02003478"
  },
  {
    en: "Oldbrook & Coffee Hall",
    geoType: "MSOA",
    geoCode: "E02003479"
  },
  {
    en: "Walnut Tree & Tilbrook",
    geoType: "MSOA",
    geoCode: "E02003480"
  },
  {
    en: "Denbigh",
    geoType: "MSOA",
    geoCode: "E02003481"
  },
  {
    en: "Bow Brickhill & Woburn Sands",
    geoType: "MSOA",
    geoCode: "E02003482"
  },
  {
    en: "Westcroft & Shenley Brook End",
    geoType: "MSOA",
    geoCode: "E02003483"
  },
  {
    en: "Furzton",
    geoType: "MSOA",
    geoCode: "E02003484"
  },
  {
    en: "Bletchley North West",
    geoType: "MSOA",
    geoCode: "E02003485"
  },
  {
    en: "Tattenhoe & Emerson Valley",
    geoType: "MSOA",
    geoCode: "E02003486"
  },
  {
    en: "Far Bletchley",
    geoType: "MSOA",
    geoCode: "E02003487"
  },
  {
    en: "Bletchley East",
    geoType: "MSOA",
    geoCode: "E02003488"
  },
  {
    en: "Bletchley West",
    geoType: "MSOA",
    geoCode: "E02003489"
  },
  {
    en: "Bletchley South",
    geoType: "MSOA",
    geoCode: "E02003490"
  },
  {
    en: "Patcham East",
    geoType: "MSOA",
    geoCode: "E02003491"
  },
  {
    en: "Coldean & Moulsecoomb North",
    geoType: "MSOA",
    geoCode: "E02003492"
  },
  {
    en: "Patcham West & Westdene",
    geoType: "MSOA",
    geoCode: "E02003493"
  },
  {
    en: "Hollingbury",
    geoType: "MSOA",
    geoCode: "E02003494"
  },
  {
    en: "Mile Oak",
    geoType: "MSOA",
    geoCode: "E02003495"
  },
  {
    en: "Hangleton North",
    geoType: "MSOA",
    geoCode: "E02003496"
  },
  {
    en: "West Blatchington",
    geoType: "MSOA",
    geoCode: "E02003497"
  },
  {
    en: "Hollingdean & Moulsecoomb West",
    geoType: "MSOA",
    geoCode: "E02003498"
  },
  {
    en: "Bevendean & Moulsecoomb East",
    geoType: "MSOA",
    geoCode: "E02003499"
  },
  {
    en: "Fiveways",
    geoType: "MSOA",
    geoCode: "E02003500"
  },
  {
    en: "Withdean Woods",
    geoType: "MSOA",
    geoCode: "E02003501"
  },
  {
    en: "Portslade Village",
    geoType: "MSOA",
    geoCode: "E02003502"
  },
  {
    en: "Hangleton South",
    geoType: "MSOA",
    geoCode: "E02003503"
  },
  {
    en: "Preston Park",
    geoType: "MSOA",
    geoCode: "E02003504"
  },
  {
    en: "Round Hill",
    geoType: "MSOA",
    geoCode: "E02003505"
  },
  {
    en: "Aldrington",
    geoType: "MSOA",
    geoCode: "E02003506"
  },
  {
    en: "Woodingdean",
    geoType: "MSOA",
    geoCode: "E02003507"
  },
  {
    en: "Elm Grove & Bear Road",
    geoType: "MSOA",
    geoCode: "E02003508"
  },
  {
    en: "Goldsmid West",
    geoType: "MSOA",
    geoCode: "E02003509"
  },
  {
    en: "Goldsmid East",
    geoType: "MSOA",
    geoCode: "E02003510"
  },
  {
    en: "Portslade by Sea",
    geoType: "MSOA",
    geoCode: "E02003511"
  },
  {
    en: "Hanover",
    geoType: "MSOA",
    geoCode: "E02003512"
  },
  {
    en: "Aldrington South",
    geoType: "MSOA",
    geoCode: "E02003513"
  },
  {
    en: "Seven Dials",
    geoType: "MSOA",
    geoCode: "E02003514"
  },
  {
    en: "Whitehawk",
    geoType: "MSOA",
    geoCode: "E02003515"
  },
  {
    en: "Hove Central",
    geoType: "MSOA",
    geoCode: "E02003516"
  },
  {
    en: "North Laine & the Lanes",
    geoType: "MSOA",
    geoCode: "E02003517"
  },
  {
    en: "King Alfred",
    geoType: "MSOA",
    geoCode: "E02003518"
  },
  {
    en: "Brunswick",
    geoType: "MSOA",
    geoCode: "E02003519"
  },
  {
    en: "St James's Street & Queen's Park",
    geoType: "MSOA",
    geoCode: "E02003520"
  },
  {
    en: "Kemptown",
    geoType: "MSOA",
    geoCode: "E02003521"
  },
  {
    en: "Roedean & Marina",
    geoType: "MSOA",
    geoCode: "E02003522"
  },
  {
    en: "Rottingdean & Saltdean",
    geoType: "MSOA",
    geoCode: "E02003523"
  },
  {
    en: "Paulsgrove East",
    geoType: "MSOA",
    geoCode: "E02003524"
  },
  {
    en: "Wymering",
    geoType: "MSOA",
    geoCode: "E02003525"
  },
  {
    en: "Cosham North",
    geoType: "MSOA",
    geoCode: "E02003526"
  },
  {
    en: "Paulsgrove West & Port Solent",
    geoType: "MSOA",
    geoCode: "E02003527"
  },
  {
    en: "Cosham South",
    geoType: "MSOA",
    geoCode: "E02003529"
  },
  {
    en: "Hilsea",
    geoType: "MSOA",
    geoCode: "E02003530"
  },
  {
    en: "Anchorage Park & Copnor",
    geoType: "MSOA",
    geoCode: "E02003531"
  },
  {
    en: "Alexandra Park",
    geoType: "MSOA",
    geoCode: "E02003532"
  },
  {
    en: "North End West & Whale Island",
    geoType: "MSOA",
    geoCode: "E02003533"
  },
  {
    en: "North End East",
    geoType: "MSOA",
    geoCode: "E02003534"
  },
  {
    en: "Fratton North",
    geoType: "MSOA",
    geoCode: "E02003535"
  },
  {
    en: "Landport",
    geoType: "MSOA",
    geoCode: "E02003536"
  },
  {
    en: "Baffins",
    geoType: "MSOA",
    geoCode: "E02003537"
  },
  {
    en: "Fratton Kingston",
    geoType: "MSOA",
    geoCode: "E02003538"
  },
  {
    en: "Milton",
    geoType: "MSOA",
    geoCode: "E02003540"
  },
  {
    en: "Somers Town",
    geoType: "MSOA",
    geoCode: "E02003541"
  },
  {
    en: "Southsea Haslemere Road",
    geoType: "MSOA",
    geoCode: "E02003542"
  },
  {
    en: "Southsea Fawcett Road",
    geoType: "MSOA",
    geoCode: "E02003543"
  },
  {
    en: "Southsea Prince Albert Road",
    geoType: "MSOA",
    geoCode: "E02003544"
  },
  {
    en: "Southsea West",
    geoType: "MSOA",
    geoCode: "E02003545"
  },
  {
    en: "Eastney",
    geoType: "MSOA",
    geoCode: "E02003546"
  },
  {
    en: "Old Portsmouth & Southsea Common",
    geoType: "MSOA",
    geoCode: "E02003547"
  },
  {
    en: "Southsea Waverley Road",
    geoType: "MSOA",
    geoCode: "E02003548"
  },
  {
    en: "Bassett Green",
    geoType: "MSOA",
    geoCode: "E02003549"
  },
  {
    en: "Aldermoor & Lordswood",
    geoType: "MSOA",
    geoCode: "E02003550"
  },
  {
    en: "Stoneham",
    geoType: "MSOA",
    geoCode: "E02003551"
  },
  {
    en: "Coxford & Lords Hill",
    geoType: "MSOA",
    geoCode: "E02003552"
  },
  {
    en: "Swaythling",
    geoType: "MSOA",
    geoCode: "E02003553"
  },
  {
    en: "Hollybrook",
    geoType: "MSOA",
    geoCode: "E02003554"
  },
  {
    en: "Maybush",
    geoType: "MSOA",
    geoCode: "E02003555"
  },
  {
    en: "Townhill Park",
    geoType: "MSOA",
    geoCode: "E02003556"
  },
  {
    en: "Highfield & University",
    geoType: "MSOA",
    geoCode: "E02003557"
  },
  {
    en: "Shirley Warren",
    geoType: "MSOA",
    geoCode: "E02003558"
  },
  {
    en: "Upper Shirley",
    geoType: "MSOA",
    geoCode: "E02003559"
  },
  {
    en: "Redbridge & Millbrook West",
    geoType: "MSOA",
    geoCode: "E02003560"
  },
  {
    en: "St Denys",
    geoType: "MSOA",
    geoCode: "E02003561"
  },
  {
    en: "Bitterne West",
    geoType: "MSOA",
    geoCode: "E02003562"
  },
  {
    en: "Shirley South",
    geoType: "MSOA",
    geoCode: "E02003563"
  },
  {
    en: "Bitterne East",
    geoType: "MSOA",
    geoCode: "E02003564"
  },
  {
    en: "Bevois Town",
    geoType: "MSOA",
    geoCode: "E02003565"
  },
  {
    en: "Harefield",
    geoType: "MSOA",
    geoCode: "E02003566"
  },
  {
    en: "Regents Park & Millbrook East",
    geoType: "MSOA",
    geoCode: "E02003567"
  },
  {
    en: "Banister Park & Howard Road",
    geoType: "MSOA",
    geoCode: "E02003568"
  },
  {
    en: "Freemantle",
    geoType: "MSOA",
    geoCode: "E02003569"
  },
  {
    en: "Newtown & Nicholstown",
    geoType: "MSOA",
    geoCode: "E02003570"
  },
  {
    en: "City Centre & The Polygon",
    geoType: "MSOA",
    geoCode: "E02003571"
  },
  {
    en: "Bitterne South",
    geoType: "MSOA",
    geoCode: "E02003572"
  },
  {
    en: "Thornhill",
    geoType: "MSOA",
    geoCode: "E02003573"
  },
  {
    en: "Sholing East",
    geoType: "MSOA",
    geoCode: "E02003574"
  },
  {
    en: "Hightown",
    geoType: "MSOA",
    geoCode: "E02003575"
  },
  {
    en: "Itchen",
    geoType: "MSOA",
    geoCode: "E02003576"
  },
  {
    en: "Sholing West",
    geoType: "MSOA",
    geoCode: "E02003578"
  },
  {
    en: "Woolston",
    geoType: "MSOA",
    geoCode: "E02003579"
  },
  {
    en: "Weston",
    geoType: "MSOA",
    geoCode: "E02003580"
  },
  {
    en: "Cowes Central",
    geoType: "MSOA",
    geoCode: "E02003581"
  },
  {
    en: "Cowes West, Gurnard & Northwood",
    geoType: "MSOA",
    geoCode: "E02003582"
  },
  {
    en: "East Cowes & Osborne",
    geoType: "MSOA",
    geoCode: "E02003583"
  },
  {
    en: "Ryde Central",
    geoType: "MSOA",
    geoCode: "E02003584"
  },
  {
    en: "Binstead & Wootton",
    geoType: "MSOA",
    geoCode: "E02003585"
  },
  {
    en: "Ryde West & Havenstreet",
    geoType: "MSOA",
    geoCode: "E02003586"
  },
  {
    en: "Ryde South",
    geoType: "MSOA",
    geoCode: "E02003587"
  },
  {
    en: "Newport East & Parkhurst East",
    geoType: "MSOA",
    geoCode: "E02003588"
  },
  {
    en: "Newport Central & Parkhurst West",
    geoType: "MSOA",
    geoCode: "E02003589"
  },
  {
    en: "Bembridge & Nettlestone",
    geoType: "MSOA",
    geoCode: "E02003590"
  },
  {
    en: "Newport South & West",
    geoType: "MSOA",
    geoCode: "E02003591"
  },
  {
    en: "Yarmouth & Freshwater",
    geoType: "MSOA",
    geoCode: "E02003592"
  },
  {
    en: "Brighstone & Shalfleet",
    geoType: "MSOA",
    geoCode: "E02003593"
  },
  {
    en: "Sandown & Brading",
    geoType: "MSOA",
    geoCode: "E02003594"
  },
  {
    en: "Shanklin West & Newchurch",
    geoType: "MSOA",
    geoCode: "E02003595"
  },
  {
    en: "Shanklin Central & Lake",
    geoType: "MSOA",
    geoCode: "E02003596"
  },
  {
    en: "Niton, Shorwell & Godshill",
    geoType: "MSOA",
    geoCode: "E02003597"
  },
  {
    en: "Ventnor & Wroxall",
    geoType: "MSOA",
    geoCode: "E02003598"
  },
  {
    en: "Sandy North",
    geoType: "MSOA",
    geoCode: "E02003599"
  },
  {
    en: "Sandy South",
    geoType: "MSOA",
    geoCode: "E02003600"
  },
  {
    en: "Potton",
    geoType: "MSOA",
    geoCode: "E02003601"
  },
  {
    en: "Blunham, Caldecote & Broom",
    geoType: "MSOA",
    geoCode: "E02003602"
  },
  {
    en: "Biggleswade West",
    geoType: "MSOA",
    geoCode: "E02003603"
  },
  {
    en: "Biggleswade East",
    geoType: "MSOA",
    geoCode: "E02003604"
  },
  {
    en: "Cranfield & Aspley Guise",
    geoType: "MSOA",
    geoCode: "E02003605"
  },
  {
    en: "Houghton Conquest & Clophill",
    geoType: "MSOA",
    geoCode: "E02003606"
  },
  {
    en: "Marston Moretaine, Lidlington & Woburn",
    geoType: "MSOA",
    geoCode: "E02003607"
  },
  {
    en: "Arlesey & Henlow",
    geoType: "MSOA",
    geoCode: "E02003608"
  },
  {
    en: "Shefford & Shillington",
    geoType: "MSOA",
    geoCode: "E02003609"
  },
  {
    en: "Ampthill & Millbrook",
    geoType: "MSOA",
    geoCode: "E02003610"
  },
  {
    en: "Clifton, Meppershall & Stondon",
    geoType: "MSOA",
    geoCode: "E02003611"
  },
  {
    en: "Stotfold",
    geoType: "MSOA",
    geoCode: "E02003612"
  },
  {
    en: "Flitwick East",
    geoType: "MSOA",
    geoCode: "E02003613"
  },
  {
    en: "Flitwick West",
    geoType: "MSOA",
    geoCode: "E02003614"
  },
  {
    en: "Westoning, Harlington & Silsoe",
    geoType: "MSOA",
    geoCode: "E02003615"
  },
  {
    en: "Riseley & Sharnbrook",
    geoType: "MSOA",
    geoCode: "E02003616"
  },
  {
    en: "Harrold, Chellington & Turvey",
    geoType: "MSOA",
    geoCode: "E02003617"
  },
  {
    en: "Clapham, Oakley & Thurleigh",
    geoType: "MSOA",
    geoCode: "E02003618"
  },
  {
    en: "Wyboston, Great Barford & Cople",
    geoType: "MSOA",
    geoCode: "E02003619"
  },
  {
    en: "Brickhill",
    geoType: "MSOA",
    geoCode: "E02003620"
  },
  {
    en: "Putnoe",
    geoType: "MSOA",
    geoCode: "E02003621"
  },
  {
    en: "Goldington",
    geoType: "MSOA",
    geoCode: "E02003622"
  },
  {
    en: "Bromham & Biddenham",
    geoType: "MSOA",
    geoCode: "E02003623"
  },
  {
    en: "De Parys",
    geoType: "MSOA",
    geoCode: "E02003624"
  },
  {
    en: "Harpur",
    geoType: "MSOA",
    geoCode: "E02003625"
  },
  {
    en: "Newnham",
    geoType: "MSOA",
    geoCode: "E02003626"
  },
  {
    en: "Castle & Kingsway",
    geoType: "MSOA",
    geoCode: "E02003627"
  },
  {
    en: "Queens Park",
    geoType: "MSOA",
    geoCode: "E02003628"
  },
  {
    en: "Kingsbrook",
    geoType: "MSOA",
    geoCode: "E02003629"
  },
  {
    en: "Cauldwell",
    geoType: "MSOA",
    geoCode: "E02003630"
  },
  {
    en: "Kempston North",
    geoType: "MSOA",
    geoCode: "E02003631"
  },
  {
    en: "Kempston Central & East",
    geoType: "MSOA",
    geoCode: "E02003632"
  },
  {
    en: "Kempston West & South",
    geoType: "MSOA",
    geoCode: "E02003633"
  },
  {
    en: "Wootton & Stewartby",
    geoType: "MSOA",
    geoCode: "E02003635"
  },
  {
    en: "Barton-le-Clay & Upper Sundon",
    geoType: "MSOA",
    geoCode: "E02003636"
  },
  {
    en: "Toddington, Heath & Reach",
    geoType: "MSOA",
    geoCode: "E02003637"
  },
  {
    en: "Leighton Buzzard North & East",
    geoType: "MSOA",
    geoCode: "E02003638"
  },
  {
    en: "Leighton Buzzard Central",
    geoType: "MSOA",
    geoCode: "E02003639"
  },
  {
    en: "Linslade East",
    geoType: "MSOA",
    geoCode: "E02003640"
  },
  {
    en: "Linslade West",
    geoType: "MSOA",
    geoCode: "E02003641"
  },
  {
    en: "Houghton Regis North",
    geoType: "MSOA",
    geoCode: "E02003642"
  },
  {
    en: "Leighton Buzzard South East",
    geoType: "MSOA",
    geoCode: "E02003643"
  },
  {
    en: "Houghton Regis South",
    geoType: "MSOA",
    geoCode: "E02003644"
  },
  {
    en: "Dunstable East",
    geoType: "MSOA",
    geoCode: "E02003645"
  },
  {
    en: "Dunstable West",
    geoType: "MSOA",
    geoCode: "E02003646"
  },
  {
    en: "Dunstable Central",
    geoType: "MSOA",
    geoCode: "E02003647"
  },
  {
    en: "Dunstable Manshead",
    geoType: "MSOA",
    geoCode: "E02003648"
  },
  {
    en: "Dunstable South",
    geoType: "MSOA",
    geoCode: "E02003649"
  },
  {
    en: "Eaton Bray, Whipsnade & Holywell",
    geoType: "MSOA",
    geoCode: "E02003650"
  },
  {
    en: "Caddington & Slip End",
    geoType: "MSOA",
    geoCode: "E02003651"
  },
  {
    en: "Buckingham South, Maids Moreton & Akeley",
    geoType: "MSOA",
    geoCode: "E02003652"
  },
  {
    en: "Buckingham North",
    geoType: "MSOA",
    geoCode: "E02003653"
  },
  {
    en: "Newton Longville & Great Horwood",
    geoType: "MSOA",
    geoCode: "E02003654"
  },
  {
    en: "Marsh Gibbon, Steeple Claydon & Tingewick",
    geoType: "MSOA",
    geoCode: "E02003655"
  },
  {
    en: "Winslow & Padbury",
    geoType: "MSOA",
    geoCode: "E02003656"
  },
  {
    en: "Granborough, Stewkley & Great Brickhill",
    geoType: "MSOA",
    geoCode: "E02003657"
  },
  {
    en: "Wing, Wingrave & Bierton",
    geoType: "MSOA",
    geoCode: "E02003658"
  },
  {
    en: "Waddesdon & Whitchurch",
    geoType: "MSOA",
    geoCode: "E02003659"
  },
  {
    en: "Cheddington, Pitstone & Edlesborough",
    geoType: "MSOA",
    geoCode: "E02003660"
  },
  {
    en: "Oakley, Brill & Edgcott",
    geoType: "MSOA",
    geoCode: "E02003661"
  },
  {
    en: "Watermead & Elmhurst",
    geoType: "MSOA",
    geoCode: "E02003662"
  },
  {
    en: "Berryfields & Haydon Hill",
    geoType: "MSOA",
    geoCode: "E02003663"
  },
  {
    en: "Gatehouse",
    geoType: "MSOA",
    geoCode: "E02003664"
  },
  {
    en: "Victoria Park",
    geoType: "MSOA",
    geoCode: "E02003665"
  },
  {
    en: "Aylesbury Central",
    geoType: "MSOA",
    geoCode: "E02003666"
  },
  {
    en: "Fairford Leys",
    geoType: "MSOA",
    geoCode: "E02003667"
  },
  {
    en: "Bedgrove & Walton",
    geoType: "MSOA",
    geoCode: "E02003668"
  },
  {
    en: "California & Southcourt",
    geoType: "MSOA",
    geoCode: "E02003669"
  },
  {
    en: "Mandeville & Elm Farm",
    geoType: "MSOA",
    geoCode: "E02003670"
  },
  {
    en: "Walton Court & Hawkslade",
    geoType: "MSOA",
    geoCode: "E02003671"
  },
  {
    en: "Stoke Mandeville & Aston Clinton",
    geoType: "MSOA",
    geoCode: "E02003672"
  },
  {
    en: "Haddenham, Dinton & Stone",
    geoType: "MSOA",
    geoCode: "E02003673"
  },
  {
    en: "Worminghall, Long Crendon & Cuddington",
    geoType: "MSOA",
    geoCode: "E02003674"
  },
  {
    en: "Wendover",
    geoType: "MSOA",
    geoCode: "E02003675"
  },
  {
    en: "Hyde Heath, Bellingdon & Latimer",
    geoType: "MSOA",
    geoCode: "E02003676"
  },
  {
    en: "Chesham West",
    geoType: "MSOA",
    geoCode: "E02003677"
  },
  {
    en: "Chesham East",
    geoType: "MSOA",
    geoCode: "E02003678"
  },
  {
    en: "Chesham South",
    geoType: "MSOA",
    geoCode: "E02003679"
  },
  {
    en: "Great Missenden & Prestwood",
    geoType: "MSOA",
    geoCode: "E02003680"
  },
  {
    en: "Amersham-on-the-Hill & Chesham Bois",
    geoType: "MSOA",
    geoCode: "E02003681"
  },
  {
    en: "Old Amersham",
    geoType: "MSOA",
    geoCode: "E02003682"
  },
  {
    en: "Little Chalfont",
    geoType: "MSOA",
    geoCode: "E02003683"
  },
  {
    en: "Chalfont St Giles, Seer Green & Jordans",
    geoType: "MSOA",
    geoCode: "E02003685"
  },
  {
    en: "Chalfont Common & St Peter East",
    geoType: "MSOA",
    geoCode: "E02003686"
  },
  {
    en: "Chalfont St Peter West",
    geoType: "MSOA",
    geoCode: "E02003687"
  },
  {
    en: "Beaconsfield Town",
    geoType: "MSOA",
    geoCode: "E02003688"
  },
  {
    en: "Gerrards Cross",
    geoType: "MSOA",
    geoCode: "E02003689"
  },
  {
    en: "Denham",
    geoType: "MSOA",
    geoCode: "E02003690"
  },
  {
    en: "Farnham & Hedgerley",
    geoType: "MSOA",
    geoCode: "E02003691"
  },
  {
    en: "Stoke Poges & George Green",
    geoType: "MSOA",
    geoCode: "E02003692"
  },
  {
    en: "Burham North, Taplow & Dorney",
    geoType: "MSOA",
    geoCode: "E02003693"
  },
  {
    en: "Burnham South",
    geoType: "MSOA",
    geoCode: "E02003694"
  },
  {
    en: "Iver & Richings Park",
    geoType: "MSOA",
    geoCode: "E02003695"
  },
  {
    en: "Princes Risborough",
    geoType: "MSOA",
    geoCode: "E02003696"
  },
  {
    en: "Longwick, Kimble & Lacey Green",
    geoType: "MSOA",
    geoCode: "E02003697"
  },
  {
    en: "Walter's Ash & Hughenden Valley",
    geoType: "MSOA",
    geoCode: "E02003698"
  },
  {
    en: "Stokenchurch",
    geoType: "MSOA",
    geoCode: "E02003699"
  },
  {
    en: "Downley",
    geoType: "MSOA",
    geoCode: "E02003701"
  },
  {
    en: "Bledlow, Cadmore End & Hambleden Valley",
    geoType: "MSOA",
    geoCode: "E02003702"
  },
  {
    en: "Terriers & Amersham Hill",
    geoType: "MSOA",
    geoCode: "E02003703"
  },
  {
    en: "Tylers Green",
    geoType: "MSOA",
    geoCode: "E02003704"
  },
  {
    en: "Bowerdean",
    geoType: "MSOA",
    geoCode: "E02003705"
  },
  {
    en: "Totteridge",
    geoType: "MSOA",
    geoCode: "E02003706"
  },
  {
    en: "Sands",
    geoType: "MSOA",
    geoCode: "E02003707"
  },
  {
    en: "Oakridge & Castlefield",
    geoType: "MSOA",
    geoCode: "E02003708"
  },
  {
    en: "Micklefield",
    geoType: "MSOA",
    geoCode: "E02003709"
  },
  {
    en: "Town Centre & Marlow Hill",
    geoType: "MSOA",
    geoCode: "E02003710"
  },
  {
    en: "Ryemead & Wycombe Marsh",
    geoType: "MSOA",
    geoCode: "E02003711"
  },
  {
    en: "Lane End & Booker",
    geoType: "MSOA",
    geoCode: "E02003712"
  },
  {
    en: "Flackwell Heath",
    geoType: "MSOA",
    geoCode: "E02003713"
  },
  {
    en: "Loudwater & Wooburn Green",
    geoType: "MSOA",
    geoCode: "E02003714"
  },
  {
    en: "Marlow Bottom, Danesfield & Well End",
    geoType: "MSOA",
    geoCode: "E02003715"
  },
  {
    en: "Bourne End",
    geoType: "MSOA",
    geoCode: "E02003716"
  },
  {
    en: "Marlow West & North",
    geoType: "MSOA",
    geoCode: "E02003717"
  },
  {
    en: "Marlow East",
    geoType: "MSOA",
    geoCode: "E02003718"
  },
  {
    en: "Kings Hedges",
    geoType: "MSOA",
    geoCode: "E02003719"
  },
  {
    en: "Arbury",
    geoType: "MSOA",
    geoCode: "E02003720"
  },
  {
    en: "East Chesterton",
    geoType: "MSOA",
    geoCode: "E02003721"
  },
  {
    en: "West Chesterton",
    geoType: "MSOA",
    geoCode: "E02003722"
  },
  {
    en: "Eddington & Castle",
    geoType: "MSOA",
    geoCode: "E02003723"
  },
  {
    en: "East Barnwell & Abbey",
    geoType: "MSOA",
    geoCode: "E02003724"
  },
  {
    en: "Central & West Cambridge",
    geoType: "MSOA",
    geoCode: "E02003725"
  },
  {
    en: "Petersfield",
    geoType: "MSOA",
    geoCode: "E02003726"
  },
  {
    en: "Romsey",
    geoType: "MSOA",
    geoCode: "E02003727"
  },
  {
    en: "Coleridge",
    geoType: "MSOA",
    geoCode: "E02003728"
  },
  {
    en: "Cherry Hinton",
    geoType: "MSOA",
    geoCode: "E02003729"
  },
  {
    en: "Addenbrooke's & Queen Edith's",
    geoType: "MSOA",
    geoCode: "E02003731"
  },
  {
    en: "Littleport",
    geoType: "MSOA",
    geoCode: "E02003732"
  },
  {
    en: "Little Downham & Sutton",
    geoType: "MSOA",
    geoCode: "E02003733"
  },
  {
    en: "North Ely",
    geoType: "MSOA",
    geoCode: "E02003734"
  },
  {
    en: "South Ely",
    geoType: "MSOA",
    geoCode: "E02003735"
  },
  {
    en: "Haddenham, Stretham & Witchford",
    geoType: "MSOA",
    geoCode: "E02003736"
  },
  {
    en: "Soham",
    geoType: "MSOA",
    geoCode: "E02003737"
  },
  {
    en: "Isleham, Fordham & Chippenham",
    geoType: "MSOA",
    geoCode: "E02003738"
  },
  {
    en: "Burwell",
    geoType: "MSOA",
    geoCode: "E02003739"
  },
  {
    en: "Swaffham & Bottisham",
    geoType: "MSOA",
    geoCode: "E02003740"
  },
  {
    en: "Leverington, Gorefield & Tydd St Giles",
    geoType: "MSOA",
    geoCode: "E02003742"
  },
  {
    en: "Wisbech North",
    geoType: "MSOA",
    geoCode: "E02003743"
  },
  {
    en: "Wisbech South & Peckover",
    geoType: "MSOA",
    geoCode: "E02003744"
  },
  {
    en: "Wisbech St Mary, Waldersea & Christchurch",
    geoType: "MSOA",
    geoCode: "E02003745"
  },
  {
    en: "March North",
    geoType: "MSOA",
    geoCode: "E02003746"
  },
  {
    en: "Whittlesey",
    geoType: "MSOA",
    geoCode: "E02003747"
  },
  {
    en: "March East",
    geoType: "MSOA",
    geoCode: "E02003748"
  },
  {
    en: "Coates, Benwick & Pondersbridge",
    geoType: "MSOA",
    geoCode: "E02003749"
  },
  {
    en: "March West",
    geoType: "MSOA",
    geoCode: "E02003750"
  },
  {
    en: "Doddington, Wimblington & Manea",
    geoType: "MSOA",
    geoCode: "E02003751"
  },
  {
    en: "Chatteris",
    geoType: "MSOA",
    geoCode: "E02003752"
  },
  {
    en: "Yaxley & Farcet",
    geoType: "MSOA",
    geoCode: "E02003753"
  },
  {
    en: "Stilton, Elton & Folksworth",
    geoType: "MSOA",
    geoCode: "E02003754"
  },
  {
    en: "Ramsey",
    geoType: "MSOA",
    geoCode: "E02003755"
  },
  {
    en: "Sawtry & Gidding",
    geoType: "MSOA",
    geoCode: "E02003756"
  },
  {
    en: "Warboys & Bury",
    geoType: "MSOA",
    geoCode: "E02003757"
  },
  {
    en: "Somersham, Riptons & Raveleys",
    geoType: "MSOA",
    geoCode: "E02003758"
  },
  {
    en: "Bluntisham, Earith & Needingworth",
    geoType: "MSOA",
    geoCode: "E02003759"
  },
  {
    en: "Huntingdon Sapley & Oxmoor",
    geoType: "MSOA",
    geoCode: "E02003760"
  },
  {
    en: "Huntingdon Hartford",
    geoType: "MSOA",
    geoCode: "E02003761"
  },
  {
    en: "Brampton, the Stukeleys and the Alconburys",
    geoType: "MSOA",
    geoCode: "E02003762"
  },
  {
    en: "St Ives North",
    geoType: "MSOA",
    geoCode: "E02003763"
  },
  {
    en: "Huntingdon Central & West",
    geoType: "MSOA",
    geoCode: "E02003764"
  },
  {
    en: "St Ives South",
    geoType: "MSOA",
    geoCode: "E02003765"
  },
  {
    en: "Godmanchester",
    geoType: "MSOA",
    geoCode: "E02003766"
  },
  {
    en: "Kimbolton, Great Staughton & Molesworth",
    geoType: "MSOA",
    geoCode: "E02003767"
  },
  {
    en: "Houghton, Hemingford & Fenstanton",
    geoType: "MSOA",
    geoCode: "E02003768"
  },
  {
    en: "Buckden & Perry",
    geoType: "MSOA",
    geoCode: "E02003769"
  },
  {
    en: "Little Paxton, Love's Farm & Great Gransden",
    geoType: "MSOA",
    geoCode: "E02003770"
  },
  {
    en: "St Neots Priory Park",
    geoType: "MSOA",
    geoCode: "E02003771"
  },
  {
    en: "St Neots Eaton Ford",
    geoType: "MSOA",
    geoCode: "E02003772"
  },
  {
    en: "St Neots Eynesbury",
    geoType: "MSOA",
    geoCode: "E02003773"
  },
  {
    en: "St Neots Eaton Socon",
    geoType: "MSOA",
    geoCode: "E02003774"
  },
  {
    en: "Willingham & Over",
    geoType: "MSOA",
    geoCode: "E02003775"
  },
  {
    en: "Cottenham",
    geoType: "MSOA",
    geoCode: "E02003776"
  },
  {
    en: "Longstanton, Swavesey & Oakington",
    geoType: "MSOA",
    geoCode: "E02003777"
  },
  {
    en: "Waterbeach and Landbeach",
    geoType: "MSOA",
    geoCode: "E02003778"
  },
  {
    en: "HIston, Impington & Orchard Park",
    geoType: "MSOA",
    geoCode: "E02003780"
  },
  {
    en: "Milton, Fen Ditton & Quy",
    geoType: "MSOA",
    geoCode: "E02003781"
  },
  {
    en: "Hardwick & Highfields",
    geoType: "MSOA",
    geoCode: "E02003784"
  },
  {
    en: "Fulbourn & Teversham",
    geoType: "MSOA",
    geoCode: "E02003785"
  },
  {
    en: "Great Shelford & Stapleford",
    geoType: "MSOA",
    geoCode: "E02003786"
  },
  {
    en: "Barrington, Orwell & Gamlingay",
    geoType: "MSOA",
    geoCode: "E02003787"
  },
  {
    en: "Little Shelford , Foxton & Haslingfield",
    geoType: "MSOA",
    geoCode: "E02003788"
  },
  {
    en: "Sawston",
    geoType: "MSOA",
    geoCode: "E02003789"
  },
  {
    en: "Linton & Balsham",
    geoType: "MSOA",
    geoCode: "E02003790"
  },
  {
    en: "Duxford, Whittlesford & the Abingtons",
    geoType: "MSOA",
    geoCode: "E02003791"
  },
  {
    en: "Meldreth, Melbourn & Great Chishill",
    geoType: "MSOA",
    geoCode: "E02003792"
  },
  {
    en: "Bassingbourn & the Mordens",
    geoType: "MSOA",
    geoCode: "E02003793"
  },
  {
    en: "Elton, Mickle Trafford & Great Barrow",
    geoType: "MSOA",
    geoCode: "E02003794"
  },
  {
    en: "Capenhurst, Saughall & Moston",
    geoType: "MSOA",
    geoCode: "E02003795"
  },
  {
    en: "Upton East",
    geoType: "MSOA",
    geoCode: "E02003796"
  },
  {
    en: "Upton West & Heath",
    geoType: "MSOA",
    geoCode: "E02003797"
  },
  {
    en: "Blacon North",
    geoType: "MSOA",
    geoCode: "E02003798"
  },
  {
    en: "Blacon South",
    geoType: "MSOA",
    geoCode: "E02003799"
  },
  {
    en: "Kelsall, Tarvin & Ashton Hayes",
    geoType: "MSOA",
    geoCode: "E02003800"
  },
  {
    en: "Vicars Cross & Hoole East",
    geoType: "MSOA",
    geoCode: "E02003801"
  },
  {
    en: "Chester Boughton West & Hoole",
    geoType: "MSOA",
    geoCode: "E02003802"
  },
  {
    en: "Chester City & Garden Quarter",
    geoType: "MSOA",
    geoCode: "E02003803"
  },
  {
    en: "Chester Boughton East",
    geoType: "MSOA",
    geoCode: "E02003804"
  },
  {
    en: "Christleton, Guilden Sutton & Waverton",
    geoType: "MSOA",
    geoCode: "E02003805"
  },
  {
    en: "Boughton Heath & Huntington",
    geoType: "MSOA",
    geoCode: "E02003806"
  },
  {
    en: "Chester Handbridge Park",
    geoType: "MSOA",
    geoCode: "E02003807"
  },
  {
    en: "Lache",
    geoType: "MSOA",
    geoCode: "E02003808"
  },
  {
    en: "Dodleston, Tattenhall & Duddon",
    geoType: "MSOA",
    geoCode: "E02003809"
  },
  {
    en: "Churton, Farndon & Malpas",
    geoType: "MSOA",
    geoCode: "E02003810"
  },
  {
    en: "Cranage & Goostrey",
    geoType: "MSOA",
    geoCode: "E02003811"
  },
  {
    en: "Holmes Chapel",
    geoType: "MSOA",
    geoCode: "E02003812"
  },
  {
    en: "Middlewich West",
    geoType: "MSOA",
    geoCode: "E02003813"
  },
  {
    en: "Middlewich East",
    geoType: "MSOA",
    geoCode: "E02003814"
  },
  {
    en: "Buglawton",
    geoType: "MSOA",
    geoCode: "E02003815"
  },
  {
    en: "Congleton Town",
    geoType: "MSOA",
    geoCode: "E02003816"
  },
  {
    en: "Congleton West Heath",
    geoType: "MSOA",
    geoCode: "E02003817"
  },
  {
    en: "Hightown, Mossley & Timbersbrook",
    geoType: "MSOA",
    geoCode: "E02003818"
  },
  {
    en: "Sandbach North",
    geoType: "MSOA",
    geoCode: "E02003819"
  },
  {
    en: "Sandbach Ettiley Heath & Wheelock",
    geoType: "MSOA",
    geoCode: "E02003820"
  },
  {
    en: "Sandbach Heath",
    geoType: "MSOA",
    geoCode: "E02003821"
  },
  {
    en: "Scholar Green, Rode Heath & Brereton",
    geoType: "MSOA",
    geoCode: "E02003822"
  },
  {
    en: "Alsager East",
    geoType: "MSOA",
    geoCode: "E02003823"
  },
  {
    en: "Alsager West",
    geoType: "MSOA",
    geoCode: "E02003824"
  },
  {
    en: "Crewe Leighton",
    geoType: "MSOA",
    geoCode: "E02003825"
  },
  {
    en: "Crewe North East",
    geoType: "MSOA",
    geoCode: "E02003826"
  },
  {
    en: "Crewe Coppenhall & Underwood",
    geoType: "MSOA",
    geoCode: "E02003827"
  },
  {
    en: "Crewe North West",
    geoType: "MSOA",
    geoCode: "E02003828"
  },
  {
    en: "Crewe Sydney & Gateway",
    geoType: "MSOA",
    geoCode: "E02003829"
  },
  {
    en: "Crewe Town & Victoria Avenue",
    geoType: "MSOA",
    geoCode: "E02003830"
  },
  {
    en: "Haslington & Weston",
    geoType: "MSOA",
    geoCode: "E02003831"
  },
  {
    en: "Crewe Mill Street & College",
    geoType: "MSOA",
    geoCode: "E02003832"
  },
  {
    en: "Wistaston Green",
    geoType: "MSOA",
    geoCode: "E02003833"
  },
  {
    en: "Crewe Gresty Road",
    geoType: "MSOA",
    geoCode: "E02003834"
  },
  {
    en: "Crewe South West & Wistaston",
    geoType: "MSOA",
    geoCode: "E02003835"
  },
  {
    en: "Nantwich North East",
    geoType: "MSOA",
    geoCode: "E02003836"
  },
  {
    en: "Willaston & Shavington",
    geoType: "MSOA",
    geoCode: "E02003838"
  },
  {
    en: "Nantwich South West",
    geoType: "MSOA",
    geoCode: "E02003839"
  },
  {
    en: "Audlem, Bunbury & Wrenbury",
    geoType: "MSOA",
    geoCode: "E02003840"
  },
  {
    en: "Neston & Parkgate",
    geoType: "MSOA",
    geoCode: "E02003841"
  },
  {
    en: "Hooton, Willaston & Ness",
    geoType: "MSOA",
    geoCode: "E02003842"
  },
  {
    en: "Little Sutton North & Overpool",
    geoType: "MSOA",
    geoCode: "E02003843"
  },
  {
    en: "Little Neston",
    geoType: "MSOA",
    geoCode: "E02003844"
  },
  {
    en: "Ellesmere Port Town & Rossmore",
    geoType: "MSOA",
    geoCode: "E02003845"
  },
  {
    en: "Little Sutton East",
    geoType: "MSOA",
    geoCode: "E02003846"
  },
  {
    en: "Little Sutton West",
    geoType: "MSOA",
    geoCode: "E02003847"
  },
  {
    en: "Ellesmere Port Pooltown Road",
    geoType: "MSOA",
    geoCode: "E02003848"
  },
  {
    en: "Wolverham & Stanlow",
    geoType: "MSOA",
    geoCode: "E02003849"
  },
  {
    en: "Great Sutton",
    geoType: "MSOA",
    geoCode: "E02003850"
  },
  {
    en: "Whitby & Stanney Woods",
    geoType: "MSOA",
    geoCode: "E02003851"
  },
  {
    en: "Ellesmere Port South",
    geoType: "MSOA",
    geoCode: "E02003852"
  },
  {
    en: "Disley & Lyme Park",
    geoType: "MSOA",
    geoCode: "E02003853"
  },
  {
    en: "Poynton West",
    geoType: "MSOA",
    geoCode: "E02003854"
  },
  {
    en: "Poynton East",
    geoType: "MSOA",
    geoCode: "E02003855"
  },
  {
    en: "Handforth & Dean Row",
    geoType: "MSOA",
    geoCode: "E02003856"
  },
  {
    en: "Lacey Green & Wilmslow Park",
    geoType: "MSOA",
    geoCode: "E02003857"
  },
  {
    en: "Wilmslow Town",
    geoType: "MSOA",
    geoCode: "E02003858"
  },
  {
    en: "Mobberley, Plumley & High Legh",
    geoType: "MSOA",
    geoCode: "E02003859"
  },
  {
    en: "Fulshaw Park & Lindow",
    geoType: "MSOA",
    geoCode: "E02003860"
  },
  {
    en: "Knutsford North",
    geoType: "MSOA",
    geoCode: "E02003861"
  },
  {
    en: "Prestbury & Adlington",
    geoType: "MSOA",
    geoCode: "E02003862"
  },
  {
    en: "South Knutsford & Bexton",
    geoType: "MSOA",
    geoCode: "E02003863"
  },
  {
    en: "Alderley Edge & Chelford",
    geoType: "MSOA",
    geoCode: "E02003864"
  },
  {
    en: "Bollington",
    geoType: "MSOA",
    geoCode: "E02003865"
  },
  {
    en: "Macclesfield Tytherington",
    geoType: "MSOA",
    geoCode: "E02003866"
  },
  {
    en: "Macclesfield Upton Priory & Greenside",
    geoType: "MSOA",
    geoCode: "E02003867"
  },
  {
    en: "Macclesfield East & Hurdsfield",
    geoType: "MSOA",
    geoCode: "E02003868"
  },
  {
    en: "Macclesfield Bollinbrook",
    geoType: "MSOA",
    geoCode: "E02003869"
  },
  {
    en: "Central Macclesfield",
    geoType: "MSOA",
    geoCode: "E02003870"
  },
  {
    en: "Macclesfield Weston",
    geoType: "MSOA",
    geoCode: "E02003871"
  },
  {
    en: "Gawsworth & Macclesfield Forest",
    geoType: "MSOA",
    geoCode: "E02003872"
  },
  {
    en: "Macclesfield South & Lyme Green",
    geoType: "MSOA",
    geoCode: "E02003873"
  },
  {
    en: "Frodsham",
    geoType: "MSOA",
    geoCode: "E02003874"
  },
  {
    en: "Comberbach, Acton Bridge & Whitley",
    geoType: "MSOA",
    geoCode: "E02003875"
  },
  {
    en: "Barnton",
    geoType: "MSOA",
    geoCode: "E02003876"
  },
  {
    en: "Helsby & Kingsley",
    geoType: "MSOA",
    geoCode: "E02003877"
  },
  {
    en: "Lostock & Wincham",
    geoType: "MSOA",
    geoCode: "E02003878"
  },
  {
    en: "Northwich Central & Winnington",
    geoType: "MSOA",
    geoCode: "E02003879"
  },
  {
    en: "Weaverham",
    geoType: "MSOA",
    geoCode: "E02003880"
  },
  {
    en: "Greenbank",
    geoType: "MSOA",
    geoCode: "E02003881"
  },
  {
    en: "Rudheath West & Leftwich",
    geoType: "MSOA",
    geoCode: "E02003882"
  },
  {
    en: "Hartford & Kingsmead",
    geoType: "MSOA",
    geoCode: "E02003883"
  },
  {
    en: "Sandiway",
    geoType: "MSOA",
    geoCode: "E02003884"
  },
  {
    en: "Davenham & Moulton",
    geoType: "MSOA",
    geoCode: "E02003885"
  },
  {
    en: "Wharton",
    geoType: "MSOA",
    geoCode: "E02003886"
  },
  {
    en: "Winsford North",
    geoType: "MSOA",
    geoCode: "E02003887"
  },
  {
    en: "Winsford Central",
    geoType: "MSOA",
    geoCode: "E02003888"
  },
  {
    en: "Winsford Over",
    geoType: "MSOA",
    geoCode: "E02003889"
  },
  {
    en: "Winsford Glebe Green",
    geoType: "MSOA",
    geoCode: "E02003890"
  },
  {
    en: "Tarporley & Eddisbury Hill",
    geoType: "MSOA",
    geoCode: "E02003891"
  },
  {
    en: "Gunnislake & Calstock",
    geoType: "MSOA",
    geoCode: "E02003892"
  },
  {
    en: "St Neot & St Cleer",
    geoType: "MSOA",
    geoCode: "E02003893"
  },
  {
    en: "Callington & Pensilva",
    geoType: "MSOA",
    geoCode: "E02003894"
  },
  {
    en: "Dobwalls, Addington & Menheniot",
    geoType: "MSOA",
    geoCode: "E02003895"
  },
  {
    en: "Liskeard",
    geoType: "MSOA",
    geoCode: "E02003896"
  },
  {
    en: "Saltash Latchbrook & St Stephens",
    geoType: "MSOA",
    geoCode: "E02003897"
  },
  {
    en: "St Germans & St Mellion",
    geoType: "MSOA",
    geoCode: "E02003898"
  },
  {
    en: "Mid Saltash",
    geoType: "MSOA",
    geoCode: "E02003899"
  },
  {
    en: "Saltash Town & Pillmere",
    geoType: "MSOA",
    geoCode: "E02003900"
  },
  {
    en: "Lanreath, Pelynt & Polruan",
    geoType: "MSOA",
    geoCode: "E02003901"
  },
  {
    en: "Torpoint",
    geoType: "MSOA",
    geoCode: "E02003902"
  },
  {
    en: "Kingsand, Antony & Maryfield",
    geoType: "MSOA",
    geoCode: "E02003903"
  },
  {
    en: "Looe & Polperro",
    geoType: "MSOA",
    geoCode: "E02003904"
  },
  {
    en: "Grampound Road, St Newlyn East and Cubert",
    geoType: "MSOA",
    geoCode: "E02003905"
  },
  {
    en: "Perranporth & Goonhavern",
    geoType: "MSOA",
    geoCode: "E02003906"
  },
  {
    en: "St Agnes & Mount Hawke",
    geoType: "MSOA",
    geoCode: "E02003907"
  },
  {
    en: "Truro East",
    geoType: "MSOA",
    geoCode: "E02003908"
  },
  {
    en: "Truro West",
    geoType: "MSOA",
    geoCode: "E02003909"
  },
  {
    en: "Truro South & Central",
    geoType: "MSOA",
    geoCode: "E02003910"
  },
  {
    en: "Shortlanesend, Chacewater & Carnon Downs",
    geoType: "MSOA",
    geoCode: "E02003911"
  },
  {
    en: "Probus & Roseland",
    geoType: "MSOA",
    geoCode: "E02003912"
  },
  {
    en: "Mylor Bridge & Frogpool",
    geoType: "MSOA",
    geoCode: "E02003913"
  },
  {
    en: "Penryn",
    geoType: "MSOA",
    geoCode: "E02003914"
  },
  {
    en: "Falmouth North",
    geoType: "MSOA",
    geoCode: "E02003915"
  },
  {
    en: "Falmouth East",
    geoType: "MSOA",
    geoCode: "E02003916"
  },
  {
    en: "Falmouth West & South",
    geoType: "MSOA",
    geoCode: "E02003917"
  },
  {
    en: "Illogan & Portreath",
    geoType: "MSOA",
    geoCode: "E02003918"
  },
  {
    en: "Redruth North",
    geoType: "MSOA",
    geoCode: "E02003919"
  },
  {
    en: "Redruth South",
    geoType: "MSOA",
    geoCode: "E02003920"
  },
  {
    en: "St Day & Lanner",
    geoType: "MSOA",
    geoCode: "E02003921"
  },
  {
    en: "Pool & Illogan Highway",
    geoType: "MSOA",
    geoCode: "E02003922"
  },
  {
    en: "Camborne East",
    geoType: "MSOA",
    geoCode: "E02003923"
  },
  {
    en: "Camborne West",
    geoType: "MSOA",
    geoCode: "E02003924"
  },
  {
    en: "Camborne South",
    geoType: "MSOA",
    geoCode: "E02003925"
  },
  {
    en: "Crowan, Wendron & Stithians",
    geoType: "MSOA",
    geoCode: "E02003926"
  },
  {
    en: "Ponsanooth, Mabe Burnthouse & Constantine",
    geoType: "MSOA",
    geoCode: "E02003927"
  },
  {
    en: "Helston",
    geoType: "MSOA",
    geoCode: "E02003928"
  },
  {
    en: "Porthleven, Breage & Praa Sands",
    geoType: "MSOA",
    geoCode: "E02003929"
  },
  {
    en: "The Lizard",
    geoType: "MSOA",
    geoCode: "E02003930"
  },
  {
    en: "Bude & Stratton",
    geoType: "MSOA",
    geoCode: "E02003931"
  },
  {
    en: "Poundstock & Kilkhampton",
    geoType: "MSOA",
    geoCode: "E02003932"
  },
  {
    en: "Crackington & Tintagel",
    geoType: "MSOA",
    geoCode: "E02003933"
  },
  {
    en: "Camelford & Tresmeer",
    geoType: "MSOA",
    geoCode: "E02003934"
  },
  {
    en: "Launceston",
    geoType: "MSOA",
    geoCode: "E02003935"
  },
  {
    en: "Altarnun & Stoke Climsland",
    geoType: "MSOA",
    geoCode: "E02003936"
  },
  {
    en: "Trebetherick & Whitecross",
    geoType: "MSOA",
    geoCode: "E02003937"
  },
  {
    en: "Padstow & St Issey",
    geoType: "MSOA",
    geoCode: "E02003938"
  },
  {
    en: "Wadebridge",
    geoType: "MSOA",
    geoCode: "E02003939"
  },
  {
    en: "St Breward, Tredethy & Lanivet",
    geoType: "MSOA",
    geoCode: "E02003940"
  },
  {
    en: "Bodmin East",
    geoType: "MSOA",
    geoCode: "E02003941"
  },
  {
    en: "Bodmin West",
    geoType: "MSOA",
    geoCode: "E02003942"
  },
  {
    en: "St Ives & Halsetown",
    geoType: "MSOA",
    geoCode: "E02003943"
  },
  {
    en: "Hayle",
    geoType: "MSOA",
    geoCode: "E02003944"
  },
  {
    en: "Towednack, Lelant & Carbis Bay",
    geoType: "MSOA",
    geoCode: "E02003945"
  },
  {
    en: "Marazion, St Erth & Gwinear Gwithian",
    geoType: "MSOA",
    geoCode: "E02003946"
  },
  {
    en: "West Penwith & St Buryan",
    geoType: "MSOA",
    geoCode: "E02003947"
  },
  {
    en: "Penzance North",
    geoType: "MSOA",
    geoCode: "E02003948"
  },
  {
    en: "Penzance Quay",
    geoType: "MSOA",
    geoCode: "E02003949"
  },
  {
    en: "St Just & Land's End",
    geoType: "MSOA",
    geoCode: "E02003950"
  },
  {
    en: "Penzance South & Newlyn",
    geoType: "MSOA",
    geoCode: "E02003951"
  },
  {
    en: "St Columb Minor & Porth",
    geoType: "MSOA",
    geoCode: "E02003952"
  },
  {
    en: "St Columb Major & St Mawgan",
    geoType: "MSOA",
    geoCode: "E02003953"
  },
  {
    en: "Newquay West",
    geoType: "MSOA",
    geoCode: "E02003954"
  },
  {
    en: "Newquay East",
    geoType: "MSOA",
    geoCode: "E02003955"
  },
  {
    en: "Roche & Goss Moor",
    geoType: "MSOA",
    geoCode: "E02003956"
  },
  {
    en: "Lostwithiel & Penwithick",
    geoType: "MSOA",
    geoCode: "E02003957"
  },
  {
    en: "Trewoon, Coombe & Foxhole",
    geoType: "MSOA",
    geoCode: "E02003958"
  },
  {
    en: "Par",
    geoType: "MSOA",
    geoCode: "E02003959"
  },
  {
    en: "Tywardreath & Fowey",
    geoType: "MSOA",
    geoCode: "E02003960"
  },
  {
    en: "St Austell East & Carlyon Bay",
    geoType: "MSOA",
    geoCode: "E02003961"
  },
  {
    en: "St Austell North & Carclaze",
    geoType: "MSOA",
    geoCode: "E02003962"
  },
  {
    en: "St Austell Central",
    geoType: "MSOA",
    geoCode: "E02003963"
  },
  {
    en: "Mevagissey & Polgooth",
    geoType: "MSOA",
    geoCode: "E02003964"
  },
  {
    en: "Wigton & Silloth",
    geoType: "MSOA",
    geoCode: "E02003965"
  },
  {
    en: "Boltons, Warnell & Solway Coast",
    geoType: "MSOA",
    geoCode: "E02003966"
  },
  {
    en: "Aspatria & Abbeytown",
    geoType: "MSOA",
    geoCode: "E02003967"
  },
  {
    en: "Maryport, Dearham & Crosby",
    geoType: "MSOA",
    geoCode: "E02003968"
  },
  {
    en: "Flimby, Ellenborough & Broughton Moor",
    geoType: "MSOA",
    geoCode: "E02003969"
  },
  {
    en: "West Cockermouth & Great Broughton",
    geoType: "MSOA",
    geoCode: "E02003970"
  },
  {
    en: "East Cockermouth & Buttermere",
    geoType: "MSOA",
    geoCode: "E02003971"
  },
  {
    en: "Workington North & Seaton",
    geoType: "MSOA",
    geoCode: "E02003972"
  },
  {
    en: "Workington West",
    geoType: "MSOA",
    geoCode: "E02003973"
  },
  {
    en: "Workington East",
    geoType: "MSOA",
    geoCode: "E02003974"
  },
  {
    en: "Harrington, Stainburn & Great Clifton",
    geoType: "MSOA",
    geoCode: "E02003975"
  },
  {
    en: "Keswick & Derwent Valley",
    geoType: "MSOA",
    geoCode: "E02003976"
  },
  {
    en: "Askam & Dalton North",
    geoType: "MSOA",
    geoCode: "E02003977"
  },
  {
    en: "Dalton South",
    geoType: "MSOA",
    geoCode: "E02003978"
  },
  {
    en: "Hawcoat & Furness Abbey",
    geoType: "MSOA",
    geoCode: "E02003979"
  },
  {
    en: "Orsmgill & Hindpool",
    geoType: "MSOA",
    geoCode: "E02003980"
  },
  {
    en: "Parkside",
    geoType: "MSOA",
    geoCode: "E02003981"
  },
  {
    en: "Roose",
    geoType: "MSOA",
    geoCode: "E02003982"
  },
  {
    en: "Abbotsmead & Salthouse",
    geoType: "MSOA",
    geoCode: "E02003983"
  },
  {
    en: "Barrow Central",
    geoType: "MSOA",
    geoCode: "E02003984"
  },
  {
    en: "Walney Island North",
    geoType: "MSOA",
    geoCode: "E02003985"
  },
  {
    en: "Walney Island South & Barrow Island",
    geoType: "MSOA",
    geoCode: "E02003986"
  },
  {
    en: "Longtown & Border",
    geoType: "MSOA",
    geoCode: "E02003987"
  },
  {
    en: "Brampton & Irthing",
    geoType: "MSOA",
    geoCode: "E02003988"
  },
  {
    en: "Carlisle Belah",
    geoType: "MSOA",
    geoCode: "E02003989"
  },
  {
    en: "Kingmoor, Houghton & Whiteclosegate",
    geoType: "MSOA",
    geoCode: "E02003990"
  },
  {
    en: "Belle Vue & Burgh",
    geoType: "MSOA",
    geoCode: "E02003991"
  },
  {
    en: "Central Carlisle",
    geoType: "MSOA",
    geoCode: "E02003992"
  },
  {
    en: "Wetheral, Corby & Geltsdale",
    geoType: "MSOA",
    geoCode: "E02003993"
  },
  {
    en: "Longsowerby & Caldewgate",
    geoType: "MSOA",
    geoCode: "E02003994"
  },
  {
    en: "Raffles & Morton",
    geoType: "MSOA",
    geoCode: "E02003995"
  },
  {
    en: "Denton Holme & Harraby Green",
    geoType: "MSOA",
    geoCode: "E02003996"
  },
  {
    en: "Botcherby & Harraby",
    geoType: "MSOA",
    geoCode: "E02003997"
  },
  {
    en: "Currock & Upperby",
    geoType: "MSOA",
    geoCode: "E02003998"
  },
  {
    en: "Garlands & Dalston",
    geoType: "MSOA",
    geoCode: "E02003999"
  },
  {
    en: "Parton & Distington",
    geoType: "MSOA",
    geoCode: "E02004000"
  },
  {
    en: "Whitehaven Harbour & Corkickle",
    geoType: "MSOA",
    geoCode: "E02004001"
  },
  {
    en: "Hensingham, Hillcrest & Aikbank",
    geoType: "MSOA",
    geoCode: "E02004002"
  },
  {
    en: "Cleator Moor, Frizington & Ennerdale",
    geoType: "MSOA",
    geoCode: "E02004003"
  },
  {
    en: "Mirehouse, Kells & Woodhouse",
    geoType: "MSOA",
    geoCode: "E02004004"
  },
  {
    en: "Egremont & Moor Row",
    geoType: "MSOA",
    geoCode: "E02004005"
  },
  {
    en: "Thornhill, Gosforth & Seascale",
    geoType: "MSOA",
    geoCode: "E02004006"
  },
  {
    en: "Millom & Duddon Valley",
    geoType: "MSOA",
    geoCode: "E02004007"
  },
  {
    en: "Langwathby, Kirkoswald & Alston Moor",
    geoType: "MSOA",
    geoCode: "E02004008"
  },
  {
    en: "Hesket, Lazonby & Skelton",
    geoType: "MSOA",
    geoCode: "E02004009"
  },
  {
    en: "Penrith Central & West",
    geoType: "MSOA",
    geoCode: "E02004010"
  },
  {
    en: "Penrith Outer",
    geoType: "MSOA",
    geoCode: "E02004011"
  },
  {
    en: "Askham, Ullswater & Greystoke",
    geoType: "MSOA",
    geoCode: "E02004012"
  },
  {
    en: "Appleby, Shap & Kirkby Thore",
    geoType: "MSOA",
    geoCode: "E02004013"
  },
  {
    en: "Kirkby Stephen, Tebay & Brough",
    geoType: "MSOA",
    geoCode: "E02004014"
  },
  {
    en: "Windermere North, Ambleside & Langdales",
    geoType: "MSOA",
    geoCode: "E02004015"
  },
  {
    en: "Windermere South & Staveley",
    geoType: "MSOA",
    geoCode: "E02004016"
  },
  {
    en: "Kendal North & Burneside",
    geoType: "MSOA",
    geoCode: "E02004017"
  },
  {
    en: "Kendal Town & Greenside",
    geoType: "MSOA",
    geoCode: "E02004018"
  },
  {
    en: "Kendal East & Whinfell",
    geoType: "MSOA",
    geoCode: "E02004019"
  },
  {
    en: "Kendal South",
    geoType: "MSOA",
    geoCode: "E02004020"
  },
  {
    en: "Hawkshead & Cartmel Fell",
    geoType: "MSOA",
    geoCode: "E02004021"
  },
  {
    en: "Coniston, Broughton & Kirkby",
    geoType: "MSOA",
    geoCode: "E02004022"
  },
  {
    en: "Sedbergh & Kirkby Lonsdale",
    geoType: "MSOA",
    geoCode: "E02004023"
  },
  {
    en: "Burton-in-Kendal, Levens & Natland",
    geoType: "MSOA",
    geoCode: "E02004024"
  },
  {
    en: "Arnside, Milnthorpe & Holme",
    geoType: "MSOA",
    geoCode: "E02004025"
  },
  {
    en: "Ulverston",
    geoType: "MSOA",
    geoCode: "E02004026"
  },
  {
    en: "Grange-over-Sands & Cartmel Peninsula",
    geoType: "MSOA",
    geoCode: "E02004027"
  },
  {
    en: "Swarthmoor & Low Furness",
    geoType: "MSOA",
    geoCode: "E02004028"
  },
  {
    en: "Alfreton",
    geoType: "MSOA",
    geoCode: "E02004029"
  },
  {
    en: "Crich, Holloway & Wingfield",
    geoType: "MSOA",
    geoCode: "E02004030"
  },
  {
    en: "Somercotes & Pye Bridge",
    geoType: "MSOA",
    geoCode: "E02004031"
  },
  {
    en: "Swanwick & Leabrooks",
    geoType: "MSOA",
    geoCode: "E02004032"
  },
  {
    en: "Ripley East, Riddings & Ironville",
    geoType: "MSOA",
    geoCode: "E02004033"
  },
  {
    en: "Ripley West",
    geoType: "MSOA",
    geoCode: "E02004034"
  },
  {
    en: "Ambergate, Heage & Idridgehay",
    geoType: "MSOA",
    geoCode: "E02004035"
  },
  {
    en: "Ripley South & Loscoe",
    geoType: "MSOA",
    geoCode: "E02004036"
  },
  {
    en: "Belper Far Laund",
    geoType: "MSOA",
    geoCode: "E02004037"
  },
  {
    en: "Belper Town",
    geoType: "MSOA",
    geoCode: "E02004038"
  },
  {
    en: "Openwoodgate & Holbrook",
    geoType: "MSOA",
    geoCode: "E02004039"
  },
  {
    en: "Heanor Gate & Aldercar",
    geoType: "MSOA",
    geoCode: "E02004040"
  },
  {
    en: "Heanor East & Langley Mill",
    geoType: "MSOA",
    geoCode: "E02004041"
  },
  {
    en: "Kilburn & Horsley",
    geoType: "MSOA",
    geoCode: "E02004043"
  },
  {
    en: "Duffield, Quarndon & Kirk Langley",
    geoType: "MSOA",
    geoCode: "E02004044"
  },
  {
    en: "Clowne & Barlborough",
    geoType: "MSOA",
    geoCode: "E02004045"
  },
  {
    en: "Whitwell & Elmton",
    geoType: "MSOA",
    geoCode: "E02004046"
  },
  {
    en: "Creswell & Hodthorpe",
    geoType: "MSOA",
    geoCode: "E02004047"
  },
  {
    en: "Bolsover North & Shuttlewood",
    geoType: "MSOA",
    geoCode: "E02004048"
  },
  {
    en: "Bolsover South & Glapwell",
    geoType: "MSOA",
    geoCode: "E02004049"
  },
  {
    en: "Shirebrook North",
    geoType: "MSOA",
    geoCode: "E02004050"
  },
  {
    en: "Langwith, Shirebrook South & Pleasley",
    geoType: "MSOA",
    geoCode: "E02004051"
  },
  {
    en: "Tibshelf, Newton & Hardwick Park",
    geoType: "MSOA",
    geoCode: "E02004052"
  },
  {
    en: "South Normanton West",
    geoType: "MSOA",
    geoCode: "E02004053"
  },
  {
    en: "South Normanton Broadmeadows & Pinxton",
    geoType: "MSOA",
    geoCode: "E02004054"
  },
  {
    en: "Old Whittington",
    geoType: "MSOA",
    geoCode: "E02004055"
  },
  {
    en: "Staveley & Norbriggs",
    geoType: "MSOA",
    geoCode: "E02004056"
  },
  {
    en: "New Whittington, Hollingwood & Barrow Hill",
    geoType: "MSOA",
    geoCode: "E02004057"
  },
  {
    en: "Dunston",
    geoType: "MSOA",
    geoCode: "E02004058"
  },
  {
    en: "Brimington South & Tapton",
    geoType: "MSOA",
    geoCode: "E02004059"
  },
  {
    en: "Inkersall Green & Duckmanton",
    geoType: "MSOA",
    geoCode: "E02004060"
  },
  {
    en: "Newbold",
    geoType: "MSOA",
    geoCode: "E02004061"
  },
  {
    en: "Loundsley Green & Holme Hall",
    geoType: "MSOA",
    geoCode: "E02004062"
  },
  {
    en: "Ashgate & Brockwell",
    geoType: "MSOA",
    geoCode: "E02004063"
  },
  {
    en: "Central Chesterfield & Stonegravels",
    geoType: "MSOA",
    geoCode: "E02004064"
  },
  {
    en: "Brookside & Walton",
    geoType: "MSOA",
    geoCode: "E02004065"
  },
  {
    en: "Spital & Hasland",
    geoType: "MSOA",
    geoCode: "E02004066"
  },
  {
    en: "Boythorpe & Birdholme",
    geoType: "MSOA",
    geoCode: "E02004067"
  },
  {
    en: "Hathersage, Bradwell & Tideswell",
    geoType: "MSOA",
    geoCode: "E02004068"
  },
  {
    en: "Bakewell North, Baslow & Calver",
    geoType: "MSOA",
    geoCode: "E02004069"
  },
  {
    en: "Matlock North",
    geoType: "MSOA",
    geoCode: "E02004072"
  },
  {
    en: "Matlock South, Cromford & Winster",
    geoType: "MSOA",
    geoCode: "E02004073"
  },
  {
    en: "Wirksworth",
    geoType: "MSOA",
    geoCode: "E02004074"
  },
  {
    en: "Ashbourne North, Dovedale & Carsington",
    geoType: "MSOA",
    geoCode: "E02004075"
  },
  {
    en: "Ashbourne South",
    geoType: "MSOA",
    geoCode: "E02004076"
  },
  {
    en: "Doveridge, Brailsford & Bradley",
    geoType: "MSOA",
    geoCode: "E02004077"
  },
  {
    en: "Cotmanhay",
    geoType: "MSOA",
    geoCode: "E02004078"
  },
  {
    en: "Ilkeston Town",
    geoType: "MSOA",
    geoCode: "E02004080"
  },
  {
    en: "Breadsall, Little Eaton & Stanley Common",
    geoType: "MSOA",
    geoCode: "E02004081"
  },
  {
    en: "West Hallam",
    geoType: "MSOA",
    geoCode: "E02004082"
  },
  {
    en: "Hallam Fields & Greenwood Ave",
    geoType: "MSOA",
    geoCode: "E02004083"
  },
  {
    en: "Kirk Hallam",
    geoType: "MSOA",
    geoCode: "E02004084"
  },
  {
    en: "Sandiacre & Stanton",
    geoType: "MSOA",
    geoCode: "E02004085"
  },
  {
    en: "Borrowash & Ockbrook",
    geoType: "MSOA",
    geoCode: "E02004086"
  },
  {
    en: "Long Eaton North",
    geoType: "MSOA",
    geoCode: "E02004087"
  },
  {
    en: "Long Eaton West",
    geoType: "MSOA",
    geoCode: "E02004088"
  },
  {
    en: "Long Eaton Town",
    geoType: "MSOA",
    geoCode: "E02004089"
  },
  {
    en: "Breaston & Draycott",
    geoType: "MSOA",
    geoCode: "E02004090"
  },
  {
    en: "Long Eaton South",
    geoType: "MSOA",
    geoCode: "E02004091"
  },
  {
    en: "Sawley",
    geoType: "MSOA",
    geoCode: "E02004092"
  },
  {
    en: "Hadfield East & Tintwistle",
    geoType: "MSOA",
    geoCode: "E02004093"
  },
  {
    en: "Hadfield West & Gamesley",
    geoType: "MSOA",
    geoCode: "E02004094"
  },
  {
    en: "Glossop",
    geoType: "MSOA",
    geoCode: "E02004095"
  },
  {
    en: "Dinting, Simmondley & Charlesworth",
    geoType: "MSOA",
    geoCode: "E02004096"
  },
  {
    en: "New Mills West & Furness Vale",
    geoType: "MSOA",
    geoCode: "E02004097"
  },
  {
    en: "New Mills East & Hayfield",
    geoType: "MSOA",
    geoCode: "E02004098"
  },
  {
    en: "Whaley Bridge & Chinley",
    geoType: "MSOA",
    geoCode: "E02004100"
  },
  {
    en: "Buxton North",
    geoType: "MSOA",
    geoCode: "E02004102"
  },
  {
    en: "Buxton South & East",
    geoType: "MSOA",
    geoCode: "E02004103"
  },
  {
    en: "Buxton Burbage & Harpur Hill",
    geoType: "MSOA",
    geoCode: "E02004104"
  },
  {
    en: "Killamarsh",
    geoType: "MSOA",
    geoCode: "E02004105"
  },
  {
    en: "Eckington West & Coal Aston",
    geoType: "MSOA",
    geoCode: "E02004106"
  },
  {
    en: "Dronfield Town & Unstone",
    geoType: "MSOA",
    geoCode: "E02004108"
  },
  {
    en: "Dronfield Woodhouse & Holmesfield",
    geoType: "MSOA",
    geoCode: "E02004109"
  },
  {
    en: "Dronfield South & Gosforth Lane",
    geoType: "MSOA",
    geoCode: "E02004110"
  },
  {
    en: "Arkwright Town & Temple Normanton",
    geoType: "MSOA",
    geoCode: "E02004111"
  },
  {
    en: "Wingerworth & Holymoorside",
    geoType: "MSOA",
    geoCode: "E02004112"
  },
  {
    en: "Grassmoor & Holmewood",
    geoType: "MSOA",
    geoCode: "E02004113"
  },
  {
    en: "Ashover & New Tupton",
    geoType: "MSOA",
    geoCode: "E02004114"
  },
  {
    en: "North Wingfield & Pilsley",
    geoType: "MSOA",
    geoCode: "E02004115"
  },
  {
    en: "Clay Cross",
    geoType: "MSOA",
    geoCode: "E02004116"
  },
  {
    en: "Stonebroom, Shirland & Wessington",
    geoType: "MSOA",
    geoCode: "E02004117"
  },
  {
    en: "Hatton & Burnaston",
    geoType: "MSOA",
    geoCode: "E02004118"
  },
  {
    en: "Hilton & Etwall",
    geoType: "MSOA",
    geoCode: "E02004119"
  },
  {
    en: "Willington North, Findern & Stenson Fields",
    geoType: "MSOA",
    geoCode: "E02004120"
  },
  {
    en: "Aston-on-Trent & Barrow-upon-Trent",
    geoType: "MSOA",
    geoCode: "E02004121"
  },
  {
    en: "Willington South & Repton",
    geoType: "MSOA",
    geoCode: "E02004122"
  },
  {
    en: "Melbourne, Ticknall & Hartshorne",
    geoType: "MSOA",
    geoCode: "E02004123"
  },
  {
    en: "Swadlincote North",
    geoType: "MSOA",
    geoCode: "E02004124"
  },
  {
    en: "Swadlincote West",
    geoType: "MSOA",
    geoCode: "E02004125"
  },
  {
    en: "Swadlincote Central",
    geoType: "MSOA",
    geoCode: "E02004126"
  },
  {
    en: "Castle Gresley, Overseal & Coton",
    geoType: "MSOA",
    geoCode: "E02004128"
  },
  {
    en: "Dunkeswell, Upottery & Stockland",
    geoType: "MSOA",
    geoCode: "E02004129"
  },
  {
    en: "Honiton North & East",
    geoType: "MSOA",
    geoCode: "E02004130"
  },
  {
    en: "Honiton South & West",
    geoType: "MSOA",
    geoCode: "E02004131"
  },
  {
    en: "Feniton & Whimple",
    geoType: "MSOA",
    geoCode: "E02004132"
  },
  {
    en: "Axminster",
    geoType: "MSOA",
    geoCode: "E02004133"
  },
  {
    en: "Kilmington, Colyton & Uplyme",
    geoType: "MSOA",
    geoCode: "E02004135"
  },
  {
    en: "Ottery St Mary & West Hill",
    geoType: "MSOA",
    geoCode: "E02004136"
  },
  {
    en: "Sidbury, Offwell & Beer",
    geoType: "MSOA",
    geoCode: "E02004137"
  },
  {
    en: "Seaton",
    geoType: "MSOA",
    geoCode: "E02004138"
  },
  {
    en: "Sidmouth Sidford",
    geoType: "MSOA",
    geoCode: "E02004139"
  },
  {
    en: "Sidmouth Town",
    geoType: "MSOA",
    geoCode: "E02004140"
  },
  {
    en: "Poppleford, Otterton & Woodbury",
    geoType: "MSOA",
    geoCode: "E02004141"
  },
  {
    en: "Clyst, Exton & Lympstone",
    geoType: "MSOA",
    geoCode: "E02004142"
  },
  {
    en: "Exmouth Brixington",
    geoType: "MSOA",
    geoCode: "E02004143"
  },
  {
    en: "Exmouth Halsdon",
    geoType: "MSOA",
    geoCode: "E02004144"
  },
  {
    en: "Budleigh Salterton",
    geoType: "MSOA",
    geoCode: "E02004145"
  },
  {
    en: "Exmouth Withycombe Raleigh",
    geoType: "MSOA",
    geoCode: "E02004146"
  },
  {
    en: "Exmouth Town",
    geoType: "MSOA",
    geoCode: "E02004147"
  },
  {
    en: "Exmouth Littleham",
    geoType: "MSOA",
    geoCode: "E02004148"
  },
  {
    en: "Pennsylvania & University",
    geoType: "MSOA",
    geoCode: "E02004149"
  },
  {
    en: "Mincinglake & Beacon Heath",
    geoType: "MSOA",
    geoCode: "E02004150"
  },
  {
    en: "Pinhoe & Whipton North",
    geoType: "MSOA",
    geoCode: "E02004151"
  },
  {
    en: "St James's Park & Hoopern",
    geoType: "MSOA",
    geoCode: "E02004152"
  },
  {
    en: "Exwick & Foxhayes",
    geoType: "MSOA",
    geoCode: "E02004153"
  },
  {
    en: "Heavitree West & Polsloe",
    geoType: "MSOA",
    geoCode: "E02004154"
  },
  {
    en: "Heavitree East & Whipton South",
    geoType: "MSOA",
    geoCode: "E02004155"
  },
  {
    en: "Central Exeter",
    geoType: "MSOA",
    geoCode: "E02004156"
  },
  {
    en: "St Leonard's",
    geoType: "MSOA",
    geoCode: "E02004157"
  },
  {
    en: "St Thomas East",
    geoType: "MSOA",
    geoCode: "E02004158"
  },
  {
    en: "Middlemoor & Sowton",
    geoType: "MSOA",
    geoCode: "E02004159"
  },
  {
    en: "St Thomas West",
    geoType: "MSOA",
    geoCode: "E02004160"
  },
  {
    en: "Wonford & St Loye's",
    geoType: "MSOA",
    geoCode: "E02004161"
  },
  {
    en: "Alphington & Marsh Barton",
    geoType: "MSOA",
    geoCode: "E02004162"
  },
  {
    en: "Countess Wear & Topsham",
    geoType: "MSOA",
    geoCode: "E02004163"
  },
  {
    en: "Bampton, Holcombe & Westleigh",
    geoType: "MSOA",
    geoCode: "E02004164"
  },
  {
    en: "Tiverton North & Outer",
    geoType: "MSOA",
    geoCode: "E02004165"
  },
  {
    en: "Uffculme & Hemyock",
    geoType: "MSOA",
    geoCode: "E02004166"
  },
  {
    en: "Tiverton East",
    geoType: "MSOA",
    geoCode: "E02004167"
  },
  {
    en: "Tiverton West",
    geoType: "MSOA",
    geoCode: "E02004168"
  },
  {
    en: "Willand, Sampford Peverell & Halberton",
    geoType: "MSOA",
    geoCode: "E02004169"
  },
  {
    en: "Cullompton",
    geoType: "MSOA",
    geoCode: "E02004170"
  },
  {
    en: "Bradninch, Silverton & Thorverton",
    geoType: "MSOA",
    geoCode: "E02004171"
  },
  {
    en: "Bow, Lapford & Yeoford",
    geoType: "MSOA",
    geoCode: "E02004172"
  },
  {
    en: "Morchard Bishop, Copplestone & Newton St Cyres",
    geoType: "MSOA",
    geoCode: "E02004173"
  },
  {
    en: "Crediton",
    geoType: "MSOA",
    geoCode: "E02004174"
  },
  {
    en: "Ilfracombe East",
    geoType: "MSOA",
    geoCode: "E02004175"
  },
  {
    en: "Lynton & Combe Martin",
    geoType: "MSOA",
    geoCode: "E02004176"
  },
  {
    en: "Ilfracombe West",
    geoType: "MSOA",
    geoCode: "E02004177"
  },
  {
    en: "Woolacombe, Georgeham & Croyde",
    geoType: "MSOA",
    geoCode: "E02004178"
  },
  {
    en: "Braunton",
    geoType: "MSOA",
    geoCode: "E02004179"
  },
  {
    en: "Bratton Fleming, Goodleigh & Kings Heanton",
    geoType: "MSOA",
    geoCode: "E02004180"
  },
  {
    en: "Barnstaple Pilton",
    geoType: "MSOA",
    geoCode: "E02004181"
  },
  {
    en: "Barnstaple Central",
    geoType: "MSOA",
    geoCode: "E02004182"
  },
  {
    en: "Barnstaple Sticklepath",
    geoType: "MSOA",
    geoCode: "E02004183"
  },
  {
    en: "Barnstaple South",
    geoType: "MSOA",
    geoCode: "E02004184"
  },
  {
    en: "Fremington & Instow",
    geoType: "MSOA",
    geoCode: "E02004185"
  },
  {
    en: "Roundswell & Landkey",
    geoType: "MSOA",
    geoCode: "E02004186"
  },
  {
    en: "South Molton",
    geoType: "MSOA",
    geoCode: "E02004187"
  },
  {
    en: "Bishop's Nympton, Witheridge & Chulmleigh",
    geoType: "MSOA",
    geoCode: "E02004188"
  },
  {
    en: "Woolwell & Lee Mill",
    geoType: "MSOA",
    geoCode: "E02004189"
  },
  {
    en: "South Brent & Cornwood",
    geoType: "MSOA",
    geoCode: "E02004190"
  },
  {
    en: "Totnes Town",
    geoType: "MSOA",
    geoCode: "E02004191"
  },
  {
    en: "Marldon, Stoke Gabriel & Kingswear",
    geoType: "MSOA",
    geoCode: "E02004192"
  },
  {
    en: "Ivybridge",
    geoType: "MSOA",
    geoCode: "E02004193"
  },
  {
    en: "Loddiswell & Dartington",
    geoType: "MSOA",
    geoCode: "E02004194"
  },
  {
    en: "Dartmouth",
    geoType: "MSOA",
    geoCode: "E02004195"
  },
  {
    en: "Yealmpton, Modbury & Aveton Gifford",
    geoType: "MSOA",
    geoCode: "E02004196"
  },
  {
    en: "Wembury, Brixton & Newton Ferrers",
    geoType: "MSOA",
    geoCode: "E02004197"
  },
  {
    en: "Kingsbridge",
    geoType: "MSOA",
    geoCode: "E02004198"
  },
  {
    en: "Chillington, Torcross & Stoke Fleming",
    geoType: "MSOA",
    geoCode: "E02004199"
  },
  {
    en: "Salcombe, Malborough & Thurlestone",
    geoType: "MSOA",
    geoCode: "E02004200"
  },
  {
    en: "Tedburn, Shillingford & Higher Ashton",
    geoType: "MSOA",
    geoCode: "E02004201"
  },
  {
    en: "Starcross & Exminster",
    geoType: "MSOA",
    geoCode: "E02004202"
  },
  {
    en: "Moretonhampstead, Lustleigh & East Dartmoor",
    geoType: "MSOA",
    geoCode: "E02004203"
  },
  {
    en: "Chudleigh & Bovey Tracey",
    geoType: "MSOA",
    geoCode: "E02004204"
  },
  {
    en: "Dawlish North",
    geoType: "MSOA",
    geoCode: "E02004205"
  },
  {
    en: "Dawlish South",
    geoType: "MSOA",
    geoCode: "E02004206"
  },
  {
    en: "Heathfield & Liverton",
    geoType: "MSOA",
    geoCode: "E02004207"
  },
  {
    en: "Teignmouth North",
    geoType: "MSOA",
    geoCode: "E02004208"
  },
  {
    en: "Kingsteignton",
    geoType: "MSOA",
    geoCode: "E02004209"
  },
  {
    en: "Teignmouth South",
    geoType: "MSOA",
    geoCode: "E02004210"
  },
  {
    en: "Bishopsteignton & Shaldon",
    geoType: "MSOA",
    geoCode: "E02004211"
  },
  {
    en: "Newton Abbot, Highweek",
    geoType: "MSOA",
    geoCode: "E02004212"
  },
  {
    en: "Ogwell, Mile End & Teigngrace",
    geoType: "MSOA",
    geoCode: "E02004213"
  },
  {
    en: "Newton Abbot, Town Centre",
    geoType: "MSOA",
    geoCode: "E02004214"
  },
  {
    en: "Newton Abbot, Broadlands & Wolborough",
    geoType: "MSOA",
    geoCode: "E02004215"
  },
  {
    en: "Newton Abbot, Milber & Buckland",
    geoType: "MSOA",
    geoCode: "E02004216"
  },
  {
    en: "Ashburton & Buckfastleigh",
    geoType: "MSOA",
    geoCode: "E02004217"
  },
  {
    en: "Kingskerswell",
    geoType: "MSOA",
    geoCode: "E02004218"
  },
  {
    en: "Ipplepen & Broadhempston",
    geoType: "MSOA",
    geoCode: "E02004219"
  },
  {
    en: "Appledore & Northam North",
    geoType: "MSOA",
    geoCode: "E02004220"
  },
  {
    en: "Westward Ho! & Northam South",
    geoType: "MSOA",
    geoCode: "E02004221"
  },
  {
    en: "Bideford North",
    geoType: "MSOA",
    geoCode: "E02004222"
  },
  {
    en: "Bideford South & East",
    geoType: "MSOA",
    geoCode: "E02004223"
  },
  {
    en: "Hartland Coast",
    geoType: "MSOA",
    geoCode: "E02004224"
  },
  {
    en: "Great Torrington",
    geoType: "MSOA",
    geoCode: "E02004225"
  },
  {
    en: "Winkleigh & High Bickington",
    geoType: "MSOA",
    geoCode: "E02004226"
  },
  {
    en: "Holsworthy, Bradworthy & Welcombe",
    geoType: "MSOA",
    geoCode: "E02004227"
  },
  {
    en: "Shebbear, Cookworthy & Broadheath",
    geoType: "MSOA",
    geoCode: "E02004228"
  },
  {
    en: "Hatherleigh, Exbourne & North Tawton",
    geoType: "MSOA",
    geoCode: "E02004229"
  },
  {
    en: "Okehampton",
    geoType: "MSOA",
    geoCode: "E02004230"
  },
  {
    en: "Chagford, Princetown & Dartmoor",
    geoType: "MSOA",
    geoCode: "E02004231"
  },
  {
    en: "Lifton, Lamerton & Bridestowe",
    geoType: "MSOA",
    geoCode: "E02004232"
  },
  {
    en: "Tavistock",
    geoType: "MSOA",
    geoCode: "E02004233"
  },
  {
    en: "Horrabridge & Mary Tavy",
    geoType: "MSOA",
    geoCode: "E02004234"
  },
  {
    en: "Bere Alston, Buckland Monachorum & Yelverton",
    geoType: "MSOA",
    geoCode: "E02004235"
  },
  {
    en: "Burton & Airport",
    geoType: "MSOA",
    geoCode: "E02004236"
  },
  {
    en: "Jumpers Common & Fairmile",
    geoType: "MSOA",
    geoCode: "E02004237"
  },
  {
    en: "Highcliffe & Walkford",
    geoType: "MSOA",
    geoCode: "E02004238"
  },
  {
    en: "West Highcliffe",
    geoType: "MSOA",
    geoCode: "E02004239"
  },
  {
    en: "Somerford",
    geoType: "MSOA",
    geoCode: "E02004240"
  },
  {
    en: "Christchurch Town",
    geoType: "MSOA",
    geoCode: "E02004241"
  },
  {
    en: "Mudeford",
    geoType: "MSOA",
    geoCode: "E02004242"
  },
  {
    en: "Alderholt & Sixpenny Handley",
    geoType: "MSOA",
    geoCode: "E02004243"
  },
  {
    en: "East Verwood",
    geoType: "MSOA",
    geoCode: "E02004244"
  },
  {
    en: "West Verwood",
    geoType: "MSOA",
    geoCode: "E02004245"
  },
  {
    en: "St Leonards",
    geoType: "MSOA",
    geoCode: "E02004246"
  },
  {
    en: "Sturminster Marshall & Crichel",
    geoType: "MSOA",
    geoCode: "E02004247"
  },
  {
    en: "West Moors",
    geoType: "MSOA",
    geoCode: "E02004248"
  },
  {
    en: "Colehill",
    geoType: "MSOA",
    geoCode: "E02004249"
  },
  {
    en: "Ferndown Town",
    geoType: "MSOA",
    geoCode: "E02004250"
  },
  {
    en: "Ferndown West & Canford Bottom",
    geoType: "MSOA",
    geoCode: "E02004251"
  },
  {
    en: "Wimborne Minster",
    geoType: "MSOA",
    geoCode: "E02004252"
  },
  {
    en: "Parley & Hampreston",
    geoType: "MSOA",
    geoCode: "E02004253"
  },
  {
    en: "Corfe Mullen",
    geoType: "MSOA",
    geoCode: "E02004254"
  },
  {
    en: "Gillingham",
    geoType: "MSOA",
    geoCode: "E02004255"
  },
  {
    en: "Gillingham Outer, Bourton & Motcombe",
    geoType: "MSOA",
    geoCode: "E02004256"
  },
  {
    en: "Shaftesbury",
    geoType: "MSOA",
    geoCode: "E02004257"
  },
  {
    en: "Sturminster Newton & Stalbridge",
    geoType: "MSOA",
    geoCode: "E02004258"
  },
  {
    en: "Child Okeford & Iwerne Minster",
    geoType: "MSOA",
    geoCode: "E02004259"
  },
  {
    en: "Blandford Outer & Tarrants",
    geoType: "MSOA",
    geoCode: "E02004260"
  },
  {
    en: "Blandford Forum Town",
    geoType: "MSOA",
    geoCode: "E02004261"
  },
  {
    en: "Milborne, Winterborne & Okeford Fitzpaine",
    geoType: "MSOA",
    geoCode: "E02004262"
  },
  {
    en: "Bere Regis & Lytchett Matravers",
    geoType: "MSOA",
    geoCode: "E02004263"
  },
  {
    en: "Upton & Lytchett Minster",
    geoType: "MSOA",
    geoCode: "E02004264"
  },
  {
    en: "Wareham, Sandford & Holton Heath",
    geoType: "MSOA",
    geoCode: "E02004265"
  },
  {
    en: "Bovington, Wool & Lulworth",
    geoType: "MSOA",
    geoCode: "E02004266"
  },
  {
    en: "Corfe Castle & Langton Matravers",
    geoType: "MSOA",
    geoCode: "E02004267"
  },
  {
    en: "Swanage",
    geoType: "MSOA",
    geoCode: "E02004268"
  },
  {
    en: "Sherborne",
    geoType: "MSOA",
    geoCode: "E02004269"
  },
  {
    en: "Yetminster, Bradford Abbas & Longburton",
    geoType: "MSOA",
    geoCode: "E02004270"
  },
  {
    en: "Beaminster, Maiden Newton & Halstock",
    geoType: "MSOA",
    geoCode: "E02004271"
  },
  {
    en: "Charlton Down, Cerne Abbas & Puddletown",
    geoType: "MSOA",
    geoCode: "E02004272"
  },
  {
    en: "Lyme Regis, Charmouth & Marshwood Vale",
    geoType: "MSOA",
    geoCode: "E02004273"
  },
  {
    en: "Bridport North",
    geoType: "MSOA",
    geoCode: "E02004274"
  },
  {
    en: "Burton Bradstock & Chideock",
    geoType: "MSOA",
    geoCode: "E02004275"
  },
  {
    en: "Bridport South & West Bay",
    geoType: "MSOA",
    geoCode: "E02004276"
  },
  {
    en: "Dorchester East",
    geoType: "MSOA",
    geoCode: "E02004278"
  },
  {
    en: "Owermoigne, Broadmayne & Winterbourne",
    geoType: "MSOA",
    geoCode: "E02004279"
  },
  {
    en: "Chickerell & Chesil Bank",
    geoType: "MSOA",
    geoCode: "E02004280"
  },
  {
    en: "Broadwey & Littlemoor",
    geoType: "MSOA",
    geoCode: "E02004281"
  },
  {
    en: "Preston & Lodmoor",
    geoType: "MSOA",
    geoCode: "E02004282"
  },
  {
    en: "Westham North & Radipole",
    geoType: "MSOA",
    geoCode: "E02004283"
  },
  {
    en: "Weymouth Town, Melcombe Regis & Rodwell",
    geoType: "MSOA",
    geoCode: "E02004284"
  },
  {
    en: "Westham South",
    geoType: "MSOA",
    geoCode: "E02004285"
  },
  {
    en: "Weymouth West",
    geoType: "MSOA",
    geoCode: "E02004286"
  },
  {
    en: "Wyke Regis",
    geoType: "MSOA",
    geoCode: "E02004287"
  },
  {
    en: "Underhill & The Grove",
    geoType: "MSOA",
    geoCode: "E02004288"
  },
  {
    en: "Southwell & Weston",
    geoType: "MSOA",
    geoCode: "E02004289"
  },
  {
    en: "Ouston & Beamish",
    geoType: "MSOA",
    geoCode: "E02004290"
  },
  {
    en: "Pelton & Perkinsville",
    geoType: "MSOA",
    geoCode: "E02004291"
  },
  {
    en: "Chester-le-Street North",
    geoType: "MSOA",
    geoCode: "E02004292"
  },
  {
    en: "Chester-le-Street Town & Pelton Fell",
    geoType: "MSOA",
    geoCode: "E02004293"
  },
  {
    en: "Chester-le-Street South & East",
    geoType: "MSOA",
    geoCode: "E02004294"
  },
  {
    en: "Great Lumley & Bournmoor",
    geoType: "MSOA",
    geoCode: "E02004295"
  },
  {
    en: "Sacriston",
    geoType: "MSOA",
    geoCode: "E02004296"
  },
  {
    en: "Burnopfield",
    geoType: "MSOA",
    geoCode: "E02004297"
  },
  {
    en: "Benfieldside, Hamsterley & Medomsley",
    geoType: "MSOA",
    geoCode: "E02004298"
  },
  {
    en: "Stanley North & East",
    geoType: "MSOA",
    geoCode: "E02004299"
  },
  {
    en: "Catchgate & Dipton",
    geoType: "MSOA",
    geoCode: "E02004300"
  },
  {
    en: "Stanley South",
    geoType: "MSOA",
    geoCode: "E02004301"
  },
  {
    en: "Stanley West & Annfield Plain",
    geoType: "MSOA",
    geoCode: "E02004302"
  },
  {
    en: "Consett",
    geoType: "MSOA",
    geoCode: "E02004303"
  },
  {
    en: "Delves Lane & Leadgate",
    geoType: "MSOA",
    geoCode: "E02004304"
  },
  {
    en: "Bridgehill, Castleside & Harehope Hill",
    geoType: "MSOA",
    geoCode: "E02004305"
  },
  {
    en: "Lanchester",
    geoType: "MSOA",
    geoCode: "E02004306"
  },
  {
    en: "Langley Park & Satley",
    geoType: "MSOA",
    geoCode: "E02004307"
  },
  {
    en: "Newton Hall & Brasside",
    geoType: "MSOA",
    geoCode: "E02004308"
  },
  {
    en: "Pity Me & Framwellgate Moor",
    geoType: "MSOA",
    geoCode: "E02004309"
  },
  {
    en: "Bearpark & Witton Gilbert",
    geoType: "MSOA",
    geoCode: "E02004310"
  },
  {
    en: "Sherburn & West Rainton",
    geoType: "MSOA",
    geoCode: "E02004311"
  },
  {
    en: "Belmont & Carrville",
    geoType: "MSOA",
    geoCode: "E02004312"
  },
  {
    en: "Gilesgate & Old Durham",
    geoType: "MSOA",
    geoCode: "E02004313"
  },
  {
    en: "Durham City",
    geoType: "MSOA",
    geoCode: "E02004314"
  },
  {
    en: "Aykley Heads, Neville's Cross & Langley Moor",
    geoType: "MSOA",
    geoCode: "E02004315"
  },
  {
    en: "Esh Winning & Ushaw Moor",
    geoType: "MSOA",
    geoCode: "E02004316"
  },
  {
    en: "Brandon & Brancepeth",
    geoType: "MSOA",
    geoCode: "E02004317"
  },
  {
    en: "High Shincliffe & Bowburn",
    geoType: "MSOA",
    geoCode: "E02004318"
  },
  {
    en: "Coxhoe & Quarrington Hill",
    geoType: "MSOA",
    geoCode: "E02004319"
  },
  {
    en: "Seaham Northlea & Westlea",
    geoType: "MSOA",
    geoCode: "E02004320"
  },
  {
    en: "Seaham Central & South",
    geoType: "MSOA",
    geoCode: "E02004321"
  },
  {
    en: "Murton North & Parkside",
    geoType: "MSOA",
    geoCode: "E02004322"
  },
  {
    en: "South Murton & South Hetton",
    geoType: "MSOA",
    geoCode: "E02004323"
  },
  {
    en: "Easington & Hawthorn",
    geoType: "MSOA",
    geoCode: "E02004324"
  },
  {
    en: "Peterlee East",
    geoType: "MSOA",
    geoCode: "E02004325"
  },
  {
    en: "Shotton & Haswell",
    geoType: "MSOA",
    geoCode: "E02004326"
  },
  {
    en: "Horden",
    geoType: "MSOA",
    geoCode: "E02004327"
  },
  {
    en: "Peterlee West",
    geoType: "MSOA",
    geoCode: "E02004328"
  },
  {
    en: "Peterlee South",
    geoType: "MSOA",
    geoCode: "E02004329"
  },
  {
    en: "Blackhall",
    geoType: "MSOA",
    geoCode: "E02004330"
  },
  {
    en: "Thornley & Wheatley Hill",
    geoType: "MSOA",
    geoCode: "E02004331"
  },
  {
    en: "Wingate & Castle Eden",
    geoType: "MSOA",
    geoCode: "E02004332"
  },
  {
    en: "Tudhoe Grange",
    geoType: "MSOA",
    geoCode: "E02004333"
  },
  {
    en: "Trimdon & Fishburn",
    geoType: "MSOA",
    geoCode: "E02004334"
  },
  {
    en: "Spennymoor East & Ferryhill West",
    geoType: "MSOA",
    geoCode: "E02004335"
  },
  {
    en: "Ferryhill East & Cornforth",
    geoType: "MSOA",
    geoCode: "E02004336"
  },
  {
    en: "Spennymoor West",
    geoType: "MSOA",
    geoCode: "E02004337"
  },
  {
    en: "Chilton",
    geoType: "MSOA",
    geoCode: "E02004338"
  },
  {
    en: "Sedgefield & Bishop Middleham",
    geoType: "MSOA",
    geoCode: "E02004339"
  },
  {
    en: "Shildon",
    geoType: "MSOA",
    geoCode: "E02004340"
  },
  {
    en: "Newton Aycliffe North",
    geoType: "MSOA",
    geoCode: "E02004341"
  },
  {
    en: "Newton Aycliffe West",
    geoType: "MSOA",
    geoCode: "E02004342"
  },
  {
    en: "Newton Aycliffe East",
    geoType: "MSOA",
    geoCode: "E02004343"
  },
  {
    en: "Newton Aycliffe South",
    geoType: "MSOA",
    geoCode: "E02004344"
  },
  {
    en: "Evenwood, Cockfield & Staindrop",
    geoType: "MSOA",
    geoCode: "E02004345"
  },
  {
    en: "Stanhope & Weardale",
    geoType: "MSOA",
    geoCode: "E02004348"
  },
  {
    en: "Crook North & Tow Law",
    geoType: "MSOA",
    geoCode: "E02004349"
  },
  {
    en: "Crook South",
    geoType: "MSOA",
    geoCode: "E02004350"
  },
  {
    en: "Coundon North",
    geoType: "MSOA",
    geoCode: "E02004351"
  },
  {
    en: "Bishop Auckland North & Coundon Grange",
    geoType: "MSOA",
    geoCode: "E02004352"
  },
  {
    en: "Bishop Auckland Central & West",
    geoType: "MSOA",
    geoCode: "E02004353"
  },
  {
    en: "Saint Helen Auckland & West Auckland",
    geoType: "MSOA",
    geoCode: "E02004354"
  },
  {
    en: "Bishop Auckland South",
    geoType: "MSOA",
    geoCode: "E02004355"
  },
  {
    en: "Langney West",
    geoType: "MSOA",
    geoCode: "E02004356"
  },
  {
    en: "Hampden Park North",
    geoType: "MSOA",
    geoCode: "E02004357"
  },
  {
    en: "Langney East",
    geoType: "MSOA",
    geoCode: "E02004358"
  },
  {
    en: "Hampden Park South",
    geoType: "MSOA",
    geoCode: "E02004359"
  },
  {
    en: "Ratton",
    geoType: "MSOA",
    geoCode: "E02004361"
  },
  {
    en: "Roselands",
    geoType: "MSOA",
    geoCode: "E02004362"
  },
  {
    en: "Upperton",
    geoType: "MSOA",
    geoCode: "E02004363"
  },
  {
    en: "Old Town & Motcombe",
    geoType: "MSOA",
    geoCode: "E02004364"
  },
  {
    en: "Pier",
    geoType: "MSOA",
    geoCode: "E02004365"
  },
  {
    en: "King Edward's Parade",
    geoType: "MSOA",
    geoCode: "E02004366"
  },
  {
    en: "Meads",
    geoType: "MSOA",
    geoCode: "E02004367"
  },
  {
    en: "Ashdown",
    geoType: "MSOA",
    geoCode: "E02004368"
  },
  {
    en: "Conquest & St Helens",
    geoType: "MSOA",
    geoCode: "E02004369"
  },
  {
    en: "Hollington",
    geoType: "MSOA",
    geoCode: "E02004370"
  },
  {
    en: "Ore",
    geoType: "MSOA",
    geoCode: "E02004371"
  },
  {
    en: "Broomgrove",
    geoType: "MSOA",
    geoCode: "E02004372"
  },
  {
    en: "Silverhill",
    geoType: "MSOA",
    geoCode: "E02004373"
  },
  {
    en: "Old Hastings",
    geoType: "MSOA",
    geoCode: "E02004374"
  },
  {
    en: "Braybrooke & Bohemia",
    geoType: "MSOA",
    geoCode: "E02004375"
  },
  {
    en: "Central Hastings",
    geoType: "MSOA",
    geoCode: "E02004376"
  },
  {
    en: "West St Leonards",
    geoType: "MSOA",
    geoCode: "E02004377"
  },
  {
    en: "Central St Leonards",
    geoType: "MSOA",
    geoCode: "E02004378"
  },
  {
    en: "Chailey, Newick & Barcombe",
    geoType: "MSOA",
    geoCode: "E02004379"
  },
  {
    en: "Wivelsfield Green, Ditchling & Rodmell",
    geoType: "MSOA",
    geoCode: "E02004380"
  },
  {
    en: "Lewes Central & East",
    geoType: "MSOA",
    geoCode: "E02004381"
  },
  {
    en: "Ringmer, Glynde & South Heighton",
    geoType: "MSOA",
    geoCode: "E02004382"
  },
  {
    en: "Lewes West",
    geoType: "MSOA",
    geoCode: "E02004383"
  },
  {
    en: "East Saltdean & Telscombe Cliffs",
    geoType: "MSOA",
    geoCode: "E02004384"
  },
  {
    en: "Peacehaven West",
    geoType: "MSOA",
    geoCode: "E02004385"
  },
  {
    en: "Newhaven Town",
    geoType: "MSOA",
    geoCode: "E02004386"
  },
  {
    en: "Newhaven West",
    geoType: "MSOA",
    geoCode: "E02004387"
  },
  {
    en: "Peacehaven East",
    geoType: "MSOA",
    geoCode: "E02004388"
  },
  {
    en: "East Blatchington",
    geoType: "MSOA",
    geoCode: "E02004389"
  },
  {
    en: "Seaford Eastbourne Road",
    geoType: "MSOA",
    geoCode: "E02004390"
  },
  {
    en: "Seaford Town",
    geoType: "MSOA",
    geoCode: "E02004391"
  },
  {
    en: "Robertsbridge, Hurst Green & Ticehurst",
    geoType: "MSOA",
    geoCode: "E02004392"
  },
  {
    en: "Northiam, Peasmarsh & Camber",
    geoType: "MSOA",
    geoCode: "E02004393"
  },
  {
    en: "Burwash, Sedlescombe & Staplecross",
    geoType: "MSOA",
    geoCode: "E02004394"
  },
  {
    en: "Rye & Winchelsea",
    geoType: "MSOA",
    geoCode: "E02004395"
  },
  {
    en: "Westfield, Fairlight & Broad Oak",
    geoType: "MSOA",
    geoCode: "E02004396"
  },
  {
    en: "Battle & Catsfield",
    geoType: "MSOA",
    geoCode: "E02004397"
  },
  {
    en: "Bexhill North & Sidley",
    geoType: "MSOA",
    geoCode: "E02004398"
  },
  {
    en: "Bexhill East & Pebsham",
    geoType: "MSOA",
    geoCode: "E02004399"
  },
  {
    en: "Collington, Cooden & Little Common",
    geoType: "MSOA",
    geoCode: "E02004400"
  },
  {
    en: "Kewhurst",
    geoType: "MSOA",
    geoCode: "E02004401"
  },
  {
    en: "Bexhill Central",
    geoType: "MSOA",
    geoCode: "E02004402"
  },
  {
    en: "Forest Row & Coleman's Hatch",
    geoType: "MSOA",
    geoCode: "E02004403"
  },
  {
    en: "Frant & Groombridge",
    geoType: "MSOA",
    geoCode: "E02004404"
  },
  {
    en: "Crowborough North East",
    geoType: "MSOA",
    geoCode: "E02004405"
  },
  {
    en: "Crowborough Whitehill & Warren",
    geoType: "MSOA",
    geoCode: "E02004406"
  },
  {
    en: "Mayfield & Wadhurst",
    geoType: "MSOA",
    geoCode: "E02004407"
  },
  {
    en: "Crowborough South East",
    geoType: "MSOA",
    geoCode: "E02004408"
  },
  {
    en: "Chelwood & Nutley",
    geoType: "MSOA",
    geoCode: "E02004409"
  },
  {
    en: "Buxted, Framfield & Rotherfield",
    geoType: "MSOA",
    geoCode: "E02004410"
  },
  {
    en: "Uckfield Town & North",
    geoType: "MSOA",
    geoCode: "E02004411"
  },
  {
    en: "Heathfield",
    geoType: "MSOA",
    geoCode: "E02004412"
  },
  {
    en: "Broad Oak & Horam",
    geoType: "MSOA",
    geoCode: "E02004413"
  },
  {
    en: "Uckfield South",
    geoType: "MSOA",
    geoCode: "E02004414"
  },
  {
    en: "Five Ash Down, Horsted & Chiddingly",
    geoType: "MSOA",
    geoCode: "E02004415"
  },
  {
    en: "Herstmonceux & Ninfield",
    geoType: "MSOA",
    geoCode: "E02004416"
  },
  {
    en: "Hailsham Central & East",
    geoType: "MSOA",
    geoCode: "E02004417"
  },
  {
    en: "Hailsham South & West",
    geoType: "MSOA",
    geoCode: "E02004418"
  },
  {
    en: "Hailsham East",
    geoType: "MSOA",
    geoCode: "E02004419"
  },
  {
    en: "Hailsham North, Alfriston & East Dean",
    geoType: "MSOA",
    geoCode: "E02004420"
  },
  {
    en: "Polegate",
    geoType: "MSOA",
    geoCode: "E02004421"
  },
  {
    en: "Stone Cross, Westham & Pevensey Bay",
    geoType: "MSOA",
    geoCode: "E02004422"
  },
  {
    en: "Willingdon",
    geoType: "MSOA",
    geoCode: "E02004423"
  },
  {
    en: "Billericay North East",
    geoType: "MSOA",
    geoCode: "E02004424"
  },
  {
    en: "Billericay Queen's Park",
    geoType: "MSOA",
    geoCode: "E02004425"
  },
  {
    en: "Billericay Central & Sunnymede",
    geoType: "MSOA",
    geoCode: "E02004426"
  },
  {
    en: "Billericay Tye Common",
    geoType: "MSOA",
    geoCode: "E02004427"
  },
  {
    en: "Wickford North East",
    geoType: "MSOA",
    geoCode: "E02004428"
  },
  {
    en: "Wickford West",
    geoType: "MSOA",
    geoCode: "E02004429"
  },
  {
    en: "Wickford Shotgate",
    geoType: "MSOA",
    geoCode: "E02004430"
  },
  {
    en: "Wickford South",
    geoType: "MSOA",
    geoCode: "E02004431"
  },
  {
    en: "Bursteads",
    geoType: "MSOA",
    geoCode: "E02004432"
  },
  {
    en: "Steeple View & Noak Bridge",
    geoType: "MSOA",
    geoCode: "E02004433"
  },
  {
    en: "Felmore & Bowers Gifford",
    geoType: "MSOA",
    geoCode: "E02004434"
  },
  {
    en: "Whitmore Way & Fremnells",
    geoType: "MSOA",
    geoCode: "E02004435"
  },
  {
    en: "Chalvedon",
    geoType: "MSOA",
    geoCode: "E02004436"
  },
  {
    en: "Laindon West & Southfields",
    geoType: "MSOA",
    geoCode: "E02004437"
  },
  {
    en: "Basildon Central & Pipps Hill",
    geoType: "MSOA",
    geoCode: "E02004438"
  },
  {
    en: "Laindon Central",
    geoType: "MSOA",
    geoCode: "E02004439"
  },
  {
    en: "Laindon East & Lee Chapel North",
    geoType: "MSOA",
    geoCode: "E02004440"
  },
  {
    en: "Eversley",
    geoType: "MSOA",
    geoCode: "E02004441"
  },
  {
    en: "Barstable",
    geoType: "MSOA",
    geoCode: "E02004442"
  },
  {
    en: "Lee Chapel South & Kingswood",
    geoType: "MSOA",
    geoCode: "E02004443"
  },
  {
    en: "Langdon Hills",
    geoType: "MSOA",
    geoCode: "E02004444"
  },
  {
    en: "Vange & Pitsea",
    geoType: "MSOA",
    geoCode: "E02004445"
  },
  {
    en: "Steeple Bumpstead & Great Yeldham",
    geoType: "MSOA",
    geoCode: "E02004446"
  },
  {
    en: "Bures Hamlet, Maplestead & Belchamp",
    geoType: "MSOA",
    geoCode: "E02004447"
  },
  {
    en: "Hedingham, Gosfield & Greenstead Green",
    geoType: "MSOA",
    geoCode: "E02004448"
  },
  {
    en: "Halstead Central & West",
    geoType: "MSOA",
    geoCode: "E02004449"
  },
  {
    en: "Panfield, Finchingfield & Bardfield",
    geoType: "MSOA",
    geoCode: "E02004450"
  },
  {
    en: "Halstead East & Colnes",
    geoType: "MSOA",
    geoCode: "E02004451"
  },
  {
    en: "Bocking Churchstreet & Blackwater",
    geoType: "MSOA",
    geoCode: "E02004452"
  },
  {
    en: "Bocking",
    geoType: "MSOA",
    geoCode: "E02004453"
  },
  {
    en: "Central Braintree",
    geoType: "MSOA",
    geoCode: "E02004454"
  },
  {
    en: "Braintree West & Rayne",
    geoType: "MSOA",
    geoCode: "E02004455"
  },
  {
    en: "Braintree South",
    geoType: "MSOA",
    geoCode: "E02004456"
  },
  {
    en: "Silver End & Stisted",
    geoType: "MSOA",
    geoCode: "E02004457"
  },
  {
    en: "Great Notley & Black Notley",
    geoType: "MSOA",
    geoCode: "E02004458"
  },
  {
    en: "Coggeshall & Kelvedon",
    geoType: "MSOA",
    geoCode: "E02004459"
  },
  {
    en: "North Witham",
    geoType: "MSOA",
    geoCode: "E02004460"
  },
  {
    en: "West Witham",
    geoType: "MSOA",
    geoCode: "E02004461"
  },
  {
    en: "Witham Town",
    geoType: "MSOA",
    geoCode: "E02004462"
  },
  {
    en: "Witham South, Hatfield Peverel & White Notley",
    geoType: "MSOA",
    geoCode: "E02004463"
  },
  {
    en: "Kelvedon Hatch & Doddinghurst",
    geoType: "MSOA",
    geoCode: "E02004464"
  },
  {
    en: "Ingatestone & Mountnessing",
    geoType: "MSOA",
    geoCode: "E02004465"
  },
  {
    en: "Hutton",
    geoType: "MSOA",
    geoCode: "E02004466"
  },
  {
    en: "Brentwood North",
    geoType: "MSOA",
    geoCode: "E02004467"
  },
  {
    en: "Shenfield & Hutton Mount",
    geoType: "MSOA",
    geoCode: "E02004468"
  },
  {
    en: "Brook Street & Pilgrim's Hatch",
    geoType: "MSOA",
    geoCode: "E02004469"
  },
  {
    en: "Brentwood Central",
    geoType: "MSOA",
    geoCode: "E02004470"
  },
  {
    en: "Brentwood South & Warley",
    geoType: "MSOA",
    geoCode: "E02004471"
  },
  {
    en: "Herongate, Ingrave & West Horndon",
    geoType: "MSOA",
    geoCode: "E02004472"
  },
  {
    en: "Benfleet North",
    geoType: "MSOA",
    geoCode: "E02004473"
  },
  {
    en: "New Thundersley",
    geoType: "MSOA",
    geoCode: "E02004474"
  },
  {
    en: "Benfleet Appleton",
    geoType: "MSOA",
    geoCode: "E02004475"
  },
  {
    en: "Thundersley Glen",
    geoType: "MSOA",
    geoCode: "E02004476"
  },
  {
    en: "Hadleigh North",
    geoType: "MSOA",
    geoCode: "E02004477"
  },
  {
    en: "Hadleigh South",
    geoType: "MSOA",
    geoCode: "E02004478"
  },
  {
    en: "South Benfleet",
    geoType: "MSOA",
    geoCode: "E02004479"
  },
  {
    en: "Canvey Island Winter Gardens",
    geoType: "MSOA",
    geoCode: "E02004480"
  },
  {
    en: "Canvey Island Newlands",
    geoType: "MSOA",
    geoCode: "E02004481"
  },
  {
    en: "Canvey Island North West",
    geoType: "MSOA",
    geoCode: "E02004482"
  },
  {
    en: "Canvey Island South West",
    geoType: "MSOA",
    geoCode: "E02004483"
  },
  {
    en: "Canvey Island Leigh Beck",
    geoType: "MSOA",
    geoCode: "E02004484"
  },
  {
    en: "Great Leighs & the Walthams",
    geoType: "MSOA",
    geoCode: "E02004485"
  },
  {
    en: "South Broomfield",
    geoType: "MSOA",
    geoCode: "E02004486"
  },
  {
    en: "Melbourne Park, Chignall & Pleshey",
    geoType: "MSOA",
    geoCode: "E02004487"
  },
  {
    en: "Springfield North",
    geoType: "MSOA",
    geoCode: "E02004488"
  },
  {
    en: "Boreham & Little Baddow",
    geoType: "MSOA",
    geoCode: "E02004489"
  },
  {
    en: "Melbourne",
    geoType: "MSOA",
    geoCode: "E02004490"
  },
  {
    en: "Springfield South & Coronation Park",
    geoType: "MSOA",
    geoCode: "E02004491"
  },
  {
    en: "Chelmer Village",
    geoType: "MSOA",
    geoCode: "E02004492"
  },
  {
    en: "Waterhouse Lane & Admirals Park",
    geoType: "MSOA",
    geoCode: "E02004493"
  },
  {
    en: "Writtle & Highwood",
    geoType: "MSOA",
    geoCode: "E02004495"
  },
  {
    en: "Moulsham West",
    geoType: "MSOA",
    geoCode: "E02004496"
  },
  {
    en: "Great Baddow North & East",
    geoType: "MSOA",
    geoCode: "E02004497"
  },
  {
    en: "Great Baddow South & West",
    geoType: "MSOA",
    geoCode: "E02004498"
  },
  {
    en: "Moulsham East",
    geoType: "MSOA",
    geoCode: "E02004499"
  },
  {
    en: "Danbury & Bicknacre",
    geoType: "MSOA",
    geoCode: "E02004500"
  },
  {
    en: "Galleywood",
    geoType: "MSOA",
    geoCode: "E02004501"
  },
  {
    en: "Margaretting, Stock & Ramsden",
    geoType: "MSOA",
    geoCode: "E02004502"
  },
  {
    en: "South Woodham Ferrers North",
    geoType: "MSOA",
    geoCode: "E02004503"
  },
  {
    en: "South Woodham Ferrers South",
    geoType: "MSOA",
    geoCode: "E02004504"
  },
  {
    en: "Rettendon & Runwell",
    geoType: "MSOA",
    geoCode: "E02004505"
  },
  {
    en: "Horkesley Heath, Langham & Dedham",
    geoType: "MSOA",
    geoCode: "E02004506"
  },
  {
    en: "Highwoods",
    geoType: "MSOA",
    geoCode: "E02004507"
  },
  {
    en: "West Bergholt & Wormingford",
    geoType: "MSOA",
    geoCode: "E02004508"
  },
  {
    en: "Central Colchester",
    geoType: "MSOA",
    geoCode: "E02004512"
  },
  {
    en: "Greenstead",
    geoType: "MSOA",
    geoCode: "E02004513"
  },
  {
    en: "Lexden",
    geoType: "MSOA",
    geoCode: "E02004514"
  },
  {
    en: "Marks Tey & Wakes Colne",
    geoType: "MSOA",
    geoCode: "E02004515"
  },
  {
    en: "New Town & Hythe",
    geoType: "MSOA",
    geoCode: "E02004516"
  },
  {
    en: "Stanway",
    geoType: "MSOA",
    geoCode: "E02004517"
  },
  {
    en: "Abbey Field",
    geoType: "MSOA",
    geoCode: "E02004518"
  },
  {
    en: "Prettygate & Westlands",
    geoType: "MSOA",
    geoCode: "E02004519"
  },
  {
    en: "Shrub End",
    geoType: "MSOA",
    geoCode: "E02004520"
  },
  {
    en: "Old Heath & Rowhedge",
    geoType: "MSOA",
    geoCode: "E02004521"
  },
  {
    en: "Wivenhoe & University",
    geoType: "MSOA",
    geoCode: "E02004522"
  },
  {
    en: "Monkwick",
    geoType: "MSOA",
    geoCode: "E02004523"
  },
  {
    en: "Layer-de-la-Haye, Abberton & Mersea East",
    geoType: "MSOA",
    geoCode: "E02004524"
  },
  {
    en: "Tiptree",
    geoType: "MSOA",
    geoCode: "E02004525"
  },
  {
    en: "West Mersea",
    geoType: "MSOA",
    geoCode: "E02004526"
  },
  {
    en: "North Weald, Matching & Sheering",
    geoType: "MSOA",
    geoCode: "E02004527"
  },
  {
    en: "Roydon, Lower Nazeing & Epping Green",
    geoType: "MSOA",
    geoCode: "E02004528"
  },
  {
    en: "Fyfield, High Ongar & Stapleford Abbotts",
    geoType: "MSOA",
    geoCode: "E02004529"
  },
  {
    en: "Chipping Ongar",
    geoType: "MSOA",
    geoCode: "E02004530"
  },
  {
    en: "Epping North",
    geoType: "MSOA",
    geoCode: "E02004531"
  },
  {
    en: "Epping South",
    geoType: "MSOA",
    geoCode: "E02004532"
  },
  {
    en: "Waltham Abbey North",
    geoType: "MSOA",
    geoCode: "E02004533"
  },
  {
    en: "Waltham Abbey South",
    geoType: "MSOA",
    geoCode: "E02004534"
  },
  {
    en: "Waltham Abbey West & Outer",
    geoType: "MSOA",
    geoCode: "E02004535"
  },
  {
    en: "Theydon Bois & Abridge",
    geoType: "MSOA",
    geoCode: "E02004536"
  },
  {
    en: "Loughton East",
    geoType: "MSOA",
    geoCode: "E02004537"
  },
  {
    en: "Loughton North",
    geoType: "MSOA",
    geoCode: "E02004538"
  },
  {
    en: "Loughton South",
    geoType: "MSOA",
    geoCode: "E02004539"
  },
  {
    en: "Loughton West",
    geoType: "MSOA",
    geoCode: "E02004540"
  },
  {
    en: "Buckhurst Hill",
    geoType: "MSOA",
    geoCode: "E02004541"
  },
  {
    en: "Chigwell",
    geoType: "MSOA",
    geoCode: "E02004542"
  },
  {
    en: "Grange Hill",
    geoType: "MSOA",
    geoCode: "E02004543"
  },
  {
    en: "Old Harlow & Newhall",
    geoType: "MSOA",
    geoCode: "E02004544"
  },
  {
    en: "Mark Hall & Templefields",
    geoType: "MSOA",
    geoCode: "E02004545"
  },
  {
    en: "Nettleswell",
    geoType: "MSOA",
    geoCode: "E02004546"
  },
  {
    en: "Little Parndon & Hare Street",
    geoType: "MSOA",
    geoCode: "E02004547"
  },
  {
    en: "Church Langley",
    geoType: "MSOA",
    geoCode: "E02004548"
  },
  {
    en: "Bush Fair & Brays Grove",
    geoType: "MSOA",
    geoCode: "E02004549"
  },
  {
    en: "Passmores & The High",
    geoType: "MSOA",
    geoCode: "E02004550"
  },
  {
    en: "Potter Street",
    geoType: "MSOA",
    geoCode: "E02004551"
  },
  {
    en: "Great Parndon & Katherines",
    geoType: "MSOA",
    geoCode: "E02004552"
  },
  {
    en: "Staple Tye & Latton Bush",
    geoType: "MSOA",
    geoCode: "E02004553"
  },
  {
    en: "Kingsmoor",
    geoType: "MSOA",
    geoCode: "E02004554"
  },
  {
    en: "Tollesbury, Tolleshunt & Goldhanger",
    geoType: "MSOA",
    geoCode: "E02004555"
  },
  {
    en: "Great Totham, Wickham Bishops & Woodham",
    geoType: "MSOA",
    geoCode: "E02004556"
  },
  {
    en: "Heybridge",
    geoType: "MSOA",
    geoCode: "E02004557"
  },
  {
    en: "Maldon North",
    geoType: "MSOA",
    geoCode: "E02004558"
  },
  {
    en: "Maldon South",
    geoType: "MSOA",
    geoCode: "E02004559"
  },
  {
    en: "Southminster, Bradwell & Dengie Peninsula",
    geoType: "MSOA",
    geoCode: "E02004560"
  },
  {
    en: "Mayland, Althorne & Cold Norton",
    geoType: "MSOA",
    geoCode: "E02004561"
  },
  {
    en: "Burnham-on-Crouch",
    geoType: "MSOA",
    geoCode: "E02004562"
  },
  {
    en: "Hullbridge",
    geoType: "MSOA",
    geoCode: "E02004563"
  },
  {
    en: "Ashingdon",
    geoType: "MSOA",
    geoCode: "E02004564"
  },
  {
    en: "Rochford Town & Canewdon",
    geoType: "MSOA",
    geoCode: "E02004566"
  },
  {
    en: "Rayleigh North East",
    geoType: "MSOA",
    geoCode: "E02004567"
  },
  {
    en: "Rayleigh North West",
    geoType: "MSOA",
    geoCode: "E02004568"
  },
  {
    en: "Rochford Outer & Hawkwell East",
    geoType: "MSOA",
    geoCode: "E02004569"
  },
  {
    en: "Rayleigh South West",
    geoType: "MSOA",
    geoCode: "E02004570"
  },
  {
    en: "Rayleigh South East",
    geoType: "MSOA",
    geoCode: "E02004571"
  },
  {
    en: "Great Wakering & Foulness",
    geoType: "MSOA",
    geoCode: "E02004572"
  },
  {
    en: "Harwich Town & Dovercourt",
    geoType: "MSOA",
    geoCode: "E02004573"
  },
  {
    en: "Harwich Parkeston",
    geoType: "MSOA",
    geoCode: "E02004574"
  },
  {
    en: "Manningtree & Mistley",
    geoType: "MSOA",
    geoCode: "E02004575"
  },
  {
    en: "Harwich West & South",
    geoType: "MSOA",
    geoCode: "E02004576"
  },
  {
    en: "Elmstead Market & Ardleigh",
    geoType: "MSOA",
    geoCode: "E02004577"
  },
  {
    en: "Walton & Frinton Coastal",
    geoType: "MSOA",
    geoCode: "E02004578"
  },
  {
    en: "Weeley & Thorpe-le-Soken",
    geoType: "MSOA",
    geoCode: "E02004579"
  },
  {
    en: "Frinton West & Kirby",
    geoType: "MSOA",
    geoCode: "E02004580"
  },
  {
    en: "Alresford, Great Bentley & Thorrington",
    geoType: "MSOA",
    geoCode: "E02004581"
  },
  {
    en: "Clacton North",
    geoType: "MSOA",
    geoCode: "E02004582"
  },
  {
    en: "Brightlingsea & Point Clear",
    geoType: "MSOA",
    geoCode: "E02004583"
  },
  {
    en: "Holland-on-Sea",
    geoType: "MSOA",
    geoCode: "E02004584"
  },
  {
    en: "Clacton Bocking's Elm",
    geoType: "MSOA",
    geoCode: "E02004585"
  },
  {
    en: "Clacton East",
    geoType: "MSOA",
    geoCode: "E02004586"
  },
  {
    en: "Clacton Rush Green",
    geoType: "MSOA",
    geoCode: "E02004587"
  },
  {
    en: "Clacton Central",
    geoType: "MSOA",
    geoCode: "E02004588"
  },
  {
    en: "Clacton West",
    geoType: "MSOA",
    geoCode: "E02004589"
  },
  {
    en: "Jaywick & St Osyth",
    geoType: "MSOA",
    geoCode: "E02004590"
  },
  {
    en: "Audley End, Ashdon & the Chesterfords",
    geoType: "MSOA",
    geoCode: "E02004591"
  },
  {
    en: "Saffron Walden Town",
    geoType: "MSOA",
    geoCode: "E02004592"
  },
  {
    en: "Newport, Littlebury & Clavering",
    geoType: "MSOA",
    geoCode: "E02004593"
  },
  {
    en: "Thaxted, Great Sampford & Radwinter",
    geoType: "MSOA",
    geoCode: "E02004594"
  },
  {
    en: "Stansted Mountfitchet & Elsenham",
    geoType: "MSOA",
    geoCode: "E02004595"
  },
  {
    en: "Takeley, Airport & Mountfitchet South",
    geoType: "MSOA",
    geoCode: "E02004596"
  },
  {
    en: "Great Dunmow",
    geoType: "MSOA",
    geoCode: "E02004597"
  },
  {
    en: "Flitch Green, Felsted & High Easter",
    geoType: "MSOA",
    geoCode: "E02004598"
  },
  {
    en: "Hatfield Heath, Hallingburys & Rodings",
    geoType: "MSOA",
    geoCode: "E02004599"
  },
  {
    en: "Swindon Village & Wyman's Brook",
    geoType: "MSOA",
    geoCode: "E02004600"
  },
  {
    en: "Prestbury & Racecourse",
    geoType: "MSOA",
    geoCode: "E02004601"
  },
  {
    en: "Springbank",
    geoType: "MSOA",
    geoCode: "E02004602"
  },
  {
    en: "St Paul's",
    geoType: "MSOA",
    geoCode: "E02004603"
  },
  {
    en: "Arle & Hesters Way",
    geoType: "MSOA",
    geoCode: "E02004604"
  },
  {
    en: "Oakley",
    geoType: "MSOA",
    geoCode: "E02004605"
  },
  {
    en: "Alstone & St Mark's",
    geoType: "MSOA",
    geoCode: "E02004606"
  },
  {
    en: "Pittville & Fairview",
    geoType: "MSOA",
    geoCode: "E02004607"
  },
  {
    en: "Lansdown & Montpellier",
    geoType: "MSOA",
    geoCode: "E02004608"
  },
  {
    en: "Benhall & The Reddings",
    geoType: "MSOA",
    geoCode: "E02004609"
  },
  {
    en: "The Park & Warden Hill",
    geoType: "MSOA",
    geoCode: "E02004610"
  },
  {
    en: "Battledown & Charlton Kings",
    geoType: "MSOA",
    geoCode: "E02004611"
  },
  {
    en: "Hatherley",
    geoType: "MSOA",
    geoCode: "E02004612"
  },
  {
    en: "Charlton Park",
    geoType: "MSOA",
    geoCode: "E02004613"
  },
  {
    en: "Leckhampton",
    geoType: "MSOA",
    geoCode: "E02004614"
  },
  {
    en: "Willersey, Chipping Campden & Blockley",
    geoType: "MSOA",
    geoCode: "E02004615"
  },
  {
    en: "Moreton & Stow-on-the-Wold",
    geoType: "MSOA",
    geoCode: "E02004616"
  },
  {
    en: "Bourton-on-the-Water & Vale",
    geoType: "MSOA",
    geoCode: "E02004617"
  },
  {
    en: "Sandywell, Ermin & Chedworth",
    geoType: "MSOA",
    geoCode: "E02004618"
  },
  {
    en: "Northleach, Coln Valley & Ampneys",
    geoType: "MSOA",
    geoCode: "E02004619"
  },
  {
    en: "Cirencester East & Stratton",
    geoType: "MSOA",
    geoCode: "E02004620"
  },
  {
    en: "Cirencester Central",
    geoType: "MSOA",
    geoCode: "E02004621"
  },
  {
    en: "Cirencester South",
    geoType: "MSOA",
    geoCode: "E02004622"
  },
  {
    en: "Fairford & Lechlade",
    geoType: "MSOA",
    geoCode: "E02004623"
  },
  {
    en: "Kemble & South Cerney",
    geoType: "MSOA",
    geoCode: "E02004624"
  },
  {
    en: "Tetbury",
    geoType: "MSOA",
    geoCode: "E02004625"
  },
  {
    en: "Dymock, Hartpury & Huntley",
    geoType: "MSOA",
    geoCode: "E02004626"
  },
  {
    en: "Newent",
    geoType: "MSOA",
    geoCode: "E02004627"
  },
  {
    en: "Mitcheldean, Drybrook & Ruardean",
    geoType: "MSOA",
    geoCode: "E02004628"
  },
  {
    en: "Cinderford",
    geoType: "MSOA",
    geoCode: "E02004629"
  },
  {
    en: "Longhope, Westbury & Blakeney",
    geoType: "MSOA",
    geoCode: "E02004630"
  },
  {
    en: "Lydbrook, Newland & St Briavels",
    geoType: "MSOA",
    geoCode: "E02004631"
  },
  {
    en: "Coleford",
    geoType: "MSOA",
    geoCode: "E02004632"
  },
  {
    en: "Bream, Pillowell & Yorkley",
    geoType: "MSOA",
    geoCode: "E02004633"
  },
  {
    en: "Lydney",
    geoType: "MSOA",
    geoCode: "E02004634"
  },
  {
    en: "Tidenham & Woolaston",
    geoType: "MSOA",
    geoCode: "E02004635"
  },
  {
    en: "Longlevens",
    geoType: "MSOA",
    geoCode: "E02004636"
  },
  {
    en: "Kingsholm & Wotton",
    geoType: "MSOA",
    geoCode: "E02004637"
  },
  {
    en: "Elmbridge",
    geoType: "MSOA",
    geoCode: "E02004638"
  },
  {
    en: "Central Gloucester & Hempsted",
    geoType: "MSOA",
    geoCode: "E02004639"
  },
  {
    en: "Barton",
    geoType: "MSOA",
    geoCode: "E02004640"
  },
  {
    en: "Hucclecote",
    geoType: "MSOA",
    geoCode: "E02004641"
  },
  {
    en: "Coney Hill, Barnwood & Abbeydale",
    geoType: "MSOA",
    geoCode: "E02004642"
  },
  {
    en: "Tredworth",
    geoType: "MSOA",
    geoCode: "E02004643"
  },
  {
    en: "Podsmead & Linden",
    geoType: "MSOA",
    geoCode: "E02004644"
  },
  {
    en: "Abbeymead & Abbeydale",
    geoType: "MSOA",
    geoCode: "E02004645"
  },
  {
    en: "Matson & Robinswood",
    geoType: "MSOA",
    geoCode: "E02004646"
  },
  {
    en: "Tuffley",
    geoType: "MSOA",
    geoCode: "E02004647"
  },
  {
    en: "Lower Tuffley",
    geoType: "MSOA",
    geoCode: "E02004648"
  },
  {
    en: "Quedgeley North",
    geoType: "MSOA",
    geoCode: "E02004649"
  },
  {
    en: "Quedgeley South",
    geoType: "MSOA",
    geoCode: "E02004650"
  },
  {
    en: "Upton St Leonards & Hardwicke",
    geoType: "MSOA",
    geoCode: "E02004651"
  },
  {
    en: "Painswick, Bisley & Eastcombe",
    geoType: "MSOA",
    geoCode: "E02004652"
  },
  {
    en: "Frampton, Whitminster & Eastington",
    geoType: "MSOA",
    geoCode: "E02004653"
  },
  {
    en: "Ebley & Randwick",
    geoType: "MSOA",
    geoCode: "E02004654"
  },
  {
    en: "Stonehouse",
    geoType: "MSOA",
    geoCode: "E02004655"
  },
  {
    en: "Stroud Town",
    geoType: "MSOA",
    geoCode: "E02004656"
  },
  {
    en: "Rodborough & Thrupp",
    geoType: "MSOA",
    geoCode: "E02004657"
  },
  {
    en: "Chalford & Bussage",
    geoType: "MSOA",
    geoCode: "E02004658"
  },
  {
    en: "Leonard Stanley & Uley",
    geoType: "MSOA",
    geoCode: "E02004659"
  },
  {
    en: "Minchinhampton & Amberley",
    geoType: "MSOA",
    geoCode: "E02004660"
  },
  {
    en: "Cam",
    geoType: "MSOA",
    geoCode: "E02004661"
  },
  {
    en: "Berkeley & Sharpness",
    geoType: "MSOA",
    geoCode: "E02004662"
  },
  {
    en: "Nailsworth",
    geoType: "MSOA",
    geoCode: "E02004663"
  },
  {
    en: "Dursley",
    geoType: "MSOA",
    geoCode: "E02004664"
  },
  {
    en: "Wotton-under-Edge & Kingswood",
    geoType: "MSOA",
    geoCode: "E02004665"
  },
  {
    en: "Tewkesbury East & Ashchurch",
    geoType: "MSOA",
    geoCode: "E02004666"
  },
  {
    en: "Tewkesbury West & Twyning",
    geoType: "MSOA",
    geoCode: "E02004667"
  },
  {
    en: "Winchcombe & Washbourne",
    geoType: "MSOA",
    geoCode: "E02004668"
  },
  {
    en: "Cleeve Hill, Gotherington & Apperley",
    geoType: "MSOA",
    geoCode: "E02004669"
  },
  {
    en: "Highnam, Longford & Norton",
    geoType: "MSOA",
    geoCode: "E02004671"
  },
  {
    en: "Churchdown & Innsworth",
    geoType: "MSOA",
    geoCode: "E02004672"
  },
  {
    en: "Shurdington, Staverton & Witcombe",
    geoType: "MSOA",
    geoCode: "E02004673"
  },
  {
    en: "Brockworth & Coopers Edge",
    geoType: "MSOA",
    geoCode: "E02004674"
  },
  {
    en: "Tadley West",
    geoType: "MSOA",
    geoCode: "E02004675"
  },
  {
    en: "Tadley East, Pamber & Silchester",
    geoType: "MSOA",
    geoCode: "E02004676"
  },
  {
    en: "Woolton Hill, Burghclere & Bishops Green",
    geoType: "MSOA",
    geoCode: "E02004677"
  },
  {
    en: "Kingsclere & Heath End",
    geoType: "MSOA",
    geoCode: "E02004678"
  },
  {
    en: "Bramley, Sherfield & the Sherbornes",
    geoType: "MSOA",
    geoCode: "E02004679"
  },
  {
    en: "Chineham",
    geoType: "MSOA",
    geoCode: "E02004680"
  },
  {
    en: "Popley",
    geoType: "MSOA",
    geoCode: "E02004681"
  },
  {
    en: "Daneshill & Little Basing",
    geoType: "MSOA",
    geoCode: "E02004682"
  },
  {
    en: "Houndmills & Oakridge",
    geoType: "MSOA",
    geoCode: "E02004683"
  },
  {
    en: "Winklebury & Rooksdown",
    geoType: "MSOA",
    geoCode: "E02004684"
  },
  {
    en: "Basingstoke Central, Black Dam & Eastrop",
    geoType: "MSOA",
    geoCode: "E02004685"
  },
  {
    en: "Kings Furlong",
    geoType: "MSOA",
    geoCode: "E02004686"
  },
  {
    en: "Buckskin & Worting",
    geoType: "MSOA",
    geoCode: "E02004687"
  },
  {
    en: "South Ham & West Ham",
    geoType: "MSOA",
    geoCode: "E02004688"
  },
  {
    en: "East Oakley",
    geoType: "MSOA",
    geoCode: "E02004689"
  },
  {
    en: "Viables",
    geoType: "MSOA",
    geoCode: "E02004690"
  },
  {
    en: "Old Basing & the Candovers",
    geoType: "MSOA",
    geoCode: "E02004691"
  },
  {
    en: "Kempshott",
    geoType: "MSOA",
    geoCode: "E02004692"
  },
  {
    en: "Brighton Hill",
    geoType: "MSOA",
    geoCode: "E02004693"
  },
  {
    en: "Whitchurch & Ashmansworth",
    geoType: "MSOA",
    geoCode: "E02004694"
  },
  {
    en: "Hatch Warren",
    geoType: "MSOA",
    geoCode: "E02004695"
  },
  {
    en: "Overton & North Waltham",
    geoType: "MSOA",
    geoCode: "E02004696"
  },
  {
    en: "Bentley & Holybourne",
    geoType: "MSOA",
    geoCode: "E02004697"
  },
  {
    en: "Alton Westbrooke & Eastbrooke",
    geoType: "MSOA",
    geoCode: "E02004698"
  },
  {
    en: "Alton Ashdell, Whitedown & Amery",
    geoType: "MSOA",
    geoCode: "E02004699"
  },
  {
    en: "Bordon Camp",
    geoType: "MSOA",
    geoCode: "E02004700"
  },
  {
    en: "Bordon & Lindford",
    geoType: "MSOA",
    geoCode: "E02004702"
  },
  {
    en: "Four Marks & Tisted",
    geoType: "MSOA",
    geoCode: "E02004703"
  },
  {
    en: "Whitehill & Selborne",
    geoType: "MSOA",
    geoCode: "E02004704"
  },
  {
    en: "Liphook",
    geoType: "MSOA",
    geoCode: "E02004705"
  },
  {
    en: "Liss & Hawkley",
    geoType: "MSOA",
    geoCode: "E02004706"
  },
  {
    en: "Petersfield North & East Meon",
    geoType: "MSOA",
    geoCode: "E02004707"
  },
  {
    en: "Petersfield South",
    geoType: "MSOA",
    geoCode: "E02004708"
  },
  {
    en: "Clanfield & Finchdean",
    geoType: "MSOA",
    geoCode: "E02004709"
  },
  {
    en: "Horndean North",
    geoType: "MSOA",
    geoCode: "E02004710"
  },
  {
    en: "Hiltingbury",
    geoType: "MSOA",
    geoCode: "E02004712"
  },
  {
    en: "Chandler's Ford East",
    geoType: "MSOA",
    geoCode: "E02004713"
  },
  {
    en: "Chandler's Ford West",
    geoType: "MSOA",
    geoCode: "E02004714"
  },
  {
    en: "Boyatt Wood",
    geoType: "MSOA",
    geoCode: "E02004715"
  },
  {
    en: "Bishopstoke",
    geoType: "MSOA",
    geoCode: "E02004716"
  },
  {
    en: "Eastleigh West",
    geoType: "MSOA",
    geoCode: "E02004717"
  },
  {
    en: "Central Eastleigh",
    geoType: "MSOA",
    geoCode: "E02004718"
  },
  {
    en: "Fair Oak",
    geoType: "MSOA",
    geoCode: "E02004719"
  },
  {
    en: "West End & Chartwell Green",
    geoType: "MSOA",
    geoCode: "E02004720"
  },
  {
    en: "Hedge End North & Botley North",
    geoType: "MSOA",
    geoCode: "E02004721"
  },
  {
    en: "Hedge End Wildern & Botley South",
    geoType: "MSOA",
    geoCode: "E02004722"
  },
  {
    en: "Hedge End South",
    geoType: "MSOA",
    geoCode: "E02004723"
  },
  {
    en: "Lowford",
    geoType: "MSOA",
    geoCode: "E02004724"
  },
  {
    en: "Netley",
    geoType: "MSOA",
    geoCode: "E02004725"
  },
  {
    en: "Hamble-le-Rice",
    geoType: "MSOA",
    geoCode: "E02004726"
  },
  {
    en: "Swanwick & Sarisbury Green",
    geoType: "MSOA",
    geoCode: "E02004727"
  },
  {
    en: "Park Gate & Segensworth",
    geoType: "MSOA",
    geoCode: "E02004728"
  },
  {
    en: "Fareham North West",
    geoType: "MSOA",
    geoCode: "E02004729"
  },
  {
    en: "Fareham Common",
    geoType: "MSOA",
    geoCode: "E02004730"
  },
  {
    en: "Locks Heath",
    geoType: "MSOA",
    geoCode: "E02004731"
  },
  {
    en: "Warsash",
    geoType: "MSOA",
    geoCode: "E02004732"
  },
  {
    en: "Titchfield & Titchfield Common",
    geoType: "MSOA",
    geoCode: "E02004733"
  },
  {
    en: "Fareham Town & Cams Hill",
    geoType: "MSOA",
    geoCode: "E02004734"
  },
  {
    en: "Fareham West",
    geoType: "MSOA",
    geoCode: "E02004735"
  },
  {
    en: "Portchester North West",
    geoType: "MSOA",
    geoCode: "E02004736"
  },
  {
    en: "Fareham Fort",
    geoType: "MSOA",
    geoCode: "E02004737"
  },
  {
    en: "Portchester South East",
    geoType: "MSOA",
    geoCode: "E02004738"
  },
  {
    en: "Stubbington",
    geoType: "MSOA",
    geoCode: "E02004739"
  },
  {
    en: "Hill Head",
    geoType: "MSOA",
    geoCode: "E02004740"
  },
  {
    en: "Bridgemary North",
    geoType: "MSOA",
    geoCode: "E02004741"
  },
  {
    en: "Bridgemary South",
    geoType: "MSOA",
    geoCode: "E02004742"
  },
  {
    en: "Elson",
    geoType: "MSOA",
    geoCode: "E02004743"
  },
  {
    en: "Rowner",
    geoType: "MSOA",
    geoCode: "E02004744"
  },
  {
    en: "Priddy's Hard & Brockhurst East",
    geoType: "MSOA",
    geoCode: "E02004745"
  },
  {
    en: "Lee-on-the-Solent",
    geoType: "MSOA",
    geoCode: "E02004746"
  },
  {
    en: "Brockhurst",
    geoType: "MSOA",
    geoCode: "E02004747"
  },
  {
    en: "Gosport Town",
    geoType: "MSOA",
    geoCode: "E02004748"
  },
  {
    en: "Alverstoke & Privett",
    geoType: "MSOA",
    geoCode: "E02004749"
  },
  {
    en: "Clayhall & Anglesey",
    geoType: "MSOA",
    geoCode: "E02004750"
  },
  {
    en: "Yateley East",
    geoType: "MSOA",
    geoCode: "E02004751"
  },
  {
    en: "Yateley West & Eversley",
    geoType: "MSOA",
    geoCode: "E02004752"
  },
  {
    en: "Blackwater, Frogmore & Minley",
    geoType: "MSOA",
    geoCode: "E02004753"
  },
  {
    en: "Hartley Wintney & Heckfield",
    geoType: "MSOA",
    geoCode: "E02004754"
  },
  {
    en: "Fleet North, Elvetham Heath & Ancells Farm",
    geoType: "MSOA",
    geoCode: "E02004755"
  },
  {
    en: "Hook & Rotherwick",
    geoType: "MSOA",
    geoCode: "E02004756"
  },
  {
    en: "Fleet South & Pondtail",
    geoType: "MSOA",
    geoCode: "E02004757"
  },
  {
    en: "Fleet West & Winchfield",
    geoType: "MSOA",
    geoCode: "E02004758"
  },
  {
    en: "Crookham East",
    geoType: "MSOA",
    geoCode: "E02004759"
  },
  {
    en: "Crookham West, Ewshot & Crondall",
    geoType: "MSOA",
    geoCode: "E02004760"
  },
  {
    en: "Odiham & Warnborough",
    geoType: "MSOA",
    geoCode: "E02004761"
  },
  {
    en: "Waterlooville North West",
    geoType: "MSOA",
    geoCode: "E02004764"
  },
  {
    en: "Waterlooville North East",
    geoType: "MSOA",
    geoCode: "E02004765"
  },
  {
    en: "Waterlooville Central",
    geoType: "MSOA",
    geoCode: "E02004766"
  },
  {
    en: "Barncroft & Warren Park",
    geoType: "MSOA",
    geoCode: "E02004767"
  },
  {
    en: "Waterlooville East",
    geoType: "MSOA",
    geoCode: "E02004768"
  },
  {
    en: "Leigh Park",
    geoType: "MSOA",
    geoCode: "E02004769"
  },
  {
    en: "West Leigh",
    geoType: "MSOA",
    geoCode: "E02004770"
  },
  {
    en: "Stockheath Common",
    geoType: "MSOA",
    geoCode: "E02004771"
  },
  {
    en: "Purbrook & Widley",
    geoType: "MSOA",
    geoCode: "E02004772"
  },
  {
    en: "Emsworth",
    geoType: "MSOA",
    geoCode: "E02004774"
  },
  {
    en: "Central Havant & Langstone",
    geoType: "MSOA",
    geoCode: "E02004775"
  },
  {
    en: "Hayling West & North",
    geoType: "MSOA",
    geoCode: "E02004776"
  },
  {
    en: "South Hayling",
    geoType: "MSOA",
    geoCode: "E02004777"
  },
  {
    en: "Hayling Eastoke",
    geoType: "MSOA",
    geoCode: "E02004778"
  },
  {
    en: "Fordingbridge, Rockbourne & Woodgreen",
    geoType: "MSOA",
    geoCode: "E02004779"
  },
  {
    en: "Totton Calmore",
    geoType: "MSOA",
    geoCode: "E02004780"
  },
  {
    en: "West Totton",
    geoType: "MSOA",
    geoCode: "E02004781"
  },
  {
    en: "Totton Town",
    geoType: "MSOA",
    geoCode: "E02004782"
  },
  {
    en: "Totton Rushington",
    geoType: "MSOA",
    geoCode: "E02004783"
  },
  {
    en: "Ashurst & Cadnam",
    geoType: "MSOA",
    geoCode: "E02004784"
  },
  {
    en: "Lyndhurst & Minstead",
    geoType: "MSOA",
    geoCode: "E02004785"
  },
  {
    en: "Marchwood & Dibden",
    geoType: "MSOA",
    geoCode: "E02004786"
  },
  {
    en: "Hythe",
    geoType: "MSOA",
    geoCode: "E02004787"
  },
  {
    en: "Ringwood North & Ibsley",
    geoType: "MSOA",
    geoCode: "E02004788"
  },
  {
    en: "Langdown & Dibden Purlieu",
    geoType: "MSOA",
    geoCode: "E02004789"
  },
  {
    en: "Ringwood South",
    geoType: "MSOA",
    geoCode: "E02004790"
  },
  {
    en: "Holbury South",
    geoType: "MSOA",
    geoCode: "E02004791"
  },
  {
    en: "Holbury North, Blackfield & Fawley",
    geoType: "MSOA",
    geoCode: "E02004792"
  },
  {
    en: "Brockenhurst & Sway",
    geoType: "MSOA",
    geoCode: "E02004793"
  },
  {
    en: "Bransgore & Burley",
    geoType: "MSOA",
    geoCode: "E02004794"
  },
  {
    en: "Lymington Town & Boldre",
    geoType: "MSOA",
    geoCode: "E02004795"
  },
  {
    en: "Hordle & Bashley",
    geoType: "MSOA",
    geoCode: "E02004796"
  },
  {
    en: "Lymington North & West",
    geoType: "MSOA",
    geoCode: "E02004797"
  },
  {
    en: "New Milton West",
    geoType: "MSOA",
    geoCode: "E02004798"
  },
  {
    en: "New Milton East",
    geoType: "MSOA",
    geoCode: "E02004799"
  },
  {
    en: "Barton on Sea",
    geoType: "MSOA",
    geoCode: "E02004800"
  },
  {
    en: "Milford & Lymington South",
    geoType: "MSOA",
    geoCode: "E02004801"
  },
  {
    en: "Hawley Lane & Fox Lane",
    geoType: "MSOA",
    geoCode: "E02004802"
  },
  {
    en: "Mayfield",
    geoType: "MSOA",
    geoCode: "E02004803"
  },
  {
    en: "Pinewood",
    geoType: "MSOA",
    geoCode: "E02004804"
  },
  {
    en: "Farnborough Hill",
    geoType: "MSOA",
    geoCode: "E02004805"
  },
  {
    en: "Cove & Southwood",
    geoType: "MSOA",
    geoCode: "E02004806"
  },
  {
    en: "Farnborough Town",
    geoType: "MSOA",
    geoCode: "E02004807"
  },
  {
    en: "South Farnborough & North Camp",
    geoType: "MSOA",
    geoCode: "E02004808"
  },
  {
    en: "Aldershot Town",
    geoType: "MSOA",
    geoCode: "E02004809"
  },
  {
    en: "Aldershot North Town",
    geoType: "MSOA",
    geoCode: "E02004810"
  },
  {
    en: "Aldershot Rowhill",
    geoType: "MSOA",
    geoCode: "E02004811"
  },
  {
    en: "Aldershot Manor Park",
    geoType: "MSOA",
    geoCode: "E02004812"
  },
  {
    en: "Aldershot Park",
    geoType: "MSOA",
    geoCode: "E02004813"
  },
  {
    en: "Andover Charlton & Bourne Valley",
    geoType: "MSOA",
    geoCode: "E02004814"
  },
  {
    en: "Andover Newbury Road",
    geoType: "MSOA",
    geoCode: "E02004815"
  },
  {
    en: "Andover Central",
    geoType: "MSOA",
    geoCode: "E02004817"
  },
  {
    en: "Andover West",
    geoType: "MSOA",
    geoCode: "E02004818"
  },
  {
    en: "Andover South",
    geoType: "MSOA",
    geoCode: "E02004819"
  },
  {
    en: "Over Wallop & Shipton Bellinger",
    geoType: "MSOA",
    geoCode: "E02004820"
  },
  {
    en: "Chilbolton, Clatford & Barton Stacey",
    geoType: "MSOA",
    geoCode: "E02004821"
  },
  {
    en: "Nether Wallop, Kings Somborne & Dunbridge",
    geoType: "MSOA",
    geoCode: "E02004822"
  },
  {
    en: "Romsey Cupernham & Halterworth",
    geoType: "MSOA",
    geoCode: "E02004823"
  },
  {
    en: "Romsey Town",
    geoType: "MSOA",
    geoCode: "E02004824"
  },
  {
    en: "North Baddesley & Braishfield",
    geoType: "MSOA",
    geoCode: "E02004825"
  },
  {
    en: "Abbotswood & West Wellow",
    geoType: "MSOA",
    geoCode: "E02004826"
  },
  {
    en: "Valley Park",
    geoType: "MSOA",
    geoCode: "E02004827"
  },
  {
    en: "Chilworth, Nursling & Rownhams",
    geoType: "MSOA",
    geoCode: "E02004828"
  },
  {
    en: "South Wonston, Sutton Scotney & Micheldever",
    geoType: "MSOA",
    geoCode: "E02004829"
  },
  {
    en: "Springvale & Itchen Abbas",
    geoType: "MSOA",
    geoCode: "E02004830"
  },
  {
    en: "Winchester North & Sparsholt",
    geoType: "MSOA",
    geoCode: "E02004831"
  },
  {
    en: "New Alresford",
    geoType: "MSOA",
    geoCode: "E02004832"
  },
  {
    en: "Winchester West",
    geoType: "MSOA",
    geoCode: "E02004833"
  },
  {
    en: "Winchester East",
    geoType: "MSOA",
    geoCode: "E02004834"
  },
  {
    en: "Winchester Central & South",
    geoType: "MSOA",
    geoCode: "E02004835"
  },
  {
    en: "Winchester Stanmore",
    geoType: "MSOA",
    geoCode: "E02004836"
  },
  {
    en: "Oliver's Battery and Hursley",
    geoType: "MSOA",
    geoCode: "E02004837"
  },
  {
    en: "Colden Common & Twyford",
    geoType: "MSOA",
    geoCode: "E02004838"
  },
  {
    en: "Swanmore, Hambledon & West Meon",
    geoType: "MSOA",
    geoCode: "E02004839"
  },
  {
    en: "Bishop's Waltham & Waltham Chase",
    geoType: "MSOA",
    geoCode: "E02004840"
  },
  {
    en: "Whiteley, Knowle & Wickham",
    geoType: "MSOA",
    geoCode: "E02004841"
  },
  {
    en: "Denmead & Southwick",
    geoType: "MSOA",
    geoCode: "E02004842"
  },
  {
    en: "Hoddesdon Ware Road",
    geoType: "MSOA",
    geoCode: "E02004843"
  },
  {
    en: "Rye Park",
    geoType: "MSOA",
    geoCode: "E02004844"
  },
  {
    en: "Hoddesdon Town",
    geoType: "MSOA",
    geoCode: "E02004845"
  },
  {
    en: "Broxbourne Town",
    geoType: "MSOA",
    geoCode: "E02004846"
  },
  {
    en: "Wormley & Turnford",
    geoType: "MSOA",
    geoCode: "E02004847"
  },
  {
    en: "Flamstead End",
    geoType: "MSOA",
    geoCode: "E02004848"
  },
  {
    en: "Goffs Oak",
    geoType: "MSOA",
    geoCode: "E02004849"
  },
  {
    en: "Cheshunt Coopers Walk",
    geoType: "MSOA",
    geoCode: "E02004850"
  },
  {
    en: "Rosedale",
    geoType: "MSOA",
    geoCode: "E02004851"
  },
  {
    en: "Cheshunt Central",
    geoType: "MSOA",
    geoCode: "E02004852"
  },
  {
    en: "Churchgate",
    geoType: "MSOA",
    geoCode: "E02004853"
  },
  {
    en: "Cheshunt South",
    geoType: "MSOA",
    geoCode: "E02004854"
  },
  {
    en: "Waltham Cross Town",
    geoType: "MSOA",
    geoCode: "E02004855"
  },
  {
    en: "Markyate, Flamstead & Gaddesden",
    geoType: "MSOA",
    geoCode: "E02004856"
  },
  {
    en: "Tring West & Long Marston",
    geoType: "MSOA",
    geoCode: "E02004857"
  },
  {
    en: "Tring North",
    geoType: "MSOA",
    geoCode: "E02004858"
  },
  {
    en: "Tring East, Wigginton & Aldbury",
    geoType: "MSOA",
    geoCode: "E02004859"
  },
  {
    en: "Woodhall Farm",
    geoType: "MSOA",
    geoCode: "E02004860"
  },
  {
    en: "Northchurch & Potten End",
    geoType: "MSOA",
    geoCode: "E02004861"
  },
  {
    en: "Grovehill",
    geoType: "MSOA",
    geoCode: "E02004862"
  },
  {
    en: "Highfield",
    geoType: "MSOA",
    geoCode: "E02004863"
  },
  {
    en: "Berkhamsted Town",
    geoType: "MSOA",
    geoCode: "E02004864"
  },
  {
    en: "Gadebridge & Old Town",
    geoType: "MSOA",
    geoCode: "E02004865"
  },
  {
    en: "Warners End",
    geoType: "MSOA",
    geoCode: "E02004866"
  },
  {
    en: "Berkhamsted West",
    geoType: "MSOA",
    geoCode: "E02004867"
  },
  {
    en: "Maylands & Adeyfield",
    geoType: "MSOA",
    geoCode: "E02004868"
  },
  {
    en: "Berkhamsted South",
    geoType: "MSOA",
    geoCode: "E02004869"
  },
  {
    en: "Hemel Hempstead Town",
    geoType: "MSOA",
    geoCode: "E02004870"
  },
  {
    en: "Chaulden",
    geoType: "MSOA",
    geoCode: "E02004871"
  },
  {
    en: "Leverstock Green",
    geoType: "MSOA",
    geoCode: "E02004872"
  },
  {
    en: "Boxmoor & Apsley",
    geoType: "MSOA",
    geoCode: "E02004873"
  },
  {
    en: "Corner Hall",
    geoType: "MSOA",
    geoCode: "E02004874"
  },
  {
    en: "Nash Mills & Bennetts End",
    geoType: "MSOA",
    geoCode: "E02004875"
  },
  {
    en: "Bovingdon & Chipperfield",
    geoType: "MSOA",
    geoCode: "E02004876"
  },
  {
    en: "Kings Langley",
    geoType: "MSOA",
    geoCode: "E02004877"
  },
  {
    en: "Buntingford & Great Hormead",
    geoType: "MSOA",
    geoCode: "E02004878"
  },
  {
    en: "Bishop's Stortford West & Braughing",
    geoType: "MSOA",
    geoCode: "E02004880"
  },
  {
    en: "Bishop's Stortford North",
    geoType: "MSOA",
    geoCode: "E02004881"
  },
  {
    en: "Bishop's Stortford East",
    geoType: "MSOA",
    geoCode: "E02004882"
  },
  {
    en: "Puckeridge & Thundridge",
    geoType: "MSOA",
    geoCode: "E02004883"
  },
  {
    en: "Bishop's Stortford Central",
    geoType: "MSOA",
    geoCode: "E02004884"
  },
  {
    en: "Bishop's Stortford South",
    geoType: "MSOA",
    geoCode: "E02004885"
  },
  {
    en: "Much Hadham & Hunsdon",
    geoType: "MSOA",
    geoCode: "E02004886"
  },
  {
    en: "Watton-at-Stone, Bramfield & Bayford",
    geoType: "MSOA",
    geoCode: "E02004887"
  },
  {
    en: "Sawbridgeworth",
    geoType: "MSOA",
    geoCode: "E02004888"
  },
  {
    en: "Ware East",
    geoType: "MSOA",
    geoCode: "E02004889"
  },
  {
    en: "Ware West",
    geoType: "MSOA",
    geoCode: "E02004890"
  },
  {
    en: "Hertford Bengeo",
    geoType: "MSOA",
    geoCode: "E02004891"
  },
  {
    en: "Hertford West",
    geoType: "MSOA",
    geoCode: "E02004892"
  },
  {
    en: "Hertford Foxholes",
    geoType: "MSOA",
    geoCode: "E02004893"
  },
  {
    en: "Hertford South",
    geoType: "MSOA",
    geoCode: "E02004894"
  },
  {
    en: "Hertford Heath & Stanstead St Margarets",
    geoType: "MSOA",
    geoCode: "E02004895"
  },
  {
    en: "Potters Bar Parkfield",
    geoType: "MSOA",
    geoCode: "E02004896"
  },
  {
    en: "Potters Bar Furzefield",
    geoType: "MSOA",
    geoCode: "E02004897"
  },
  {
    en: "Potters Bar Oakmere",
    geoType: "MSOA",
    geoCode: "E02004898"
  },
  {
    en: "Shenley & South Mimms",
    geoType: "MSOA",
    geoCode: "E02004899"
  },
  {
    en: "Radlett",
    geoType: "MSOA",
    geoCode: "E02004900"
  },
  {
    en: "Borehamwood Cowley Hill",
    geoType: "MSOA",
    geoCode: "E02004901"
  },
  {
    en: "Borehamwood Brookmeadow",
    geoType: "MSOA",
    geoCode: "E02004902"
  },
  {
    en: "Bushey North",
    geoType: "MSOA",
    geoCode: "E02004903"
  },
  {
    en: "Borehamwood Kenilworth",
    geoType: "MSOA",
    geoCode: "E02004904"
  },
  {
    en: "Elstree & Aldenham",
    geoType: "MSOA",
    geoCode: "E02004905"
  },
  {
    en: "Borehamwood Hillside",
    geoType: "MSOA",
    geoCode: "E02004906"
  },
  {
    en: "Bushey Central",
    geoType: "MSOA",
    geoCode: "E02004907"
  },
  {
    en: "Bushey Heath",
    geoType: "MSOA",
    geoCode: "E02004908"
  },
  {
    en: "Royston North & Central",
    geoType: "MSOA",
    geoCode: "E02004909"
  },
  {
    en: "Royston South, West & East",
    geoType: "MSOA",
    geoCode: "E02004910"
  },
  {
    en: "Letchworth Grange",
    geoType: "MSOA",
    geoCode: "E02004911"
  },
  {
    en: "Baldock",
    geoType: "MSOA",
    geoCode: "E02004912"
  },
  {
    en: "Letchworth East",
    geoType: "MSOA",
    geoCode: "E02004914"
  },
  {
    en: "Letchworth Wilbury",
    geoType: "MSOA",
    geoCode: "E02004915"
  },
  {
    en: "Letchworth South West",
    geoType: "MSOA",
    geoCode: "E02004916"
  },
  {
    en: "Letchworth South East",
    geoType: "MSOA",
    geoCode: "E02004917"
  },
  {
    en: "Hitchin Bearton",
    geoType: "MSOA",
    geoCode: "E02004918"
  },
  {
    en: "Hitchin Walsworth",
    geoType: "MSOA",
    geoCode: "E02004919"
  },
  {
    en: "Hitchin Town & West",
    geoType: "MSOA",
    geoCode: "E02004920"
  },
  {
    en: "Hitchin Highbury",
    geoType: "MSOA",
    geoCode: "E02004921"
  },
  {
    en: "Ickleford, Great Offley & Whitwell",
    geoType: "MSOA",
    geoCode: "E02004922"
  },
  {
    en: "Knebworth, Codicote & Kimpton",
    geoType: "MSOA",
    geoCode: "E02004923"
  },
  {
    en: "Harpenden North",
    geoType: "MSOA",
    geoCode: "E02004924"
  },
  {
    en: "Harpenden East",
    geoType: "MSOA",
    geoCode: "E02004925"
  },
  {
    en: "Harpenden Town",
    geoType: "MSOA",
    geoCode: "E02004926"
  },
  {
    en: "Wheathampstead",
    geoType: "MSOA",
    geoCode: "E02004927"
  },
  {
    en: "Harpenden Common",
    geoType: "MSOA",
    geoCode: "E02004928"
  },
  {
    en: "Redbourn",
    geoType: "MSOA",
    geoCode: "E02004929"
  },
  {
    en: "Jersey Farm & Sandridge",
    geoType: "MSOA",
    geoCode: "E02004930"
  },
  {
    en: "Marshalswick",
    geoType: "MSOA",
    geoCode: "E02004931"
  },
  {
    en: "Townsend & New Greens",
    geoType: "MSOA",
    geoCode: "E02004932"
  },
  {
    en: "Bernards Heath",
    geoType: "MSOA",
    geoCode: "E02004933"
  },
  {
    en: "Clarence Park",
    geoType: "MSOA",
    geoCode: "E02004934"
  },
  {
    en: "St Albans Central",
    geoType: "MSOA",
    geoCode: "E02004935"
  },
  {
    en: "Longacres",
    geoType: "MSOA",
    geoCode: "E02004936"
  },
  {
    en: "Verulam Park",
    geoType: "MSOA",
    geoCode: "E02004937"
  },
  {
    en: "The Camp & Cunningham",
    geoType: "MSOA",
    geoCode: "E02004939"
  },
  {
    en: "Cottonmill & Sopwell",
    geoType: "MSOA",
    geoCode: "E02004940"
  },
  {
    en: "London Colney",
    geoType: "MSOA",
    geoCode: "E02004941"
  },
  {
    en: "How Wood & Park Street",
    geoType: "MSOA",
    geoCode: "E02004942"
  },
  {
    en: "Bricket Wood & Chiswell Green",
    geoType: "MSOA",
    geoCode: "E02004943"
  },
  {
    en: "St Nicholas",
    geoType: "MSOA",
    geoCode: "E02004944"
  },
  {
    en: "Woodfield & Old Town",
    geoType: "MSOA",
    geoCode: "E02004945"
  },
  {
    en: "Martins Wood",
    geoType: "MSOA",
    geoCode: "E02004946"
  },
  {
    en: "Symonds Green",
    geoType: "MSOA",
    geoCode: "E02004948"
  },
  {
    en: "Pin Green",
    geoType: "MSOA",
    geoCode: "E02004949"
  },
  {
    en: "Chells South",
    geoType: "MSOA",
    geoCode: "E02004950"
  },
  {
    en: "Bedwell",
    geoType: "MSOA",
    geoCode: "E02004951"
  },
  {
    en: "Poplars",
    geoType: "MSOA",
    geoCode: "E02004952"
  },
  {
    en: "Shephall",
    geoType: "MSOA",
    geoCode: "E02004953"
  },
  {
    en: "Roebuck",
    geoType: "MSOA",
    geoCode: "E02004954"
  },
  {
    en: "Broadwater & Bragbury End",
    geoType: "MSOA",
    geoCode: "E02004955"
  },
  {
    en: "Abbots Langley",
    geoType: "MSOA",
    geoCode: "E02004956"
  },
  {
    en: "Leavesden & Garston Manor",
    geoType: "MSOA",
    geoCode: "E02004957"
  },
  {
    en: "Croxley North & Sarratt",
    geoType: "MSOA",
    geoCode: "E02004958"
  },
  {
    en: "Rickmansworth North & Loudwater",
    geoType: "MSOA",
    geoCode: "E02004959"
  },
  {
    en: "Chorleywood",
    geoType: "MSOA",
    geoCode: "E02004960"
  },
  {
    en: "Croxley Green",
    geoType: "MSOA",
    geoCode: "E02004961"
  },
  {
    en: "Rickmansworth West",
    geoType: "MSOA",
    geoCode: "E02004962"
  },
  {
    en: "Oxhey Hall & Hayling",
    geoType: "MSOA",
    geoCode: "E02004963"
  },
  {
    en: "Mill End, Heronsgate & Maple Cross",
    geoType: "MSOA",
    geoCode: "E02004964"
  },
  {
    en: "Carpenders Park",
    geoType: "MSOA",
    geoCode: "E02004965"
  },
  {
    en: "Moor Park & Batchworth",
    geoType: "MSOA",
    geoCode: "E02004966"
  },
  {
    en: "South Oxhey",
    geoType: "MSOA",
    geoCode: "E02004967"
  },
  {
    en: "Woodside & Leavesden Green",
    geoType: "MSOA",
    geoCode: "E02004968"
  },
  {
    en: "Stanborough",
    geoType: "MSOA",
    geoCode: "E02004969"
  },
  {
    en: "Garston",
    geoType: "MSOA",
    geoCode: "E02004970"
  },
  {
    en: "Leggatts",
    geoType: "MSOA",
    geoCode: "E02004971"
  },
  {
    en: "Tudor",
    geoType: "MSOA",
    geoCode: "E02004972"
  },
  {
    en: "North Watford",
    geoType: "MSOA",
    geoCode: "E02004973"
  },
  {
    en: "Nascot Wood",
    geoType: "MSOA",
    geoCode: "E02004974"
  },
  {
    en: "Cassiobury",
    geoType: "MSOA",
    geoCode: "E02004975"
  },
  {
    en: "Central Watford",
    geoType: "MSOA",
    geoCode: "E02004976"
  },
  {
    en: "West Watford",
    geoType: "MSOA",
    geoCode: "E02004977"
  },
  {
    en: "Holywell",
    geoType: "MSOA",
    geoCode: "E02004978"
  },
  {
    en: "Oxhey",
    geoType: "MSOA",
    geoCode: "E02004979"
  },
  {
    en: "Woolmer Green, Oaklands & Digswell",
    geoType: "MSOA",
    geoCode: "E02004980"
  },
  {
    en: "Welwyn & Hatfield Garden Village",
    geoType: "MSOA",
    geoCode: "E02004981"
  },
  {
    en: "Knightsfield",
    geoType: "MSOA",
    geoCode: "E02004982"
  },
  {
    en: "Haldens",
    geoType: "MSOA",
    geoCode: "E02004983"
  },
  {
    en: "Panshanger",
    geoType: "MSOA",
    geoCode: "E02004984"
  },
  {
    en: "Welwyn Garden City Central & Handside",
    geoType: "MSOA",
    geoCode: "E02004985"
  },
  {
    en: "Peartree",
    geoType: "MSOA",
    geoCode: "E02004986"
  },
  {
    en: "Hall Grove",
    geoType: "MSOA",
    geoCode: "E02004987"
  },
  {
    en: "Hollybush",
    geoType: "MSOA",
    geoCode: "E02004988"
  },
  {
    en: "Hatfield North & West",
    geoType: "MSOA",
    geoCode: "E02004989"
  },
  {
    en: "Hatfield East",
    geoType: "MSOA",
    geoCode: "E02004990"
  },
  {
    en: "Hatfield Town",
    geoType: "MSOA",
    geoCode: "E02004991"
  },
  {
    en: "Hatfield South",
    geoType: "MSOA",
    geoCode: "E02004992"
  },
  {
    en: "Brookmans Park",
    geoType: "MSOA",
    geoCode: "E02004994"
  },
  {
    en: "Cuffley & Northaw",
    geoType: "MSOA",
    geoCode: "E02004995"
  },
  {
    en: "Wye, Chilham & Kennington",
    geoType: "MSOA",
    geoCode: "E02004996"
  },
  {
    en: "Charing, Pluckley & Challock",
    geoType: "MSOA",
    geoCode: "E02004997"
  },
  {
    en: "Kennington & Little Burton Farm",
    geoType: "MSOA",
    geoCode: "E02004998"
  },
  {
    en: "Ashford Central",
    geoType: "MSOA",
    geoCode: "E02005000"
  },
  {
    en: "Highfield & Willesborough",
    geoType: "MSOA",
    geoCode: "E02005001"
  },
  {
    en: "Beaver & Singleton",
    geoType: "MSOA",
    geoCode: "E02005002"
  },
  {
    en: "Washford & Stanhope",
    geoType: "MSOA",
    geoCode: "E02005003"
  },
  {
    en: "Park Farm",
    geoType: "MSOA",
    geoCode: "E02005004"
  },
  {
    en: "Brabourne Lees & North Romney",
    geoType: "MSOA",
    geoCode: "E02005005"
  },
  {
    en: "Biddenden, Smarden & High Halden",
    geoType: "MSOA",
    geoCode: "E02005006"
  },
  {
    en: "Great Chart, Bethersden & Woodchurch",
    geoType: "MSOA",
    geoCode: "E02005007"
  },
  {
    en: "Tenterden & Rolvenden",
    geoType: "MSOA",
    geoCode: "E02005008"
  },
  {
    en: "Hamstreet & Isle of Oxney",
    geoType: "MSOA",
    geoCode: "E02005009"
  },
  {
    en: "Herne Bay Parade",
    geoType: "MSOA",
    geoCode: "E02005010"
  },
  {
    en: "Beltinge & Bishopstone",
    geoType: "MSOA",
    geoCode: "E02005011"
  },
  {
    en: "Herne Bay South & Greenhill",
    geoType: "MSOA",
    geoCode: "E02005012"
  },
  {
    en: "Hampton, West End & Swalecliffe",
    geoType: "MSOA",
    geoCode: "E02005013"
  },
  {
    en: "Chestfield & South Tankerton",
    geoType: "MSOA",
    geoCode: "E02005014"
  },
  {
    en: "Herne & Broomfield",
    geoType: "MSOA",
    geoCode: "E02005015"
  },
  {
    en: "Whitstable Central & Tankerton",
    geoType: "MSOA",
    geoCode: "E02005016"
  },
  {
    en: "Whitstable West",
    geoType: "MSOA",
    geoCode: "E02005017"
  },
  {
    en: "Seasalter",
    geoType: "MSOA",
    geoCode: "E02005018"
  },
  {
    en: "Hoath, Hersden & Littlebourne",
    geoType: "MSOA",
    geoCode: "E02005019"
  },
  {
    en: "Sturry and Fordwich",
    geoType: "MSOA",
    geoCode: "E02005020"
  },
  {
    en: "Blean Forest, Chartham Hatch & University",
    geoType: "MSOA",
    geoCode: "E02005021"
  },
  {
    en: "Canterbury St Stephen's",
    geoType: "MSOA",
    geoCode: "E02005022"
  },
  {
    en: "Canterbury Barracks",
    geoType: "MSOA",
    geoCode: "E02005023"
  },
  {
    en: "South Canterbury",
    geoType: "MSOA",
    geoCode: "E02005025"
  },
  {
    en: "Thanington & Chartham",
    geoType: "MSOA",
    geoCode: "E02005026"
  },
  {
    en: "Bridge, Bishopsbourne & Barham",
    geoType: "MSOA",
    geoCode: "E02005027"
  },
  {
    en: "Temple Hill & Marshes",
    geoType: "MSOA",
    geoCode: "E02005028"
  },
  {
    en: "Ebbsfleet & Greenhithe",
    geoType: "MSOA",
    geoCode: "E02005029"
  },
  {
    en: "Central Dartford & West Hill",
    geoType: "MSOA",
    geoCode: "E02005030"
  },
  {
    en: "Swanscombe",
    geoType: "MSOA",
    geoCode: "E02005031"
  },
  {
    en: "Newtown",
    geoType: "MSOA",
    geoCode: "E02005032"
  },
  {
    en: "Stone & Crossways",
    geoType: "MSOA",
    geoCode: "E02005033"
  },
  {
    en: "Heath",
    geoType: "MSOA",
    geoCode: "E02005034"
  },
  {
    en: "Brent & Fleet Estate",
    geoType: "MSOA",
    geoCode: "E02005035"
  },
  {
    en: "Tree Estate",
    geoType: "MSOA",
    geoCode: "E02005036"
  },
  {
    en: "Joydens Wood",
    geoType: "MSOA",
    geoCode: "E02005037"
  },
  {
    en: "Wilmington & Hawley",
    geoType: "MSOA",
    geoCode: "E02005038"
  },
  {
    en: "Bean, Darenth & Sutton at Hone",
    geoType: "MSOA",
    geoCode: "E02005039"
  },
  {
    en: "Longfield, New Barn & Southfleet",
    geoType: "MSOA",
    geoCode: "E02005040"
  },
  {
    en: "Ash & Wingham",
    geoType: "MSOA",
    geoCode: "E02005041"
  },
  {
    en: "Sandwich & Eastry",
    geoType: "MSOA",
    geoCode: "E02005042"
  },
  {
    en: "Deal North & West",
    geoType: "MSOA",
    geoCode: "E02005043"
  },
  {
    en: "Deal East",
    geoType: "MSOA",
    geoCode: "E02005044"
  },
  {
    en: "Mill Hill, Upper Deal & Northbourne",
    geoType: "MSOA",
    geoCode: "E02005045"
  },
  {
    en: "Aylesham & Elvington",
    geoType: "MSOA",
    geoCode: "E02005046"
  },
  {
    en: "Walmer",
    geoType: "MSOA",
    geoCode: "E02005047"
  },
  {
    en: "Eythorne & Shepherdswell",
    geoType: "MSOA",
    geoCode: "E02005048"
  },
  {
    en: "Kingsdown & St Margaret's-at-Cliffe",
    geoType: "MSOA",
    geoCode: "E02005049"
  },
  {
    en: "Kearsney, River & Whitfield",
    geoType: "MSOA",
    geoCode: "E02005050"
  },
  {
    en: "Buckland & St Radigunds",
    geoType: "MSOA",
    geoCode: "E02005051"
  },
  {
    en: "Dover East",
    geoType: "MSOA",
    geoCode: "E02005052"
  },
  {
    en: "Dover West",
    geoType: "MSOA",
    geoCode: "E02005053"
  },
  {
    en: "Elms Vale & Capel-le-Ferne",
    geoType: "MSOA",
    geoCode: "E02005054"
  },
  {
    en: "Northfleet North",
    geoType: "MSOA",
    geoCode: "E02005055"
  },
  {
    en: "Gravesend Town",
    geoType: "MSOA",
    geoCode: "E02005056"
  },
  {
    en: "Milton & Chalk",
    geoType: "MSOA",
    geoCode: "E02005057"
  },
  {
    en: "Perry Street",
    geoType: "MSOA",
    geoCode: "E02005058"
  },
  {
    en: "Windmill Hill",
    geoType: "MSOA",
    geoCode: "E02005059"
  },
  {
    en: "Northfleet South",
    geoType: "MSOA",
    geoCode: "E02005060"
  },
  {
    en: "Westcourt",
    geoType: "MSOA",
    geoCode: "E02005061"
  },
  {
    en: "Riverview Park",
    geoType: "MSOA",
    geoCode: "E02005062"
  },
  {
    en: "Gravesend South & Coldharbour",
    geoType: "MSOA",
    geoCode: "E02005063"
  },
  {
    en: "Higham & Shorne",
    geoType: "MSOA",
    geoCode: "E02005064"
  },
  {
    en: "Singlewell",
    geoType: "MSOA",
    geoCode: "E02005065"
  },
  {
    en: "Istead Rise & Meopham",
    geoType: "MSOA",
    geoCode: "E02005066"
  },
  {
    en: "Sole Street & Vigo",
    geoType: "MSOA",
    geoCode: "E02005067"
  },
  {
    en: "Boxley & Detling",
    geoType: "MSOA",
    geoCode: "E02005068"
  },
  {
    en: "Penenden Heath",
    geoType: "MSOA",
    geoCode: "E02005069"
  },
  {
    en: "Allington",
    geoType: "MSOA",
    geoCode: "E02005070"
  },
  {
    en: "Ringlestone & Central Maidstone",
    geoType: "MSOA",
    geoCode: "E02005071"
  },
  {
    en: "Grove Green",
    geoType: "MSOA",
    geoCode: "E02005072"
  },
  {
    en: "Maidstone West",
    geoType: "MSOA",
    geoCode: "E02005073"
  },
  {
    en: "Bearsted & Downswood",
    geoType: "MSOA",
    geoCode: "E02005074"
  },
  {
    en: "Barming",
    geoType: "MSOA",
    geoCode: "E02005075"
  },
  {
    en: "Tovil",
    geoType: "MSOA",
    geoCode: "E02005076"
  },
  {
    en: "Mote Park",
    geoType: "MSOA",
    geoCode: "E02005077"
  },
  {
    en: "Harrietsham, Hollingbourne & Lenham",
    geoType: "MSOA",
    geoCode: "E02005078"
  },
  {
    en: "Loose Valley & Boughton Monchelsea",
    geoType: "MSOA",
    geoCode: "E02005079"
  },
  {
    en: "Parkwood & Senacre",
    geoType: "MSOA",
    geoCode: "E02005080"
  },
  {
    en: "Yalding & Farleigh",
    geoType: "MSOA",
    geoCode: "E02005081"
  },
  {
    en: "Kingswood, Langley Heath & Chart Sutton",
    geoType: "MSOA",
    geoCode: "E02005082"
  },
  {
    en: "Loose & Coxheath",
    geoType: "MSOA",
    geoCode: "E02005083"
  },
  {
    en: "Headcorn & Sutton Valence",
    geoType: "MSOA",
    geoCode: "E02005084"
  },
  {
    en: "Marden",
    geoType: "MSOA",
    geoCode: "E02005085"
  },
  {
    en: "Staplehurst",
    geoType: "MSOA",
    geoCode: "E02005086"
  },
  {
    en: "Swanley East & Hextable",
    geoType: "MSOA",
    geoCode: "E02005087"
  },
  {
    en: "Swanley West",
    geoType: "MSOA",
    geoCode: "E02005088"
  },
  {
    en: "Swanley South & Crockenhill",
    geoType: "MSOA",
    geoCode: "E02005089"
  },
  {
    en: "Hartley & Hodsoll Street",
    geoType: "MSOA",
    geoCode: "E02005090"
  },
  {
    en: "Darenth Valley",
    geoType: "MSOA",
    geoCode: "E02005091"
  },
  {
    en: "West Kingsdown",
    geoType: "MSOA",
    geoCode: "E02005093"
  },
  {
    en: "Knockholt, Shoreham & Dunton Green",
    geoType: "MSOA",
    geoCode: "E02005094"
  },
  {
    en: "Kemsing & Otford",
    geoType: "MSOA",
    geoCode: "E02005095"
  },
  {
    en: "Sevenoaks North",
    geoType: "MSOA",
    geoCode: "E02005096"
  },
  {
    en: "Sevenoaks West & Chevening",
    geoType: "MSOA",
    geoCode: "E02005097"
  },
  {
    en: "Sevenoaks Town & Weald",
    geoType: "MSOA",
    geoCode: "E02005098"
  },
  {
    en: "Westerham & Brasted",
    geoType: "MSOA",
    geoCode: "E02005099"
  },
  {
    en: "Edenbridge",
    geoType: "MSOA",
    geoCode: "E02005100"
  },
  {
    en: "Hever, Leigh & Penshurst",
    geoType: "MSOA",
    geoCode: "E02005101"
  },
  {
    en: "Lyminge, Densole & Elham",
    geoType: "MSOA",
    geoCode: "E02005102"
  },
  {
    en: "Hawkinge",
    geoType: "MSOA",
    geoCode: "E02005103"
  },
  {
    en: "Folkestone North East",
    geoType: "MSOA",
    geoCode: "E02005104"
  },
  {
    en: "Folkestone Foord",
    geoType: "MSOA",
    geoCode: "E02005105"
  },
  {
    en: "Cheriton & Horn Street",
    geoType: "MSOA",
    geoCode: "E02005106"
  },
  {
    en: "Folkestone Morehall & Sandgate",
    geoType: "MSOA",
    geoCode: "E02005107"
  },
  {
    en: "Saltwood, Seabrook & Etchinghill",
    geoType: "MSOA",
    geoCode: "E02005109"
  },
  {
    en: "Lympne & Palmarsh",
    geoType: "MSOA",
    geoCode: "E02005110"
  },
  {
    en: "Hythe",
    geoType: "MSOA",
    geoCode: "E02005111"
  },
  {
    en: "Dymchurch, St Mary's Bay & Brookland",
    geoType: "MSOA",
    geoCode: "E02005112"
  },
  {
    en: "New Romney",
    geoType: "MSOA",
    geoCode: "E02005113"
  },
  {
    en: "Lydd & Dungeness",
    geoType: "MSOA",
    geoCode: "E02005114"
  },
  {
    en: "Sheerness East",
    geoType: "MSOA",
    geoCode: "E02005115"
  },
  {
    en: "Sheerness West",
    geoType: "MSOA",
    geoCode: "E02005116"
  },
  {
    en: "Minster North",
    geoType: "MSOA",
    geoCode: "E02005117"
  },
  {
    en: "Minster South",
    geoType: "MSOA",
    geoCode: "E02005118"
  },
  {
    en: "Queenborough",
    geoType: "MSOA",
    geoCode: "E02005119"
  },
  {
    en: "Sheppey East",
    geoType: "MSOA",
    geoCode: "E02005120"
  },
  {
    en: "Iwade & Kemsley",
    geoType: "MSOA",
    geoCode: "E02005121"
  },
  {
    en: "Newington, Halstow & Upchurch",
    geoType: "MSOA",
    geoCode: "E02005122"
  },
  {
    en: "Borden & The Meads",
    geoType: "MSOA",
    geoCode: "E02005123"
  },
  {
    en: "Sittingbourne Central & Milton Regis",
    geoType: "MSOA",
    geoCode: "E02005124"
  },
  {
    en: "Sittingbourne East",
    geoType: "MSOA",
    geoCode: "E02005125"
  },
  {
    en: "Sittingbourne West",
    geoType: "MSOA",
    geoCode: "E02005126"
  },
  {
    en: "Sittingbourne South, Bapchild & Bredgar",
    geoType: "MSOA",
    geoCode: "E02005127"
  },
  {
    en: "Faversham West",
    geoType: "MSOA",
    geoCode: "E02005128"
  },
  {
    en: "Faversham East",
    geoType: "MSOA",
    geoCode: "E02005129"
  },
  {
    en: "Teynham & Badlesmere",
    geoType: "MSOA",
    geoCode: "E02005130"
  },
  {
    en: "Boughton & Selling",
    geoType: "MSOA",
    geoCode: "E02005131"
  },
  {
    en: "Cliftonville West",
    geoType: "MSOA",
    geoCode: "E02005132"
  },
  {
    en: "Cliftonville East & Kingsgate",
    geoType: "MSOA",
    geoCode: "E02005133"
  },
  {
    en: "Margate Town",
    geoType: "MSOA",
    geoCode: "E02005134"
  },
  {
    en: "Salmestone",
    geoType: "MSOA",
    geoCode: "E02005135"
  },
  {
    en: "Westbrook & Garlinge",
    geoType: "MSOA",
    geoCode: "E02005136"
  },
  {
    en: "Dane Valley & Northdown Hill",
    geoType: "MSOA",
    geoCode: "E02005137"
  },
  {
    en: "Westgate",
    geoType: "MSOA",
    geoCode: "E02005138"
  },
  {
    en: "Birchington",
    geoType: "MSOA",
    geoCode: "E02005139"
  },
  {
    en: "Broadstairs North",
    geoType: "MSOA",
    geoCode: "E02005140"
  },
  {
    en: "Broadstairs South",
    geoType: "MSOA",
    geoCode: "E02005141"
  },
  {
    en: "Westwood, Northwood & Bromstone",
    geoType: "MSOA",
    geoCode: "E02005142"
  },
  {
    en: "Dumpton",
    geoType: "MSOA",
    geoCode: "E02005143"
  },
  {
    en: "Newington",
    geoType: "MSOA",
    geoCode: "E02005144"
  },
  {
    en: "Minster & St-Nicholas-at-Wade",
    geoType: "MSOA",
    geoCode: "E02005145"
  },
  {
    en: "Ramsgate Ellington",
    geoType: "MSOA",
    geoCode: "E02005146"
  },
  {
    en: "Ramsgate Harbour",
    geoType: "MSOA",
    geoCode: "E02005147"
  },
  {
    en: "Nethercourt, Pegwell & Cliffsend",
    geoType: "MSOA",
    geoCode: "E02005148"
  },
  {
    en: "Aylesford, Wouldham & Blue Bell Hill",
    geoType: "MSOA",
    geoCode: "E02005149"
  },
  {
    en: "Snodland",
    geoType: "MSOA",
    geoCode: "E02005150"
  },
  {
    en: "Larkfield & New Hythe",
    geoType: "MSOA",
    geoCode: "E02005151"
  },
  {
    en: "Ditton",
    geoType: "MSOA",
    geoCode: "E02005153"
  },
  {
    en: "Borough Green, Wrotham & Shipbourne",
    geoType: "MSOA",
    geoCode: "E02005154"
  },
  {
    en: "Kings Hill & Wateringbury",
    geoType: "MSOA",
    geoCode: "E02005155"
  },
  {
    en: "Hadlow & East Peckham",
    geoType: "MSOA",
    geoCode: "E02005156"
  },
  {
    en: "Tonbridge Trench Wood",
    geoType: "MSOA",
    geoCode: "E02005157"
  },
  {
    en: "Hildenborough",
    geoType: "MSOA",
    geoCode: "E02005158"
  },
  {
    en: "Tonbridge Higham Wood",
    geoType: "MSOA",
    geoCode: "E02005159"
  },
  {
    en: "Tonbridge Town",
    geoType: "MSOA",
    geoCode: "E02005160"
  },
  {
    en: "Tonbridge South & Haysden",
    geoType: "MSOA",
    geoCode: "E02005161"
  },
  {
    en: "Paddock Wood & Five Oak Green",
    geoType: "MSOA",
    geoCode: "E02005162"
  },
  {
    en: "Southborough West",
    geoType: "MSOA",
    geoCode: "E02005163"
  },
  {
    en: "Southborough East & Longfield Road",
    geoType: "MSOA",
    geoCode: "E02005164"
  },
  {
    en: "Pembury & Matfield",
    geoType: "MSOA",
    geoCode: "E02005165"
  },
  {
    en: "High Brooms & Sherwood",
    geoType: "MSOA",
    geoCode: "E02005166"
  },
  {
    en: "Langton Green, Speldhurst & Bidborough",
    geoType: "MSOA",
    geoCode: "E02005167"
  },
  {
    en: "Tunbridge Wells West",
    geoType: "MSOA",
    geoCode: "E02005168"
  },
  {
    en: "Tunbridge Wells Central",
    geoType: "MSOA",
    geoCode: "E02005169"
  },
  {
    en: "Ferndale & Hawkenbury",
    geoType: "MSOA",
    geoCode: "E02005170"
  },
  {
    en: "Ramslye & Rusthall",
    geoType: "MSOA",
    geoCode: "E02005171"
  },
  {
    en: "Goudhurst, Horsmonden & Lamberhurst",
    geoType: "MSOA",
    geoCode: "E02005172"
  },
  {
    en: "Tunbridge Wells South",
    geoType: "MSOA",
    geoCode: "E02005173"
  },
  {
    en: "Cranbrook, Sissinghurst & Frittenden",
    geoType: "MSOA",
    geoCode: "E02005174"
  },
  {
    en: "Hawkhurst, Benenden & Sandhurst",
    geoType: "MSOA",
    geoCode: "E02005175"
  },
  {
    en: "Harle Syke & Lanehead",
    geoType: "MSOA",
    geoCode: "E02005176"
  },
  {
    en: "Queensgate",
    geoType: "MSOA",
    geoCode: "E02005177"
  },
  {
    en: "Central Burnley & Daneshouse",
    geoType: "MSOA",
    geoCode: "E02005178"
  },
  {
    en: "Padiham",
    geoType: "MSOA",
    geoCode: "E02005179"
  },
  {
    en: "Habergham & Ightenhill",
    geoType: "MSOA",
    geoCode: "E02005180"
  },
  {
    en: "Whittlefield & Rose Grove",
    geoType: "MSOA",
    geoCode: "E02005181"
  },
  {
    en: "Bank Hall & Fulledge",
    geoType: "MSOA",
    geoCode: "E02005182"
  },
  {
    en: "Brunshaw & Brownside",
    geoType: "MSOA",
    geoCode: "E02005183"
  },
  {
    en: "Cliviger, Worsthorne & Lane Bottom",
    geoType: "MSOA",
    geoCode: "E02005184"
  },
  {
    en: "Barclay Hills & Trinity",
    geoType: "MSOA",
    geoCode: "E02005185"
  },
  {
    en: "Hapton & Lowerhouse",
    geoType: "MSOA",
    geoCode: "E02005186"
  },
  {
    en: "Clayton Brook",
    geoType: "MSOA",
    geoCode: "E02005189"
  },
  {
    en: "Brindle & Withnell",
    geoType: "MSOA",
    geoCode: "E02005190"
  },
  {
    en: "Clayton-le-Woods",
    geoType: "MSOA",
    geoCode: "E02005191"
  },
  {
    en: "Whittle-le-Woods & Anglezarke",
    geoType: "MSOA",
    geoCode: "E02005192"
  },
  {
    en: "Euxton",
    geoType: "MSOA",
    geoCode: "E02005193"
  },
  {
    en: "Chorley North",
    geoType: "MSOA",
    geoCode: "E02005194"
  },
  {
    en: "Croston & Mawdesley",
    geoType: "MSOA",
    geoCode: "E02005195"
  },
  {
    en: "Chorley West",
    geoType: "MSOA",
    geoCode: "E02005196"
  },
  {
    en: "Chorley East",
    geoType: "MSOA",
    geoCode: "E02005197"
  },
  {
    en: "Chorley Town & South",
    geoType: "MSOA",
    geoCode: "E02005198"
  },
  {
    en: "Eccleston & Charnock Richard",
    geoType: "MSOA",
    geoCode: "E02005199"
  },
  {
    en: "Chorley South West",
    geoType: "MSOA",
    geoCode: "E02005200"
  },
  {
    en: "Coppull",
    geoType: "MSOA",
    geoCode: "E02005201"
  },
  {
    en: "Adlington & Rivington",
    geoType: "MSOA",
    geoCode: "E02005202"
  },
  {
    en: "Elswick, Singleton & Weeton",
    geoType: "MSOA",
    geoCode: "E02005203"
  },
  {
    en: "Kirkham & Wesham",
    geoType: "MSOA",
    geoCode: "E02005204"
  },
  {
    en: "Clifton & Newton-with-Scales",
    geoType: "MSOA",
    geoCode: "E02005205"
  },
  {
    en: "St Annes North & Airport",
    geoType: "MSOA",
    geoCode: "E02005206"
  },
  {
    en: "Heyhouses & Park",
    geoType: "MSOA",
    geoCode: "E02005207"
  },
  {
    en: "St Annes Town",
    geoType: "MSOA",
    geoCode: "E02005208"
  },
  {
    en: "Warton & Freckleton",
    geoType: "MSOA",
    geoCode: "E02005209"
  },
  {
    en: "Ansdell & Fairhaven",
    geoType: "MSOA",
    geoCode: "E02005210"
  },
  {
    en: "Lytham",
    geoType: "MSOA",
    geoCode: "E02005211"
  },
  {
    en: "Great Harwood",
    geoType: "MSOA",
    geoCode: "E02005212"
  },
  {
    en: "Clayton-le-Moors & Huncoat",
    geoType: "MSOA",
    geoCode: "E02005213"
  },
  {
    en: "Rishton",
    geoType: "MSOA",
    geoCode: "E02005214"
  },
  {
    en: "Accrington North East",
    geoType: "MSOA",
    geoCode: "E02005215"
  },
  {
    en: "Church",
    geoType: "MSOA",
    geoCode: "E02005216"
  },
  {
    en: "Accrington West",
    geoType: "MSOA",
    geoCode: "E02005217"
  },
  {
    en: "Oswaldtwistle",
    geoType: "MSOA",
    geoCode: "E02005218"
  },
  {
    en: "Accrington South East",
    geoType: "MSOA",
    geoCode: "E02005219"
  },
  {
    en: "Broadfield & Knuzden",
    geoType: "MSOA",
    geoCode: "E02005220"
  },
  {
    en: "Carnforth, Silverdale & Warton",
    geoType: "MSOA",
    geoCode: "E02005221"
  },
  {
    en: "Kellet & Lune Valley",
    geoType: "MSOA",
    geoCode: "E02005222"
  },
  {
    en: "Hest Bank & Bolton-le-Sands",
    geoType: "MSOA",
    geoCode: "E02005223"
  },
  {
    en: "Bare",
    geoType: "MSOA",
    geoCode: "E02005224"
  },
  {
    en: "Halton & Caton",
    geoType: "MSOA",
    geoCode: "E02005225"
  },
  {
    en: "Morecambe Town",
    geoType: "MSOA",
    geoCode: "E02005226"
  },
  {
    en: "Morecambe South West",
    geoType: "MSOA",
    geoCode: "E02005228"
  },
  {
    en: "Morecambe West End",
    geoType: "MSOA",
    geoCode: "E02005229"
  },
  {
    en: "Morecambe Westgate",
    geoType: "MSOA",
    geoCode: "E02005230"
  },
  {
    en: "Skerton & Vale",
    geoType: "MSOA",
    geoCode: "E02005231"
  },
  {
    en: "Lancaster East",
    geoType: "MSOA",
    geoCode: "E02005233"
  },
  {
    en: "Lancaster Central",
    geoType: "MSOA",
    geoCode: "E02005234"
  },
  {
    en: "Moorlands & Greaves",
    geoType: "MSOA",
    geoCode: "E02005235"
  },
  {
    en: "Heysham & Overton",
    geoType: "MSOA",
    geoCode: "E02005236"
  },
  {
    en: "Marsh, Haverbreaks & Scotforth West",
    geoType: "MSOA",
    geoCode: "E02005237"
  },
  {
    en: "Scotforth East & Bowerham",
    geoType: "MSOA",
    geoCode: "E02005238"
  },
  {
    en: "University, Galgate & Dolphinholme",
    geoType: "MSOA",
    geoCode: "E02005239"
  },
  {
    en: "Barnoldswick North",
    geoType: "MSOA",
    geoCode: "E02005240"
  },
  {
    en: "Barnoldswick South",
    geoType: "MSOA",
    geoCode: "E02005241"
  },
  {
    en: "Earby & Salterforth",
    geoType: "MSOA",
    geoCode: "E02005242"
  },
  {
    en: "East Colne, Foulridge & Trawden",
    geoType: "MSOA",
    geoCode: "E02005245"
  },
  {
    en: "Colne Waterside",
    geoType: "MSOA",
    geoCode: "E02005246"
  },
  {
    en: "Barrowford, Higham & Pendleside",
    geoType: "MSOA",
    geoCode: "E02005247"
  },
  {
    en: "Nelson Bradley",
    geoType: "MSOA",
    geoCode: "E02005248"
  },
  {
    en: "Nelson East",
    geoType: "MSOA",
    geoCode: "E02005249"
  },
  {
    en: "Nelson West",
    geoType: "MSOA",
    geoCode: "E02005250"
  },
  {
    en: "Marsden",
    geoType: "MSOA",
    geoCode: "E02005251"
  },
  {
    en: "Brierfield & Reedley",
    geoType: "MSOA",
    geoCode: "E02005252"
  },
  {
    en: "Grimsargh & Goosnargh",
    geoType: "MSOA",
    geoCode: "E02005253"
  },
  {
    en: "Broughton & Wychnor",
    geoType: "MSOA",
    geoCode: "E02005254"
  },
  {
    en: "Fulwood",
    geoType: "MSOA",
    geoCode: "E02005255"
  },
  {
    en: "Longsands",
    geoType: "MSOA",
    geoCode: "E02005256"
  },
  {
    en: "Ingol",
    geoType: "MSOA",
    geoCode: "E02005257"
  },
  {
    en: "Cadley & College",
    geoType: "MSOA",
    geoCode: "E02005258"
  },
  {
    en: "Brookfield & Holme Slack",
    geoType: "MSOA",
    geoCode: "E02005259"
  },
  {
    en: "Haslam Park",
    geoType: "MSOA",
    geoCode: "E02005260"
  },
  {
    en: "Ribbleton",
    geoType: "MSOA",
    geoCode: "E02005261"
  },
  {
    en: "Lea & Marina",
    geoType: "MSOA",
    geoCode: "E02005262"
  },
  {
    en: "Moor Park",
    geoType: "MSOA",
    geoCode: "E02005263"
  },
  {
    en: "Plungington & University",
    geoType: "MSOA",
    geoCode: "E02005264"
  },
  {
    en: "Ashton-on-Ribble & Larches",
    geoType: "MSOA",
    geoCode: "E02005265"
  },
  {
    en: "St Matthew's",
    geoType: "MSOA",
    geoCode: "E02005266"
  },
  {
    en: "St George's",
    geoType: "MSOA",
    geoCode: "E02005267"
  },
  {
    en: "Frenchwood & Fishwick",
    geoType: "MSOA",
    geoCode: "E02005268"
  },
  {
    en: "Preston Town Centre",
    geoType: "MSOA",
    geoCode: "E02005269"
  },
  {
    en: "Waddington, Gisburn & Slaidburn",
    geoType: "MSOA",
    geoCode: "E02005270"
  },
  {
    en: "Clitheroe North",
    geoType: "MSOA",
    geoCode: "E02005271"
  },
  {
    en: "Clitheroe South",
    geoType: "MSOA",
    geoCode: "E02005272"
  },
  {
    en: "Longridge North, Ribchester & Chipping",
    geoType: "MSOA",
    geoCode: "E02005273"
  },
  {
    en: "Read, Sabden & Chatburn",
    geoType: "MSOA",
    geoCode: "E02005274"
  },
  {
    en: "Longridge South",
    geoType: "MSOA",
    geoCode: "E02005275"
  },
  {
    en: "Whalley & Brockhall",
    geoType: "MSOA",
    geoCode: "E02005276"
  },
  {
    en: "Wilpshire & Mellor",
    geoType: "MSOA",
    geoCode: "E02005277"
  },
  {
    en: "Crawshawbooth, Reedsholme & Water",
    geoType: "MSOA",
    geoCode: "E02005278"
  },
  {
    en: "Haslingden",
    geoType: "MSOA",
    geoCode: "E02005279"
  },
  {
    en: "Bacup",
    geoType: "MSOA",
    geoCode: "E02005280"
  },
  {
    en: "Rawtenstall",
    geoType: "MSOA",
    geoCode: "E02005281"
  },
  {
    en: "Helmshore",
    geoType: "MSOA",
    geoCode: "E02005284"
  },
  {
    en: "Townsend Fold & Edenfield",
    geoType: "MSOA",
    geoCode: "E02005285"
  },
  {
    en: "Whitworth",
    geoType: "MSOA",
    geoCode: "E02005286"
  },
  {
    en: "Penwortham North",
    geoType: "MSOA",
    geoCode: "E02005287"
  },
  {
    en: "Gregson Lane & Coupe Green",
    geoType: "MSOA",
    geoCode: "E02005288"
  },
  {
    en: "Penwortham South",
    geoType: "MSOA",
    geoCode: "E02005289"
  },
  {
    en: "Walton-le-Dale",
    geoType: "MSOA",
    geoCode: "E02005290"
  },
  {
    en: "Lower Penwortham North",
    geoType: "MSOA",
    geoCode: "E02005291"
  },
  {
    en: "Lower Penwortham South",
    geoType: "MSOA",
    geoCode: "E02005292"
  },
  {
    en: "Bamber Bridge West",
    geoType: "MSOA",
    geoCode: "E02005293"
  },
  {
    en: "Bamber Bridge East",
    geoType: "MSOA",
    geoCode: "E02005294"
  },
  {
    en: "Lostock Hall",
    geoType: "MSOA",
    geoCode: "E02005295"
  },
  {
    en: "New Longton & Hutton",
    geoType: "MSOA",
    geoCode: "E02005296"
  },
  {
    en: "Longton & Walmer Bridge",
    geoType: "MSOA",
    geoCode: "E02005297"
  },
  {
    en: "Farington",
    geoType: "MSOA",
    geoCode: "E02005298"
  },
  {
    en: "Leyland North",
    geoType: "MSOA",
    geoCode: "E02005299"
  },
  {
    en: "Moss Side",
    geoType: "MSOA",
    geoCode: "E02005300"
  },
  {
    en: "Leyland South West",
    geoType: "MSOA",
    geoCode: "E02005301"
  },
  {
    en: "Leyland South East & Buckshaw Village",
    geoType: "MSOA",
    geoCode: "E02005302"
  },
  {
    en: "Seven Stars",
    geoType: "MSOA",
    geoCode: "E02005303"
  },
  {
    en: "Hesketh Bank & Tarleton",
    geoType: "MSOA",
    geoCode: "E02005304"
  },
  {
    en: "Rufford & Banks",
    geoType: "MSOA",
    geoCode: "E02005305"
  },
  {
    en: "Scarisbrick, Halsall & Haskayne",
    geoType: "MSOA",
    geoCode: "E02005306"
  },
  {
    en: "Burscough",
    geoType: "MSOA",
    geoCode: "E02005307"
  },
  {
    en: "Parbold, Appley Bridge & Wrightington",
    geoType: "MSOA",
    geoCode: "E02005308"
  },
  {
    en: "Ormskirk North & West",
    geoType: "MSOA",
    geoCode: "E02005309"
  },
  {
    en: "Ormskirk Town & East",
    geoType: "MSOA",
    geoCode: "E02005310"
  },
  {
    en: "Bickerstaffe & Newburgh",
    geoType: "MSOA",
    geoCode: "E02005311"
  },
  {
    en: "Skelmersdale Ashurst",
    geoType: "MSOA",
    geoCode: "E02005312"
  },
  {
    en: "Skelmersdale Central",
    geoType: "MSOA",
    geoCode: "E02005313"
  },
  {
    en: "Skelmersdale West",
    geoType: "MSOA",
    geoCode: "E02005314"
  },
  {
    en: "Aughton",
    geoType: "MSOA",
    geoCode: "E02005315"
  },
  {
    en: "Skelmersdale East",
    geoType: "MSOA",
    geoCode: "E02005316"
  },
  {
    en: "Skelmersdale South East",
    geoType: "MSOA",
    geoCode: "E02005317"
  },
  {
    en: "Upholland",
    geoType: "MSOA",
    geoCode: "E02005318"
  },
  {
    en: "Fleetwood Town",
    geoType: "MSOA",
    geoCode: "E02005319"
  },
  {
    en: "Fleetwood Warren",
    geoType: "MSOA",
    geoCode: "E02005320"
  },
  {
    en: "Fleetwood Rossall & Chatsworth",
    geoType: "MSOA",
    geoCode: "E02005321"
  },
  {
    en: "Preesall, Stalmine & Hambleton",
    geoType: "MSOA",
    geoCode: "E02005322"
  },
  {
    en: "Fleetwood South East",
    geoType: "MSOA",
    geoCode: "E02005323"
  },
  {
    en: "Bonds, Bilsborrow & Wyresdale",
    geoType: "MSOA",
    geoCode: "E02005324"
  },
  {
    en: "Garstang & Catterall",
    geoType: "MSOA",
    geoCode: "E02005325"
  },
  {
    en: "Cleveleys West",
    geoType: "MSOA",
    geoCode: "E02005326"
  },
  {
    en: "Pilling, Great Eccleston & Inskip",
    geoType: "MSOA",
    geoCode: "E02005327"
  },
  {
    en: "Cleveleys East",
    geoType: "MSOA",
    geoCode: "E02005328"
  },
  {
    en: "Thornton West",
    geoType: "MSOA",
    geoCode: "E02005329"
  },
  {
    en: "Thornton East & Carleton West",
    geoType: "MSOA",
    geoCode: "E02005330"
  },
  {
    en: "Poulton North & Carleton East",
    geoType: "MSOA",
    geoCode: "E02005331"
  },
  {
    en: "Poulton South",
    geoType: "MSOA",
    geoCode: "E02005332"
  },
  {
    en: "Leicester Forest East",
    geoType: "MSOA",
    geoCode: "E02005334"
  },
  {
    en: "Kirby Muxloe & Thurlaston",
    geoType: "MSOA",
    geoCode: "E02005335"
  },
  {
    en: "Thorpe Astley",
    geoType: "MSOA",
    geoCode: "E02005336"
  },
  {
    en: "Braunstone Town",
    geoType: "MSOA",
    geoCode: "E02005337"
  },
  {
    en: "Enderby & Glen Parva",
    geoType: "MSOA",
    geoCode: "E02005338"
  },
  {
    en: "Narborough",
    geoType: "MSOA",
    geoCode: "E02005339"
  },
  {
    en: "Blaby Village",
    geoType: "MSOA",
    geoCode: "E02005340"
  },
  {
    en: "Whetstone",
    geoType: "MSOA",
    geoCode: "E02005341"
  },
  {
    en: "Cosby, Croft & Elmesthorpe",
    geoType: "MSOA",
    geoCode: "E02005342"
  },
  {
    en: "Countesthorpe & Kilby",
    geoType: "MSOA",
    geoCode: "E02005343"
  },
  {
    en: "Stoney Stanton, Sapcote & Sharnford",
    geoType: "MSOA",
    geoCode: "E02005344"
  },
  {
    en: "Loughborough Dishley & Hathern",
    geoType: "MSOA",
    geoCode: "E02005345"
  },
  {
    en: "Loughborough Lemyngton & Hastings",
    geoType: "MSOA",
    geoCode: "E02005346"
  },
  {
    en: "Loughborough Storer & Queen's Park",
    geoType: "MSOA",
    geoCode: "E02005347"
  },
  {
    en: "Loughborough Garendon",
    geoType: "MSOA",
    geoCode: "E02005348"
  },
  {
    en: "Shepshed West",
    geoType: "MSOA",
    geoCode: "E02005349"
  },
  {
    en: "Shepshed East",
    geoType: "MSOA",
    geoCode: "E02005350"
  },
  {
    en: "Loughborough - University",
    geoType: "MSOA",
    geoCode: "E02005351"
  },
  {
    en: "Wymeswold, Rearsby & Cossington",
    geoType: "MSOA",
    geoCode: "E02005352"
  },
  {
    en: "Loughborough - Shelthorpe & Woodthorpe",
    geoType: "MSOA",
    geoCode: "E02005353"
  },
  {
    en: "Loughborough - Outwoods",
    geoType: "MSOA",
    geoCode: "E02005354"
  },
  {
    en: "Barrow upon Soar",
    geoType: "MSOA",
    geoCode: "E02005355"
  },
  {
    en: "Quorn & Mountsorrel Castle",
    geoType: "MSOA",
    geoCode: "E02005356"
  },
  {
    en: "Sileby",
    geoType: "MSOA",
    geoCode: "E02005357"
  },
  {
    en: "Mountsorrel & Rothley",
    geoType: "MSOA",
    geoCode: "E02005358"
  },
  {
    en: "East Goscote & Queniborough",
    geoType: "MSOA",
    geoCode: "E02005359"
  },
  {
    en: "Thurcaston, Woodhouse & Bradgate",
    geoType: "MSOA",
    geoCode: "E02005360"
  },
  {
    en: "Syston West",
    geoType: "MSOA",
    geoCode: "E02005361"
  },
  {
    en: "Syston East",
    geoType: "MSOA",
    geoCode: "E02005362"
  },
  {
    en: "Birstall Wanlip & Riverside",
    geoType: "MSOA",
    geoCode: "E02005363"
  },
  {
    en: "Birstall Central",
    geoType: "MSOA",
    geoCode: "E02005364"
  },
  {
    en: "Thurmaston",
    geoType: "MSOA",
    geoCode: "E02005365"
  },
  {
    en: "Anstey",
    geoType: "MSOA",
    geoCode: "E02005366"
  },
  {
    en: "Tilton, Billesdon & Great Easton",
    geoType: "MSOA",
    geoCode: "E02005368"
  },
  {
    en: "Kibworth & Great Glen",
    geoType: "MSOA",
    geoCode: "E02005369"
  },
  {
    en: "Broughton Astley",
    geoType: "MSOA",
    geoCode: "E02005370"
  },
  {
    en: "Fleckney, Kilworth & Foxton",
    geoType: "MSOA",
    geoCode: "E02005371"
  },
  {
    en: "Dunton Bassett, Claybrooke & Swinford",
    geoType: "MSOA",
    geoCode: "E02005372"
  },
  {
    en: "Market Harborough West, Great Bowden & Lubenham",
    geoType: "MSOA",
    geoCode: "E02005373"
  },
  {
    en: "Market Harborough Central",
    geoType: "MSOA",
    geoCode: "E02005374"
  },
  {
    en: "Market Harborough South & Little Bowden",
    geoType: "MSOA",
    geoCode: "E02005375"
  },
  {
    en: "Lutterworth",
    geoType: "MSOA",
    geoCode: "E02005376"
  },
  {
    en: "Markfield & Thornton",
    geoType: "MSOA",
    geoCode: "E02005377"
  },
  {
    en: "Groby East",
    geoType: "MSOA",
    geoCode: "E02005378"
  },
  {
    en: "Groby West & Ratby",
    geoType: "MSOA",
    geoCode: "E02005379"
  },
  {
    en: "Market Bosworth, Barlestone & Sheepy Magna",
    geoType: "MSOA",
    geoCode: "E02005380"
  },
  {
    en: "Desford & Newbold Verdon",
    geoType: "MSOA",
    geoCode: "E02005381"
  },
  {
    en: "Earl Shilton",
    geoType: "MSOA",
    geoCode: "E02005382"
  },
  {
    en: "Barwell",
    geoType: "MSOA",
    geoCode: "E02005383"
  },
  {
    en: "Stoke Golding, Higham & Fenny Drayton",
    geoType: "MSOA",
    geoCode: "E02005384"
  },
  {
    en: "Hinckley East",
    geoType: "MSOA",
    geoCode: "E02005385"
  },
  {
    en: "Hinckley Central",
    geoType: "MSOA",
    geoCode: "E02005386"
  },
  {
    en: "Hinckley West",
    geoType: "MSOA",
    geoCode: "E02005387"
  },
  {
    en: "Hinckley Clarendon Park",
    geoType: "MSOA",
    geoCode: "E02005388"
  },
  {
    en: "Burbage St Catherines",
    geoType: "MSOA",
    geoCode: "E02005389"
  },
  {
    en: "Burbage Sketchley & Stretton",
    geoType: "MSOA",
    geoCode: "E02005390"
  },
  {
    en: "Bottesford, Harby & Croxton Kerrial",
    geoType: "MSOA",
    geoCode: "E02005391"
  },
  {
    en: "Melton Mowbray North",
    geoType: "MSOA",
    geoCode: "E02005392"
  },
  {
    en: "Asfordby, Frisby & Old Dalby",
    geoType: "MSOA",
    geoCode: "E02005393"
  },
  {
    en: "Melton Mowbray West",
    geoType: "MSOA",
    geoCode: "E02005394"
  },
  {
    en: "Melton Mowbray South",
    geoType: "MSOA",
    geoCode: "E02005395"
  },
  {
    en: "Waltham, Wymondham & Great Dalby",
    geoType: "MSOA",
    geoCode: "E02005396"
  },
  {
    en: "Castle Donington",
    geoType: "MSOA",
    geoCode: "E02005397"
  },
  {
    en: "Kegworth & Belton",
    geoType: "MSOA",
    geoCode: "E02005398"
  },
  {
    en: "Ashby de la Zouch North",
    geoType: "MSOA",
    geoCode: "E02005399"
  },
  {
    en: "Thringstone & Swannington",
    geoType: "MSOA",
    geoCode: "E02005400"
  },
  {
    en: "Packington, Ravenstone & Coleorton",
    geoType: "MSOA",
    geoCode: "E02005401"
  },
  {
    en: "Ashby de la Zouch South",
    geoType: "MSOA",
    geoCode: "E02005402"
  },
  {
    en: "Whitwick",
    geoType: "MSOA",
    geoCode: "E02005403"
  },
  {
    en: "Donisthope & Blackfordby",
    geoType: "MSOA",
    geoCode: "E02005404"
  },
  {
    en: "Agar Nook",
    geoType: "MSOA",
    geoCode: "E02005405"
  },
  {
    en: "Coalville",
    geoType: "MSOA",
    geoCode: "E02005406"
  },
  {
    en: "Hugglescote & Bardon Hill",
    geoType: "MSOA",
    geoCode: "E02005407"
  },
  {
    en: "Measham & Appleby Magna",
    geoType: "MSOA",
    geoCode: "E02005408"
  },
  {
    en: "Ibstock & Ellistown",
    geoType: "MSOA",
    geoCode: "E02005409"
  },
  {
    en: "Oadby South & West",
    geoType: "MSOA",
    geoCode: "E02005412"
  },
  {
    en: "Wigston Town",
    geoType: "MSOA",
    geoCode: "E02005414"
  },
  {
    en: "South Wigston",
    geoType: "MSOA",
    geoCode: "E02005415"
  },
  {
    en: "Wigston Harcourt & Little Hill",
    geoType: "MSOA",
    geoCode: "E02005416"
  },
  {
    en: "Leake & Butterwick",
    geoType: "MSOA",
    geoCode: "E02005417"
  },
  {
    en: "Fenside & Lister Way",
    geoType: "MSOA",
    geoCode: "E02005418"
  },
  {
    en: "Boston Central & North",
    geoType: "MSOA",
    geoCode: "E02005419"
  },
  {
    en: "Skirbeck",
    geoType: "MSOA",
    geoCode: "E02005420"
  },
  {
    en: "Swineshead, Bicker & Holland Fen",
    geoType: "MSOA",
    geoCode: "E02005422"
  },
  {
    en: "Kirton, Frampton & Algarkirk",
    geoType: "MSOA",
    geoCode: "E02005423"
  },
  {
    en: "Holton-le-Clay, Binbrook & Tetney",
    geoType: "MSOA",
    geoCode: "E02005424"
  },
  {
    en: "Marshchapel, Somercotes & Grimoldby",
    geoType: "MSOA",
    geoCode: "E02005425"
  },
  {
    en: "Louth North & East",
    geoType: "MSOA",
    geoCode: "E02005426"
  },
  {
    en: "Louth Central & South",
    geoType: "MSOA",
    geoCode: "E02005427"
  },
  {
    en: "Mablethorpe",
    geoType: "MSOA",
    geoCode: "E02005428"
  },
  {
    en: "Sutton-on-Sea",
    geoType: "MSOA",
    geoCode: "E02005429"
  },
  {
    en: "Wragby, Roughton & Ludford",
    geoType: "MSOA",
    geoCode: "E02005430"
  },
  {
    en: "Alford, Withern & Willoughby",
    geoType: "MSOA",
    geoCode: "E02005431"
  },
  {
    en: "Little Cawthorpe & South Wolds",
    geoType: "MSOA",
    geoCode: "E02005432"
  },
  {
    en: "Ingoldmells & Chapel St Leonards",
    geoType: "MSOA",
    geoCode: "E02005433"
  },
  {
    en: "Horncastle",
    geoType: "MSOA",
    geoCode: "E02005434"
  },
  {
    en: "Skegness North",
    geoType: "MSOA",
    geoCode: "E02005435"
  },
  {
    en: "Spilsby & Burgh le Marsh",
    geoType: "MSOA",
    geoCode: "E02005436"
  },
  {
    en: "Skegness Town",
    geoType: "MSOA",
    geoCode: "E02005437"
  },
  {
    en: "Skegness South",
    geoType: "MSOA",
    geoCode: "E02005438"
  },
  {
    en: "Coningsby & Woodhall Spa",
    geoType: "MSOA",
    geoCode: "E02005439"
  },
  {
    en: "Wainfleet All Saints",
    geoType: "MSOA",
    geoCode: "E02005440"
  },
  {
    en: "Mareham, Sibsey & New Leake",
    geoType: "MSOA",
    geoCode: "E02005441"
  },
  {
    en: "Ermine",
    geoType: "MSOA",
    geoCode: "E02005442"
  },
  {
    en: "Glebe Park",
    geoType: "MSOA",
    geoCode: "E02005443"
  },
  {
    en: "Cathedral & West Common",
    geoType: "MSOA",
    geoCode: "E02005444"
  },
  {
    en: "Monks Road, St Giles & Greetwell",
    geoType: "MSOA",
    geoCode: "E02005445"
  },
  {
    en: "Wharf & University",
    geoType: "MSOA",
    geoCode: "E02005446"
  },
  {
    en: "Pelham Bridge & South Common",
    geoType: "MSOA",
    geoCode: "E02005447"
  },
  {
    en: "Birchwood West",
    geoType: "MSOA",
    geoCode: "E02005448"
  },
  {
    en: "Boultham & New Boultham",
    geoType: "MSOA",
    geoCode: "E02005449"
  },
  {
    en: "Hartsholme & Birchwood East",
    geoType: "MSOA",
    geoCode: "E02005450"
  },
  {
    en: "Bracebridge North & Boultham Moor",
    geoType: "MSOA",
    geoCode: "E02005451"
  },
  {
    en: "Bracebridge South & Swallow Beck",
    geoType: "MSOA",
    geoCode: "E02005452"
  },
  {
    en: "Washingborough & Branston",
    geoType: "MSOA",
    geoCode: "E02005453"
  },
  {
    en: "Skellingthorpe, Witham & Bassingham",
    geoType: "MSOA",
    geoCode: "E02005455"
  },
  {
    en: "Bracebridge Heath & Waddington",
    geoType: "MSOA",
    geoCode: "E02005456"
  },
  {
    en: "Metheringham, Nocton & Potterhanworth",
    geoType: "MSOA",
    geoCode: "E02005457"
  },
  {
    en: "Navenby, Harmston & Brant Broughton",
    geoType: "MSOA",
    geoCode: "E02005458"
  },
  {
    en: "Ruskington North & Billinghay",
    geoType: "MSOA",
    geoCode: "E02005459"
  },
  {
    en: "Ruskington West & Cranwell",
    geoType: "MSOA",
    geoCode: "E02005460"
  },
  {
    en: "Ruskington South, Leasingham & Osbournby",
    geoType: "MSOA",
    geoCode: "E02005461"
  },
  {
    en: "Sleaford East",
    geoType: "MSOA",
    geoCode: "E02005462"
  },
  {
    en: "Sleaford West",
    geoType: "MSOA",
    geoCode: "E02005463"
  },
  {
    en: "Heckington",
    geoType: "MSOA",
    geoCode: "E02005464"
  },
  {
    en: "Donington, Quadring & Gosberton",
    geoType: "MSOA",
    geoCode: "E02005465"
  },
  {
    en: "Long Sutton West, Gedney & Holbeach Hurn",
    geoType: "MSOA",
    geoCode: "E02005466"
  },
  {
    en: "Holbeach",
    geoType: "MSOA",
    geoCode: "E02005467"
  },
  {
    en: "Moulton, Weston & Whaplode",
    geoType: "MSOA",
    geoCode: "E02005468"
  },
  {
    en: "Pinchbeck & Deeping St Nicholas",
    geoType: "MSOA",
    geoCode: "E02005469"
  },
  {
    en: "Spalding North",
    geoType: "MSOA",
    geoCode: "E02005470"
  },
  {
    en: "Spalding East",
    geoType: "MSOA",
    geoCode: "E02005471"
  },
  {
    en: "Long Sutton East & Sutton Bridge",
    geoType: "MSOA",
    geoCode: "E02005472"
  },
  {
    en: "Spalding South West",
    geoType: "MSOA",
    geoCode: "E02005473"
  },
  {
    en: "Fleet Hargate & Holbeach St Johns",
    geoType: "MSOA",
    geoCode: "E02005474"
  },
  {
    en: "Crowland & Cowbit",
    geoType: "MSOA",
    geoCode: "E02005475"
  },
  {
    en: "Ancaster, Caythorpe & Claypole",
    geoType: "MSOA",
    geoCode: "E02005476"
  },
  {
    en: "Long Bennington, Allington & Barrowby",
    geoType: "MSOA",
    geoCode: "E02005477"
  },
  {
    en: "Grantham North East",
    geoType: "MSOA",
    geoCode: "E02005478"
  },
  {
    en: "Grantham North West",
    geoType: "MSOA",
    geoCode: "E02005479"
  },
  {
    en: "Grantham South West",
    geoType: "MSOA",
    geoCode: "E02005480"
  },
  {
    en: "Grantham South East",
    geoType: "MSOA",
    geoCode: "E02005481"
  },
  {
    en: "Corby Glen, Ropsley & Grantham Outskirts",
    geoType: "MSOA",
    geoCode: "E02005482"
  },
  {
    en: "Morton & Billingborough",
    geoType: "MSOA",
    geoCode: "E02005483"
  },
  {
    en: "Harlaxton, Colsterworth & South Witham",
    geoType: "MSOA",
    geoCode: "E02005484"
  },
  {
    en: "Bourne West",
    geoType: "MSOA",
    geoCode: "E02005485"
  },
  {
    en: "Bourne East",
    geoType: "MSOA",
    geoCode: "E02005486"
  },
  {
    en: "Langtoft, Thurlby & Uffington",
    geoType: "MSOA",
    geoCode: "E02005487"
  },
  {
    en: "Market Deeping",
    geoType: "MSOA",
    geoCode: "E02005488"
  },
  {
    en: "Deeping St James & Frognall",
    geoType: "MSOA",
    geoCode: "E02005489"
  },
  {
    en: "Stamford North",
    geoType: "MSOA",
    geoCode: "E02005490"
  },
  {
    en: "Stamford Central, West and South",
    geoType: "MSOA",
    geoCode: "E02005491"
  },
  {
    en: "Caistor, Kelsey & Keelby",
    geoType: "MSOA",
    geoCode: "E02005492"
  },
  {
    en: "Morton, Blyton & Scotter",
    geoType: "MSOA",
    geoCode: "E02005493"
  },
  {
    en: "Market Rasen & Brookenby",
    geoType: "MSOA",
    geoCode: "E02005494"
  },
  {
    en: "Gainsborough West",
    geoType: "MSOA",
    geoCode: "E02005495"
  },
  {
    en: "Hemswell & Spital",
    geoType: "MSOA",
    geoCode: "E02005496"
  },
  {
    en: "Gainsborough East",
    geoType: "MSOA",
    geoCode: "E02005497"
  },
  {
    en: "Torksey & Stow",
    geoType: "MSOA",
    geoCode: "E02005498"
  },
  {
    en: "Dunholme & Welton",
    geoType: "MSOA",
    geoCode: "E02005499"
  },
  {
    en: "Saxilby & Scampton",
    geoType: "MSOA",
    geoCode: "E02005500"
  },
  {
    en: "Nettleham, Sudbrooke & Scothern",
    geoType: "MSOA",
    geoCode: "E02005501"
  },
  {
    en: "Cherry Willingham & Bardney",
    geoType: "MSOA",
    geoCode: "E02005502"
  },
  {
    en: "Bawdeswell, Swanton Morley & North Elmham",
    geoType: "MSOA",
    geoCode: "E02005503"
  },
  {
    en: "Whissonsett, Litcham & Narborough",
    geoType: "MSOA",
    geoCode: "E02005504"
  },
  {
    en: "Dereham North & Neatherd",
    geoType: "MSOA",
    geoCode: "E02005505"
  },
  {
    en: "Dereham West, Necton & Gressenhall",
    geoType: "MSOA",
    geoCode: "E02005506"
  },
  {
    en: "Dereham Central & Toftwood",
    geoType: "MSOA",
    geoCode: "E02005507"
  },
  {
    en: "Hockering, Mattishall & Cranworth",
    geoType: "MSOA",
    geoCode: "E02005508"
  },
  {
    en: "Swaffham",
    geoType: "MSOA",
    geoCode: "E02005509"
  },
  {
    en: "Shipdham, Bradenham & Saham Toney",
    geoType: "MSOA",
    geoCode: "E02005510"
  },
  {
    en: "Watton",
    geoType: "MSOA",
    geoCode: "E02005511"
  },
  {
    en: "Wayland, Ellingham & Great Hockham",
    geoType: "MSOA",
    geoCode: "E02005512"
  },
  {
    en: "Attleborough",
    geoType: "MSOA",
    geoCode: "E02005513"
  },
  {
    en: "Mundford, Weeting & Forest",
    geoType: "MSOA",
    geoCode: "E02005514"
  },
  {
    en: "Buckenhams & Snetterton",
    geoType: "MSOA",
    geoCode: "E02005515"
  },
  {
    en: "East Harling, Garboldisham & Kenninghall",
    geoType: "MSOA",
    geoCode: "E02005516"
  },
  {
    en: "Thetford North",
    geoType: "MSOA",
    geoCode: "E02005517"
  },
  {
    en: "Thetford Central & East",
    geoType: "MSOA",
    geoCode: "E02005518"
  },
  {
    en: "Thetford South",
    geoType: "MSOA",
    geoCode: "E02005519"
  },
  {
    en: "Aylsham",
    geoType: "MSOA",
    geoCode: "E02005520"
  },
  {
    en: "Reepham, Cawston & Lenwade",
    geoType: "MSOA",
    geoCode: "E02005521"
  },
  {
    en: "Coltishall, Buxton & Frettenham",
    geoType: "MSOA",
    geoCode: "E02005522"
  },
  {
    en: "Horsford, Hainford & Hevingham",
    geoType: "MSOA",
    geoCode: "E02005523"
  },
  {
    en: "Spixworth & St Faiths",
    geoType: "MSOA",
    geoCode: "E02005524"
  },
  {
    en: "Taverham",
    geoType: "MSOA",
    geoCode: "E02005525"
  },
  {
    en: "Drayton & Thorpe Marriott",
    geoType: "MSOA",
    geoCode: "E02005526"
  },
  {
    en: "Wroxham, Rackheath & the Plumsteads",
    geoType: "MSOA",
    geoCode: "E02005527"
  },
  {
    en: "Old Catton",
    geoType: "MSOA",
    geoCode: "E02005528"
  },
  {
    en: "Hellesdon North West",
    geoType: "MSOA",
    geoCode: "E02005529"
  },
  {
    en: "Hellesdon South East",
    geoType: "MSOA",
    geoCode: "E02005530"
  },
  {
    en: "Sprowston Central",
    geoType: "MSOA",
    geoCode: "E02005531"
  },
  {
    en: "Sprowston East",
    geoType: "MSOA",
    geoCode: "E02005532"
  },
  {
    en: "Blofield, Lingwood & Upton",
    geoType: "MSOA",
    geoCode: "E02005533"
  },
  {
    en: "Thorpe St Andrew North",
    geoType: "MSOA",
    geoCode: "E02005534"
  },
  {
    en: "Thorpe St Andrew South & Dussindale",
    geoType: "MSOA",
    geoCode: "E02005535"
  },
  {
    en: "Brundall & Cantley",
    geoType: "MSOA",
    geoCode: "E02005536"
  },
  {
    en: "Acle & Reedham",
    geoType: "MSOA",
    geoCode: "E02005537"
  },
  {
    en: "Hemsby & Ormesby",
    geoType: "MSOA",
    geoCode: "E02005538"
  },
  {
    en: "Fleggburgh, Rollesby & Martham",
    geoType: "MSOA",
    geoCode: "E02005539"
  },
  {
    en: "Caister on Sea",
    geoType: "MSOA",
    geoCode: "E02005540"
  },
  {
    en: "Yarmouth North",
    geoType: "MSOA",
    geoCode: "E02005541"
  },
  {
    en: "Yarmouth Central & Northgate",
    geoType: "MSOA",
    geoCode: "E02005542"
  },
  {
    en: "Yarmouth Parade",
    geoType: "MSOA",
    geoCode: "E02005543"
  },
  {
    en: "Southtown & Cobholm",
    geoType: "MSOA",
    geoCode: "E02005544"
  },
  {
    en: "Bradwell North",
    geoType: "MSOA",
    geoCode: "E02005545"
  },
  {
    en: "Gorleston North",
    geoType: "MSOA",
    geoCode: "E02005546"
  },
  {
    en: "Gorleston South & Beach",
    geoType: "MSOA",
    geoCode: "E02005547"
  },
  {
    en: "Gorleston West",
    geoType: "MSOA",
    geoCode: "E02005548"
  },
  {
    en: "Belton",
    geoType: "MSOA",
    geoCode: "E02005549"
  },
  {
    en: "Bradwell South & Hopton",
    geoType: "MSOA",
    geoCode: "E02005550"
  },
  {
    en: "Hunstanton",
    geoType: "MSOA",
    geoCode: "E02005551"
  },
  {
    en: "Brancaster, Burnham Market & Docking",
    geoType: "MSOA",
    geoCode: "E02005552"
  },
  {
    en: "Heacham & Snettisham",
    geoType: "MSOA",
    geoCode: "E02005553"
  },
  {
    en: "Dersingham, Sandringham & Massingham",
    geoType: "MSOA",
    geoCode: "E02005554"
  },
  {
    en: "Wootton",
    geoType: "MSOA",
    geoCode: "E02005555"
  },
  {
    en: "Gaywood North Bank",
    geoType: "MSOA",
    geoCode: "E02005556"
  },
  {
    en: "North Lynn",
    geoType: "MSOA",
    geoCode: "E02005557"
  },
  {
    en: "Terrington & Clenchwarton",
    geoType: "MSOA",
    geoCode: "E02005558"
  },
  {
    en: "Gaywood Chase & Old Gaywood",
    geoType: "MSOA",
    geoCode: "E02005559"
  },
  {
    en: "Fairstead & Springwood",
    geoType: "MSOA",
    geoCode: "E02005560"
  },
  {
    en: "Town, South Lynn & West Lynn",
    geoType: "MSOA",
    geoCode: "E02005561"
  },
  {
    en: "Grimston, Gayton & East Winch",
    geoType: "MSOA",
    geoCode: "E02005562"
  },
  {
    en: "Marshland, Walpole & Walton",
    geoType: "MSOA",
    geoCode: "E02005563"
  },
  {
    en: "West Winch, Marham & Shouldham",
    geoType: "MSOA",
    geoCode: "E02005564"
  },
  {
    en: "Watlington, Wiggenhall & Terrington St John",
    geoType: "MSOA",
    geoCode: "E02005565"
  },
  {
    en: "Upwell, Delph & Emneth",
    geoType: "MSOA",
    geoCode: "E02005566"
  },
  {
    en: "Downham Market",
    geoType: "MSOA",
    geoCode: "E02005567"
  },
  {
    en: "Stoke Ferry, Hilgay & Wimbotsham",
    geoType: "MSOA",
    geoCode: "E02005568"
  },
  {
    en: "Southery, Feltwell & Hockwold",
    geoType: "MSOA",
    geoCode: "E02005569"
  },
  {
    en: "Sheringham",
    geoType: "MSOA",
    geoCode: "E02005570"
  },
  {
    en: "Wells & Blakeney",
    geoType: "MSOA",
    geoCode: "E02005571"
  },
  {
    en: "Cromer",
    geoType: "MSOA",
    geoCode: "E02005572"
  },
  {
    en: "Holt & Weybourne",
    geoType: "MSOA",
    geoCode: "E02005573"
  },
  {
    en: "Overstrand, Roughton & the Runtons",
    geoType: "MSOA",
    geoCode: "E02005574"
  },
  {
    en: "Beeston Regis, Saxthorpe & Aldborough",
    geoType: "MSOA",
    geoCode: "E02005575"
  },
  {
    en: "Mundesley, Trunch & Bacton",
    geoType: "MSOA",
    geoCode: "E02005576"
  },
  {
    en: "Melton Constable, Briston & Little Snoring",
    geoType: "MSOA",
    geoCode: "E02005577"
  },
  {
    en: "Walsingham & Raynham",
    geoType: "MSOA",
    geoCode: "E02005578"
  },
  {
    en: "Fakenham",
    geoType: "MSOA",
    geoCode: "E02005580"
  },
  {
    en: "Felmingham, Worstead & Happisburgh",
    geoType: "MSOA",
    geoCode: "E02005581"
  },
  {
    en: "Stalham & Sea Palling",
    geoType: "MSOA",
    geoCode: "E02005582"
  },
  {
    en: "Hoveton, Horning & Potter Heigham",
    geoType: "MSOA",
    geoCode: "E02005583"
  },
  {
    en: "Catton Grove & Airport",
    geoType: "MSOA",
    geoCode: "E02005584"
  },
  {
    en: "Mile Cross",
    geoType: "MSOA",
    geoCode: "E02005585"
  },
  {
    en: "New Catton & Mousehold North",
    geoType: "MSOA",
    geoCode: "E02005586"
  },
  {
    en: "Heartsease & Pilling Park",
    geoType: "MSOA",
    geoCode: "E02005587"
  },
  {
    en: "Bowthorpe & West Earlham",
    geoType: "MSOA",
    geoCode: "E02005588"
  },
  {
    en: "Earlham",
    geoType: "MSOA",
    geoCode: "E02005589"
  },
  {
    en: "Earlham Road & College Road",
    geoType: "MSOA",
    geoCode: "E02005592"
  },
  {
    en: "University & Avenues",
    geoType: "MSOA",
    geoCode: "E02005593"
  },
  {
    en: "Town Close",
    geoType: "MSOA",
    geoCode: "E02005594"
  },
  {
    en: "Eaton",
    geoType: "MSOA",
    geoCode: "E02005595"
  },
  {
    en: "Lakenham & Tuckswood",
    geoType: "MSOA",
    geoCode: "E02005596"
  },
  {
    en: "Cringleford, Little Melton & Easton",
    geoType: "MSOA",
    geoCode: "E02005598"
  },
  {
    en: "Hethersett",
    geoType: "MSOA",
    geoCode: "E02005599"
  },
  {
    en: "Hingham, Morley & Barnham Broom",
    geoType: "MSOA",
    geoCode: "E02005600"
  },
  {
    en: "Wymondham West",
    geoType: "MSOA",
    geoCode: "E02005601"
  },
  {
    en: "Trowse, Poringland & Stoke Holy Cross",
    geoType: "MSOA",
    geoCode: "E02005602"
  },
  {
    en: "Wymondham East & Spooner Row",
    geoType: "MSOA",
    geoCode: "E02005603"
  },
  {
    en: "Loddon, Surlingham & Alpington",
    geoType: "MSOA",
    geoCode: "E02005604"
  },
  {
    en: "Mulbarton, Tasburgh & Saxlingham Nethergate",
    geoType: "MSOA",
    geoCode: "E02005605"
  },
  {
    en: "Thurlton, Haddiscoe & Geldeston",
    geoType: "MSOA",
    geoCode: "E02005606"
  },
  {
    en: "Long Stratton, Carlton Rode & Tibenham",
    geoType: "MSOA",
    geoCode: "E02005607"
  },
  {
    en: "Hempnall, Ditchingham & Wortwell",
    geoType: "MSOA",
    geoCode: "E02005608"
  },
  {
    en: "Harleston & Pulham",
    geoType: "MSOA",
    geoCode: "E02005609"
  },
  {
    en: "Scole, Dickleburgh & Bressingham",
    geoType: "MSOA",
    geoCode: "E02005610"
  },
  {
    en: "Diss & Roydon",
    geoType: "MSOA",
    geoCode: "E02005611"
  },
  {
    en: "Rowlett, Gretton & Cottingham",
    geoType: "MSOA",
    geoCode: "E02005612"
  },
  {
    en: "Corby North",
    geoType: "MSOA",
    geoCode: "E02005613"
  },
  {
    en: "Corby Village & Weldon",
    geoType: "MSOA",
    geoCode: "E02005614"
  },
  {
    en: "Corby Lodge Park",
    geoType: "MSOA",
    geoCode: "E02005615"
  },
  {
    en: "Corby Town",
    geoType: "MSOA",
    geoCode: "E02005616"
  },
  {
    en: "Corby Kingswood",
    geoType: "MSOA",
    geoCode: "E02005617"
  },
  {
    en: "Clipston, Naseby & Yelvertoft",
    geoType: "MSOA",
    geoCode: "E02005619"
  },
  {
    en: "Brixworth & Spratton",
    geoType: "MSOA",
    geoCode: "E02005620"
  },
  {
    en: "Braunston & Crick",
    geoType: "MSOA",
    geoCode: "E02005621"
  },
  {
    en: "Long Buckby East & Ravensthorpe",
    geoType: "MSOA",
    geoCode: "E02005622"
  },
  {
    en: "Walgrave & Moulton",
    geoType: "MSOA",
    geoCode: "E02005623"
  },
  {
    en: "Daventry North",
    geoType: "MSOA",
    geoCode: "E02005624"
  },
  {
    en: "Daventry Central",
    geoType: "MSOA",
    geoCode: "E02005625"
  },
  {
    en: "Daventry South & Southbrook",
    geoType: "MSOA",
    geoCode: "E02005626"
  },
  {
    en: "Long Buckby West & Weedon",
    geoType: "MSOA",
    geoCode: "E02005627"
  },
  {
    en: "Woodford Halse, Byfield & Staverton",
    geoType: "MSOA",
    geoCode: "E02005628"
  },
  {
    en: "King's Cliffe, Woodnewton & Easton",
    geoType: "MSOA",
    geoCode: "E02005629"
  },
  {
    en: "Oundle, Warmington & Titchmarsh",
    geoType: "MSOA",
    geoCode: "E02005630"
  },
  {
    en: "Thrapston & Brigstock",
    geoType: "MSOA",
    geoCode: "E02005631"
  },
  {
    en: "Ringstead, Woodford & Stanwick",
    geoType: "MSOA",
    geoCode: "E02005632"
  },
  {
    en: "Raunds",
    geoType: "MSOA",
    geoCode: "E02005633"
  },
  {
    en: "Irthlingborough",
    geoType: "MSOA",
    geoCode: "E02005634"
  },
  {
    en: "Higham Ferrers",
    geoType: "MSOA",
    geoCode: "E02005635"
  },
  {
    en: "Rushden West & North",
    geoType: "MSOA",
    geoCode: "E02005636"
  },
  {
    en: "Rushden East",
    geoType: "MSOA",
    geoCode: "E02005637"
  },
  {
    en: "Rushden South",
    geoType: "MSOA",
    geoCode: "E02005638"
  },
  {
    en: "Geddington, Rushton & Stoke Albany",
    geoType: "MSOA",
    geoCode: "E02005639"
  },
  {
    en: "Desborough",
    geoType: "MSOA",
    geoCode: "E02005640"
  },
  {
    en: "Rothwell",
    geoType: "MSOA",
    geoCode: "E02005641"
  },
  {
    en: "Kettering Brambleside",
    geoType: "MSOA",
    geoCode: "E02005642"
  },
  {
    en: "Kettering Avondale Grange",
    geoType: "MSOA",
    geoCode: "E02005643"
  },
  {
    en: "Kettering Central East",
    geoType: "MSOA",
    geoCode: "E02005644"
  },
  {
    en: "Kettering Town & West",
    geoType: "MSOA",
    geoCode: "E02005645"
  },
  {
    en: "Kettering East",
    geoType: "MSOA",
    geoCode: "E02005646"
  },
  {
    en: "Kettering South",
    geoType: "MSOA",
    geoCode: "E02005647"
  },
  {
    en: "Barton Seagrave",
    geoType: "MSOA",
    geoCode: "E02005648"
  },
  {
    en: "Boughton",
    geoType: "MSOA",
    geoCode: "E02005650"
  },
  {
    en: "Moulton",
    geoType: "MSOA",
    geoCode: "E02005651"
  },
  {
    en: "Sunnyside",
    geoType: "MSOA",
    geoCode: "E02005652"
  },
  {
    en: "Thorplands & Round Spinney",
    geoType: "MSOA",
    geoCode: "E02005653"
  },
  {
    en: "Overstone Lodge & Rectory Farm",
    geoType: "MSOA",
    geoCode: "E02005654"
  },
  {
    en: "Boothville & Spinney Hill",
    geoType: "MSOA",
    geoCode: "E02005655"
  },
  {
    en: "Blackthorn & Lings",
    geoType: "MSOA",
    geoCode: "E02005656"
  },
  {
    en: "Kingsthorpe",
    geoType: "MSOA",
    geoCode: "E02005657"
  },
  {
    en: "St David's",
    geoType: "MSOA",
    geoCode: "E02005658"
  },
  {
    en: "Westone",
    geoType: "MSOA",
    geoCode: "E02005659"
  },
  {
    en: "Billing & Riverside",
    geoType: "MSOA",
    geoCode: "E02005660"
  },
  {
    en: "Eastfield",
    geoType: "MSOA",
    geoCode: "E02005661"
  },
  {
    en: "Phippsville",
    geoType: "MSOA",
    geoCode: "E02005662"
  },
  {
    en: "New Duston West",
    geoType: "MSOA",
    geoCode: "E02005663"
  },
  {
    en: "Kingsley Park & Racecourse",
    geoType: "MSOA",
    geoCode: "E02005664"
  },
  {
    en: "Little Billing",
    geoType: "MSOA",
    geoCode: "E02005665"
  },
  {
    en: "King's Heath & Spencer",
    geoType: "MSOA",
    geoCode: "E02005666"
  },
  {
    en: "Lodge Farm",
    geoType: "MSOA",
    geoCode: "E02005667"
  },
  {
    en: "New Duston East",
    geoType: "MSOA",
    geoCode: "E02005668"
  },
  {
    en: "Abington Vale",
    geoType: "MSOA",
    geoCode: "E02005669"
  },
  {
    en: "Town Centre & Semilong",
    geoType: "MSOA",
    geoCode: "E02005670"
  },
  {
    en: "Abington",
    geoType: "MSOA",
    geoCode: "E02005671"
  },
  {
    en: "St Michael's Road",
    geoType: "MSOA",
    geoCode: "E02005672"
  },
  {
    en: "Stornton & Sixfields",
    geoType: "MSOA",
    geoCode: "E02005673"
  },
  {
    en: "Cliftonville & Rushmere",
    geoType: "MSOA",
    geoCode: "E02005674"
  },
  {
    en: "Briar Hill & Hunsbury Hill",
    geoType: "MSOA",
    geoCode: "E02005675"
  },
  {
    en: "Delapre",
    geoType: "MSOA",
    geoCode: "E02005676"
  },
  {
    en: "Cotton End, Brackmills & Hardingstone",
    geoType: "MSOA",
    geoCode: "E02005677"
  },
  {
    en: "East Hunsbury",
    geoType: "MSOA",
    geoCode: "E02005679"
  },
  {
    en: "Wootton & Collingtree",
    geoType: "MSOA",
    geoCode: "E02005680"
  },
  {
    en: "Harpole, Kislingbury & Bugbrooke",
    geoType: "MSOA",
    geoCode: "E02005681"
  },
  {
    en: "Cogenhoe, Hackleton & Denton",
    geoType: "MSOA",
    geoCode: "E02005682"
  },
  {
    en: "Blisworth, Roade & Yardley Gobion",
    geoType: "MSOA",
    geoCode: "E02005683"
  },
  {
    en: "Towcester West & Blakesley",
    geoType: "MSOA",
    geoCode: "E02005684"
  },
  {
    en: "Towcester East & Paulerspury",
    geoType: "MSOA",
    geoCode: "E02005685"
  },
  {
    en: "Middleton Cheney & Chipping Warden",
    geoType: "MSOA",
    geoCode: "E02005686"
  },
  {
    en: "Silverstone, & Syresham & Helmdon",
    geoType: "MSOA",
    geoCode: "E02005687"
  },
  {
    en: "Deanshanger, Potterspury & Old Stratford",
    geoType: "MSOA",
    geoCode: "E02005688"
  },
  {
    en: "Brackley North",
    geoType: "MSOA",
    geoCode: "E02005689"
  },
  {
    en: "Brackley South",
    geoType: "MSOA",
    geoCode: "E02005690"
  },
  {
    en: "Kings Sutton, Greatworth & Evenley",
    geoType: "MSOA",
    geoCode: "E02005691"
  },
  {
    en: "Finedon, Isham & Harrowden",
    geoType: "MSOA",
    geoCode: "E02005692"
  },
  {
    en: "Rixon",
    geoType: "MSOA",
    geoCode: "E02005693"
  },
  {
    en: "Redwell",
    geoType: "MSOA",
    geoCode: "E02005694"
  },
  {
    en: "Victoria & Isebrook",
    geoType: "MSOA",
    geoCode: "E02005695"
  },
  {
    en: "Queensway",
    geoType: "MSOA",
    geoCode: "E02005696"
  },
  {
    en: "Central Wellingborough",
    geoType: "MSOA",
    geoCode: "E02005697"
  },
  {
    en: "Brickhill",
    geoType: "MSOA",
    geoCode: "E02005698"
  },
  {
    en: "Croyland",
    geoType: "MSOA",
    geoCode: "E02005699"
  },
  {
    en: "Earls Barton & Great Doddington",
    geoType: "MSOA",
    geoCode: "E02005700"
  },
  {
    en: "Irchester, Wollaston & Bozeat",
    geoType: "MSOA",
    geoCode: "E02005701"
  },
  {
    en: "Longhoughton & Alnmouth",
    geoType: "MSOA",
    geoCode: "E02005702"
  },
  {
    en: "Alnwick",
    geoType: "MSOA",
    geoCode: "E02005703"
  },
  {
    en: "Amble, Shilbottle & Swarland",
    geoType: "MSOA",
    geoCode: "E02005704"
  },
  {
    en: "Rothbury & Longframlington",
    geoType: "MSOA",
    geoCode: "E02005705"
  },
  {
    en: "Berwick-upon-Tweed Town",
    geoType: "MSOA",
    geoCode: "E02005706"
  },
  {
    en: "Berwick-upon-Tweed West & Holy Island",
    geoType: "MSOA",
    geoCode: "E02005707"
  },
  {
    en: "Seahouses, Belford & Wooler",
    geoType: "MSOA",
    geoCode: "E02005708"
  },
  {
    en: "Blyth Cowpen",
    geoType: "MSOA",
    geoCode: "E02005709"
  },
  {
    en: "Blyth Town",
    geoType: "MSOA",
    geoCode: "E02005710"
  },
  {
    en: "Blyth Isabella",
    geoType: "MSOA",
    geoCode: "E02005711"
  },
  {
    en: "Blyth Newsham",
    geoType: "MSOA",
    geoCode: "E02005712"
  },
  {
    en: "Blyth South",
    geoType: "MSOA",
    geoCode: "E02005713"
  },
  {
    en: "Cramlington Town & Beaconhill",
    geoType: "MSOA",
    geoCode: "E02005715"
  },
  {
    en: "Holywell & Hartley",
    geoType: "MSOA",
    geoCode: "E02005717"
  },
  {
    en: "Cramlington South",
    geoType: "MSOA",
    geoCode: "E02005718"
  },
  {
    en: "Seaton Delaval & Seghill",
    geoType: "MSOA",
    geoCode: "E02005719"
  },
  {
    en: "Widdrington, Lynemouth & Hadston",
    geoType: "MSOA",
    geoCode: "E02005720"
  },
  {
    en: "Morpeth North & Pegswood",
    geoType: "MSOA",
    geoCode: "E02005721"
  },
  {
    en: "Longhorsley, Hepscott & Capheaton",
    geoType: "MSOA",
    geoCode: "E02005722"
  },
  {
    en: "Morpeth Central & East",
    geoType: "MSOA",
    geoCode: "E02005723"
  },
  {
    en: "Morpeth South & West",
    geoType: "MSOA",
    geoCode: "E02005724"
  },
  {
    en: "Ponteland",
    geoType: "MSOA",
    geoCode: "E02005725"
  },
  {
    en: "Darras Hall, Stamfordham & Heddon",
    geoType: "MSOA",
    geoCode: "E02005726"
  },
  {
    en: "Bellingham, Otterburn & Redesdale",
    geoType: "MSOA",
    geoCode: "E02005727"
  },
  {
    en: "Haltwhistle & Bardon Mill",
    geoType: "MSOA",
    geoCode: "E02005728"
  },
  {
    en: "Wylam & Ovingham",
    geoType: "MSOA",
    geoCode: "E02005729"
  },
  {
    en: "Hexham & Acomb",
    geoType: "MSOA",
    geoCode: "E02005730"
  },
  {
    en: "Prudhoe",
    geoType: "MSOA",
    geoCode: "E02005731"
  },
  {
    en: "Haydon Bridge & Allendale",
    geoType: "MSOA",
    geoCode: "E02005733"
  },
  {
    en: "Newbiggin",
    geoType: "MSOA",
    geoCode: "E02005734"
  },
  {
    en: "Ashington Hirst",
    geoType: "MSOA",
    geoCode: "E02005735"
  },
  {
    en: "Ashington East",
    geoType: "MSOA",
    geoCode: "E02005736"
  },
  {
    en: "Guide Post & Stakeford",
    geoType: "MSOA",
    geoCode: "E02005739"
  },
  {
    en: "Bedlington Station & Sleekburn",
    geoType: "MSOA",
    geoCode: "E02005740"
  },
  {
    en: "Bedlington Town",
    geoType: "MSOA",
    geoCode: "E02005741"
  },
  {
    en: "Ingleton & High Bentham",
    geoType: "MSOA",
    geoCode: "E02005742"
  },
  {
    en: "Settle, Hellifield & Horton",
    geoType: "MSOA",
    geoCode: "E02005744"
  },
  {
    en: "Skipton Town & East",
    geoType: "MSOA",
    geoCode: "E02005746"
  },
  {
    en: "Skipton South",
    geoType: "MSOA",
    geoCode: "E02005747"
  },
  {
    en: "Carleton, Cowling & Cononley",
    geoType: "MSOA",
    geoCode: "E02005748"
  },
  {
    en: "Sutton & Crosshills",
    geoType: "MSOA",
    geoCode: "E02005749"
  },
  {
    en: "Great Ayton & Stokesley",
    geoType: "MSOA",
    geoCode: "E02005750"
  },
  {
    en: "Rudby & Ingleby",
    geoType: "MSOA",
    geoCode: "E02005751"
  },
  {
    en: "Brompton, Appleton & Thimbleby",
    geoType: "MSOA",
    geoCode: "E02005752"
  },
  {
    en: "Northallerton South & Leeming Bar",
    geoType: "MSOA",
    geoCode: "E02005754"
  },
  {
    en: "Bedale & Snape",
    geoType: "MSOA",
    geoCode: "E02005755"
  },
  {
    en: "Leeming, Pickhill & Thornton",
    geoType: "MSOA",
    geoCode: "E02005756"
  },
  {
    en: "Thirsk North",
    geoType: "MSOA",
    geoCode: "E02005757"
  },
  {
    en: "Thirsk South & Coxwold",
    geoType: "MSOA",
    geoCode: "E02005758"
  },
  {
    en: "Easingwold & Stillington",
    geoType: "MSOA",
    geoCode: "E02005759"
  },
  {
    en: "Linton, Tollerton & Raskelf",
    geoType: "MSOA",
    geoCode: "E02005760"
  },
  {
    en: "Masham, Kirkby Malzeard & North Stainley",
    geoType: "MSOA",
    geoCode: "E02005761"
  },
  {
    en: "Ripon North & West",
    geoType: "MSOA",
    geoCode: "E02005762"
  },
  {
    en: "Dishforth, Baldersby & Markington",
    geoType: "MSOA",
    geoCode: "E02005763"
  },
  {
    en: "Ripon South & East",
    geoType: "MSOA",
    geoCode: "E02005764"
  },
  {
    en: "Boroughbridge & Marton-cum-Grafton",
    geoType: "MSOA",
    geoCode: "E02005765"
  },
  {
    en: "Pateley Bridge & Nidd Valley",
    geoType: "MSOA",
    geoCode: "E02005766"
  },
  {
    en: "Knaresborough North",
    geoType: "MSOA",
    geoCode: "E02005767"
  },
  {
    en: "Killinghall & Hampsthwaite",
    geoType: "MSOA",
    geoCode: "E02005768"
  },
  {
    en: "Knaresborough Central",
    geoType: "MSOA",
    geoCode: "E02005769"
  },
  {
    en: "Bilton",
    geoType: "MSOA",
    geoCode: "E02005770"
  },
  {
    en: "Saltergate",
    geoType: "MSOA",
    geoCode: "E02005771"
  },
  {
    en: "Knaresborough South & Follifoot",
    geoType: "MSOA",
    geoCode: "E02005772"
  },
  {
    en: "Harrogate East",
    geoType: "MSOA",
    geoCode: "E02005773"
  },
  {
    en: "Starbeck",
    geoType: "MSOA",
    geoCode: "E02005774"
  },
  {
    en: "Central Harrogate",
    geoType: "MSOA",
    geoCode: "E02005775"
  },
  {
    en: "Ouseburn, Hammerton & Tockwith",
    geoType: "MSOA",
    geoCode: "E02005776"
  },
  {
    en: "Hookstone",
    geoType: "MSOA",
    geoCode: "E02005777"
  },
  {
    en: "Menwith, Beckwithshaw & Denton Moor",
    geoType: "MSOA",
    geoCode: "E02005778"
  },
  {
    en: "Stray",
    geoType: "MSOA",
    geoCode: "E02005779"
  },
  {
    en: "Harrogate West & Pannal Ash",
    geoType: "MSOA",
    geoCode: "E02005780"
  },
  {
    en: "Spofforth, Burn Bridge & Huby",
    geoType: "MSOA",
    geoCode: "E02005781"
  },
  {
    en: "North Richmondshire",
    geoType: "MSOA",
    geoCode: "E02005782"
  },
  {
    en: "Richmond Town",
    geoType: "MSOA",
    geoCode: "E02005783"
  },
  {
    en: "Catterick & Brompton-on-Swale",
    geoType: "MSOA",
    geoCode: "E02005784"
  },
  {
    en: "Catterick Garrison & Colburn",
    geoType: "MSOA",
    geoCode: "E02005785"
  },
  {
    en: "Upper Dales",
    geoType: "MSOA",
    geoCode: "E02005786"
  },
  {
    en: "Leyburn, Middleham & Tunstall",
    geoType: "MSOA",
    geoCode: "E02005787"
  },
  {
    en: "Kirkbymoorside & Moors",
    geoType: "MSOA",
    geoCode: "E02005788"
  },
  {
    en: "Pickering & Thornton Dale",
    geoType: "MSOA",
    geoCode: "E02005789"
  },
  {
    en: "Helmsley & Ampleforth",
    geoType: "MSOA",
    geoCode: "E02005790"
  },
  {
    en: "Rillington & Sherburn",
    geoType: "MSOA",
    geoCode: "E02005791"
  },
  {
    en: "Sheriff Hutton, Slingsby & Swinton",
    geoType: "MSOA",
    geoCode: "E02005794"
  },
  {
    en: "Whitby West",
    geoType: "MSOA",
    geoCode: "E02005795"
  },
  {
    en: "Esk Valley & Runswick Coast",
    geoType: "MSOA",
    geoCode: "E02005796"
  },
  {
    en: "Whitby South & East",
    geoType: "MSOA",
    geoCode: "E02005797"
  },
  {
    en: "Burniston, Sleights & Fylingdales",
    geoType: "MSOA",
    geoCode: "E02005798"
  },
  {
    en: "Newby & Scalby",
    geoType: "MSOA",
    geoCode: "E02005799"
  },
  {
    en: "Scarborough Town & North Bay",
    geoType: "MSOA",
    geoCode: "E02005800"
  },
  {
    en: "Barrowcliff & Northstead",
    geoType: "MSOA",
    geoCode: "E02005801"
  },
  {
    en: "Scarborough Central",
    geoType: "MSOA",
    geoCode: "E02005802"
  },
  {
    en: "Falsgrave",
    geoType: "MSOA",
    geoCode: "E02005803"
  },
  {
    en: "Ramshill & South Cliff",
    geoType: "MSOA",
    geoCode: "E02005804"
  },
  {
    en: "Wheatcroft & Cayton",
    geoType: "MSOA",
    geoCode: "E02005805"
  },
  {
    en: "Eastfield, Crossgates & Seamer",
    geoType: "MSOA",
    geoCode: "E02005806"
  },
  {
    en: "Ayton & Snainton",
    geoType: "MSOA",
    geoCode: "E02005807"
  },
  {
    en: "Filey & Hunmanby",
    geoType: "MSOA",
    geoCode: "E02005808"
  },
  {
    en: "Tadcaster",
    geoType: "MSOA",
    geoCode: "E02005809"
  },
  {
    en: "Church Fenton, Appleton & Wistow",
    geoType: "MSOA",
    geoCode: "E02005810"
  },
  {
    en: "Barlby & Riccall",
    geoType: "MSOA",
    geoCode: "E02005811"
  },
  {
    en: "Sherburn in Elmet & South Milford",
    geoType: "MSOA",
    geoCode: "E02005812"
  },
  {
    en: "Selby Town",
    geoType: "MSOA",
    geoCode: "E02005813"
  },
  {
    en: "Selby West",
    geoType: "MSOA",
    geoCode: "E02005814"
  },
  {
    en: "Selby South, Brayton & Barlow",
    geoType: "MSOA",
    geoCode: "E02005815"
  },
  {
    en: "Carlton, Hemingbrough & Osgodby",
    geoType: "MSOA",
    geoCode: "E02005816"
  },
  {
    en: "Hambleton, Monk Fryston & Byram",
    geoType: "MSOA",
    geoCode: "E02005817"
  },
  {
    en: "Eggborough, Kellington & Smeaton",
    geoType: "MSOA",
    geoCode: "E02005818"
  },
  {
    en: "Stanton Hill & Skegby",
    geoType: "MSOA",
    geoCode: "E02005819"
  },
  {
    en: "The Dales & South Skegby",
    geoType: "MSOA",
    geoCode: "E02005820"
  },
  {
    en: "Huthwaite",
    geoType: "MSOA",
    geoCode: "E02005821"
  },
  {
    en: "Sutton Forest Side & New Cross",
    geoType: "MSOA",
    geoCode: "E02005822"
  },
  {
    en: "Sutton Central & Leamington",
    geoType: "MSOA",
    geoCode: "E02005823"
  },
  {
    en: "Sutton St Mary's & Ashfields",
    geoType: "MSOA",
    geoCode: "E02005824"
  },
  {
    en: "East Kirkby",
    geoType: "MSOA",
    geoCode: "E02005825"
  },
  {
    en: "Kirkby Central",
    geoType: "MSOA",
    geoCode: "E02005826"
  },
  {
    en: "Kirkby Larwood & Kingsway",
    geoType: "MSOA",
    geoCode: "E02005827"
  },
  {
    en: "Annesley & Kirkby Woodhouse",
    geoType: "MSOA",
    geoCode: "E02005828"
  },
  {
    en: "Selston",
    geoType: "MSOA",
    geoCode: "E02005829"
  },
  {
    en: "Jacksdale & Underwood",
    geoType: "MSOA",
    geoCode: "E02005830"
  },
  {
    en: "Hucknall North & East",
    geoType: "MSOA",
    geoCode: "E02005831"
  },
  {
    en: "Hucknall Town",
    geoType: "MSOA",
    geoCode: "E02005832"
  },
  {
    en: "West Hucknall",
    geoType: "MSOA",
    geoCode: "E02005833"
  },
  {
    en: "Hucknall Westville",
    geoType: "MSOA",
    geoCode: "E02005834"
  },
  {
    en: "Harworth, Bircotes & Blyth",
    geoType: "MSOA",
    geoCode: "E02005835"
  },
  {
    en: "Clarborough, Beckingham & Misterton",
    geoType: "MSOA",
    geoCode: "E02005836"
  },
  {
    en: "Ranskill, Everton & Gringley",
    geoType: "MSOA",
    geoCode: "E02005837"
  },
  {
    en: "Carlton & Langold",
    geoType: "MSOA",
    geoCode: "E02005838"
  },
  {
    en: "Retford North",
    geoType: "MSOA",
    geoCode: "E02005839"
  },
  {
    en: "Worksop North",
    geoType: "MSOA",
    geoCode: "E02005840"
  },
  {
    en: "Retford East",
    geoType: "MSOA",
    geoCode: "E02005842"
  },
  {
    en: "Worksop West, Shireoaks & Rhodesia",
    geoType: "MSOA",
    geoCode: "E02005843"
  },
  {
    en: "Retford South",
    geoType: "MSOA",
    geoCode: "E02005844"
  },
  {
    en: "Worksop Cheapside",
    geoType: "MSOA",
    geoCode: "E02005846"
  },
  {
    en: "Worksop Town & South",
    geoType: "MSOA",
    geoCode: "E02005847"
  },
  {
    en: "Manton, Clumber & Elkesley",
    geoType: "MSOA",
    geoCode: "E02005848"
  },
  {
    en: "Tuxford, Markham & Rampton",
    geoType: "MSOA",
    geoCode: "E02005849"
  },
  {
    en: "Eastwood Hall & Brinsley",
    geoType: "MSOA",
    geoCode: "E02005850"
  },
  {
    en: "Eastwood Town",
    geoType: "MSOA",
    geoCode: "E02005851"
  },
  {
    en: "Eastwood East",
    geoType: "MSOA",
    geoCode: "E02005852"
  },
  {
    en: "Kimberley North & Watnall",
    geoType: "MSOA",
    geoCode: "E02005853"
  },
  {
    en: "Bramcote",
    geoType: "MSOA",
    geoCode: "E02005856"
  },
  {
    en: "Stapleford North",
    geoType: "MSOA",
    geoCode: "E02005857"
  },
  {
    en: "Beeston North",
    geoType: "MSOA",
    geoCode: "E02005858"
  },
  {
    en: "Stapleford South",
    geoType: "MSOA",
    geoCode: "E02005859"
  },
  {
    en: "Beeston Town",
    geoType: "MSOA",
    geoCode: "E02005860"
  },
  {
    en: "Beeston Rylands",
    geoType: "MSOA",
    geoCode: "E02005861"
  },
  {
    en: "Chilwell West",
    geoType: "MSOA",
    geoCode: "E02005862"
  },
  {
    en: "Attenborough & Chilwell East",
    geoType: "MSOA",
    geoCode: "E02005863"
  },
  {
    en: "Toton",
    geoType: "MSOA",
    geoCode: "E02005864"
  },
  {
    en: "Ravenshead & Newstead",
    geoType: "MSOA",
    geoCode: "E02005865"
  },
  {
    en: "Calverton & Woodborough",
    geoType: "MSOA",
    geoCode: "E02005866"
  },
  {
    en: "Redhill",
    geoType: "MSOA",
    geoCode: "E02005868"
  },
  {
    en: "Arnold Town",
    geoType: "MSOA",
    geoCode: "E02005869"
  },
  {
    en: "Daybrook",
    geoType: "MSOA",
    geoCode: "E02005870"
  },
  {
    en: "Plains Estate",
    geoType: "MSOA",
    geoCode: "E02005871"
  },
  {
    en: "Burton Joyce & Lambley",
    geoType: "MSOA",
    geoCode: "E02005872"
  },
  {
    en: "Woodthorpe & Arno Vale",
    geoType: "MSOA",
    geoCode: "E02005873"
  },
  {
    en: "Mapperley & Porchester",
    geoType: "MSOA",
    geoCode: "E02005874"
  },
  {
    en: "Gedling North",
    geoType: "MSOA",
    geoCode: "E02005875"
  },
  {
    en: "Gedling South",
    geoType: "MSOA",
    geoCode: "E02005876"
  },
  {
    en: "Carlton Hill",
    geoType: "MSOA",
    geoCode: "E02005877"
  },
  {
    en: "Carlton",
    geoType: "MSOA",
    geoCode: "E02005878"
  },
  {
    en: "Netherfield & Colwick",
    geoType: "MSOA",
    geoCode: "E02005879"
  },
  {
    en: "Church Warsop & Meden Vale",
    geoType: "MSOA",
    geoCode: "E02005880"
  },
  {
    en: "Market Warsop",
    geoType: "MSOA",
    geoCode: "E02005881"
  },
  {
    en: "Manor, Hornby & Peafields",
    geoType: "MSOA",
    geoCode: "E02005882"
  },
  {
    en: "Woodhouse",
    geoType: "MSOA",
    geoCode: "E02005883"
  },
  {
    en: "Yeoman Hill & Maun Valley",
    geoType: "MSOA",
    geoCode: "E02005884"
  },
  {
    en: "Abbott Road & Pleasley Hill",
    geoType: "MSOA",
    geoCode: "E02005885"
  },
  {
    en: "Forest Town & Newlands",
    geoType: "MSOA",
    geoCode: "E02005886"
  },
  {
    en: "Mansfield Town Centre & Broomhill",
    geoType: "MSOA",
    geoCode: "E02005887"
  },
  {
    en: "Newgate & Carr Bank",
    geoType: "MSOA",
    geoCode: "E02005888"
  },
  {
    en: "Grange Farm & Ladybrook",
    geoType: "MSOA",
    geoCode: "E02005889"
  },
  {
    en: "Eakring & Ling Forest",
    geoType: "MSOA",
    geoCode: "E02005890"
  },
  {
    en: "Oak Tree & Ransom Wood",
    geoType: "MSOA",
    geoCode: "E02005891"
  },
  {
    en: "King's Walk, Berry Hill & Oakham",
    geoType: "MSOA",
    geoCode: "E02005892"
  },
  {
    en: "Ollerton & Boughton",
    geoType: "MSOA",
    geoCode: "E02005893"
  },
  {
    en: "Edwinstowe & Clipstone",
    geoType: "MSOA",
    geoCode: "E02005894"
  },
  {
    en: "Muskham, Sutton on Trent & Walesby",
    geoType: "MSOA",
    geoCode: "E02005895"
  },
  {
    en: "Winthorpe, Coddington & Collingham",
    geoType: "MSOA",
    geoCode: "E02005896"
  },
  {
    en: "Bilsthorpe & Farnsfield",
    geoType: "MSOA",
    geoCode: "E02005897"
  },
  {
    en: "Rainworth & Blidworth",
    geoType: "MSOA",
    geoCode: "E02005898"
  },
  {
    en: "Newark North",
    geoType: "MSOA",
    geoCode: "E02005899"
  },
  {
    en: "Southwell",
    geoType: "MSOA",
    geoCode: "E02005900"
  },
  {
    en: "Newark South East",
    geoType: "MSOA",
    geoCode: "E02005901"
  },
  {
    en: "Newark South West",
    geoType: "MSOA",
    geoCode: "E02005902"
  },
  {
    en: "Balderton",
    geoType: "MSOA",
    geoCode: "E02005903"
  },
  {
    en: "Fernwood, Farndon & Fiskerton",
    geoType: "MSOA",
    geoCode: "E02005904"
  },
  {
    en: "Lowdham, Bleasby & Gunthorpe",
    geoType: "MSOA",
    geoCode: "E02005905"
  },
  {
    en: "East Bridgford & Aslockton",
    geoType: "MSOA",
    geoCode: "E02005906"
  },
  {
    en: "Bingham",
    geoType: "MSOA",
    geoCode: "E02005907"
  },
  {
    en: "Radcliffe on Trent & Shelford",
    geoType: "MSOA",
    geoCode: "E02005908"
  },
  {
    en: "Lady Bay",
    geoType: "MSOA",
    geoCode: "E02005909"
  },
  {
    en: "West Bridgford",
    geoType: "MSOA",
    geoCode: "E02005910"
  },
  {
    en: "Gamston & Holme Pierrepoint",
    geoType: "MSOA",
    geoCode: "E02005911"
  },
  {
    en: "Compton Acres & Lutterell",
    geoType: "MSOA",
    geoCode: "E02005912"
  },
  {
    en: "Edwalton",
    geoType: "MSOA",
    geoCode: "E02005913"
  },
  {
    en: "Cotgrave",
    geoType: "MSOA",
    geoCode: "E02005914"
  },
  {
    en: "Cropwell Bishop, Kinoulton & Upper Broughton",
    geoType: "MSOA",
    geoCode: "E02005915"
  },
  {
    en: "Ruddington",
    geoType: "MSOA",
    geoCode: "E02005916"
  },
  {
    en: "Keyworth North, Tollerton & Willoughby",
    geoType: "MSOA",
    geoCode: "E02005917"
  },
  {
    en: "Keyworth South",
    geoType: "MSOA",
    geoCode: "E02005918"
  },
  {
    en: "Ratcliffe, Sutton Bonington & Gotham",
    geoType: "MSOA",
    geoCode: "E02005919"
  },
  {
    en: "East Leake",
    geoType: "MSOA",
    geoCode: "E02005920"
  },
  {
    en: "Cropredy, Wroxton & Shennington",
    geoType: "MSOA",
    geoCode: "E02005921"
  },
  {
    en: "Banbury Hardwick",
    geoType: "MSOA",
    geoCode: "E02005922"
  },
  {
    en: "Banbury Neithrop",
    geoType: "MSOA",
    geoCode: "E02005923"
  },
  {
    en: "Banbury Grimsbury",
    geoType: "MSOA",
    geoCode: "E02005924"
  },
  {
    en: "Banbury Ruscote",
    geoType: "MSOA",
    geoCode: "E02005925"
  },
  {
    en: "Banbury Easington",
    geoType: "MSOA",
    geoCode: "E02005926"
  },
  {
    en: "Banbury Calthorpe",
    geoType: "MSOA",
    geoCode: "E02005927"
  },
  {
    en: "Bodicote, Adderbury & Bloxham",
    geoType: "MSOA",
    geoCode: "E02005928"
  },
  {
    en: "Sibford, Hook Norton & Milcombe",
    geoType: "MSOA",
    geoCode: "E02005929"
  },
  {
    en: "Deddington, Steeple Aston & Heyfords",
    geoType: "MSOA",
    geoCode: "E02005930"
  },
  {
    en: "Caversfield, Ambrosden & Fringford",
    geoType: "MSOA",
    geoCode: "E02005931"
  },
  {
    en: "Bicester North",
    geoType: "MSOA",
    geoCode: "E02005932"
  },
  {
    en: "Bicester East",
    geoType: "MSOA",
    geoCode: "E02005933"
  },
  {
    en: "Bicester West",
    geoType: "MSOA",
    geoCode: "E02005934"
  },
  {
    en: "Bicester South",
    geoType: "MSOA",
    geoCode: "E02005935"
  },
  {
    en: "Islip, Arncott & Chesterton",
    geoType: "MSOA",
    geoCode: "E02005936"
  },
  {
    en: "Kidlington North",
    geoType: "MSOA",
    geoCode: "E02005937"
  },
  {
    en: "Kidlington South",
    geoType: "MSOA",
    geoCode: "E02005938"
  },
  {
    en: "Begbroke, Yarnton & Water Eaton",
    geoType: "MSOA",
    geoCode: "E02005939"
  },
  {
    en: "Wolvercote & Cutteslowe",
    geoType: "MSOA",
    geoCode: "E02005940"
  },
  {
    en: "Summertown",
    geoType: "MSOA",
    geoCode: "E02005941"
  },
  {
    en: "North Central Oxford",
    geoType: "MSOA",
    geoCode: "E02005942"
  },
  {
    en: "Marston",
    geoType: "MSOA",
    geoCode: "E02005943"
  },
  {
    en: "Barton",
    geoType: "MSOA",
    geoCode: "E02005944"
  },
  {
    en: "Headington",
    geoType: "MSOA",
    geoCode: "E02005945"
  },
  {
    en: "Risinghurst & Sandhills",
    geoType: "MSOA",
    geoCode: "E02005946"
  },
  {
    en: "Oxford Central",
    geoType: "MSOA",
    geoCode: "E02005947"
  },
  {
    en: "Osney, Jericho & Port Meadow",
    geoType: "MSOA",
    geoCode: "E02005948"
  },
  {
    en: "Churchill",
    geoType: "MSOA",
    geoCode: "E02005949"
  },
  {
    en: "East Central Oxford",
    geoType: "MSOA",
    geoCode: "E02005950"
  },
  {
    en: "Grandpont & New Hinksey",
    geoType: "MSOA",
    geoCode: "E02005951"
  },
  {
    en: "Iffley Fields",
    geoType: "MSOA",
    geoCode: "E02005953"
  },
  {
    en: "Cowley South & Iffley",
    geoType: "MSOA",
    geoCode: "E02005954"
  },
  {
    en: "Littlemore & Rose Hill",
    geoType: "MSOA",
    geoCode: "E02005955"
  },
  {
    en: "Blackbird Leys",
    geoType: "MSOA",
    geoCode: "E02005956"
  },
  {
    en: "Greater Leys",
    geoType: "MSOA",
    geoCode: "E02005957"
  },
  {
    en: "Thame North",
    geoType: "MSOA",
    geoCode: "E02005958"
  },
  {
    en: "Beckley & Horspath",
    geoType: "MSOA",
    geoCode: "E02005959"
  },
  {
    en: "Thame South",
    geoType: "MSOA",
    geoCode: "E02005960"
  },
  {
    en: "Wheatley & Great Haseley",
    geoType: "MSOA",
    geoCode: "E02005961"
  },
  {
    en: "Chinnor & Tetsworth",
    geoType: "MSOA",
    geoCode: "E02005962"
  },
  {
    en: "Berinsfield & Wittenham",
    geoType: "MSOA",
    geoCode: "E02005963"
  },
  {
    en: "Chalgrove, Stadhampton & Dorchester",
    geoType: "MSOA",
    geoCode: "E02005964"
  },
  {
    en: "Watlington & Nettlebed",
    geoType: "MSOA",
    geoCode: "E02005965"
  },
  {
    en: "Didcot Ladygrove",
    geoType: "MSOA",
    geoCode: "E02005966"
  },
  {
    en: "Didcot West",
    geoType: "MSOA",
    geoCode: "E02005967"
  },
  {
    en: "Benson & Crowmarsh Gifford",
    geoType: "MSOA",
    geoCode: "E02005968"
  },
  {
    en: "Wallingford & Brightwell",
    geoType: "MSOA",
    geoCode: "E02005969"
  },
  {
    en: "Didcot South East",
    geoType: "MSOA",
    geoCode: "E02005970"
  },
  {
    en: "Didcot South West",
    geoType: "MSOA",
    geoCode: "E02005971"
  },
  {
    en: "Hagbourne, Moreton & Cholsey",
    geoType: "MSOA",
    geoCode: "E02005972"
  },
  {
    en: "Henley North",
    geoType: "MSOA",
    geoCode: "E02005973"
  },
  {
    en: "Henley South",
    geoType: "MSOA",
    geoCode: "E02005974"
  },
  {
    en: "Goring, Woodcote & Whitchurch",
    geoType: "MSOA",
    geoCode: "E02005975"
  },
  {
    en: "Shiplake & Binfield Heath",
    geoType: "MSOA",
    geoCode: "E02005976"
  },
  {
    en: "Sonning Common & Kidmore End",
    geoType: "MSOA",
    geoCode: "E02005977"
  },
  {
    en: "Dean Court, Cumnor & Appleton",
    geoType: "MSOA",
    geoCode: "E02005978"
  },
  {
    en: "Botley & Kennington",
    geoType: "MSOA",
    geoCode: "E02005979"
  },
  {
    en: "Radley, Wootton & Marcham",
    geoType: "MSOA",
    geoCode: "E02005980"
  },
  {
    en: "Abingdon Northcourt & Peachcroft",
    geoType: "MSOA",
    geoCode: "E02005981"
  },
  {
    en: "Abingdon Audlett Drive & Farm Road",
    geoType: "MSOA",
    geoCode: "E02005982"
  },
  {
    en: "Abingdon Town & West",
    geoType: "MSOA",
    geoCode: "E02005983"
  },
  {
    en: "Kingston Bagpuize & East Hanney",
    geoType: "MSOA",
    geoCode: "E02005984"
  },
  {
    en: "Abingdon South",
    geoType: "MSOA",
    geoCode: "E02005985"
  },
  {
    en: "Faringdon & Stanford",
    geoType: "MSOA",
    geoCode: "E02005986"
  },
  {
    en: "Sutton Courtenay, Drayton & Steventon",
    geoType: "MSOA",
    geoCode: "E02005987"
  },
  {
    en: "Grove",
    geoType: "MSOA",
    geoCode: "E02005988"
  },
  {
    en: "Wantage Town",
    geoType: "MSOA",
    geoCode: "E02005991"
  },
  {
    en: "South Wantage, Harwell & Blewbury",
    geoType: "MSOA",
    geoCode: "E02005992"
  },
  {
    en: "Chipping Norton",
    geoType: "MSOA",
    geoCode: "E02005993"
  },
  {
    en: "Kingham, Enstone & Middle Barton",
    geoType: "MSOA",
    geoCode: "E02005994"
  },
  {
    en: "Chadlington & Wychwoods",
    geoType: "MSOA",
    geoCode: "E02005995"
  },
  {
    en: "Woodstock, Stonesfield & Tackley",
    geoType: "MSOA",
    geoCode: "E02005996"
  },
  {
    en: "Charlbury & North Leigh",
    geoType: "MSOA",
    geoCode: "E02005997"
  },
  {
    en: "Hanborough & Cassington",
    geoType: "MSOA",
    geoCode: "E02005998"
  },
  {
    en: "Leafield, Minster Lovell & Duckington",
    geoType: "MSOA",
    geoCode: "E02005999"
  },
  {
    en: "Witney East",
    geoType: "MSOA",
    geoCode: "E02006000"
  },
  {
    en: "Witney West",
    geoType: "MSOA",
    geoCode: "E02006001"
  },
  {
    en: "Witney Central",
    geoType: "MSOA",
    geoCode: "E02006002"
  },
  {
    en: "Eynsham & Stanton Harcourt",
    geoType: "MSOA",
    geoCode: "E02006003"
  },
  {
    en: "Burford & Brize Norton",
    geoType: "MSOA",
    geoCode: "E02006004"
  },
  {
    en: "Carterton North",
    geoType: "MSOA",
    geoCode: "E02006005"
  },
  {
    en: "Carterton South",
    geoType: "MSOA",
    geoCode: "E02006006"
  },
  {
    en: "Bampton, Clanfield & Standlake",
    geoType: "MSOA",
    geoCode: "E02006007"
  },
  {
    en: "Shifnal",
    geoType: "MSOA",
    geoCode: "E02006008"
  },
  {
    en: "Cosford & Albrighton",
    geoType: "MSOA",
    geoCode: "E02006009"
  },
  {
    en: "Much Wenlock & Broseley",
    geoType: "MSOA",
    geoCode: "E02006010"
  },
  {
    en: "Bridgnorth West",
    geoType: "MSOA",
    geoCode: "E02006011"
  },
  {
    en: "Bridgnorth East",
    geoType: "MSOA",
    geoCode: "E02006012"
  },
  {
    en: "Alveley, Claverley & Worfield",
    geoType: "MSOA",
    geoCode: "E02006013"
  },
  {
    en: "Highley & Ditton Priors",
    geoType: "MSOA",
    geoCode: "E02006014"
  },
  {
    en: "Whitchurch",
    geoType: "MSOA",
    geoCode: "E02006015"
  },
  {
    en: "Woore, Prees & Tilstock",
    geoType: "MSOA",
    geoCode: "E02006016"
  },
  {
    en: "Ellesmere",
    geoType: "MSOA",
    geoCode: "E02006017"
  },
  {
    en: "Market Drayton",
    geoType: "MSOA",
    geoCode: "E02006018"
  },
  {
    en: "Wem",
    geoType: "MSOA",
    geoCode: "E02006019"
  },
  {
    en: "Hinstock & Hodnet",
    geoType: "MSOA",
    geoCode: "E02006020"
  },
  {
    en: "Baschurch, Cockshutt & Harmer Hill",
    geoType: "MSOA",
    geoCode: "E02006021"
  },
  {
    en: "Shawbury & Weston",
    geoType: "MSOA",
    geoCode: "E02006022"
  },
  {
    en: "Gobowen, St Martin's & Weston Rhyn",
    geoType: "MSOA",
    geoCode: "E02006023"
  },
  {
    en: "Oswestry East",
    geoType: "MSOA",
    geoCode: "E02006024"
  },
  {
    en: "Oswestry West",
    geoType: "MSOA",
    geoCode: "E02006025"
  },
  {
    en: "Ruyton-XI-Towns, West Felton & Whittington",
    geoType: "MSOA",
    geoCode: "E02006026"
  },
  {
    en: "Trefonen & Pant",
    geoType: "MSOA",
    geoCode: "E02006027"
  },
  {
    en: "Bomere Heath & Montford Bridge",
    geoType: "MSOA",
    geoCode: "E02006028"
  },
  {
    en: "Shrewsbury Harlescott Grange",
    geoType: "MSOA",
    geoCode: "E02006029"
  },
  {
    en: "Shrewsbury Harlescott & Sundorne",
    geoType: "MSOA",
    geoCode: "E02006030"
  },
  {
    en: "Shrewsbury Greenfields",
    geoType: "MSOA",
    geoCode: "E02006031"
  },
  {
    en: "Shrewsbury Monkmoor",
    geoType: "MSOA",
    geoCode: "E02006032"
  },
  {
    en: "Shrewsbury Town",
    geoType: "MSOA",
    geoCode: "E02006033"
  },
  {
    en: "Shrewsbury Copthorne & Bowbrook",
    geoType: "MSOA",
    geoCode: "E02006034"
  },
  {
    en: "Shrewsbury London Road",
    geoType: "MSOA",
    geoCode: "E02006035"
  },
  {
    en: "Shrewsbury Sutton & Coleham",
    geoType: "MSOA",
    geoCode: "E02006036"
  },
  {
    en: "Shrewsbury Meole & Kingsland",
    geoType: "MSOA",
    geoCode: "E02006037"
  },
  {
    en: "Bayston Hill & Atcham",
    geoType: "MSOA",
    geoCode: "E02006038"
  },
  {
    en: "Hanwood, Pontesbury & Minsterley",
    geoType: "MSOA",
    geoCode: "E02006039"
  },
  {
    en: "Cressage, Dorrington & Pulverbatch",
    geoType: "MSOA",
    geoCode: "E02006040"
  },
  {
    en: "Bishop's Castle, Brockton & Chirbury",
    geoType: "MSOA",
    geoCode: "E02006041"
  },
  {
    en: "Church Stretton",
    geoType: "MSOA",
    geoCode: "E02006042"
  },
  {
    en: "Craven Arms & Broadstone",
    geoType: "MSOA",
    geoCode: "E02006043"
  },
  {
    en: "Clun & Bucknell",
    geoType: "MSOA",
    geoCode: "E02006044"
  },
  {
    en: "Ludlow Town",
    geoType: "MSOA",
    geoCode: "E02006045"
  },
  {
    en: "Cleobury Mortimer, Burford & Ashford Carbonell",
    geoType: "MSOA",
    geoCode: "E02006046"
  },
  {
    en: "Rode, Mells & Woodlands",
    geoType: "MSOA",
    geoCode: "E02006047"
  },
  {
    en: "Stratton, Holcombe & Highbury",
    geoType: "MSOA",
    geoCode: "E02006048"
  },
  {
    en: "Frome North East",
    geoType: "MSOA",
    geoCode: "E02006049"
  },
  {
    en: "Frome North West",
    geoType: "MSOA",
    geoCode: "E02006050"
  },
  {
    en: "Draycott, Westbury & Wookey",
    geoType: "MSOA",
    geoCode: "E02006051"
  },
  {
    en: "Oakhill, Horrington & Chewton Mendip",
    geoType: "MSOA",
    geoCode: "E02006052"
  },
  {
    en: "Frome South & East",
    geoType: "MSOA",
    geoCode: "E02006053"
  },
  {
    en: "Wells Town",
    geoType: "MSOA",
    geoCode: "E02006054"
  },
  {
    en: "Shepton Mallet",
    geoType: "MSOA",
    geoCode: "E02006055"
  },
  {
    en: "Evercreech & Nunney",
    geoType: "MSOA",
    geoCode: "E02006056"
  },
  {
    en: "Glastonbury Town",
    geoType: "MSOA",
    geoCode: "E02006057"
  },
  {
    en: "Glastonbury West & Street South",
    geoType: "MSOA",
    geoCode: "E02006058"
  },
  {
    en: "Pilton, Butleigh & Alhampton",
    geoType: "MSOA",
    geoCode: "E02006059"
  },
  {
    en: "Street Village",
    geoType: "MSOA",
    geoCode: "E02006060"
  },
  {
    en: "Cheddar & Axbridge",
    geoType: "MSOA",
    geoCode: "E02006061"
  },
  {
    en: "Berrow & Brent Knoll",
    geoType: "MSOA",
    geoCode: "E02006062"
  },
  {
    en: "Wedmore & Mark",
    geoType: "MSOA",
    geoCode: "E02006063"
  },
  {
    en: "Burnham-on-Sea",
    geoType: "MSOA",
    geoCode: "E02006064"
  },
  {
    en: "Highbridge",
    geoType: "MSOA",
    geoCode: "E02006065"
  },
  {
    en: "Pawlett, Puriton & Woolavington",
    geoType: "MSOA",
    geoCode: "E02006066"
  },
  {
    en: "Cannington, Combwich & Nether Stowey",
    geoType: "MSOA",
    geoCode: "E02006067"
  },
  {
    en: "Bridgwater North",
    geoType: "MSOA",
    geoCode: "E02006068"
  },
  {
    en: "Bridgwater Town",
    geoType: "MSOA",
    geoCode: "E02006069"
  },
  {
    en: "Bridgwater East",
    geoType: "MSOA",
    geoCode: "E02006070"
  },
  {
    en: "Wembdon & Chilton Trinity",
    geoType: "MSOA",
    geoCode: "E02006071"
  },
  {
    en: "Westonzoyland, Ashcott & Cossington",
    geoType: "MSOA",
    geoCode: "E02006072"
  },
  {
    en: "Bridgwater South",
    geoType: "MSOA",
    geoCode: "E02006073"
  },
  {
    en: "Stockmoor & North Petherton",
    geoType: "MSOA",
    geoCode: "E02006074"
  },
  {
    en: "Bruton, Brewham & Cucklington",
    geoType: "MSOA",
    geoCode: "E02006075"
  },
  {
    en: "Castle Cary & Kenton Mandeville",
    geoType: "MSOA",
    geoCode: "E02006076"
  },
  {
    en: "Somerton",
    geoType: "MSOA",
    geoCode: "E02006077"
  },
  {
    en: "Langport & Long Sutton",
    geoType: "MSOA",
    geoCode: "E02006078"
  },
  {
    en: "Wincanton, Cheriton & Charlton Horethorne",
    geoType: "MSOA",
    geoCode: "E02006079"
  },
  {
    en: "Ilchester, Sparkford & Mudford",
    geoType: "MSOA",
    geoCode: "E02006080"
  },
  {
    en: "Curry Rivel & Fivehead",
    geoType: "MSOA",
    geoCode: "E02006081"
  },
  {
    en: "Templecombe, Hentsridge & Milborne Port",
    geoType: "MSOA",
    geoCode: "E02006082"
  },
  {
    en: "Martock",
    geoType: "MSOA",
    geoCode: "E02006083"
  },
  {
    en: "South Petherton, Seavington & Kingsbury",
    geoType: "MSOA",
    geoCode: "E02006084"
  },
  {
    en: "Yeovil North East",
    geoType: "MSOA",
    geoCode: "E02006085"
  },
  {
    en: "Yeovil Lufton & Hollands",
    geoType: "MSOA",
    geoCode: "E02006086"
  },
  {
    en: "Yeovil Larkhill",
    geoType: "MSOA",
    geoCode: "E02006087"
  },
  {
    en: "Yeovil Milford Park",
    geoType: "MSOA",
    geoCode: "E02006088"
  },
  {
    en: "Yeovil Town",
    geoType: "MSOA",
    geoCode: "E02006089"
  },
  {
    en: "Yeovil Preston Plucknett",
    geoType: "MSOA",
    geoCode: "E02006090"
  },
  {
    en: "Ham Hill & Merriott",
    geoType: "MSOA",
    geoCode: "E02006091"
  },
  {
    en: "Yeovil South",
    geoType: "MSOA",
    geoCode: "E02006092"
  },
  {
    en: "Ilminster & Horton",
    geoType: "MSOA",
    geoCode: "E02006093"
  },
  {
    en: "Stoford & the Cokers",
    geoType: "MSOA",
    geoCode: "E02006094"
  },
  {
    en: "Crewkerne",
    geoType: "MSOA",
    geoCode: "E02006095"
  },
  {
    en: "Chard North & East",
    geoType: "MSOA",
    geoCode: "E02006096"
  },
  {
    en: "Chard West",
    geoType: "MSOA",
    geoCode: "E02006097"
  },
  {
    en: "Tatworth & Combe St Nicholas",
    geoType: "MSOA",
    geoCode: "E02006098"
  },
  {
    en: "Bishops Lydeard & Cotford St Luke",
    geoType: "MSOA",
    geoCode: "E02006099"
  },
  {
    en: "Taunton Rowbarton & Kingston",
    geoType: "MSOA",
    geoCode: "E02006100"
  },
  {
    en: "Wiveliscombe & Milverton",
    geoType: "MSOA",
    geoCode: "E02006101"
  },
  {
    en: "Taunton Pyrland & Priorswood",
    geoType: "MSOA",
    geoCode: "E02006102"
  },
  {
    en: "Ruishton & North Curry",
    geoType: "MSOA",
    geoCode: "E02006103"
  },
  {
    en: "Taunton Halcon & Monkton Heathfield",
    geoType: "MSOA",
    geoCode: "E02006104"
  },
  {
    en: "Taunton North Town",
    geoType: "MSOA",
    geoCode: "E02006105"
  },
  {
    en: "Bishop's Hull & Norton Fitzwarren",
    geoType: "MSOA",
    geoCode: "E02006106"
  },
  {
    en: "Taunton Holway & Lambrook",
    geoType: "MSOA",
    geoCode: "E02006107"
  },
  {
    en: "Taunton Wilton",
    geoType: "MSOA",
    geoCode: "E02006108"
  },
  {
    en: "Taunton Galmington & Trull",
    geoType: "MSOA",
    geoCode: "E02006109"
  },
  {
    en: "Wellington North",
    geoType: "MSOA",
    geoCode: "E02006110"
  },
  {
    en: "Wellington South, Rockwell Green & West Buckland",
    geoType: "MSOA",
    geoCode: "E02006111"
  },
  {
    en: "Dowslands & Blackdown",
    geoType: "MSOA",
    geoCode: "E02006112"
  },
  {
    en: "Minehead Town",
    geoType: "MSOA",
    geoCode: "E02006113"
  },
  {
    en: "Minehead Outer & Porlock",
    geoType: "MSOA",
    geoCode: "E02006114"
  },
  {
    en: "Watchet, Washford & Carhampton",
    geoType: "MSOA",
    geoCode: "E02006115"
  },
  {
    en: "Williton, Quantock & Stogursey",
    geoType: "MSOA",
    geoCode: "E02006116"
  },
  {
    en: "Dunster, Dulverton & Exmoor",
    geoType: "MSOA",
    geoCode: "E02006117"
  },
  {
    en: "Rugeley North & Etchinghill",
    geoType: "MSOA",
    geoCode: "E02006118"
  },
  {
    en: "Rugeley Town",
    geoType: "MSOA",
    geoCode: "E02006119"
  },
  {
    en: "Rugeley South & Brereton",
    geoType: "MSOA",
    geoCode: "E02006120"
  },
  {
    en: "Hednesford Pye Green",
    geoType: "MSOA",
    geoCode: "E02006121"
  },
  {
    en: "Hednesford Central",
    geoType: "MSOA",
    geoCode: "E02006122"
  },
  {
    en: "Wimblebury & Cannock Wood",
    geoType: "MSOA",
    geoCode: "E02006123"
  },
  {
    en: "Cannock North",
    geoType: "MSOA",
    geoCode: "E02006124"
  },
  {
    en: "Cannock North East",
    geoType: "MSOA",
    geoCode: "E02006125"
  },
  {
    en: "Hednesford South & Heath Hayes",
    geoType: "MSOA",
    geoCode: "E02006126"
  },
  {
    en: "Hawks Green",
    geoType: "MSOA",
    geoCode: "E02006127"
  },
  {
    en: "Cannock West & Mill Green",
    geoType: "MSOA",
    geoCode: "E02006128"
  },
  {
    en: "Cannock South",
    geoType: "MSOA",
    geoCode: "E02006129"
  },
  {
    en: "Norton Canes",
    geoType: "MSOA",
    geoCode: "E02006130"
  },
  {
    en: "Mayfield, Rocester & Bramshall",
    geoType: "MSOA",
    geoCode: "E02006131"
  },
  {
    en: "Uttoxeter Heath",
    geoType: "MSOA",
    geoCode: "E02006132"
  },
  {
    en: "Uttoxeter Town",
    geoType: "MSOA",
    geoCode: "E02006133"
  },
  {
    en: "Rolleston-on-Dove & Tutbury",
    geoType: "MSOA",
    geoCode: "E02006134"
  },
  {
    en: "Burton Stretton",
    geoType: "MSOA",
    geoCode: "E02006135"
  },
  {
    en: "Abbots Bromley, Yoxall & Marchington",
    geoType: "MSOA",
    geoCode: "E02006136"
  },
  {
    en: "Burton Horninglow",
    geoType: "MSOA",
    geoCode: "E02006137"
  },
  {
    en: "Burton Eton Park",
    geoType: "MSOA",
    geoCode: "E02006138"
  },
  {
    en: "Burton Shobnall",
    geoType: "MSOA",
    geoCode: "E02006139"
  },
  {
    en: "Burton Winshill",
    geoType: "MSOA",
    geoCode: "E02006140"
  },
  {
    en: "Burton Central",
    geoType: "MSOA",
    geoCode: "E02006141"
  },
  {
    en: "Burton Brizlincote",
    geoType: "MSOA",
    geoCode: "E02006142"
  },
  {
    en: "Branston",
    geoType: "MSOA",
    geoCode: "E02006143"
  },
  {
    en: "Burton Stapenhill",
    geoType: "MSOA",
    geoCode: "E02006144"
  },
  {
    en: "Barton-under-Needwood",
    geoType: "MSOA",
    geoCode: "E02006145"
  },
  {
    en: "Armitage & Colton",
    geoType: "MSOA",
    geoCode: "E02006146"
  },
  {
    en: "Alrewas, Fradley & King's Bromley",
    geoType: "MSOA",
    geoCode: "E02006147"
  },
  {
    en: "Burntwood North East & Longdon",
    geoType: "MSOA",
    geoCode: "E02006148"
  },
  {
    en: "Lichfield Central",
    geoType: "MSOA",
    geoCode: "E02006149"
  },
  {
    en: "Lichfield East",
    geoType: "MSOA",
    geoCode: "E02006150"
  },
  {
    en: "Burntwood West",
    geoType: "MSOA",
    geoCode: "E02006151"
  },
  {
    en: "Lichfield West & South",
    geoType: "MSOA",
    geoCode: "E02006152"
  },
  {
    en: "Whittington, Hopwas & Clifton Campville",
    geoType: "MSOA",
    geoCode: "E02006153"
  },
  {
    en: "Burntwood Chase Terrace & Hammerwich",
    geoType: "MSOA",
    geoCode: "E02006154"
  },
  {
    en: "Burntwood Chasetown",
    geoType: "MSOA",
    geoCode: "E02006155"
  },
  {
    en: "Shenstone, Stonnall & Little Aston",
    geoType: "MSOA",
    geoCode: "E02006156"
  },
  {
    en: "Fazeley, Mile Oak & Drayton Basset",
    geoType: "MSOA",
    geoCode: "E02006157"
  },
  {
    en: "Kidsgrove East",
    geoType: "MSOA",
    geoCode: "E02006158"
  },
  {
    en: "Kidsgrove Central",
    geoType: "MSOA",
    geoCode: "E02006159"
  },
  {
    en: "Kidsgrove West",
    geoType: "MSOA",
    geoCode: "E02006160"
  },
  {
    en: "Talke & Crackley",
    geoType: "MSOA",
    geoCode: "E02006161"
  },
  {
    en: "Audley & Bignall End",
    geoType: "MSOA",
    geoCode: "E02006162"
  },
  {
    en: "Bradwell",
    geoType: "MSOA",
    geoCode: "E02006163"
  },
  {
    en: "Chesterton & Knutton",
    geoType: "MSOA",
    geoCode: "E02006164"
  },
  {
    en: "Porthill",
    geoType: "MSOA",
    geoCode: "E02006165"
  },
  {
    en: "May Bank",
    geoType: "MSOA",
    geoCode: "E02006166"
  },
  {
    en: "Newcastle West & Cross Heath",
    geoType: "MSOA",
    geoCode: "E02006167"
  },
  {
    en: "Newcastle Town",
    geoType: "MSOA",
    geoCode: "E02006168"
  },
  {
    en: "Silverdale & Keele",
    geoType: "MSOA",
    geoCode: "E02006169"
  },
  {
    en: "Madeley & Betley",
    geoType: "MSOA",
    geoCode: "E02006170"
  },
  {
    en: "Clayton & Langdale",
    geoType: "MSOA",
    geoCode: "E02006171"
  },
  {
    en: "Westlands & Seabridge",
    geoType: "MSOA",
    geoCode: "E02006172"
  },
  {
    en: "Loggerheads & Baldwins Gate",
    geoType: "MSOA",
    geoCode: "E02006173"
  },
  {
    en: "Penkridge & Acton Trussell",
    geoType: "MSOA",
    geoCode: "E02006174"
  },
  {
    en: "Huntington",
    geoType: "MSOA",
    geoCode: "E02006175"
  },
  {
    en: "Brewood & Wheaton Aston",
    geoType: "MSOA",
    geoCode: "E02006176"
  },
  {
    en: "Cheslyn Hay",
    geoType: "MSOA",
    geoCode: "E02006177"
  },
  {
    en: "Great Wyrley",
    geoType: "MSOA",
    geoCode: "E02006178"
  },
  {
    en: "Featherstone West, Coven & Shareshill",
    geoType: "MSOA",
    geoCode: "E02006179"
  },
  {
    en: "Featherstone East & Essington",
    geoType: "MSOA",
    geoCode: "E02006180"
  },
  {
    en: "Bilbrook",
    geoType: "MSOA",
    geoCode: "E02006181"
  },
  {
    en: "Codsall",
    geoType: "MSOA",
    geoCode: "E02006182"
  },
  {
    en: "Wombourne Inner",
    geoType: "MSOA",
    geoCode: "E02006185"
  },
  {
    en: "Wombourne Outer, Swindon & Seisdon",
    geoType: "MSOA",
    geoCode: "E02006186"
  },
  {
    en: "Kinver",
    geoType: "MSOA",
    geoCode: "E02006187"
  },
  {
    en: "Fulford & Meir Heath",
    geoType: "MSOA",
    geoCode: "E02006188"
  },
  {
    en: "Barlaston, Tittensor & Swynnerton",
    geoType: "MSOA",
    geoCode: "E02006189"
  },
  {
    en: "Stone Town",
    geoType: "MSOA",
    geoCode: "E02006190"
  },
  {
    en: "Little Stoke & Milwich",
    geoType: "MSOA",
    geoCode: "E02006191"
  },
  {
    en: "Eccleshall & Yarnfield",
    geoType: "MSOA",
    geoCode: "E02006192"
  },
  {
    en: "Stafford Common & Great Bridgeford",
    geoType: "MSOA",
    geoCode: "E02006193"
  },
  {
    en: "Doxey & Holmcroft",
    geoType: "MSOA",
    geoCode: "E02006194"
  },
  {
    en: "Weston & Haywood",
    geoType: "MSOA",
    geoCode: "E02006195"
  },
  {
    en: "Stafford North East",
    geoType: "MSOA",
    geoCode: "E02006196"
  },
  {
    en: "Central Stafford",
    geoType: "MSOA",
    geoCode: "E02006197"
  },
  {
    en: "Littleworth & Hopton",
    geoType: "MSOA",
    geoCode: "E02006198"
  },
  {
    en: "Rowley & Derrington",
    geoType: "MSOA",
    geoCode: "E02006199"
  },
  {
    en: "Highfields & Burton Manor",
    geoType: "MSOA",
    geoCode: "E02006200"
  },
  {
    en: "Weeping Cross & Brocton",
    geoType: "MSOA",
    geoCode: "E02006201"
  },
  {
    en: "Gnosall & Haughton",
    geoType: "MSOA",
    geoCode: "E02006202"
  },
  {
    en: "Mosspit & Silkmore Lane",
    geoType: "MSOA",
    geoCode: "E02006203"
  },
  {
    en: "Leek East & Upper Hulme",
    geoType: "MSOA",
    geoCode: "E02006204"
  },
  {
    en: "Biddulph Moor & Rudyard",
    geoType: "MSOA",
    geoCode: "E02006205"
  },
  {
    en: "Biddulph Central",
    geoType: "MSOA",
    geoCode: "E02006206"
  },
  {
    en: "Biddulph North & Brownlees",
    geoType: "MSOA",
    geoCode: "E02006207"
  },
  {
    en: "Leek Town",
    geoType: "MSOA",
    geoCode: "E02006208"
  },
  {
    en: "Leek South & Cheddleton",
    geoType: "MSOA",
    geoCode: "E02006209"
  },
  {
    en: "Ipstones, Warslow & Hamps Valley",
    geoType: "MSOA",
    geoCode: "E02006210"
  },
  {
    en: "Endon & Brown Edge",
    geoType: "MSOA",
    geoCode: "E02006211"
  },
  {
    en: "Werrington & Wetley Rocks",
    geoType: "MSOA",
    geoCode: "E02006212"
  },
  {
    en: "Cheadle North, Alton & Kingsley",
    geoType: "MSOA",
    geoCode: "E02006213"
  },
  {
    en: "Cheadle Town",
    geoType: "MSOA",
    geoCode: "E02006214"
  },
  {
    en: "Blythe Bridge, Forsbrook & Caverswall",
    geoType: "MSOA",
    geoCode: "E02006215"
  },
  {
    en: "Cheadle South & Upper Tean",
    geoType: "MSOA",
    geoCode: "E02006216"
  },
  {
    en: "Coton Farm & Perry Crofts",
    geoType: "MSOA",
    geoCode: "E02006217"
  },
  {
    en: "Central Tamworth",
    geoType: "MSOA",
    geoCode: "E02006218"
  },
  {
    en: "Amington",
    geoType: "MSOA",
    geoCode: "E02006219"
  },
  {
    en: "Bolehall",
    geoType: "MSOA",
    geoCode: "E02006220"
  },
  {
    en: "Kettlebrook",
    geoType: "MSOA",
    geoCode: "E02006221"
  },
  {
    en: "Belgrave",
    geoType: "MSOA",
    geoCode: "E02006222"
  },
  {
    en: "Glascote Heath",
    geoType: "MSOA",
    geoCode: "E02006223"
  },
  {
    en: "Wilnecote East",
    geoType: "MSOA",
    geoCode: "E02006224"
  },
  {
    en: "Dosthill & Two Gates",
    geoType: "MSOA",
    geoCode: "E02006225"
  },
  {
    en: "Wilnecote West & Hockley",
    geoType: "MSOA",
    geoCode: "E02006226"
  },
  {
    en: "Lavenham, Bildeston & Brettenham",
    geoType: "MSOA",
    geoCode: "E02006227"
  },
  {
    en: "Glemsford & Lawshall",
    geoType: "MSOA",
    geoCode: "E02006228"
  },
  {
    en: "North Sudbury & Long Melford",
    geoType: "MSOA",
    geoCode: "E02006229"
  },
  {
    en: "Hadleigh",
    geoType: "MSOA",
    geoCode: "E02006230"
  },
  {
    en: "Sproughton, Washbrook & Hintlesham",
    geoType: "MSOA",
    geoCode: "E02006231"
  },
  {
    en: "Acton, Great Waldingfield & Bures",
    geoType: "MSOA",
    geoCode: "E02006232"
  },
  {
    en: "Sudbury",
    geoType: "MSOA",
    geoCode: "E02006233"
  },
  {
    en: "Great Cornard",
    geoType: "MSOA",
    geoCode: "E02006234"
  },
  {
    en: "Leavenheath, Nayland & Boxford",
    geoType: "MSOA",
    geoCode: "E02006235"
  },
  {
    en: "East Bergholt, Brantham & Capel St Mary",
    geoType: "MSOA",
    geoCode: "E02006236"
  },
  {
    en: "Shotley Peninsula",
    geoType: "MSOA",
    geoCode: "E02006237"
  },
  {
    en: "Brandon",
    geoType: "MSOA",
    geoCode: "E02006238"
  },
  {
    en: "Lakenheath",
    geoType: "MSOA",
    geoCode: "E02006239"
  },
  {
    en: "Beck Row, Eriswell & Barton Mills",
    geoType: "MSOA",
    geoCode: "E02006240"
  },
  {
    en: "Mildenhall",
    geoType: "MSOA",
    geoCode: "E02006241"
  },
  {
    en: "Red Lodge, Icklingham & Moulton",
    geoType: "MSOA",
    geoCode: "E02006242"
  },
  {
    en: "North Newmarket, Studlands & Exning",
    geoType: "MSOA",
    geoCode: "E02006243"
  },
  {
    en: "Whitton",
    geoType: "MSOA",
    geoCode: "E02006245"
  },
  {
    en: "Castle Hill",
    geoType: "MSOA",
    geoCode: "E02006246"
  },
  {
    en: "Whitehouse",
    geoType: "MSOA",
    geoCode: "E02006247"
  },
  {
    en: "Rushmere",
    geoType: "MSOA",
    geoCode: "E02006248"
  },
  {
    en: "Christchurch Park",
    geoType: "MSOA",
    geoCode: "E02006249"
  },
  {
    en: "Westgate",
    geoType: "MSOA",
    geoCode: "E02006250"
  },
  {
    en: "Ipswich Central",
    geoType: "MSOA",
    geoCode: "E02006251"
  },
  {
    en: "California",
    geoType: "MSOA",
    geoCode: "E02006252"
  },
  {
    en: "Broke Hall",
    geoType: "MSOA",
    geoCode: "E02006253"
  },
  {
    en: "Gipping & Chantry Park",
    geoType: "MSOA",
    geoCode: "E02006254"
  },
  {
    en: "Holywells",
    geoType: "MSOA",
    geoCode: "E02006255"
  },
  {
    en: "Maidenhall, Stoke & Port",
    geoType: "MSOA",
    geoCode: "E02006256"
  },
  {
    en: "Belstead Hills",
    geoType: "MSOA",
    geoCode: "E02006257"
  },
  {
    en: "Priory Heath",
    geoType: "MSOA",
    geoCode: "E02006258"
  },
  {
    en: "Stoke Park",
    geoType: "MSOA",
    geoCode: "E02006259"
  },
  {
    en: "Gainsborough, Greenwich & Orwell",
    geoType: "MSOA",
    geoCode: "E02006260"
  },
  {
    en: "Eye, Palgrave & Occold",
    geoType: "MSOA",
    geoCode: "E02006261"
  },
  {
    en: "Rickinghall, Walsham le Willows & Gislingham",
    geoType: "MSOA",
    geoCode: "E02006262"
  },
  {
    en: "Fressingfield, Laxfield & Worlingworth",
    geoType: "MSOA",
    geoCode: "E02006263"
  },
  {
    en: "Thurston, Badwell Ash & Elmswell North",
    geoType: "MSOA",
    geoCode: "E02006264"
  },
  {
    en: "Stowupland, Mendlesham & Bacton",
    geoType: "MSOA",
    geoCode: "E02006265"
  },
  {
    en: "Elmswell South, Haughley, Beyton & Felsham",
    geoType: "MSOA",
    geoCode: "E02006266"
  },
  {
    en: "Debenham, Stonham & Coddenham",
    geoType: "MSOA",
    geoCode: "E02006267"
  },
  {
    en: "Stowmarket West",
    geoType: "MSOA",
    geoCode: "E02006268"
  },
  {
    en: "Stowmarket Outer, Finborough & Battisford",
    geoType: "MSOA",
    geoCode: "E02006269"
  },
  {
    en: "Stowmarket East & Needham Market North",
    geoType: "MSOA",
    geoCode: "E02006270"
  },
  {
    en: "Needham Market South & Great Blakenham",
    geoType: "MSOA",
    geoCode: "E02006271"
  },
  {
    en: "Claydon & Bramford",
    geoType: "MSOA",
    geoCode: "E02006272"
  },
  {
    en: "Stanton & Barningham",
    geoType: "MSOA",
    geoCode: "E02006273"
  },
  {
    en: "Ixworth, Honington & Barnham",
    geoType: "MSOA",
    geoCode: "E02006274"
  },
  {
    en: "Howard Estate & Northgate",
    geoType: "MSOA",
    geoCode: "E02006275"
  },
  {
    en: "Fornham, Great Barton & Rougham",
    geoType: "MSOA",
    geoCode: "E02006276"
  },
  {
    en: "Moreton Hall",
    geoType: "MSOA",
    geoCode: "E02006277"
  },
  {
    en: "Bury St Edmunds Central",
    geoType: "MSOA",
    geoCode: "E02006278"
  },
  {
    en: "Bury St Edmunds West",
    geoType: "MSOA",
    geoCode: "E02006279"
  },
  {
    en: "Barrow, Chedburgh & Sicklesmere",
    geoType: "MSOA",
    geoCode: "E02006280"
  },
  {
    en: "Eastgate & Southgate",
    geoType: "MSOA",
    geoCode: "E02006281"
  },
  {
    en: "Clare, Cavendish & Wickhambrook",
    geoType: "MSOA",
    geoCode: "E02006282"
  },
  {
    en: "Kedington, Hundon & Withersfield",
    geoType: "MSOA",
    geoCode: "E02006283"
  },
  {
    en: "Haverhill North",
    geoType: "MSOA",
    geoCode: "E02006284"
  },
  {
    en: "Haverhill West",
    geoType: "MSOA",
    geoCode: "E02006285"
  },
  {
    en: "Haverhill East & South",
    geoType: "MSOA",
    geoCode: "E02006286"
  },
  {
    en: "Yoxford, Wenhaston & Walberswick",
    geoType: "MSOA",
    geoCode: "E02006287"
  },
  {
    en: "Framlingham & Hacheston",
    geoType: "MSOA",
    geoCode: "E02006288"
  },
  {
    en: "Saxmundham & Coldfair Green",
    geoType: "MSOA",
    geoCode: "E02006289"
  },
  {
    en: "Leiston & Aldeburgh",
    geoType: "MSOA",
    geoCode: "E02006290"
  },
  {
    en: "Wickham Market & Melton",
    geoType: "MSOA",
    geoCode: "E02006291"
  },
  {
    en: "Westerfield, Grundisburgh & Bredfield",
    geoType: "MSOA",
    geoCode: "E02006292"
  },
  {
    en: "Rendlesham, Orford & Hollesley",
    geoType: "MSOA",
    geoCode: "E02006293"
  },
  {
    en: "Woodbridge",
    geoType: "MSOA",
    geoCode: "E02006294"
  },
  {
    en: "Kesgrave West & Rushmere",
    geoType: "MSOA",
    geoCode: "E02006295"
  },
  {
    en: "Kesgrave East & Martlesham",
    geoType: "MSOA",
    geoCode: "E02006296"
  },
  {
    en: "Bixley, Warren Heath & Nacton",
    geoType: "MSOA",
    geoCode: "E02006297"
  },
  {
    en: "Trimley & Kirton",
    geoType: "MSOA",
    geoCode: "E02006298"
  },
  {
    en: "Felixstowe East",
    geoType: "MSOA",
    geoCode: "E02006299"
  },
  {
    en: "Felixstowe West",
    geoType: "MSOA",
    geoCode: "E02006300"
  },
  {
    en: "Felixstowe Seafront",
    geoType: "MSOA",
    geoCode: "E02006301"
  },
  {
    en: "Gunton East, Corton & Somerleyton",
    geoType: "MSOA",
    geoCode: "E02006302"
  },
  {
    en: "Gunton West",
    geoType: "MSOA",
    geoCode: "E02006303"
  },
  {
    en: "Oulton",
    geoType: "MSOA",
    geoCode: "E02006304"
  },
  {
    en: "Lowestoft Central",
    geoType: "MSOA",
    geoCode: "E02006305"
  },
  {
    en: "Normanston & Oulton Broad East",
    geoType: "MSOA",
    geoCode: "E02006306"
  },
  {
    en: "Oulton Broad West",
    geoType: "MSOA",
    geoCode: "E02006307"
  },
  {
    en: "Lowestoft Harbour & Kirkley",
    geoType: "MSOA",
    geoCode: "E02006308"
  },
  {
    en: "Pakefield North",
    geoType: "MSOA",
    geoCode: "E02006309"
  },
  {
    en: "Carlton Colville",
    geoType: "MSOA",
    geoCode: "E02006310"
  },
  {
    en: "Beccles",
    geoType: "MSOA",
    geoCode: "E02006311"
  },
  {
    en: "Worlingham & Barnby",
    geoType: "MSOA",
    geoCode: "E02006312"
  },
  {
    en: "Pakefield South & Kessingland",
    geoType: "MSOA",
    geoCode: "E02006313"
  },
  {
    en: "Bungay & the Saints",
    geoType: "MSOA",
    geoCode: "E02006314"
  },
  {
    en: "Southwold, Reydon & Wrentham",
    geoType: "MSOA",
    geoCode: "E02006315"
  },
  {
    en: "Halesworth & Wangford",
    geoType: "MSOA",
    geoCode: "E02006316"
  },
  {
    en: "West Molesey North",
    geoType: "MSOA",
    geoCode: "E02006317"
  },
  {
    en: "East Molesey",
    geoType: "MSOA",
    geoCode: "E02006318"
  },
  {
    en: "West Molesey South",
    geoType: "MSOA",
    geoCode: "E02006319"
  },
  {
    en: "Walton North & Molesey Heath",
    geoType: "MSOA",
    geoCode: "E02006320"
  },
  {
    en: "Thames Ditton",
    geoType: "MSOA",
    geoCode: "E02006321"
  },
  {
    en: "Long Ditton",
    geoType: "MSOA",
    geoCode: "E02006322"
  },
  {
    en: "Walton Central",
    geoType: "MSOA",
    geoCode: "E02006323"
  },
  {
    en: "Walton East",
    geoType: "MSOA",
    geoCode: "E02006324"
  },
  {
    en: "Hinchley Wood & Weston Green",
    geoType: "MSOA",
    geoCode: "E02006325"
  },
  {
    en: "Walton Hersham Road",
    geoType: "MSOA",
    geoCode: "E02006326"
  },
  {
    en: "Oatlands",
    geoType: "MSOA",
    geoCode: "E02006327"
  },
  {
    en: "Weybridge Riverside",
    geoType: "MSOA",
    geoCode: "E02006328"
  },
  {
    en: "Esher",
    geoType: "MSOA",
    geoCode: "E02006329"
  },
  {
    en: "Hersham",
    geoType: "MSOA",
    geoCode: "E02006330"
  },
  {
    en: "Claygate",
    geoType: "MSOA",
    geoCode: "E02006331"
  },
  {
    en: "Weybridge St George's Hill",
    geoType: "MSOA",
    geoCode: "E02006332"
  },
  {
    en: "Cobham",
    geoType: "MSOA",
    geoCode: "E02006333"
  },
  {
    en: "Oxshott & Stoke D'Abernon",
    geoType: "MSOA",
    geoCode: "E02006334"
  },
  {
    en: "Worcester Park West",
    geoType: "MSOA",
    geoCode: "E02006335"
  },
  {
    en: "Ruxley Lane",
    geoType: "MSOA",
    geoCode: "E02006336"
  },
  {
    en: "Stoneleigh & Auriol",
    geoType: "MSOA",
    geoCode: "E02006337"
  },
  {
    en: "West Ewell",
    geoType: "MSOA",
    geoCode: "E02006338"
  },
  {
    en: "Horton & Manor Park",
    geoType: "MSOA",
    geoCode: "E02006339"
  },
  {
    en: "Epsom North",
    geoType: "MSOA",
    geoCode: "E02006341"
  },
  {
    en: "Epsom Town",
    geoType: "MSOA",
    geoCode: "E02006342"
  },
  {
    en: "Epsom Downs & Common",
    geoType: "MSOA",
    geoCode: "E02006343"
  },
  {
    en: "West Clandon & Send",
    geoType: "MSOA",
    geoCode: "E02006344"
  },
  {
    en: "Pirbright & Normandy",
    geoType: "MSOA",
    geoCode: "E02006345"
  },
  {
    en: "Horsley & Effingham",
    geoType: "MSOA",
    geoCode: "E02006346"
  },
  {
    en: "Ash Vale",
    geoType: "MSOA",
    geoCode: "E02006347"
  },
  {
    en: "Worplesdon, Jacobs Well & Wood Street",
    geoType: "MSOA",
    geoCode: "E02006348"
  },
  {
    en: "Stoughton",
    geoType: "MSOA",
    geoCode: "E02006349"
  },
  {
    en: "Bellfields, Slyfield & Weyfield",
    geoType: "MSOA",
    geoCode: "E02006350"
  },
  {
    en: "Burpham North & Merrow East",
    geoType: "MSOA",
    geoCode: "E02006351"
  },
  {
    en: "Woodbridge Hill",
    geoType: "MSOA",
    geoCode: "E02006352"
  },
  {
    en: "Ash Wharf",
    geoType: "MSOA",
    geoCode: "E02006353"
  },
  {
    en: "Burpham, Boxgrove & Merrow West",
    geoType: "MSOA",
    geoCode: "E02006354"
  },
  {
    en: "Park Barn & Royal Surrey",
    geoType: "MSOA",
    geoCode: "E02006355"
  },
  {
    en: "Guildford Town Centre",
    geoType: "MSOA",
    geoCode: "E02006356"
  },
  {
    en: "Tongham",
    geoType: "MSOA",
    geoCode: "E02006357"
  },
  {
    en: "Onslow Village and University",
    geoType: "MSOA",
    geoCode: "E02006358"
  },
  {
    en: "Pewley Down & The Mount",
    geoType: "MSOA",
    geoCode: "E02006359"
  },
  {
    en: "Shalford & Wanborough",
    geoType: "MSOA",
    geoCode: "E02006360"
  },
  {
    en: "Gomshall, Shere & Albury",
    geoType: "MSOA",
    geoCode: "E02006361"
  },
  {
    en: "Ashtead East",
    geoType: "MSOA",
    geoCode: "E02006362"
  },
  {
    en: "Ashtead West",
    geoType: "MSOA",
    geoCode: "E02006363"
  },
  {
    en: "Leatherhead North",
    geoType: "MSOA",
    geoCode: "E02006364"
  },
  {
    en: "Leatherhead South & Ashtead South",
    geoType: "MSOA",
    geoCode: "E02006365"
  },
  {
    en: "Fetcham",
    geoType: "MSOA",
    geoCode: "E02006366"
  },
  {
    en: "Bookham North",
    geoType: "MSOA",
    geoCode: "E02006367"
  },
  {
    en: "Bookham South",
    geoType: "MSOA",
    geoCode: "E02006368"
  },
  {
    en: "Box Hill & Brockham",
    geoType: "MSOA",
    geoCode: "E02006369"
  },
  {
    en: "Dorking North & Westhumble",
    geoType: "MSOA",
    geoCode: "E02006370"
  },
  {
    en: "Dorking South",
    geoType: "MSOA",
    geoCode: "E02006371"
  },
  {
    en: "Holmwoods",
    geoType: "MSOA",
    geoCode: "E02006372"
  },
  {
    en: "Westcott, Ockley & Capel",
    geoType: "MSOA",
    geoCode: "E02006373"
  },
  {
    en: "Charlwood, Newdigate & Beare Green",
    geoType: "MSOA",
    geoCode: "E02006374"
  },
  {
    en: "Nork",
    geoType: "MSOA",
    geoCode: "E02006375"
  },
  {
    en: "Banstead",
    geoType: "MSOA",
    geoCode: "E02006376"
  },
  {
    en: "Tattenham North",
    geoType: "MSOA",
    geoCode: "E02006377"
  },
  {
    en: "Chipstead & Netherne",
    geoType: "MSOA",
    geoCode: "E02006378"
  },
  {
    en: "Tattenham South",
    geoType: "MSOA",
    geoCode: "E02006379"
  },
  {
    en: "Tadworth & Walton",
    geoType: "MSOA",
    geoCode: "E02006380"
  },
  {
    en: "Kingswood",
    geoType: "MSOA",
    geoCode: "E02006381"
  },
  {
    en: "Merstham",
    geoType: "MSOA",
    geoCode: "E02006382"
  },
  {
    en: "Reigate Hill & Gatton",
    geoType: "MSOA",
    geoCode: "E02006383"
  },
  {
    en: "Redhill West",
    geoType: "MSOA",
    geoCode: "E02006384"
  },
  {
    en: "Redhill East",
    geoType: "MSOA",
    geoCode: "E02006385"
  },
  {
    en: "Reigate Central & Redhill Common",
    geoType: "MSOA",
    geoCode: "E02006386"
  },
  {
    en: "Reigate South Park",
    geoType: "MSOA",
    geoCode: "E02006387"
  },
  {
    en: "Earlswood & Whitebushes",
    geoType: "MSOA",
    geoCode: "E02006388"
  },
  {
    en: "Salfords & Woodhatch",
    geoType: "MSOA",
    geoCode: "E02006389"
  },
  {
    en: "Horley West",
    geoType: "MSOA",
    geoCode: "E02006390"
  },
  {
    en: "Horley East",
    geoType: "MSOA",
    geoCode: "E02006391"
  },
  {
    en: "Horley Central",
    geoType: "MSOA",
    geoCode: "E02006392"
  },
  {
    en: "Egham Town",
    geoType: "MSOA",
    geoCode: "E02006393"
  },
  {
    en: "Englefield Green & University",
    geoType: "MSOA",
    geoCode: "E02006394"
  },
  {
    en: "Egham Hythe & Pooley Green",
    geoType: "MSOA",
    geoCode: "E02006395"
  },
  {
    en: "Thorpe",
    geoType: "MSOA",
    geoCode: "E02006396"
  },
  {
    en: "Virginia Water",
    geoType: "MSOA",
    geoCode: "E02006397"
  },
  {
    en: "Chertsey",
    geoType: "MSOA",
    geoCode: "E02006398"
  },
  {
    en: "Addlestone North",
    geoType: "MSOA",
    geoCode: "E02006399"
  },
  {
    en: "Ottershaw & Lyne",
    geoType: "MSOA",
    geoCode: "E02006400"
  },
  {
    en: "Addlestone South",
    geoType: "MSOA",
    geoCode: "E02006401"
  },
  {
    en: "New Haw & Woodham",
    geoType: "MSOA",
    geoCode: "E02006402"
  },
  {
    en: "Stanwell North & Stanwell Moor",
    geoType: "MSOA",
    geoCode: "E02006403"
  },
  {
    en: "Stanwell South",
    geoType: "MSOA",
    geoCode: "E02006404"
  },
  {
    en: "Ashford West",
    geoType: "MSOA",
    geoCode: "E02006405"
  },
  {
    en: "Staines Town",
    geoType: "MSOA",
    geoCode: "E02006406"
  },
  {
    en: "Ashford East",
    geoType: "MSOA",
    geoCode: "E02006407"
  },
  {
    en: "Ashford Common",
    geoType: "MSOA",
    geoCode: "E02006408"
  },
  {
    en: "Staines South East",
    geoType: "MSOA",
    geoCode: "E02006409"
  },
  {
    en: "Sunbury Common",
    geoType: "MSOA",
    geoCode: "E02006410"
  },
  {
    en: "Staines South West",
    geoType: "MSOA",
    geoCode: "E02006411"
  },
  {
    en: "Sunbury East",
    geoType: "MSOA",
    geoCode: "E02006412"
  },
  {
    en: "Halliford & Sunbury West",
    geoType: "MSOA",
    geoCode: "E02006413"
  },
  {
    en: "Littleton & Shepperton Green",
    geoType: "MSOA",
    geoCode: "E02006414"
  },
  {
    en: "Shepperton Town",
    geoType: "MSOA",
    geoCode: "E02006415"
  },
  {
    en: "Chobham & Windlesham",
    geoType: "MSOA",
    geoCode: "E02006416"
  },
  {
    en: "Bagshot",
    geoType: "MSOA",
    geoCode: "E02006417"
  },
  {
    en: "Lightwater",
    geoType: "MSOA",
    geoCode: "E02006418"
  },
  {
    en: "Camberley North",
    geoType: "MSOA",
    geoCode: "E02006419"
  },
  {
    en: "Camberley Town",
    geoType: "MSOA",
    geoCode: "E02006420"
  },
  {
    en: "West End & Bisley",
    geoType: "MSOA",
    geoCode: "E02006421"
  },
  {
    en: "Camberley Heatherside",
    geoType: "MSOA",
    geoCode: "E02006422"
  },
  {
    en: "Camberley West",
    geoType: "MSOA",
    geoCode: "E02006423"
  },
  {
    en: "Camberley Parkside",
    geoType: "MSOA",
    geoCode: "E02006424"
  },
  {
    en: "Frimley",
    geoType: "MSOA",
    geoCode: "E02006425"
  },
  {
    en: "Frimley Green",
    geoType: "MSOA",
    geoCode: "E02006426"
  },
  {
    en: "Mytchett & Frith Hill",
    geoType: "MSOA",
    geoCode: "E02006427"
  },
  {
    en: "Warlingham West & Whyteleafe",
    geoType: "MSOA",
    geoCode: "E02006429"
  },
  {
    en: "Caterham North",
    geoType: "MSOA",
    geoCode: "E02006430"
  },
  {
    en: "Caterham Valley",
    geoType: "MSOA",
    geoCode: "E02006431"
  },
  {
    en: "Caterham West",
    geoType: "MSOA",
    geoCode: "E02006432"
  },
  {
    en: "Oxted North",
    geoType: "MSOA",
    geoCode: "E02006433"
  },
  {
    en: "Oxted South",
    geoType: "MSOA",
    geoCode: "E02006434"
  },
  {
    en: "Nutfield & Bletchingley",
    geoType: "MSOA",
    geoCode: "E02006435"
  },
  {
    en: "Godstone",
    geoType: "MSOA",
    geoCode: "E02006436"
  },
  {
    en: "Lingfield & Dormansland",
    geoType: "MSOA",
    geoCode: "E02006437"
  },
  {
    en: "Smallfield & Felbridge",
    geoType: "MSOA",
    geoCode: "E02006438"
  },
  {
    en: "Farnham Weybourne & Badshot Lea",
    geoType: "MSOA",
    geoCode: "E02006439"
  },
  {
    en: "Farnham Upper Hale",
    geoType: "MSOA",
    geoCode: "E02006440"
  },
  {
    en: "Farnham Town",
    geoType: "MSOA",
    geoCode: "E02006441"
  },
  {
    en: "Farnham Moor Park & Bourne",
    geoType: "MSOA",
    geoCode: "E02006442"
  },
  {
    en: "Farncombe",
    geoType: "MSOA",
    geoCode: "E02006443"
  },
  {
    en: "Farnham Shortheath",
    geoType: "MSOA",
    geoCode: "E02006444"
  },
  {
    en: "Godalming North",
    geoType: "MSOA",
    geoCode: "E02006445"
  },
  {
    en: "Blackheath, Wonersh & Shamley Green",
    geoType: "MSOA",
    geoCode: "E02006446"
  },
  {
    en: "Farnham Wrecclesham",
    geoType: "MSOA",
    geoCode: "E02006447"
  },
  {
    en: "Godalming South",
    geoType: "MSOA",
    geoCode: "E02006448"
  },
  {
    en: "Elstead & Milford",
    geoType: "MSOA",
    geoCode: "E02006449"
  },
  {
    en: "Wheelerstreet, Wormley & Hambledon",
    geoType: "MSOA",
    geoCode: "E02006450"
  },
  {
    en: "Cranleigh",
    geoType: "MSOA",
    geoCode: "E02006451"
  },
  {
    en: "Ewhurst & Chiddingfold",
    geoType: "MSOA",
    geoCode: "E02006453"
  },
  {
    en: "Haslemere East",
    geoType: "MSOA",
    geoCode: "E02006454"
  },
  {
    en: "Haslemere West",
    geoType: "MSOA",
    geoCode: "E02006455"
  },
  {
    en: "Byfleet",
    geoType: "MSOA",
    geoCode: "E02006456"
  },
  {
    en: "West Byfleet & Pyrford North",
    geoType: "MSOA",
    geoCode: "E02006457"
  },
  {
    en: "Horsell",
    geoType: "MSOA",
    geoCode: "E02006458"
  },
  {
    en: "Sheerwater",
    geoType: "MSOA",
    geoCode: "E02006459"
  },
  {
    en: "Goldsworth Park",
    geoType: "MSOA",
    geoCode: "E02006460"
  },
  {
    en: "Maybury Hill & Pyrford South",
    geoType: "MSOA",
    geoCode: "E02006461"
  },
  {
    en: "Knaphill",
    geoType: "MSOA",
    geoCode: "E02006462"
  },
  {
    en: "Woking Central",
    geoType: "MSOA",
    geoCode: "E02006463"
  },
  {
    en: "St John's",
    geoType: "MSOA",
    geoCode: "E02006464"
  },
  {
    en: "Hook Heath",
    geoType: "MSOA",
    geoCode: "E02006465"
  },
  {
    en: "Old Woking & Westfield",
    geoType: "MSOA",
    geoCode: "E02006466"
  },
  {
    en: "Mayford & Brookwood",
    geoType: "MSOA",
    geoCode: "E02006467"
  },
  {
    en: "Polesworth, Warton & Austrey",
    geoType: "MSOA",
    geoCode: "E02006468"
  },
  {
    en: "Dordon, Hurley & Wood End",
    geoType: "MSOA",
    geoCode: "E02006469"
  },
  {
    en: "Atherstone",
    geoType: "MSOA",
    geoCode: "E02006470"
  },
  {
    en: "Kingsbury & Curdworth",
    geoType: "MSOA",
    geoCode: "E02006471"
  },
  {
    en: "Hartshill & Ansley",
    geoType: "MSOA",
    geoCode: "E02006472"
  },
  {
    en: "Coleshill & Water Orton",
    geoType: "MSOA",
    geoCode: "E02006473"
  },
  {
    en: "New Arley & Fillongley",
    geoType: "MSOA",
    geoCode: "E02006474"
  },
  {
    en: "Weddington & St Nicholas Park",
    geoType: "MSOA",
    geoCode: "E02006475"
  },
  {
    en: "Camp Hill",
    geoType: "MSOA",
    geoCode: "E02006476"
  },
  {
    en: "Horeston Grange",
    geoType: "MSOA",
    geoCode: "E02006477"
  },
  {
    en: "Galley Common & Whittleford",
    geoType: "MSOA",
    geoCode: "E02006478"
  },
  {
    en: "Nuneaton Town Centre",
    geoType: "MSOA",
    geoCode: "E02006479"
  },
  {
    en: "Tomkinson Road",
    geoType: "MSOA",
    geoCode: "E02006480"
  },
  {
    en: "Stockingford",
    geoType: "MSOA",
    geoCode: "E02006481"
  },
  {
    en: "Bermuda & Heath End",
    geoType: "MSOA",
    geoCode: "E02006482"
  },
  {
    en: "Caldwell & Chilvers Coton",
    geoType: "MSOA",
    geoCode: "E02006483"
  },
  {
    en: "Attleborough",
    geoType: "MSOA",
    geoCode: "E02006484"
  },
  {
    en: "Whitestone",
    geoType: "MSOA",
    geoCode: "E02006485"
  },
  {
    en: "Bedworth Woodlands",
    geoType: "MSOA",
    geoCode: "E02006486"
  },
  {
    en: "Bedworth Town",
    geoType: "MSOA",
    geoCode: "E02006487"
  },
  {
    en: "Bulkington",
    geoType: "MSOA",
    geoCode: "E02006488"
  },
  {
    en: "Bedworth Coalpit Field & Exhall",
    geoType: "MSOA",
    geoCode: "E02006489"
  },
  {
    en: "Bedworth Heath",
    geoType: "MSOA",
    geoCode: "E02006490"
  },
  {
    en: "Brownsover",
    geoType: "MSOA",
    geoCode: "E02006493"
  },
  {
    en: "Town North & Newbold on Avon",
    geoType: "MSOA",
    geoCode: "E02006494"
  },
  {
    en: "Wolston, Binley Woods & Ryton",
    geoType: "MSOA",
    geoCode: "E02006495"
  },
  {
    en: "Town East",
    geoType: "MSOA",
    geoCode: "E02006496"
  },
  {
    en: "New Bilton",
    geoType: "MSOA",
    geoCode: "E02006497"
  },
  {
    en: "Cawston & Long Lawford",
    geoType: "MSOA",
    geoCode: "E02006498"
  },
  {
    en: "Eastlands",
    geoType: "MSOA",
    geoCode: "E02006499"
  },
  {
    en: "Town South & School",
    geoType: "MSOA",
    geoCode: "E02006500"
  },
  {
    en: "Hillmorton",
    geoType: "MSOA",
    geoCode: "E02006501"
  },
  {
    en: "Overslade & Bilton",
    geoType: "MSOA",
    geoCode: "E02006502"
  },
  {
    en: "Dunchurch, Stretton-on-Dunsmore & Marton",
    geoType: "MSOA",
    geoCode: "E02006503"
  },
  {
    en: "Earlswood, Tanworth-in-Arden & Sambourne",
    geoType: "MSOA",
    geoCode: "E02006504"
  },
  {
    en: "Henley-in-Arden & Claverdon",
    geoType: "MSOA",
    geoCode: "E02006505"
  },
  {
    en: "Studley",
    geoType: "MSOA",
    geoCode: "E02006506"
  },
  {
    en: "Southam, Stockton & Napton",
    geoType: "MSOA",
    geoCode: "E02006507"
  },
  {
    en: "Harbury, Long Itchington & Fenny Compton",
    geoType: "MSOA",
    geoCode: "E02006508"
  },
  {
    en: "Alcester",
    geoType: "MSOA",
    geoCode: "E02006509"
  },
  {
    en: "Wilmcote & Great Alne",
    geoType: "MSOA",
    geoCode: "E02006510"
  },
  {
    en: "Wellesbourne & Snitterfield",
    geoType: "MSOA",
    geoCode: "E02006511"
  },
  {
    en: "Stratford North",
    geoType: "MSOA",
    geoCode: "E02006512"
  },
  {
    en: "Stratford South East & Tiddington",
    geoType: "MSOA",
    geoCode: "E02006513"
  },
  {
    en: "Stratford South West",
    geoType: "MSOA",
    geoCode: "E02006514"
  },
  {
    en: "Bidford & Welford",
    geoType: "MSOA",
    geoCode: "E02006515"
  },
  {
    en: "Kineton, Tysoe & Warmington",
    geoType: "MSOA",
    geoCode: "E02006516"
  },
  {
    en: "Lower Quinton & Ettington",
    geoType: "MSOA",
    geoCode: "E02006517"
  },
  {
    en: "Shipston-on-Stour & Brailes",
    geoType: "MSOA",
    geoCode: "E02006518"
  },
  {
    en: "Kenilworth West",
    geoType: "MSOA",
    geoCode: "E02006519"
  },
  {
    en: "Kenilworth East",
    geoType: "MSOA",
    geoCode: "E02006520"
  },
  {
    en: "Kenilworth South",
    geoType: "MSOA",
    geoCode: "E02006521"
  },
  {
    en: "Kingswood & Leek Wootton",
    geoType: "MSOA",
    geoCode: "E02006522"
  },
  {
    en: "Cubbington, Stoneleigh & Radford Semele",
    geoType: "MSOA",
    geoCode: "E02006523"
  },
  {
    en: "Lillington",
    geoType: "MSOA",
    geoCode: "E02006524"
  },
  {
    en: "Leamington Central & North",
    geoType: "MSOA",
    geoCode: "E02006525"
  },
  {
    en: "Warwick North",
    geoType: "MSOA",
    geoCode: "E02006526"
  },
  {
    en: "Leamington West & Milverton",
    geoType: "MSOA",
    geoCode: "E02006527"
  },
  {
    en: "Leamington East & Sydenham",
    geoType: "MSOA",
    geoCode: "E02006528"
  },
  {
    en: "Warwick South West & Aylesford",
    geoType: "MSOA",
    geoCode: "E02006529"
  },
  {
    en: "Warwick South East, Myton & Heathcote",
    geoType: "MSOA",
    geoCode: "E02006530"
  },
  {
    en: "Leamington Brunswick",
    geoType: "MSOA",
    geoCode: "E02006531"
  },
  {
    en: "Bishops Tachbrook, Barford & Hatton Park",
    geoType: "MSOA",
    geoCode: "E02006532"
  },
  {
    en: "Whitnash",
    geoType: "MSOA",
    geoCode: "E02006533"
  },
  {
    en: "Hillside",
    geoType: "MSOA",
    geoCode: "E02006534"
  },
  {
    en: "Buckingham",
    geoType: "MSOA",
    geoCode: "E02006535"
  },
  {
    en: "North Lancing",
    geoType: "MSOA",
    geoCode: "E02006536"
  },
  {
    en: "Kingston & Southwick",
    geoType: "MSOA",
    geoCode: "E02006537"
  },
  {
    en: "Shoreham Central & Beach",
    geoType: "MSOA",
    geoCode: "E02006538"
  },
  {
    en: "Cokeham & Sompting",
    geoType: "MSOA",
    geoCode: "E02006539"
  },
  {
    en: "Marsh Barn & Widewater",
    geoType: "MSOA",
    geoCode: "E02006540"
  },
  {
    en: "South Lancing",
    geoType: "MSOA",
    geoCode: "E02006541"
  },
  {
    en: "Arundel",
    geoType: "MSOA",
    geoCode: "E02006542"
  },
  {
    en: "Angmering North, Patching & Findon",
    geoType: "MSOA",
    geoCode: "E02006543"
  },
  {
    en: "Westergate, Eastergate & Walberton",
    geoType: "MSOA",
    geoCode: "E02006544"
  },
  {
    en: "Wick & Toddington",
    geoType: "MSOA",
    geoCode: "E02006545"
  },
  {
    en: "Angmering South",
    geoType: "MSOA",
    geoCode: "E02006546"
  },
  {
    en: "Yapton & Climping",
    geoType: "MSOA",
    geoCode: "E02006547"
  },
  {
    en: "Rustington North",
    geoType: "MSOA",
    geoCode: "E02006548"
  },
  {
    en: "Ferring & Kingston Gorse",
    geoType: "MSOA",
    geoCode: "E02006549"
  },
  {
    en: "Littlehampton East",
    geoType: "MSOA",
    geoCode: "E02006550"
  },
  {
    en: "East Preston & Rustington East",
    geoType: "MSOA",
    geoCode: "E02006551"
  },
  {
    en: "Littlehampton West and River",
    geoType: "MSOA",
    geoCode: "E02006552"
  },
  {
    en: "North Bersted",
    geoType: "MSOA",
    geoCode: "E02006553"
  },
  {
    en: "Middleton-on-Sea",
    geoType: "MSOA",
    geoCode: "E02006554"
  },
  {
    en: "South Bersted",
    geoType: "MSOA",
    geoCode: "E02006555"
  },
  {
    en: "Felpham",
    geoType: "MSOA",
    geoCode: "E02006556"
  },
  {
    en: "Hawthorn Road",
    geoType: "MSOA",
    geoCode: "E02006557"
  },
  {
    en: "Bognor Regis Central",
    geoType: "MSOA",
    geoCode: "E02006558"
  },
  {
    en: "Aldwick",
    geoType: "MSOA",
    geoCode: "E02006559"
  },
  {
    en: "Nyetimber & Pagham",
    geoType: "MSOA",
    geoCode: "E02006560"
  },
  {
    en: "Fernhurst & Northchapel",
    geoType: "MSOA",
    geoCode: "E02006561"
  },
  {
    en: "Ifold & Wisborough Green",
    geoType: "MSOA",
    geoCode: "E02006562"
  },
  {
    en: "Milland & South Harting",
    geoType: "MSOA",
    geoCode: "E02006563"
  },
  {
    en: "Midhurst & Cocking",
    geoType: "MSOA",
    geoCode: "E02006564"
  },
  {
    en: "Easebourne & Petworth",
    geoType: "MSOA",
    geoCode: "E02006565"
  },
  {
    en: "Dean, Lavant & Summersdale",
    geoType: "MSOA",
    geoCode: "E02006566"
  },
  {
    en: "Westbourne & Funtington",
    geoType: "MSOA",
    geoCode: "E02006567"
  },
  {
    en: "College Lane & Oaklands",
    geoType: "MSOA",
    geoCode: "E02006568"
  },
  {
    en: "Southbourne, Bosham & Thorney",
    geoType: "MSOA",
    geoCode: "E02006569"
  },
  {
    en: "Central Chichester",
    geoType: "MSOA",
    geoCode: "E02006570"
  },
  {
    en: "Stockbridge & Fishbourne",
    geoType: "MSOA",
    geoCode: "E02006571"
  },
  {
    en: "Tangmere, Mundham & Hunston",
    geoType: "MSOA",
    geoCode: "E02006572"
  },
  {
    en: "Wittering & Birdham",
    geoType: "MSOA",
    geoCode: "E02006573"
  },
  {
    en: "Selsey",
    geoType: "MSOA",
    geoCode: "E02006574"
  },
  {
    en: "Langley Green & Gatwick Airport",
    geoType: "MSOA",
    geoCode: "E02006575"
  },
  {
    en: "Pound Hill",
    geoType: "MSOA",
    geoCode: "E02006576"
  },
  {
    en: "Ewhurst & West Green",
    geoType: "MSOA",
    geoCode: "E02006577"
  },
  {
    en: "Manor Royal & Northgate",
    geoType: "MSOA",
    geoCode: "E02006578"
  },
  {
    en: "Three Bridges",
    geoType: "MSOA",
    geoCode: "E02006579"
  },
  {
    en: "Ifield & Gossops Green",
    geoType: "MSOA",
    geoCode: "E02006580"
  },
  {
    en: "Southgate",
    geoType: "MSOA",
    geoCode: "E02006581"
  },
  {
    en: "Maidenbower East & Worth",
    geoType: "MSOA",
    geoCode: "E02006582"
  },
  {
    en: "Maidenbower West & Furnace Green",
    geoType: "MSOA",
    geoCode: "E02006583"
  },
  {
    en: "Bewbush",
    geoType: "MSOA",
    geoCode: "E02006584"
  },
  {
    en: "Tilgate",
    geoType: "MSOA",
    geoCode: "E02006585"
  },
  {
    en: "Broadfield West",
    geoType: "MSOA",
    geoCode: "E02006586"
  },
  {
    en: "Broadfield East",
    geoType: "MSOA",
    geoCode: "E02006587"
  },
  {
    en: "Rusper, Faygate & Leechpool",
    geoType: "MSOA",
    geoCode: "E02006588"
  },
  {
    en: "Littlehaven",
    geoType: "MSOA",
    geoCode: "E02006589"
  },
  {
    en: "Broadbridge Heath & Warnham",
    geoType: "MSOA",
    geoCode: "E02006590"
  },
  {
    en: "Horsham East & Roffey",
    geoType: "MSOA",
    geoCode: "E02006591"
  },
  {
    en: "Rudgwick, Slinfold & Barns Green",
    geoType: "MSOA",
    geoCode: "E02006592"
  },
  {
    en: "Horsham Central",
    geoType: "MSOA",
    geoCode: "E02006593"
  },
  {
    en: "Horsham West",
    geoType: "MSOA",
    geoCode: "E02006594"
  },
  {
    en: "Horsham South, Mannings Heath & Nuthurst",
    geoType: "MSOA",
    geoCode: "E02006595"
  },
  {
    en: "Southwater",
    geoType: "MSOA",
    geoCode: "E02006596"
  },
  {
    en: "Billingshurst",
    geoType: "MSOA",
    geoCode: "E02006597"
  },
  {
    en: "Cowfold & Partridge Green",
    geoType: "MSOA",
    geoCode: "E02006598"
  },
  {
    en: "West Chiltington Common",
    geoType: "MSOA",
    geoCode: "E02006599"
  },
  {
    en: "Amberley, Pulborough & Storrington",
    geoType: "MSOA",
    geoCode: "E02006600"
  },
  {
    en: "Henfield & Small Dole",
    geoType: "MSOA",
    geoCode: "E02006601"
  },
  {
    en: "Ashington & Washington",
    geoType: "MSOA",
    geoCode: "E02006602"
  },
  {
    en: "Steyning & Upper Beeding",
    geoType: "MSOA",
    geoCode: "E02006603"
  },
  {
    en: "East Grinstead Central & North",
    geoType: "MSOA",
    geoCode: "E02006604"
  },
  {
    en: "Copthorne & Turners Hill",
    geoType: "MSOA",
    geoCode: "E02006605"
  },
  {
    en: "East Grinstead East",
    geoType: "MSOA",
    geoCode: "E02006606"
  },
  {
    en: "East Grinstead West & South",
    geoType: "MSOA",
    geoCode: "E02006607"
  },
  {
    en: "Crawley Down",
    geoType: "MSOA",
    geoCode: "E02006608"
  },
  {
    en: "Horsted Keynes, Ardingly & Sharpthorne",
    geoType: "MSOA",
    geoCode: "E02006609"
  },
  {
    en: "Balcombe & Handcross",
    geoType: "MSOA",
    geoCode: "E02006610"
  },
  {
    en: "Haywards Heath North East",
    geoType: "MSOA",
    geoCode: "E02006611"
  },
  {
    en: "Haywards Heath West",
    geoType: "MSOA",
    geoCode: "E02006612"
  },
  {
    en: "Haywards Heath East",
    geoType: "MSOA",
    geoCode: "E02006613"
  },
  {
    en: "Haywards Heath South & Cuckfield",
    geoType: "MSOA",
    geoCode: "E02006614"
  },
  {
    en: "Burgess Hill West",
    geoType: "MSOA",
    geoCode: "E02006615"
  },
  {
    en: "Burgess Hill East",
    geoType: "MSOA",
    geoCode: "E02006616"
  },
  {
    en: "Burgess Hill Central",
    geoType: "MSOA",
    geoCode: "E02006617"
  },
  {
    en: "Burgess Hill South",
    geoType: "MSOA",
    geoCode: "E02006618"
  },
  {
    en: "Hurstpierpoint & Bolney",
    geoType: "MSOA",
    geoCode: "E02006619"
  },
  {
    en: "Hassocks, Keymer & East Hurstpierpoint",
    geoType: "MSOA",
    geoCode: "E02006620"
  },
  {
    en: "High Salvington & Findon Valley",
    geoType: "MSOA",
    geoCode: "E02006621"
  },
  {
    en: "Salvington",
    geoType: "MSOA",
    geoCode: "E02006622"
  },
  {
    en: "Durrington North",
    geoType: "MSOA",
    geoCode: "E02006623"
  },
  {
    en: "Broadwater West",
    geoType: "MSOA",
    geoCode: "E02006624"
  },
  {
    en: "Broadwater East",
    geoType: "MSOA",
    geoCode: "E02006625"
  },
  {
    en: "Northbrook",
    geoType: "MSOA",
    geoCode: "E02006626"
  },
  {
    en: "Durrington South",
    geoType: "MSOA",
    geoCode: "E02006627"
  },
  {
    en: "Broadwater South",
    geoType: "MSOA",
    geoCode: "E02006628"
  },
  {
    en: "East Worthing",
    geoType: "MSOA",
    geoCode: "E02006629"
  },
  {
    en: "Heene",
    geoType: "MSOA",
    geoCode: "E02006630"
  },
  {
    en: "Worthing Central",
    geoType: "MSOA",
    geoCode: "E02006631"
  },
  {
    en: "West Worthing",
    geoType: "MSOA",
    geoCode: "E02006632"
  },
  {
    en: "Goring-by-Sea",
    geoType: "MSOA",
    geoCode: "E02006633"
  },
  {
    en: "Ramsbury, Ogbournes & Avebury",
    geoType: "MSOA",
    geoCode: "E02006634"
  },
  {
    en: "Marlborough",
    geoType: "MSOA",
    geoCode: "E02006635"
  },
  {
    en: "Pewsey & Lockeridge",
    geoType: "MSOA",
    geoCode: "E02006636"
  },
  {
    en: "Devizes East",
    geoType: "MSOA",
    geoCode: "E02006637"
  },
  {
    en: "Devizes West",
    geoType: "MSOA",
    geoCode: "E02006638"
  },
  {
    en: "Potterne & Rowde",
    geoType: "MSOA",
    geoCode: "E02006639"
  },
  {
    en: "Bedwyn, Burbage & Collingbourne",
    geoType: "MSOA",
    geoCode: "E02006640"
  },
  {
    en: "Market Lavington & Bishops Cannings",
    geoType: "MSOA",
    geoCode: "E02006641"
  },
  {
    en: "Netheravon & Upavon",
    geoType: "MSOA",
    geoCode: "E02006642"
  },
  {
    en: "Cricklade & Ashton Keynes",
    geoType: "MSOA",
    geoCode: "E02006644"
  },
  {
    en: "Malmesbury, Crudwell & Oaksey",
    geoType: "MSOA",
    geoCode: "E02006645"
  },
  {
    en: "Lydiard Millicent & Purton",
    geoType: "MSOA",
    geoCode: "E02006646"
  },
  {
    en: "Somerford, Dauntsey & Minety",
    geoType: "MSOA",
    geoCode: "E02006647"
  },
  {
    en: "Sherston & Hullavington",
    geoType: "MSOA",
    geoCode: "E02006648"
  },
  {
    en: "Royal Wootton Bassett Town",
    geoType: "MSOA",
    geoCode: "E02006649"
  },
  {
    en: "Royal Wootton Bassett Outer & Lyneham",
    geoType: "MSOA",
    geoCode: "E02006650"
  },
  {
    en: "Sutton Benger, Kington & Biddestone",
    geoType: "MSOA",
    geoCode: "E02006651"
  },
  {
    en: "Chippenham North",
    geoType: "MSOA",
    geoCode: "E02006652"
  },
  {
    en: "Chippenham West",
    geoType: "MSOA",
    geoCode: "E02006653"
  },
  {
    en: "Chippenham South & East",
    geoType: "MSOA",
    geoCode: "E02006654"
  },
  {
    en: "Derry Hill & Hilmarton",
    geoType: "MSOA",
    geoCode: "E02006655"
  },
  {
    en: "Chippenham Pewsham",
    geoType: "MSOA",
    geoCode: "E02006656"
  },
  {
    en: "Calne North",
    geoType: "MSOA",
    geoCode: "E02006657"
  },
  {
    en: "Calne South",
    geoType: "MSOA",
    geoCode: "E02006658"
  },
  {
    en: "Box, Colerne & Rudloe",
    geoType: "MSOA",
    geoCode: "E02006659"
  },
  {
    en: "Corsham, Bowden Hill & Lacock",
    geoType: "MSOA",
    geoCode: "E02006660"
  },
  {
    en: "Larkhill, Shrewton & Bulford Camp",
    geoType: "MSOA",
    geoCode: "E02006661"
  },
  {
    en: "Durrington & Bulford",
    geoType: "MSOA",
    geoCode: "E02006662"
  },
  {
    en: "Amesbury",
    geoType: "MSOA",
    geoCode: "E02006663"
  },
  {
    en: "Great Wishford, Woodford Valley & Porton",
    geoType: "MSOA",
    geoCode: "E02006664"
  },
  {
    en: "Mere & East Knoyle",
    geoType: "MSOA",
    geoCode: "E02006665"
  },
  {
    en: "Salisbury Bishopsdown",
    geoType: "MSOA",
    geoCode: "E02006666"
  },
  {
    en: "Salisbury Bemerton",
    geoType: "MSOA",
    geoCode: "E02006667"
  },
  {
    en: "Salisbury Stratford",
    geoType: "MSOA",
    geoCode: "E02006668"
  },
  {
    en: "Wilton, Nadder & Ebble",
    geoType: "MSOA",
    geoCode: "E02006669"
  },
  {
    en: "Salisbury Churchfields",
    geoType: "MSOA",
    geoCode: "E02006670"
  },
  {
    en: "Salisbury Town North & Milford",
    geoType: "MSOA",
    geoCode: "E02006671"
  },
  {
    en: "Laverstock, Bodenham & Coombe Bissett",
    geoType: "MSOA",
    geoCode: "E02006672"
  },
  {
    en: "Salisbury Cathedral & Harnham",
    geoType: "MSOA",
    geoCode: "E02006673"
  },
  {
    en: "Salisbury East Harnham",
    geoType: "MSOA",
    geoCode: "E02006674"
  },
  {
    en: "Whaddon, Whiteparish & Winterslow",
    geoType: "MSOA",
    geoCode: "E02006675"
  },
  {
    en: "Tisbury, Donhead & Tollard Royal",
    geoType: "MSOA",
    geoCode: "E02006676"
  },
  {
    en: "Downton & Morgan's Vale",
    geoType: "MSOA",
    geoCode: "E02006677"
  },
  {
    en: "Melksham North",
    geoType: "MSOA",
    geoCode: "E02006678"
  },
  {
    en: "Bowerhill, Atworth & Whitley",
    geoType: "MSOA",
    geoCode: "E02006679"
  },
  {
    en: "Melksham South",
    geoType: "MSOA",
    geoCode: "E02006680"
  },
  {
    en: "Winsley, Westwood & Holt",
    geoType: "MSOA",
    geoCode: "E02006681"
  },
  {
    en: "Bradford-on-Avon",
    geoType: "MSOA",
    geoCode: "E02006682"
  },
  {
    en: "Staverton, Hilperton & Semington",
    geoType: "MSOA",
    geoCode: "E02006683"
  },
  {
    en: "Trowbridge North",
    geoType: "MSOA",
    geoCode: "E02006684"
  },
  {
    en: "Trowbridge East",
    geoType: "MSOA",
    geoCode: "E02006685"
  },
  {
    en: "Trowbridge West",
    geoType: "MSOA",
    geoCode: "E02006686"
  },
  {
    en: "Trowbridge South East",
    geoType: "MSOA",
    geoCode: "E02006687"
  },
  {
    en: "Trowbridge South",
    geoType: "MSOA",
    geoCode: "E02006688"
  },
  {
    en: "Steeple Ashton, North Bradley & Southwick",
    geoType: "MSOA",
    geoCode: "E02006689"
  },
  {
    en: "Westbury East, Dilton Marsh & Bratton",
    geoType: "MSOA",
    geoCode: "E02006690"
  },
  {
    en: "Warminster East",
    geoType: "MSOA",
    geoCode: "E02006692"
  },
  {
    en: "Warminster West & North",
    geoType: "MSOA",
    geoCode: "E02006693"
  },
  {
    en: "Warminster Central",
    geoType: "MSOA",
    geoCode: "E02006694"
  },
  {
    en: "Wylye Valley",
    geoType: "MSOA",
    geoCode: "E02006695"
  },
  {
    en: "Hagley",
    geoType: "MSOA",
    geoCode: "E02006696"
  },
  {
    en: "Dodford, Belbroughton & Romsley",
    geoType: "MSOA",
    geoCode: "E02006697"
  },
  {
    en: "Rubery West",
    geoType: "MSOA",
    geoCode: "E02006698"
  },
  {
    en: "Hollywood & Drakes Cross",
    geoType: "MSOA",
    geoCode: "E02006699"
  },
  {
    en: "Wythall & Gay Hill",
    geoType: "MSOA",
    geoCode: "E02006700"
  },
  {
    en: "Barnt Green & Lickey Hills",
    geoType: "MSOA",
    geoCode: "E02006701"
  },
  {
    en: "Catshill",
    geoType: "MSOA",
    geoCode: "E02006702"
  },
  {
    en: "Marlbrook & Lickey End",
    geoType: "MSOA",
    geoCode: "E02006703"
  },
  {
    en: "Alvechurch, Hopwood & Holt End",
    geoType: "MSOA",
    geoCode: "E02006704"
  },
  {
    en: "Bromsgrove Sidemoor",
    geoType: "MSOA",
    geoCode: "E02006705"
  },
  {
    en: "Bromsgrove Central & Sanders Park",
    geoType: "MSOA",
    geoCode: "E02006706"
  },
  {
    en: "Bromsgrove Stoney Hill",
    geoType: "MSOA",
    geoCode: "E02006707"
  },
  {
    en: "Bromsgrove Charford",
    geoType: "MSOA",
    geoCode: "E02006708"
  },
  {
    en: "Stoke Heath, Finstall & Bentley",
    geoType: "MSOA",
    geoCode: "E02006709"
  },
  {
    en: "Tenbury Wells, Mamble & Clifton",
    geoType: "MSOA",
    geoCode: "E02006710"
  },
  {
    en: "Abberley, Holt Heath & Hallow",
    geoType: "MSOA",
    geoCode: "E02006711"
  },
  {
    en: "Broadheath, Sinton & Alfrick",
    geoType: "MSOA",
    geoCode: "E02006712"
  },
  {
    en: "Malvern Link",
    geoType: "MSOA",
    geoCode: "E02006713"
  },
  {
    en: "Colletts Green, Callow End & Hanley",
    geoType: "MSOA",
    geoCode: "E02006714"
  },
  {
    en: "North Malvern",
    geoType: "MSOA",
    geoCode: "E02006715"
  },
  {
    en: "Malvern Pickersleigh",
    geoType: "MSOA",
    geoCode: "E02006716"
  },
  {
    en: "Kempsey & Ryall",
    geoType: "MSOA",
    geoCode: "E02006717"
  },
  {
    en: "Barnard's Green",
    geoType: "MSOA",
    geoCode: "E02006718"
  },
  {
    en: "Malvern Wells & Priory",
    geoType: "MSOA",
    geoCode: "E02006719"
  },
  {
    en: "Upton-upon-Severn, Welland & Eldersfield",
    geoType: "MSOA",
    geoCode: "E02006720"
  },
  {
    en: "Riverside & Church Hill North",
    geoType: "MSOA",
    geoCode: "E02006721"
  },
  {
    en: "Church Hill South",
    geoType: "MSOA",
    geoCode: "E02006722"
  },
  {
    en: "Batchley & Brockhill",
    geoType: "MSOA",
    geoCode: "E02006723"
  },
  {
    en: "Redditch Town & Abbeydale",
    geoType: "MSOA",
    geoCode: "E02006724"
  },
  {
    en: "Winyates Green",
    geoType: "MSOA",
    geoCode: "E02006725"
  },
  {
    en: "Southcrest",
    geoType: "MSOA",
    geoCode: "E02006726"
  },
  {
    en: "Arrow Valley & Ipsley",
    geoType: "MSOA",
    geoCode: "E02006727"
  },
  {
    en: "Webheath",
    geoType: "MSOA",
    geoCode: "E02006728"
  },
  {
    en: "Matchborough & Park Farm",
    geoType: "MSOA",
    geoCode: "E02006729"
  },
  {
    en: "Greenlands",
    geoType: "MSOA",
    geoCode: "E02006730"
  },
  {
    en: "Oakenshaw",
    geoType: "MSOA",
    geoCode: "E02006731"
  },
  {
    en: "Crabbs Cross",
    geoType: "MSOA",
    geoCode: "E02006732"
  },
  {
    en: "Hunt End & Feckenham",
    geoType: "MSOA",
    geoCode: "E02006733"
  },
  {
    en: "Northwick",
    geoType: "MSOA",
    geoCode: "E02006734"
  },
  {
    en: "Warndon West",
    geoType: "MSOA",
    geoCode: "E02006735"
  },
  {
    en: "Warndon East",
    geoType: "MSOA",
    geoCode: "E02006736"
  },
  {
    en: "Barbourne & Rainbow Hill",
    geoType: "MSOA",
    geoCode: "E02006737"
  },
  {
    en: "King George's Field",
    geoType: "MSOA",
    geoCode: "E02006738"
  },
  {
    en: "Henwick",
    geoType: "MSOA",
    geoCode: "E02006739"
  },
  {
    en: "Worcester Town North",
    geoType: "MSOA",
    geoCode: "E02006740"
  },
  {
    en: "Lyppard Grange",
    geoType: "MSOA",
    geoCode: "E02006741"
  },
  {
    en: "Dines Green & St Johns",
    geoType: "MSOA",
    geoCode: "E02006742"
  },
  {
    en: "Ronkswood & Nunnery Wood",
    geoType: "MSOA",
    geoCode: "E02006743"
  },
  {
    en: "Worcester Town South",
    geoType: "MSOA",
    geoCode: "E02006744"
  },
  {
    en: "Lower Wick & Bromwich Road",
    geoType: "MSOA",
    geoCode: "E02006745"
  },
  {
    en: "Battenhall & Diglis",
    geoType: "MSOA",
    geoCode: "E02006746"
  },
  {
    en: "St Peters",
    geoType: "MSOA",
    geoCode: "E02006747"
  },
  {
    en: "Hartlebury & Wychbold",
    geoType: "MSOA",
    geoCode: "E02006748"
  },
  {
    en: "Droitwich Spa West & North",
    geoType: "MSOA",
    geoCode: "E02006749"
  },
  {
    en: "Droitwich Spa East",
    geoType: "MSOA",
    geoCode: "E02006750"
  },
  {
    en: "Droitwich Spa Central",
    geoType: "MSOA",
    geoCode: "E02006751"
  },
  {
    en: "Droitwich Spa South",
    geoType: "MSOA",
    geoCode: "E02006752"
  },
  {
    en: "Fernhill Heath & Ombersley",
    geoType: "MSOA",
    geoCode: "E02006753"
  },
  {
    en: "Crowle & Tibberton",
    geoType: "MSOA",
    geoCode: "E02006754"
  },
  {
    en: "Inkberrow & Flyford Flavell",
    geoType: "MSOA",
    geoCode: "E02006755"
  },
  {
    en: "Drakes Broughton & Norton",
    geoType: "MSOA",
    geoCode: "E02006756"
  },
  {
    en: "Wick, Elmley Castle & Fladbury",
    geoType: "MSOA",
    geoCode: "E02006757"
  },
  {
    en: "Honeybourne & Littleton",
    geoType: "MSOA",
    geoCode: "E02006758"
  },
  {
    en: "Pershore",
    geoType: "MSOA",
    geoCode: "E02006759"
  },
  {
    en: "Harvington, Offenham & Badsey",
    geoType: "MSOA",
    geoCode: "E02006760"
  },
  {
    en: "Evesham Central",
    geoType: "MSOA",
    geoCode: "E02006761"
  },
  {
    en: "Evesham North & Hampton",
    geoType: "MSOA",
    geoCode: "E02006762"
  },
  {
    en: "Evesham East",
    geoType: "MSOA",
    geoCode: "E02006763"
  },
  {
    en: "Evesham South",
    geoType: "MSOA",
    geoCode: "E02006764"
  },
  {
    en: "Broadway, Wickhamford & Sedgeberrow",
    geoType: "MSOA",
    geoCode: "E02006765"
  },
  {
    en: "Bredon, Ashton & Eckington",
    geoType: "MSOA",
    geoCode: "E02006766"
  },
  {
    en: "Wolverley, Cookley & Blakedown",
    geoType: "MSOA",
    geoCode: "E02006767"
  },
  {
    en: "Franche",
    geoType: "MSOA",
    geoCode: "E02006768"
  },
  {
    en: "Greenhill",
    geoType: "MSOA",
    geoCode: "E02006769"
  },
  {
    en: "Kidderminster Town",
    geoType: "MSOA",
    geoCode: "E02006770"
  },
  {
    en: "Bewdley East & Upper Arley",
    geoType: "MSOA",
    geoCode: "E02006771"
  },
  {
    en: "Habberley",
    geoType: "MSOA",
    geoCode: "E02006772"
  },
  {
    en: "Comberton",
    geoType: "MSOA",
    geoCode: "E02006773"
  },
  {
    en: "Foley Park",
    geoType: "MSOA",
    geoCode: "E02006774"
  },
  {
    en: "Birchen Coppice",
    geoType: "MSOA",
    geoCode: "E02006775"
  },
  {
    en: "Spennells & Hoobrook",
    geoType: "MSOA",
    geoCode: "E02006776"
  },
  {
    en: "Bewdley West, Ribbesford & Far Forest",
    geoType: "MSOA",
    geoCode: "E02006777"
  },
  {
    en: "Stourport Lickhill & Burlish",
    geoType: "MSOA",
    geoCode: "E02006778"
  },
  {
    en: "Stourport Mitton & Wilden",
    geoType: "MSOA",
    geoCode: "E02006779"
  },
  {
    en: "Stourport Areley Kings",
    geoType: "MSOA",
    geoCode: "E02006780"
  },
  {
    en: "Isles of Scilly",
    geoType: "MSOA",
    geoCode: "E02006781"
  },
  {
    en: "Plaistow (Bromley)",
    geoType: "MSOA",
    geoCode: "E02006782"
  },
  {
    en: "Downham East",
    geoType: "MSOA",
    geoCode: "E02006783"
  },
  {
    en: "Downham West",
    geoType: "MSOA",
    geoCode: "E02006784"
  },
  {
    en: "Wickham Street & East Wickham",
    geoType: "MSOA",
    geoCode: "E02006785"
  },
  {
    en: "Wickham Lane & Winns Common",
    geoType: "MSOA",
    geoCode: "E02006786"
  },
  {
    en: "Elmers End",
    geoType: "MSOA",
    geoCode: "E02006787"
  },
  {
    en: "South Norwood Park",
    geoType: "MSOA",
    geoCode: "E02006788"
  },
  {
    en: "Biggin Hill East & Cudham",
    geoType: "MSOA",
    geoCode: "E02006789"
  },
  {
    en: "Warlingham East & Tatsfield",
    geoType: "MSOA",
    geoCode: "E02006790"
  },
  {
    en: "Chiswick North West",
    geoType: "MSOA",
    geoCode: "E02006791"
  },
  {
    en: "Chiswick Park",
    geoType: "MSOA",
    geoCode: "E02006792"
  },
  {
    en: "Upper Edmonton West",
    geoType: "MSOA",
    geoCode: "E02006793"
  },
  {
    en: "White Hart Lane",
    geoType: "MSOA",
    geoCode: "E02006794"
  },
  {
    en: "Rayners Lane South",
    geoType: "MSOA",
    geoCode: "E02006795"
  },
  {
    en: "South Ruislip",
    geoType: "MSOA",
    geoCode: "E02006796"
  },
  {
    en: "New Cross & Deptford South",
    geoType: "MSOA",
    geoCode: "E02006798"
  },
  {
    en: "Becontree North",
    geoType: "MSOA",
    geoCode: "E02006799"
  },
  {
    en: "Goodmayes South",
    geoType: "MSOA",
    geoCode: "E02006800"
  },
  {
    en: "Lambeth North, Waterloo & South Bank",
    geoType: "MSOA",
    geoCode: "E02006801"
  },
  {
    en: "Southwark St George's",
    geoType: "MSOA",
    geoCode: "E02006802"
  },
  {
    en: "Mosborough & Halfway",
    geoType: "MSOA",
    geoCode: "E02006803"
  },
  {
    en: "Eckington East & Renishaw",
    geoType: "MSOA",
    geoCode: "E02006804"
  },
  {
    en: "Holbrooks",
    geoType: "MSOA",
    geoCode: "E02006805"
  },
  {
    en: "Ash Green & Keresley End",
    geoType: "MSOA",
    geoCode: "E02006806"
  },
  {
    en: "Yardley Wood East",
    geoType: "MSOA",
    geoCode: "E02006807"
  },
  {
    en: "Shirley West",
    geoType: "MSOA",
    geoCode: "E02006808"
  },
  {
    en: "Handsworth Wood",
    geoType: "MSOA",
    geoCode: "E02006809"
  },
  {
    en: "Charlemont",
    geoType: "MSOA",
    geoCode: "E02006810"
  },
  {
    en: "Nunthorpe & Marton East",
    geoType: "MSOA",
    geoCode: "E02006811"
  },
  {
    en: "Ormesby",
    geoType: "MSOA",
    geoCode: "E02006812"
  },
  {
    en: "Anlaby Park & Pickering",
    geoType: "MSOA",
    geoCode: "E02006813"
  },
  {
    en: "Anlaby Common",
    geoType: "MSOA",
    geoCode: "E02006814"
  },
  {
    en: "Thurnby Lodge",
    geoType: "MSOA",
    geoCode: "E02006815"
  },
  {
    en: "Houghton, Thurnby & Scraptoft",
    geoType: "MSOA",
    geoCode: "E02006816"
  },
  {
    en: "West Knighton",
    geoType: "MSOA",
    geoCode: "E02006817"
  },
  {
    en: "Wigston North",
    geoType: "MSOA",
    geoCode: "E02006818"
  },
  {
    en: "Kirby Frith",
    geoType: "MSOA",
    geoCode: "E02006819"
  },
  {
    en: "Glenfield",
    geoType: "MSOA",
    geoCode: "E02006820"
  },
  {
    en: "Drayton & Farlington",
    geoType: "MSOA",
    geoCode: "E02006821"
  },
  {
    en: "Bedhampton",
    geoType: "MSOA",
    geoCode: "E02006822"
  },
  {
    en: "Knotty Green & Holmer Green",
    geoType: "MSOA",
    geoCode: "E02006823"
  },
  {
    en: "Hazlemere",
    geoType: "MSOA",
    geoCode: "E02006824"
  },
  {
    en: "Dullingham & Cheveley",
    geoType: "MSOA",
    geoCode: "E02006825"
  },
  {
    en: "South Newmarket & Racecourse",
    geoType: "MSOA",
    geoCode: "E02006826"
  },
  {
    en: "Heanor South & Shipley Park",
    geoType: "MSOA",
    geoCode: "E02006827"
  },
  {
    en: "Shipley",
    geoType: "MSOA",
    geoCode: "E02006828"
  },
  {
    en: "Horndean South & Rowlands Castle",
    geoType: "MSOA",
    geoCode: "E02006829"
  },
  {
    en: "Cowplain West",
    geoType: "MSOA",
    geoCode: "E02006830"
  },
  {
    en: "Cowplain East",
    geoType: "MSOA",
    geoCode: "E02006831"
  },
  {
    en: "New Ash Green",
    geoType: "MSOA",
    geoCode: "E02006832"
  },
  {
    en: "East Malling, West Malling & Trottiscliffe",
    geoType: "MSOA",
    geoCode: "E02006833"
  },
  {
    en: "Top Valley East",
    geoType: "MSOA",
    geoCode: "E02006834"
  },
  {
    en: "Bestwood Village",
    geoType: "MSOA",
    geoCode: "E02006835"
  },
  {
    en: "Belmont & South Cheam",
    geoType: "MSOA",
    geoCode: "E02006836"
  },
  {
    en: "Ewell East",
    geoType: "MSOA",
    geoCode: "E02006837"
  },
  {
    en: "Headley Down & Grayshott",
    geoType: "MSOA",
    geoCode: "E02006838"
  },
  {
    en: "Hindhead, Beacon Hill & Frensham",
    geoType: "MSOA",
    geoCode: "E02006839"
  },
  {
    en: "Chelston, Cockington & Livermead",
    geoType: "MSOA",
    geoCode: "E02006840"
  },
  {
    en: "Gateshead Town",
    geoType: "MSOA",
    geoCode: "E02006841"
  },
  {
    en: "Gateshead South",
    geoType: "MSOA",
    geoCode: "E02006842"
  },
  {
    en: "Cathedral & Kelham",
    geoType: "MSOA",
    geoCode: "E02006843"
  },
  {
    en: "Devonshire Quarter",
    geoType: "MSOA",
    geoCode: "E02006844"
  },
  {
    en: "South Worle, West Wick & St Georges",
    geoType: "MSOA",
    geoCode: "E02006845"
  },
  {
    en: "Weston Winterstoke",
    geoType: "MSOA",
    geoCode: "E02006846"
  },
  {
    en: "Mouldon Hill & Oakhurst",
    geoType: "MSOA",
    geoCode: "E02006847"
  },
  {
    en: "Abbey Park",
    geoType: "MSOA",
    geoCode: "E02006848"
  },
  {
    en: "Groundwell & Abbey Meads",
    geoType: "MSOA",
    geoCode: "E02006849"
  },
  {
    en: "Leicester City South",
    geoType: "MSOA",
    geoCode: "E02006850"
  },
  {
    en: "Leicester City Centre",
    geoType: "MSOA",
    geoCode: "E02006851"
  },
  {
    en: "Far Headingley & Weetwood",
    geoType: "MSOA",
    geoCode: "E02006852"
  },
  {
    en: "Millwall North",
    geoType: "MSOA",
    geoCode: "E02006853"
  },
  {
    en: "Canary Wharf",
    geoType: "MSOA",
    geoCode: "E02006854"
  },
  {
    en: "Canterbury Wincheap",
    geoType: "MSOA",
    geoCode: "E02006855"
  },
  {
    en: "Canterbury Central & Westgate",
    geoType: "MSOA",
    geoCode: "E02006856"
  },
  {
    en: "St Anthony's Hill",
    geoType: "MSOA",
    geoCode: "E02006857"
  },
  {
    en: "Sovereign Harbour",
    geoType: "MSOA",
    geoCode: "E02006858"
  },
  {
    en: "South Chafford",
    geoType: "MSOA",
    geoCode: "E02006859"
  },
  {
    en: "Hyde Park Corner & Woodhouse Cliff",
    geoType: "MSOA",
    geoCode: "E02006861"
  },
  {
    en: "Great Oakley and Danesholme",
    geoType: "MSOA",
    geoCode: "E02006862"
  },
  {
    en: "Snatchill",
    geoType: "MSOA",
    geoCode: "E02006863"
  },
  {
    en: "Fishtoft & Wyberton East",
    geoType: "MSOA",
    geoCode: "E02006864"
  },
  {
    en: "Wyberton West & Fen",
    geoType: "MSOA",
    geoCode: "E02006865"
  },
  {
    en: "North Hykeham South",
    geoType: "MSOA",
    geoCode: "E02006866"
  },
  {
    en: "North Hykeham North",
    geoType: "MSOA",
    geoCode: "E02006867"
  },
  {
    en: "Park Hill & Wybourn",
    geoType: "MSOA",
    geoCode: "E02006868"
  },
  {
    en: "Birley",
    geoType: "MSOA",
    geoCode: "E02006869"
  },
  {
    en: "Scale Hall & Torrisholme",
    geoType: "MSOA",
    geoCode: "E02006871"
  },
  {
    en: "Chapel-en-le-Frith & Hope Valley",
    geoType: "MSOA",
    geoCode: "E02006872"
  },
  {
    en: "Cambourne",
    geoType: "MSOA",
    geoCode: "E02006873"
  },
  {
    en: "Papworth, Caxton & Fen Drayton",
    geoType: "MSOA",
    geoCode: "E02006874"
  },
  {
    en: "Leeds City Centre",
    geoType: "MSOA",
    geoCode: "E02006875"
  },
  {
    en: "Leeds Dock, Hunslet & Stourton",
    geoType: "MSOA",
    geoCode: "E02006876"
  },
  {
    en: "Hargate & Orton Longueville",
    geoType: "MSOA",
    geoCode: "E02006877"
  },
  {
    en: "Hampton Vale",
    geoType: "MSOA",
    geoCode: "E02006878"
  },
  {
    en: "Folkestone Harbour",
    geoType: "MSOA",
    geoCode: "E02006879"
  },
  {
    en: "Folkestone Central",
    geoType: "MSOA",
    geoCode: "E02006880"
  },
  {
    en: "Rose Hill & Burnley Wood",
    geoType: "MSOA",
    geoCode: "E02006881"
  },
  {
    en: "Kenton West",
    geoType: "MSOA",
    geoCode: "E02006882"
  },
  {
    en: "Westbourne",
    geoType: "MSOA",
    geoCode: "E02006883"
  },
  {
    en: "Waterfoot & Stacksteads",
    geoType: "MSOA",
    geoCode: "E02006884"
  },
  {
    en: "West Cliff",
    geoType: "MSOA",
    geoCode: "E02006885"
  },
  {
    en: "Shrivenham, Watchfield & Uffington",
    geoType: "MSOA",
    geoCode: "E02006886"
  },
  {
    en: "Temple Meads",
    geoType: "MSOA",
    geoCode: "E02006887"
  },
  {
    en: "Upper Easton",
    geoType: "MSOA",
    geoCode: "E02006888"
  },
  {
    en: "Barton Hill",
    geoType: "MSOA",
    geoCode: "E02006889"
  },
  {
    en: "Lower Easton",
    geoType: "MSOA",
    geoCode: "E02006890"
  },
  {
    en: "Driffield East & Nafferton",
    geoType: "MSOA",
    geoCode: "E02006891"
  },
  {
    en: "Driffield Central",
    geoType: "MSOA",
    geoCode: "E02006892"
  },
  {
    en: "Westerhope",
    geoType: "MSOA",
    geoCode: "E02006893"
  },
  {
    en: "Blakenhall",
    geoType: "MSOA",
    geoCode: "E02006894"
  },
  {
    en: "Attwood Green & Park Central",
    geoType: "MSOA",
    geoCode: "E02006895"
  },
  {
    en: "Digbeth",
    geoType: "MSOA",
    geoCode: "E02006896"
  },
  {
    en: "Five Ways North",
    geoType: "MSOA",
    geoCode: "E02006897"
  },
  {
    en: "Ladywood - Summer Hill",
    geoType: "MSOA",
    geoCode: "E02006898"
  },
  {
    en: "Central",
    geoType: "MSOA",
    geoCode: "E02006899"
  },
  {
    en: "Bordesley",
    geoType: "MSOA",
    geoCode: "E02006900"
  },
  {
    en: "City Centre North & Collyhurst",
    geoType: "MSOA",
    geoCode: "E02006902"
  },
  {
    en: "Worksop Kilton",
    geoType: "MSOA",
    geoCode: "E02006903"
  },
  {
    en: "City Centre & Trent Bridge",
    geoType: "MSOA",
    geoCode: "E02006904"
  },
  {
    en: "Meadows",
    geoType: "MSOA",
    geoCode: "E02006905"
  },
  {
    en: "Kimberley South, Trowell & Awsworth",
    geoType: "MSOA",
    geoCode: "E02006906"
  },
  {
    en: "City Centre East",
    geoType: "MSOA",
    geoCode: "E02006907"
  },
  {
    en: "Thorpe Hamlet & Mousehold South",
    geoType: "MSOA",
    geoCode: "E02006908"
  },
  {
    en: "The Fens, Elwick & Hart",
    geoType: "MSOA",
    geoCode: "E02006909"
  },
  {
    en: "South Bank & Teesville",
    geoType: "MSOA",
    geoCode: "E02006910"
  },
  {
    en: "Piccadilly & Ancoats",
    geoType: "MSOA",
    geoCode: "E02006912"
  },
  {
    en: "Cheetham Hill",
    geoType: "MSOA",
    geoCode: "E02006913"
  },
  {
    en: "University North & Whitworth Street",
    geoType: "MSOA",
    geoCode: "E02006914"
  },
  {
    en: "Strangeways",
    geoType: "MSOA",
    geoCode: "E02006915"
  },
  {
    en: "Hulme Park & St George's",
    geoType: "MSOA",
    geoCode: "E02006916"
  },
  {
    en: "Castlefield & Deansgate",
    geoType: "MSOA",
    geoCode: "E02006917"
  },
  {
    en: "Clapton Leaside",
    geoType: "MSOA",
    geoCode: "E02006918"
  },
  {
    en: "Swadlincote South",
    geoType: "MSOA",
    geoCode: "E02006919"
  },
  {
    en: "Swadlincote East",
    geoType: "MSOA",
    geoCode: "E02006920"
  },
  {
    en: "Upper Clapton",
    geoType: "MSOA",
    geoCode: "E02006921"
  },
  {
    en: "Parson's Heath",
    geoType: "MSOA",
    geoCode: "E02006922"
  },
  {
    en: "Valentines Park & Cranbrook",
    geoType: "MSOA",
    geoCode: "E02006924"
  },
  {
    en: "Clayhall South",
    geoType: "MSOA",
    geoCode: "E02006925"
  },
  {
    en: "Chafford & North Stifford",
    geoType: "MSOA",
    geoCode: "E02006926"
  },
  {
    en: "Kidbrooke South",
    geoType: "MSOA",
    geoCode: "E02006927"
  },
  {
    en: "Greenwich & Deptford Creekside",
    geoType: "MSOA",
    geoCode: "E02006928"
  },
  {
    en: "Greenwich East",
    geoType: "MSOA",
    geoCode: "E02006930"
  },
  {
    en: "Greenwich Town & Park",
    geoType: "MSOA",
    geoCode: "E02006931"
  },
  {
    en: "Central & Islington",
    geoType: "MSOA",
    geoCode: "E02006932"
  },
  {
    en: "Albert Dock & Queen's Dock",
    geoType: "MSOA",
    geoCode: "E02006933"
  },
  {
    en: "Pier Head",
    geoType: "MSOA",
    geoCode: "E02006934"
  },
  {
    en: "Thatto Heath",
    geoType: "MSOA",
    geoCode: "E02006935"
  },
  {
    en: "Nutgrove & Lea Green",
    geoType: "MSOA",
    geoCode: "E02006936"
  },
  {
    en: "High Town",
    geoType: "MSOA",
    geoCode: "E02006937"
  },
  {
    en: "Central Luton",
    geoType: "MSOA",
    geoCode: "E02006938"
  },
  {
    en: "Central Reading North",
    geoType: "MSOA",
    geoCode: "E02006939"
  },
  {
    en: "Central Reading South",
    geoType: "MSOA",
    geoCode: "E02006940"
  },
  {
    en: "Butler's Wharf and Queen's Walk",
    geoType: "MSOA",
    geoCode: "E02006941"
  },
  {
    en: "Bermondsey North",
    geoType: "MSOA",
    geoCode: "E02006942"
  },
  {
    en: "Smethwick East",
    geoType: "MSOA",
    geoCode: "E02006943"
  },
  {
    en: "Smethwick South East",
    geoType: "MSOA",
    geoCode: "E02006944"
  },
  {
    en: "Steeton & Silsden Rural",
    geoType: "MSOA",
    geoCode: "E02006945"
  },
  {
    en: "Silsden",
    geoType: "MSOA",
    geoCode: "E02006946"
  },
  {
    en: "Barkerend West & Little Germany",
    geoType: "MSOA",
    geoCode: "E02006947"
  },
  {
    en: "Central Bradford",
    geoType: "MSOA",
    geoCode: "E02006948"
  },
  {
    en: "St Werburghs",
    geoType: "MSOA",
    geoCode: "E02006949"
  },
  {
    en: "St Pauls",
    geoType: "MSOA",
    geoCode: "E02006950"
  },
  {
    en: "University & Brandon Hill",
    geoType: "MSOA",
    geoCode: "E02006951"
  },
  {
    en: "City Centre & Harbourside",
    geoType: "MSOA",
    geoCode: "E02006952"
  },
  {
    en: "Colindale East",
    geoType: "MSOA",
    geoCode: "E02006953"
  },
  {
    en: "Colindale West & South",
    geoType: "MSOA",
    geoCode: "E02006954"
  },
  {
    en: "Wembley Park",
    geoType: "MSOA",
    geoCode: "E02006955"
  },
  {
    en: "Tokyngton",
    geoType: "MSOA",
    geoCode: "E02006956"
  },
  {
    en: "Broughton East",
    geoType: "MSOA",
    geoCode: "E02006957"
  },
  {
    en: "Broughton West",
    geoType: "MSOA",
    geoCode: "E02006958"
  },
  {
    en: "Greengate & Blackfriars",
    geoType: "MSOA",
    geoCode: "E02006959"
  },
  {
    en: "University, Crescent & Adelphi Street",
    geoType: "MSOA",
    geoCode: "E02006960"
  },
  {
    en: "Ordsall West",
    geoType: "MSOA",
    geoCode: "E02006961"
  },
  {
    en: "Ordsall East",
    geoType: "MSOA",
    geoCode: "E02006962"
  },
  {
    en: "Salford Quays",
    geoType: "MSOA",
    geoCode: "E02006963"
  },
  {
    en: "Hamilton North",
    geoType: "MSOA",
    geoCode: "E02006964"
  },
  {
    en: "Humberstone & Hamilton South",
    geoType: "MSOA",
    geoCode: "E02006965"
  },
  {
    en: "Oadby North",
    geoType: "MSOA",
    geoCode: "E02006966"
  },
  {
    en: "Oadby East",
    geoType: "MSOA",
    geoCode: "E02006967"
  },
  {
    en: "North Ealing",
    geoType: "MSOA",
    geoCode: "E02006968"
  },
  {
    en: "Ealing Broadway East",
    geoType: "MSOA",
    geoCode: "E02006969"
  },
  {
    en: "Southall Green East",
    geoType: "MSOA",
    geoCode: "E02006970"
  },
  {
    en: "Southall Green West",
    geoType: "MSOA",
    geoCode: "E02006971"
  },
  {
    en: "Kew Bridge & Gunnersbury Park",
    geoType: "MSOA",
    geoCode: "E02006972"
  },
  {
    en: "Brentford East",
    geoType: "MSOA",
    geoCode: "E02006973"
  },
  {
    en: "Longton West & Sandford Hill",
    geoType: "MSOA",
    geoCode: "E02006974"
  },
  {
    en: "Portsea",
    geoType: "MSOA",
    geoCode: "E02006975"
  },
  {
    en: "Fratton West",
    geoType: "MSOA",
    geoCode: "E02006976"
  },
  {
    en: "Central Chelmsford East",
    geoType: "MSOA",
    geoCode: "E02006978"
  },
  {
    en: "Central Chelmsford West",
    geoType: "MSOA",
    geoCode: "E02006979"
  },
  {
    en: "Hockley North & West",
    geoType: "MSOA",
    geoCode: "E02006980"
  },
  {
    en: "Hockley South & Hawkwell West",
    geoType: "MSOA",
    geoCode: "E02006981"
  },
  {
    en: "Perton & Pattingham",
    geoType: "MSOA",
    geoCode: "E02006982"
  },
  {
    en: "Miles Platting & New Islington North",
    geoType: "MSOA",
    geoCode: "E02006983"
  },
  {
    en: "New Islington South & Bradford",
    geoType: "MSOA",
    geoCode: "E02006984"
  },
  {
    en: "Longsight East",
    geoType: "MSOA",
    geoCode: "E02006985"
  },
  {
    en: "Levenshulme North & East",
    geoType: "MSOA",
    geoCode: "E02006986"
  },
  {
    en: "Central Croydon",
    geoType: "MSOA",
    geoCode: "E02006987"
  },
  {
    en: "South End & St Peter's Road",
    geoType: "MSOA",
    geoCode: "E02006988"
  },
  {
    en: "Victoria Park",
    geoType: "MSOA",
    geoCode: "E02006989"
  },
  {
    en: "Stonehouse",
    geoType: "MSOA",
    geoCode: "E02006990"
  },
  {
    en: "Woolwich Arsenal",
    geoType: "MSOA",
    geoCode: "E02006991"
  },
  {
    en: "Greenwich Peninsula West",
    geoType: "MSOA",
    geoCode: "E02006992"
  },
  {
    en: "Greenwich Peninsula East",
    geoType: "MSOA",
    geoCode: "E02006993"
  },
  {
    en: "Charlton Riverside & Woolwich Dockyard",
    geoType: "MSOA",
    geoCode: "E02006994"
  },
  {
    en: "East Village",
    geoType: "MSOA",
    geoCode: "E02006995"
  },
  {
    en: "Carpenters Estate & Stratford New Town",
    geoType: "MSOA",
    geoCode: "E02006996"
  },
  {
    en: "Mill Meads",
    geoType: "MSOA",
    geoCode: "E02006997"
  },
  {
    en: "North Woolwich",
    geoType: "MSOA",
    geoCode: "E02006998"
  },
  {
    en: "Silvertown & Royal Wharf",
    geoType: "MSOA",
    geoCode: "E02006999"
  },
  {
    en: "Werneth",
    geoType: "MSOA",
    geoCode: "E02007000"
  },
  {
    en: "Coppice",
    geoType: "MSOA",
    geoCode: "E02007001"
  },
  {
    en: "Wickersley South, Bramley South & Whiston",
    geoType: "MSOA",
    geoCode: "E02007002"
  },
  {
    en: "Colne North",
    geoType: "MSOA",
    geoCode: "E02007003"
  },
  {
    en: "Purfleet",
    geoType: "MSOA",
    geoCode: "E02007004"
  },
  {
    en: "West Thurrock",
    geoType: "MSOA",
    geoCode: "E02007005"
  },
  {
    en: "Dorchester North",
    geoType: "MSOA",
    geoCode: "E02007006"
  },
  {
    en: "Poundbury & Dorchester West",
    geoType: "MSOA",
    geoCode: "E02007007"
  },
  {
    en: "Central Lewisham North",
    geoType: "MSOA",
    geoCode: "E02007008"
  },
  {
    en: "Central Lewisham South",
    geoType: "MSOA",
    geoCode: "E02007009"
  },
  {
    en: "Wilstead & Shortstown",
    geoType: "MSOA",
    geoCode: "E02007010"
  },
  {
    en: "Wixams & Elstow",
    geoType: "MSOA",
    geoCode: "E02007011"
  },
  {
    en: "Broughton West & Milton Keynes Village",
    geoType: "MSOA",
    geoCode: "E02007012"
  },
  {
    en: "Broughton East",
    geoType: "MSOA",
    geoCode: "E02007013"
  },
  {
    en: "Kents Hill",
    geoType: "MSOA",
    geoCode: "E02007014"
  },
  {
    en: "Fairfields & Grange Farm",
    geoType: "MSOA",
    geoCode: "E02007015"
  },
  {
    en: "Shenley Wood & Crownhill",
    geoType: "MSOA",
    geoCode: "E02007016"
  },
  {
    en: "Chadwell Heath North West",
    geoType: "MSOA",
    geoCode: "E02007017"
  },
  {
    en: "Chadwell Heath South West",
    geoType: "MSOA",
    geoCode: "E02007018"
  },
  {
    en: "Ilford Central & East",
    geoType: "MSOA",
    geoCode: "E02007019"
  },
  {
    en: "Ilford South East",
    geoType: "MSOA",
    geoCode: "E02007020"
  },
  {
    en: "Lye Valley & Cowley East",
    geoType: "MSOA",
    geoCode: "E02007021"
  },
  {
    en: "Barnard Castle & Upper Teesdale",
    geoType: "MSOA",
    geoCode: "E02007022"
  },
  {
    en: "Westbury North & West",
    geoType: "MSOA",
    geoCode: "E02007023"
  },
  {
    en: "Westbury Town & South",
    geoType: "MSOA",
    geoCode: "E02007024"
  },
  {
    en: "Ludgershall & Tidworth North East",
    geoType: "MSOA",
    geoCode: "E02007025"
  },
  {
    en: "Tidworth",
    geoType: "MSOA",
    geoCode: "E02007026"
  },
  {
    en: "Broadclyst, West Clyst & Stoke Canon",
    geoType: "MSOA",
    geoCode: "E02007027"
  },
  {
    en: "Cranbrook",
    geoType: "MSOA",
    geoCode: "E02007028"
  },
  {
    en: "Bakewell South, Darley Dale & Youlgreave",
    geoType: "MSOA",
    geoCode: "E02007029"
  },
  {
    en: "Church Minshull, Kingsbourne & Sound",
    geoType: "MSOA",
    geoCode: "E02007030"
  },
  {
    en: "Nantwich South East & Wybunbury",
    geoType: "MSOA",
    geoCode: "E02007031"
  },
  {
    en: "North Walsham East",
    geoType: "MSOA",
    geoCode: "E02007032"
  },
  {
    en: "North Walsham West",
    geoType: "MSOA",
    geoCode: "E02007033"
  },
  {
    en: "Bishop's Cleeve West & North",
    geoType: "MSOA",
    geoCode: "E02007034"
  },
  {
    en: "Bishop's Cleeve East & South",
    geoType: "MSOA",
    geoCode: "E02007035"
  },
  {
    en: "Birches Green & Bromford East",
    geoType: "MSOA",
    geoCode: "E02007038"
  },
  {
    en: "Greet & Mid Sparkhill",
    geoType: "MSOA",
    geoCode: "E02007039"
  },
  {
    en: "Sparkhill South",
    geoType: "MSOA",
    geoCode: "E02007040"
  },
  {
    en: "Skipton North & Upper Wharfedale",
    geoType: "MSOA",
    geoCode: "E02007041"
  },
  {
    en: "Northallerton North & East",
    geoType: "MSOA",
    geoCode: "E02007042"
  },
  {
    en: "Northallerton Town & Romanby",
    geoType: "MSOA",
    geoCode: "E02007043"
  },
  {
    en: "Malton & Norton North",
    geoType: "MSOA",
    geoCode: "E02007044"
  },
  {
    en: "Malton & Norton South",
    geoType: "MSOA",
    geoCode: "E02007045"
  },
  {
    en: "Bybrook",
    geoType: "MSOA",
    geoCode: "E02007046"
  },
  {
    en: "Godinton, Repton & Orchard Heights",
    geoType: "MSOA",
    geoCode: "E02007047"
  },
  {
    en: "Brinklow, Wolvey & Churchover",
    geoType: "MSOA",
    geoCode: "E02007048"
  },
  {
    en: "Houlton, Clifton & Brownsover North",
    geoType: "MSOA",
    geoCode: "E02007049"
  },
  {
    en: "Town Centre, Overdale & Dawley Bank",
    geoType: "MSOA",
    geoCode: "E02007050"
  },
  {
    en: "Lawley, Horsehay & Lightmoor",
    geoType: "MSOA",
    geoCode: "E02007051"
  },
  {
    en: "Heigham Grove & St Augustines",
    geoType: "MSOA",
    geoCode: "E02007052"
  },
  {
    en: "City Centre West",
    geoType: "MSOA",
    geoCode: "E02007053"
  },
  {
    en: "Old Costessey & Queens Hills",
    geoType: "MSOA",
    geoCode: "E02007054"
  },
  {
    en: "New Costessey",
    geoType: "MSOA",
    geoCode: "E02007055"
  },
  {
    en: "Mile End North, Braiswick & Kingswood Heath",
    geoType: "MSOA",
    geoCode: "E02007056"
  },
  {
    en: "Mile End South",
    geoType: "MSOA",
    geoCode: "E02007057"
  },
  {
    en: "Central Darlington & Pierremont",
    geoType: "MSOA",
    geoCode: "E02007058"
  },
  {
    en: "Harbour, Victoria & Wooler Road",
    geoType: "MSOA",
    geoCode: "E02007059"
  },
  {
    en: "Central Stockton & Portrack",
    geoType: "MSOA",
    geoCode: "E02007060"
  },
  {
    en: "Parkfield",
    geoType: "MSOA",
    geoCode: "E02007061"
  },
  {
    en: "Ingleby Barwick North",
    geoType: "MSOA",
    geoCode: "E02007062"
  },
  {
    en: "Ingleby Barwick West & South",
    geoType: "MSOA",
    geoCode: "E02007063"
  },
  {
    en: "Patchway",
    geoType: "MSOA",
    geoCode: "E02007064"
  },
  {
    en: "Charlton Hayes",
    geoType: "MSOA",
    geoCode: "E02007065"
  },
  {
    en: "Great Stoke & Stoke Park",
    geoType: "MSOA",
    geoCode: "E02007066"
  },
  {
    en: "Frenchay & Stoke Gifford East",
    geoType: "MSOA",
    geoCode: "E02007067"
  },
  {
    en: "Elliman",
    geoType: "MSOA",
    geoCode: "E02007068"
  },
  {
    en: "Wexham Road",
    geoType: "MSOA",
    geoCode: "E02007069"
  },
  {
    en: "Broughton, Mawsley & Loddington",
    geoType: "MSOA",
    geoCode: "E02007070"
  },
  {
    en: "Burton Latimer",
    geoType: "MSOA",
    geoCode: "E02007071"
  },
  {
    en: "Upton",
    geoType: "MSOA",
    geoCode: "E02007072"
  },
  {
    en: "West Hunsbury",
    geoType: "MSOA",
    geoCode: "E02007073"
  },
  {
    en: "St Mary's",
    geoType: "MSOA",
    geoCode: "E02007074"
  },
  {
    en: "Ocean Village & Town Quay",
    geoType: "MSOA",
    geoCode: "E02007075"
  },
  {
    en: "Augusta Park, East Anton & the Enhams",
    geoType: "MSOA",
    geoCode: "E02007076"
  },
  {
    en: "Picket Twenty & Picket Piece",
    geoType: "MSOA",
    geoCode: "E02007077"
  },
  {
    en: "Andover South East",
    geoType: "MSOA",
    geoCode: "E02007078"
  },
  {
    en: "North Bransholme",
    geoType: "MSOA",
    geoCode: "E02007079"
  },
  {
    en: "Kingswood",
    geoType: "MSOA",
    geoCode: "E02007080"
  },
  {
    en: "Cleethorpes North & Haverstoe",
    geoType: "MSOA",
    geoCode: "E02007081"
  },
  {
    en: "Lenton Abbey, University & Wollaton Park",
    geoType: "MSOA",
    geoCode: "E02007082"
  },
  {
    en: "Nine Elms",
    geoType: "MSOA",
    geoCode: "E02007083"
  },
  {
    en: "Queenstown Road & Patmore",
    geoType: "MSOA",
    geoCode: "E02007084"
  },
  {
    en: "Bar Hill, Girton & Grantchester",
    geoType: "MSOA",
    geoCode: "E02007085"
  },
  {
    en: "Trumpington",
    geoType: "MSOA",
    geoCode: "E02007086"
  },
  {
    en: "Newtown",
    geoType: "MSOA",
    geoCode: "E02007087"
  },
  {
    en: "Ashwell, Weston & Barley",
    geoType: "MSOA",
    geoCode: "E02007088"
  },
  {
    en: "Great Ashby & Wymondley",
    geoType: "MSOA",
    geoCode: "E02007089"
  },
  {
    en: "Colney Heath & Highfield Park",
    geoType: "MSOA",
    geoCode: "E02007090"
  },
  {
    en: "Chells North",
    geoType: "MSOA",
    geoCode: "E02007091"
  },
  {
    en: "Welham Green",
    geoType: "MSOA",
    geoCode: "E02007092"
  },
  {
    en: "Datchworth, Walkern & Cottered",
    geoType: "MSOA",
    geoCode: "E02007093"
  },
  {
    en: "Chopwell & High Spen",
    geoType: "MSOA",
    geoCode: "E02007094"
  },
  {
    en: "Newcastle Great Park & Dinnington",
    geoType: "MSOA",
    geoCode: "E02007095"
  },
  {
    en: "Kingston Park",
    geoType: "MSOA",
    geoCode: "E02007096"
  },
  {
    en: "Heaton Park & Portland Road",
    geoType: "MSOA",
    geoCode: "E02007097"
  },
  {
    en: "Byker East",
    geoType: "MSOA",
    geoCode: "E02007098"
  },
  {
    en: "Newcastle City Centre",
    geoType: "MSOA",
    geoCode: "E02007099"
  },
  {
    en: "Shieldfield & Quayside",
    geoType: "MSOA",
    geoCode: "E02007100"
  },
  {
    en: "Elswick North",
    geoType: "MSOA",
    geoCode: "E02007101"
  },
  {
    en: "Arthur's Hill",
    geoType: "MSOA",
    geoCode: "E02007102"
  },
  {
    en: "Byker South & St Peters",
    geoType: "MSOA",
    geoCode: "E02007103"
  },
  {
    en: "Elswick South",
    geoType: "MSOA",
    geoCode: "E02007104"
  },
  {
    en: "Ashington West & South",
    geoType: "MSOA",
    geoCode: "E02007105"
  },
  {
    en: "Cramlington North & East",
    geoType: "MSOA",
    geoCode: "E02007106"
  },
  {
    en: "Stocksfield, Riding Mill & Corbridge",
    geoType: "MSOA",
    geoCode: "E02007107"
  },
  {
    en: "Dalston Kingsland",
    geoType: "MSOA",
    geoCode: "E02007108"
  },
  {
    en: "De Beauvoir",
    geoType: "MSOA",
    geoCode: "E02007109"
  },
  {
    en: "Hoxton South & East",
    geoType: "MSOA",
    geoCode: "E02007110"
  },
  {
    en: "Shoreditch",
    geoType: "MSOA",
    geoCode: "E02007111"
  },
  {
    en: "Leamouth",
    geoType: "MSOA",
    geoCode: "E02007112"
  },
  {
    en: "Blackwall",
    geoType: "MSOA",
    geoCode: "E02007113"
  },
  {
    en: "Cubitt Town",
    geoType: "MSOA",
    geoCode: "E02007114"
  },
  {
    en: "King's Cross & Bloomsbury North",
    geoType: "MSOA",
    geoCode: "E02007115"
  },
  {
    en: "Cowley North",
    geoType: "MSOA",
    geoCode: "E02007116"
  },
  {
    en: "Amlwch & Llannerch-y-medd",
    geoType: "MSOA",
    geoCode: "W02000001"
  },
  {
    en: "Rhos-y-bol, Marian-glas & Moelfre",
    geoType: "MSOA",
    geoCode: "W02000002"
  },
  {
    en: "Holyhead",
    geoType: "MSOA",
    geoCode: "W02000003"
  },
  {
    en: "Llain-goch & Valley",
    geoType: "MSOA",
    geoCode: "W02000004"
  },
  {
    en: "Beaumaris & Benllech",
    geoType: "MSOA",
    geoCode: "W02000005"
  },
  {
    en: "Llangefni",
    geoType: "MSOA",
    geoCode: "W02000006"
  },
  {
    en: "Bodedern & Rhosneigr",
    geoType: "MSOA",
    geoCode: "W02000007"
  },
  {
    en: "Llanfair Pwllgwyngyll & Menai Bridge",
    geoType: "MSOA",
    geoCode: "W02000008"
  },
  {
    en: "Newborough",
    geoType: "MSOA",
    geoCode: "W02000009"
  },
  {
    en: "Bangor City",
    geoType: "MSOA",
    geoCode: "W02000010"
  },
  {
    en: "Bangor South",
    geoType: "MSOA",
    geoCode: "W02000011"
  },
  {
    en: "Bethesda",
    geoType: "MSOA",
    geoCode: "W02000012"
  },
  {
    en: "Bethel & Llanrug",
    geoType: "MSOA",
    geoCode: "W02000013"
  },
  {
    en: "Llanberis & Deiniolen",
    geoType: "MSOA",
    geoCode: "W02000014"
  },
  {
    en: "Caernarfon East",
    geoType: "MSOA",
    geoCode: "W02000015"
  },
  {
    en: "Caernarfon West & Waunfawr",
    geoType: "MSOA",
    geoCode: "W02000016"
  },
  {
    en: "Pen-y-groes, Tal-y-sarn & Dyffryn Nantlle",
    geoType: "MSOA",
    geoCode: "W02000017"
  },
  {
    en: "Blaenau Ffestiniog & Trawsfynydd",
    geoType: "MSOA",
    geoCode: "W02000018"
  },
  {
    en: "Porthmadog",
    geoType: "MSOA",
    geoCode: "W02000019"
  },
  {
    en: "Cricieth & Llanaelhaearn",
    geoType: "MSOA",
    geoCode: "W02000020"
  },
  {
    en: "Pwllheli & Morfa Nefyn",
    geoType: "MSOA",
    geoCode: "W02000021"
  },
  {
    en: "Harlech & Llanbedr",
    geoType: "MSOA",
    geoCode: "W02000022"
  },
  {
    en: "Abersoch & Aberdaron",
    geoType: "MSOA",
    geoCode: "W02000023"
  },
  {
    en: "Bala & Mawddwy",
    geoType: "MSOA",
    geoCode: "W02000024"
  },
  {
    en: "Barmouth & Dolgellau",
    geoType: "MSOA",
    geoCode: "W02000025"
  },
  {
    en: "Tywyn & Llangelynnin",
    geoType: "MSOA",
    geoCode: "W02000026"
  },
  {
    en: "Llandudno Town & Gogarth",
    geoType: "MSOA",
    geoCode: "W02000027"
  },
  {
    en: "Llandudno South",
    geoType: "MSOA",
    geoCode: "W02000028"
  },
  {
    en: "Penrhyn Bay",
    geoType: "MSOA",
    geoCode: "W02000029"
  },
  {
    en: "Rhos-on-Sea",
    geoType: "MSOA",
    geoCode: "W02000030"
  },
  {
    en: "Kinmel Bay & Towyn",
    geoType: "MSOA",
    geoCode: "W02000031"
  },
  {
    en: "Llandudno Junction North & Deganwy",
    geoType: "MSOA",
    geoCode: "W02000032"
  },
  {
    en: "Colwyn Bay North",
    geoType: "MSOA",
    geoCode: "W02000033"
  },
  {
    en: "Upper Colwyn Bay",
    geoType: "MSOA",
    geoCode: "W02000034"
  },
  {
    en: "Old Colwyn & Llanddulas",
    geoType: "MSOA",
    geoCode: "W02000035"
  },
  {
    en: "Abergele",
    geoType: "MSOA",
    geoCode: "W02000036"
  },
  {
    en: "Llandudno Junction South & Llasanffraid Glan Conwy",
    geoType: "MSOA",
    geoCode: "W02000037"
  },
  {
    en: "Conwy & Afon Roe",
    geoType: "MSOA",
    geoCode: "W02000038"
  },
  {
    en: "Llanfairfechan & Penmaenmawr",
    geoType: "MSOA",
    geoCode: "W02000039"
  },
  {
    en: "Betws-yn-Rhos, Llangernyw & Llansannan",
    geoType: "MSOA",
    geoCode: "W02000040"
  },
  {
    en: "Llanrwst & Betws-y-coed",
    geoType: "MSOA",
    geoCode: "W02000041"
  },
  {
    en: "Prestatyn North",
    geoType: "MSOA",
    geoCode: "W02000042"
  },
  {
    en: "Prestatyn Central & East",
    geoType: "MSOA",
    geoCode: "W02000043"
  },
  {
    en: "Prestatyn South",
    geoType: "MSOA",
    geoCode: "W02000044"
  },
  {
    en: "Rhyl North",
    geoType: "MSOA",
    geoCode: "W02000045"
  },
  {
    en: "Rhyl South West",
    geoType: "MSOA",
    geoCode: "W02000047"
  },
  {
    en: "Dyserth & Tremeirchion",
    geoType: "MSOA",
    geoCode: "W02000049"
  },
  {
    en: "Rhuddlan & Bodelwyddan",
    geoType: "MSOA",
    geoCode: "W02000050"
  },
  {
    en: "St Asaph & Trefnant",
    geoType: "MSOA",
    geoCode: "W02000051"
  },
  {
    en: "Denbigh West",
    geoType: "MSOA",
    geoCode: "W02000052"
  },
  {
    en: "Denbigh East & Pentre Llanrhaeadr",
    geoType: "MSOA",
    geoCode: "W02000053"
  },
  {
    en: "Llandyrnog & Llanarmon-yn-Iâl",
    geoType: "MSOA",
    geoCode: "W02000054"
  },
  {
    en: "Ruthin",
    geoType: "MSOA",
    geoCode: "W02000055"
  },
  {
    en: "Corwen, Llanelidan & Efenechdyd",
    geoType: "MSOA",
    geoCode: "W02000056"
  },
  {
    en: "Llangollen & Llandrillo",
    geoType: "MSOA",
    geoCode: "W02000057"
  },
  {
    en: "Gronant, Ffynnongroyw & Trelawnyd",
    geoType: "MSOA",
    geoCode: "W02000058"
  },
  {
    en: "Mostyn & Holway",
    geoType: "MSOA",
    geoCode: "W02000059"
  },
  {
    en: "Holywell & Bagillt",
    geoType: "MSOA",
    geoCode: "W02000060"
  },
  {
    en: "Flint North East",
    geoType: "MSOA",
    geoCode: "W02000061"
  },
  {
    en: "Flint South West",
    geoType: "MSOA",
    geoCode: "W02000062"
  },
  {
    en: "Caerwys, Halkyn & Nannerch",
    geoType: "MSOA",
    geoCode: "W02000063"
  },
  {
    en: "Connah's Quay North",
    geoType: "MSOA",
    geoCode: "W02000064"
  },
  {
    en: "Connah's Quay Wepre",
    geoType: "MSOA",
    geoCode: "W02000065"
  },
  {
    en: "Shotton & Garden City",
    geoType: "MSOA",
    geoCode: "W02000066"
  },
  {
    en: "Connah's Quay South & Northop Hall",
    geoType: "MSOA",
    geoCode: "W02000067"
  },
  {
    en: "Queensferry & Sandycroft",
    geoType: "MSOA",
    geoCode: "W02000068"
  },
  {
    en: "Buckley North, Northop & Sychdyn",
    geoType: "MSOA",
    geoCode: "W02000069"
  },
  {
    en: "Ewloe & Hawarden",
    geoType: "MSOA",
    geoCode: "W02000070"
  },
  {
    en: "New Brighton & Mynyddisa",
    geoType: "MSOA",
    geoCode: "W02000071"
  },
  {
    en: "Broughton & Saltney",
    geoType: "MSOA",
    geoCode: "W02000072"
  },
  {
    en: "Mold",
    geoType: "MSOA",
    geoCode: "W02000073"
  },
  {
    en: "Buckley South",
    geoType: "MSOA",
    geoCode: "W02000074"
  },
  {
    en: "Pen-y-ffordd & Higher Kinnerton",
    geoType: "MSOA",
    geoCode: "W02000075"
  },
  {
    en: "Leeswood, Treuddyn & Gwernaffield",
    geoType: "MSOA",
    geoCode: "W02000076"
  },
  {
    en: "Hope",
    geoType: "MSOA",
    geoCode: "W02000077"
  },
  {
    en: "Llay South & Gwersyllt East",
    geoType: "MSOA",
    geoCode: "W02000080"
  },
  {
    en: "Gwersyllt West & Summerhill",
    geoType: "MSOA",
    geoCode: "W02000081"
  },
  {
    en: "New Broughton & Bryn Cefn",
    geoType: "MSOA",
    geoCode: "W02000082"
  },
  {
    en: "Coedpoeth & Brymbo",
    geoType: "MSOA",
    geoCode: "W02000083"
  },
  {
    en: "Town North, University & Rhos-ddu",
    geoType: "MSOA",
    geoCode: "W02000085"
  },
  {
    en: "Caia Park",
    geoType: "MSOA",
    geoCode: "W02000087"
  },
  {
    en: "Wrexham West",
    geoType: "MSOA",
    geoCode: "W02000088"
  },
  {
    en: "Hermitage & Whitegate",
    geoType: "MSOA",
    geoCode: "W02000089"
  },
  {
    en: "Pen-y-cae & Minera",
    geoType: "MSOA",
    geoCode: "W02000090"
  },
  {
    en: "Johnstown North & Rhostyllen",
    geoType: "MSOA",
    geoCode: "W02000091"
  },
  {
    en: "Rhosllannerchrugog & Johnstown South",
    geoType: "MSOA",
    geoCode: "W02000092"
  },
  {
    en: "Ruabon & Marchwiel",
    geoType: "MSOA",
    geoCode: "W02000093"
  },
  {
    en: "Cefn Mawr",
    geoType: "MSOA",
    geoCode: "W02000094"
  },
  {
    en: "Bangor-on-Dee, Overton & Penley",
    geoType: "MSOA",
    geoCode: "W02000095"
  },
  {
    en: "Chirk & Ceiriog Valley",
    geoType: "MSOA",
    geoCode: "W02000096"
  },
  {
    en: "Llanfyllin & Llanwyddyn",
    geoType: "MSOA",
    geoCode: "W02000097"
  },
  {
    en: "Four Crosses & Guilsfield",
    geoType: "MSOA",
    geoCode: "W02000098"
  },
  {
    en: "Welshpool",
    geoType: "MSOA",
    geoCode: "W02000099"
  },
  {
    en: "Machynlleth & Banwy",
    geoType: "MSOA",
    geoCode: "W02000100"
  },
  {
    en: "Montgomery, Trewern & Berriew",
    geoType: "MSOA",
    geoCode: "W02000101"
  },
  {
    en: "Llanfair Caereinion & Caersws",
    geoType: "MSOA",
    geoCode: "W02000102"
  },
  {
    en: "Abermule, Churchstoke & Kerry",
    geoType: "MSOA",
    geoCode: "W02000103"
  },
  {
    en: "Newtown North",
    geoType: "MSOA",
    geoCode: "W02000104"
  },
  {
    en: "Newtown South",
    geoType: "MSOA",
    geoCode: "W02000105"
  },
  {
    en: "Llanidloes, Blaen Hafren & Llandinam",
    geoType: "MSOA",
    geoCode: "W02000106"
  },
  {
    en: "Knighton & Presteigne",
    geoType: "MSOA",
    geoCode: "W02000107"
  },
  {
    en: "Rhayader, Newbridge-on-Wye & Elan Valley",
    geoType: "MSOA",
    geoCode: "W02000108"
  },
  {
    en: "Llandrindod Wells",
    geoType: "MSOA",
    geoCode: "W02000109"
  },
  {
    en: "Builth Wells & Llanwrtyd Wells",
    geoType: "MSOA",
    geoCode: "W02000110"
  },
  {
    en: "Hay-on-Wye & Talgarth",
    geoType: "MSOA",
    geoCode: "W02000111"
  },
  {
    en: "Brecon",
    geoType: "MSOA",
    geoCode: "W02000113"
  },
  {
    en: "Crickhowell, Llangynidr & Llangorse",
    geoType: "MSOA",
    geoCode: "W02000114"
  },
  {
    en: "Borth & Bont-goch",
    geoType: "MSOA",
    geoCode: "W02000116"
  },
  {
    en: "Aberystwyth North",
    geoType: "MSOA",
    geoCode: "W02000117"
  },
  {
    en: "Aberystwyth South",
    geoType: "MSOA",
    geoCode: "W02000118"
  },
  {
    en: "Aberaeron & Llanrhystud",
    geoType: "MSOA",
    geoCode: "W02000120"
  },
  {
    en: "New Quay & Penbryn",
    geoType: "MSOA",
    geoCode: "W02000122"
  },
  {
    en: "Lampeter & Llanfihangel Ystrad",
    geoType: "MSOA",
    geoCode: "W02000123"
  },
  {
    en: "Cardigan & Aber-porth",
    geoType: "MSOA",
    geoCode: "W02000124"
  },
  {
    en: "Beulah, Troed-yr-aur & Llandysul",
    geoType: "MSOA",
    geoCode: "W02000125"
  },
  {
    en: "Cilgerran & Crymych",
    geoType: "MSOA",
    geoCode: "W02000126"
  },
  {
    en: "Fishguard",
    geoType: "MSOA",
    geoCode: "W02000127"
  },
  {
    en: "St Davids & Letterston",
    geoType: "MSOA",
    geoCode: "W02000128"
  },
  {
    en: "Crundale, Clynderwen & Maenclochog",
    geoType: "MSOA",
    geoCode: "W02000129"
  },
  {
    en: "Haverfordwest North",
    geoType: "MSOA",
    geoCode: "W02000130"
  },
  {
    en: "Haverfordwest South",
    geoType: "MSOA",
    geoCode: "W02000131"
  },
  {
    en: "Narberth",
    geoType: "MSOA",
    geoCode: "W02000132"
  },
  {
    en: "Johnston, Broad Haven & St Ishmaels",
    geoType: "MSOA",
    geoCode: "W02000133"
  },
  {
    en: "Neyland",
    geoType: "MSOA",
    geoCode: "W02000134"
  },
  {
    en: "Milford Haven East",
    geoType: "MSOA",
    geoCode: "W02000135"
  },
  {
    en: "Saundersfoot",
    geoType: "MSOA",
    geoCode: "W02000136"
  },
  {
    en: "Milford Haven West",
    geoType: "MSOA",
    geoCode: "W02000137"
  },
  {
    en: "Pembroke Dock",
    geoType: "MSOA",
    geoCode: "W02000138"
  },
  {
    en: "Pembroke East & Manorbier",
    geoType: "MSOA",
    geoCode: "W02000139"
  },
  {
    en: "Pembroke West & Castlemartin",
    geoType: "MSOA",
    geoCode: "W02000140"
  },
  {
    en: "Tenby & Caldey",
    geoType: "MSOA",
    geoCode: "W02000141"
  },
  {
    en: "Llanfihangel-ar-arth & Llanybydder",
    geoType: "MSOA",
    geoCode: "W02000142"
  },
  {
    en: "Llandovery, Cil-y-cwm & Cynwyl Gaeo",
    geoType: "MSOA",
    geoCode: "W02000143"
  },
  {
    en: "Tre-lech, Cenarth & Llangeler",
    geoType: "MSOA",
    geoCode: "W02000144"
  },
  {
    en: "Llandeilo, Llangadog & Maenordeilo",
    geoType: "MSOA",
    geoCode: "W02000145"
  },
  {
    en: "Abergwili, Llanegwad & Carmel",
    geoType: "MSOA",
    geoCode: "W02000146"
  },
  {
    en: "Carmarthen West & Cynwyl Elfed",
    geoType: "MSOA",
    geoCode: "W02000147"
  },
  {
    en: "Carmarthen North",
    geoType: "MSOA",
    geoCode: "W02000148"
  },
  {
    en: "Carmarthen South & Llangynnwr",
    geoType: "MSOA",
    geoCode: "W02000149"
  },
  {
    en: "Brynaman, Y Garnant & Glanaman",
    geoType: "MSOA",
    geoCode: "W02000151"
  },
  {
    en: "Llandybie & Saron",
    geoType: "MSOA",
    geoCode: "W02000152"
  },
  {
    en: "Llanddarog, Llangyndeyrn & Ferryside",
    geoType: "MSOA",
    geoCode: "W02000153"
  },
  {
    en: "Ammanford & Betws",
    geoType: "MSOA",
    geoCode: "W02000154"
  },
  {
    en: "Llan-non, Cross Hands & Pen-y-groes",
    geoType: "MSOA",
    geoCode: "W02000156"
  },
  {
    en: "Glyn & Pontyberem",
    geoType: "MSOA",
    geoCode: "W02000157"
  },
  {
    en: "Yr Hendy & Tŷ-croes",
    geoType: "MSOA",
    geoCode: "W02000158"
  },
  {
    en: "Cydweli & Trimsaran",
    geoType: "MSOA",
    geoCode: "W02000159"
  },
  {
    en: "Swiss Valley & Llangennech",
    geoType: "MSOA",
    geoCode: "W02000160"
  },
  {
    en: "Dafen & Felin-foel",
    geoType: "MSOA",
    geoCode: "W02000161"
  },
  {
    en: "Pembrey & Burry Port",
    geoType: "MSOA",
    geoCode: "W02000162"
  },
  {
    en: "Llanelli North",
    geoType: "MSOA",
    geoCode: "W02000163"
  },
  {
    en: "Llanelli West",
    geoType: "MSOA",
    geoCode: "W02000164"
  },
  {
    en: "Llanelli Bigyn",
    geoType: "MSOA",
    geoCode: "W02000165"
  },
  {
    en: "Bynea & Llwynhendy",
    geoType: "MSOA",
    geoCode: "W02000166"
  },
  {
    en: "Llanelli South",
    geoType: "MSOA",
    geoCode: "W02000167"
  },
  {
    en: "Pontarddulais",
    geoType: "MSOA",
    geoCode: "W02000168"
  },
  {
    en: "Clydach & Mawr",
    geoType: "MSOA",
    geoCode: "W02000169"
  },
  {
    en: "Morriston North",
    geoType: "MSOA",
    geoCode: "W02000170"
  },
  {
    en: "Llangyfelach & Tircoed",
    geoType: "MSOA",
    geoCode: "W02000171"
  },
  {
    en: "Gorseinon",
    geoType: "MSOA",
    geoCode: "W02000172"
  },
  {
    en: "Birchgrove",
    geoType: "MSOA",
    geoCode: "W02000173"
  },
  {
    en: "Loughor",
    geoType: "MSOA",
    geoCode: "W02000174"
  },
  {
    en: "Morriston South",
    geoType: "MSOA",
    geoCode: "W02000175"
  },
  {
    en: "Mynydd-bach",
    geoType: "MSOA",
    geoCode: "W02000176"
  },
  {
    en: "Llansamlet",
    geoType: "MSOA",
    geoCode: "W02000177"
  },
  {
    en: "Penderry",
    geoType: "MSOA",
    geoCode: "W02000178"
  },
  {
    en: "Gowerton",
    geoType: "MSOA",
    geoCode: "W02000179"
  },
  {
    en: "Ravenhill",
    geoType: "MSOA",
    geoCode: "W02000180"
  },
  {
    en: "Bon-y-maen",
    geoType: "MSOA",
    geoCode: "W02000181"
  },
  {
    en: "Cwmbwrla",
    geoType: "MSOA",
    geoCode: "W02000182"
  },
  {
    en: "Landore",
    geoType: "MSOA",
    geoCode: "W02000183"
  },
  {
    en: "Cockett",
    geoType: "MSOA",
    geoCode: "W02000184"
  },
  {
    en: "Llanmorlais & Three Crosses",
    geoType: "MSOA",
    geoCode: "W02000185"
  },
  {
    en: "Townhill",
    geoType: "MSOA",
    geoCode: "W02000186"
  },
  {
    en: "St Thomas",
    geoType: "MSOA",
    geoCode: "W02000188"
  },
  {
    en: "Ty-coch",
    geoType: "MSOA",
    geoCode: "W02000189"
  },
  {
    en: "Uplands",
    geoType: "MSOA",
    geoCode: "W02000191"
  },
  {
    en: "Central Swansea",
    geoType: "MSOA",
    geoCode: "W02000192"
  },
  {
    en: "Brynmill",
    geoType: "MSOA",
    geoCode: "W02000193"
  },
  {
    en: "Sketty",
    geoType: "MSOA",
    geoCode: "W02000194"
  },
  {
    en: "Mayals & Bishopston",
    geoType: "MSOA",
    geoCode: "W02000195"
  },
  {
    en: "West Cross",
    geoType: "MSOA",
    geoCode: "W02000196"
  },
  {
    en: "West Gower",
    geoType: "MSOA",
    geoCode: "W02000197"
  },
  {
    en: "Mumbles & Newton",
    geoType: "MSOA",
    geoCode: "W02000198"
  },
  {
    en: "Dulais Valley",
    geoType: "MSOA",
    geoCode: "W02000200"
  },
  {
    en: "Glynneath",
    geoType: "MSOA",
    geoCode: "W02000201"
  },
  {
    en: "Pontardawe",
    geoType: "MSOA",
    geoCode: "W02000202"
  },
  {
    en: "Cadoxton & Bryn-coch",
    geoType: "MSOA",
    geoCode: "W02000204"
  },
  {
    en: "Neath Abbey",
    geoType: "MSOA",
    geoCode: "W02000205"
  },
  {
    en: "Neath Town",
    geoType: "MSOA",
    geoCode: "W02000206"
  },
  {
    en: "Cimla",
    geoType: "MSOA",
    geoCode: "W02000207"
  },
  {
    en: "Skewen & Jersey Marine",
    geoType: "MSOA",
    geoCode: "W02000208"
  },
  {
    en: "Neath South",
    geoType: "MSOA",
    geoCode: "W02000210"
  },
  {
    en: "Briton Ferry",
    geoType: "MSOA",
    geoCode: "W02000211"
  },
  {
    en: "Cwmafan & Bryn",
    geoType: "MSOA",
    geoCode: "W02000212"
  },
  {
    en: "Baglan",
    geoType: "MSOA",
    geoCode: "W02000213"
  },
  {
    en: "Sandfields",
    geoType: "MSOA",
    geoCode: "W02000214"
  },
  {
    en: "Aberafan",
    geoType: "MSOA",
    geoCode: "W02000215"
  },
  {
    en: "Port Talbot East",
    geoType: "MSOA",
    geoCode: "W02000216"
  },
  {
    en: "Port Talbot South & Margam",
    geoType: "MSOA",
    geoCode: "W02000217"
  },
  {
    en: "Caerau",
    geoType: "MSOA",
    geoCode: "W02000218"
  },
  {
    en: "Maesteg East",
    geoType: "MSOA",
    geoCode: "W02000219"
  },
  {
    en: "Nant-y-moel, Ogmore Vale & Blackmill",
    geoType: "MSOA",
    geoCode: "W02000220"
  },
  {
    en: "Blaengarw, Pontycymer & Bettws",
    geoType: "MSOA",
    geoCode: "W02000221"
  },
  {
    en: "Maesteg West, Garth & Llangynwyd",
    geoType: "MSOA",
    geoCode: "W02000222"
  },
  {
    en: "Ynysawdre & Aberkenfig",
    geoType: "MSOA",
    geoCode: "W02000223"
  },
  {
    en: "Sarn, Bryn-coch & Bryncethin",
    geoType: "MSOA",
    geoCode: "W02000224"
  },
  {
    en: "Pyle, Kenfig Hill & Cefncribwr",
    geoType: "MSOA",
    geoCode: "W02000225"
  },
  {
    en: "Pen-prysg, Hendre & Felindre",
    geoType: "MSOA",
    geoCode: "W02000226"
  },
  {
    en: "Cornelly",
    geoType: "MSOA",
    geoCode: "W02000227"
  },
  {
    en: "Pen-dre, Litchard & Coity",
    geoType: "MSOA",
    geoCode: "W02000228"
  },
  {
    en: "Cefn-glas & Bryntirion",
    geoType: "MSOA",
    geoCode: "W02000229"
  },
  {
    en: "Pen-y-fai, Laleston & Merthyr Mawr",
    geoType: "MSOA",
    geoCode: "W02000230"
  },
  {
    en: "Central Bridgend",
    geoType: "MSOA",
    geoCode: "W02000231"
  },
  {
    en: "Brackla East & Coychurch Lower",
    geoType: "MSOA",
    geoCode: "W02000232"
  },
  {
    en: "Brackla West",
    geoType: "MSOA",
    geoCode: "W02000233"
  },
  {
    en: "Broadlands",
    geoType: "MSOA",
    geoCode: "W02000234"
  },
  {
    en: "Porthcawl West",
    geoType: "MSOA",
    geoCode: "W02000235"
  },
  {
    en: "Porthcawl East",
    geoType: "MSOA",
    geoCode: "W02000236"
  },
  {
    en: "Ogmore-by-Sea & Llandow",
    geoType: "MSOA",
    geoCode: "W02000237"
  },
  {
    en: "Cowbridge",
    geoType: "MSOA",
    geoCode: "W02000238"
  },
  {
    en: "Peterston-super-Ely & Wenvoe",
    geoType: "MSOA",
    geoCode: "W02000239"
  },
  {
    en: "Llandough & Cogan",
    geoType: "MSOA",
    geoCode: "W02000240"
  },
  {
    en: "Penarth",
    geoType: "MSOA",
    geoCode: "W02000241"
  },
  {
    en: "Dinas Powys",
    geoType: "MSOA",
    geoCode: "W02000242"
  },
  {
    en: "Gibbonsdown",
    geoType: "MSOA",
    geoCode: "W02000243"
  },
  {
    en: "Lower Penarth & Sully",
    geoType: "MSOA",
    geoCode: "W02000244"
  },
  {
    en: "Palmerstown",
    geoType: "MSOA",
    geoCode: "W02000245"
  },
  {
    en: "Barry Dyfan & Illtyd",
    geoType: "MSOA",
    geoCode: "W02000246"
  },
  {
    en: "Llantwit Major",
    geoType: "MSOA",
    geoCode: "W02000247"
  },
  {
    en: "Barry East",
    geoType: "MSOA",
    geoCode: "W02000248"
  },
  {
    en: "Barry West",
    geoType: "MSOA",
    geoCode: "W02000249"
  },
  {
    en: "Rhoose & Airport",
    geoType: "MSOA",
    geoCode: "W02000250"
  },
  {
    en: "Barry Island",
    geoType: "MSOA",
    geoCode: "W02000251"
  },
  {
    en: "Hirwaun & Rhigos",
    geoType: "MSOA",
    geoCode: "W02000252"
  },
  {
    en: "Aberdare North & Llwydcoed",
    geoType: "MSOA",
    geoCode: "W02000253"
  },
  {
    en: "Aberdare West",
    geoType: "MSOA",
    geoCode: "W02000254"
  },
  {
    en: "Aberdare East & Cwm-bach",
    geoType: "MSOA",
    geoCode: "W02000255"
  },
  {
    en: "Aberaman",
    geoType: "MSOA",
    geoCode: "W02000256"
  },
  {
    en: "Mountain Ash",
    geoType: "MSOA",
    geoCode: "W02000257"
  },
  {
    en: "Treherbert",
    geoType: "MSOA",
    geoCode: "W02000258"
  },
  {
    en: "Penrhiw-ceibr",
    geoType: "MSOA",
    geoCode: "W02000259"
  },
  {
    en: "Ferndale & Maerdy",
    geoType: "MSOA",
    geoCode: "W02000260"
  },
  {
    en: "Treorchy",
    geoType: "MSOA",
    geoCode: "W02000261"
  },
  {
    en: "Pentre",
    geoType: "MSOA",
    geoCode: "W02000262"
  },
  {
    en: "Abercynon",
    geoType: "MSOA",
    geoCode: "W02000263"
  },
  {
    en: "Tylorstown",
    geoType: "MSOA",
    geoCode: "W02000264"
  },
  {
    en: "Ystrad & Llwynypia",
    geoType: "MSOA",
    geoCode: "W02000265"
  },
  {
    en: "Glyn-coch & Ynys-y-bwl",
    geoType: "MSOA",
    geoCode: "W02000266"
  },
  {
    en: "Tonypandy West & Clydach Vale",
    geoType: "MSOA",
    geoCode: "W02000267"
  },
  {
    en: "Porth East & Ynys-hir",
    geoType: "MSOA",
    geoCode: "W02000268"
  },
  {
    en: "Tonypandy East",
    geoType: "MSOA",
    geoCode: "W02000269"
  },
  {
    en: "Pontypridd East & Cilfynydd",
    geoType: "MSOA",
    geoCode: "W02000270"
  },
  {
    en: "Porth West",
    geoType: "MSOA",
    geoCode: "W02000271"
  },
  {
    en: "Pontypridd West",
    geoType: "MSOA",
    geoCode: "W02000272"
  },
  {
    en: "Trefforest",
    geoType: "MSOA",
    geoCode: "W02000273"
  },
  {
    en: "Tonyrefail West",
    geoType: "MSOA",
    geoCode: "W02000274"
  },
  {
    en: "Tonyrefail East",
    geoType: "MSOA",
    geoCode: "W02000275"
  },
  {
    en: "Church Village East & Ton-teg",
    geoType: "MSOA",
    geoCode: "W02000276"
  },
  {
    en: "Taff's Well & Nantgarw",
    geoType: "MSOA",
    geoCode: "W02000277"
  },
  {
    en: "Church Village West",
    geoType: "MSOA",
    geoCode: "W02000278"
  },
  {
    en: "Beddau & Tyn-y-nant",
    geoType: "MSOA",
    geoCode: "W02000279"
  },
  {
    en: "Bryn-cae & Llanharan",
    geoType: "MSOA",
    geoCode: "W02000280"
  },
  {
    en: "Llantrisant & Talbot Green",
    geoType: "MSOA",
    geoCode: "W02000281"
  },
  {
    en: "Pont-y-clun & Llanharry",
    geoType: "MSOA",
    geoCode: "W02000282"
  },
  {
    en: "Dowlais",
    geoType: "MSOA",
    geoCode: "W02000284"
  },
  {
    en: "Cefncoedycymer, Heolgerrig & Park",
    geoType: "MSOA",
    geoCode: "W02000285"
  },
  {
    en: "Gelli-deg & Town",
    geoType: "MSOA",
    geoCode: "W02000286"
  },
  {
    en: "Pentre-bach & Mountain Hare",
    geoType: "MSOA",
    geoCode: "W02000287"
  },
  {
    en: "Merthyr Vale, Troed-y-rhiw & Bedlinog",
    geoType: "MSOA",
    geoCode: "W02000288"
  },
  {
    en: "Treharris & Trelewis",
    geoType: "MSOA",
    geoCode: "W02000289"
  },
  {
    en: "Rhymney, Pontlottyn & Abertysswg",
    geoType: "MSOA",
    geoCode: "W02000290"
  },
  {
    en: "New Tredegar & Darren Valley",
    geoType: "MSOA",
    geoCode: "W02000291"
  },
  {
    en: "Aberbargoed & Gilfach",
    geoType: "MSOA",
    geoCode: "W02000292"
  },
  {
    en: "Bargoed",
    geoType: "MSOA",
    geoCode: "W02000293"
  },
  {
    en: "North Blackwood, Argoed & Markham",
    geoType: "MSOA",
    geoCode: "W02000294"
  },
  {
    en: "Oakdale & Pen-twyn",
    geoType: "MSOA",
    geoCode: "W02000295"
  },
  {
    en: "Pengam & Cefn Fforest",
    geoType: "MSOA",
    geoCode: "W02000296"
  },
  {
    en: "St Cattwg",
    geoType: "MSOA",
    geoCode: "W02000297"
  },
  {
    en: "Blackwood",
    geoType: "MSOA",
    geoCode: "W02000298"
  },
  {
    en: "Newbridge",
    geoType: "MSOA",
    geoCode: "W02000299"
  },
  {
    en: "Pontllan-fraith",
    geoType: "MSOA",
    geoCode: "W02000300"
  },
  {
    en: "Hengoed & Maesycwmer",
    geoType: "MSOA",
    geoCode: "W02000301"
  },
  {
    en: "Ystrad Mynach & Nelson",
    geoType: "MSOA",
    geoCode: "W02000302"
  },
  {
    en: "Crosskeys North & Abercarn",
    geoType: "MSOA",
    geoCode: "W02000303"
  },
  {
    en: "Crosskeys South & Ynysddu",
    geoType: "MSOA",
    geoCode: "W02000304"
  },
  {
    en: "Risca East",
    geoType: "MSOA",
    geoCode: "W02000305"
  },
  {
    en: "Risca West",
    geoType: "MSOA",
    geoCode: "W02000306"
  },
  {
    en: "Aber Valley",
    geoType: "MSOA",
    geoCode: "W02000307"
  },
  {
    en: "Llanbradach & Penyrheol",
    geoType: "MSOA",
    geoCode: "W02000308"
  },
  {
    en: "Bedwas & Trethomas",
    geoType: "MSOA",
    geoCode: "W02000309"
  },
  {
    en: "Machen",
    geoType: "MSOA",
    geoCode: "W02000310"
  },
  {
    en: "Caerphilly East",
    geoType: "MSOA",
    geoCode: "W02000311"
  },
  {
    en: "Caerphilly West",
    geoType: "MSOA",
    geoCode: "W02000312"
  },
  {
    en: "Caerphilly South",
    geoType: "MSOA",
    geoCode: "W02000313"
  },
  {
    en: "Rassau & Beaufort",
    geoType: "MSOA",
    geoCode: "W02000314"
  },
  {
    en: "Bryn-mawr",
    geoType: "MSOA",
    geoCode: "W02000315"
  },
  {
    en: "Sirhowy",
    geoType: "MSOA",
    geoCode: "W02000316"
  },
  {
    en: "Ebbw Vale North & Glyncoed",
    geoType: "MSOA",
    geoCode: "W02000317"
  },
  {
    en: "Blaina & Nantyglo",
    geoType: "MSOA",
    geoCode: "W02000318"
  },
  {
    en: "Tredegar & Georgetown",
    geoType: "MSOA",
    geoCode: "W02000319"
  },
  {
    en: "Ebbw Vale South & Cwm",
    geoType: "MSOA",
    geoCode: "W02000320"
  },
  {
    en: "Abertillery North & Cwmtillery",
    geoType: "MSOA",
    geoCode: "W02000321"
  },
  {
    en: "Abertillery South & Llanhilleth",
    geoType: "MSOA",
    geoCode: "W02000322"
  },
  {
    en: "Blaenavon",
    geoType: "MSOA",
    geoCode: "W02000323"
  },
  {
    en: "Abersychan",
    geoType: "MSOA",
    geoCode: "W02000324"
  },
  {
    en: "Trefethin & Pen-y-garn",
    geoType: "MSOA",
    geoCode: "W02000325"
  },
  {
    en: "Pontypool",
    geoType: "MSOA",
    geoCode: "W02000326"
  },
  {
    en: "New Inn",
    geoType: "MSOA",
    geoCode: "W02000327"
  },
  {
    en: "Griffithstown & Sebastopol",
    geoType: "MSOA",
    geoCode: "W02000328"
  },
  {
    en: "Pontnewydd & Upper Cwmbran",
    geoType: "MSOA",
    geoCode: "W02000329"
  },
  {
    en: "Croesyceiliog",
    geoType: "MSOA",
    geoCode: "W02000330"
  },
  {
    en: "West Pontnewydd & Thornhill",
    geoType: "MSOA",
    geoCode: "W02000331"
  },
  {
    en: "Cwmbran",
    geoType: "MSOA",
    geoCode: "W02000332"
  },
  {
    en: "Fairwater & Greenmeadow",
    geoType: "MSOA",
    geoCode: "W02000333"
  },
  {
    en: "Hollybush & Henllys",
    geoType: "MSOA",
    geoCode: "W02000334"
  },
  {
    en: "Llantarnam & Oakfield",
    geoType: "MSOA",
    geoCode: "W02000335"
  },
  {
    en: "Abergavenny South & Crucorney",
    geoType: "MSOA",
    geoCode: "W02000336"
  },
  {
    en: "Abergavenny North",
    geoType: "MSOA",
    geoCode: "W02000337"
  },
  {
    en: "Gilwern & Llanfoist",
    geoType: "MSOA",
    geoCode: "W02000338"
  },
  {
    en: "Monmouth & Wyesham",
    geoType: "MSOA",
    geoCode: "W02000339"
  },
  {
    en: "Rhaglan & Llantilio Crossenny",
    geoType: "MSOA",
    geoCode: "W02000340"
  },
  {
    en: "Usk, Goytre & Llangybi Fawr",
    geoType: "MSOA",
    geoCode: "W02000341"
  },
  {
    en: "Chepstow North & Trellech",
    geoType: "MSOA",
    geoCode: "W02000342"
  },
  {
    en: "Chepstow South",
    geoType: "MSOA",
    geoCode: "W02000343"
  },
  {
    en: "Caldicot North & Caer-went",
    geoType: "MSOA",
    geoCode: "W02000344"
  },
  {
    en: "Caldicot South",
    geoType: "MSOA",
    geoCode: "W02000345"
  },
  {
    en: "Magor & Rogiet",
    geoType: "MSOA",
    geoCode: "W02000346"
  },
  {
    en: "Caerleon",
    geoType: "MSOA",
    geoCode: "W02000347"
  },
  {
    en: "Malpas",
    geoType: "MSOA",
    geoCode: "W02000348"
  },
  {
    en: "Bettws",
    geoType: "MSOA",
    geoCode: "W02000349"
  },
  {
    en: "Langstone & Llan-wern",
    geoType: "MSOA",
    geoCode: "W02000350"
  },
  {
    en: "Beechwood",
    geoType: "MSOA",
    geoCode: "W02000351"
  },
  {
    en: "Shaftesbury & Crindai",
    geoType: "MSOA",
    geoCode: "W02000352"
  },
  {
    en: "St Julians & Barnardtown",
    geoType: "MSOA",
    geoCode: "W02000353"
  },
  {
    en: "Lawrence Hill",
    geoType: "MSOA",
    geoCode: "W02000354"
  },
  {
    en: "Rogerstone",
    geoType: "MSOA",
    geoCode: "W02000355"
  },
  {
    en: "Ringland",
    geoType: "MSOA",
    geoCode: "W02000356"
  },
  {
    en: "Maendy",
    geoType: "MSOA",
    geoCode: "W02000357"
  },
  {
    en: "Ridgeway & Glasllwch",
    geoType: "MSOA",
    geoCode: "W02000358"
  },
  {
    en: "Victoria & Somerton",
    geoType: "MSOA",
    geoCode: "W02000359"
  },
  {
    en: "Stow Hill",
    geoType: "MSOA",
    geoCode: "W02000360"
  },
  {
    en: "Liswerry & Uskmouth",
    geoType: "MSOA",
    geoCode: "W02000361"
  },
  {
    en: "Pye Corner & Graig",
    geoType: "MSOA",
    geoCode: "W02000362"
  },
  {
    en: "Gaer",
    geoType: "MSOA",
    geoCode: "W02000363"
  },
  {
    en: "Pillgwenlly & Docks",
    geoType: "MSOA",
    geoCode: "W02000364"
  },
  {
    en: "Duffryn & Maesglas",
    geoType: "MSOA",
    geoCode: "W02000365"
  },
  {
    en: "Marshfield",
    geoType: "MSOA",
    geoCode: "W02000366"
  },
  {
    en: "Lisvane",
    geoType: "MSOA",
    geoCode: "W02000367"
  },
  {
    en: "Thornhill",
    geoType: "MSOA",
    geoCode: "W02000368"
  },
  {
    en: "Pontprennau",
    geoType: "MSOA",
    geoCode: "W02000369"
  },
  {
    en: "Rhiwbina & Pant-mawr",
    geoType: "MSOA",
    geoCode: "W02000370"
  },
  {
    en: "Llanishen",
    geoType: "MSOA",
    geoCode: "W02000371"
  },
  {
    en: "Radyr, Morganstown & Gwaelod-y-garth",
    geoType: "MSOA",
    geoCode: "W02000372"
  },
  {
    en: "Llanrumney North",
    geoType: "MSOA",
    geoCode: "W02000373"
  },
  {
    en: "Cyncoed North",
    geoType: "MSOA",
    geoCode: "W02000374"
  },
  {
    en: "Pentwyn",
    geoType: "MSOA",
    geoCode: "W02000375"
  },
  {
    en: "Tongwynlais & Coryton",
    geoType: "MSOA",
    geoCode: "W02000376"
  },
  {
    en: "Pwll-mawr & St Mellons East",
    geoType: "MSOA",
    geoCode: "W02000377"
  },
  {
    en: "Rhiwbina Village",
    geoType: "MSOA",
    geoCode: "W02000378"
  },
  {
    en: "St Mellons West",
    geoType: "MSOA",
    geoCode: "W02000379"
  },
  {
    en: "Creigiau, Pentyrch & St Fagans",
    geoType: "MSOA",
    geoCode: "W02000380"
  },
  {
    en: "Llanrumney South",
    geoType: "MSOA",
    geoCode: "W02000381"
  },
  {
    en: "Trowbridge",
    geoType: "MSOA",
    geoCode: "W02000382"
  },
  {
    en: "Llanedeyrn",
    geoType: "MSOA",
    geoCode: "W02000383"
  },
  {
    en: "Heath",
    geoType: "MSOA",
    geoCode: "W02000384"
  },
  {
    en: "Cyncoed South & Roath Park",
    geoType: "MSOA",
    geoCode: "W02000385"
  },
  {
    en: "Whitchurch",
    geoType: "MSOA",
    geoCode: "W02000386"
  },
  {
    en: "Birchgrove",
    geoType: "MSOA",
    geoCode: "W02000387"
  },
  {
    en: "Rumney",
    geoType: "MSOA",
    geoCode: "W02000388"
  },
  {
    en: "Llandaf North",
    geoType: "MSOA",
    geoCode: "W02000389"
  },
  {
    en: "Pen-y-lan North",
    geoType: "MSOA",
    geoCode: "W02000390"
  },
  {
    en: "Gabalfa",
    geoType: "MSOA",
    geoCode: "W02000391"
  },
  {
    en: "Llandaf & Danescourt",
    geoType: "MSOA",
    geoCode: "W02000392"
  },
  {
    en: "Fairwater North",
    geoType: "MSOA",
    geoCode: "W02000393"
  },
  {
    en: "Cathays North",
    geoType: "MSOA",
    geoCode: "W02000394"
  },
  {
    en: "Pen-y-lan South",
    geoType: "MSOA",
    geoCode: "W02000395"
  },
  {
    en: "Roath",
    geoType: "MSOA",
    geoCode: "W02000396"
  },
  {
    en: "Fairwater South",
    geoType: "MSOA",
    geoCode: "W02000397"
  },
  {
    en: "Cathays South & Bute Park",
    geoType: "MSOA",
    geoCode: "W02000398"
  },
  {
    en: "Plasnewydd",
    geoType: "MSOA",
    geoCode: "W02000399"
  },
  {
    en: "Pontcanna",
    geoType: "MSOA",
    geoCode: "W02000400"
  },
  {
    en: "Victoria Park",
    geoType: "MSOA",
    geoCode: "W02000401"
  },
  {
    en: "Adamsdown",
    geoType: "MSOA",
    geoCode: "W02000402"
  },
  {
    en: "Tremorfa & Pengam",
    geoType: "MSOA",
    geoCode: "W02000403"
  },
  {
    en: "Splott",
    geoType: "MSOA",
    geoCode: "W02000404"
  },
  {
    en: "Ely East",
    geoType: "MSOA",
    geoCode: "W02000405"
  },
  {
    en: "Canton",
    geoType: "MSOA",
    geoCode: "W02000406"
  },
  {
    en: "Caerau East",
    geoType: "MSOA",
    geoCode: "W02000407"
  },
  {
    en: "South Riverside",
    geoType: "MSOA",
    geoCode: "W02000408"
  },
  {
    en: "Ely West",
    geoType: "MSOA",
    geoCode: "W02000409"
  },
  {
    en: "Grangetown North",
    geoType: "MSOA",
    geoCode: "W02000410"
  },
  {
    en: "Caerau West",
    geoType: "MSOA",
    geoCode: "W02000411"
  },
  {
    en: "Grangetown South",
    geoType: "MSOA",
    geoCode: "W02000412"
  },
  {
    en: "Sennybridge & Talybont-on-Usk",
    geoType: "MSOA",
    geoCode: "W02000414"
  },
  {
    en: "Gurnos, Trefechan & Pontsticill",
    geoType: "MSOA",
    geoCode: "W02000415"
  },
  {
    en: "Ystradgynlais & Tawe Uchaf",
    geoType: "MSOA",
    geoCode: "W02000416"
  },
  {
    en: "Ystalyfera & Gwaun-Cae-Gurwen",
    geoType: "MSOA",
    geoCode: "W02000417"
  },
  {
    en: "Whitland, Laugharne & Llansteffan",
    geoType: "MSOA",
    geoCode: "W02000418"
  },
  {
    en: "Rhyl East",
    geoType: "MSOA",
    geoCode: "W02000419"
  },
  {
    en: "Rheidol, Ystwyth & Caron",
    geoType: "MSOA",
    geoCode: "W02000421"
  },
  {
    en: "Cardiff Bay",
    geoType: "MSOA",
    geoCode: "W02000422"
  },
  {
    en: "Butetown",
    geoType: "MSOA",
    geoCode: "W02000423"
  },
  {
    en: "Marford, Gresford & Llay North",
    geoType: "MSOA",
    geoCode: "W02000424"
  },
  {
    en: "Holt & Rossett",
    geoType: "MSOA",
    geoCode: "W02000425"
  },
  {
    en: "Maes-y-dre & Borras",
    geoType: "MSOA",
    geoCode: "W02000426"
  },
  {
    en: "Aberdulais, Resolven & Afan Valley",
    geoType: "MSOA",
    geoCode: "W02000427"
  },
  {
    en: "Dunvant & Killay",
    geoType: "MSOA",
    geoCode: "W02000428"
  }
];
const GET = ({ url }) => {
  const q = url.searchParams.get("q").toLowerCase();
  if (q) {
    const results = data.filter((geo) => geo.en.toLowerCase().includes(q) || geo.geoCode.toLowerCase() === q);
    return json(results);
  } else {
    return json([]);
  }
};
export {
  GET
};
