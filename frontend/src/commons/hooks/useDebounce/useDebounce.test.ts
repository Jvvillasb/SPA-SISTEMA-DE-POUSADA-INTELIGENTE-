import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from './useDebounce';
import * as React from 'react';

jest.useFakeTimers();

describe('useDebounce', () => {
    let useRefSpy: jest.SpyInstance;

    beforeEach(() => {

        useRefSpy = jest.spyOn(React, 'useRef');
    });

    afterEach(() => {

        useRefSpy.mockRestore();
    });

    it('should debounce function calls', () => {
        const fn = jest.fn();
        const delay = 500;


        useRefSpy.mockReturnValue({ current: null });

        const { result } = renderHook(() => {
            return useDebounce(fn, delay);
        });

        act(() => {
            result.current();
            jest.advanceTimersByTime(delay / 2);
            result.current();
        });

        jest.advanceTimersByTime(delay);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    afterAll(() => {
        jest.useRealTimers();
    });
});