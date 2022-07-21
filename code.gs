function getJob(jobID) {
  return SpreadsheetApp.openById('<< GOOGLE SHEET ID >>')
    .getSheetByName('jobs').getDataRange().getDisplayValues()
    .filter(row => row[0] == jobID)
    .map(row => { return { 'jobID': row[0], 'subject': row[1], 'date': row[2], 'status': row[4], } });
}

function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('Job Tacking')
    .addMetaTag('viewport', 'width=device-width , initial-scale=1, minimum-scale=0, maximum-scale=0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}