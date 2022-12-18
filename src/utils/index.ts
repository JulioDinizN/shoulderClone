import { userPhoneLanguage } from "../localization/utils";

function transformLanguageToCurrency(language: string): string {
    const tableOfCurrencyToLanguage = {
      'pt-BR': 'BRL',
      'en-US': 'USD',
    };
  
    return (
      tableOfCurrencyToLanguage[
        language as keyof typeof tableOfCurrencyToLanguage
      ] || 'BRL'
    );
  }

export function formatCurrency(numberToFormat: number) {
  const userLanguageSettings = userPhoneLanguage.detect();

  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: transformLanguageToCurrency(userLanguageSettings),
  }).format(numberToFormat);
}
