import { useRef } from 'react';

export function useDebounce<F extends (...args: never[]) => void>(fn: F, delay: number) {
    const timeoutRef = useRef<number | null>(null);

    function debouncedFn(...args: Parameters<F>) {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
            fn(...args);
        }, delay);
    }

    return debouncedFn;
}
