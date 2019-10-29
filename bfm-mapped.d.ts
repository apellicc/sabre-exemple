import { Override } from 'utils';

export interface ResponseCustomBFM {
    messages: BFM.MessageType[],
    statistics: BFM.StatisticsType,
    itineraryGroups: Array<ItineraryGroupType>
}
export type PricingInformationTypeCustom = Override<BFM.PricingInformationType, {
    fare: Override<BFM.FareType, {
        passengerInfoList: Override<BFM.PassengerInfoListElementType, {
            passengerInfo: Override<BFM.PassengerInformationType, {
                fareComponents: Array <BFM.FareComponentIDType & Omit <BFM.FareComponentType, 'segments'>>;
                taxes: Array <BFM.TaxType>,
                taxSummaries: Array <BFM.TaxSummaryType>,
                obFees: Array <BFM.OBFeeType>,
                baggageInformation: Array <BaggageType & BFM.BaggageInformationType>,
                passengerTotalFare: BFM.PassengerTotalFareType & {
                    token: string
                },
                penaltiesInfo: BFM.PenaltiesType & {
                    token: string
                },
            }>
        }>[],
        validatingCarriers: Array <BFM.ValidatingCarrierType>
    }>
}>

export type BaggageType = BFM.BaggageAllowanceType | BFM.BaggageChargeType

export interface SegmentMapped {
    bookingCode: string,
    cabinCode: string,
    mealCode?: string,
    seatsAvailable?: number,
    availabilityBreak?: boolean,
}

export type Itinerary = Omit <BFM.ItineraryType, 'legs' | 'pricingInformation'> & {
    pricingInformation: Array <PricingInformationTypeCustom>,
    legs: Array <LegDesc>,
}

export type ItineraryGroupType = Override<BFM.ItineraryGroupType, {
    itineraries: Array <Itinerary>
}>

export type SchedulePopulate = ((Omit <BFM.ScheduleType, 'ref'> & BFM.ScheduleDescType) | (Omit <BFM.ScheduleType, 'ref'> & BFM.ScheduleDescType & SegmentMapped));

export interface LegDesc {
    id: number,
    schedules: Array <SchedulePopulate>
}
