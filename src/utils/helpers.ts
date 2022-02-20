export const shortenAddress = (address: string): string => {
  if (address?.length < 16) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`;
};
