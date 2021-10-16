/* eslint-disable no-undef */
const allowedDomains = process.env.ALLOWED_CORS || '*';
const whitelist = allowedDomains.split(';');

const corsOptions = {
    origin(origin, callback) {
        if (whitelist.indexOf('*') !== -1) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) !== -1) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'));
    },
};

export default corsOptions;
