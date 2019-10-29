export interface CreateBargainFinderMaxRequest {
    OTA_AirLowFareSearchRQ?: OTAAirLowFareSearchRQ;
}
export interface OTAAirLowFareSearchRQ {
    AltLangID?: string;
    // Include only flights with available booking codes (when True or when attribute not present).
    AvailableFlightsOnly?: boolean;
    // Request direct flights between given locations. This defaults to false.
    DirectFlightsOnly?: boolean;
    // A sequence number for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.
    EchoToken?: string;
    // A positive integer value that indicates the maximum number of responses desired in the return.
    MaxResponses?: string;
    OriginDestinationInformation?: any[];
    POS?: any;
    // Identifes the primary language preference for the form of travel represented in a collection. The human language is identified by ISO 639 codes.
    PrimaryLangID?: string;
    ResponseType?: string;
    ResponseVersion?: string;
    // Whether all messages should be printed in separate MTP element or not. Works only with PSS response serializers.
    SeparateMessages?: boolean;
    // Used to identify the sequence number of the transaction as assigned by the sending system; allows for an application to process messages in a certain order or to request a resynchronization of messages in the event that a system has been off-line and needs to retrieve messages that were missed.
    SequenceNmbr?: string;
    TPA_Extensions?: any;
    // Used to indicate whether the request is for the Test or Production system.
    Target?: string;
    // Indicates the creation date and time of the message in UTC using the following format specified by ISO 8601; YYYY-MM-DDThh:mm:ssZ with time values using the 24 hour clock (eg. 20 November 2003, 1:59:38 pm UTC becomes 2003-11-20T13:59:38Z).
    TimeStamp?: string;
    // A unique identifier to relate all messages within a transaction (eg. this would be sent in all request and response messages that are part of an on-going transaction).
    TransactionIdentifier?: string;
    // This indicates where this message falls within a sequence of messages.
    TransactionStatusCode?: string;
    TravelPreferences?: AirSearchPrefsType;
    TravelerInfoSummary?: TravelerInfoSummaryType;
    // Whether each MTP content should be truncated to specified length or not. Works only with PSS response serializers.
    TruncateMessages?: boolean;
    Version?: string;
}
export interface AirSearchPrefsType {
    // Return flights not combinable into roundtrips as one ways is a separate section.
    AllFlightsData?: boolean;
    AncillaryFees?: any;
    Baggage?: any;
    CabinPref?: any[];
    CommissionCodeQualifiers?: any;
    // Request flights that are e-ticketable in the response.
    ETicketDesired?: boolean;
    EquipPref?: any[];
    FareRestrictPref?: any[];
    FlightTypePref?: any;
    FrequentFlyer?: AirSearchPrefsTypeFrequentFlyer[];
    // If false no solutions priced outside of ATSE systems will be returned in response for carriers operating in hybrid content distribution model.
    Hybrid?: boolean;
    InterlineBrands?: any;
    // If false no alternative solutions will be returned in response
    LookForAlternatives?: boolean;
    // Request flights that have no more than the requested number of stops.
    MaxStopsQuantity?: number;
    // Request for flights in response that meet the given Department of Transport on-time rate. This is a number between 0 and 100.
    OnTimeRate?: number;
    SmokingAllowed?: boolean;
    SpanishFamilyDiscount?: any;
    TPA_Extensions?: any;
    TicketDistribPref?: any[];
    // Define on which legs each flight should appear at least once.
    UseAllFlights?: string;
    // Request options that are validated on base of interline ticketing aggrement.
    ValidInterlineTicket?: boolean;
    VendorPref?: any[];
    VendorPrefApplicability?: any[];
    VendorPrefPairing?: any[];
}

