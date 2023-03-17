function onFormSubmit(e){
  Logger.log('Submitted Again');
  Logger.log(e);
  Logger.log('Group '+e.namedValues['Select Group']);
  Logger.log('Group from Array '+e.values[3]);
  sendHTMLEmail(e.values);
}
function test1(){
  var array = ['5/31/2018 21:46:19', 'gappscourses@gmail.com', 'John', 'group 1', 'Yes please send me emails']; 
  sendHTMLEmail(array);
}
function sendHTMLEmail(data){
  Logger.log(data);
  var emailHTML = HtmlService.createHtmlOutputFromFile('email').getContent();
  emailHTML = emailHTML.replace('#DATE',data[0]);
  emailHTML = emailHTML.replace('#GROUP',data[3]);
  emailHTML = emailHTML.replace('#NAME',data[2]);
  emailHTML = emailHTML.replace('#MESSAGE',data[4]);
  MailApp.sendEmail(data[1], 'subject', '',{
    htmlBody:emailHTML 
  });
  
}
//{authMode=FULL, 
//values=[5/31/2018 21:38:57, gappscourses@gmail.com, Laurence, group 1, ], 
//namedValues={Select Group=[group 1], Timestamp=[5/31/2018 21:38:57], Name Full Name=[Laurence], Email Address=[gappscourses@gmail.com], Optin for emails from me=[]}, 
//range=Range, source=Spreadsheet, triggerUid=26177456}
function sendHTMLEmail2(data){
  Logger.log(data);
  MailApp.sendEmail(data[1], 'subject', 'body group:'+data[3]);
  
}
