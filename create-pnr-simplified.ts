
export interface CreatePassengerNameRecordRQ {
    Profile?: Profile;
    TravelItineraryAddInfo?: TravelItineraryAddInfo;
    AirBook?: any;
    // Used to price air segments
    AirPrice?: any[];
    AirTax?: any;
    HotelBook?: any;
    MiscSegment?: any;
    SpecialReqDetails?: any;
    PostProcessing: any;
    // Used for internal processing
    SPInternal?: string;
    // Used to specify to which city service should change context using ContextChange (AAA) and the rest of the service uses new security. If empty or equals current city the context doesn't change.
    targetCity?: string;
    // Used to specify whether the service should stop processing upon encountering a pricing error
    haltOnAirPriceError?: boolean;
    // Used to specify whether the service should stop processing upon encountering a hotel book error.
    haltOnHotelBookError?: boolean;
    // Version of the payload message.
    version?: string;
}

export interface TravelItineraryAddInfo {
    AgencyInfo?: any;
    CustomerInfo?: CustomerInfo;
}

export interface Profile {
    UniqueID: UniqueID;
}
export interface UniqueID {
    // Used to specify a profile name that is to be moved into the AAA to create the PNR
    ID: string;
}

export interface CustomerInfo {
    ContactNumbers?: any;
    Corporate?: Corporate;
    CreditCardData?: any;
    // Used to pass frequent flyer number information
    CustLoyalty?: CustLoyalty[];
    // Used to add a customer number into the record if applicable. Please note that this qualifier is not applicable to Sabre Sonic Res-based clients
    CustomerIdentifier?: string;
    // Used to pass e-mail details
    Email?: any[];
    // Used to add passenger names
    PersonName?: any[];
}

export interface CustLoyalty {
    // Used to add a frequent traveler number into the record.
    MembershipID: string;
    // Used to specify a passenger name number.
    NameNumber?: string;
    // Used to add the carrier code associated with the frequent traveler number
    ProgramID: string;
    // Used to add a segment number to associate the frequent traveler number to. SegmentNumber and TravelingCarrierCode cannot combine
    SegmentNumber?: string;
    // Used to transmit the frequent traveler number of one airline to accrue mileage on another carrier. SegmentNumber and TravelingCarrierCode cannot combine
    TravelingCarrierCode?: string;
}

export interface Corporate {
    // Used to add a corporate ID into the record if applicable. Please note that this qualifier is not applicable to Sabre Sonic Res-based clients. Furthermore, Sabre Travel Network-based customers need to first have this functionality activated for their particular location by their account representative prior to attempting to utilize this element
    ID: string;
}
