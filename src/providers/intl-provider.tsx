'use client';

import { NextIntlClientProvider } from 'next-intl';

export function IntlProvider({
    children,
    locale,
    messages
}: React.PropsWithChildren<{
    locale: string;
    messages: Record<string, string>;
}>) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
