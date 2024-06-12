// Define the array of tags used in QRIS
export default [
    // Basic tags without children
    { id: '00', name: 'payload_format_indicator' },
    { id: '01', name: 'point_of_initiation_method' },
    { id: '02', name: 'merchant_principal_visa' },
    { id: '04', name: 'merchant_principal_mastercard' },
    
    // Merchant information tags with children
    {
        id: '26',
        name: 'merchant_information_26',
        children: [
            { id: '00', name: 'global_unique_identifier' },
            { id: '01', name: 'merchant_pan' },
            { id: '02', name: 'merchant_id' },
            { id: '03', name: 'merchant_criteria' },
        ],
    },
    {
        id: '27',
        name: 'merchant_information_27',
        children: [
            { id: '00', name: 'global_unique_identifier' },
            { id: '01', name: 'merchant_pan' },
            { id: '02', name: 'merchant_id' },
            { id: '03', name: 'merchant_criteria' },
        ],
    },
    {
        id: '50',
        name: 'merchant_information_50',
        children: [
            { id: '00', name: 'global_unique_identifier' },
            { id: '01', name: 'merchant_pan' },
            { id: '02', name: 'merchant_id' },
            { id: '03', name: 'merchant_criteria' },
        ],
    },
    {
        id: '51',
        name: 'merchant_information_51',
        children: [
            { id: '00', name: 'global_unique_identifier' },
            { id: '01', name: 'merchant_pan' },
            { id: '02', name: 'merchant_id' },
            { id: '03', name: 'merchant_criteria' },
        ],
    },
    
    // Other tags
    { id: '52', name: 'mcc' },
    { id: '53', name: 'transaction_currency' },
    { id: '54', name: 'transaction_amount' },
    { id: '55', name: 'tip_indicator' },
    { id: '56', name: 'fixed_tip_amount' },
    { id: '57', name: 'percentage_tip_amount' },
    { id: '58', name: 'country_code' },
    { id: '59', name: 'merchant_name' },
    { id: '60', name: 'merchant_city' },
    { id: '61', name: 'merchant_postal_code' },
    
    // Additional data tag with children
    {
        id: '62',
        name: 'additional_data',
        children: [
            { id: '00', name: 'billing_ide' },
            { id: '01', name: 'bill_number' },
            { id: '02', name: 'mobile_number' },
            { id: '03', name: 'store_label' },
            { id: '04', name: 'loyalty_number' },
            { id: '05', name: 'reference_label' },
            { id: '06', name: 'customer_label' },
            { id: '07', name: 'terminal_label' },
            { id: '08', name: 'purpose_of_transaction' },
            { id: '09', name: 'additional_consumer_data' },
            { id: '10', name: 'merchant_tax_id' },
            { id: '11', name: 'merchant_channel' },
            { id: '09', name: 'additional_consumer_data' }, // Duplicate entry
        ],
    },
    { id: '63', name: 'crc' },
];