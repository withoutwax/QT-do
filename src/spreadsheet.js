import config from "./config";

/*
    Load the dates from the spreadsheet
    Get the right values from it and assign.
*/

export function load(callback) {
    window.gapi.client.load('sheets', 'v4', () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                majorDimension: 'COLUMNS',
                range: 'Sheet1!A:R'
            })
            .then(
                response => {
                    const data = response.result.values;
                    const dates = data.map(date => ({
                        date: date
                    })) || [];

                    callback({
                        dates
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}