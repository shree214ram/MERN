import XlsxPopulate from 'xlsx-populate';
import _map from 'lodash/map';
import moment from 'moment';

export function populateXlsxReport(req, res, next) {
    const pivotData = req.body.excelData;
    const randId = req.body.id;
    try {
        XlsxPopulate.fromFileAsync('../mern/assets/template/Oversight_Report.xlsx')
            .then(workbook => {
                let cellCount = 2;
                if (pivotData.length) {
                    _map(pivotData, data => {
                        workbook.sheet('Data_View').cell(`A${cellCount}`).value(`${data.Expr1}`);
                        workbook.sheet('Data_View').cell(`B${cellCount}`).value(`${data.Situation_Name}`);
                        workbook.sheet('Data_View').cell(`C${cellCount}`).value(`${moment(data.End_Date_Of_Assignment).format('DD-MMM-YYYY')}`);
                        workbook.sheet('Data_View').cell(`D${cellCount}`).value(`${moment(data.Start_Date_Of_Assignment).format('DD-MMM-YYYY')}`);
                        workbook.sheet('Data_View').cell(`E${cellCount}`).value(`${moment(data.Period_Covered_Start).format('DD-MMM-YYYY')}`);
                        workbook.sheet('Data_View').cell(`F${cellCount}`).value(`${moment(data.Period_Covered_End).format('DD-MMM-YYYY')}`);
                        workbook.sheet('Data_View').cell(`G${cellCount}`).value(`${moment(data.Response_Deadline).format('DD-MMM-YYYY')}`);
                        workbook.sheet('Data_View').cell(`H${cellCount}`).value(`${moment(data.Act_Resp_Date).format('DD-MMM-YYYY')}`);
                        workbook.sheet('Data_View').cell(`I${cellCount}`).value(`${data.Coverege_Id}`);
                        workbook.sheet('Data_View').cell(`J${cellCount}`).value(`${data.Coverege}`);
                        workbook.sheet('Data_View').cell(`K${cellCount}`).value(`${data.Report_Number}`);
                        workbook.sheet('Data_View').cell(`L${cellCount}`).value(`${data.Date_Of_Report_Issuance}`);
                        workbook.sheet('Data_View').cell(`M${cellCount}`).value(`${data.Report_Stage}`);
                        workbook.sheet('Data_View').cell(`N${cellCount}`).value(`${data.Oversight_Unit_Id}`);
                        workbook.sheet('Data_View').cell(`O${cellCount}`).value(`${data.Oversight_Unit}`);
                        workbook.sheet('Data_View').cell(`P${cellCount}`).value(`${data.Control_Id}`);
                        workbook.sheet('Data_View').cell(`Q${cellCount}`).value(`${data.Operation_Name}`);
                        workbook.sheet('Data_View').cell(`R${cellCount}`).value(`${data.Assignement_Type}`);
                        workbook.sheet('Data_View').cell(`S${cellCount}`).value(`${data.Overseen_Party}`);
                        workbook.sheet('Data_View').cell(`T${cellCount}`).value(`${data.Lead_Oversight_Officers_Id}`);
                        workbook.sheet('Data_View').cell(`U${cellCount}`).value(`${data.Imp_Id}`);
                        workbook.sheet('Data_View').cell(`V${cellCount}`).value(`${data.Status}`);
                        workbook.sheet('Data_View').cell(`W${cellCount}`).value(`${data.APPLICABLE_TO_BOA_No}`);
                        cellCount += 1;
                    });
                    console.log('Pivot Data ---- success');
                }
                // Write to file.
                workbook.toFileAsync(`../mern/assets/template/xlsTemp/Oversight_Report_${randId}.xlsx`);
                return workbook.outputAsync();
            }).then(data => {
                console.log('Generating excel process ----- Completed');
                res.json({
                    isPivotReportPopulated: true
                });
            }).catch(next => {
                console.log('Generating excel process ----- failed', next);
                res.json({
                    isPivotReportPopulated: false,
                    Error: next
                });
            }) ;

    } catch (e) {
        console.log('Generating excel process ----- Failed');
    }
}
