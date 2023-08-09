export const gtag_report_conversion = (): void | boolean => {
  gtag("event", "conversion", {
    send_to: `AW-11123792459/PjEWCM-Jgs4YEMu0nrgp`,
  });
  return false;
};
