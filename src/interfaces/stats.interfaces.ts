export interface ResponseGetGeneralStats {
    ok:               boolean;
    msg?:             string;
    summaryLastMonth?: SummaryLast;
    summaryLastYear?:  SummaryLast;
}

export interface SummaryLast {
    total:    number;
    obtained: number;
    spent:    number;
}