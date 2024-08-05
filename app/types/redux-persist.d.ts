// types/redux-persist.d.ts
declare module "redux-persist/lib/storage" {
  import { Storage } from "redux-persist";
  const storage: Storage;
  export default storage;
}
