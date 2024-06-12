// Import the tagsArray from the tags module
import tagsArray from './helpers/tags.js'

// Function to decode the QRIS payload
export function decodeFromString(qrisPayload) {
    const data = {};

    // Function to parse the QRIS payload
    const parse = (tags, qrPayload, parent) => {
        let index = 0;

        // Loop through the QR payload
        while (index < qrPayload.length) {
            const qr = qrPayload.substring(index);
            const tagId = qr.substring(0, 2);
            const tagValueLength = Number(qr.substring(2, 4));
            let tagValue = qr.substring(4, 4 + tagValueLength);

            // Find the tag in the tags array
            const findTag = tags.find(tag => tag.id === tagId);
            if (findTag) {
                if (findTag.children) {
                    // If the tag has children, initialize a nested object and recurse
                    data[findTag.name] = {};
                    parse(findTag.children, tagValue, findTag.name);
                } else {
                    // Decode the tag value if necessary
                    tagValue = decodeTagValue(findTag.name, tagValue);

                    // Assign the tag value to the data object
                    if (parent) {
                        data[parent] = {
                            ...data[parent],
                            [findTag.name]: tagValue,
                        };
                    } else {
                        data[findTag.name] = tagValue;
                    }
                }
            }

            // Move to the next tag in the QR payload
            index += tagValueLength + 4;
        }
    };

    // Function to decode specific tag values based on their names
    const decodeTagValue = (tagName, value) => {
        switch (tagName) {
            case 'point_of_initiation_method':
                return value === '11' ? 'STATIC' : value === '12' ? 'DYNAMIC' : value;
            case 'transaction_currency':
                return value === '360' ? 'RUPIAH' : value;
            case 'tip_indicator':
                return value === '01' ? 'INPUT_TIP' :
                       value === '02' ? 'FIXED_TIP' :
                       value === '03' ? 'FIXED_TIP_PERCENTAGE' : value;
            case 'fixed_tip_amount':
            case 'transaction_amount':
            case 'percentage_tip_amount':
                return Number(value);
            default:
                return value;
        }
    };

    // Start parsing the QRIS payload
    parse(tagsArray, qrisPayload);
    return data;
};