const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // 모든 도메인에서의 요청 허용 (테스트용)
app.use(express.json());

app.get('/api/lotto', (req, res) => {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);
    res.json({ numbers });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
