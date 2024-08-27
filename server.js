const express = require('express');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router')
const productsRouter = require('./routes/products.router')
const path = require('path')
const {default:mongoose} = require('mongoose') 


const PORT = 3000;

//express 어플 생성
const app = express();
app.use(express.json());

app.use('/users', usersRouter);

app.use('/posts', postsRouter);

app.use('/products', productsRouter);

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use((error,req, res, next) => {
  res.json({message: error.message})
})

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))


mongoose.connect(`mongodb+srv://asz1nii0:02aiiaiday!@express-cluster-2.kg1ay.mongodb.net/`)
.then(() => console.log('mongodb conneted'))
.catch(error => console.log(error))

//해당 경로로 req 오면 res.send를 통해 결과값 전달
app.get('/', (req, res) => {
  res.send('Hello. world!')
})

app.get('/', (req, res) => {
  res.render('index', {
    imageTitle: "It is a say Cheese"
  })
})


//미들웨어 등록부분
// app.use((req, res, next) => {
//   const start = Date.now();
//   console.log(`${req.method} ${req.url}`);
//   next();
//   const diffTime = Data.now() - start;
//   console.log(`end: ${req.method} ${req.url} ${diffTime}`);
// })





//전달해준 포트에서 서버 실행
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})

