<!-- Start SDK Example Usage [usage] -->
```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const result = await rails.pet.updatePet({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value 1>",
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->