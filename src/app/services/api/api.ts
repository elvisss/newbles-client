export const endpoints = {
    atrapaniebla: {
        todo: () => `/atrapaniebla`,
        one: (idAtrapaniebla: string) => `/atrapaniebla/${idAtrapaniebla}`,
    },
    dispositivo: {
        todo: () => `/dispositivo`,
        one: (idDispositivo: string) => `/dispositivo/${idDispositivo}`,
        catacion: () => `/dispositivo_catacion_agua`,
    },
    auth: {
        login: () => `/login`
    }
};