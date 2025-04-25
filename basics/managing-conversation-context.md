# Managing Conversation Context in the API

## uuidChat

When a user executes a function, they can choose to pass a uuidChat.

The uuidChat allows preserving the conversation context between the user and the AI.

From a uuidChat, one can retrieve all executions of a function:

- the input sent by the user
- the result returned by the function

When an existing uuidChat is passed during the execution of a function, the function can remember the history of all executions and thus offer a contextualized response.

### Examples

Health Advisor Function
Step 1: The user executes the function without a uuidChat

1. The user executes the function without a uuidChat
2. The user asks for advice on medical results
3. The function responds and saves a uuidChat

Step 2: The user executes the function with the uuidChat

1. Thanks to the previous uuidChat, the function can remember the conversation history and thus offer a contextualized response.

### API

### API Call Example

```js
{
   "prompt": "Diabete male 30 years treatment",
   "uuidChat": "123e4567-e89b-12d3-a456-426614174012"
}

```

#### API Response Example

```js

{
    "success": true,
    "id": "wor-70bdadc1df",
    "date": "2025-04-25T12:47:12+00:00",
    "typeOutput": "markup",
    "result": "Based on the patient record provided, here is a structured medical analysis and treatment approach for this 30-year-old male [...]",
    "uuidChat": "123e4567-e89b-12d3-a456-426614174012"
}
```
