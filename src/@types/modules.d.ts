type CustomEnvVars = 'REACT_APP_BASE_URL';

type ExtendedProcessEnv = {
  [key in CustomEnvVars]: string;
};

declare namespace NodeJS {
  export interface ProcessEnv extends ExtendedProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
