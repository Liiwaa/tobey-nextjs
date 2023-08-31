export interface IAddress {
    address: string,
    locale: string,
    region: string,
    coordinates: string,
}

export interface AddressDTO {
    address: string,
    locale_id: string,
    locale?: LocaleDTO
    coordinates: string,
}

export interface LocaleDTO {
    value: string,
    region_id: string,
    region: RegionDTO,
}

export interface RegionDTO {
    value: string,
}