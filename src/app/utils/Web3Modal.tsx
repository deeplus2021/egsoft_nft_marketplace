export const shortenWalletAddress = (address:string | undefined) => {
    if (!address) return "";
    
    const firstFour = address.slice(0, 4);
    const lastSix = address.slice(-6);
    
    return `${firstFour}...${lastSix}`;
  }