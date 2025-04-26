# Managing Conversation Context via API

## Introduction

Maintaining conversational context is crucial for creating seamless and intelligent interactions within API-driven applications. This document outlines how the `__uuidChat` parameter facilitates context management, enabling functions to recall previous interactions and provide relevant, contextualized responses.

## The `__uuidChat` Parameter

When invoking a function via the API, you have the option to include a `__uuidChat` parameter. This unique identifier links multiple function executions together, forming a coherent conversation history.

**Key Functions:**

- **Context Preservation:** `__uuidChat` allows the system to store and retrieve the history of interactions associated with a specific conversation thread. This history includes user inputs and the corresponding function outputs for each execution within that thread.
- **Contextualized Responses:** By providing an existing `__uuidChat` with a function call, the function gains access to the preceding conversation history. This enables it to understand the context and deliver responses that are relevant to the ongoing dialogue, rather than treating each call as an isolated event.

## Usage Scenario: Health Advisor Function

Consider a Health Advisor function designed to provide medical information based on user queries.

**Initial Interaction (Without `__uuidChat`):**

1.  A user invokes the Health Advisor function for the first time, asking for advice on medical results (e.g., "What are common treatments for type 2 diabetes in a 30-year-old male?").
2.  Since no `__uuidChat` is provided, the function processes this as a new conversation.
3.  The function returns the requested information and, importantly, includes a newly generated `__uuidChat` in its response. This `__uuidChat` now represents the unique identifier for this nascent conversation.

**Follow-up Interaction (With `__uuidChat`):**

1.  The user has a subsequent question related to the initial query (e.g., "What are the potential side effects of metformin?").
2.  This time, the user includes the `__uuidChat` received in the previous response when calling the function.
3.  Leveraging this `__uuidChat`, the function accesses the conversation history. It understands the context (a 30-year-old male patient being treated for diabetes) and provides a tailored response regarding metformin's side effects relevant to this context.

## API Integration

### API Request Example

To associate a function call with an existing conversation, include the `__uuidChat` in the request body:

```json
{
  "prompt": "Diabete male 30 years treatment",
  "__uuidChat": "123e4567-e89b-12d3-a456-426614174012"
}
```

- `prompt`: The user's input or query for the function.
- `__uuidChat`: The unique identifier for the ongoing conversation thread.

### API Response Example

The function's response will include the result and reiterate the `__uuidChat` to facilitate further interaction:

```json
{
  "success": true,
  "id": "wor-70bdadc1df",
  "date": "2025-04-25T12:47:12+00:00",
  "typeOutput": "markup",
  "result": "Based on the patient record provided, here is a structured medical analysis and treatment approach for this 30-year-old male [...]",
  "__uuidChat": "123e4567-e89b-12d3-a456-426614174012"
}
```

- `result`: The function's output, potentially contextualized by the conversation history.
- `__uuidChat`: The identifier for the conversation, returned for potential use in subsequent calls.

## Error Handling

If an invalid `__uuidChat` is provided, or if you do not have the necessary permissions to access it, the API will return an HTTP 400 error. The body of the error response will look like this:

```json
{
  "success": false,
  "message": "Parameters are missing or invalids in your request.",
  "parameters": {
    "invalidParameter": "__uuidChat",
    "message": "This __uuidChat is not valid or you don't have access to it."
  }
}
```

This indicates that the specific `__uuidChat` used in the request could not be processed correctly. Ensure that the `__uuidChat` is correct and corresponds to a conversation you have access to.
