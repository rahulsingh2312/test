class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong.",
        errors = [],
        stack = ""
    ) {
        super(message); // Call the constructor of the parent class (Error) with the provided message.

        // Assign properties to the instance of the ApiError class.
        this.statusCode = statusCode; // HTTP status code associated with the error.
        this.data = null; // A data property (possibly to store additional error data).
        this.message = message; // The error message.
        this.success = false; // A flag indicating the request was not successful.
        this.errors = errors; // An array to store additional error details.

        if (stack) {
            this.stack = stack; // Set the stack trace if provided.
        } else {
            Error.captureStackTrace(this, this.constructor); // Generate a stack trace if not provided.
        }
    }
}

export { ApiError }; // Export the ApiError class for use in other parts of the codebase.
