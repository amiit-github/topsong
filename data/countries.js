var countries = {
    ae: 'United Arab Emirates',
    ag: 'Antigua and Barbuda',
    ai: 'Anguilla',
    al: 'Albania',
    am: 'Armenia',
    ao: 'Angola',
    ar: 'Argentina',
    at: 'Austria',
    au: 'Australia',
    az: 'Azerbaijan',
    bb: 'Barbados',
    be: 'Belgium',
    bf: 'Burkina-Faso',
    bg: 'Bulgaria',
    bh: 'Bahrain',
    bj: 'Benin',
    bm: 'Bermuda',
    bn: 'Brunei Darussalam',
    bo: 'Bolivia',
    br: 'Brazil',
    bs: 'Bahamas',
    bt: 'Bhutan',
    bw: 'Botswana',
    by: 'Belarus',
    bz: 'Belize',
    ca: 'Canada',
    cg: 'Democratic Republic of the Congo',
    ch: 'Switzerland',
    cl: 'Chile',
    cn: 'China',
    co: 'Colombia',
    cr: 'Costa Rica',
    cv: 'Cape Verde',
    cy: 'Cyprus',
    cz: 'Czech Republic',
    de: 'Germany',
    dk: 'Denmark',
    dm: 'Dominica',
    do: 'Dominican Republic',
    dz: 'Algeria',
    ec: 'Ecuador',
    ee: 'Estonia',
    eg: 'Egypt',
    es: 'Spain',
    fi: 'Finland',
    fj: 'Fiji',
    fm: 'Federated States of Micronesia',
    fr: 'France',
    gb: 'Great Britain',
    gd: 'Grenada',
    gh: 'Ghana',
    gm: 'Gambia',
    gr: 'Greece',
    gt: 'Guatemala',
    gw: 'Guinea Bissau',
    gy: 'Guyana',
    hk: 'Hong Kong',
    hn: 'Honduras',
    hr: 'Croatia',
    hu: 'Hungaria',
    id: 'Indonesia',
    ie: 'Ireland',
    il: 'Israel',
    in: 'India',
    is: 'Iceland',
    it: 'Italy',
    jm: 'Jamaica',
    jo: 'Jordan',
    jp: 'Japan',
    ke: 'Kenya',
    kg: 'Krygyzstan',
    kh: 'Cambodia',
    kn: 'Saint Kitts and Nevis',
    kr: 'South Korea',
    kw: 'Kuwait',
    ky: 'Cayman Islands',
    kz: 'Kazakhstan',
    la: 'Laos',
    lb: 'Lebanon',
    lc: 'Saint Lucia',
    lk: 'Sri Lanka',
    lr: 'Liberia',
    lt: 'Lithuania',
    lu: 'Luxembourg',
    lv: 'Latvia',
    md: 'Moldova',
    mg: 'Madagascar',
    mk: 'Macedonia',
    ml: 'Mali',
    mn: 'Mongolia',
    mo: 'Macau',
    mr: 'Mauritania',
    ms: 'Montserrat',
    mt: 'Malta',
    mu: 'Mauritius',
    mw: 'Malawi',
    mx: 'Mexico',
    my: 'Malaysia',
    mz: 'Mozambique',
    na: 'Namibia',
    ne: 'Niger',
    ng: 'Nigeria',
    ni: 'Nicaragua',
    nl: 'Netherlands',
    np: 'Nepal',
    no: 'Norway',
    nz: 'New Zealand',
    om: 'Oman',
    pa: 'Panama',
    pe: 'Peru',
    pg: 'Papua New Guinea',
    ph: 'Philippines',
    pk: 'Pakistan',
    pl: 'Poland',
    pt: 'Portugal',
    pw: 'Palau',
    py: 'Paraguay',
    qa: 'Qatar',
    ro: 'Romania',
    ru: 'Russia',
    sa: 'Saudi Arabia',
    sb: 'Soloman Islands',
    sc: 'Seychelles',
    se: 'Sweden',
    sg: 'Singapore',
    si: 'Slovenia',
    sk: 'Slovakia',
    sl: 'Sierra Leone',
    sn: 'Senegal',
    sr: 'Suriname',
    st: 'Sao Tome e Principe',
    sv: 'El Salvador',
    sz: 'Swaziland',
    tc: 'Turks and Caicos Islands',
    td: 'Chad',
    th: 'Thailand',
    tj: 'Tajikistan',
    tm: 'Turkmenistan',
    tn: 'Tunisia',
    tr: 'Turkey',
    tt: 'Republic of Trinidad and Tobago',
    tw: 'Taiwan',
    tz: 'Tanzania',
    ua: 'Ukraine',
    ug: 'Uganda',
    us: 'United States of America',
    uy: 'Uruguay',
    uz: 'Uzbekistan',
    vc: 'Saint Vincent and the Grenadines',
    ve: 'Venezuela',
    vg: 'British Virgin Islands',
    vn: 'Vietnam',
    ye: 'Yemen',
    za: 'South Africa',
    zw: 'Zimbabwe'
}

