
export type TokenData = {
    id: number;
    name: string;
  };
  
  declare global {
    // Express
    namespace Express {
      export interface Request {
        tokenData: TokenData;
      }
    }
  }