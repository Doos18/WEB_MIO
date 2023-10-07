function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      { pageLanguage: 'es', includedLanguages: 'en,fr,de,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
      'google_translate_element'
  );
}