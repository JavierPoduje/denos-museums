import { createHash } from "http://deno.land/std@0.83.0/hash/mod.ts";
import { encodeToString } from "http://deno.land/std@0.83.0/encoding/hex.ts";

export const hashWithSalt = (password: string, salt: string) => {
  const hash = createHash("sha512").update(`${password}${salt}`).toString();
  return hash;
};

export const generateSalt = () => {
  const arr = new Uint8Array(64);
  crypto.getRandomValues(arr);
  return encodeToString(arr);
};
