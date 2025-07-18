# User
(*user*)

## Overview

Operations about user

### Available Operations

* [createUser](#createuser) - Create user
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [getUserByName](#getuserbyname) - Get user by user name
* [updateUser](#updateuser) - Update user
* [deleteUser](#deleteuser) - Delete user

## createUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const result = await rails.user.createUser({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userCreateUser } from "rails/funcs/userCreateUser.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userCreateUser(rails, {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCreateUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.User](../../models/user.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RailsDefaultError | 4XX, 5XX                 | \*/\*                    |

## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const result = await rails.user.createUsersWithListInput([
    {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userCreateUsersWithListInput } from "rails/funcs/userCreateUsersWithListInput.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userCreateUsersWithListInput(rails, [
    {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userCreateUsersWithListInput failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.User[]](../../models/.md)                                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RailsDefaultError | 4XX, 5XX                 | \*/\*                    |

## loginUser

Logs user into the system

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const result = await rails.user.loginUser();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userLoginUser } from "rails/funcs/userLoginUser.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userLoginUser(rails);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userLoginUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.RailsDefaultError    | 4XX, 5XX                    | \*/\*                       |

## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  await rails.user.logoutUser();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userLogoutUser } from "rails/funcs/userLogoutUser.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userLogoutUser(rails);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("userLogoutUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RailsDefaultError | 4XX, 5XX                 | \*/\*                    |

## getUserByName

Get user by user name

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const result = await rails.user.getUserByName({
    username: "Edyth10",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userGetUserByName } from "rails/funcs/userGetUserByName.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userGetUserByName(rails, {
    username: "Edyth10",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userGetUserByName failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.RailsDefaultError    | 4XX, 5XX                    | \*/\*                       |

## updateUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  await rails.user.updateUser({
    username: "Alison.Cassin",
    user: {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userUpdateUser } from "rails/funcs/userUpdateUser.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userUpdateUser(rails, {
    username: "Alison.Cassin",
    user: {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("userUpdateUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.RailsDefaultError | 4XX, 5XX                 | \*/\*                    |

## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Rails } from "rails";

const rails = new Rails({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const result = await rails.user.deleteUser({
    username: "Rita_Schuppe",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RailsCore } from "rails/core.js";
import { userDeleteUser } from "rails/funcs/userDeleteUser.js";

// Use `RailsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const rails = new RailsCore({
  apiKey: process.env["RAILS_API_KEY"] ?? "",
});

async function run() {
  const res = await userDeleteUser(rails, {
    username: "Rita_Schuppe",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("userDeleteUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.User](../../models/user.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.RailsDefaultError    | 4XX, 5XX                    | \*/\*                       |