export interface AirSearchPrefsTypeFrequentFlyer {
    // Airline Carrier Code
    AirlineCode?: string;
    // Frequent Flyer Status
    Status?: number;
}
export interface TravelerInfoSummaryType {
    AirTravelerAvail?: TravelerInformationType[];
    PriceRequestInformation?: PriceRequestInformationType;
    SeatsRequested?: number[];
    // If true, this request is for a specific PTC and only fares applicable to that PTC will be checked and returned. It is the same as XOFares flag in Intellisell request.
    SpecificPTC_Indicator?: boolean;
    TPA_Extensions?: TravelerInfoSummaryTPAExtensionsType;
}
export interface TravelerInfoSummaryTPAExtensionsTypeTravelerRatingScore {
    Carrier?: string;
    Value?: number;
}
export interface TravelerInfoSummaryTPAExtensionsTypeTravelerRatingFrequentFlyer {
    // Two-character carrier code for the airline.
    Carrier?: string;
    // Frequent Flyer tiers for one traveler.
    Tier?: number;
}
export interface TravelerInfoSummaryTPAExtensionsTypeTravelerRating {
    FrequentFlyer?: TravelerInfoSummaryTPAExtensionsTypeTravelerRatingFrequentFlyer[];
    Score?: TravelerInfoSummaryTPAExtensionsTypeTravelerRatingScore[];
}
export interface TravelerInfoSummaryTPAExtensionsType {
    TravelerRating?: TravelerInfoSummaryTPAExtensionsTypeTravelerRating[];
}
export interface TravelerInformationType {
    AirTraveler?: AirTravelerType;
    PassengerTypeQuantity?: any[];
}
export interface AirTravelerType {
    // Indicates if an infant accompanying a traveler is with or without a seat.,A three-letter code representing passenger type (eg. .ADT. for adult, .CNN. for child)
    AccompaniedByInfant?: boolean;
    Address?: any[];
    // Date of Birth.
    BirthDate?: string;
    // The preferred currency in which monetary amounts should be returned.
    CurrencyCode?: string;
    CustLoyalty?: CustLoyaltyType[];
    Document?: DocumentType[];
    Email?: any[];
    FlightSegmentRPHs?: {
        FlightSegmentRPH?: string[];
    };
    Gender?: string;
    PassengerTypeCode?: string;
    PassengerTypeQuantity?: any;
    PersonName?: any;
    ProfileRef?: AirTravelerTypeProfileRef;
    // value="Inherit" Permission for sharing data for marketing purposes.
    ShareMarketInd?: string;
    // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
    ShareSynchInd?: string;
    Telephone?: any[];
    TravelerRefNumber?: {
      // Reference place holder.
      RPH?: string;
    };
}

export interface AirTravelerTypeProfileRef {
    UniqueID?: {
        CompanyName?: {
            // Identifies a company by the company code.
            Code?: string;
            // Identifies the context of the identifying code, such as DUNS, IATA or internal code, etc.
            CodeContext?: string;
            // Used for Character Strings, length 1 to 64
            CompanyShortName?: string;
            // Refer to OTA Code List Travel Sector (TVS).
            TravelSector?: string;
            content?: string;
        };
        // A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
        ID?: string;
        // Used to identify the source of the identifier (eg. IATA, ABTA, etc.).
        ID_Context?: string;
        // The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
        Instance?: string;
        Type?: string;
        // URL that identifies the location associated with the record identified by the UniqueID.
        URL?: string;
    };
  }
export interface CustLoyaltyType {
    // Indicates the starting date.
    EffectiveDate?: string;
    // Indicates the ending date.
    ExpireDate?: string;
    // Indicates special privileges in program assigned to individual.
    LoyalLevel?: string;
    // Unique identifier of the member in the program (membership number, account number, etc.).
    MembershipID?: string;
    // Identifier to indicate the company owner of the loyalty program.
    ProgramID?: string;
    // Reference place holder, to reference it back in the response.
    RPH?: string;
    // value="Inherit" Permission for sharing data for marketing purposes.
    ShareMarketInd?: string;
    // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
    ShareSynchInd?: string;
    // Indicates when the member signed up for the loyalty program.
    SignupDate?: string;
    // Indicates if program is affiliated with a group of related offers accumulating credits.
    SingleVendorInd?: string;
    // Identifies the travel sector. Refer to OTA Code List Travel Sector (TVS).
    TravelSector?: string;
}

