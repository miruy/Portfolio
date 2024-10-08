'use client';

import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ModalProvider} from '@/context/ModalContext';
import {TabProvider} from "@/context/TabContext";

interface ClientProvidersProps {
    children: ReactNode;
}

const ClientProviders = ({children}: ClientProvidersProps) => {

    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                    },
                },
            }),
    )

    return (
        <QueryClientProvider client={queryClient}>
            <TabProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </TabProvider>
        </QueryClientProvider>
    )

};

export default ClientProviders;