var countries_actual = [ "Albania", "Algeria", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Argentina (English)", "Armenia", "Australia", "Austria", "Austria (English)", "Azerbaijan", "Bahamas", "Bahrain", "Barbados", "Belarus", "Belgium", "Belgium (English)", "Belgium (French)", "Belize", "Belize (Spanish)", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bolivia (English)", "Botswana", "Brazil", "Brazil (English)", "British Virgin Islands", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Cambodia", "Canada", "Canada (French)", "Cape Verde", "Cayman Islands", "Chad", "Chile", "Chile (English)", "China", "China (English)", "Colombia", "Colombia (English)", "Congo, Republic of the", "Costa Rica", "Costa Rica (English)", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Denmark (English)", "Dominica", "Dominica (English)", "Dominican Republic", "Dominican Republic (English)", "Ecuador", "Ecuador (English)", "Egypt", "El Salvador", "El Salvador (English)", "Estonia", "Fiji", "Finland", "Finland (English)", "France", "France (English)", "Gambia", "Germany", "Germany (English)", "Ghana", "Greece", "Grenada", "Guatemala", "Guatemala (English)", "Guinea-Bissau", "Guyana", "Honduras", "Honduras (English)", "Hong Kong", "Hong Kong (English)", "Hungary", "Iceland", "India", "Indonesia", "Indonesia (English)", "Ireland", "Israel", "Italy", "Italy (English)", "Jamaica", "Japan", "Japan (English)", "Jordan", "Kazakhstan", "Kenya", "Korea, Republic Of", "Korea, Republic Of (English)", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Liberia", "Lithuania", "Luxembourg", "Luxembourg (English)", "Luxembourg (French)", "Macau", "Macau (English)", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Malaysia (English)", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Mexico (English)", "Micronesia, Federated States of", "Moldova", "Mongolia", "Montserrat", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands (English)", "New Zealand", "Nicaragua", "Nicaragua (English)", "Niger", "Nigeria", "Norway", "Norway (English)", "Oman", "Pakistan", "Palau", "Panama", "Panama (English)", "Papua New Guinea", "Paraguay", "Paraguay (English)", "Peru", "Philippines", "Poland", "Portugal", "Portugal (English)", "Qatar", "Romania", "Russia", "Russia (English)", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Singapore (English)", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "Spain", "Spain (English)", "Sri Lanka", "St. Kitts and Nevis", "St. Lucia", "St. Vincent and The Grenadines", "Suriname", "Suriname (English)", "Swaziland", "Sweden", "Sweden (English)", "Switzerland", "Switzerland (English)", "Switzerland (French)", "Switzerland (Italian)", "Taiwan", "Taiwan (English)", "Tajikistan", "Tanzania", "Thailand", "Thailand (English)", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkey (English)", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States (Spanish)", "Uruguay", "Uruguay (English)", "Uzbekistan", "Venezuela", "Venezuela (English)", "Vietnam", "Vietnam (English)", "Yemen", "Zimbabwe" ]