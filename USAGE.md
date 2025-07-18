<!-- Start SDK Example Usage [usage] -->
```typescript
import { Rails } from "rails";

const rails = new Rails();

async function run() {
  const result = await rails.postLedgerSettle();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->