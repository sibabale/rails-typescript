/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the rails SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx postLedgerSettle.ts
 */

import { Rails } from "rails";

const rails = new Rails();

async function main() {
  const result = await rails.postLedgerSettle();

  console.log(result);
}

main().catch(console.error);
