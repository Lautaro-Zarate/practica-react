import { useState } from "react";

export const useCount = (n = 0) => {
    const [contador, setContador] = useState(n);

    const suma = () => setContador(n => n + 1)
    const resta = () => setContador(n => n - 1)

    return [contador, suma, resta];
}