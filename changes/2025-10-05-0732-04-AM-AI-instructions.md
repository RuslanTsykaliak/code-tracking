- Write prompt two times. First time, to outline the i

now create test cases to check: if custom text aries cleares aften the button generate prompt clicked as it done with default text arieas. if text visible in past entried for auth users

make sure that these test failes becase I manually check as it doesn't work

# Vibe Coding 

## 1: Proposing solutions without confirming the need

Analazie a tested file (component) before cheking the reason for failing test case.

Always declare types. Don't use any type.

Never remove commented-out code.

The AI helper tends to provide a solution first, without thinking if that solution is needed in the first place.

For example, when I asked the AI to propose 4 tasks, I meant for it to recommend them to me so I could decide. I didn't mean for the AI to decide on the tasks and then take action on them without my confirmation.

The desired behavior is for the AI to propose solutions or suggestions and wait for my approval or feedback before taking any action.

## Test-Driven Development (TDD)

Always follow Test-Driven Development (TDD) principles:
1.  **Write a failing test:** Create a test that expects the new behavior and fails because the current implementation doesn't support it.
2.  **Make the test pass:** Modify the code to implement the new behavior, making the test pass.
3.  **Refactor:** Clean up the code.

Never remove test cases.
Never remove test files.

## Task Completion

A task is never complete until the user says so. By default, assume that the solution is not correct until the user has confirmed that it is.

## Chat History Persistence

- Chat history is temporary and not persistent across sessions.