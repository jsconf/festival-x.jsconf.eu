const objectPath = require('object-path');

/**
 * Simplifies data from the spreadsheets-API by reducing it to actual values.
 * @param {Object} response -
 * @return {Object} -
 */
function simplifySpreadsheetData(response) {
  return response.sheets.reduce((sheets, {properties, data}) => {
    sheets[properties.title] = data[0].rowData
      .filter(row => row.values)
      .map(row =>
        row.values.map(value => {
          if (!value.effectiveValue) {
            return null;
          } else if (typeof value.effectiveValue.numberValue !== 'undefined') {
            return value.effectiveValue.numberValue;
          } else if (typeof value.effectiveValue.stringValue !== 'undefined') {
            return value.effectiveValue.stringValue;
          }

          throw new Error('neither numberValue nor stringValue exists');
        })
      )
      .filter(row => row.some(value => value !== null));

    return sheets;
  }, {});
}

/**
 * Process (parse) data from a single sheet in the spreadsheet document.
 * @param sheetData
 */
function processSheet(sheetData) {
  const columnNames = sheetData[0];
  const columnTypes = sheetData[1];
  const bodyRows = sheetData.slice(2);

  const columns = parseColumnHeaders(columnNames, columnTypes);

  return bodyRows.map(parseDataRow.bind(null, columns));
}

/**
 * Parses and validates the column-headers.
 * @param columnNames
 * @param columnTypes
 * @return {Column[]}
 */
function parseColumnHeaders(columnNames, columnTypes) {
  const columns = [];
  const columnsByName = {};

  for (let i = 0; i < columnNames.length; i++) {
    const name = columnNames[i];
    const type = columnTypes[i];

    if (!name || name.startsWith('//')) {
      continue;
    }

    const column = {
      dataIndex: i,
      name,
      type
    };

    // validate: make sure there isn't already a column with the same fieldname
    const conflictingColumn = columnsByName[name];
    if (conflictingColumn) {
      throw new Error(
        `⚠️  name-conflict: column "${column.name}" (cell ` +
          `${String.fromCharCode(65 + i)}1) has the same ` +
          `fieldname as column "${conflictingColumn.header}"
           (cell ${String.fromCharCode(65 + conflictingColumn.dataIndex)}1)`
      );
    }

    columnsByName[name] = column;
    columns.push(column);
  }

  return columns;
}

/**
 * Parses a single record from the spreadsheet.
 * @param {Column[]} columns  the column-specifications from the header
 * @param {string[]} row  the data-row from the spreadsheet
 * @returns {Object} the parsed record
 */
function parseDataRow(columns, row) {
  const record = {};

  for (const column of columns) {
    const {dataIndex, name, type} = column;
    let value = row[dataIndex];

    if (typeof value === 'undefined') {
      continue;
    }

    if (type === 'boolean') {
      value = Boolean(value);
    }

    objectPath.set(record, name, value);
  }

  return record;
}

module.exports = {simplifySpreadsheetData, processSheet};
