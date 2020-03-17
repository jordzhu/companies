let THOUSAND = 1000;

/**
 * Simple metrics to gauge a company. Info is available if company is public.
 * 
 * 1. YoY Revenue Growth
 * 2. Net income / num of employees
 * 
 * And just for fun, looking at the stock price in past 3 years. Jan 2017 - Jan 2020
 * 
 */

let data = {
    "Facebook": {
        "employees": 44942,
        "revenue": [55838000, 70697000],
        "stockGrowth": 69,
        "netIncome": 18485000
    },
    "Amazon": {
        "employees": 750000,
        "revenue": [232887000, 280522000],
        "stockGrowth": 135,
        "netIncome": 11588000
    },
    "Apple": {
        "employees": 137000,
        "revenue": [265595000, 260174000],
        "stockGrowth": 156,
        "netIncome": 55256000
    },
    "Tesla": {
        "employees": 48817,
        "revenue": [21461268, 24578000],
        "stockGrowth": 107,
        "netIncome": -862000
    },
    "Google": {
        "employees": 103549,
        "revenue": [136819000, 161857000],
        "stockGrowth": 65,
        "netIncome": 34343000
    },
    "Netflix": {
        "employees": 6700,
        "revenue": [15794341, 20156447],
        "stockGrowth": 148,
        "netIncome": 1866916
    },
    "Dropbox": {
        "employees": 2323,
        "revenue": [1391700, 1661300],
        "stockGrowth": -28,
        "netIncome": -52700
    },
    "Square": {
        "employees": 3835,
        "revenue": [3298177, 4713500],
        "stockGrowth": 353,
        "netIncome": 375446
    },
    "Microsoft": {
        "employees": 148465,
        "revenue": [110360000, 125843000],
        "stockGrowth": 152,
        "netIncome": 39240000
    },
    "MongoDB": {
        "employees": 1212,
        "revenue": [154519, 267016],
        "stockGrowth": 386,
        "netIncome": -99011
    },
    "Etsy": {
        "employees": 1240,
        "revenue": [603693, 818379],
        "stockGrowth": 281,
        "netIncome": 95894
    },
    "Spotify": {
        "employees": 4405,
        "revenue": [5259000, 6764000],
        "stockGrowth": 4,
        "netIncome": -186000
    },
    "Twitter": {
        "employees": 4900,
        "revenue": [3042359, 3459329],
        "stockGrowth": 93,
        "netIncome": 1465659
    },
    "Snap": {
        "employees": 2734,
        "revenue": [1180446, 1715534],
        "stockGrowth": -38,
        "netIncome": -1033660
    },
    "Yext": {
        "employees": 1000,
        "revenue": [228283, 298829],
        "stockGrowth": 6,
        "netIncome": -121544
    },
    "Uber": {
        "employees": 27000,
        "revenue": [11270000, 14147000],
        "stockGrowth": -4,
        "netIncome": -8506000
    },
    "Datadog": {
        "employees": 1403,
        "revenue": [198077, 362780],
        "stockGrowth": 39,
        "netIncome": -20140
    },
    "IBM": {
        "employees": 350600,
        "revenue": [79590000, 77147000],
        "stockGrowth": -17,
        "netIncome": 9431000
    },
    "Salesforce": {
        "employees": 35000,
        "revenue": [13282000, 17098000],
        "stockGrowth": 125,
        "netIncome": 126000
    },
    "Slack": {
        "employees": 2045,
        "revenue": [400552, 630422],
        "stockGrowth": -23,
        "netIncome": -571058
    },
    "Lyft": {
        "employees": 5683,
        "revenue": [2156616, 3615960],
        "stockGrowth": -32,
        "netIncome": -2602241
    },
    "Pinterest": {
        "employees": 2217,
        "revenue": [755932, 1142761],
        "stockGrowth": -15,
        "netIncome": -1361371
    },
    "Cisco": {
        "employees": 75900,
        "revenue": [49330000, 51904000],
        "stockGrowth": 57,
        "netIncome": 11621000
    },
    "Nvidia": {
        "employees": 13775,
        "revenue": [11716000, 10918000],
        "stockGrowth": 121,
        "netIncome": 2796000
    },
    "Box": {
        "employees": 1980,
        "revenue": [608386, 696264],
        "stockGrowth": -2,
        "netIncome": -144348
    },
    "Yelp": {
        "employees": 3844,
        "revenue": [942773, 1014194],
        "stockGrowth": -10,
        "netIncome": 40881
    },
    "Oracle": {
        "employees": 136000,
        "revenue": [39831000, 39506000],
        "stockGrowth": -35,
        "netIncome": 11083000
    },
    "Paypal": {
        "employees": 21800,
        "revenue": [15451000, 17772000],
        "stockGrowth": 170,
        "netIncome": 2459000
    },
    "Ebay": {
        "employees": 14100,
        "revenue": [10746000, 10800000],
        "stockGrowth": 15,
        "netIncome": 1786000
    },
    "Intel": {
        "employees": 107400,
        "revenue": [70848000, 71965000],
        "stockGrowth": 62,
        "netIncome": 21048000
    },
    "Zillow": {
        "employees": 4336,
        "revenue": [1333554, 2742837],
        "stockGrowth": 17,
        "netIncome": -305361
    },
    "Expedia": {
        "employees": 25400,
        "revenue": [11223000, 12067000],
        "stockGrowth": -8,
        "netIncome": 565000
    },
    "VMWare": {
        "employees": 24200,
        "revenue": [8974000, 10811000],
        "stockGrowth": 82,
        "netIncome": 6412000
    },
    "Dell": {
        "employees": 157000,
        "revenue": [90621000, 92154000],
        "stockGrowth": 53,
        "netIncome": 4616000
    },
    "Workday": {
        "employees": 12200,
        "revenue": [2822180, 3627206],
        "stockGrowth": 154,
        "netIncome": -480674
    },
    "Roku": {
        "employees": 1650,
        "revenue": [742506, 1128921],
        "stockGrowth": 164,
        "netIncome": -59937
    },
    "Cloudera": {
        "employees": 2947,
        "revenue": [479941, 794191],
        "stockGrowth": -28,
        "netIncome": -336582
    }
};

let companies = new Map();

for (let key of Object.keys(data)) {
    let netIncomePerPerson = (data[key].netIncome*THOUSAND / data[key].employees).toFixed(2);
    let revenueGrowth = ((data[key].revenue[1] - data[key].revenue[0]) / data[key].revenue[0] * 100).toFixed(2);
    let stockGrowth = data[key].stockGrowth;
    companies.set(key, {netIncomePerPerson, revenueGrowth, stockGrowth});
}