import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["en", "te", "hi", "kn"] as const;
const defaultLocale = "en";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  const locale = cookieStore.get("NEXT_LOCALE")?.value || defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
