const express = require ("express");
const { createTodo, updateTodo } = require("./types");
const {todo} = require ("./db")
const cors = require ("cors")
const app = express();

app.use(express.json());

app.use(cors());

app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsepayload = createTodo.safeParse(createPayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false
    })

    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsepayload = updatePayload.safeParse(updatePayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg: "incorrect inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true})
        res.json({
            msg: "todo updated"
        })


})

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});