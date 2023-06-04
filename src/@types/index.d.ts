interface CurrencyCard {
    coinType: string,
    amount: number,
    power: number | 0,
    imgSrc: string,
    color: string,
    total: number | 0,
    update: any
}

interface AccountCard {
    title: string,
    amount: number,
    icon: ReactNode,
    color: string
}

declare module "utils"
