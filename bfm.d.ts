
declare namespace BFM {
    export interface ValidatingCarrierType {
      alternates?: ValidatingCarrier[];
      country?: string;
      default?: ValidatingCarrier;
      id: number;
      newVcxProcess?: boolean;
      otherTicketings?: ValidatingCarrier[];
      settlementMethod?: string;
    }
    export interface ValidatingCarrierIDType {
      ref: number;
    }
    export interface ValidatingCarrierCommissionInfoType {
      // Commission amount in equivalent amount currency.
      commissionAmount: number;
      // Commission contract qualifier.
      commissionContractQualifier?: string;
      // Commission amount in equivalent amount currency.
      commissionPercent?: number;
      // Earned commission amount in equivalent amount currency.
      earnedCommissionAmount?: number;
      // Fare Component Breakdown.
      fareComponentBreakdowns?: FareComponentBreakdownType[];
      // Source PCC.
      sourcePcc?: string;
      // Total commission amount including mark-up.
      totalAmountIncludingMarkUp?: number;
      // Validating Carrier Code.
      validatingCarrier?: string;
    }
    export interface ValidatingCarrier {
      // Validating Carrier Code.
      code?: string;
      ietCountryWobsp?: IETCountryWOBSP;
    }
    export interface TotalFareType {
      // Air Extras total summary amount (currency for AirExtras is in Currency).
      airExtrasAmount?: number;
      // Base fare amount.
      baseFareAmount?: number;
      // Base fare currency code.
      baseFareCurrency?: string;
      // Booking fee amount.
      bookingFeeAmount?: number;
      // Construction total amount.
      constructionAmount?: number;
      // Construction currency code.
      constructionCurrency?: string;
      // Credit Card Fee Amount.
      creditCardFeeAmount?: number;
      // Tax currency code.
      currency: string;
      // Effective price deviation.
      effectivePriceDeviation?: number;
      // Equivalent amount (including taxes).
      equivalentAmount?: number;
      // Equivalent currency code.
      equivalentCurrency?: string;
      // Service fee amount.
      serviceFeeAmount?: number;
      // Service fee tax.
      serviceFeeTax?: number;
      // Total price for all passenger types.
      totalPrice: number;
      // Total price with Air Extras (currency for TotalPriceWithAirExtras is in Currency).
      totalPriceWithAirExtras?: number;
      // Total Tax Amount.
      totalTaxAmount: number;
      // Total T-type OB fee for all passenger types.
      totalTtypeObFee?: number;
    }
    export interface TicketType {
      legs?: LegIDType[];
      pricingInformation: PricingInformationType;
    }
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
    export interface TaxSummaryType {
      // Tax Amount.
      amount: number;
      // Tax Code.
      code: string;
      // Country Code.
      country?: string;
      // Tax Currency Code.
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
    }
    export interface TaxSummaryIDType {
      // Reference to TaxSummaryDesc ID.
      ref: number;
    }
    export interface TaxRestrictionsType {
      currency?: string;
      maxAmount?: number;
      minAmount?: number;
      rate?: number;
    }
    export interface TaxReissueType {
      maxAmount?: number;
      maxCurrency?: string;
      refundable?: boolean;
      restrictionApply?: boolean;
      taxType?: string;
    }
    export interface TaxIDType {
      // Reference to TaxDesc ID.
      ref: number;
    }
    export interface SurfaceType {
      // Extra mileage allowance.
      extraMileageAllowance?: boolean;
      // Stopover segment.
      stopover?: boolean;
      // Stopover Charge.
      stopoverCharge?: number;
      // Stopover Charge Currency.
      stopoverChargeCurrency?: string;
      // Unchargeable
      unchargeable?: boolean;
    }
    export interface SurchargeType {
      // Surcharge amount.
      amount: number;
      // Surcharge currency code.
      currency: string;
      // Surcharge type.
      type?: string;
    }
    export interface StatisticsType {
      // Total number of Branded OneWay itineraries returned (sum of itineraries in all legs combined).
      branded?: number;
      // Number of departed itineraries returned.
      departed?: number;
      // Number of options returned.
      itineraryCount?: number;
      // Number of itineraries with missing legs returned.
      legMissed?: number;
      // Total number of Simple OneWay itineraries returned (sum of itineraries in all legs combined).
      oneWay?: number;
      // Number of sold out itineraries returned.
      soldOut?: number;
    }
    export interface SoldOutType {
      soldOutLegs?: SoldOutLegType[];
      status?: string;
    }
    export interface SoldOutSchedule {
      // Name of the brand.
      brandName?: string;
      // Code of the brand.
      code?: string;
      // Brand program code that is returned from the branding service. This allows you to use this attribute returned in the shopping response in subsequent requests, for example, in a "GetMarketingText" request and correctly match brand programs.
      programCode?: string;
      // Brand program code that is returned from the branding service.
      programDescription?: string;
      programId?: string;
      // Program code assigned by the system.
      programSystemCode?: string;
      // Program reference.
      ref: number;
      status?: string;
    }
    export interface SoldOutLegType {
      // Code representing the brand (two to ten characters).
      brandCode?: string;
      // Name of the brand.
      brandDescription?: string;
      // Brand program code that is returned from the branding service. This allows you to use this attribute returned in the shopping response in subsequent requests, for example, in a "GetMarketingText" request and correctly match brand programs.
      programCode?: string;
      // Identifier for a program that forms a valid match for the conditions specified in the request. The Program ID is system generated.
      programId?: string;
      // Description of the program. A program is a set of fare brands with a point of sale and origin and destination that is designed to be marketed with services desirable to customers. For example, the branded fare named "Thrifty" may have no special features or options for customization, and it is offered at the lowest price. A slightly higher priced option, such as the "Flexible Saver" fare, would have features like no penalty for cancellation. Finally, the "Power Flyer" fare would be offered at the highest price and may include a full set of features such as lounge access, limousine service, free baggage, and seat options.
      programName?: string;
      // Program code assigned by the system.
      programSystemCode?: string;
      // Program reference.
      ref: number;
      soldOutSchedules?: SoldOutSchedule[];
      status?: string;
    }
    export interface SideTrip {
      // Sid Trip Begin.
      begin?: boolean;
      // Sid Trip End.
      end?: boolean;
    }
    export interface SellingFareDataType {
      // Base Fare Amount.
      baseFareAmount?: number;
      // Constructed Total Amount.
      constructedTotalAmount?: number;
      // Equivalent Amount.
      equivalentAmount?: number;
      // Fare Calulation.
      fareCalculation?: string;
      // Indicates whether a Fare Retailer-Selling level rule was applied.
      fareRetailerRule?: boolean;
      // Description of the handling markup.
      handlingMarkups?: HandlingMarkupType[];
      // Tax summary information.
      taxSummaries?: TaxSummaryIDType[];
      // Collection of taxes.
      taxes?: TaxIDType[];
      // Total Per Passenger.
      totalPerPassenger?: number;
      // Total Tax Amount.
      totalTaxAmount?: number;
      // Tax.
      type: string;
    }
    export interface SegmentType {
      availabilityBreak?: boolean;
      // Booking code type.
      bookingCode: string;
      // Cabin code.
      cabinCode: string;
      // Dual Inventory Code.
      dualInventoryCode?: string;
      mealCode?: string;
      seatsAvailable?: number;
    }
    export interface SegmentsType {
      segment?: FareSegmentType;
      surface?: SurfaceType;
    }
    export interface Segment {
      id: number;
    }
    export interface ScheduleType {
      departureDateAdjustment?: number;
      ref: number;
      requestedStopover?: boolean;
    }
    export interface ScheduleMessageType {
      destination: string;
      origin: string;
      pricingSource: string;
      text?: string;
      type?: string;
    }
    export interface ScheduleDescType {
      arrival: Arrival;
      bookingDetails?: BookingDetails;
      carrier: Carrier;
      departure: Departure;
      dotRating?: string;
      eTicketable?: boolean;
      flightStatused?: number;
      frequency?: string;
      funnel?: boolean;
      governmentApproval?: boolean;
      hiddenStops?: HiddenStopType[];
      id: number;
      message?: string;
      messageType?: string;
      onTimePerformance?: number;
      smokingAllowed?: boolean;
      stopCount?: number;
      totalMilesFlown?: number;
      trafficRestriction?: string;
    }
    export interface ReissueType {
      changeFees?: ChangeFeeType[];
      electronicTicketNotAllowed?: boolean;
      electronicTicketRequired?: boolean;
      formOfRefund?: string;
      residual?: string;
      tag7Result?: boolean;
    }
    export interface ProcessingMessageType {
      pricingSource: string;
      text: string;
    }
    export interface PricingLegType {
      ref: number;
      status?: string;
      taxSummaries?: TaxSummaryIDType[];
      taxes?: TaxIDType[];
      totalFare?: TotalFareType;
    }
    export interface PricingInformationType {
      PoSCountryCode?: string;
      brand?: string;
      brandsOnAnyMarket?: boolean;
      cached?: Cached;
      fare?: FareType;
      flexibleFare?: number;
      offer?: Offer;
      passengerGroup?: number;
      pricingSubsource?: string;
      program?: string;
      pseudoCityCode?: string;
      revalidated?: boolean;
      soldOut?: SoldOutType;
      tickets?: TicketType[];
    }
    export interface PlusUpInformationType {
      amount: number;
      countryOfPayment?: string;
      destination: string;
      fareDestination?: string;
      fareOrigin?: string;
      message: string;
      origin: string;
      viaCity?: string;
    }
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
    export interface PenaltiesType {
      penalties: Penalty[];
    }
    export interface PassengerTotalFareType {
      baseFareAmount?: number;
      baseFareCurrency?: string;
      bookingFeeAmount?: number;
      cat35CommissionAmount?: number;
      cat35CommissionPercentage?: number;
      cat35MarkupAmount?: number;
      commissionAmount?: number;
      commissionAmountInEquivalent?: number;
      commissionPercentage?: number;
      commissionSource?: string;
      constructionAmount?: number;
      constructionCurrency?: string;
      creditCardFeeAmount?: number;
      currency: string;
      effectiveDeviationType?: 'P' | 'A';
      effectivePriceDeviation?: number;
      equivalentAmount?: number;
      equivalentCurrency?: string;
      exchangeRateOne?: number;
      noMarkupBaseFareAmount?: number;
      stopoverChargeAmount?: number;
      totalFare: number;
      totalTaxAmount: number;
      totalTtypeObFee?: number;
    }
    export interface PassengerNotAvailableInfoType {
      passengerType: string;
      reason: string;
    }
    export interface PassengerInformationType {
      baggageInformation?: BaggageInformationType[];
      currencyConversion?: CurrencyConversionType;
      divide?: boolean;
      fareComponents: FareComponentIDType[];
      fareMessages?: FareMessageType[];
      legs?: PricingLegType[];
      nonRefundable?: boolean;
      obFees?: OBFeeIDType[];
      passengerNumber?: number;
      passengerTotalFare?: PassengerTotalFareType;
      passengerType: string;
      penaltiesInfo?: PenaltiesType;
      plusUps?: PlusUpInformationType[];
      reissue?: ReissueType;
      sellingFareData?: SellingFareDataType[];
      stopover?: number;
      taxSummaries?: TaxSummaryIDType[];
      taxes?: TaxIDType[];
      total?: number;
      validatingCarrierCommissionInfo?: ValidatingCarrierCommissionInfoType[];
    }
    export interface PassengerInfoListElementType {
      passengerInfo?: PassengerInformationType;
      passengerNotAvailableInfo?: PassengerNotAvailableInfoType;
    }
    export interface PassengerBags {
      baggageSequenceOrders: BaggageSequenceOrder[];
      code: string;
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
      OriginDestinationInformation?: OriginDestinationInformation[];
      POS?: POSType;
      // Identifes the primary language preference for the form of travel represented in a collection. The human language is identified by ISO 639 codes.
      PrimaryLangID?: string;
      ResponseType?: string;
      ResponseVersion?: string;
      // Whether all messages should be printed in separate MTP element or not. Works only with PSS response serializers.
      SeparateMessages?: boolean;
      // Used to identify the sequence number of the transaction as assigned by the sending system; allows for an application to process messages in a certain order or to request a resynchronization of messages in the event that a system has been off-line and needs to retrieve messages that were missed.
      SequenceNmbr?: string;
      TPA_Extensions?: OTAAirLowFareSearchRQTPAExtensions;
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
    export interface XOFaresType {
      Value?: boolean;
    }
    export interface VoluntaryChangesTypePenalty {
      // Used for amounts, max 3 decimals
      Amount?: number;
      // A currency code (eg. USD, EUR, PLN)
      CurrencyCode?: string;
      // Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit".
      DecimalPlaces?: number;
      // Identifier used to indicate whether the change occurs before or after departure from the origin city.
      DepartureStatus?: string;
      PenaltyType?: string;
      // The penalty charge conveyed as a percent of the total fare.
      Percent?: number;
    }
    export interface VoluntaryChangesType {
      Penalty?: VoluntaryChangesTypePenalty;
      // Indicator used to specify whether voluntary change and other penalties are involved in the search or response.
      VolChangeInd?: boolean;
    }
    export interface VoluntaryChangesSMPTypePenalty {
      // Used for amounts, max 3 decimals
      Amount?: number;
      // Identifier used to indicate whether the change occurs before or after departure from the origin city.,Indicates the type (Refund or Exchange) of penalty involved in the search or response.
      Application?: string;
      // A currency code (eg. USD, EUR, PLN)
      CurrencyCode?: string;
      // Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit".
      DecimalPlaces?: number;
      // Indicate that specific penalty type should be excluded from the response.
      Exclude?: boolean;
      Type?: string;
    }
    export interface VoluntaryChangesSMPType {
      // Indicates relation between conditions.
      Match?: string;
      Penalty?: VoluntaryChangesSMPTypePenalty[];
    }
    export interface VendorPrefPairingTypeVendorPref {
      // Used to specify if carrier type is marketing or operating.,Defines preferred flight characteristics to be used in a search.,Identifies a particular type of flight - Direct, Stopover etc.,Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).,Indicates that if connection is chosen, then this attribute defines the maximum number of connections preferred.
      Code?: string;
      Type?: string;
    }
    export interface VendorPrefPairingType {
      // Specifies carrier selection method.
      Applicability?: string;
      // Used to specify a preference level for all carrier combinations inside one element.
      PreferLevel?: string;
      VendorPref?: VendorPrefPairingTypeVendorPref[];
    }
    export interface VendorPrefApplicabilityType {
      Type?: string;
      // Specifies carrier selection method.,Specifies what type of carrier it applies to.
      Value?: string;
    }
    export interface ValidatingCarrierTypePreference {
      // Two-character code for the preferred validating carrier.
      Code?: string;
      // Preference level for the validating carrier. Valid values are - Preferred or Unacceptable.
      Level?: string;
    }
    export interface ValidatingCarrierType {
      // Validating Carrier code
      Code?: string;
      Preference?: ValidatingCarrierTypePreference[];
    }
    export interface UniqueIDType {
      CompanyName?: CompanyNameType;
      // A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
      ID?: string;
      // Used to identify the source of the identifier (eg. IATA, ABTA, etc.).
      ID_Context?: string;
      // The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
      Instance?: string;
      Type?: string;
      // URL that identifies the location associated with the record identified by the UniqueID.
      URL?: string;
    }
    export interface TravelerRefNumberType {
      // Reference place holder.
      RPH?: string;
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
      PassengerTypeQuantity?: PassengerTypeQuantityType[];
    }
    export interface TravelDateTimeTypeDepartureDatesLengthOfStayRange {
      // (inclusive)
      MaxDays?: number;
      // (inclusive)
      MinDays?: number;
    }
    export interface TravelDateTimeTypeDepartureDatesLengthOfStay {
      Days?: number;
    }
    export interface TravelDateTimeTypeDepartureDates {
      Day?: TravelDateTimeTypeArrivalDatesDay[];
      DaysRange?: TravelDateTimeTypeArrivalDatesDaysRange[];
      LengthOfStay?: TravelDateTimeTypeDepartureDatesLengthOfStay[];
      LengthOfStayRange?: TravelDateTimeTypeDepartureDatesLengthOfStayRange[];
    }
    export interface TravelDateTimeTypeArrivalDatesDaysRange {
      // IntelliSell Date type (required format: YYYY-MM-DD)
      FromDate?: string;
      // IntelliSell Date type (required format: YYYY-MM-DD)
      ToDate?: string;
      // Value format: First letter of the name of the day or '_', eg. 'SMT___S' means we are interested in departing at Saturday, Sunday, Monday or Tuesday. Even if there are schedules for Wednesday, Thursday or Friday, they won't be returned in ISell response.
      WeekDays?: string;
    }
    export interface TravelDateTimeTypeArrivalDatesDay {
      // IntelliSell Date type (required format: YYYY-MM-DD)
      Date?: string;
    }
    export interface TravelDateTimeTypeArrivalDates {
      Day?: TravelDateTimeTypeArrivalDatesDay[];
      DaysRange?: TravelDateTimeTypeArrivalDatesDaysRange[];
    }
    export interface TransactionTypeTravelerPersona {
      // Traveler persona name.,A target available for user, that can be used to create specific rules. For example, if the client wants to target preferred customer request, we can use this element to achieve this.
      Name?: string;
    }
    export interface TransactionTypeTranID {
      Value?: string;
    }
    export interface TransactionTypeSubagentData {
      Code?: string;
    }
    export interface TransactionTypeServiceTag {
      Name?: string;
      content?: string;
    }
    export interface TransactionTypeSabreAth {
      BinarySecToken?: string;
      ConversationID?: string;
      Value?: string;
    }
    export interface TransactionTypeResponseSorting {
      EnableChronologicalSorting?: boolean;
      SortFaresInsideItin?: boolean;
    }
    export interface TransactionTypeRequestType {
      // Name of the type of request.
      Name?: string;
      // Content in the type of request.
      content?: string;
    }
    export interface TransactionTypePurchaseType {
      // Name of the target for the PurchaseType element.
      Name?: string;
    }
    export interface TransactionTypeFareOverridesFareOverride {
      // Indicator to enable/disable this FareOverride.,Attribute of FareGroup functionality, used in search of fares during shopping.
      Callable?: string;
      // Attribute of FareGroup functionality, used in search of fares during shopping.
      CorporateID?: string;
      FareType?: string;
      PseudoCityCode?: string;
      // This is a place holder for additional elements.
      TPA_Extensions?: string;
      VendorPref?: CompanyNamePrefType[];
    }
    export interface TransactionTypeFareOverrides {
      FareOverride?: TransactionTypeFareOverridesFareOverride[];
    }
    export interface TransactionTypeDiagnosticsDiagnosticDiagnosticArgument {
      Name?: string;
      Value?: string;
    }
    export interface TransactionTypeDiagnosticsDiagnostic {
      Code?: string;
      DiagnosticArgument?: TransactionTypeDiagnosticsDiagnosticDiagnosticArgument[];
      // This is a place holder for additional elements.
      TPA_Extensions?: string;
      Target?: string;
    }
    export interface TransactionTypeDiagnostics {
      Diagnostic?: TransactionTypeDiagnosticsDiagnostic[];
    }
    export interface TransactionTypeClientSessionID {
      Value?: string;
    }
    export interface TransactionTypeBranch {
      Name?: string;
    }
    export interface TransactionTypeATSETest {
      // Meaning of that attribute is dependent on MIP Team, ISell sends it in all ShoppingRequests when specified.
      Feature?: string;
    }
    export interface TransactionTypeAirStreaming {
      // The MaxItinsPerChunk attribute is set individually by customers and configures the maximum number of itineraries per one chunk.
      MaxItinsPerChunk?: number;
      // Method value should be “Services" or “WholeResponse”.
      Method?: string;
    }
    export interface TransactionType {
      ATSETest?: TransactionTypeATSETest;
      AirStreaming?: TransactionTypeAirStreaming;
      AvailableLevel?: AirSearchPrefsTypeTPAExtensionsTripType;
      Branch?: TransactionTypeBranch;
      // Helps Forwarder in keeping track of response parts generated as a result of request processing (AB only).
      ChunkNumber?: string;
      ClientSessionID?: TransactionTypeClientSessionID;
      CompressResponse?: AirSearchPrefsTypeTPAExtensionsPreferNDCSourceOnTie;
      // Alternative configuration selector.
      ConfigSet?: string;
      // Turns on or off debug mode.
      Debug?: boolean;
      // Key unlocking disabled debug mode.
      DebugKey?: string;
      Diagnostics?: TransactionTypeDiagnostics;
      // Disables itinerary cache for this request (if it is enabled in this service).
      DisableCache?: boolean;
      FareOverrides?: TransactionTypeFareOverrides;
      PurchaseType?: TransactionTypePurchaseType;
      RequestType?: TransactionTypeRequestType;
      ResponseSorting?: TransactionTypeResponseSorting;
      SabreAth?: TransactionTypeSabreAth;
      SeatStatusSim?: SeatStatusSimType;
      ServiceTag?: TransactionTypeServiceTag;
      // If enabled, Intellisell will return source for each itinerary.,Identifier of the type of request.
      ShowItinSource?: boolean;
      SubagentData?: TransactionTypeSubagentData;
      TranID?: TransactionTypeTranID;
      TravelerPersona?: TransactionTypeTravelerPersona;
    }
    export interface TicketDistribPrefType {
      DistribType?: string;
      // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).
      PreferLevel?: string;
      // Ticket turnaround time desired, amount of time requested to deliver tickets.
      TicketTime?: string;
      content?: string;
    }
    export interface TelephoneType {
      // Code assigned for telephones in a specific region, city, or area.
      AreaCityCode?: string;
      // Code assigned by telecommunications authorities for international country access identifier.
      CountryAccessCode?: string;
      // Extension to reach a specific party at the phone number.
      Extension?: string;
      // Specifies if the associated data is formatted or not. If true, then it is formatted, if false, then not formatted.
      FormattedInd?: boolean;
      // Additional codes used for pager or telephone access rights.
      PIN?: string;
      PhoneLocationType?: string;
      // Telephone number assigned to a single location.
      PhoneNumber?: string;
      PhoneTechType?: string;
      // value="Inherit" Permission for sharing data for marketing purposes.
      ShareMarketInd?: string;
      // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
      ShareSynchInd?: string;
    }
    export interface TaxCodeType {
      // Identifies the code for the tax.
      TaxCode?: string;
    }
    export interface TaxCodeAmountType {
      // Used for amounts, max 3 decimals
      Amount?: number;
      // Identifies the code for the tax.
      TaxCode?: string;
    }
    export interface SurchargeType {
      // Amount
      Amount?: number;
      // Currency
      Currency?: string;
      Type?: string;
    }
    export interface StreetNmbrType {
      // Defines a Post Office Box number.
      PO_Box?: string;
      content?: string;
    }
    export interface StopoverTypeStopoverPoint {
      LocationCode?: string;
      LocationType?: string;
    }
    export interface StopoverType {
      // This date should be of the form YYYY-MM-DDTHH:MM:SS
      DepartureDateTime?: string;
      // This should be of the form HHMMHHMM.
      DepartureWindow?: string;
      StopoverPoint?: StopoverTypeStopoverPoint;
    }
    export interface StayRestrictionsTypeMinimumStay {
      // The amount of elapsed time or number of occurrences of a day of the week needed to satisfy a minimum stay requirement.
      MinStay?: number;
      // The specific date for the minimum stay requirement.
      MinStayDate?: string;
      // The time of day when return travel may commence.
      ReturnTimeOfDay?: string;
      // The unit of elapsed time or the day of the week applied to the MinStay value.
      StayUnit?: string;
    }
    export interface StayRestrictionsTypeMaximumStay {
      // The amount of elapsed time or number of occurrences of a day of the week that must occur to satisfy a maximum stay requirement.
      MaxStay?: number;
      // The specific date for the maximum stay requirement.
      MaxStayDate?: string;
      // The time of day when return travel may commence.,Code indicating whether travel must commence or be completed in order to satisfy the stay restriction.
      ReturnTimeOfDay?: string;
      ReturnType?: string;
      // The unit of elapsed time or the day of the week applied to the MaxStay value.
      StayUnit?: string;
    }
    export interface StayRestrictionsType {
      MaximumStay?: StayRestrictionsTypeMaximumStay;
      MinimumStay?: StayRestrictionsTypeMinimumStay;
      // True indicates that Stay Restrictions exist.
      StayRestrictionsInd?: boolean;
    }
    export interface StateProvType {
      // The postal service standard code or abbreviation for the state, province, or region.
      StateCode?: string;
      content?: string;
    }
    export interface SourceType {
      // Abacus user
      AbacusUser?: boolean;
      // Accounting Code part of Office Accounting Code
      AccountingCode?: string;
      // Agent city
      AgentCity?: string;
      // Agent department code
      AgentDepartmentCode?: string;
      // Agent duty
      AgentDuty?: string;
      // An authority code assigned to a requestor.
      AgentDutyCode?: string;
      // Agent function
      AgentFunction?: string;
      // Agent IATA
      AgentIATA?: string;
      // Identifies the party within the requesting entity.
      AgentSine?: string;
      // Airline Channel Code
      AirlineChannelCode?: string;
      // The IATA assigned airline code.
      AirlineVendorID?: string;
      // The IATA assigned airport code.
      AirportCode?: string;
      BookingChannel?: SourceBookingChannelType;
      // Carrier
      Carrier?: string;
      DefaultTicketingCarrier?: string;
      // Electronic Reservation Service Provider (ERSP) assigned identifier used to identify the individual using the ERSP system.
      ERSP_UserID?: string;
      // The point of first departure in a trip.
      FirstDepartPoint?: string;
      // Home agency IATA
      HomeAgencyIATA?: string;
      // Home PCC
      HomePCC?: string;
      // The country code of the requesting party.
      ISOCountry?: string;
      // The currency code in which the reservation will be ticketed.
      ISOCurrency?: string;
      // Main travel agency PCC
      MainTravelAgencyPCC?: string;
      // Office Code part of Office Accounting Code
      OfficeCode?: string;
      // City code part of Office Accounting Code
      PersonalCityCode?: string;
      Position?: PositionType;
      PseudoCityCode?: string;
      RequestorID?: UniqueIDType;
      // Travel agency IATA
      TravelAgencyIATA?: string;
      // Vendor CRS code
      VendorCRSCode?: string;
    }
    export interface SourceBookingChannelType {
      CompanyName?: CompanyNameType;
      // Indicates whether the enumerated booking channel is the primary means of connectivity used by the source.
      Primary?: boolean;
      Type?: string;
    }
    export interface SideTripType {
      // Side trip end
      End?: boolean;
      // Side trip number
      Number?: number;
      // Side trip start
      Start?: boolean;
    }
    export interface SeatStatusSimType {
      Command?: string;
      Type?: string;
    }
    export interface RoutingLegType {
      ConnectPoint?: string[];
      InboundCarrier?: string[];
      InboundOutboundCarrier?: string[];
      OutboundCarrier?: string[];
    }
    export interface RoutingDefinitionType {
      // If true, wildcards will be automatically inserted between each two leg (RoutingLeg) elements. Will be set to 'false' if not present.
      AddWildcards?: boolean;
      RoutingLeg?: RoutingLegType[];
    }
    export interface RetailerRulesType {
      // If set to true, only fares with a matched Business Rule containing the specified Retailer Rule Qualifier will be returned
      Force?: boolean;
      RetailerRule?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier[];
    }
    export interface ReservationType {
      // Real reservation status
      RealStatus?: string;
      // Reservation status
      Status?: string;
    }
    export interface RequestSpecifiedLocationType {
      // Name of the airports group
      AirportsGroup?: string;
      // Identifies the context of the identifying code, such as IATA, ARC, or internal code, etc.
      CodeContext?: string;
      LocationCode?: string;
      LocationType?: string;
      content?: string;
    }
    export interface RequestLocationType {
      // Name of the airports group
      AirportsGroup?: string;
      // Identifies the context of the identifying code, such as IATA, ARC, or internal code, etc.
      CodeContext?: string;
      LocationCode?: string;
      content?: string;
    }
    export interface PriceRequestInformationTypeTPAExtensionsWebFare {
      // Web fare
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsUseReducedConstructions {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsUseNegotiatedFares {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityVendor {
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityTime {
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityPrice {
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityOperatingCarrier {
      Carrier?: PriceRequestInformationTypeTPAExtensionsPriorityMarketingCarrierCarrier[];
      // Which leg is most significant one? If inconclusive continue comparisons segment by segment starting from the beginning of itinerary
      Leg?: number;
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityMarketingCarrierCarrier {
      Code?: string;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityMarketingCarrier {
      Carrier?: PriceRequestInformationTypeTPAExtensionsPriorityMarketingCarrierCarrier[];
      // Which leg is most significant one? If inconclusive continue comparisons segment by segment starting from the beginning of itinerary
      Leg?: number;
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityLegTime {
      // Which leg is most significant one? If inconclusive continue comparisons segment by segment starting from the beginning of itinerary
      Leg?: number;
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityElapsedTime {
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityDirectFlights {
      // Which leg is most significant one? If inconclusive continue comparisons segment by segment starting from the beginning of itinerary
      Leg?: number;
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityDepartureTime {
      Leg?: number;
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriorityConnectionTime {
      Leg?: number;
      Priority?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPriority {
      ConnectionTime?: PriceRequestInformationTypeTPAExtensionsPriorityConnectionTime;
      DepartureTime?: PriceRequestInformationTypeTPAExtensionsPriorityDepartureTime;
      DirectFlights?: PriceRequestInformationTypeTPAExtensionsPriorityDirectFlights;
      ElapsedTime?: PriceRequestInformationTypeTPAExtensionsPriorityElapsedTime;
      LegTime?: PriceRequestInformationTypeTPAExtensionsPriorityLegTime;
      MarketingCarrier?: PriceRequestInformationTypeTPAExtensionsPriorityMarketingCarrier;
      OperatingCarrier?: PriceRequestInformationTypeTPAExtensionsPriorityOperatingCarrier;
      Price?: PriceRequestInformationTypeTPAExtensionsPriorityPrice;
      Time?: PriceRequestInformationTypeTPAExtensionsPriorityTime;
      Vendor?: PriceRequestInformationTypeTPAExtensionsPriorityVendor;
    }
    export interface PriceRequestInformationTypeTPAExtensionsPassengerStatus {
      CityCode?: string;
      // 2-character country code as defined in ISO3166. No lowercase letters.
      CountryCode?: string;
      // 2-letter state code.
      StateCode?: string;
      Type?: string;
    }
    export interface PriceRequestInformationTypeTPAExtensionsOBFees {
      RType?: boolean;
      TType?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsMultipleTravelerGroups {
      // Indicates desired number of itineraries to be returned in each passenger group at beggining of response.
      ItinerariesPerGroup?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIndicatorsTravelPolicy {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIndicatorsRetainFare {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIndicatorsResTicketing {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIndicatorsRefundPenalty {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIndicatorsMinMaxStay {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIndicators {
      MinMaxStay?: PriceRequestInformationTypeTPAExtensionsIndicatorsMinMaxStay;
      RefundPenalty?: PriceRequestInformationTypeTPAExtensionsIndicatorsRefundPenalty;
      ResTicketing?: PriceRequestInformationTypeTPAExtensionsIndicatorsResTicketing;
      RetainFare?: PriceRequestInformationTypeTPAExtensionsIndicatorsRetainFare;
      TravelPolicy?: PriceRequestInformationTypeTPAExtensionsIndicatorsTravelPolicy;
    }
    export interface PriceRequestInformationTypeTPAExtensionsIATAFare {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsForceCompanion {
      // Used for amounts, max 3 decimals
      Value?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensionsFareBreaksAtLegs {
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsFareAdjustment {
      // Currency of Adjustment's Value
      Currency?: string;
      // Adjustment Value, can be positive or negative, number or percentage
      Value?: string;
    }
    export interface PriceRequestInformationTypeTPAExtensionsETicketableOverride {
      // ETicketable override
      Value?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsCurrency {
      // Dual currency
      Dual?: string;
      // M override
      MOverride?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsBrandedFareIndicatorsReturnCheapestUnbrandedFare {
      // Indicator to turn on or off return of cheapest unbranded fare referred as "catch all" fare for the branded carriers from the branded fares service.
      Ind?: boolean;
    }
    export interface PriceRequestInformationTypeTPAExtensionsBrandedFareIndicators {
      BrandFilters?: BrandFiltersType;
      // Allow brandless legs in multiple brands upsell solutions
      ItinParityBrandlessLeg?: boolean;
      // Fallback mode for Multiple Branded Fares with Itin parity, when no itin parity solutions found
      ItinParityFallbackMode?: string;
      KeepLegParityForLowestSingle?: boolean;
      // Return multiple brand options per itin
      MultipleBrandedFares?: boolean;
      // Multiple Branded Fares parity mode
      ParityMode?: string;
      // Return ancillaries from the ATPCO Branded Fares Feature Table 166
      ReturnBrandAncillaries?: boolean;
      ReturnCheapestUnbrandedFare?: PriceRequestInformationTypeTPAExtensionsBrandedFareIndicatorsReturnCheapestUnbrandedFare;
      // Return single brand option per itin
      SingleBrandedFare?: boolean;
      // Indicates maximum number of requested branded upsells
      UpsellLimit?: number;
    }
    export interface PriceRequestInformationTypeTPAExtensions {
      ApplyResidentDiscount?: ApplyResidentDiscountType;
      BrandedFareIndicators?: PriceRequestInformationTypeTPAExtensionsBrandedFareIndicators;
      Currency?: PriceRequestInformationTypeTPAExtensionsCurrency;
      CustomerType?: AirSearchPrefsTypeTPAExtensionsTripType;
      ETicketableOverride?: PriceRequestInformationTypeTPAExtensionsETicketableOverride;
      FareAdjustment?: PriceRequestInformationTypeTPAExtensionsFareAdjustment[];
      FareBreaksAtLegs?: PriceRequestInformationTypeTPAExtensionsFareBreaksAtLegs;
      ForceCompanion?: PriceRequestInformationTypeTPAExtensionsForceCompanion;
      IATAFare?: PriceRequestInformationTypeTPAExtensionsIATAFare;
      Indicators?: PriceRequestInformationTypeTPAExtensionsIndicators;
      MultipleTravelerGroups?: PriceRequestInformationTypeTPAExtensionsMultipleTravelerGroups;
      OBFees?: PriceRequestInformationTypeTPAExtensionsOBFees;
      PassengerPriceAdjustment?: PassengerPriceAdjustmentType[];
      PassengerStatus?: PriceRequestInformationTypeTPAExtensionsPassengerStatus;
      PointOfSaleOverride?: PointOfSaleOverrideType;
      PointOfTicketingOverride?: PointOfTicketingOverrideType;
      PriceAdjustment?: PriceAdjustmentType;
      Priority?: PriceRequestInformationTypeTPAExtensionsPriority;
      PrivateFare?: FlexibleFaresTypeFareParametersPrivateFare;
      // Promotional Identifier - a string which identifies a promotion, possibly giving a discount prices etc.
      PromoID?: string;
      PublicFare?: FlexibleFaresTypeFareParametersPublicFare;
      UseNegotiatedFares?: PriceRequestInformationTypeTPAExtensionsUseNegotiatedFares;
      UsePassengerFares?: FlexibleFaresTypeFareParametersUsePassengerFares;
      UseReducedConstructions?: PriceRequestInformationTypeTPAExtensionsUseReducedConstructions;
      WebFare?: PriceRequestInformationTypeTPAExtensionsWebFare;
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
    export interface PriceAdjustmentTypeEquivFare {
      Amount?: number;
      EffectivePriceDeviation?: number;
    }
    export interface PriceAdjustmentTypeBaseFare {
      Amount?: number;
    }
    export interface PriceAdjustmentType {
      BaseFare?: PriceAdjustmentTypeBaseFare;
      EquivFare?: PriceAdjustmentTypeEquivFare;
      TotalFare?: PriceAdjustmentTypeBaseFare;
      TotalTax?: PriceAdjustmentTypeBaseFare;
    }
    export interface POSType {
      Source?: SourceType[];
    }
    export interface PositionType {
      // Used for Character Strings, length 1 to 16
      Altitude?: string;
      // Used for Character Strings, length 1 to 16
      Latitude?: string;
      // Used for Character Strings, length 1 to 16
      Longitude?: string;
    }
    export interface PointOfTicketingOverrideType {
      // Used for Character Strings, length 1 to 8
      Code?: string;
    }
    export interface PointOfSaleOverrideType {
      // Used for Character Strings, length 1 to 8
      Code?: string;
    }
    export interface PlusUpType {
      // Amount
      Amount?: number;
      // Country of payment
      CountryOfPayment?: string;
      // Destination City
      DestinationCity?: string;
      // Fare Destination City
      FareDestinationCity?: string;
      // Fare Origin City
      FareOriginCity?: string;
      // Message
      Message?: string;
      // Origin City
      OriginCity?: string;
      // Via City
      ViaCity?: string;
    }
    export interface PersonNameType {
      GivenName?: string[];
      MiddleName?: string[];
      NamePrefix?: string[];
      NameSuffix?: string[];
      NameTitle?: string[];
      NameType?: string;
      // value="Inherit" Permission for sharing data for marketing purposes.
      ShareMarketInd?: string;
      // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
      ShareSynchInd?: string;
      // Family name, last name.
      Surname?: string;
      // eg "van der", "von", "de"
      SurnamePrefix?: string;
    }
    export interface PassengerTypeQuantityTypeTPAExtensionsBirthDate {
      Date?: string;
    }
    export interface PassengerTypeQuantityTypeTPAExtensionsAge {
      Years?: number;
    }
    export interface PassengerTypeQuantityTypeTPAExtensions {
      Age?: PassengerTypeQuantityTypeTPAExtensionsAge;
      BirthDate?: PassengerTypeQuantityTypeTPAExtensionsBirthDate;
      State?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier;
      TotalNumber?: AirSearchPrefsTypeTPAExtensionsAircraftTypePenalty;
      VoluntaryChanges?: VoluntaryChangesSMPType;
    }
    export interface PassengerTypeQuantityType {
      Age?: number;
      Changeable?: boolean;
      Code?: string;
      CodeContext?: string;
      ID?: number;
      Index?: number;
      Quantity?: number;
      RequestedPassengerIndex?: number;
      TPA_Extensions?: PassengerTypeQuantityTypeTPAExtensions;
      URI?: string;
    }
    export interface PassengerPriceAdjustmentType {
      BaseFare?: PriceAdjustmentTypeBaseFare;
      EquivFare?: PriceAdjustmentTypeEquivFare;
      PassengerID?: number;
      TotalFare?: PriceAdjustmentTypeBaseFare;
      TotalTax?: PriceAdjustmentTypeBaseFare;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsSplitTaxes {
      ByFareComponent?: boolean;
      ByLeg?: boolean;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsReservationData {
      // DK number
      DKNumber?: string;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsPointsRedemption {
      Enable?: boolean;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsPartitions {
      Group?: CachePartitionGroupType[];
      Partition?: CachePartitionType[];
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsMultiTicket {
      // Display Option Policy, takes values: - SOW - Show OneWays separately - GOW2RT - Group OneWays and match to RoundTrip - SCHS - Group OneWays, match to RoundTrip and show cheaper solution
      DisplayPolicy?: string;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsMessagingDetails {
      MDRSubset?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsItineraryCache {
      PublicTimeToLive?: number;
      RemovePreviousOnUpdate?: boolean;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsAlternateDatesProcessing {
      CalendarMode?: boolean;
      NumOptionsPerAlternateDate?: number;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsAlternateAirportMileage {
      AllowBorderCross?: boolean;
      // Maximum allowed number of miles from desired airport.
      Number?: string;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsAlternateAirportCitiesSpecifiedLocation {
      LocationCode?: string;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsAlternateAirportCitiesAlternateLocation {
      LocationCode?: string;
    }
    export interface OTAAirLowFareSearchRQTPAExtensionsAlternateAirportCities {
      AlternateLocation?: OTAAirLowFareSearchRQTPAExtensionsAlternateAirportCitiesAlternateLocation[];
      SpecifiedLocation?: OTAAirLowFareSearchRQTPAExtensionsAlternateAirportCitiesSpecifiedLocation;
    }
    export interface OTAAirLowFareSearchRQTPAExtensions {
      AlternateAirportCities?: OTAAirLowFareSearchRQTPAExtensionsAlternateAirportCities[];
      AlternateAirportMileage?: OTAAirLowFareSearchRQTPAExtensionsAlternateAirportMileage;
      AlternateDatesProcessing?: OTAAirLowFareSearchRQTPAExtensionsAlternateDatesProcessing;
      AlternatePCC?: AlternatePCCType[];
      AwardShopping?: AwardShoppingType;
      Billing?: BillingInformationType;
      DiversityControl?: DiversityControlType;
      Exchange?: ExchangeType[];
      ExchangeSettings?: ExchangeSettingsType;
      IntelliSellTransaction?: TransactionType;
      ItineraryCache?: OTAAirLowFareSearchRQTPAExtensionsItineraryCache;
      MessagingDetails?: OTAAirLowFareSearchRQTPAExtensionsMessagingDetails;
      MultiTicket?: OTAAirLowFareSearchRQTPAExtensionsMultiTicket;
      Partitions?: OTAAirLowFareSearchRQTPAExtensionsPartitions;
      PointsRedemption?: OTAAirLowFareSearchRQTPAExtensionsPointsRedemption;
      ReservationData?: OTAAirLowFareSearchRQTPAExtensionsReservationData;
      SplitTaxes?: OTAAirLowFareSearchRQTPAExtensionsSplitTaxes;
    }
    export interface OTAAirLowFareSearchRQOriginDestinationInformationTPAExtensions {
      AlternateTime?: ExchangeOriginDestinationInformationTypeAlternateTime;
      Baggage?: BaggageType;
      BrandFilters?: BrandFiltersType;
      CabinPref?: CabinPrefType;
      ClassOfService?: ClassOfServiceElemType[];
      ConnectionTime?: ExchangeOriginDestinationInformationTypeConnectionTime;
      DateFlexibility?: ExchangeOriginDestinationInformationTypeDateFlexibility[];
      DepartureDays?: DepartureDaysType;
      FareBasis?: FareBasisType[];
      FareType?: FareTypePrefType[];
      Flight?: OriginDestinationFlightType[];
      IncludeAlliancePref?: AllianceType[];
      IncludeVendorPref?: IncludeVendorPrefType[];
      MaxOneWayOptions?: ExchangeOriginDestinationInformationTypeMaxOneWayOptions;
      NumOneWayOptions?: ExchangeOriginDestinationInformationTypeNumOneWayOptions;
      PassengerPriceAdjustment?: PassengerPriceAdjustmentType[];
      Routing?: RoutingDefinitionType[];
      SegmentType?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier;
      SisterDestinationLocation?: RequestSpecifiedLocationType[];
      SisterDestinationMileage?: ExchangeOriginDestinationInformationTypeSisterDestinationMileage;
      SisterOriginLocation?: RequestSpecifiedLocationType[];
      SisterOriginMileage?: ExchangeOriginDestinationInformationTypeSisterOriginMileage;
      Stopover?: StopoverType;
      TotalTravelTime?: ExchangeOriginDestinationInformationTypeTotalTravelTime;
    }
    export interface OriginDestinationInformation {
      // This date should be of the form YYYY-MM-DDTHH:MM:SS
      ArrivalDateTime?: string;
      ArrivalDates?: TravelDateTimeTypeArrivalDates;
      // This should be of the form HHMMHHMM.
      ArrivalWindow?: string;
      ConnectionLocations?: ConnectionType;
      // This date should be of the form YYYY-MM-DDTHH:MM:SS
      DepartureDateTime?: string;
      DepartureDates?: TravelDateTimeTypeDepartureDates;
      // This should be of the form HHMMHHMM.
      DepartureWindow?: string;
      DestinationLocation?: OriginDestinationInformationTypeDestinationLocation;
      // OriginDestination node with flight and fare information fixed. Used in context shopping
      Fixed?: boolean;
      // Request for full diversity of flights for the particular OriginDestination node. Used in Exchange Context Shopping
      FullDiversity?: boolean;
      OriginLocation?: OriginDestinationInformationTypeOriginLocation;
      RPH?: string;
      TPA_Extensions?: OTAAirLowFareSearchRQOriginDestinationInformationTPAExtensions;
    }
    export interface CreateBargainFinderMaxRequest {
      OTA_AirLowFareSearchRQ?: OTAAirLowFareSearchRQ;
    }
    export interface OriginDestinationInformationTypeOriginLocation {
      // Name of the airports group
      AirportsGroup?: string;
      // Flag indicating if all cached origin cities are to be processed as origin airports.
      AllAirports?: boolean;
      // Identifies the context of the identifying code, such as IATA, ARC, or internal code, etc.
      CodeContext?: string;
      LocationCode?: string;
      LocationType?: string;
      content?: string;
    }
    export interface OriginDestinationInformationTypeDestinationLocation {
      // Name of the airports group
      AirportsGroup?: string;
      // Flag indicating if all cached destination cities are to be processed as destination airports.
      AllAirports?: boolean;
      // Identifies the context of the identifying code, such as IATA, ARC, or internal code, etc.
      CodeContext?: string;
      LocationCode?: string;
      LocationType?: string;
      content?: string;
    }
    export interface OriginDestinationFlightType {
      Airline?: AirlineType;
      // Arrival date and time
      ArrivalDateTime?: string;
      // Booking date and time
      BookingDateTime?: string;
      // Class of service
      ClassOfService?: string;
      // Departure date and time
      DepartureDateTime?: string;
      DestinationLocation?: RequestLocationType;
      Fare?: FareOptionalDetailsType;
      // Specify whether the flight is flown.
      Flown?: boolean;
      // Marriage status,Flight type (A: Air Segment, K: ARUNK, O: Open Segment)
      MarriageStatus?: string;
      MileageDisplay?: MileageDisplayType[];
      // Flight number
      Number?: number;
      OriginLocation?: RequestLocationType;
      PlusUp?: PlusUpType[];
      Reservation?: ReservationType;
      // Specify whether the flight is shopped.
      Shopped?: boolean;
      SideTrip?: SideTripType;
      Type?: string;
    }
    export interface OptionsPerDatePairType {
      // Departure date
      Departure?: string;
      // Maximum number of options per date/date pair
      Max?: number;
      // Minimum number of options per date/date pair
      Min?: number;
      // Return date
      Return?: string;
    }
    export interface NumTripsType {
      Number?: number;
      // Maximum number of options to be retrieved for each combination of outbound/inbound dates.
      PerDateMax?: number;
      // Minimum number of options to be retrieved for each combination of outbound/inbound dates.
      PerDateMin?: number;
      // Number of itineraries per market for alternate cities request. It allows to control market diversity only.
      PerMarket?: number;
      // In Advanced Calendar API: Maximum number of itineraries to be retrieved for each departure month and departure/arrival combination.
      PerMonth?: number;
    }
    export interface MileageDisplayType {
      // Mileage display city,Mileage display type
      City?: string;
      // Mileage surcharge percentage
      Surcharge?: number;
      Type?: string;
    }
    export interface KeepSameCabinType {
      // Set to "true" guarantees that all segments within single shopping option belong to the requested cabin.
      Enabled?: boolean;
    }
    export interface JumpCabinLogicType {
      // Controls if response could contain options with cabin class different than requested.
      Disabled?: boolean;
    }
    export interface InterlineBrandsType {
      Brand?: BrandType[];
      // If specific XX brand is not available for requested date/flight, another cheapest brand will be returned combined with available XX brand.
      ChangeBrandForSoldout?: boolean;
    }
    export interface IncludeVendorPrefType {
      // Identifies a company by the company code.
      Code?: string;
    }
    export interface GoverningCarrierOverrideType {
      // Airline Carrier Code - override the GOVERNING CARRIER to get the fare filed by that carrier.
      AirlineCode?: string;
    }
    export interface FlightTypePrefType {
      FlightType?: string;
      MaxConnections?: string;
      PreferLevel?: string;
    }
    export interface FlightStopsAsConnectionsType {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersXOFares {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersUsePassengerFares {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersUseNegotiatedFares {
      // Define information on the number of passengers of a specific type.,,Allows to identify which one of requested passenger groups from Exchange request this solution relates to.,Identifies the location of the code table,Used to define a quantity of an associated element or attribute.,Used for Numeric values, from 0 to 999 inclusive,Specify traveler type code.,Allows to identify which one of requested passengers this solution relates to.,Used for Numeric values, from 0 to 999 inclusive,Identifies the source authority for the code.,Additional elements and attributes to be included if required, per Trading Partner Agreement (TPA).,Exchange-specific,Exchange-specific,Exchange-specific,Identifies whether penalties associated with voluntary changes should be included in the search results.,Indicates relation between conditions.,Specifies penalty charges as either a currency amount or a percentage of the fare.,Used for amounts, max 3 decimals,A currency code (eg. USD, EUR, PLN),Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit".,Indicate that specific penalty type should be excluded from the response.,Identifier used to indicate whether the change occurs before or after departure from the origin city.,Indicates the type (Refund or Exchange) of penalty involved in the search or response.
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersResTicketing {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersRefundPenalty {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersPublicFare {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersPrivateFare {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersNegotiatedFaresOnly {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersMinMaxStay {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersLegCabin {
      Type?: string;
    }
    export interface FlexibleFaresTypeFareParametersLeg {
      Baggage?: BaggageType;
      BrandFilters?: BrandFiltersType;
      Cabin?: FlexibleFaresTypeFareParametersLegCabin;
      ClassOfService?: ClassOfServiceElemType[];
      FareBasis?: FareBasisType[];
      FareType?: FareTypePrefType[];
      Num?: number;
    }
    export interface FlexibleFaresTypeFareParametersExcludeRestricted {
      Ind?: boolean;
    }
    export interface FlexibleFaresTypeFareParametersCorporateID {
      // Corporate ID
      Code?: string;
    }
    export interface FlexibleFaresTypeFareParametersCabin {
      Type?: string;
    }
    export interface FlexibleFaresTypeFareParametersAccountCode {
      // Used for Character Strings, length 1 to 20
      Code?: string;
    }
    export interface FlexibleFaresTypeFareParameters {
      AccountCode?: FlexibleFaresTypeFareParametersAccountCode[];
      Baggage?: BaggageType;
      BrandedFareIndicators?: BrandedFareIndicatorsBase;
      Cabin?: FlexibleFaresTypeFareParametersCabin;
      ClassOfService?: ClassOfServiceElemType[];
      CorporateID?: FlexibleFaresTypeFareParametersCorporateID[];
      ExcludeRestricted?: FlexibleFaresTypeFareParametersExcludeRestricted;
      FareBasis?: FareBasisType[];
      FareType?: FareTypePrefType[];
      JumpCabinLogic?: JumpCabinLogicType;
      KeepSameCabin?: KeepSameCabinType;
      Leg?: FlexibleFaresTypeFareParametersLeg[];
      MinMaxStay?: FlexibleFaresTypeFareParametersMinMaxStay;
      NegotiatedFaresOnly?: FlexibleFaresTypeFareParametersNegotiatedFaresOnly;
      PassengerType?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier;
      PassengerTypeQuantity?: PassengerTypeQuantityType[];
      PrivateFare?: FlexibleFaresTypeFareParametersPrivateFare;
      PublicFare?: FlexibleFaresTypeFareParametersPublicFare;
      RefundPenalty?: FlexibleFaresTypeFareParametersRefundPenalty;
      ResTicketing?: FlexibleFaresTypeFareParametersResTicketing;
      UseNegotiatedFares?: FlexibleFaresTypeFareParametersUseNegotiatedFares;
      UsePassengerFares?: FlexibleFaresTypeFareParametersUsePassengerFares;
      VoluntaryChanges?: VoluntaryChangesSMPType;
      XOFares?: FlexibleFaresTypeFareParametersXOFares;
    }
    export interface FlexibleFaresType {
      FareParameters?: FlexibleFaresTypeFareParameters[];
    }
    export interface FareTypePrefType {
      Code?: string;
      PreferLevel?: string;
    }
    export interface FareOptionalDetailsType {
      // Fare amount (note: last Flight in Fare Component)
      Amount?: number;
      // Fare basis code
      BasisCode?: string;
      // Used to indicate brand code
      BrandID?: string;
      // Fare component number
      ComponentNo?: number;
      ProgramID?: number;
      // Rule Number (note: last Flight in Fare Component)
      RuleNumber?: string;
      // Fare Source Vendor (note: last Flight in Fare Component)
      SourceVendor?: string;
      // Tariff (note: last Flight in Fare Component)
      Tariff?: string;
      // Vendor (note: last Flight in Fare Component)
      Vendor?: string;
    }
    export interface FareBasisType {
      // One to fifteen character Fare Basis Code. Uppercase letters, numbers and wildcards "-" "?" "^" are allowed. Minus (-): zero or more characters. Question mark (?): exactly one character. Caret followed by an uppercase letter or a number (^X): exactly one character, excluding X (replace X with the charter you want to reject).,Defines preferred or excluded fare type codes for whole main fare.,Specify fare type code.
      Code?: string;
    }
    export interface ExchangeType {
      Arunk?: ArunkType[];
      // Bypass Advance Purchase Option
      BypassAdvancePurchaseOption?: string;
      // Exchanged ticket issue date and time
      ExchangedTktIssueDateTime?: string;
      Fare?: ExchangeFareType;
      // Number of tax boxes
      NumberOfTaxBoxes?: number;
      OriginDestinationInformation?: ExchangeOriginDestinationInformationType[];
      // Original ticket issue date and time
      OriginalTktIssueDateTime?: string;
      POS?: ExchangePOSType;
      // Previous exchange date and time
      PreviousExchangeDateTime?: string;
      TPA_Extensions?: ExchangeTPAExtensionsType;
      TravelPreferences?: ExchangeAirSearchPrefsType;
      TravelerInfoSummary?: TravelerInfoSummaryType;
    }
    export interface ExchangeTravelPreferencesTPAExtensionsTypeTaxes {
      IsRefundable?: TaxCodeType[];
      Tax?: TaxCodeAmountType[];
    }
    export interface ExchangeTravelPreferencesTPAExtensionsTypeExemptAllTaxesAndFees {
      Value?: boolean;
    }
    export interface ExchangeTravelPreferencesTPAExtensionsTypeExemptAllTaxes {
      Value?: boolean;
    }
    export interface ExchangeTravelPreferencesTPAExtensionsType {
      ExemptAllTaxes?: ExchangeTravelPreferencesTPAExtensionsTypeExemptAllTaxes;
      ExemptAllTaxesAndFees?: ExchangeTravelPreferencesTPAExtensionsTypeExemptAllTaxesAndFees;
      ExemptTax?: TaxCodeType[];
      // Overrides settlement method Supported codes: BSP ARC TCH GEN (Generic TAT) RUT (Russian TAT) PRT (Philippines TAT) SAT (SATA) KRY (Killroy)
      SettlementMethod?: string;
      Taxes?: ExchangeTravelPreferencesTPAExtensionsTypeTaxes;
    }
    export interface ExchangeTPAExtensionsType {
      AwardShopping?: AwardShoppingType;
    }
    export interface ExchangeSourceType {
      // Abacus user
      AbacusUser?: boolean;
      // Accounting Code part of Office Accounting Code
      AccountingCode?: string;
      // Agent city
      AgentCity?: string;
      // Agent department code
      AgentDepartmentCode?: string;
      // Agent duty
      AgentDuty?: string;
      // An authority code assigned to a requestor.
      AgentDutyCode?: string;
      // Agent function
      AgentFunction?: string;
      // Agent IATA
      AgentIATA?: string;
      // Identifies the party within the requesting entity.
      AgentSine?: string;
      // Airline Channel Code
      AirlineChannelCode?: string;
      // The IATA assigned airline code.
      AirlineVendorID?: string;
      // The IATA assigned airport code.
      AirportCode?: string;
      BookingChannel?: SourceBookingChannelType;
      // Carrier
      Carrier?: string;
      // CoHostID
      CoHostID?: number;
      DefaultTicketingCarrier?: string;
      // Electronic Reservation Service Provider (ERSP) assigned identifier used to identify the individual using the ERSP system.
      ERSP_UserID?: string;
      // Agency is Eticket capable
      ETicketCapable?: boolean;
      // The point of first departure in a trip.
      FirstDepartPoint?: string;
      // Home agency IATA
      HomeAgencyIATA?: string;
      // PCC Host Carrier
      HostCarrier?: string;
      // The country code of the requesting party.
      ISOCountry?: string;
      // The currency code in which the reservation will be ticketed.
      ISOCurrency?: string;
      // Main travel agency PCC
      MainTravelAgencyPCC?: string;
      // Office Code part of Office Accounting Code
      OfficeCode?: string;
      // City code part of Office Accounting Code
      PersonalCityCode?: string;
      // An identification code assigned to an office/agency by a reservation system.
      PseudoCityCode?: string;
      // Travel agency IATA
      TravelAgencyIATA?: string;
      // Vendor CRS code
      VendorCRSCode?: string;
    }
    export interface ExchangeSettingsType {
      // If set to ''true'', adds exchange-specific information to the response. The information includes richer Tax elements, ReissueVsExchange attribute and currency conversion rates.
      AttachExchangeInfo?: boolean;
      // Enables branded results (if brands are available for returned options)
      BrandedResults?: boolean;
      // Hints MIP that it should return options within this amount of time (in seconds),Used to specify if the request is an usual Exchange request (basic) or an Exchange Context Shopping request (context). When not specified, basic is assumed.
      MIPTimeoutThreshold?: number;
      ReissueExchange?: string;
      // If set to ''false'', disables processing of Current Itin path.
      RepriceCurrentItin?: boolean;
      RequestType?: string;
    }
    export interface ExchangePOSType {
      Source?: ExchangeSourceType;
    }
    export interface ExchangeOriginDestinationInformationTypeTotalTravelTime {
      Max?: number;
      Min?: number;
    }
    export interface ExchangeOriginDestinationInformationTypeSisterOriginMileage {
      AllowBorderCross?: boolean;
      // "Code" can be "ARUNK", "O" for normal, or "X" for connection.
      Number?: number;
    }
    export interface ExchangeOriginDestinationInformationTypeSisterDestinationMileage {
      AllowBorderCross?: boolean;
      Number?: number;
    }
    export interface ExchangeOriginDestinationInformationTypeNumOneWayOptions {
      Number?: number;
    }
    export interface ExchangeOriginDestinationInformationTypeMaxOneWayOptions {
      Value?: number;
    }
    export interface ExchangeOriginDestinationInformationTypeDateFlexibility {
      // Number of alternate dates after requested travel date.
      Minus?: number;
      // Number of alternate dates before and after requested travel date.
      NbrOfDays?: number;
      // Number of alternate dates before requested travel date.
      Plus?: number;
      // This attribute enables the date tolerance in Calendar Cross Mode. Shopping will combine X dates (instead of just 1) from this leg with all dates from other leg. X value is derived from rule setting.
      Tolerance?: boolean;
      // Flag telling if dates within the specified range should be processed in the validate path.
      Validate?: boolean;
    }
    export interface ExchangeOriginDestinationInformationTypeConnectionTime {
      // Enable excluded connection time (default: true)
      EnableExcludedConnection?: boolean;
      // Excluded connection time begin in format HHMM
      ExcludedConnectionBegin?: string;
      // Excluded connection time end in format HHMM
      ExcludedConnectionEnd?: string;
      Max?: number;
      Min?: number;
    }
    export interface ExchangeOriginDestinationInformationTypeAlternateTime {
      // Maximum number of hours before desired time.
      Minus?: number;
      // Maximum number of hours after desired time.
      Plus?: number;
      // Maximum time difference between actual and desired time.
      PlusMinus?: number;
    }
    export interface ExchangeOriginDestinationInformationType {
      AlternateTime?: ExchangeOriginDestinationInformationTypeAlternateTime;
      // This date should be of the form YYYY-MM-DDTHH:MM:SS
      ArrivalDateTime?: string;
      ArrivalDates?: TravelDateTimeTypeArrivalDates;
      // This should be of the form HHMMHHMM.
      ArrivalWindow?: string;
      CabinPref?: CabinPrefType;
      ConnectionLocations?: ConnectionType;
      ConnectionTime?: ExchangeOriginDestinationInformationTypeConnectionTime;
      DateFlexibility?: ExchangeOriginDestinationInformationTypeDateFlexibility[];
      // This date should be of the form YYYY-MM-DDTHH:MM:SS
      DepartureDateTime?: string;
      DepartureDates?: TravelDateTimeTypeDepartureDates;
      // This should be of the form HHMMHHMM.
      DepartureWindow?: string;
      DestinationLocation?: OriginDestinationInformationTypeDestinationLocation;
      Flight?: ExchangeOriginDestinationFlightType[];
      MaxOneWayOptions?: ExchangeOriginDestinationInformationTypeMaxOneWayOptions;
      NumOneWayOptions?: ExchangeOriginDestinationInformationTypeNumOneWayOptions;
      OriginLocation?: OriginDestinationInformationTypeOriginLocation;
      SegmentType?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier;
      SisterDestinationLocation?: RequestSpecifiedLocationType[];
      SisterDestinationMileage?: ExchangeOriginDestinationInformationTypeSisterDestinationMileage;
      SisterOriginLocation?: RequestSpecifiedLocationType[];
      SisterOriginMileage?: ExchangeOriginDestinationInformationTypeSisterOriginMileage;
      TotalTravelTime?: ExchangeOriginDestinationInformationTypeTotalTravelTime;
    }
    export interface ExchangeOriginDestinationFlightTypeFareAdjustment {
      // Currency of Adjustment's Value
      Currency?: string;
      // Markup/Discount Group
      Group?: number;
      // Adjustment Value, can be positive or negative, number or percentage
      Value?: string;
    }
    export interface ExchangeOriginDestinationFlightTypeFare {
      Adjustment?: ExchangeOriginDestinationFlightTypeFareAdjustment;
      // Fare amount (note: last Flight in Fare Component)
      Amount?: number;
      // Fare basis code
      BasisCode?: string;
      // Used to indicate brand code
      BrandID?: string;
      // Fare component number
      ComponentNo?: number;
      ProgramID?: number;
      // Rule Number (note: last Flight in Fare Component)
      RuleNumber?: string;
      // Fare Source Vendor (note: last Flight in Fare Component)
      SourceVendor?: string;
      // Tariff (note: last Flight in Fare Component)
      Tariff?: string;
      // Vendor (note: last Flight in Fare Component)
      Vendor?: string;
    }
    export interface ExchangeOriginDestinationFlightType {
      Airline?: AirlineType;
      // Arrival date and time
      ArrivalDateTime?: string;
      // Booking date and time
      BookingDateTime?: string;
      // Class of service
      ClassOfService?: string;
      // Departure date and time
      DepartureDateTime?: string;
      DestinationLocation?: RequestLocationType;
      Fare?: ExchangeOriginDestinationFlightTypeFare;
      // Specify whether the flight is flown.
      Flown?: boolean;
      // Marriage status,Flight type (A: Air Segment, K: ARUNK, O: Open Segment)
      MarriageStatus?: string;
      MileageDisplay?: MileageDisplayType[];
      // Flight number
      Number?: number;
      OriginLocation?: RequestLocationType;
      PlusUp?: PlusUpType[];
      Reservation?: ReservationType;
      SideTrip?: SideTripType;
      Surcharge?: SurchargeType[];
      Type?: string;
    }
    export interface ExchangeFareType {
      // Base fare amount
      BaseFareAmount?: number;
      // Base fare currency
      BaseFareCurrency?: string;
      // Fare calc currency
      FareCalcCurrency?: string;
      // Non-refundable Base Fare Amount. Currency is defined by @BaseFareCurrency.
      NonRefundableAmount?: number;
      // Rate of Exchange override (note: doesn't need to be specified if FareCalc currency and BaseFare currency is the same).
      ROE?: number;
      // Validating carrier
      ValidatingCarrier?: string;
    }
    export interface ExchangeAirSearchPrefsType {
      TPA_Extensions?: ExchangeTravelPreferencesTPAExtensionsType;
      // Request itins that are validated on base of interline ticketing aggrement.
      ValidInterlineTicket?: boolean;
    }
    export interface EquipmentTypePref {
      AirEquipType?: string;
      // Indicates there is an equipment change.
      ChangeofGauge?: boolean;
      // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).
      PreferLevel?: string;
      // Specify if equipment should have a wide body or not.
      WideBody?: boolean;
      content?: string;
    }
    export interface EmailType {
      DefaultInd?: boolean;
      EmailType?: string;
      // value="Inherit" Permission for sharing data for marketing purposes.
      ShareMarketInd?: string;
      // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
      ShareSynchInd?: string;
      content?: string;
    }
    export interface DocumentType {
      // Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
      BirthDate?: string;
      // Specify document holder name.
      DocHolderName?: string;
      // Unique number assigned by authorities to document.
      DocID?: string;
      // Indicates the group or association that granted the document.
      DocIssueAuthority?: string;
      // Indicates the location where the document was issued.
      DocIssueLocation?: string;
      DocLimitations?: string[];
      DocType?: string;
      // Indicates the starting date.
      EffectiveDate?: string;
      // Indicates the ending date.
      ExpireDate?: string;
      Gender?: string;
      // value="Inherit" Permission for sharing data for marketing purposes.
      ShareMarketInd?: string;
      // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
      ShareSynchInd?: string;
    }
    export interface DiversityControlTypeLowFareBucket {
      FareCutOff?: string;
      Options?: string;
    }
    export interface DiversityControlTypeDimensionsTimeOfDayDistributionRange {
      Begin?: string;
      End?: string;
      Options?: string;
    }
    export interface DiversityControlTypeDimensionsTimeOfDayDistribution {
      Direction?: string;
      Endpoint?: string;
      Leg?: number;
      Range?: DiversityControlTypeDimensionsTimeOfDayDistributionRange[];
    }
    export interface DiversityControlTypeDimensionsTimeOfDay {
      Distribution?: DiversityControlTypeDimensionsTimeOfDayDistribution[];
      Weight?: number;
    }
    export interface DiversityControlTypeDimensionsStopsNumber {
      Weight?: number;
    }
    export interface DiversityControlTypeDimensionsOperatingDuplicate {
      PreferredCarrier?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier[];
      Weight?: number;
    }
    export interface DiversityControlTypeDimensionsInboundOutboundPairing {
      Duplicates?: number;
      Weight?: number;
    }
    export interface DiversityControlTypeDimensionsCarrierOverride {
      Code?: string;
      Options?: string;
    }
    export interface DiversityControlTypeDimensionsCarrierDefault {
      Options?: string;
    }
    export interface DiversityControlTypeDimensionsCarrier {
      Default?: DiversityControlTypeDimensionsCarrierDefault;
      OnlineIndicator?: boolean;
      Override?: DiversityControlTypeDimensionsCarrierOverride[];
      Weight?: number;
    }
    export interface DiversityControlTypeDimensions {
      Carrier?: DiversityControlTypeDimensionsCarrier;
      InboundOutboundPairing?: DiversityControlTypeDimensionsInboundOutboundPairing;
      OperatingDuplicate?: DiversityControlTypeDimensionsOperatingDuplicate;
      PriceWeight?: number;
      StopsNumber?: DiversityControlTypeDimensionsStopsNumber;
      TimeOfDay?: DiversityControlTypeDimensionsTimeOfDay;
      TravelTime?: DiversityControlTypeDimensionsStopsNumber;
    }
    export interface DiversityControlType {
      Dimensions?: DiversityControlTypeDimensions;
      LowFareBucket?: DiversityControlTypeLowFareBucket;
    }
    export interface DepartureDaysType {
      // Value format: First letter of the name of the day or '_', eg. 'SMT___S' means we are interested in departing at Saturday, Sunday, Monday or Tuesday. Even if there are schedules for Wednesday, Thursday or Friday, they won't be returned in ISell response.
      Value?: string;
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
    export interface CountryNameType {
      // ISO 3166 code for a country.
      Code?: string;
      content?: string;
    }
    export interface ConnectionTypeConnectionLocation {
      // IATA Airport Code indicating connection location, stop, origin or destination.
      LocationCode?: string;
      // The preference level for the airport. Available levels: Only, Unacceptable.
      PreferLevel?: string;
      content?: string;
    }
    export interface ConnectionType {
      ConnectionLocation?: ConnectionTypeConnectionLocation[];
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
    export interface CompanyNamePrefType {
      // Identifies a company by the company code.
      Code?: string;
      // Identifies the context of the identifying code, such as DUNS, IATA or internal code, etc.
      CodeContext?: string;
      // Used for Character Strings, length 1 to 64
      CompanyShortName?: string;
      // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).
      PreferLevel?: string;
      // Refer to OTA Code List Travel Sector (TVS).,Specifies what type of carrier it applies to.
      TravelSector?: string;
      Type?: string;
      content?: string;
    }
    export interface CodeShareIndicator {
      // Exclude Codeshares
      ExcludeCodeshare?: boolean;
      // Keep onlines
      KeepOnlines?: boolean;
    }
    export interface ClassOfServiceElemType {
      Code?: string;
    }
    export interface CachePartitionType {
      Name?: string;
    }
    export interface CachePartitionGroupType {
      Partition?: CachePartitionType[];
    }

    export type CabinCode = 'Y' | 'S' | 'C' | 'J' | 'F' | 'P'; // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).

    export interface CabinPrefType {
      // Specify cabin type.
      // Y = Economy class cabin. S = Premium economy class cabin. C = Business class cabin. J = Premium business class cabin. F = First class cabin. P = Premium first class cabin.
      Cabin?: CabinCode; // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).
      PreferLevel?: 'Only' | 'Unacceptable' | 'Preferred';
    }
    export interface BrandType {
      Code?: string;
    }
    export interface BrandFiltersTypeNonBrandedFares {
      PreferLevel?: string;
    }
    export interface BrandFiltersType {
      Brand?: BrandCodePrefType[];
      NonBrandedFares?: BrandFiltersTypeNonBrandedFares[];
    }
    export interface BrandedFareIndicatorsBase {
      BrandFilters?: BrandFiltersType;
      KeepLegParityForLowestSingle?: boolean;
      // Return single brand option per itin
      SingleBrandedFare?: boolean;
    }
    export interface BrandCodePrefType {
      // Specify brand code.
      Code?: string;
      PreferLevel?: string;
    }
    export interface BillingInformationType {
      // Used for Character Strings, length 1 to 16
      AAACity?: string;
      ActionCode?: string;
      AgentSineIn?: string;
      PartitionID?: string;
      ServiceName?: string;
      UserBranch?: number;
      UserSetAddress?: string;
      UserStation?: number;
    }
    export interface BaggageType {
      FreePieceRequired?: boolean;
    }
    export interface AwardShoppingType {
      // Enable award shopping.
      Enable?: boolean;
      // Use Redemption Availability Service
      UseRAS?: boolean;
    }
    export interface ArunkType {
      DestinationLocation?: RequestLocationType;
      OriginLocation?: RequestLocationType;
      SideTrip?: SideTripType;
    }
    export interface ApplyResidentDiscountType {
      Ind?: boolean;
    }
    export interface AlternatePCCTypeTravelPreferencesVendorPref {
      // Identifies a company by the company code.
      Code?: string;
      // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).
      PreferLevel?: string;
    }
    export interface AlternatePCCTypeTravelPreferencesTPAExtensions {
      ExcludeAlliancePref?: AllianceType[];
      IncludeAlliancePref?: AllianceType[];
    }
    export interface AlternatePCCTypeTravelPreferences {
      TPA_Extensions?: AlternatePCCTypeTravelPreferencesTPAExtensions;
      VendorPref?: AlternatePCCTypeTravelPreferencesVendorPref[];
    }
    export interface AlternatePCCType {
      // An identification code assigned to an office/agency by a reservation system.
      PseudoCityCode?: string;
      TravelPreferences?: AlternatePCCTypeTravelPreferences;
    }
    export interface AltCitiesCombinationsType {
      // Which destinations to process in live path (All or Main only)
      Destinations?: string;
      // Which origins to process in live path (All or Main only)
      Origins?: string;
    }
    export interface AllianceType {
      // Identifies an alliance by the alliance code.
      Code?: string;
    }
    export interface AirTravelerTypeProfileRef {
      UniqueID?: UniqueIDType;
    }
    export interface AirTravelerTypeFlightSegmentRPHs {
      FlightSegmentRPH?: string[];
    }
    export interface AirTravelerType {
      // Indicates if an infant accompanying a traveler is with or without a seat.,A three-letter code representing passenger type (eg. .ADT. for adult, .CNN. for child)
      AccompaniedByInfant?: boolean;
      Address?: AddressType[];
      // Date of Birth.
      BirthDate?: string;
      // The preferred currency in which monetary amounts should be returned.
      CurrencyCode?: string;
      CustLoyalty?: CustLoyaltyType[];
      Document?: DocumentType[];
      Email?: EmailType[];
      FlightSegmentRPHs?: AirTravelerTypeFlightSegmentRPHs;
      Gender?: string;
      PassengerTypeCode?: string;
      PassengerTypeQuantity?: PassengerTypeQuantityType;
      PersonName?: PersonNameType;
      ProfileRef?: AirTravelerTypeProfileRef;
      // value="Inherit" Permission for sharing data for marketing purposes.
      ShareMarketInd?: string;
      // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
      ShareSynchInd?: string;
      Telephone?: TelephoneType[];
      TravelerRefNumber?: TravelerRefNumberType;
    }
    export interface AirSearchPrefsTypeTPAExtensionsVerificationItinCallLogic {
      // Check availability for repriced itin.
      AlwaysCheckAvailability?: boolean;
      Value?: 'L' | 'B' | 'M';
    }
    export interface AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheckSettlementValidation {
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheckIETValidation {
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheckCountry {
      // 2 character country code as defined in ISO3166.
      Code?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheck {
      Carrier?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier[];
      Country?: AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheckCountry[];
      IETValidation?: AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheckIETValidation;
      SettlementValidation?: AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheckSettlementValidation;
    }
    export interface AirSearchPrefsTypeTPAExtensionsUpperBoundMustPriceFactorForNotNonStp {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsUpperBoundMustPriceFactorForNonStp {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsUpperBoundLFSFactor {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsTripType {
      Value?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsTicketingSumOfLocals {
      // Enable Ticketing Sum of Locals processing.
      Enable?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsTargetMinNumOfLFSTotOnlSolPercent {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsTargetMinNumOfLFSOnlSolPerCrr {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsStpPenaltyInUSD {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsSellingLevelsShowFareAmounts {
      // Show selling level amounts and total adjusted amount in Fare Calc line
      Adjusted?: boolean;
      // Show original selling fare level amounts and total adjusted amount in Fare Calc line
      Original?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsSellingLevelsSellingLevelRules {
      // Force ignore adjustment selling level rules
      Ignore?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsSellingLevels {
      SellingLevelRules?: AirSearchPrefsTypeTPAExtensionsSellingLevelsSellingLevelRules;
      ShowFareAmounts?: AirSearchPrefsTypeTPAExtensionsSellingLevelsShowFareAmounts;
    }
    export interface AirSearchPrefsTypeTPAExtensionsSameTurnaroundAirportOnly {
      // Aircraft type penalty (in dollars). Used to penalize propeller aircraft type in the response.
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsSameOriginAirportOnly {
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsSameConnectionAirportOnly {
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsPreferNDCSourceOnTie {
      Value?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsOptionsPerDatePairList {
      OptionsPerDatePair?: OptionsPerDatePairType[];
    }
    export interface AirSearchPrefsTypeTPAExtensionsOnlineIndicator {
      // If true, only Online itineraries are returned.
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumTripsWithRouting {
      Number?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceSStopOnlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceOnlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStpOnlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStpInrlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStp1StpOnlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStp1StpInrlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPriceInrlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfMustPrice2PlusStpSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsNumOfLowFareSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMultiAirportCodes {
      // Enable open jaw leg combinations.
      EnableOpenJaw?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMinAllowedOveragePerCrrPercent {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMinAllowedOveragePerCrr {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxRelFareLvlOfxForNonStp {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxRelFareLvlOfxForCnx {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxPrice {
      // Used for amounts, max 3 decimals,Restrict content type returned by LFE service.
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxNumOfSingleStpOnlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxNumOfNonStpOnlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxNumOfNonStpInrlSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxNumOf2PlusStpSol {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxAllowedMustPriceOveragePerCrr {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsMaxAllowedLFSOveragePerCrrPercent {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsLowCostCarriersProcessing {
      // Disable low cost carriers processing.
      Disable?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsLongConnectTime {
      Enable?: boolean;
      Max?: number;
      Min?: number;
      NumberOfSolutions?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsLongConnectPoints {
      Max?: number;
      Min?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsJetServiceOnly {
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsItineraryNumberThreshold {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsInterlineIndicator {
      // If true, only Interline itineraries are returned.,Specify air trip type.,Identifies the trip type - one way, return, circle trip, open jaw.
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsForceKeywordRestrictedContent {
      Value?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFltOptMustPriceReuseLimit {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFltOptLFSReuseLimitForNonAVS {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFltOptLFSReuseLimitForAVS {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFlightRestrictions {
      // Avoid last flight of the day.
      AvoidLastFlight?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFlightRepeatLimit {
      // Flight Repeat Limit for DSF. Expected value 1-100.
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFareFocusRules {
      // Exclude fare focus rules.
      Exclude?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsFareAmountThreshold {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsExcludeVendorPref {
      // Identifies a company by the company code.
      Code?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsExcludeCallDirectCarriers {
      // Force DSF to return schedules only for carriers bookable by Sabre.
      Enabled?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDurPenaltyInUSD {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDomesticLayoverTime {
      Hours?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDiversityParametersWeightings {
      // Defines how important price options are on a scale from 0 to 10.
      PriceWeight?: number;
      // Defines how important travel time options are on a scale from 0 to 10.
      TravelTimeWeight?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDiversityParametersTimeOfDayDistributionTimeOfDayRange {
      // Beginning of the TimeOfDayRange in HHMM format.
      Begin?: string;
      // End of the TimeOfDayRange in HHMM format.
      End?: string;
      // Defines how many percent options should be in the TimeOfDayRange.
      Percentage?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDiversityParametersTimeOfDayDistribution {
      TimeOfDayRange?: AirSearchPrefsTypeTPAExtensionsDiversityParametersTimeOfDayDistributionTimeOfDayRange[];
    }
    export interface AirSearchPrefsTypeTPAExtensionsDiversityParameters {
      // Defines how many additional non-stop options should be added to the response. Overrides @Percentage.
      AdditionalNonStopsNumber?: number;
      // Defines how many additional non-stop options should be added to the response as a percentage of the requested number of options.
      AdditionalNonStopsPercentage?: number;
      // Defines the requested ratio of inbounds to outbounds in the response.
      InboundOutboundPairing?: number;
      TimeOfDayDistribution?: AirSearchPrefsTypeTPAExtensionsDiversityParametersTimeOfDayDistribution;
      Weightings?: AirSearchPrefsTypeTPAExtensionsDiversityParametersWeightings;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDepPenaltyInUSD {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsDataSources {
      // Toggle processing of ATPCO data source.
      ATPCO?: string;
      // Toggle processing of Low Cost Carriers data source.
      LCC?: string;
      // Toggle processing of New Distribution Capability data source.
      NDC?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsCountryPref {
      // 2 character country code as defined in ISO3166.
      Code?: string;
      PreferLevel?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsContentType {
      Type?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsBudget {
      // Maximum price to include in response
      MaximumPrice?: string;
      // Minimum price to include in response
      MinimumPrice?: string;
      // Relative price difference threshold to be respected while choosing alternative options
      RelativePriceThreshold?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsAvsPenaltyCrrs {
      Value?: string;
    }
    export interface AirSearchPrefsTypeTPAExtensionsAlternateAirportPenalty {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsAirServiceOnly {
      Ind?: boolean;
    }
    export interface AirSearchPrefsTypeTPAExtensionsAircraftTypePenalty {
      Value?: number;
    }
    export interface AirSearchPrefsTypeTPAExtensionsAdditionalFareLimit {
      // Additional fare limit.
      Value?: number;
    }
    export interface   AirSearchPrefsTypeTPAExtensions {
      AdditionalFareLimit?: AirSearchPrefsTypeTPAExtensionsAdditionalFareLimit;
      AirServiceOnly?: AirSearchPrefsTypeTPAExtensionsAirServiceOnly;
      AircraftTypePenalty?: AirSearchPrefsTypeTPAExtensionsAircraftTypePenalty;
      AltCitiesCombinations?: AltCitiesCombinationsType;
      AlternateAirportPenalty?: AirSearchPrefsTypeTPAExtensionsAlternateAirportPenalty;
      // This should be of the form HHMMHHMM.
      ArrivalWindow?: string;
      Budget?: AirSearchPrefsTypeTPAExtensionsBudget;
      ClassOfService?: ClassOfServiceElemType[];
      CodeShareIndicator?: CodeShareIndicator;
      ContentType?: AirSearchPrefsTypeTPAExtensionsContentType;
      CountryPref?: AirSearchPrefsTypeTPAExtensionsCountryPref[];
      DataSources?: AirSearchPrefsTypeTPAExtensionsDataSources;
      // This should be of the form HHMMHHMM.
      DepartureWindow?: string;
      DiversityParameters?: AirSearchPrefsTypeTPAExtensionsDiversityParameters;
      DomesticLayoverTime?: AirSearchPrefsTypeTPAExtensionsDomesticLayoverTime;
      ExcludeAlliancePref?: AllianceType[];
      ExcludeCallDirectCarriers?: AirSearchPrefsTypeTPAExtensionsExcludeCallDirectCarriers;
      ExcludeVendorPref?: AirSearchPrefsTypeTPAExtensionsExcludeVendorPref[];
      ExemptAllTaxes?: ExchangeTravelPreferencesTPAExtensionsTypeExemptAllTaxes;
      ExemptAllTaxesAndFees?: ExchangeTravelPreferencesTPAExtensionsTypeExemptAllTaxesAndFees;
      ExemptTax?: TaxCodeType[];
      FareAmountThreshold?: AirSearchPrefsTypeTPAExtensionsFareAmountThreshold;
      FareBasis?: FareBasisType[];
      FareFocusRules?: AirSearchPrefsTypeTPAExtensionsFareFocusRules;
      FareType?: FareTypePrefType[];
      FlexibleFares?: FlexibleFaresType;
      FlightRepeatLimit?: AirSearchPrefsTypeTPAExtensionsFlightRepeatLimit;
      FlightRestrictions?: AirSearchPrefsTypeTPAExtensionsFlightRestrictions;
      FlightStopsAsConnections?: FlightStopsAsConnectionsType;
      ForceKeywordRestrictedContent?: AirSearchPrefsTypeTPAExtensionsForceKeywordRestrictedContent;
      GoverningCarrierOverride?: GoverningCarrierOverrideType;
      IncludeAlliancePref?: AllianceType[];
      InterlineIndicator?: AirSearchPrefsTypeTPAExtensionsInterlineIndicator;
      ItineraryNumberThreshold?: AirSearchPrefsTypeTPAExtensionsItineraryNumberThreshold;
      JetServiceOnly?: AirSearchPrefsTypeTPAExtensionsJetServiceOnly;
      JumpCabinLogic?: JumpCabinLogicType;
      KeepSameCabin?: KeepSameCabinType;
      LongConnectPoints?: AirSearchPrefsTypeTPAExtensionsLongConnectPoints;
      LongConnectTime?: AirSearchPrefsTypeTPAExtensionsLongConnectTime;
      LowCostCarriersProcessing?: AirSearchPrefsTypeTPAExtensionsLowCostCarriersProcessing;
      MaxPrice?: AirSearchPrefsTypeTPAExtensionsMaxPrice;
      MultiAirportCodes?: AirSearchPrefsTypeTPAExtensionsMultiAirportCodes;
      NumTrips?: NumTripsType;
      NumTripsWithRouting?: AirSearchPrefsTypeTPAExtensionsNumTripsWithRouting;
      OnlineIndicator?: AirSearchPrefsTypeTPAExtensionsOnlineIndicator;
      OptionsPerDatePairList?: AirSearchPrefsTypeTPAExtensionsOptionsPerDatePairList;
      PreferNDCSourceOnTie?: AirSearchPrefsTypeTPAExtensionsPreferNDCSourceOnTie;
      RetailerRules?: RetailerRulesType;
      SameConnectionAirportOnly?: AirSearchPrefsTypeTPAExtensionsSameConnectionAirportOnly;
      SameOriginAirportOnly?: AirSearchPrefsTypeTPAExtensionsSameOriginAirportOnly;
      SameTurnaroundAirportOnly?: AirSearchPrefsTypeTPAExtensionsSameTurnaroundAirportOnly;
      SellingLevels?: AirSearchPrefsTypeTPAExtensionsSellingLevels;
      // Overrides settlement method Supported codes: BSP ARC TCH GEN (Generic TAT) RUT (Russian TAT) PRT (Philippines TAT) SAT (SATA) KRY (Killroy)
      SettlementMethod?: string;
      Taxes?: ExchangeTravelPreferencesTPAExtensionsTypeTaxes;
      TicketingSumOfLocals?: AirSearchPrefsTypeTPAExtensionsTicketingSumOfLocals;
      TripType?: AirSearchPrefsTypeTPAExtensionsTripType;
      ValidatingCarrier?: ValidatingCarrierType;
      ValidatingCarrierCheck?: AirSearchPrefsTypeTPAExtensionsValidatingCarrierCheck;
      VerificationItinCallLogic?: AirSearchPrefsTypeTPAExtensionsVerificationItinCallLogic;
      XOFares?: XOFaresType;
      avsPenaltyCrrs?: AirSearchPrefsTypeTPAExtensionsAvsPenaltyCrrs;
      depPenaltyInUSD?: AirSearchPrefsTypeTPAExtensionsDepPenaltyInUSD;
      durPenaltyInUSD?: AirSearchPrefsTypeTPAExtensionsDurPenaltyInUSD;
      fltOptLFSReuseLimitForAVS?: AirSearchPrefsTypeTPAExtensionsFltOptLFSReuseLimitForAVS;
      fltOptLFSReuseLimitForNonAVS?: AirSearchPrefsTypeTPAExtensionsFltOptLFSReuseLimitForNonAVS;
      fltOptMustPriceReuseLimit?: AirSearchPrefsTypeTPAExtensionsFltOptMustPriceReuseLimit;
      maxAllowedLFSOveragePerCrrPercent?: AirSearchPrefsTypeTPAExtensionsMaxAllowedLFSOveragePerCrrPercent;
      maxAllowedMustPriceOveragePerCrr?: AirSearchPrefsTypeTPAExtensionsMaxAllowedMustPriceOveragePerCrr;
      maxNumOf2PlusStpSol?: AirSearchPrefsTypeTPAExtensionsMaxNumOf2PlusStpSol;
      maxNumOfNonStpInrlSol?: AirSearchPrefsTypeTPAExtensionsMaxNumOfNonStpInrlSol;
      maxNumOfNonStpOnlSol?: AirSearchPrefsTypeTPAExtensionsMaxNumOfNonStpOnlSol;
      maxNumOfSingleStpOnlSol?: AirSearchPrefsTypeTPAExtensionsMaxNumOfSingleStpOnlSol;
      maxRelFareLvlOfxForCnx?: AirSearchPrefsTypeTPAExtensionsMaxRelFareLvlOfxForCnx;
      maxRelFareLvlOfxForNonStp?: AirSearchPrefsTypeTPAExtensionsMaxRelFareLvlOfxForNonStp;
      minAllowedOveragePerCrr?: AirSearchPrefsTypeTPAExtensionsMinAllowedOveragePerCrr;
      minAllowedOveragePerCrrPercent?: AirSearchPrefsTypeTPAExtensionsMinAllowedOveragePerCrrPercent;
      numOfLowFareSol?: AirSearchPrefsTypeTPAExtensionsNumOfLowFareSol;
      numOfMustPrice2PlusStpSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPrice2PlusStpSol;
      numOfMustPriceInrlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceInrlSol;
      numOfMustPriceNStp1StpInrlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStp1StpInrlSol;
      numOfMustPriceNStp1StpOnlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStp1StpOnlSol;
      numOfMustPriceNStpInrlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStpInrlSol;
      numOfMustPriceNStpOnlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceNStpOnlSol;
      numOfMustPriceOnlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceOnlSol;
      numOfMustPriceSStopOnlSol?: AirSearchPrefsTypeTPAExtensionsNumOfMustPriceSStopOnlSol;
      stpPenaltyInUSD?: AirSearchPrefsTypeTPAExtensionsStpPenaltyInUSD;
      targetMinNumOfLFSOnlSolPerCrr?: AirSearchPrefsTypeTPAExtensionsTargetMinNumOfLFSOnlSolPerCrr;
      targetMinNumOfLFSTotOnlSolPercent?: AirSearchPrefsTypeTPAExtensionsTargetMinNumOfLFSTotOnlSolPercent;
      upperBoundLFSFactor?: AirSearchPrefsTypeTPAExtensionsUpperBoundLFSFactor;
      upperBoundMustPriceFactorForNonStp?: AirSearchPrefsTypeTPAExtensionsUpperBoundMustPriceFactorForNonStp;
      upperBoundMustPriceFactorForNotNonStp?: AirSearchPrefsTypeTPAExtensionsUpperBoundMustPriceFactorForNotNonStp;
    }
    export interface AirSearchPrefsTypeSpanishFamilyDiscount {
      // Spanish Large Family Discount Level. Valid values are 1 or 2.
      Level?: number;
    }
    export interface AirSearchPrefsTypeFrequentFlyer {
      // Airline Carrier Code
      AirlineCode?: string;
      // Frequent Flyer Status
      Status?: number;
    }
    export interface AirSearchPrefsTypeFareRestrictPref {
      AdvResTicketing?: AdvResTicketingType;
      // Refer to OTA Code List Fare Restriction (FAR).
      FareRestriction?: string;
      // Used to specify a preference level for something that is or will be requested (eg. a supplier of a service, a type of service, a form of payment, etc.).
      PreferLevel?: string;
      StayRestrictions?: StayRestrictionsType;
      VoluntaryChanges?: VoluntaryChangesType;
    }
    export interface AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier {
      Code?: string;
    }
    export interface AirSearchPrefsTypeCommissionCodeQualifiers {
      CommissionCodeQualifier?: AirSearchPrefsTypeCommissionCodeQualifiersCommissionCodeQualifier[];
    }
    export interface AirSearchPrefsTypeBaggage {
      // Turns on additional text output in response, see Description1 (D01) and Description2 (D02) in response.,Free baggage piece is required on the whole journey.
      Description?: boolean;
      FreePieceRequired?: boolean;
      RequestType?: string;
      // Number of baggage pieces requested,Determines type of baggage processing result.
      RequestedPieces?: number;
    }
    export interface AirSearchPrefsTypeAncillaryFeesAncillaryFeeGroup {
      // Group code
      Code?: string;
      // Number of items
      Count?: string;
    }
    export interface AirSearchPrefsTypeAncillaryFees {
      AncillaryFeeGroup?: AirSearchPrefsTypeAncillaryFeesAncillaryFeeGroup[];
      // Enable Ancillary Fees processing path.
      Enable?: boolean;
      // Flag whether this is a summary request.
      Summary?: boolean;
    }
    export interface AirSearchPrefsType {
      // Return flights not combinable into roundtrips as one ways is a separate section.
      AllFlightsData?: boolean;
      AncillaryFees?: AirSearchPrefsTypeAncillaryFees;
      Baggage?: AirSearchPrefsTypeBaggage;
      CabinPref?: CabinPrefType[];
      CommissionCodeQualifiers?: AirSearchPrefsTypeCommissionCodeQualifiers;
      // Request flights that are e-ticketable in the response.
      ETicketDesired?: boolean;
      EquipPref?: EquipmentTypePref[];
      FareRestrictPref?: AirSearchPrefsTypeFareRestrictPref[];
      FlightTypePref?: FlightTypePrefType;
      FrequentFlyer?: AirSearchPrefsTypeFrequentFlyer[];
      // If false no solutions priced outside of ATSE systems will be returned in response for carriers operating in hybrid content distribution model.
      Hybrid?: boolean;
      InterlineBrands?: InterlineBrandsType;
      // If false no alternative solutions will be returned in response
      LookForAlternatives?: boolean;
      // Request flights that have no more than the requested number of stops.
      MaxStopsQuantity?: number;
      // Request for flights in response that meet the given Department of Transport on-time rate. This is a number between 0 and 100.
      OnTimeRate?: number;
      SmokingAllowed?: boolean;
      SpanishFamilyDiscount?: AirSearchPrefsTypeSpanishFamilyDiscount;
      TPA_Extensions?: AirSearchPrefsTypeTPAExtensions;
      TicketDistribPref?: TicketDistribPrefType[];
      // Define on which legs each flight should appear at least once.
      UseAllFlights?: string;
      // Request options that are validated on base of interline ticketing aggrement.
      ValidInterlineTicket?: boolean;
      VendorPref?: CompanyNamePrefType[];
      VendorPrefApplicability?: VendorPrefApplicabilityType[];
      VendorPrefPairing?: VendorPrefPairingType[];
    }
    export interface AirlineType {
      // Marketing airline code
      Marketing?: string;
      // Operating airline code
      Operating?: string;
    }
    export interface AdvResTicketingTypeAdvTicketing {
      // A length of time expressed as either an amount of time or the number of occurrences of a day of the week before departure that a ticket must be purchased.
      FromDepartPeriod?: string;
      // The time of day prior to departure when the ticket must be purchased.
      FromDepartTimeOfDay?: string;
      // The unit of elapsed time or the day of the week to be applied to the the period before departure that a ticket must be purchased.
      FromDepartUnit?: string;
      // A length of time expressed as either an amount of time or the number of occurrences of a day of the week after reservations are made that a ticket must be purchased.
      FromResPeriod?: string;
      // The time of day after reservations are made by which a ticket must be purchased.
      FromResTimeOfDay?: string;
      // The unit of elapsed time or the day of the week to be applied to the period after reservation are made that a ticket must be purchased.
      FromResUnit?: string;
    }
    export interface AdvResTicketingTypeAdvReservation {
      // The amount of elapsed time or number of occurrences of a day of the week before departure needed to satisfy an advance reservation requirement.
      LatestPeriod?: string;
      // The time of day by which reservations must be made on the last day that advance reservations can be made.
      LatestTimeOfDay?: string;
      // The unit of elapsed time or the day of the week to be applied to the LatestPeriod value.
      LatestUnit?: string;
    }
    export interface AdvResTicketingType {
      // Indicator for identifying whether or not advance reservation restrictions are involved in the request or response.
      AdvResInd?: boolean;
      AdvReservation?: AdvResTicketingTypeAdvReservation;
      AdvTicketing?: AdvResTicketingTypeAdvTicketing;
      // Indicator for identifying whether or not advance ticketing restrictions are involved in the request or response.
      AdvTicketingInd?: boolean;
    }
    export interface AddressType {
      AddressLine?: string[];
      // Building name, room, apartment, or suite number.
      BldgRoom?: string;
      // City name eg. Dublin
      CityName?: string;
      CountryName?: CountryNameType;
      // County Name eg. Fairfax
      County?: string;
      // Specifies if the associated data is formatted or not. If true, then it is formatted, if false, then not formatted.
      FormattedInd?: boolean;
      // Post Office Code number.
      PostalCode?: string;
      // value="Inherit" Permission for sharing data for marketing purposes.
      ShareMarketInd?: string;
      // value="Inherit" Permission for sharing data for synchronization of information held by other travel service providers.
      ShareSynchInd?: string;
      StateProv?: StateProvType;
      StreetNmbr?: StreetNmbrType;
      Type?: string;
    }
    export interface OrderStandardBag {
      passengerBags: PassengerBags[];
    }
    export interface Offer {
      offerId: string;
      source: 'ATPCO' | 'LCC' | 'NDC';
      ttl: number;
    }
    export interface OBFeeType {
      amount: number;
      currency: string;
      description?: string;
      id: number;
      type?: string;
    }
    export interface OBFeeIDType {
      ref: number;
    }
    export interface MessageType {
      code?: string;
      severity?: string;
      text?: string;
      type?: string;
      value?: string;
    }
    export interface LegType {
      id?: number;
      schedules: ScheduleType[];
    }
    export interface LegIDType {
      departureDate?: string;
      ref: number;
    }
    export interface LegDescriptionType {
      arrivalLocation?: string;
      departureDate: string;
      departureLocation?: string;
    }
    export interface ItineraryType {
      currentItinerary?: boolean;
      diversitySwapper?: DiversitySwapperType;
      failed?: FailedType;
      id: number;
      itinSource?: string;
      legs?: LegIDType[];
      pricingInformation?: PricingInformationType[];
      pricingSource: string;
      routingItinerary?: boolean;
    }
    export interface ItineraryGroupType {
      groupDescription: GroupDescription;
      itineraries?: ItineraryType[];
      processingMessages?: ProcessingMessageType[];
    }
    export interface IETCountryWOBSP {
      country?: Country[];
    }
    export interface HigherIntermediatePointType {
      amount?: number;
      cabinHigh?: string;
      cabinLow?: string;
      destination?: string;
      fareClassHigh?: string;
      fareClassLow?: string;
      highDestination?: string;
      highOrigin?: string;
      lowDestination?: string;
      lowOrigin?: string;
      mileageSurchargePercentage?: number;
      origin?: string;
    }
    export interface HiddenStopType {
      airMiles?: number;
      airport: string;
      arrivalDateAdjustment?: number;
      arrivalTime?: string;
      city?: string;
      country?: string;
      departureDateAdjustment?: number;
      departureTime?: string;
      elapsedLayoverTime?: number;
      elapsedTime?: number;
      equipment?: string;
      state?: string;
    }
    export interface HandlingMarkupType {
      amount: number;
      description: string;
      extendedDescription: string;
      fareRetailerRule?: boolean;
      hiddenHandlingFee?: boolean;
      nonHiddenHandlingFee?: boolean;
      type: string;
    }
    export interface HandlingMarkupDetailType {
      amountCurrency?: string;
      fareAmountAfterMarkup?: number;
      markupAmount?: number;
      markupHandlingFeeAppId?: string;
      markupRuleItemNumber?: number;
      markupRuleSourcePcc?: string;
      markupTypeCode?: string;
      retailerRuleQualifier?: string;
    }
    export interface GroupedItineraryResponse1 {
      baggageAllowanceDescs?: BaggageAllowanceType[];
      baggageChargeDescs?: BaggageChargeType[];
      brandFeatureDescs?: BrandFeatureType[];
      cacheSourceDescs?: CacheSourceDescType[];
      fareComponentDescs?: FareComponentType[];
      itineraryGroups?: ItineraryGroupType[];
      legDescs?: LegType[];
      messages: MessageType[];
      obFeeDescs?: OBFeeType[];
      scheduleDescs?: ScheduleDescType[];
      scheduleMessages?: ScheduleMessageType[];
      statistics?: StatisticsType;
      taxDescs?: TaxType[];
      taxSummaryDescs?: TaxSummaryType[];
      validatingCarrierDescs?: ValidatingCarrierType[];
      version: string;
    }
    export interface GroupedItineraryResponse {
      groupedItineraryResponse: GroupedItineraryResponse1;
    }
    export interface GroupDescription {
      itineraryType?: string;
      legDescriptions: LegDescriptionType[];
    }
    export interface FareType {
      ancillaryFeeGroup?: AncillaryFeeGroupType;
      divideByParty?: boolean;
      eTicketable?: boolean;
      governingCarriers?: string;
      lastTicketDate?: string;
      offerItemId?: string;
      passengerInfoList: PassengerInfoListElementType[];
      reissue?: boolean;
      reissueText?: string;
      serviceId?: string;
      simultaneousReservation?: boolean;
      spanishFamilyDiscount?: 'A' | 'B' | 'C';
      totalFare?: TotalFareType;
      validatingCarrierCode?: string;
      validatingCarriers?: ValidatingCarrierIDType[];
      vita?: boolean;
    }
    export interface FareSegmentType {
      extraMileageAllowance?: boolean;
      sideTrip?: SideTrip;
      stopover?: boolean;
      stopoverCharge?: number;
      stopoverChargeCurrency?: string;
      surcharges?: SurchargeType[];
      transferCharge?: number;
    }
    export interface FareMessageType {
      carrier?: string;
      code: string;
      info?: string;
      type: string;
      value?: string;
    }
    export interface FareComponentType {
      applicablePricingCategories?: string;
      aslRetailerRuleCode?: string;
      brand?: BrandType;
      corporateIdMatched?: boolean;
      direction?: 'AF' | 'AL' | 'AP' | 'AT' | 'CA' | 'CT' | 'DI' | 'DO' | 'DU' | 'EH' | 'EM' | 'EU' | 'FE' | 'IN' | 'ME' | 'NA' | 'NP' | 'PA' | 'PE' | 'PN' | 'PO' | 'PV' | 'RU' | 'RW' | 'SA' | 'SN' | 'SP' | 'TB' | 'TS' | 'TT' | 'US' | 'WH' | 'XX';
      directionality?: 'FROM' | 'TO';
      displayCategoryType?: string;
      fareAmount: number;
      fareBasisCode: string;
      fareComponentReferenceId?: number;
      fareCurrency: string;
      farePassengerType: string;
      fareTypeBitmap?: string;
      generalRetailerRuleCode?: string;
      governingCarrier?: string;
      handlingMarkupDetails?: HandlingMarkupDetailType[];
      higherIntermediatePoints?: HigherIntermediatePointType[];
      id: number;
      matchedAccountCode?: string;
      mileage?: boolean;
      mileageSurcharge?: number;
      milesAmount?: number;
      negotiatedFare?: boolean;
      notValidAfter?: string;
      notValidBefore?: string;
      oneWayFare?: boolean;
      plusUps?: PlusUpInformationType[];
      privateFare?: boolean;
      publishedFareAmount?: number;
      segments: SegmentsType[];
      ticketDesignator?: string;
      vendorCode?: string;
      webBasedFare?: boolean;
    }
    export interface FareComponentSegmentsType {
      segment?: SegmentType;
      surface?: object;
    }
    export interface FareComponentIDType {
      brandFeatures?: BrandFeatureIDType[];
      // Effective price deviation.
      effectivePriceDeviation?: number;
      // Reference to FareComponentDesc ID.
      ref: number;
      // Segment additional data.
      segments: FareComponentSegmentsType[];
      // Tax summary information.
      taxSummaries?: TaxSummaryIDType[];
      taxes?: TaxIDType[];
      totalFare?: TotalFareType;
    }
    export interface FareComponentBreakdownType {
      // Commission contract family ID.
      contractFamilyId?: number;
      // Commission contract ID.
      contractId?: number;
      // Earned commission amount per fare component.
      earnedFareComponentCommission?: number;
      // Commission amount per fare component.
      fareComponentCommission?: number;
      // Fare Component Reference ID.
      fareComponentReferenceId?: number;
      // Commission method ID.
      methodId?: number;
      // Commission rule family ID.
      ruleFamilyId?: number;
      // Commission rule ID.
      ruleId?: number;
    }
    export interface FailedType {
      // Indicates that the itinerary does not fullfill the Minimum Connect Time requirement. It cannot be sold.
      minimumConnectTime?: boolean;
    }
    export interface Equipment {
      // Change of equipment.
      change?: boolean;
      // Equipment code.
      code?: string;
      // Equipment type for first leg.
      typeForFirstLeg?: string;
      // Equipment type for last leg.
      typeForLastLeg?: string;
    }
    export interface DiversitySwapperType {
      // (Penalty * price / 10) -- by which itineraries are sorted in Diversity Swapper.
      weighedPrice: number;
    }
    export interface Departure {
      // Departure Date format 'YYYY-MM-DD'
      date?: string;
      // Departure airport code.
      airport: string;
      // Departure city code.
      city?: string;
      // Departure country code.
      country?: string;
      // Departure state code.
      state?: string;
      // Departure terminal.
      terminal?: string;
      // Departure time.
      time: string;
    }
    export interface CurrencyConversionType {
      // Exchange rate.
      exchangeRate?: number;
      // Exchange rate used for the currency conversion.
      exchangeRateUsed?: number;
      // From.
      from?: string;
      // Conversion overridden.
      overriden?: boolean;
      // To.
      to?: string;
    }
    export interface Country {
      // Country code.
      code: string;
    }
    export interface Charge {
      // Reference to Baggage Charge ID.
      ref: number;
    }
    export interface ChangeFeeType {
      // Change fee amount.
      amount: number;
      // Change fee currency.
      currency: string;
      // Highest change fee indicator.
      highest?: boolean;
      // Change fee not applicable.
      notApplicable?: boolean;
      // Change fee waived.
      waived?: boolean;
    }
    export interface Cat16TextOnly {
      // Fare basis code for the price for this passenger type code (PTC).
      fareBasisCode: string;
      // Fare component ID for which Category 16 contains text only.
      fareComponentId: number;
    }
    export interface Carrier {
      // Consider only these alliances.
      alliances?: string;
      // Basic Booking Request carrier.
      basicBookingRequest?: boolean;
      // Call direct carrier.
      callDirect?: boolean;
      // Code shared carrier.
      codeShared?: string;
      // Disclosure carrier.
      disclosure?: string;
      equipment?: Equipment;
      // Equipment code.
      marketing: string;
      // Marketing flight number.
      marketingFlightNumber: number;
      // Operating carrier.
      operating?: string;
      // Operating flight number.
      operatingFlightNumber?: number;
    }
    export interface CacheSourceDescType {
      // Cache source ID.
      id: number;
      // Indicates source partition of cached itinerary.
      partition: string;
      // Indicates source partition priority of cached itinerary.
      priority?: number;
      // Indicates source version of cached itinerary.
      version?: string;
    }
    export interface Cached {
      // Hours since the option was created and stored in cache (in hours).
      hoursSinceCreation?: number;
      // Reference to Cache source description ID.
      ref: number;
      // Time to live in cache (in minutes).
      timeToLive?: number;
    }
    export interface BrandType {
      // Name of the brand.
      brandName?: string;
      // Two-character code for the brand.
      code: string;
      // rand program code that is returned from the branding service.
      programCode?: string;
      // escription of the program. A program is a set of fare brands with a point of sale and origin and destination that is designed to be marketed with services desirable to customers.
      programDescription?: string;
      // Program code assigned by the system.
      programId?: string;
      // Program code assigned by the system.
      programSystemCode?: string;
    }
    export interface BrandFeatureType {
      // Indicates if the service is free (F), not offered (N), chargeable (C), or displayed but not offered (D).
      application: string;
      // Textual description of the service within the brand.
      commercialName: string;
      // Brand Feature Id.
      id: number;
      // Ancillaries group code.
      serviceGroup: string;
      // Service possible codes. Z- Branded Fares, F-Flight related, T- ticket related ancillary, A- Allowance, P- Prepaid.
      serviceType: string;
      // Three-character alphanumeric code that is filed in the S5 record. This can be an industry sub-code or a carrier defined sub-code.
      subCode: string;
      // Vendor Code or the data provider from where it was taking the information.
      vendor: string;
    }
    export interface BrandFeatureIDType {
      // Reference to BrandFeature ID.
      ref: number;
      // The unique identifier of a service within the context of one message. A service is a feature/service included in a given flight.
      serviceId?: string;
    }
    export interface BookingDetails {
      // Code for the class of service to be used in a search at the itinerary level.
      classOfService?: string;
      mealCodeList?: string;
    }
    export interface BaggageSequenceOrder {
      baggageRef: number;
      standardBag: number;
    }
    export interface BaggageInformationType {
      airlineCode: string;
      allowance?: Allowance;
      charge?: Charge;
      provisionType: 'A' | 'C' | 'B' | 'CC' | 'E' | 'P' | 'EE';
      segments: Segment[];
    }
    export interface BaggageChargeType {
      description1?: string;
      description2?: string;
      equivalentAmount: number;
      equivalentCurrency: string;
      firstPiece?: number;
      id: number;
      lastPiece?: number;
      noChargeNotAvailable?: string;
    }
    export interface BaggageAllowanceType {
      description1?: string;
      description2?: string;
      id: number;
      pieceCount?: number;
      unit?: 'lbs' | 'kg';
      weight?: number;
    }
    export interface Arrival {
      // Arrival Date format 'YYYY-MM-DD'
      date?: string;
      airport: string;
      city?: string;
      country?: string;
      dateAdjustment?: number;
      state?: string;
      terminal?: string;
      time: string;
    }
    export interface AncillaryFeeType {
      code: string;
      details?: AncillaryFeeDetailsType[];
      message?: string;
      name: string;
    }
    export interface AncillaryFeeGroupType {
      ancillaryFees?: AncillaryFeeType[];
      message?: string;
      orderStandardBag?: OrderStandardBag;
    }
    export interface AncillaryFeeDetailsType {
      amount: number;
      ancillaryTypeCode?: 'F' | 'P';
      baggageId?: number;
      carrier: string;
      code: string;
      departureDate?: string;
      description?: string;
      destination: string;
      endSegment: number;
      origin: string;
      startSegment: number;
      subcode?: string;
    }
    export interface Allowance {
      ref: number;
    }
  }
  