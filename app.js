const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const homeRouter = require('./lib/modules/home/home');
const loginRouter = require('./lib/modules/login/login');
const profileRouter = require('./lib/modules/profile/profile');
const taskMangeRouter = require('./lib/modules/task_mangement/task_management');
const teamColabRouter = require('./lib/modules/team_colab/team_colab');

app.use('/api',homeRouter);
app.use('/api',loginRouter);
app.use('/api',profileRouter);
app.use('/api',taskMangeRouter);
app.use('/api',teamColabRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
