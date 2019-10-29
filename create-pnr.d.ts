declare namespace CPNR {
    export interface WeightLimit {
      // Weight limit
      content?: string;
      // Weight units
      Units?: string;
    }
    export interface Warnings {
      // Warning
      Warning?: Warning[];
    }
    export interface Warning {
      // Any free text
      ShortText?: string;
    }
    export interface WaitForAirlineRecLoc {
      // The maximum time that can be set is 60 seconds. This applies to PostBookingHKValidation, WaitForAirlineRecLoc or both
      waitInterval: number;
      // Used to request a redisplay reservation number of attempts
      numAttempts: number;
    }
    export interface Visa {
      // You must use a valid 2 or 3 character country code (alpha characters only)
      ApplicableCountry?: string;
      // Place of birth
      PlaceOfBirth?: string;
      // Place of issue
      PlaceOfIssue?: string;
      // Issue date
      IssueDate?: string;
    }
    export interface VirtualCard {
      // Customer account code
      CustomerAccountCode: string;
    }
    export interface VendorPrefs6 {
      Airline: Airline7;
    }
    export interface VendorPrefs4 {
      Airline: Airline5;
    }
    export interface VendorPrefs3 {
      Airline: Airline3;
    }
    export interface VendorPrefs2 {
      Airline: Airline2;
    }
    export interface VendorPrefs1 {
      Airline: Airline1;
    }
    export interface VendorPrefs {
      Airline: Airline;
    }
    export interface ValidityDate {
      // Used to specify the ending validity date. "NotValidAfter" follows this format: MM-DD or YYYY-MM-DD
      NotValidAfter?: string;
      // Used to specify the beginning validity date. "NotValidBefore" follows this format: MM-DD or YYYY-MM-DD
      NotValidBefore?: string;
      Segment: Segment1;
    }
    export interface UserInfo {
      AAACity: AAACity;
      Action?: Action;
      AgentSine: AgentSine;
      Branch?: Branch;
      Partition: Partition;
      Service: Service;
      // User set address
      SetAddress?: string;
      Station?: Station;
      Transaction?: Transaction;
    }
    export interface USDOTDisclosure {
      // Used to return non-US DOT baggage disclosure-related information
      Text?: string[];
    }
    export interface UniqueID1 {
      // This attribute is not in use
      ID: string;
    }
    export interface UniqueID {
      // Used to specify a profile name that is to be moved into the AAA to create the PNR
      ID: string;
    }
    export interface TravelItineraryRead {
      TravelItinerary?: TravelItinerary;
    }
    export interface TravelItineraryAddInfo {
      AgencyInfo?: AgencyInfo;
      CustomerInfo?: CustomerInfo;
    }
    export interface TravelItinerary {
      CustomerInfo?: CustomerInfo1;
      // Special service request details
      SpecialServiceInfo?: SpecialServiceInfo1[];
    }
    export interface Transaction {
      // Transaction ID
      ID: number;
    }
    export interface TPAExtensions {
      UserInfo: UserInfo;
    }
    export interface TourCode {
      SuppressFareReplaceWithBT?: SuppressFareReplaceWithBT;
      SuppressFareReplaceWithIT?: SuppressFareReplaceWithIT;
      SuppressIT?: SuppressIT;
      SuppressITSupressFare?: SuppressITSupressFare;
      // Used to specify tour code
      Text?: string;
    }
    export interface TotalTaxes {
      // Amount
      Amount?: string;
    }
    export interface TotalPerPassenger {
      // Amount
      Amount?: string;
    }
    export interface TotalFare {
      // Amount
      Amount?: string;
      // Currency code
      CurrencyCode?: string;
    }
    export interface TicketingFee {
      FeeInformation?: FeeInformation1;
    }
    export interface Ticketing2 {
      // Location code
      LocationCode: string;
    }
    export interface Ticketing1 {
      // Used to specify an end of range line number in the PNR's ticketing field to view air extra-related information for
      EndNumber?: number;
      // Used to specify an eTicket number to view air extra-related information for
      eTicketNumber?: number;
      // Used to specify a particular line from the PNR's ticketing field to view air extra-related information for.
      Number?: number;
    }
    export interface Ticketing {
      // pseudo city code
      PseudoCityCode?: string;
      // queue number
      QueueNumber?: number;
      // queue name
      QueueName?: string;
      // miscellaneous free text
      ShortText?: string;
      // ticketing time limit, follows this format: MM-DDTHH:00, must be at the top of the hour
      TicketTimeLimit?: string;
      // acceptable values are: "7TAW", "7TAX", "7T-A", 8(time), or 8(time/(date)
      TicketType: string;
    }
    export interface TaxOverride {
      // Tax amount
      Amount: string;
      // Tax code
      Code: string;
    }
    export interface TaxExempt {
      // Used to specify a tax code to exempt
      Code?: string;
    }
    export interface Taxes4 {
      // Individual tax details
      Tax?: Tax3[];
      // Tax total amount
      TotalAmount?: string;
    }
    export interface Taxes3 {
      NoTax?: NoTax;
      // Used to specify a tax code to exempt
      TaxExempt?: TaxExempt[];
      // Used to specify a tax to override
      TaxOverride?: TaxOverride[];
    }
    export interface Taxes1 {
      Tax: Tax1;
    }
    export interface Taxes {
      // Used to define tax details
      Tax: Tax[];
    }
    export interface TaxBreakDown {
      // Tax code
      Code?: string;
      // Tax description
      Description?: string;
      // Tax amount
      Amount?: string;
      // Tax currency code
      CurrencyCode?: string;
      // Published amount
      AmountPublished?: string;
      // Published currency code
      PublishedCurrencyCode?: string;
      // Station code
      StationCode?: string;
      // Country code
      CountryCode?: string;
      // Indicates goods and services tax
      GoodAndServicesInd?: boolean;
      // Airline code
      AirlineCode?: string;
      // Tax type
      TaxType?: string;
    }
    export interface Tax4 {
      // Tax code
      Code?: string;
      // Tax description
      Description?: string;
      // Tax amount
      Amount?: string;
      // Tax currency code
      CurrencyCode?: string;
      // Published amount
      AmountPublished?: string;
      // Published currency code
      PublishedCurrencyCode?: string;
      // Station code
      StationCode?: string;
      // Country code
      CountryCode?: string;
      // Indicates goods and services tax
      GoodAndServicesInd?: boolean;
    }
    export interface Tax3 {
      // Tax amount
      Amount?: string;
      // Tax code
      TaxCode?: string;
      // Tax name
      TaxName?: string;
      // Ticketing tax code associated with the particular tax
      TicketingTaxCode?: string;
    }
    export interface Tax1 {
      // Tax amount
      Amount: string;
      // Tax code
      TaxCode: string;
    }
    export interface Tax {
      // Used to specify the tax amount
      Amount: string;
      // Used to specify the tax code
      TaxCode: string;
    }
    export interface SystemSpecificResult {
      HostCommand?: HostCommand;
      Message?: Message[];
      // An abbreviated version of the error or warning in textual format.
      ShortText?: string;
      // If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
      Element?: string;
      // If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
      RecordID?: string;
      // If present, this attribute refers to an online description of the error that occurred.
      DocURL?: string;
      // Transaction time stamp in 'yyyy-mm-ddThh:mm:ss.SSSZ' format.
      timeStamp?: string;
      // If present, this attribute provides an XML IDREF to the element for which the results apply.
      reference?: string;
    }
    export interface Surcharge1 {
      // Surcharges is used to return surcharge-related information if applicable.
      content?: string;
      // Ind is used to return surcharge-related indicator information if applicable
      Ind?: string;
      // Type is used to return surcharge-related type information if applicable
      Type?: string;
    }
    export interface Surcharge {
      // Used to return surcharge-related information if applicable
      content?: string;
      // Surcharge indicator
      Ind?: string;
      // Surcharge type
      Type?: string;
    }
    export interface SuppressITSupressFare {
      // Used to specify to specify to suppress IT from printing in the tour box on the ticket and to suppress fare amounts from printing on the ticket
      Ind: boolean;
    }
    export interface SuppressIT {
      // Used to specify to to suppress the IT in the tourcode box from printing
      Ind: boolean;
    }
    export interface SuppressFareReplaceWithIT {
      // Used to specify to suppress the fare amount on the ticket and replace with IT
      Ind: boolean;
    }
    export interface SuppressFareReplaceWithBT {
      // Used to specify to suppress the fare amount on the ticket and replace with BT
      Ind: boolean;
    }
    export interface Summary {
      Markup?: Markup;
    }
    export interface SubCodeInfo {
      // Subcode for allowance
      SubCodeForAllowance?: SubCodeForAllowance[];
      // Subcode associated with charges
      SubCodeForChargesOthers?: string;
    }
    export interface SubCodeForAllowance {
      // Subcode for allowance
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface StopoverCharge {
      // Used to indicate Stopover charge if applicable
      Ind?: string;
      // Used to return city specific stopover charge
      CitySpecificStopoverCharge?: string;
      // Used to indicate Transfer charge if applicable
      TransferChargeInd?: string;
      // Used to return transfer charge information
      TransferCharge?: string;
    }
    export interface StatusCode {
      // Status code
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface Station {
      // User Station
      Code: number;
    }
    export interface StateProvinceCodes1 {
      // State or province code
      Code: Code3[];
    }
    export interface StateProvinceCodes {
      // State or province code
      Code: Code1[];
    }
    export interface StateProvince1 {
      // State code
      code?: string;
    }
    export interface StateProvince {
      // State or province code
      code?: string;
    }
    export interface StateProv {
      // State name
      content?: string;
      // State code
      StateCode?: string;
    }
    export interface StateCountyProv {
      // state code
      StateCode: string;
    }
    export interface SpecificPenalty1 {
      PenaltyInformation?: PenaltyInformation;
    }
    export interface SpecificPenalty {
      Changeable?: Changeable;
      EitherOr?: EitherOr;
      Refundable?: Refundable;
      // Used to receive additional tags with information on fare flexibility
      AdditionalInfo?: boolean;
    }
    export interface SpecificFare {
      // Used to price a specific fare basis that will, in turn, be validated
      FareBasis?: string;
      // RPH" is used to match up with "SegmentSelect"
      RPH?: string;
    }
    export interface SpecialServiceInfo1 {
      Service?: Service2;
      // "RPH" is used as a reference placeholder
      RPH?: string;
      // "Type" is used to return the type of the SSR segment. Returns the SSR code AFX for Host Airline, GFX for other Airline
      Type?: string;
      // "Id" is used to return the id of SSR
      Id?: string;
    }
    export interface SpecialServiceInfo {
      // Used to specify the APIS (Advance Passenger Information)
      AdvancePassenger?: AdvancePassenger[];
      // Used to specify Secure Flight Passenger Data (SFPD)
      SecureFlight?: SecureFlight[];
      // Used to specify Special Service Request (SSR)
      Service?: Service1[];
    }
    export interface SpecialService {
      SpecialServiceInfo: SpecialServiceInfo;
    }
    export interface SpecialReqDetails {
      AddRemark?: AddRemark;
      AirSeat?: AirSeat;
      SpecialService?: SpecialService;
    }
    export interface SpecialInstructions {
      // Used to specify miscellaneous special preference information
      SpecialInstruction: string[];
    }
    export interface Source2 {
      // Source name
      ReceivedFrom: string;
    }
    export interface Source1 {
      RequestorID: RequestorID;
      AgencyAddress?: AgencyAddress;
      AgencyContact?: AgencyContact;
      // Agency name
      AgencyName?: string;
      // ISO country code
      ISOCountryCode?: string;
      // PCC
      PseudoCityCode?: string;
    }
    export interface Source {
      TPA_Extensions?: TPAExtensions;
      // Sale PCC
      PseudoCityCode?: string;
    }
    export interface SideTrip {
      // Segment number
      Number: string;
      // Segment end number in range
      EndNumber?: string;
    }
    export interface Service2 {
      Airline?: Airline8;
      // Passenger name
      PersonName?: PersonName7[];
      // "Text" is used to return miscellaneous SSR-related free text if applicable
      Text?: string[];
      // "SSR_Code is used to return the SSR code associated with the particular SSR segment
      SSR_Code?: string;
      // "SSR_Type" is used to return the SSR type associated with the particular SSR segment Example: WCHR
      SSR_Type?: string;
    }
    export interface Service1 {
      PersonName?: PersonName3;
      // Used to specify miscellaneous free text information
      Text?: string;
      VendorPrefs?: VendorPrefs6;
      // Used to specify an itinerary segment to associate the SSR to. If SSR_Code="OSI" @SegmentNumber cannot be utilized.
      SegmentNumber?: string;
      // Used to specify an SSR code such as "WCHR", "WGML", etc.
      SSR_Code: string;
    }
    export interface Service {
      // Service Name
      Name: string;
    }
    export interface SellingFareTaxDatum {
      Tax?: Tax4;
    }
    export interface SellingFareTaxBreakdown {
      TaxBreakDown?: TaxBreakDown;
    }
    export interface SellingFareDatum {
      BaseFare?: BaseFare3;
      ConstructedTotal?: ConstructedTotal;
      Equivalent?: Equivalent;
      TotalTaxes?: TotalTaxes;
      TotalPerPassenger?: TotalPerPassenger;
      FareCalculation?: FareCalculation1;
      // Selling fare tax data
      SellingFareTaxData?: SellingFareTaxDatum[];
      SellingFareTaxBreakdown?: SellingFareTaxBreakdown[];
      // Handling/markup summary
      Summary?: Summary[];
      // Layer type name
      LayerTypeName?: string;
    }
    export interface SegmentSelect {
      // Segment number
      Number: string;
      // Segment end number in range
      EndNumber?: string;
      // Used to match up with ".../CommandPricing" or .../ItineraryOptions/GoverningCarrierOverride or .../SpecificFare
      RPH?: string;
    }
    export interface Segment2 {
      // Used to specify an ending segment in the range to include in the email message
      EndNumber?: number;
      // Used to specify segment number
      Number: number;
    }
    export interface Segment1 {
      // Segment number
      Number: string;
      // Segment end number in range
      EndNumber?: string;
    }
    export interface Segment {
      // Segment number
      Number: string;
      // Final number in range
      EndNumber?: string;
    }
    export interface SecureFlight {
      // "KnownTravelerNumber" cannot combine with ".../PersonName@DateOfBirth" or ".../PersonName@Gender" and "RedressNumber"
      KnownTravelerNumber?: string;
      PersonName?: PersonName2;
      // "RedressNumber" cannot combine with ".../PersonName@DateOfBirth" or ".../PersonName@Gender"
      RedressNumber?: string;
      VendorPrefs?: VendorPrefs4;
      // Used to specify an itinerary segment to associate the SSR to. "A" can be specified to associate the SSR to all segments
      SegmentNumber?: string;
    }
    export interface Seats {
      // Single seat request
      Seat: Seat[];
    }
    export interface Seat {
      // Used to specify for the system to assign a seat and issue a boarding pass
      BoardingPass?: boolean;
      // Used to specify a change of gauge of flight.
      ChangeOfGauge?: boolean;
      // Used to specify a passenger name number
      NameNumber: string;
      // Used to specify a seat number
      Number?: string;
      // Used to specify a seat preference. Preference cannot combine with Number.
      Preference?: string;
      // Used to specify a segment number
      SegmentNumber?: string;
    }
    export interface SabreSonicTicketing {
      BasicFOP?: BasicFOP1;
      EnhancedMultipleFOP?: EnhancedMultipleFOP;
      MultipleFOP?: MultipleFOP1;
    }
    export interface Rooms {
      // List of Extended Rooms.
      Room: Room[];
      // Indicates number of rooms to be booked
      NumberOfRooms?: number;
    }
    export interface RoomExtras {
      // Details of an individual extra requested
      RoomExtra?: RoomExtra[];
    }
    export interface RoomExtra {
      // "Type" - Currently supported types are: Crib (26), Rollaway Bed (91) and Extra Person (131).
      Type?: number;
      // Quantity for room extras. Mandatory for request
      Quantity?: number;
      // "Amount" for the Room Extra.
      Amount?: number;
    }
    export interface Room {
      Guests: Guests;
      RoomExtras?: RoomExtras;
      // Default is True. False = Smoking, True= Non Smoking
      NonSmoking?: boolean;
      // Allows users to request a specific bed type. Used by EAN aggregator
      BedTypeCode?: number;
      // Used to allow a customer to request special accessibility rooms where applicable
      AccessibilityInformation?: number;
      // Identifies the number of rooms being booked. For multi room bookings, "1" for first room, "2" for second room, etc
      RoomIndex: number;
    }
    export interface RetryRebook {
      // "Option" is used to specify if Rebooking of segments is required if UC is encountered in any of the segments which is trying to be booked
      Option: boolean;
    }
    export interface RetailerRuleQualifier {
      // Retailer Rule Qualifier code
      Qualifier: string[];
      // Used to force only fares with a matched Business Rule containing the specified Retailer Rule Qualifier. "Force" can only be used with one "Qualifier"
      Force?: boolean;
    }
    export interface RetailerRule {
      // Retailer rule for the Adjustment Selling Level
      AdjustmentSellingLevel?: string;
      // Retailer rule for pricing transactions
      PricingTransaction?: string;
    }
    export interface ResidentDestinationAddress {
      // City name
      City?: string;
      // Country code
      Country: string;
      // Street address
      Street?: string;
      // State
      State?: string;
      // Zip or postal code
      Zip?: string;
      // Used to specify the address type. Acceptable values are "R" - residence address, "D" - destination address
      Type: string;
    }
    export interface ReservationItems {
      Item: Item;
    }
    export interface ResBookDesigCode {
      // Used to return class of service-related information
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface RequestorID {
      // OTA Table UIT : Value 5 for travel agency
      Type?: number;
      // Agency IATA ID
      Id?: string;
      // Value : IATA
      IdContext?: string;
    }
    export interface RemarkInfo {
      FOP_Remark?: FOPRemark;
      FutureQueuePlaceRemark?: FutureQueuePlaceRemark;
      // Used for multiple remark types
      Remark?: Remark[];
    }
    export interface Remark {
      // Used to specify remark-related text.
      Text: string;
      // Used to specify an alpha sorting character such as: "H"
      Code?: string;
      // Used to specify a segment number
      SegmentNumber?: string;
      Type: string;
    }
    export interface Refundable {
      // Used to specify any refundable pricing fare options
      Any?: boolean;
      // Used to specify the specific currency for maximum refund penalty
      CurrencyCode?: string;
      // Used to specify maximum refund penalty. If a value of "0" is input no penalty is preferred. If a value of "N" is input only non-refundable options are requested. Please note that monetary amount that includes a decimal is not allowed
      MaxPenalty?: string;
      // Used to query for before departure fees
      BeforeDeparture?: boolean;
      // Used to query for after departure fees. It is not possible to combine "BeforeDeparture" and "AfterDeparture" within one element
      AfterDeparture?: boolean;
    }
    export interface RedisplayReservation1 {
      // "waitInterval" is used to specify an interval that the system should wait in milliseconds before making redisplay service calls.
      waitInterval?: number;
    }
    export interface RedisplayReservation {
      // Used to specify a number of times to make the TravelItineraryReadRQ service call before proceeding to the OTA_AirPriceLLSRQ or the next service call.
      NumAttempts: number;
      // Used to specify an interval that the system should wait in milliseconds before making redisplay service calls
      WaitInterval: number;
    }
    export interface QueuePlace {
      MultiQueuePlace?: MultiQueuePlace;
      QueueInfo?: QueueInfo;
    }
    export interface QueueInfo {
      // Single queue details
      QueueIdentifier: QueueIdentifier1[];
      // This element is not in use
      UniqueID?: UniqueID1[];
    }
    export interface QueueIdentifier1 {
      // Queue name
      Name?: string;
      // Queue number
      Number?: string;
      // PIC code
      PrefatoryInstructionCode: string;
      // PCC
      PseudoCityCode?: string;
    }
    export interface QueueIdentifier {
      // Queue number
      Number: string;
      // PIC code
      PrefatoryInstructionCode: string;
      // PCC
      PseudoCityCode: string;
    }
    export interface Purchase {
      // Location code
      LocationCode: string;
    }
    export interface PTCFareBreakdown1 {
      BrandedFareInformation?: BrandedFareInformation;
      // Cabin
      Cabin?: string;
      FareBasis?: FareBasis2;
      // Free baggage allowance information
      FreeBaggageAllowance?: string;
      // Surcharges information
      Surcharges?: Surcharge1[];
    }
    export interface PTCFareBreakdown {
      // FareBasisCode information is needed for YQ/YR tax information
      FareBasisCode?: string;
      PassengerFare: PassengerFare;
      PassengerType: PassengerType1;
    }
    export interface ProfileIndex {
      // "ProfileIndex" is used to return the profile index.
      content?: string;
      // "ProfileIndex" is used to return the profile index ID.
      Id?: string;
    }
    export interface Profile {
      UniqueID: UniqueID;
    }
    export interface ProblemInformation {
      SystemSpecificResults?: SystemSpecificResult[];
      type?: string;
      // Transaction time stamp in "yyyy-mm-ddThh:mm:ss.SSSZ" format.
      timeStamp?: string;
    }
    export interface PrivateFare {
      // Private fare indicator
      Ind?: string;
    }
    export interface PricingQualifiers {
      Account?: Account;
      AlternativePricing?: AlternativePricing;
      // Used to instruct the system to price an itinerary according to a specified banker's selling rate.
      BankersSellingRate?: string;
      BargainFinder?: BargainFinder;
      // Used to exclude Basic Economy Fares (up to 5 booking classes can be selected). Please note that this element is only applicable to airline customers. "BasicEconomyExclude" can only be used with .../BargainFinder
      BasicEconomyExclude?: string[];
      // Used to specify a brand. Please note that it's not possible to request more than 1 brand for an entire journey, or for the same segment
      Brand?: Brand[];
      // Used to instruct the system to specify the purchase date for the fare. "BuyingDate" follows this format: YYYY-MM-DD
      BuyingDate?: string;
      // Used to instruct the system to specify fares by a specific cabin or the lowest fare across all cabins. Please note that Cabin may only be used together with .../PriceRequestInformation/OptionalQualifiers/PricingQualifiers/BargainFinder or .../PriceRequestInformation/OptionalQualifiers/PricingQualifiers/AlternativePricing/Overrides/NoMatch
      Cabin?: string;
      // All of the CommandPricing entries are concerned with specifying fare basis codes, ticket designators, and discounts. This base level command is WPQ followed by one or more of the below elements
      CommandPricing?: CommandPricing[];
      // Used to select specific contracts to process at a time of pricing
      CommissionContract?: string[];
      Corporate?: Corporate1;
      Fare?: Fare6;
      FareOptions?: FareOptions;
      ItineraryOptions?: ItineraryOptions;
      // Used to to specify the markup/down amount that's to be applied at time of pricing to create a manually Adjusted Selling Level fare
      ManuallyAdjustedSellingLevel?: ManuallyAdjustedSellingLevel[];
      // Used to instruct the system to price the itinerary based upon a particular name field
      NameSelect?: NameSelect[];
      NetRemit?: NetRemit;
      Overrides?: Overrides1;
      // Used to is used to instruct the system to price the itinerary with a specified passenger status code. Equivalent Sabre host command: WPEM/(country or state code), WPRY/(country or state code), WPNT/(country or state code)
      PassengerStatus?: string;
      // Used to specify a passenger type code
      PassengerType?: PassengerType[];
      PlusUp?: PlusUp;
      RetailerRuleQualifier?: RetailerRuleQualifier;
      // Used to specify a ship's country of registration. This element is only to be used when .../PassengerType@Code="SEA"
      ShipsRegistry?: string;
      SpanishLargeFamilyDiscountLevel?: number;
      // Used to specify the Island Resident code applicable for discount.
      SpanishResidentDiscount?: string;
      // This element is only applicable to Abacus
      SpecificFare?: SpecificFare[];
      SpecificPenalty?: SpecificPenalty;
      Taxes?: Taxes3;
      // Used to specify ticket validity dates
      ValidityDates?: ValidityDate[];
      // Used to specify an alternate currency code to price with
      AlternateCurrencyCode?: string;
      // Used to specify a currency code to price with
      CurrencyCode?: string;
      // Used to exclude aggregated content. Please note that it can only be combined with .../PriceRequestInformation/OptionalQualifiers/PricingQualifiers/BargainFinder
      AggregatedContentExclude?: boolean;
      // Used to exclude or ignore fare focus fares
      FareFocusExclude?: boolean;
      // Used to price itinerary without a date
      NoDate?: boolean;
      // Allows a request for a round the world/circle trip fare
      RoundTheWorld?: boolean;
      // Used to specify the pricing source
      Source?: string;
    }
    export interface PriceRequestInformation {
      OptionalQualifiers?: OptionalQualifiers;
      // Used to instruct the system to request Alternative Pricing. Please note that "AlternativePricing" cannot be combined with .../PriceRequestInformation/OptionalQualifiers/PricingQualifiers/BargainFinder
      AlternativePricing?: boolean;
      // Used to instruct the system to create an FP line for future ticketing
      FutureTicket?: boolean;
      // This attribute is not used
      Manual?: boolean;
      // Used to instruct the system to retain the pricing response and create a price quote record.
      Retain?: boolean;
    }
    export interface PriceQuote {
      PricedItinerary?: PricedItinerary;
    }
    export interface PriceInformation {
      Base?: Base;
      Equiv?: Equiv;
      // Tax indicator
      TaxIndicator?: string;
      // Total
      Total?: string;
    }
    export interface PricedItinerary {
      // A single pricing solution
      AirItineraryPricingInfo?: AirItineraryPricingInfo[];
      // This attribute is not in use
      AlternativePricing?: string;
      // Used to return the applicable currency code
      CurrencyCode?: string;
      // Used to denote that multi-ticket-based pricing options apply
      MultiTicket?: boolean;
      // Used to return miscellaneous multi-ticket-based pricing option-related information
      MultiTicketShortText?: string;
      // Used to return service fee amount-related information
      ServiceFeeAmount?: string;
      // Used to return service fee currency code-related information
      ServiceFeeCurrencyCode?: string;
      // Used to return service fee tax-related information
      ServiceFeeTax?: string;
      // Used to return the applicable total amount associated with the particular itinerary
      TotalAmount?: string;
    }
    export interface PriceComparison1 {
      // Used to return the actual total amount associated with the particular itinerary.
      AmountReturned?: string;
      // Used to return the amount specified in the CPNR request that was derived from the total amount returned via the previous shopping process for comparision purposes against the current price being returned for the same itinerary.
      AmountSpecified?: string;
    }
    export interface PriceComparison {
      AcceptablePriceIncrease?: AcceptablePriceIncrease;
      AcceptablePriceDecrease?: AcceptablePriceDecrease;
      // Used to specify the total amount associated with the itinerary returned via the previous shopping method for comparision purposes against the current price being returned for the same itinerary
      AmountSpecified: number;
    }
    export interface PostProcessing {
      ARUNK?: ARUNK;
      QueuePlace?: QueuePlace;
      EndTransaction?: EndTransaction;
      PostBookingHKValidation?: PostBookingHKValidation;
      WaitForAirlineRecLoc?: WaitForAirlineRecLoc;
      RedisplayReservation?: RedisplayReservation1;
      // Used to unmask credit card information in the TIR response. Please note that this attribute has effect only if a user has EPR keyword CCVIEW
      unmaskCreditCard?: boolean;
    }
    export interface PostBookingHKValidation {
      // The maximum time that can be set is 60 seconds. This applies to PostBookingHKValidation, WaitForAirlineRecLoc or both
      waitInterval: number;
      // Used to request a redisplay reservation number of attempts
      numAttempts: number;
    }
    export interface POS1 {
      Source: Source1;
    }
    export interface POS {
      Source?: Source;
    }
    export interface PNRSegment {
      // Used to return PNR segment-related information
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface PlusUp {
      // Ticket designator
      TicketDesignator?: string;
      // Used to specify an amount to add on top of the fare
      Amount: string;
    }
    export interface Phone {
      // Phone use type
      PhoneUseType?: string;
      // Phone country code
      PhoneCountryCode?: string;
      // Phone number
      PhoneNumber: string;
    }
    export interface PersonName7 {
      // Passenger name
      content?: string;
      // NameNumber is used to return the passenger name number associated with the particular passenger
      NameNumber?: string;
    }
    export interface PersonName6 {
      // "Email" is used to return the passenger's email address.
      Email?: Email2[];
      // "GivenName" is used to return the passenger's given (first) name.
      GivenName?: string;
      GroupInfo?: GroupInfo1;
      // "ProfileIndex" is used to return the profile index.
      ProfileIndex?: ProfileIndex[];
      // "Surname" is used to return the passenger's last name.
      Surname?: string;
      // "WithInfant" is used to indicate whether or not the passenger is an infant.
      WithInfant?: string;
      // "NameNumber" is used to return the passenger name number.
      NameNumber?: string;
      // "NameReference" is used to return miscellaneous name reference-related information.
      NameReference?: string;
      // "PassengerType" is used to return the passenger type associated with the particular passenger.
      PassengerType?: string;
      // "RPH" is used as a reference place holder.
      RPH?: string;
      // Reference ID
      Id?: string;
      // Element ID
      elementId?: string;
    }
    export interface PersonName5 {
      // Customer names
      content?: string;
      // NameNumber is used to return the passenger name number associated with the particular passenger
      NameNumber?: string;
    }
    export interface PersonName4 {
      // Name number
      NameNumber: string;
    }
    export interface PersonName3 {
      // Used to specify a passenger name number
      NameNumber?: string;
    }
    export interface PersonName2 {
      // First name
      GivenName?: string;
      // Surname
      Surname?: string;
      // "DateOfBirth" and "Gender" cannot combine with "RedressNumber" and "KnownTravelerNumber"
      DateOfBirth?: string;
      Gender?: 'F' | 'M' | 'FI' | 'MI';
      // Name number: 1.1, 2.1. etc
      NameNumber?: string;
    }
    export interface PersonName1 {
      // First name
      GivenName?: string;
      // Middle name
      MiddleName?: string;
      // Surname
      Surname?: string;
      // Date of birth
      DateOfBirth?: string;
      // Used to identify the primary passport holder when the passport document is issued for multiple passengers
      DocumentHolder?: boolean;
      Gender?: 'F' | 'M' | 'FI' | 'MI' | 'U';
      // Name number: 1.1, 2.1. etc
      NameNumber?: string;
    }
    export interface PersonName {
      // Passenger first name
      GivenName?: string;
      GroupInfo?: GroupInfo;
      // Passenger surname
      Surname?: string;
      // Used to specify that the particular passenger is an infant
      Infant?: boolean;
      // Used to specify a passenger name number, and is only applicable when used in conjunction with @PassengerType
      NameNumber?: string;
      // Used to specify miscellaneous name reference-related information if applicable
      NameReference?: string;
      // Used to add a passenger type code into the record. Please note that this qualifier is not applicable to Sabre Sonic Res-based clients.
      PassengerType?: string;
    }
    export interface PenaltyInformation {
      // Fare basis code
      FareBasisCode?: string[];
      // Fare component number
      FareComponent?: string[];
      // Penalty amount
      Amount?: string;
      // Indicates whether the penalty is sourced from fare rule Category16
      Cat16?: boolean;
      // Currency type
      Currency?: string;
      // Indicates whether the penalty is applicable or not
      NotApplicable?: boolean;
      // Returns four penalty types: "CPBD" - Change Penalty Before Departure; "CPAD" - Change Penalty After Departure; "RPBD" - Refund Penalty Before Departure or "RPAD" - Refund Penalty After Departure
      Type?: string;
    }
    export interface PDF1 {
      // Used to send an email notification containing a PDF-based copy of the itinerary
      Ind: boolean;
    }
    export interface PDF {
      // Used to send an email notification containing a PDF-based copy of the eTicket
      Ind: boolean;
    }
    export interface PaymentInformation {
      FormOfPayment: FormOfPayment;
      Type?: string;
    }
    export interface PaymentInfo {
      Payment?: Payment;
    }
    export interface PaymentCard8 {
      // Used to specify a credit card security code
      CardSecurityCode?: string;
      // Used to specify the credit card vendor code
      Code: string;
      // Used to specify the credit card expiration date
      ExpireDate: string;
      // Used to specify extended payment if applicable
      ExtendedPayment?: number;
      // Used to specify a manual credit card if applicable
      ManualApprovalCode?: string;
      // Used to specify the credit card number
      Number: number;
    }
    export interface PaymentCard7 {
      // Used to specify a credit card security code
      CardSecurityCode?: number;
      // Used to specify the credit card vendor code.
      Code: string;
      // Used to specify the credit card expiration date
      ExpireDate: string;
      // Used to specify extended payment if applicable
      ExtendedPayment?: number;
      // Used to specify a manual credit card if applicable
      ManualApprovalCode?: string;
      // Used to specify the credit card number
      Number: number;
    }
    export interface PaymentCard5 {
      // Used to specify a credit card vendor code
      Code: string;
      // Used to specify a credit card expiration date. "ExpireDate" follows this format: YYYY-MM
      ExpireDate: string;
      // Used to specify extended payment if applicable
      ExtendedPayment?: number;
      // Used to specify a manual approval credit card code if applicable
      ManualApprovalCode?: string;
      // Used to specify a credit card number
      Number: number;
    }
    export interface PaymentCard4 {
      // Used to specify a credit card vendor code
      Code?: string;
      // Used to specify a credit card expiration date. "ExpireDate" follows this format: YYYY-MM
      ExpireDate?: string;
      // Used to specify a manual approval credit card code if applicable
      ManualApprovalCode?: string;
      // Used to specify a credit card number
      Number?: number;
    }
    export interface PaymentCard2 {
      // Used to specify a credit card vendor code
      Code?: string;
      // Used to specify a credit card expiration date. "ExpireDate" follows this format: YYYY-MM
      ExpireDate?: string;
      // Used to specify extended payment if applicable
      ExtendedPayment?: number;
      // Used to specify a manual approval credit card code if applicable
      ManualApprovalCode?: string;
      // Used to specify a credit card number
      Number?: number;
    }
    export interface PaymentCard13 {
      // Used to specify an airline code to be used in conjunction with a credit card security code
      AirlineCode?: string;
      // Used to specify a credit card security code
      CardSecurityCode?: string;
      // Used to specify a credit card vendor code
      Code: string;
      // Used to specify a credit card expiration date
      ExpireDate: string;
      // Used to define number of months for extended payment
      ExtendedPayment?: string;
      // Used to specify a manual credit card if applicable
      ManualApprovalCode?: string;
      // Used to specify a credit card number
      Number: string;
      // Used to specify to prevent the Sabre system from generating an approval code when the credit card number is input into the system.
      SuppressApprovalCode?: boolean;
    }
    export interface PaymentCard12 {
      PaymentType: string;
      // The 2 character code of the credit card issuer.
      CardCode: string;
      // Credit card number
      CardNumber: string;
      // Month of expiration
      ExpiryMonth: number;
      // 4 digit year of expiration: 2015, 2016, etc-
      ExpiryYear: string;
      FullCardHolderName?: FullCardHolderName;
      // Card security code
      CSC?: string;
      Address?: Address1;
      Phone?: Phone;
    }
    export interface PaymentCard10 {
      // Used to specify the credit card vendor code
      Code: string;
      // Used to specify a manual credit card if applicable
      ManualApprovalCode?: string;
      // Used to specify the credit card number
      Number: number;
    }
    export interface PaymentCard1 {
      // Used to specify a credit card vendor code
      Code?: string;
      // Used to specify a credit card expiration date. "ExpireDate" follows this format: YYYY-MM
      ExpireDate?: string;
      // Used to specify extended payment if applicable
      ExtendedPayment?: number;
      // sed to specify a manual approval credit card code if applicable
      ManualApprovalCode?: string;
      // Used to specify a credit card number
      Number?: number;
    }
    export interface PaymentCard {
      // Used to specify a credit card vendor code
      Code?: string;
      // Used to specify a credit card expiration date. "ExpireDate" follows this format: YYYY-MM
      ExpireDate?: string;
      // Used to specify extended payment if applicable
      ExtendedPayment?: number;
      // Used to specify a manual approval credit card code if applicable
      ManualApprovalCode?: string;
      // Used to specify a credit card number
      Number?: number;
    }
    export interface Payment {
      // Credit card information
      CC_Info?: CCInfo13[];
      // Payment form
      Form?: Form[];
    }
    export interface PayLaterPlan {
      Fare: Fare2;
      FOP: FOP;
      Installment: Installment;
    }
    export interface Passport {
      // "Number" is used to return the passenger's passport number.
      Number?: string;
      // "RPH" is used as a reference placeholder.
      RPH?: string;
      // Reference ID
      Id?: string;
    }
    export interface PassengerTypeQuantity {
      // Used to return the passenger type code associated with the particular itinerary
      Code?: string;
      // Used to return the number of passengers associated with the particular itinerary
      Quantity?: string;
    }
    export interface PassengerType2 {
      // Passenger type code
      Code?: string;
    }
    export interface PassengerType1 {
      // Passenger type count
      Quantity?: number;
      // Passenger type code
      Code: string;
      // Passenger age
      Age?: number;
    }
    export interface PassengerType {
      // Used to specify a passenger type code
      Code: string;
      // Used to force the system to price with the specified passenger type code. If the client requests multiple passenger types and also wishes to make use of @Force they should only pass it on the last .../PassengerType occurrence
      Force?: boolean;
      // Used to specify the number of passengers
      Quantity?: string;
    }
    export interface PassengerFare {
      BaseFare: BaseFare;
      EquivFare?: EquivFare;
      // Ancillary code
      AncillaryServiceCode?: string;
    }
    export interface Partition {
      // Partition ID
      ID: string;
    }
    export interface Overrides1 {
      FuelSurchargeOverride?: FuelSurchargeOverride;
      // Used to instruct the system to override the governing carrier associated with the entire itinerary, a particular segment, or a range of segments
      GoverningCarrierOverride?: GoverningCarrierOverride[];
      NoAdvancePurchase?: NoAdvancePurchase;
      NoFareRestrictions?: NoFareRestrictions;
      NoMinMaxStay?: NoMinMaxStay;
      NoPenalty?: NoPenalty;
      Purchase?: Purchase;
      Ticketing?: Ticketing2;
    }
    export interface Overrides {
      MatchNoMatch?: MatchNoMatch;
      NoMatch?: NoMatch;
    }
    export interface OverrideBreak {
      // Segment number
      Number: string;
    }
    export interface OriginLocation3 {
      // Location code
      LocationCode?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface OriginLocation2 {
      // Airport code
      LocationCode?: string;
    }
    export interface OriginLocation1 {
      // Location Code
      LocationCode: string;
    }
    export interface OriginLocation {
      // Used to specify the departure airport code
      LocationCode: string;
    }
    export interface OriginDestinationOption {
      // Single flight segment details
      FlightSegment?: FlightSegment2[];
    }
    export interface OriginDestinationInformation {
      // Used for a specific air segment to be booked.
      FlightSegment: FlightSegment[];
    }
    export interface OptionalQualifiers {
      FlightQualifiers?: FlightQualifiers;
      FOP_Qualifiers?: FOPQualifiers;
      MiscQualifiers?: MiscQualifiers;
      PricingQualifiers?: PricingQualifiers;
    }
    export interface OperatingAirline1 {
      // Carrier code
      Code: string;
    }
    export interface OperatingAirline {
      // Used to specify the operating airline code
      Code: string;
    }
    export interface NoTax {
      // Used to specify to price an itinerary without taxes
      Ind: boolean;
    }
    export interface NoPenalty {
      // Used to instruct the system to price the itinerary with fares having no penalties
      Ind: boolean;
    }
    export interface NonUSDOTDisclosure {
      // Used to return non-US DOT baggage disclosure-related information
      Text?: string[];
    }
    export interface NoMinMaxStay {
      // Used to instruct the system to price the itinerary with fares having no minimum/maximum stay requirements
      Ind: boolean;
    }
    export interface NoMatch {
      // Used to instruct the system to return no match alternative pricing options
      Ind?: boolean;
    }
    export interface NoFareRestrictions {
      // Used to instruct the system to price the itinerary with fares having no restrictions
      Ind: boolean;
    }
    export interface NoAdvancePurchase {
      // Used to instruct the system to price the itinerary with fares having no advance purchase requirements
      Ind: boolean;
    }
    export interface NetRemit {
      CAR?: CAR;
      Cash?: Cash;
      Credit?: Credit;
      // Net remit code
      Code?: string;
    }
    export interface NameSelect {
      // Name number
      NameNumber: string;
      // End number within a range
      EndNameNumber?: string;
    }
    export interface MultiTicket {
      // Used to instruct the system to consider multi-ticket solutions to find the lowest possible price
      Ind: boolean;
    }
    export interface MultiQueuePlace {
      // Single queue details
      QueueIdentifier: QueueIdentifier[];
    }
    export interface MultipleMiscFOP {
      Fare: Fare;
      FOP_One: FOPOne1;
      FOP_Two: FOPTwo1;
      Taxes?: Taxes;
    }
    export interface MultipleFOP1 {
      Fare: Fare;
      FOP_One: FOPOne3;
      FOP_Two: FOPTwo3;
      Taxes?: Taxes1;
    }
    export interface MultipleFOP {
      Fare: Fare;
      FOP_One: FOPOne;
      FOP_Two: FOPTwo;
    }
    export interface MultipleCCFOP {
      Fare: Fare;
      CC_One: CCOne;
      CC_Two: CCTwo;
    }
    export interface MiscSegment {
      OriginLocation: OriginLocation1;
      // Used to specify free text information to be associated with the miscellaneous segment.
      Text: string;
      VendorPrefs: VendorPrefs3;
      // Used to specify the date associated with the miscellaneous segment.
      DepartureDateTime: string;
      // Used to denote a segment after which the miscellaneous segment needs to be placed.
      InsertAfter?: number;
      // Used to specify the number of parties associated with the miscellaneous segment.
      NumberInParty: number;
      // Used to specify the action code to be used to sell the segment. Example: "GK"
      Status: string;
      // Used to specify the type of miscellaneous segment, i.e. OTH, MCO, PTA, or INS.
      Type: 'INS' | 'MCO' | 'OTH' | 'PTA';
    }
    export interface MiscQualifiers {
      AirExtras?: AirExtras;
      // Used to define baggage allowance details
      BaggageAllowance?: BaggageAllowance[];
      Commission?: Commission;
      Customer?: Customer;
      Endorsements?: Endorsements;
      // Hemisphere code
      HemisphereCode?: string;
      // Journey code
      JourneyCode?: string;
      MultiTicket?: MultiTicket;
      TourCode?: TourCode;
      // Used to specify a validation method
      ValidationMethod?: string;
    }
    export interface Mileage {
      // Returned when an extra mileage allowance is applicable
      ExtraAllowanceInd?: string;
      // Returned when a ticketed point is excluded from mileage calculation of a fare if applicable
      MileageExclusionInd?: string;
      // Returned when there is a reduction on the fare based on mileage if applicable
      MileageReductionPTInd?: string;
      // Returned when a fare is applicable to more than one destination if applicable
      MileageEqualizationInd?: string;
      // Indicates that the fare was computed on the mileage system if applicable
      MileageSymbol?: string;
      // Indicates the percentage of a mileage surcharge applied if applicable
      MileageSurchargeInd?: string;
      // Used to return the Construction City Code associated with the higher intermediate point if applicable
      HIPConstructionCityCode?: string;
      // Used to return the City Codes associated with the higher intermediate point if applicable
      HIPCityCodes?: string;
    }
    export interface Message {
      // An abbreviated version of the error or warning in textual format.
      code?: string;
      // An indication of the source of error or warning when processing the request.
      content?: string;
    }
    export interface MatchNoMatch {
      // Used to instruct the system to return both match and no match alternative pricing options
      Ind?: boolean;
    }
    export interface MarriageGrp1 {
      // Married connection indicator
      Ind?: string;
      // A set of air segments that are considered "married" together. This is referred to as the new married "group number". Married Group may contain up to 3 segments
      Group?: string;
      // The "sequence number" within the set/group of air segments that considered "married" together
      Sequence?: string;
    }
    export interface Markup {
      // Markup type code
      Code?: string;
      // Markup description
      Description?: string;
      // Markup amount
      Amount?: string;
    }
    export interface MarketingAirline2 {
      // Airline code
      Code?: string;
      // Used to return the flight number
      FlightNumber?: string;
    }
    export interface MarketingAirline1 {
      // Carrier code
      Code: string;
    }
    export interface MarketingAirline {
      // Used to specify the marketing airline code.
      Code: string;
      // Used to specify the flight number. OPEN can also be passed if the user desires an open space ticket
      FlightNumber: string;
    }
    export interface ManuallyAdjustedSellingLevel {
      // Used to instruct the system to price the itinerary with a mark down amount
      MarkDown?: number;
      // Used to instruct the system to price the itinerary with a mark up amount. MarkDown cannot be combined with MarkUp
      MarkUp?: number;
    }
    export interface Link {
      // Describes relationship between href and current request.
      rel?: string;
      // Link to related API request.
      href?: string;
    }
    export interface ItinTotalFare {
      BaggageInfo?: BaggageInfo;
      BaseFare?: BaseFare2;
      Commission?: Commission1;
      Construction?: Construction;
      // Discount type-related information
      DiscountTypeMessage?: string;
      Endorsements?: Endorsements1;
      EquivFare?: EquivFare2;
      PrivateFare?: PrivateFare;
      Taxes?: Taxes4;
      TotalFare?: TotalFare;
      Warnings?: Warnings;
      // Selling fare data for each passenger type
      SellingFareData?: SellingFareDatum[];
      // Used to return non-refundable indicator-related information
      NonRefundableInd?: string;
    }
    export interface ItineraryRef {
      // Used to return the locator of the ended record
      ID?: string;
    }
    export interface ItineraryOptions {
      // Used to instruct the system to break the fare at a specified segment
      BreakFare?: BreakFare[];
      // Used to instruct the system to force a connection at a specified segment
      ForceConnection?: ForceConnection[];
      // Used to instruct the system to force a stopover at a specified segment
      ForceStopOver?: ForceStopOver[];
      // Used to instruct the system to override a fare break
      OverrideBreak?: OverrideBreak[];
      // Used to instruct the system to price specified itinerary segments
      SegmentSelect?: SegmentSelect[];
      SideTrip?: SideTrip;
    }
    export interface ItineraryInfos {
      // Itinerary information
      ItineraryInfo: ItineraryInfo[];
    }
    export interface ItineraryInfo {
      ReservationItems: ReservationItems;
    }
    export interface Itinerary {
      PDF?: PDF1;
      Segment?: Segment2[];
      // Used to send an email notification containing a text-based copy of the itinerary
      Ind: boolean;
    }
    export interface Item {
      AirFareInfo: AirFareInfo;
      // Air segment details
      FlightSegment: FlightSegment1[];
      // "RPH" is used to pass Sequence Number of the itineraries. For example, 1 for itinerary #1 and 2 or itinerary #2.
      RPH: number;
      // "TicketingCarrier" is used to pass the Ticketing Carrier.
      TicketingCarrier: string;
      // "ValidatingCarrier" is used to pass the Validating Carrier.
      ValidatingCarrier: string;
      // If "SalePseudoCityCode" is an invalid Sabre PCC, no tax processing will be done and an error response will be sent back
      SalePseudoCityCode: string;
    }
    export interface Invoice {
      // Used to send an email notification containing a text-based copy of the invoice
      Ind: boolean;
    }
    export interface Installment {
      // Used to specify the number of installments
      Count: string;
      // Used to specify the pay later reference number
      PayLaterReferenceNumber: string;
      // Used to define reference number
      Reference?: number;
      // Used to specify the value of the installments. Please note that decimals are not permitted
      Value: string;
    }
    export interface HotelBook {
      BookingInfo: BookingInfo;
      Rooms?: Rooms;
      SpecialInstructions?: SpecialInstructions;
      PaymentInformation: PaymentInformation;
      POS?: POS1;
    }
    export interface HostCommand {
      // LNIATA is an abbreviation for Line / Interface Adapter / Terminal Address.  This is a 3-byte terminal address, usually seen as a 6-character hexadecimal field, such as "0358DC".
      LNIATA?: string;
      // Sabre host system command.
      content?: string;
    }
    export interface HiddenStops {
      // Used to pass hidden city / via code
      HiddenStop: HiddenStop[];
    }
    export interface HiddenStop {
      // Airport code
      LocationCode: string;
    }
    export interface HaltOnStatus {
      // Used to specify values that cause subsequent pricing, and beyond processing to stop if they appear. In order to successfully price an air itinerary the status code associated with the individual segments cannot be NN, NO, UC or US. After successfully booking flights, the system will compare the status codes returned from the carrier against the client-specified codes to determine if subsequent pricing, and beyond processing should occur
      Code: string;
    }
    export interface Guests {
      // Used to pass details on a single guest.
      Guest: Guest[];
    }
    export interface Guest {
      Contact?: Contact;
      Type: number;
      // "Email" address for the guest
      Email?: string;
      // Age is mandatory for a child
      Age?: number;
      // Used for room/guest indexes
      Index?: number;
      // "LeadGuest" is the main guest for the booking. At least one and only one adult guest must be defined.
      LeadGuest?: boolean;
      // Applies only to LeadGuest
      FrequentFlyerNumber?: string;
      // Applies only to LeadGuest.
      LoyaltyId?: string;
      // "Title" can include MR./MS. etc.
      Title?: string;
      // "FirstName" of the guest
      FirstName?: string;
      // "LastName" of the guest
      LastName?: string;
    }
    export interface GroupInfo1 {
      AssociatedReferenceInformation?: AssociatedReferenceInformation;
      // "Name" is used to return the corporate/group name.
      Name?: string;
      // "OriginalNumberOfSeats" is used to return the original number of seats requested in the BSG
      OriginalNumberOfSeats?: string;
      // "GroupNameNumber" is used to return the passenger name number in relation to the rest of the group.
      GroupNameNumber?: string;
      // "NumSeatsRemaining" is used to return the number of remaining seats.
      NumSeatsRemaining?: string;
      // "SoldNumberOfSeats is used to return the number of seats sold from the BSG"
      SoldNumberOfSeats?: string;
    }
    export interface GroupInfo {
      VendorPrefs?: VendorPrefs1;
      // Used to specify miscellaneous group booking-related free text title information if applicable
      Name: string;
      // Used to specify the number of passengers travelling in a group if applicable
      NumSeatsRemaining: number;
    }
    export interface GoverningCarrierOverride {
      Airline: Airline3;
      // Used to tie a governing carrier override to particular segments. If a client application needs to utilize a governing carrier override from a particular segment or segments the application can use .../GoverningCarrierOverride in conjunction with .../ItineraryOptions/SegmentSelect
      RPH?: string;
    }
    export interface FutureQueuePlaceRemark {
      // Used to specify a queue placement date
      Date: string;
      // Used to specify the prefatory instruction code
      PrefatoryInstructionCode: string;
      // Used to specify a pseudo city code
      PseudoCityCode?: string;
      // Used to specify a queue name/number
      QueueIdentifier: string;
      // Used to specify a queue placement time. Please note that only whole hours can be specified, i.e. 12:00
      Time?: string;
    }
    export interface FullCardHolderName {
      // Title
      Title?: string;
      // First name
      FirstName: string;
      // Last name
      LastName: string;
      // E-mail address
      Email?: string;
    }
    export interface FuelSurchargeOverride {
      // Used to instruct the system to override applicable fuel surcharges
      Ind: boolean;
    }
    export interface FormOfPayment {
      PaymentCard?: PaymentCard12;
      VirtualCard?: VirtualCard;
      Agency?: Agency;
      Corporate?: Corporate2;
      Company?: Company;
    }
    export interface Form {
      // "Text" is used to return the form of payment.
      Text?: string[];
      // "RPH" is used as a reference place holder.
      RPH?: string;
      // Reference ID
      Id?: string;
    }
    export interface ForceStopOver {
      // Segment number
      Number: string;
    }
    export interface ForceConnection {
      // Segment number
      Number: string;
    }
    export interface FOPTwo3 {
      CC_Info?: CCInfo10;
      // Used to specify the payment type. Acceptable values are "CA", "CK" or "CQ". If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
    }
    export interface FOPTwo2 {
      CC_Info?: CCInfo8;
      // Used to specify the payment type. Acceptable values are "CA", "CK" or "CQ". If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
    }
    export interface FOPTwo1 {
      ExtendedPayment?: ExtendedPayment;
      // Used to specify the misc payment
      Type: string;
      // Used to reference a line number from PNR FOP field
      Reference?: number;
    }
    export interface FOPTwo {
      CC_Info?: CCInfo2;
      // Used to specify the payment type. Acceptable values are "CA" (cash), "CK" (check), "CQ" (cheque). If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
      // Used to reference a line number from PNR FOP field
      Reference?: number;
    }
    export interface FOPRemark {
      CC_Info?: CCInfo12;
      // Used to specify the form of payment type.
      Type?: string;
    }
    export interface FOPQualifiers {
      BasicFOP?: BasicFOP;
      BSP_Ticketing?: BSPTicketing;
      MultipleCC_FOP?: MultipleCCFOP;
      SabreSonicTicketing?: SabreSonicTicketing;
      // This attribute is not in use.
      IgnoreStoredFOP?: boolean;
    }
    export interface FOPOne3 {
      CC_Info?: CCInfo10;
      // Used to specify the payment type. Acceptable values are "CA", "CK" or "CQ". If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
    }
    export interface FOPOne2 {
      CC_Info?: CCInfo8;
      // Used to specify the payment type. Acceptable values are "CA", "CK" or "CQ". If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
    }
    export interface FOPOne1 {
      CC_Info?: CCInfo2;
      // Used to specify the payment type. Acceptable values are "CA" (cash), "CK" (check), "CQ" (cheque). If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
      // Used to reference a line number from PNR FOP field
      Reference?: number;
    }
    export interface FOPOne {
      CC_Info?: CCInfo1;
      // Used to specify the payment type. Acceptable values are "CA" (cash), "CK" (check), "CQ" (cheque). If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
      // Used to reference a line number from PNR FOP field
      Reference?: number;
    }
    export interface FOP {
      CC_Info?: CCInfo4;
      // Used to specify the payment type. Acceptable values are "CA", "CK" or "CQ". If utilizing a credit card please omit @Type, and populate the .../CC_Info child node.
      Type?: string;
      // Used to reference a line number from PNR FOP field
      Reference?: string;
    }
    export interface FlightSegment2 {
      DestinationLocation?: DestinationLocation1;
      MarketingAirline?: MarketingAirline2;
      MarriageGrp?: MarriageGrp1;
      OriginLocation?: OriginLocation2;
      // Used to return the date and time of flight arrival.
      ArrivalDateTime?: string;
      // Used to return the date and time of flight departure.
      DepartureDateTime?: string;
      // Used to indicate whether or not the flight is eTicket-eligible
      eTicket?: boolean;
      // Used to return the flight number.
      FlightNumber?: string;
      // Used to return the number of passengers that need to be booked during this transaction.
      NumberInParty?: string;
      // Used to return the booking class
      ResBookDesigCode?: string;
      // Used to return the action code associated with the booking transaction
      Status?: string;
    }
    export interface FlightSegment1 {
      ArrivalAirport: ArrivalAirport;
      DepartureAirport: DepartureAirport;
      Equipment: Equipment1;
      FareBreakInfo?: FareBreakInfo;
      HiddenStops?: HiddenStops;
      MarketingAirline: MarketingAirline1;
      OperatingAirline?: OperatingAirline1;
      // Departure Date and Time
      DepartureDateTime: string;
      // Arrival Date and Time
      ArrivalDateTime: string;
      // Marketing Flight Number
      FlightNumber: number;
      // Booking Code
      ResBookDesigCode: string;
      // Used to indicate whether the Flight segment is a forced connection.
      ForceConnectionInd?: boolean;
      // Used to indicate whether the Flight segment is a forced stop over.
      ForceStopOverInd?: boolean;
    }
    export interface FlightSegment {
      // Used to specify the arrival airport code
      DestinationLocation: DestinationLocation;
      // Used to specify the equipment type of the aircraft being booked
      Equipment?: Equipment;
      // Used to specify the marketing airline code.
      MarketingAirline: MarketingAirline;
      // Information whether the flight segment is part of a married connection. O means no. I means yes.
      // marreid connection Le terme "segment marié" est utilisé par les compagnies aériennes pour considérer l'inventaire de deux ou plusieurs segments d'une origine et d'une destination comme un seul segment au lieu de segments individuels. Par exemple, Miami (MIA) à Los Angeles (LAX) peut être un vol direct (sans escale), ou on peut par exemple se rendre à Houston (IAH). Pour ces derniers, il s'agit de deux segments : MIA-IAH et IAH-LAX.
      MarriageGrp?: 'O' | 'I';
      OperatingAirline?: OperatingAirline;
      OriginLocation: OriginLocation;
      // Used to specify the time and date of flight arrival. Please note that the value within this attribute if passed cannot be null
      ArrivalDateTime?: string;
      // Used to specify the time and date of flight departure
      DepartureDateTime?: string;
      // Used to specify the flight number. OPEN can also be passed if the user desires an open space ticket
      FlightNumber: string;
      // Used to specify the number of passengers that need to be booked during this transaction
      NumberInParty: string;
      // Used to specify the booking class
      ResBookDesigCode: string;
      // Used to specify the action code to be used to sell the flight inventory. Valid values for "Status": NN, HL, GK, QF, SA, MM, or OPEN
      Status: string;
      // Used to send a request to an open system AirBookRQ
      InstantPurchase?: boolean;
    }
    export interface FlightQualifiers {
      VendorPrefs?: VendorPrefs2;
    }
    export interface FlightNumber {
      // Flight number
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface FeeInformation1 {
      // Returns ticketing fee account-related information
      AccountData?: string;
      // Ticketing fee amount
      Amount?: string;
      // Ticketing fee function code
      FunctionCode?: string;
      // Ticketing fee service type
      ServiceType?: string;
    }
    export interface FeeInformation {
      // Used to return the BIN number of the CC used
      CreditCardFOP_MatchingBin?: string;
      // Used to return the residual amount for the CC used
      CreditCard_ResidualAmount?: number;
      // Used to return the maximum service fee amount
      MaximumServiceFeeAmount?: string;
      // Used to return the ticket total fare amount-related information
      OB_FeeTicketTotalFareAmount?: string;
      // Used to return the service fee percentage
      ServiceFeePercentage?: string;
      // Used to return the tax amount associated with the fee
      TaxAmount?: string[];
      // Used to return the tax ID associated with the fee
      TaxID?: string[];
      // Used to return the amount associated with the fees
      Amount?: string;
      // Used to return the fee code
      Code?: string;
      // Used to return the number of fees contained in the FeeAmount
      NumFees?: string;
      // Used to return the passenger name number that the fee is associated to
      NameNumber?: string;
      // Used to return the segment number that the fee is associated to
      SegmentNumber?: string;
    }
    export interface FareOptions {
      // Used to display the original base fare and GST (when applicable), along with new information displaying the ASL amounts and any applicable GST
      ASLBreakdown?: boolean;
      // Used to instruct the system to ignore Adjusted Selling Level processing logic
      ASLIgnore?: boolean;
      // Used to instruct the system to price the itinerary with an excursion fare if applicable
      Excursion?: boolean;
      // Used to to display the original base fare and GST (when applicable), along with new information displaying all handling fees (with applicable GST) in the response
      HandlingFees?: boolean;
      // Used to instruct the system to price the itinerary with a net fare if applicable
      Net?: boolean;
      // Used to instruct the system to price the itinerary with a private fare if applicable
      Private?: boolean;
      // Used to instruct the system to price the itinerary with a public fare if applicable
      Public?: boolean;
    }
    export interface FareCalculationBreakdown {
      Branch?: Branch1;
      Departure?: Departure;
      FareBasis?: FareBasis1;
      // Free baggage allowance
      FreeBaggageAllowance?: string;
      Mileage?: Mileage;
      // Used to return the Rule Category indicators associated with the particular fare basis code if applicable
      RuleCategoryIndicator?: string[];
      // Used to return surcharge-related information if applicable
      Surcharges?: Surcharge[];
      StopoverCharge?: StopoverCharge;
    }
    export interface FareCalculation1 {
      // Details of the fare calculation line
      Text?: string;
    }
    export interface FareCalculation {
      // Details of the fare calculation line
      Text?: string;
    }
    export interface FareBreakInfo {
      BaseFare?: BaseFare1;
      EquivFare?: EquivFare1;
      // Fare basis code. FareBasisCode information is needed only with the last flight segment in a fare break.
      FareBasisCode?: string;
      // Used to indicate if a flight segment is the start of a side trip.
      SideTripStartInd?: boolean;
      // Used to indicate if a flight segment is the end of a side trip.
      SideTripEndInd?: boolean;
      // Used to indicate the side trip number to which this flight segment belongs. If more than one side trips in the itinerary, identify side trip to which each flight segment belongs using the SideTripNumber.
      SideTripNumber?: number;
      // Used to indicate the fare component number to which the flight segment belongs. If more than one fare break is needed, identify the fare component to which each flight segment belongs using the FareComponentNumber.
      FareComponentNumber: number;
    }
    export interface FareBasis2 {
      // Fare basis code
      Code?: string;
      // Contract number
      ContractNumber?: string;
      // Corporate ID
      CorporateID?: string;
      // Fare Amount
      FareAmount?: string;
      // Passenger type associated with the fare basis code
      FarePassengerType?: string;
      // Fare Type
      FareType?: string;
      // Filing carrier
      FilingCarrier?: string;
      // Global indicator
      GlobalInd?: string;
      // Market
      Market?: string;
      // Indicates that the particular fare basis is associated with an ARNK segment
      SurfaceSegment?: string;
      // TicketDesignator associated with the particular fare basis code
      TicketDesignator?: string;
    }
    export interface FareBasis1 {
      // Fare basis code
      Code?: string;
      // Contract number
      ContractNumber?: string;
      // Corporate ID
      CorporateID?: string;
      // Inclusive Tour code
      InclusiveTour?: string;
      // Fare amount
      FareAmount?: string;
      // Passenger type associated with the particular fare basis code
      FarePassengerType?: string;
      // Fare type associated with the particular fare basis code
      FareType?: string;
      // Filing carrier
      FilingCarrier?: string;
      // Global Indicator
      GlobalInd?: string;
      // Trip type indicator
      TripTypeInd?: string;
      // Market
      Market?: string;
      // Indicates that the fare basis is associated with an ARNK segment
      SurfaceSegment?: string;
      // Ticket designator
      TicketDesignator?: string;
      // Cabin
      Cabin?: string;
    }
    export interface FareBasis {
      // Used to instruct the system to price the itinerary utilizing the fare basis code
      Code?: string;
      // Used to specify a ticket designator
      TicketDesignator?: string;
    }
    export interface Fare6 {
      // Used to specify a fare type. Acceptable values are "NL" for normal fare, "EX" for special fare, and 'IT" for inclusive tour
      Type: string;
    }
    export interface Fare2 {
      // Used to specify the remaining fare amount.
      Amount: string;
    }
    export interface Fare {
      // Used to specify the amount to be applied to the second FOP
      Amount: string;
    }
    export interface ExtendedPayment {
      // Used to define number of months for the extension.
      NumMonths: number;
    }
    export interface ETicket {
      PDF?: PDF;
      // Used to send an email notification containing a text-based copy of the eTicket
      Ind: boolean;
    }
    export interface EquivFare2 {
      // Amount
      Amount?: string;
      // Currency code
      CurrencyCode?: string;
    }
    export interface EquivFare1 {
      // Amount
      Amount?: number;
      // Currency code
      CurrencyCode?: string;
    }
    export interface EquivFare {
      // Equivalent fare amount
      Amount?: number;
      // Currency code
      CurrencyCode?: string;
    }
    export interface Equivalent {
      // Amount
      Amount?: string;
    }
    export interface Equiv {
      // Amount
      Amount?: string;
      // Currency code
      CurrencyCode?: string;
    }
    export interface Equipment1 {
      // Machine type code
      AirEquipType: string;
    }
    export interface Equipment {
      // Used to specify the equipment type of the aircraft being booked
      AirEquipType: string;
    }
    export interface EnhancedMultipleFOP {
      Fare: Fare;
      FOP_One: FOPOne2;
      FOP_Two: FOPTwo2;
      Taxes: Taxes1;
    }
    export interface EndTransaction {
      Source: Source2;
      Email?: Email1;
    }
    export interface Endorsements1 {
      // Endorsement
      Text?: string[];
    }
    export interface Endorsements {
      // Used to specify miscellaneous text in the endorsements field
      Text: string;
      // Override any endorsement
      Override?: boolean;
    }
    export interface Email2 {
      // "Email" is used to return the passenger's email address.
      content?: string;
      // Email ID
      Id?: string;
      // Email Comment
      Comment?: string;
      // Email Type
      Type?: string;
      // Email Name
      Name?: string;
    }
    export interface Email1 {
      eTicket?: ETicket;
      Invoice?: Invoice;
      Itinerary?: Itinerary;
      PersonName?: PersonName4;
      // Used to send an email notification upon end transaction to any email addresses contained within the particular record
      Ind: boolean;
    }
    export interface Email {
      // Used to add an email address into the record
      Address: string;
      // Used to specify a passenger name number
      NameNumber?: string;
      // Used to specify miscellaneous email address-related free text information if applicable
      ShortText?: string;
      // Used to specify the type of email address. Acceptable values for "Type" are: "BC" for blind copy, "CC" for carbon copy, "FR" for from, or "To" for to
      Type?: 'BC' | 'CC' | 'FR' | 'TO';
    }
    export interface EitherOr {
      // Used to specify any refundable OR changeable pricing fare options
      Any?: boolean;
      // Used to specify the specific currency for either maximum refund OR change penalty
      CurrencyCode?: string;
      // Used to specify maximum refund OR change penalty. If a value of "0" is input no penalty is preferred. If a value of "N" is input only non-refundable OR non-changeable options are requested. Please note that monetary amount that includes a decimal is not allowed
      MaxPenalty?: string;
      // Used to query for before departure fees
      BeforeDeparture?: boolean;
      // Used to query for after departure fees. It is not possible to combine "BeforeDeparture" and "AfterDeparture" within one element
      AfterDeparture?: boolean;
    }
    export interface Document {
      // Issue country
      IssueCountry?: string;
      // Nationality country
      NationalityCountry?: string;
      Visa?: Visa;
      // Used to specify the document expiration date
      ExpirationDate?: string;
      // Used to specify the document number.
      Number?: string;
      // Used to specify the document type. Acceptable values include: "A" - Alien resident card, "C" - Permanent resident card, "F" - Facilitation document, "I" - National ID card, "IN" - Nexus Card. Also: "M" - Military, "N" - Naturalization certificate, "P" - Passport, "T" - Refugee travel document and re-entry permit, US Travel document, "V" - Border crossing card
      Type: string;
    }
    export interface Discount {
      // Amount
      Amount?: string;
      // Authorization code
      AuthCode?: string;
      // Percent
      Percent?: string;
    }
    export interface DestinationLocation2 {
      // Location code
      LocationCode?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface DestinationLocation1 {
      // Airport code
      LocationCode?: string;
    }
    export interface DestinationLocation {
      // Used to specify the arrival airport code
      LocationCode: string;
    }
    export interface DepartureDate {
      // Used to return the departure date
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface DepartureAirport {
      // Airport code
      LocationCode: string;
      // Attribute is not in use
      CodeContext?: string;
    }
    export interface Departure {
      // City code
      CityCode?: string;
      // Airport code
      AirportCode?: string;
      // Type of side trip
      SideTripIndicator?: string;
      // Airline code
      AirlineCode?: string;
      // Generic indicator associated with the particular flight segment
      GenericInd?: string;
      // Global indicator associated with the particular flight segment
      GlobalInd?: string;
      // Arrival City Code
      ArrivalCityCode?: string;
      // Arrival Airport Code
      ArrivalAirportCode?: string;
      // Information on fare construction city for an infant fare
      InfantFareConstructionCity?: string;
    }
    export interface CustomerInfo1 {
      Address?: Address4;
      ContactNumbers?: ContactNumbers1;
      // Frequent flyer information
      CustLoyalty?: CustLoyalty2[];
      // Passport details
      Passport?: Passport[];
      PaymentInfo?: PaymentInfo;
      // Person names
      PersonName?: PersonName6[];
    }
    export interface CustomerInfo {
      ContactNumbers?: ContactNumbers;
      Corporate?: Corporate;
      CreditCardData?: CreditCardData;
      // Used to pass frequent flyer number information
      CustLoyalty?: CustLoyalty[];
      // Used to add a customer number into the record if applicable. Please note that this qualifier is not applicable to Sabre Sonic Res-based clients
      CustomerIdentifier?: string;
      // Used to pass e-mail details
      Email?: Email[];
      // Used to add passenger names
      PersonName?: PersonName[];
    }
    export interface Customer {
      // DK number
      Number?: string;
    }
    export interface CustLoyalty2 {
      // "TravelingCarrierCode" is used to return the traveling airline code.
      TravelingCarrierCode?: string;
      // "MembershipID" is used to return the passenger's frequent flyer number.
      MembershipID?: string;
      // "NameNumber" is used to associate the particular frequent flyer number to a particular passenger within the record.
      NameNumber?: string;
      // "ProgramID" is used to return the passenger's frequent flyer airline code.
      ProgramID?: string;
      // "RPH" is used as a reference placeholder.
      RPH?: string;
      // "ShortText" is used to return miscellaneous frequent flyer-related information.
      ShortText?: string;
      // "Status" is used to return the status code associated with the particular flight segment within the record.
      Status?: string;
      // Reference ID
      Id?: string;
    }
    export interface CustLoyalty1 {
      // Program ID
      ProgramID: string;
      // Tier Level
      TierLevel: string;
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
    export interface CreditCardData {
      BillingInformation?: BillingInformation;
    }
    export interface Credit {
      // Used to specify the amount of credit
      Amount: string;
    }
    export interface CreatePassengerNameRecordRS {
      // .
      version?: string;
      ApplicationResults?: ApplicationResults;
      ItineraryRef?: ItineraryRef;
      AirBook?: AirBook1;
      // Used to display pricing details for each pricing request sent in the request.
      AirPrice?: AirPrice1[];
      TravelItineraryRead?: TravelItineraryRead;
    }
    export interface CreatePassengerNameRecordRQ {
      Profile?: Profile;
      TravelItineraryAddInfo?: TravelItineraryAddInfo;
      AirBook?: AirBook;
      // Used to price air segments
      AirPrice?: AirPrice[];
      AirTax?: AirTax;
      HotelBook?: HotelBook;
      MiscSegment?: MiscSegment;
      SpecialReqDetails?: SpecialReqDetails;
      PostProcessing: PostProcessing;
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
    export interface CreatePassengerNameRecordResponse {
      Links?: Link[];
      CreatePassengerNameRecordRS: CreatePassengerNameRecordRS;
    }
    export interface CreatePassengerNameRecordRequest {
      CreatePassengerNameRecordRQ: CreatePassengerNameRecordRQ;
    }
    export interface CountryName {
      // Country name
      content?: string;
      // 2 Character Country Code
      Code: string;
    }
    export interface CountryCodes1 {
      // Country Code
      Code: Code4[];
    }
    export interface CountryCodes {
      // Country code
      Code: Code2[];
    }
    export interface Country1 {
      // Country Code
      code?: string;
    }
    export interface Country {
      // Country code
      code?: string;
    }
    export interface Corporate2 {
      // Corporate ID
      CorporateId: string;
    }
    export interface Corporate1 {
      // Used to specify a corporate ID to price with
      ID: string[];
      // Used to instruct the system to price with corporate fares only
      Force?: string;
    }
    export interface Corporate {
      // Used to add a corporate ID into the record if applicable. Please note that this qualifier is not applicable to Sabre Sonic Res-based clients. Furthermore, Sabre Travel Network-based customers need to first have this functionality activated for their particular location by their account representative prior to attempting to utilize this element
      ID: string;
    }
    export interface ContactNumbers2 {
      ContactNumber?: ContactNumber2;
    }
    export interface ContactNumbers1 {
      // Contact number
      ContactNumber?: ContactNumber1[];
    }
    export interface ContactNumbers {
      // Used to pass contact details for a specific passenger
      ContactNumber: ContactNumber[];
    }
    export interface ContactNumber2 {
      // "Phone" is used to return the telephone number associated with the particular credit card holder.
      Phone?: string;
    }
    export interface ContactNumber1 {
      // Customer names
      PersonName?: PersonName5[];
      // "LocationCode" is used to return the city code associated to the phone number.
      LocationCode?: string;
      // "Phone" is used to return the telephone number.
      Phone?: string;
      // "RPH" is used as a reference placeholder.
      RPH?: string;
      // Reference ID
      Id?: string;
    }
    export interface ContactNumber {
      // Used to add a phone number after or before an existing phone number
      InsertAfter?: number;
      // Used to override the default city in the application's Travel Journal Record
      LocationCode?: string;
      // Used to specify a passenger name number
      NameNumber?: string;
      // Used to add customer telephone numbers into the record if applicable
      Phone: string;
      // Used to specify if the number is agency "A", home "H", business "B" or fax "F".
      PhoneUseType: string;
    }
    export interface Contact {
      // Main telephone number
      Phone?: string;
      // Mobile number
      Mobile?: string;
      // Fax number
      Fax?: string;
    }
    export interface Construction {
      // Amount used to return construction amount information
      Amount?: string;
      // CurrencyCode is used to return the applicable currency code.
      CurrencyCode?: string;
      // RateOfExchange is used to return rate of exchange.
      RateOfExchange?: string;
    }
    export interface ConstructedTotal {
      // Amount
      Amount?: string;
    }
    export interface Company {
      // Company name
      Name?: string;
      Address?: Address3;
    }
    export interface Commission1 {
      // Amount
      Amount?: string;
      // Commission cap amount indicator
      CapAmountInd?: string;
      // Percent
      Percent?: string;
    }
    export interface Commission {
      // Used to specify the numeric amount of commission being claimed if applicable.Amount and Percent are mutually exclusive
      Amount?: string;
      // Used to specify the percentage of commission being claimed if applicable. Amount and Percent are mutually exclusive
      Percent?: string;
    }
    export interface CommandPricing {
      Discount?: Discount;
      FareBasis?: FareBasis;
      // Used to match up with "SegmentSelect". These formats require a "*", i.e. requires a "/", i.e. WPS1*QY/AD75
      RPH?: string;
    }
    export interface Code5 {
      // City Code
      content?: string;
      // City code
      codeContext?: string;
    }
    export interface Code4 {
      // Country code
      content?: string;
      // Country Code
      codeContext?: string;
    }
    export interface Code3 {
      // Province code
      content?: string;
      // State or province code
      codeContext?: string;
    }
    export interface Code2 {
      // Country Code
      content?: string;
      // Code context
      codeContext?: string;
    }
    export interface Code1 {
      // Province Code
      content?: string;
      // Code context
      codeContext?: string;
    }
    export interface Code {
      // City code
      content?: string;
      // City code
      codeContext?: string;
    }
    export interface CityName {
      // City name
      content?: string;
      // City code
      CityCode?: string;
    }
    export interface CityCodes1 {
      // City code
      Code: Code5[];
    }
    export interface CityCodes {
      // City code
      Code: Code[];
    }
    export interface Changeable {
      // Used to specify only changeable pricing fare options
      Any?: boolean;
      // Used to specify the specific currency for maximum exchange penalty
      CurrencyCode?: string;
      // Used to specify maximum change penalty. If a value of "0" is input no penalty is preferred. If a value of "N" is input only non-changeable options are requested. Please note that monetary amount that includes a decimal is not allowed
      MaxPenalty?: string;
      // Used to query for before departure fees
      BeforeDeparture?: boolean;
      // Used to query for after departure fees. It is not possible to combine "BeforeDeparture" and "AfterDeparture" within one element
      AfterDeparture?: boolean;
    }
    export interface CCTwo {
      CC_Info?: CCInfo5;
    }
    export interface CCOne {
      CC_Info?: CCInfo5;
    }
    export interface CCInfo8 {
      PaymentCard: PaymentCard8;
    }
    export interface CCInfo7 {
      PaymentCard: PaymentCard7;
      // Used to specify whether or not to suppress credit card information on an itinerary
      Suppress?: boolean;
    }
    export interface CCInfo5 {
      PaymentCard: PaymentCard5;
      // Used to specify whether or not to suppress credit card information on an itinerary
      Suppress?: boolean;
    }
    export interface CCInfo4 {
      PaymentCard: PaymentCard4;
    }
    export interface CCInfo2 {
      PaymentCard: PaymentCard2;
      // Used to specify whether or not to suppress credit card information on an itinerary
      Suppress?: boolean;
    }
    export interface CCInfo13 {
      CardHolderInfo?: CardHolderInfo;
      // "PreferredCustomer" is used to indicate whether or not the cardholder is a preferred customer.
      PreferredCustomer?: string;
      // "ShortText" is used to return miscellaneous credit card-related information.
      ShortText?: string;
    }
    export interface CCInfo12 {
      PaymentCard: PaymentCard13;
      // Used to specify whether or not to suppress credit card information on an itinerary
      Suppress?: boolean;
    }
    export interface CCInfo10 {
      PaymentCard: PaymentCard10;
    }
    export interface CCInfo1 {
      PaymentCard: PaymentCard1;
      // Used to specify whether or not to suppress credit card information on an itinerary
      Suppress?: boolean;
    }
    export interface CCInfo {
      PaymentCard: PaymentCard;
      // Used to specify whether or not to suppress credit card information on an itinerary
      Suppress?: boolean;
    }
    export interface Cash {
      // Currency code
      CurrencyCode?: string;
      // Used to specify the amount of net cash
      Amount?: string;
    }
    export interface CarrierCode {
      // Carrier code
      content?: string;
      // Used as a reference place holder.
      RPH?: number;
    }
    export interface CardHolderInfo {
      Address?: Address5;
      ContactNumbers?: ContactNumbers2;
      // "Name" is used to return the credit card holder's name.
      Name?: string;
    }
    export interface CAR {
      // Car code
      Code: string;
    }
    export interface BSPTicketing {
      MultipleFOP?: MultipleFOP;
      MultipleMiscFOP?: MultipleMiscFOP;
      PayLaterPlan?: PayLaterPlan;
    }
    export interface BreakFare {
      // Segment number
      Number: string;
    }
    export interface BrandedFareInformation {
      // Brand code
      BrandCode?: string;
      // Brand name
      BrandName?: string;
      // Program code
      ProgramCode?: string;
      // Program name
      ProgramName?: string;
    }
    export interface Brand {
      // BasicEconomyExclude is used to exclude Basic Economy Fares (up to 5 booking classes can be selected). Please note that this element is only applicable to airline customers.
      content?: string;
      // Used to match up with "SegmentSelect" Brand/@RPH cannot combine with .../CommandPricing/@RPH
      RPH?: number;
    }
    export interface Branch1 {
      // Used to return Branch PCC information
      PCC?: string;
      // Indicates a country where a ship is documented and given nationality
      CountryOfShipRegistry?: string;
      // Used to indicate the Governing carrier/Primary carrier or 1st carrier on joint fare
      FirstJointCarrier?: string;
      // Used to indicate 2nd carrier on the joint fare
      SecondJointCarrier?: string;
      // Used to indicate if the carrier is IATA authorized
      IATAAuthorizedCarrier?: string;
    }
    export interface Branch {
      // User Branch
      Code: number;
    }
    export interface BookingInfo {
      // The Booking Key is returned in the HotelPriceCheck API response and is a mandatory value to perform hotel booking.
      BookingKey: string;
      // A code that a company may give to an agency to use for a discount. It is quite often tied to a negotiated rate code. Applies to GDS hotels only
      CorpDiscount?: string;
      // Requestor ID
      RequestorID?: string;
    }
    export interface BillingInformation {
      // Used to specify the zip code of the card holder
      Zip?: string;
      // Used to specify the name of the card holder
      cardHolderName: string;
      // Used to specify the street address of the card holder
      streetAddress: string;
      // Used to specify the city of the card holder
      city: string;
      // Used to specify the state or province of the card holder. "stateOrProvince" with a state code is required for addresses in the United States, U.S. Virgin Islands, Puerto Rico. "stateOrProvince" with a province code is required for addresses outside the United States, U.S. Virgin Islands, Puerto Rico
      stateOrProvince?: string;
    }
    export interface BasicFOP1 {
      CC_Info?: CCInfo7;
      // Used to specify a manual approval code for non-credit card forms of payment
      ManualApprovalCode?: string;
      // Used to specify the payment type. Acceptable values are "CA" (cash, "CK" (check), "CQ" (cheque), "PT", "PTACA" (PTA cash), "PTAGTCK" (PTA agency check) or "PTCK" (PTA check). If utilizing a credit card please omit @Type, and populate the .../CC_Info child node, unless needing to specify a PTA credit card form of payment. For a PTA credit card form of payment the client should pass Type="PT" and populate the .../CC_Info child node with the relevant credit card information
      Type?: string;
    }
    export interface BasicFOP {
      CC_Info?: CCInfo;
      // Used to specify the payment type. Acceptable values are "CA" (cash), "CK" (check), "CQ" (cheque). If utilizing a credit card please omit @Type, and populate the .../CC_Info child node
      Type?: string;
      // Used to reference a line number from PNR FOP field
      Reference?: number;
      // Used to pass virtual form of payment information
      Virtual?: string;
    }
    export interface BaseFare3 {
      // Amount
      Amount?: string;
    }
    export interface BaseFare2 {
      // Amount
      Amount?: string;
      // Currency code
      CurrencyCode?: string;
    }
    export interface BaseFare1 {
      // Amount
      Amount: number;
      // Currency code
      CurrencyCode?: string;
    }
    export interface BaseFare {
      // Base fare amount "Amount" is required to calculate the percentage taxes
      Amount: number;
      // Currency code
      CurrencyCode?: string;
    }
    export interface Base {
      // Amount
      Amount?: string;
      // Currency code
      CurrencyCode?: string;
    }
    export interface BargainFinder {
      // Used to instruct the system to return the lowest fare ever offered for the particular itinerary regardless of whether or not it is currently available
      Historical?: boolean;
      // Used to instruct the system to rebook the flights in the applicable classes of service to get the lower fare
      Rebook?: boolean;
    }
    export interface BaggageProvision {
      Associations?: Associations;
      // Carrier code whose baggage provisions apply
      CarrierWhoseBaggageProvisionsApply?: string;
      // Commissionable indicator
      Commissionable?: string;
      // Fee application indicator
      FeeApplicationIndicator?: string;
      // Fee not guaranteed indicator
      FeeNotGuaranteedIndicator?: string;
      // First occurrence
      FirstOccurrence?: string;
      // Frequent flier tier level
      FQTV_CarrierFiledTierLevel?: string;
      // Interlineable indicator
      Interlineable?: string;
      // Last occurrence
      LastOccurrence?: string;
      // No charge / Not available indicator
      NoChargeNotAvailableIndicator?: string;
      // Number of BDI pieced
      NumPiecesBDI?: string;
      // Number of ITR pieces
      NumPiecesITR?: string[];
      PassengerType?: PassengerType2;
      PriceInformation?: PriceInformation;
      // Provision type
      ProvisionType?: string;
      // Refund form
      RefundForm?: string;
      // Refund reissue indicator
      RefundReissue?: string;
      // Simultaneous ticket indicator
      SimultaneousTicketIndicator?: string;
      SubCodeInfo?: SubCodeInfo;
      WeightLimit?: WeightLimit;
      // Used as a reference place holder. Matches /PriceQuote/MiscInformation/BaggageInfo/SubCodeProperties[n]/@RPH
      RPH?: string;
    }
    export interface BaggageInfo {
      NonUS_DOT_Disclosure?: NonUSDOTDisclosure;
      US_DOT_Disclosure?: USDOTDisclosure;
    }
    export interface BaggageAllowance {
      Segment?: Segment;
      // Used to specify the quantity of checked bags. @Number and @Weight cannot combine
      Number?: string;
      // Used to specify the weight in kilos of checked bags.@Number and @Weight cannot combine
      Weight?: string;
    }
    export interface Associations {
      // Carrier code
      CarrierCode?: CarrierCode[];
      // Used to return associated segment count-related information
      CountForSegmentAssociatedID?: string;
      // Used to return the departure date
      DepartureDate?: DepartureDate[];
      // Used to return the destination location code
      DestinationLocation?: DestinationLocation2[];
      // Flight number
      FlightNumber?: FlightNumber[];
      // Used to return the origin location code
      OriginLocation?: OriginLocation3[];
      // Used to return PNR segment-related information
      PNR_Segment?: PNRSegment[];
      // Used to return class of service-related information
      ResBookDesigCode?: ResBookDesigCode[];
      // Status code
      StatusCode?: StatusCode[];
    }
    export interface AssociatedReferenceInformation {
      AssociatedPNRSummaries?: AssociatedPNRSummaries;
    }
    export interface AssociatedPNRSummary {
      // "RecordLocator" is used to return the Associated PNRs Record locator.
      RecordLocator?: string;
      // "NumberOfSeats" is used to return the number of seats in the Associated PNR.
      NumberOfSeats?: string;
      // "TicketingTimeLimitInfo" is used to return the ticketing time limit for the Associated PNR.
      TicketingTimeLimitInfo?: string;
      // "FreeText" is used to return miscellaneous free text associated with the particular Associated PNR.
      FreeText?: string;
    }
    export interface AssociatedPNRSummaries {
      AssociatedPNRSummary?: AssociatedPNRSummary[];
    }
    export interface ARUNK {
      // Used to add arrival unknown segments into a passenger name record after air segment sell but prior to pricing.
      priorPricing?: boolean;
    }
    export interface ArrivalAirport {
      // Airport code
      LocationCode: string;
      // Attribute is not in use
      CodeContext?: string;
    }
    export interface ApplicationResults {
      Success?: ProblemInformation[];
      Error?: ProblemInformation[];
      Warning?: ProblemInformation[];
      status: string;
    }
    export interface AncillaryFee {
      FeeInformation?: FeeInformation;
    }
    export interface AlternativePricing {
      Overrides?: Overrides;
      // Used to instruct the system to request alternative pricing regardless of availability
      NoAvailCheck?: boolean;
    }
    export interface AirTax {
      ItineraryInfos: ItineraryInfos;
      POS?: POS;
    }
    export interface AirSeat {
      Seats: Seats;
    }
    export interface AirPrice1 {
      PriceComparison?: PriceComparison1;
      PriceQuote?: PriceQuote;
    }
    export interface AirPrice {
      PriceComparison?: PriceComparison;
      PriceRequestInformation: PriceRequestInformation;
    }
    export interface Airline8 {
      // Passenger type code
      Code?: string;
    }
    export interface Airline7 {
      // Applicable to the "OSI" SSRCode, and is used to specify the airline that the SSR needs to be sent to.
      Code?: string;
      // Defines if the receiving airline is Sabre hosted carrier
      Hosted?: boolean;
    }
    export interface Airline5 {
      // Defines if the receiving airline is Sabre hosted carrier
      Hosted?: boolean;
    }
    export interface Airline3 {
      // Airline code
      Code: string;
    }
    export interface Airline2 {
      // Used to specify a particular vendor code
      Code: string;
    }
    export interface Airline1 {
      // Used to specify the airline that the group is travelling on if applicable. Please note that this qualifier is not applicable to Sabre Sonic Res-based subscribers, or Sabre Travel Network-based subscribers.
      Code: string;
    }
    export interface Airline {
      // For Travel Network customers "Hosted" should be set to "false" For SabreSonic RES hosted customers "Hosted" should be set to "true"
      Hosted: boolean;
    }
    export interface AirItineraryPricingInfo {
      // Used to pass details related to agency managed commission
      AgencyCommission?: AgencyCommission[];
      // Used to pass details related to ancillary fees
      AncillaryFees?: AncillaryFee[];
      // Baggage provisions information
      BaggageProvisions?: BaggageProvision[];
      FareCalculation?: FareCalculation;
      // fare calculation breakdown
      FareCalculationBreakdown?: FareCalculationBreakdown[];
      ItinTotalFare?: ItinTotalFare;
      PassengerTypeQuantity?: PassengerTypeQuantity;
      // Pricing details broken down by passenger type code (PTC)
      PTC_FareBreakdown?: PTCFareBreakdown1[];
      // Rule Retailer Codes
      RetailerRules?: RetailerRule[];
      // Information on specific change or cancellation penalties for an itinerary
      SpecificPenalty?: SpecificPenalty1[];
      // Ticketing fee related information
      TicketingFees?: TicketingFee[];
      // Used to associate a particular set of pricing-related information to a particular pricing option
      SolutionSequenceNmbr?: string;
    }
    export interface AirFareInfo {
      PTC_FareBreakdown: PTCFareBreakdown;
    }
    export interface AirExtras {
      // Used to pass frequent flyer information
      CustLoyalty?: CustLoyalty1[];
      // Used to specify a particular air extra to be included
      Qualifier?: string[];
      SSR_Code?: string[];
      // Used to specify an eTicket number to view air extra-related information for
      Ticketing?: Ticketing1[];
      // Used to specify for the system to include air extras
      Ind: boolean;
      // This attribute is not in use
      Summary?: boolean;
    }
    export interface AirBook1 {
      OriginDestinationOption?: OriginDestinationOption;
    }
    export interface AirBook {
      RetryRebook?: RetryRebook;
      // Used to specify values that cause subsequent pricing, and beyond processing to stop if they appear
      HaltOnStatus?: HaltOnStatus[];
      OriginDestinationInformation: OriginDestinationInformation;
      RedisplayReservation?: RedisplayReservation;
    }
    export interface AgentSine {
      // Agent Sine
      Code: string;
    }
    export interface AgencyInfo {
      Address?: Address;
      Ticketing?: Ticketing;
    }
    export interface AgencyContact {
      // Phone number
      Phone?: string;
      // Mobile phone number
      Mobile: string;
      // Fax number
      Fax?: string;
    }
    export interface AgencyCommission {
      // Used to pass commission contract details
      CommissionContract?: string;
      // Used to pass total priced commission value
      TotalPricedCommission?: string;
      // Used to pass related validating carrier details
      ValidatingCarrier?: string;
    }
    export interface AgencyAddress {
      // First address line
      AddressLine1: string;
      // Second address line
      AddressLine2?: string;
      // Third address line
      AddressLine3?: string;
      CityName?: CityName;
      StateProv?: StateProv;
      // Postal code
      PostalCode?: string;
      CountryName: CountryName;
    }
    export interface Agency {
      // Agency name
      Name?: string;
      Address?: Address2;
      // IATA number
      IATANumber?: string;
    }
    export interface AdvancePassenger {
      Document?: Document;
      PersonName?: PersonName1;
      ResidentDestinationAddress?: ResidentDestinationAddress;
      VendorPrefs?: VendorPrefs4;
      // Used to specify an itinerary segment to associate the SSR to. "A" can be specified to associate the SSR to all segments.
      SegmentNumber?: string;
    }
    export interface AddressLine {
      // "AddressLine" is used to return customer address information.
      content?: string;
      // Reference ID
      Id?: string;
      // Indicates type of information ex. O Other N Name A Address C City and State Z Zip code B Business
      type?: string;
    }
    export interface Address5 {
      // "AddressLine" is used to return the address associated with the particular credit card holder.
      AddressLine?: string[];
    }
    export interface Address4 {
      // "AddressLine" is used to return customer address information.
      AddressLine?: AddressLine[];
    }
    export interface Address3 {
      // Address
      AddressLine?: string[];
      // City name
      CityName?: string;
      CityCodes?: CityCodes1;
      StateProvince?: StateProvince;
      StateProvinceCodes?: StateProvinceCodes;
      // Post code
      PostCode?: string;
      Country?: Country;
      CountryCodes?: CountryCodes;
    }
    export interface Address2 {
      // Address line
      AddressLine?: string[];
      // City Name
      CityName?: string;
      StateProvince?: StateProvince1;
      StateProvinceCodes?: StateProvinceCodes1;
      // Post code
      PostCode?: string;
      Country?: Country1;
      CountryCodes?: CountryCodes1;
    }
    export interface Address1 {
      // Address
      AddressLine?: string[];
      // City name
      CityName?: string;
      CityCodes?: CityCodes;
      StateProvince?: StateProvince;
      StateProvinceCodes?: StateProvinceCodes;
      // Post code
      PostCode?: string;
      Country?: Country;
      CountryCodes?: CountryCodes;
    }
    export interface Address {
      // agency address
      AddressLine?: string;
      // agency city name
      CityName: string;
      // agency country code
      CountryCode?: string;
      // agency postal code
      PostalCode?: string;
      StateCountyProv?: StateCountyProv;
      // street number
      StreetNmbr?: string;
      VendorPrefs?: VendorPrefs;
    }
    export interface AddRemark {
      RemarkInfo: RemarkInfo;
    }
    export interface Action {
      // Action Code
      Code: string;
    }
    export interface Account {
      // Used to specify an account code to price with
      Code: string[];
      // Used to instruct the system to force the specific account code
      Force?: string;
    }
    export interface AcceptablePriceIncrease {
      // Used to define an amount threshold.
      Amount?: number;
      // Used to specify whether service should stop when actual price would be greater than "AmountSpecified" + percent or amount increase
      HaltOnNonAcceptablePrice?: boolean;
    }
    export interface AcceptablePriceDecrease {
      // Used to define an amount threshold.
      Amount?: number;
      // Used to specify whether service should stop when actual price would be lesser than "AmountSpecified" + percent or amount decrease
      HaltOnNonAcceptablePrice?: boolean;
    }
    export interface AAACity {
      // AAA City
      Code: string;
    }
  }
  