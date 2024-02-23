import './bootstrap.js';
import '../css/app.css';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {NextUIProvider} from "@nextui-org/react";
import {StrictMode} from "react";

const appName = import.meta.env.VITE_APP_NAME || 'Informática Digital';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <NextUIProvider>
                    <App {...props} />
                </NextUIProvider>
            </StrictMode>
        );
    },
    progress: {
        color: '#1284ff',
        delay: 250,
    },
});
