module.exports = {
    preset: 'ts-jest', // Usa ts-jest para TypeScript
    testEnvironment: 'jsdom', // Usa jsdom para simular un entorno de navegador
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Opcional: para manejar alias de importación
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Archivo de configuración adicional
};