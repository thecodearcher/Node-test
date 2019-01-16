const jwt = require('jsonwebtoken');

let countries = [
    'Nigeria',
    'Ghana'
]

exports.login = (req, res) => {
    const username = "admin";
    const password = "admin";

    const body = req.body;
    if (body.username === username && body.password === password) {
        const token = jwt.sign({ user: { username } }, 'c2VjcmV0bm9kZXRlc3Q=', { expiresIn: '1hr' });
        return res.json({
            status: true,
            message: 'Login successful!',
            data: {
                token
            }
        });
    }

    return res.status(401).json({
        status: false,
        message: 'Invalid username or password..',
    });
}

exports.getCountries = (req, res) => {
    res.json({
        status: true,
        data: countries
    });
}

exports.putCountries = (req, res) => {
    const body = req.body;
    const country = body.country;
    if (country && country.trim().length) {
        countries.push(country);
        return res.json({
            status: true,
            message: `${body.country} Added to countries list.`,
            data: countries,

        });
    }
    return res.status(400).json({
        status: false,
        message: `Country can't be empty`,
    });
}

exports.deleteCountry = (req, res) => {
    const body = req.body;
    const country = body.country;
    if (country && country.trim().length) {
        countries = countries.filter(res => res.toLowerCase() !== country.toLowerCase());
        return res.json({
            status: true,
            message: `${body.country} Deleted from countries list.`,
            data: countries,

        });
    }
    return res.status(400).json({
        status: false,
        message: `Country can't be empty`,
    });
};