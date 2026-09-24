function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index.html')
      .setTitle('CRM Masontsika V12');
}

function saveData(formData) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // Ampidiro eto ny logika handraketana ny angona araka ny Cahier des Charges V12
  return "Voatahiry soa aman-tsara!";
}
