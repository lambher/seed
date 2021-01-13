const XLSX = require('node-xlsx');

function getCategories(path, selectColumn) {
    const categories = [];

    const file = XLSX.parse(path);

    file.forEach((sheet) => {
        let line = 0
        sheet.data.forEach((row) => {
            line++;
            let column = 0
            row.forEach((cell) => {
                column++;
                switch (column) {
                    case selectColumn:
                        if (cell !== "") {
                            categories.push(cell);
                        }
                        break;
                }
            });
        });
    })

    return categories;
}