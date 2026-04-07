class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = "" // error stack
    ) {
        super(message).  //override - super we use normally
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false,
        this.errors = errors

        // stake is exist or not
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}