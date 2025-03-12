
export const startCountdown = (setCounter: React.Dispatch<React.SetStateAction<number>>) => {
    setCounter(60);
    let interval = setInterval(() => {
        setCounter((prev) => {
            if (prev <= 1) {
                clearInterval(interval);
                return 0;
            }
            return prev - 1;
        });
    }, 1000);
};
