export interface Penalty {
    amount?: number;
    applicability?: 'After' | 'Before';
    cat16Info?: boolean;
    cat16TextOnly?: Cat16TextOnly[];
    changeable?: boolean;
    conditionsApply?: boolean;
    currency?: string;
    refundable?: boolean;
    type?: 'Refund' | 'Exchange';
}

export interface Cat16TextOnly {
    // Fare basis code for the price for this passenger type code (PTC).
    fareBasisCode: string;
    // Fare component ID for which Category 16 contains text only.
    fareComponentId: number;
}

const exemples = [
    {
        "type": "Exchange",
        "applicability": "Before",
        "changeable": true,
        "amount": 0,
        "currency": "EUR"
    },
    {
        "type": "Exchange",
        "applicability": "After",
        "changeable": false
    },
    {
        "type": "Refund",
        "applicability": "Before",
        "cat16Info": true,
        "cat16TextOnly": [
            {
                "fareBasisCode": "T3RPWFR",
                "fareComponentId": 0
            }
        ]
    },
    {
        "type": "Refund",
        "applicability": "After",
        "cat16Info": true,
        "cat16TextOnly": [
            {
                "fareBasisCode": "T3RPWFR",
                "fareComponentId": 0
            }
        ]
    }
],
