import { useState, useEffect,useMemo } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function useTimer(deadline) {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [timeSpan, setTimeSpan] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTimeSpan(parsedDeadline - Date.now()),
            SECOND,
        );

        return () => clearInterval(interval);
    }, [parsedDeadline]);

  return {
    days: Math.floor(timeSpan / DAY),
    hours: Math.floor((timeSpan / HOUR) % 24),
    minutes: Math.floor((timeSpan / MINUTE) % 60),
    seconds: Math.floor((timeSpan / SECOND) % 60)
  };
}
