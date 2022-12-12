// @types.package.ts
export interface IScreen {
    name: string;
    packages: string[];
}

export interface ICustomer {
    name: string;
    type: string;
    screens: IScreen[];
}

export type ScreenType = {
    screens: IScreen[];
}

export type CustomerType = {
    customers: ICustomer[];
}