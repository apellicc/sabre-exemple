export interface TaxType {
    // Tax Amount.
    amount: number;
    // Carrier code for this tax.
    carrier?: string;
    // Tax Code.
    code: string;
    // Country Code.
    country?: string;
    // Currency Code.
    currency: string;
    // Tax Description.
    description?: string;
    // Tax ID.
    id: number;
    // Published tax amount.
    publishedAmount?: number;
    // Published tax currency code.
    publishedCurrency?: string;
    // Station code - airport code at which the tax or surcharge is being applied.
    station?: string;
    taxReissue?: TaxReissueType;
    taxRestrictions?: TaxRestrictionsType;
}
export interface TaxReissueType {
    maxAmount?: number;
    maxCurrency?: string;
    refundable?: boolean;
    restrictionApply?: boolean;
    taxType?: string;
}
export interface TaxRestrictionsType {
    currency?: string;
    maxAmount?: number;
    minAmount?: number;
    rate?: number;
}


const exemples = [
    {
        "id": 7,
        "code": "YQI",
        "amount": 12,
        "currency": "EUR",
        "description": "SERVICE FEE - CARRIER-IMPOSED MISC",
        "publishedAmount": 12,
        "publishedCurrency": "EUR",
        "station": "CDG"
    },
    {
        "id": 8,
        "code": "FR",
        "amount": 4.58,
        "currency": "EUR",
        "description": "CIVIL AVIATION TAX DOMESTIC AND INTERNATIONAL",
        "publishedAmount": 4.58,
        "publishedCurrency": "EUR",
        "station": "CDG",
        "country": "FR"
    },
    {
        "id": 6,
        "code": "FR7",
        "amount": 11.7,
        "currency": "EUR",
        "description": "AIRPORT TAX DOMESTIC AND INTERNATIONAL",
        "publishedAmount": 11.7,
        "publishedCurrency": "EUR",
        "station": "CDG",
        "country": "FR"
    },
    {
        "id": 3,
        "code": "IZ",
        "amount": 1.13,
        "currency": "EUR",
        "description": "AIR PASSENGER SOLIDARITY TAX",
        "publishedAmount": 1.13,
        "publishedCurrency": "EUR",
        "station": "CDG",
        "country": "FR"
    },
    {
        "id": 9,
        "code": "QX",
        "amount": 11.94,
        "currency": "EUR",
        "description": "PASSENGER SERVICE CHARGE INTERNATIONAL",
        "publishedAmount": 11.94,
        "publishedCurrency": "EUR",
        "station": "CDG",
        "country": "FR"
    }
]
