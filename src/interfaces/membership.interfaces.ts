export interface ResponseGetCheckoutSession {
    ok:      boolean;
    msg?:    string;
    session: Session;
}

export interface Session {
    id:                                   string;
    object:                               string;
    adaptive_pricing:                     null;
    after_expiration:                     null;
    allow_promotion_codes:                null;
    amount_subtotal:                      number;
    amount_total:                         number;
    automatic_tax:                        AutomaticTax;
    billing_address_collection:           null;
    cancel_url:                           string;
    client_reference_id:                  null;
    client_secret:                        null;
    collected_information:                null;
    consent:                              null;
    consent_collection:                   null;
    created:                              number;
    currency:                             string;
    currency_conversion:                  null;
    custom_text:                          CustomText;
    customer:                             null;
    customer_creation:                    string;
    customer_details:                     null;
    customer_email:                       null;
    expires_at:                           number;
    invoice:                              null;
    invoice_creation:                     null;
    livemode:                             boolean;
    locale:                               null;
    mode:                                 string;
    payment_intent:                       null;
    payment_link:                         null;
    payment_method_collection:            string;
    payment_method_configuration_details: null;
    payment_method_options:               PaymentMethodOptions;
    payment_method_types:                 string[];
    payment_status:                       string;
    permissions:                          null;
    phone_number_collection:              PhoneNumberCollection;
    recovered_from:                       null;
    saved_payment_method_options:         SavedPaymentMethodOptions;
    setup_intent:                         null;
    shipping_address_collection:          null;
    shipping_cost:                        null;
    status:                               string;
    submit_type:                          null;
    subscription:                         null;
    success_url:                          string;
    total_details:                        TotalDetails;
    ui_mode:                              string;
    url:                                  string;
    wallet_options:                       null;
}

export interface AutomaticTax {
    enabled:   boolean;
    liability: null;
    provider:  null;
    status:    null;
}

export interface CustomText {
    after_submit:                null;
    shipping_address:            null;
    submit:                      null;
    terms_of_service_acceptance: null;
}

export interface PaymentMethodOptions {
    card: Card;
}

export interface Card {
    request_three_d_secure: string;
}

export interface PhoneNumberCollection {
    enabled: boolean;
}

export interface SavedPaymentMethodOptions {
    allow_redisplay_filters: string[];
    payment_method_remove:   string;
    payment_method_save:     null;
}

export interface TotalDetails {
    amount_discount: number;
    amount_shipping: number;
    amount_tax:      number;
}

export interface ResponseGetPortalSession {
    ok:      boolean;
    msg?:    string;
    session: PortalSession;
}

export interface PortalSession {
    id:            string;
    object:        string;
    configuration: string;
    created:       number;
    customer:      string;
    flow:          null;
    livemode:      boolean;
    locale:        null;
    on_behalf_of:  null;
    return_url:    string;
    url:           string;
}