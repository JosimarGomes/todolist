// eslint-disable-next-line no-unused-vars
import Express from 'express';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/index.js';

/**
 * Error Middleware.
 * @param {Error} error
 * @param {Express.Request} _request
 * @param {Express.Response} response
 * @param {Express.NextFunction} next
 */
export default function ErrorMiddleware(error, _request, response, next) {
    if (!error) {
        return next();
    }

    // eslint-disable-next-line no-console
    console.error(error);

    const errorPayload = {
        message: error.message,
    };

    if (error instanceof BadRequestError) {
        return response.status(400).json(errorPayload);
    }

    if (error instanceof NotFoundError) {
        return response.status(404).json(errorPayload);
    }

    if (error instanceof UnauthorizedError) {
        return response.status(401).json(errorPayload);
    }

    return response.status(500).json(errorPayload);
}
