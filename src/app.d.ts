// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    interface Platform {
        env: {
            COUNTER: DurableObjectNamespace;
        };
        context: {
            waitUntil(promise: Promise<any>): void;
        };
        caches: CacheStorage & {default: Cache};
    }

    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
    export * from '@fortawesome/pro-solid-svg-icons';
}

export {};

