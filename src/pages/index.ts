export enum SitePages {
  Splash = "SplashPage",
  AcceptanceStatement = "AcceptanceStatementPage",
  BlankPage = "BlankPage",
  Confirmation = "ConfirmationPage",
  EILogin = "LoginPage",
  EiReporting = "EiReportingPage",
  Home = "HomePage",
  IssueWithReport = "IssueWithReportPage",
  Questionaire = "QuestionairePage",
  Questionaire2 = "Questionaire_2Page",
  Questionaire3 = "Questionaire_3Page",
  Questionaire5 = "Questionaire_5Page",
  Questionaire5a = "Questionnaire_5aPage",
  Questionnaire5b = "Questionnaire_5bPage",
  Questionnaire5c = "Questionnaire_5cPage",
  Questionnaire5d = "Questionnaire_5dPage",
  Questionaire6 = "Questionaire_6Page",
  Questionaire7 = "Questionaire_7Page",
  Questionnaire7a = "Questionnaire_7aPage",
  Questionnaire7b = "Questionnaire_7bPage",
  Settings = "SettingsPage",
  Support = "SupportPage",
  LoginFalied = "LoginFailedPage",
  HelpModal = "HelpModalPage",
  Submission = "SubmissionPage",
  Locations = "LocationsPage",
  eula = "EulaPage"
}

// The page the user lands on after opening the app and without a session
export const FirstRunPage = SitePages.Splash;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = SitePages.Home;