export interface PriceRequestInformationType {
    AccountCode?: FlexibleFaresTypeFareParametersAccountCode[];
    //Controls advance purchase validation logic for repricing. Values 'T'/'F' can be used by AS, for TN the only valid option is 'N'.
    BypassAdvancePurchase?: 'T' | 'F' | 'N';
    CurrencyCode?: string;
    FareQualifier?: string;
    NegotiatedFareCode?: PriceRequestInformationTypeNegotiatedFareCode[];
    // If set to true then returned fares need to match requested AcccountCode/CorpID on all fare components
    NegotiatedFaresOnly?: boolean;
    // Set to true when exchange ticket uses net fare.
    NetFaresUsed?: boolean;
    // It can be used to indicate whether the fare is public or private.
    PricingSource?: string;
    // Activates processing of thru fares only.
    ProcessThruFaresOnly?: boolean;
    // Specify purchase date. Fares returned will be based on the purchase date.
    PurchaseDate?: string;
    // Specify purchase time. Fares returned will be based on the purchase time.
    PurchaseTime?: string;
    Reprice?: boolean;
    TPA_Extensions?: PriceRequestInformationTypeTPAExtensions;
}

export interface FlexibleFaresTypeFareParametersAccountCode {
    // Used for Character Strings, length 1 to 20
    Code?: string;
}
export interface PriceRequestInformationTypeNegotiatedFareCode {
    // Any code used to specify an item, for example, type of traveler, service code, room amenity, etc.
    Code?: string;
    // Identifies the source authority for the code.
    CodeContext?: string;
    // Used to define a quantity of an associated element or attribute.
    Quantity?: number;
    // An additional attribute to allow flexibility for particular organizations who require an additional code.
    SecondaryCode?: string;
    Supplier?: CompanyNameType[];
    // An additional attribute to allow flexibility for particular organizations who require an additional supplier code.
    SupplierCode?: string;
    TPA_Extensions?: string[];
    // Identifies the location of the code table
    URI?: string;
}
export interface CompanyNameType {
    // Identifies a company by the company code.
    Code?: string;
    // Identifies the context of the identifying code, such as DUNS, IATA or internal code, etc.
    CodeContext?: string;
    // Used for Character Strings, length 1 to 64
    CompanyShortName?: string;
    // Refer to OTA Code List Travel Sector (TVS).
    TravelSector?: string;
    content?: string;
}
export interface PriceRequestInformationTypeTPAExtensions {
    ApplyResidentDiscount?: {
        Ind?: boolean;
    };
    BrandedFareIndicators?: any;
    Currency?: any;
    CustomerType?: {
        Value?: string
    };
    ETicketableOverride?: {
        Value?: string
    };
    FareAdjustment?: any[];
    FareBreaksAtLegs?: any;
    ForceCompanion?: { // Used for amounts, max 3 decimals
        Value?: number;
    };
    IATAFare?: {
        Ind?: boolean;
    };
    Indicators?: any;
    MultipleTravelerGroups?: any;
    OBFees?: {
        RType?: boolean;
        TType?: boolean;
    };
    PassengerPriceAdjustment?: any[];
    PassengerStatus?: any;
    PointOfSaleOverride?: any;
    PointOfTicketingOverride?: any;
    PriceAdjustment?: any;
    Priority?: any;
    PrivateFare?: {
        Ind?: boolean;
    };
    // Promotional Identifier - a string which identifies a promotion, possibly giving a discount prices etc.
    PromoID?: string;
    PublicFare?: {
        Ind?: boolean;
    };
    UseNegotiatedFares?: {
        Ind?: boolean;
    };
    UsePassengerFares?: {
        Ind?: boolean;
    };
    UseReducedConstructions?: {
        Ind?: boolean;
    };
    WebFare?: {
        Ind?: boolean;
    };
}
