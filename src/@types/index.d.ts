interface CurrencyCard {
    coinType: string,
    amount: number,
    power: number | 0,
    imgSrc: string,
    color: string
}

interface AccountCard {
    title: string,
    amount: number,
    icon: ReactNode,
    color: string
}

declare module "utils"
