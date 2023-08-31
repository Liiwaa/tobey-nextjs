import { IAddress } from "@/interfaces/components/Address";

export const stringifyAddress = (address: IAddress | undefined) => {
    if(!address) return "---";
    return truncateString(address.address, 6) 
        + "-" +
        truncateString(address.locale, 6) 
        + "-" +
        truncateString(address.region, 6); 
}

function truncateString(str: string, maxLength: number) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.substring(0, maxLength) + '...';
    }
}