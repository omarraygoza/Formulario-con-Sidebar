function onOpen(){
  let ui = SpreadsheetApp.getUi();
  ui.createMenu("Menu Lateral")
  .addItem("Altas", "showSideBarAltas")
  .addItem("Bajas", "bajas")
  .addItem("Actualizar", "actualizar")
  .addToUi();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function showSideBarAltas() {
  var html = HtmlService.createTemplateFromFile('altas').evaluate().setTitle('Altas');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function altas(e){
  var ss = SpreadsheetApp.getActive().getSheetByName('Hoja 1');
  let datos= JSON.parse(e);
  ss.appendRow([datos.id,datos.nombre,datos.telefono,datos.email]);
}
