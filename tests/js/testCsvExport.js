QUnit.test('test no header but has extra header row for CSV file', function(assert) {
    $(function() {
        var resultStr = $('#test-table').TableCSVExport({
            header:[],
            columns:['Name','Sat','Sun'],
            extraHeader: 'Id',
            extraData:['zwi"ck','markatto','bcsquire','ksingri'],
            insertBefore: "Name",
            delivery: 'value'
        });

        resultStr = resultStr.replace(/\\/g, '').replace(/"/g, '');

        assert.ok(true, 'assert is doing export and download csv without header row...');
        assert.equal(resultStr.split(',')[0], 'Name', 'the result string expected the true if downloading the csv file successfully');
    });
});

QUnit.test('test no header and no extra header row for CSV file', function(assert) {
    $(function() {
        var resultStr = $('#test-table').TableCSVExport({
            header:[],
            columns:['Name','Sat','Sun'],
            extraHeader: '',
            extraData:['zwi"ck','markatto','bcsquire','ksingri'],
            insertBefore: "Name",
            delivery: 'value'
        });

        resultStr = resultStr.replace(/\\/g, '').replace(/"/g, '');

        assert.ok(true, 'assert is doing export and download csv without header row...');
        assert.equal(resultStr.split(',')[0], 'Name', 'the result string expected the true if downloading the csv file successfully');
    });
});

QUnit.test('test table export csv with download', function(assert) {
    $(function() {
        var resultStr = $('#test-table').TableCSVExport({
            header:['Name','Mon','Tue','Wed','Thr','Fri','Sat','Sun'],
            columns:['Name','Sat','Sun'],
            extraHeader: 'Id',
            extraData:['zwi"ck','markatto','bcsquire','ksingri'],
            insertBefore: "Name",
            delivery: 'download',
            filename: 'download-test.csv'
        });

        assert.ok(true, 'assert is doing export and download csv...');
        assert.equal(resultStr, true, 'the result string expected the true if downloading the csv file successfully');
    });

});

QUnit.test('test table export csv with popup', function(assert) {
    $(function() {
        var resultStr = $('#test-table').TableCSVExport({
            header:['Name','Mon','Tue','Wed','Thr','Fri','Sat','Sun'],
            columns:['Name','Sat','Sun'],
            extraHeader: 'Id',
            extraData:['zwi"ck','markatto','bcsquire','ksingri'],
            insertBefore: "Name",
            delivery: 'popup'
        });

        assert.ok(true, 'assert is doing export and popup the new window to output CSV strings...');
        assert.equal(resultStr, true, 'the result string expected the true if popuping the csv file successfully');
    });
});

QUnit.test('test table export csv with value', function(assert) {
    $(function() {
        var resultStr = $('#test-table').TableCSVExport({
            header:['Name','Mon','Tue','Wed','Thr','Fri','Sat','Sun'],
            columns:['Name','Sat','Sun'],
            extraHeader: 'Id',
            extraData:['zwi"ck','markatto','bcsquire','ksingri'],
            insertBefore: "Name",
            delivery: 'value'
        });

        resultStr = resultStr.replace(/\\/g, '').replace(/"/g, '');

        assert.ok(true, 'assert is doing export and output value csv...');
        assert.equal(resultStr.split(',')[0], 'Id', 'the result string expected the CSV strings');
    });
});

QUnit.test('test the empty table, no header rows and extra header rows', function(assert) {
    $(function() {
        $('#test-table').html('');

        var resultStr = $('#test-table').TableCSVExport({
            header:[],
            columns:['Name','Sat','Sun'],
            extraHeader: '',
            extraData:['zwi"ck','markatto','bcsquire','ksingri'],
            insertBefore: "Name",
            delivery: 'value'
        });

        resultStr = resultStr.replace(/\\/g, '').replace(/"/g, '');

        assert.ok(true, 'assert is doing export and download csv with empty table...');
        assert.equal(resultStr.length, 0, 'the result string expected the empty string');
    });
});

/*
QUnit.test('test table2CSV', function(assert) {
    $(function() {
        var resultStr = $('#test-table').table2CSV({
            header:['Name','Mon','Tue','Wed','Thr','Fri','Sat','Sun'],
            delivery:'popup'
        });
    });
});
*/
