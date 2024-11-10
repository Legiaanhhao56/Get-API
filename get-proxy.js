const axios = require('axios');

module.exports = async (req, res) => {
    try {
        // Thay thế proxy với thông tin proxy bạn đã cung cấp
        const proxy = {
            ip: "173.211.0.148",
            port: "6641",
            username: "uerzhyea", // Thêm thông tin username
            password: "2df6k0mp23rj", // Thêm thông tin password
            protocol: "http"
        };

        // Trả về proxy cho client
        res.status(200).json({ proxy: proxy });
    } catch (error) {
        res.status(500).json({ error: 'Không thể lấy proxy' });
    }
};